// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlackAlertNotifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#api_url SlackAlertNotifier#api_url}
  */
  readonly apiUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#basic_auth_password SlackAlertNotifier#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#basic_auth_username SlackAlertNotifier#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#bearer_token SlackAlertNotifier#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#callback_id SlackAlertNotifier#callback_id}
  */
  readonly callbackId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#channel SlackAlertNotifier#channel}
  */
  readonly channel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#color SlackAlertNotifier#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#fallback SlackAlertNotifier#fallback}
  */
  readonly fallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#footer SlackAlertNotifier#footer}
  */
  readonly footer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#icon_emoji SlackAlertNotifier#icon_emoji}
  */
  readonly iconEmoji?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#icon_url SlackAlertNotifier#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#id SlackAlertNotifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#image_url SlackAlertNotifier#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#link_names SlackAlertNotifier#link_names}
  */
  readonly linkNames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#mrkdwn_in SlackAlertNotifier#mrkdwn_in}
  */
  readonly mrkdwnIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#name SlackAlertNotifier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#pretext SlackAlertNotifier#pretext}
  */
  readonly pretext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#proxy_url SlackAlertNotifier#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#send_resolved SlackAlertNotifier#send_resolved}
  */
  readonly sendResolved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#short_fields SlackAlertNotifier#short_fields}
  */
  readonly shortFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#slug SlackAlertNotifier#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#text SlackAlertNotifier#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#thumb_url SlackAlertNotifier#thumb_url}
  */
  readonly thumbUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#title SlackAlertNotifier#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#title_link SlackAlertNotifier#title_link}
  */
  readonly titleLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#tls_insecure_skip_verify SlackAlertNotifier#tls_insecure_skip_verify}
  */
  readonly tlsInsecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#username SlackAlertNotifier#username}
  */
  readonly username?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#action SlackAlertNotifier#action}
  */
  readonly action?: SlackAlertNotifierAction[] | cdktf.IResolvable;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#fields SlackAlertNotifier#fields}
  */
  readonly fields?: SlackAlertNotifierFields[] | cdktf.IResolvable;
}
export interface SlackAlertNotifierAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#action_confirm_dismiss_text SlackAlertNotifier#action_confirm_dismiss_text}
  */
  readonly actionConfirmDismissText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#action_confirm_ok_text SlackAlertNotifier#action_confirm_ok_text}
  */
  readonly actionConfirmOkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#action_confirm_text SlackAlertNotifier#action_confirm_text}
  */
  readonly actionConfirmText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#action_confirm_tile SlackAlertNotifier#action_confirm_tile}
  */
  readonly actionConfirmTile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#name SlackAlertNotifier#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#style SlackAlertNotifier#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#text SlackAlertNotifier#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#type SlackAlertNotifier#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#url SlackAlertNotifier#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#value SlackAlertNotifier#value}
  */
  readonly value?: string;
}

export function slackAlertNotifierActionToTerraform(struct?: SlackAlertNotifierAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_confirm_dismiss_text: cdktf.stringToTerraform(struct!.actionConfirmDismissText),
    action_confirm_ok_text: cdktf.stringToTerraform(struct!.actionConfirmOkText),
    action_confirm_text: cdktf.stringToTerraform(struct!.actionConfirmText),
    action_confirm_tile: cdktf.stringToTerraform(struct!.actionConfirmTile),
    name: cdktf.stringToTerraform(struct!.name),
    style: cdktf.stringToTerraform(struct!.style),
    text: cdktf.stringToTerraform(struct!.text),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function slackAlertNotifierActionToHclTerraform(struct?: SlackAlertNotifierAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_confirm_dismiss_text: {
      value: cdktf.stringToHclTerraform(struct!.actionConfirmDismissText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_confirm_ok_text: {
      value: cdktf.stringToHclTerraform(struct!.actionConfirmOkText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_confirm_text: {
      value: cdktf.stringToHclTerraform(struct!.actionConfirmText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_confirm_tile: {
      value: cdktf.stringToHclTerraform(struct!.actionConfirmTile),
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
    style: {
      value: cdktf.stringToHclTerraform(struct!.style),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class SlackAlertNotifierActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlackAlertNotifierAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionConfirmDismissText !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionConfirmDismissText = this._actionConfirmDismissText;
    }
    if (this._actionConfirmOkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionConfirmOkText = this._actionConfirmOkText;
    }
    if (this._actionConfirmText !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionConfirmText = this._actionConfirmText;
    }
    if (this._actionConfirmTile !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionConfirmTile = this._actionConfirmTile;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlackAlertNotifierAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionConfirmDismissText = undefined;
      this._actionConfirmOkText = undefined;
      this._actionConfirmText = undefined;
      this._actionConfirmTile = undefined;
      this._name = undefined;
      this._style = undefined;
      this._text = undefined;
      this._type = undefined;
      this._url = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionConfirmDismissText = value.actionConfirmDismissText;
      this._actionConfirmOkText = value.actionConfirmOkText;
      this._actionConfirmText = value.actionConfirmText;
      this._actionConfirmTile = value.actionConfirmTile;
      this._name = value.name;
      this._style = value.style;
      this._text = value.text;
      this._type = value.type;
      this._url = value.url;
      this._value = value.value;
    }
  }

  // action_confirm_dismiss_text - computed: false, optional: true, required: false
  private _actionConfirmDismissText?: string; 
  public get actionConfirmDismissText() {
    return this.getStringAttribute('action_confirm_dismiss_text');
  }
  public set actionConfirmDismissText(value: string) {
    this._actionConfirmDismissText = value;
  }
  public resetActionConfirmDismissText() {
    this._actionConfirmDismissText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfirmDismissTextInput() {
    return this._actionConfirmDismissText;
  }

  // action_confirm_ok_text - computed: false, optional: true, required: false
  private _actionConfirmOkText?: string; 
  public get actionConfirmOkText() {
    return this.getStringAttribute('action_confirm_ok_text');
  }
  public set actionConfirmOkText(value: string) {
    this._actionConfirmOkText = value;
  }
  public resetActionConfirmOkText() {
    this._actionConfirmOkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfirmOkTextInput() {
    return this._actionConfirmOkText;
  }

  // action_confirm_text - computed: false, optional: true, required: false
  private _actionConfirmText?: string; 
  public get actionConfirmText() {
    return this.getStringAttribute('action_confirm_text');
  }
  public set actionConfirmText(value: string) {
    this._actionConfirmText = value;
  }
  public resetActionConfirmText() {
    this._actionConfirmText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfirmTextInput() {
    return this._actionConfirmText;
  }

  // action_confirm_tile - computed: false, optional: true, required: false
  private _actionConfirmTile?: string; 
  public get actionConfirmTile() {
    return this.getStringAttribute('action_confirm_tile');
  }
  public set actionConfirmTile(value: string) {
    this._actionConfirmTile = value;
  }
  public resetActionConfirmTile() {
    this._actionConfirmTile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfirmTileInput() {
    return this._actionConfirmTile;
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

  // style - computed: false, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SlackAlertNotifierActionList extends cdktf.ComplexList {
  public internalValue? : SlackAlertNotifierAction[] | cdktf.IResolvable

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
  public get(index: number): SlackAlertNotifierActionOutputReference {
    return new SlackAlertNotifierActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlackAlertNotifierFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#short SlackAlertNotifier#short}
  */
  readonly short?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#title SlackAlertNotifier#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#value SlackAlertNotifier#value}
  */
  readonly value?: string;
}

export function slackAlertNotifierFieldsToTerraform(struct?: SlackAlertNotifierFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    short: cdktf.booleanToTerraform(struct!.short),
    title: cdktf.stringToTerraform(struct!.title),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function slackAlertNotifierFieldsToHclTerraform(struct?: SlackAlertNotifierFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    short: {
      value: cdktf.booleanToHclTerraform(struct!.short),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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

export class SlackAlertNotifierFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlackAlertNotifierFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._short !== undefined) {
      hasAnyValues = true;
      internalValueResult.short = this._short;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlackAlertNotifierFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._short = undefined;
      this._title = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._short = value.short;
      this._title = value.title;
      this._value = value.value;
    }
  }

  // short - computed: false, optional: true, required: false
  private _short?: boolean | cdktf.IResolvable; 
  public get short() {
    return this.getBooleanAttribute('short');
  }
  public set short(value: boolean | cdktf.IResolvable) {
    this._short = value;
  }
  public resetShort() {
    this._short = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortInput() {
    return this._short;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SlackAlertNotifierFieldsList extends cdktf.ComplexList {
  public internalValue? : SlackAlertNotifierFields[] | cdktf.IResolvable

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
  public get(index: number): SlackAlertNotifierFieldsOutputReference {
    return new SlackAlertNotifierFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier chronosphere_slack_alert_notifier}
*/
export class SlackAlertNotifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_slack_alert_notifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlackAlertNotifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlackAlertNotifier to import
  * @param importFromId The id of the existing SlackAlertNotifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlackAlertNotifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_slack_alert_notifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/slack_alert_notifier chronosphere_slack_alert_notifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlackAlertNotifierConfig
  */
  public constructor(scope: Construct, id: string, config: SlackAlertNotifierConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_slack_alert_notifier',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiUrl = config.apiUrl;
    this._basicAuthPassword = config.basicAuthPassword;
    this._basicAuthUsername = config.basicAuthUsername;
    this._bearerToken = config.bearerToken;
    this._callbackId = config.callbackId;
    this._channel = config.channel;
    this._color = config.color;
    this._fallback = config.fallback;
    this._footer = config.footer;
    this._iconEmoji = config.iconEmoji;
    this._iconUrl = config.iconUrl;
    this._id = config.id;
    this._imageUrl = config.imageUrl;
    this._linkNames = config.linkNames;
    this._mrkdwnIn = config.mrkdwnIn;
    this._name = config.name;
    this._pretext = config.pretext;
    this._proxyUrl = config.proxyUrl;
    this._sendResolved = config.sendResolved;
    this._shortFields = config.shortFields;
    this._slug = config.slug;
    this._text = config.text;
    this._thumbUrl = config.thumbUrl;
    this._title = config.title;
    this._titleLink = config.titleLink;
    this._tlsInsecureSkipVerify = config.tlsInsecureSkipVerify;
    this._username = config.username;
    this._action.internalValue = config.action;
    this._fields.internalValue = config.fields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // callback_id - computed: false, optional: true, required: false
  private _callbackId?: string; 
  public get callbackId() {
    return this.getStringAttribute('callback_id');
  }
  public set callbackId(value: string) {
    this._callbackId = value;
  }
  public resetCallbackId() {
    this._callbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackIdInput() {
    return this._callbackId;
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback?: string; 
  public get fallback() {
    return this.getStringAttribute('fallback');
  }
  public set fallback(value: string) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // footer - computed: false, optional: true, required: false
  private _footer?: string; 
  public get footer() {
    return this.getStringAttribute('footer');
  }
  public set footer(value: string) {
    this._footer = value;
  }
  public resetFooter() {
    this._footer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer;
  }

  // icon_emoji - computed: false, optional: true, required: false
  private _iconEmoji?: string; 
  public get iconEmoji() {
    return this.getStringAttribute('icon_emoji');
  }
  public set iconEmoji(value: string) {
    this._iconEmoji = value;
  }
  public resetIconEmoji() {
    this._iconEmoji = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconEmojiInput() {
    return this._iconEmoji;
  }

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
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

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // link_names - computed: false, optional: true, required: false
  private _linkNames?: boolean | cdktf.IResolvable; 
  public get linkNames() {
    return this.getBooleanAttribute('link_names');
  }
  public set linkNames(value: boolean | cdktf.IResolvable) {
    this._linkNames = value;
  }
  public resetLinkNames() {
    this._linkNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkNamesInput() {
    return this._linkNames;
  }

  // mrkdwn_in - computed: false, optional: true, required: false
  private _mrkdwnIn?: string[]; 
  public get mrkdwnIn() {
    return this.getListAttribute('mrkdwn_in');
  }
  public set mrkdwnIn(value: string[]) {
    this._mrkdwnIn = value;
  }
  public resetMrkdwnIn() {
    this._mrkdwnIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrkdwnInInput() {
    return this._mrkdwnIn;
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

  // pretext - computed: false, optional: true, required: false
  private _pretext?: string; 
  public get pretext() {
    return this.getStringAttribute('pretext');
  }
  public set pretext(value: string) {
    this._pretext = value;
  }
  public resetPretext() {
    this._pretext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pretextInput() {
    return this._pretext;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // send_resolved - computed: false, optional: true, required: false
  private _sendResolved?: boolean | cdktf.IResolvable; 
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
  public set sendResolved(value: boolean | cdktf.IResolvable) {
    this._sendResolved = value;
  }
  public resetSendResolved() {
    this._sendResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolvedInput() {
    return this._sendResolved;
  }

  // short_fields - computed: false, optional: true, required: false
  private _shortFields?: boolean | cdktf.IResolvable; 
  public get shortFields() {
    return this.getBooleanAttribute('short_fields');
  }
  public set shortFields(value: boolean | cdktf.IResolvable) {
    this._shortFields = value;
  }
  public resetShortFields() {
    this._shortFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortFieldsInput() {
    return this._shortFields;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // thumb_url - computed: false, optional: true, required: false
  private _thumbUrl?: string; 
  public get thumbUrl() {
    return this.getStringAttribute('thumb_url');
  }
  public set thumbUrl(value: string) {
    this._thumbUrl = value;
  }
  public resetThumbUrl() {
    this._thumbUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbUrlInput() {
    return this._thumbUrl;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_link - computed: false, optional: true, required: false
  private _titleLink?: string; 
  public get titleLink() {
    return this.getStringAttribute('title_link');
  }
  public set titleLink(value: string) {
    this._titleLink = value;
  }
  public resetTitleLink() {
    this._titleLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleLinkInput() {
    return this._titleLink;
  }

  // tls_insecure_skip_verify - computed: false, optional: true, required: false
  private _tlsInsecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsInsecureSkipVerify() {
    return this.getBooleanAttribute('tls_insecure_skip_verify');
  }
  public set tlsInsecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._tlsInsecureSkipVerify = value;
  }
  public resetTlsInsecureSkipVerify() {
    this._tlsInsecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureSkipVerifyInput() {
    return this._tlsInsecureSkipVerify;
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

  // action - computed: false, optional: true, required: false
  private _action = new SlackAlertNotifierActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: SlackAlertNotifierAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new SlackAlertNotifierFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: SlackAlertNotifierFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_url: cdktf.stringToTerraform(this._apiUrl),
      basic_auth_password: cdktf.stringToTerraform(this._basicAuthPassword),
      basic_auth_username: cdktf.stringToTerraform(this._basicAuthUsername),
      bearer_token: cdktf.stringToTerraform(this._bearerToken),
      callback_id: cdktf.stringToTerraform(this._callbackId),
      channel: cdktf.stringToTerraform(this._channel),
      color: cdktf.stringToTerraform(this._color),
      fallback: cdktf.stringToTerraform(this._fallback),
      footer: cdktf.stringToTerraform(this._footer),
      icon_emoji: cdktf.stringToTerraform(this._iconEmoji),
      icon_url: cdktf.stringToTerraform(this._iconUrl),
      id: cdktf.stringToTerraform(this._id),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      link_names: cdktf.booleanToTerraform(this._linkNames),
      mrkdwn_in: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mrkdwnIn),
      name: cdktf.stringToTerraform(this._name),
      pretext: cdktf.stringToTerraform(this._pretext),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      send_resolved: cdktf.booleanToTerraform(this._sendResolved),
      short_fields: cdktf.booleanToTerraform(this._shortFields),
      slug: cdktf.stringToTerraform(this._slug),
      text: cdktf.stringToTerraform(this._text),
      thumb_url: cdktf.stringToTerraform(this._thumbUrl),
      title: cdktf.stringToTerraform(this._title),
      title_link: cdktf.stringToTerraform(this._titleLink),
      tls_insecure_skip_verify: cdktf.booleanToTerraform(this._tlsInsecureSkipVerify),
      username: cdktf.stringToTerraform(this._username),
      action: cdktf.listMapper(slackAlertNotifierActionToTerraform, true)(this._action.internalValue),
      fields: cdktf.listMapper(slackAlertNotifierFieldsToTerraform, true)(this._fields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_password: {
        value: cdktf.stringToHclTerraform(this._basicAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bearer_token: {
        value: cdktf.stringToHclTerraform(this._bearerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callback_id: {
        value: cdktf.stringToHclTerraform(this._callbackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback: {
        value: cdktf.stringToHclTerraform(this._fallback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer: {
        value: cdktf.stringToHclTerraform(this._footer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_emoji: {
        value: cdktf.stringToHclTerraform(this._iconEmoji),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_url: {
        value: cdktf.stringToHclTerraform(this._iconUrl),
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
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_names: {
        value: cdktf.booleanToHclTerraform(this._linkNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mrkdwn_in: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mrkdwnIn),
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
      pretext: {
        value: cdktf.stringToHclTerraform(this._pretext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_resolved: {
        value: cdktf.booleanToHclTerraform(this._sendResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      short_fields: {
        value: cdktf.booleanToHclTerraform(this._shortFields),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      text: {
        value: cdktf.stringToHclTerraform(this._text),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thumb_url: {
        value: cdktf.stringToHclTerraform(this._thumbUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title_link: {
        value: cdktf.stringToHclTerraform(this._titleLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(slackAlertNotifierActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlackAlertNotifierActionList",
      },
      fields: {
        value: cdktf.listMapperHcl(slackAlertNotifierFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlackAlertNotifierFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
