// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, this Issue will not be destroyed from your status page if the resource is destroyed in your Terraform configuration. This option is **recommended** for maintaining a history on your status page of past Issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#archive_on_destroy Issue#archive_on_destroy}
  */
  readonly archiveOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * The timestamp at which this Issue began affecting its given Components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#began_at Issue#began_at}
  */
  readonly beganAt?: string;
  /**
  * The initial body text of the issue in raw markdown, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body Issue#body}
  */
  readonly body?: string;
  /**
  * The initial body text of the issue in raw markdown, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body_translations Issue#body_translations}
  */
  readonly bodyTranslations?: { [key: string]: string };
  /**
  * The Components IDs affected by this Issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#component_ids Issue#component_ids}
  */
  readonly componentIds: string[];
  /**
  * The UNIX timestamp at which this Issue stopped affecting its given Components. This field is `null` if it has not ended yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#ended_at Issue#ended_at}
  */
  readonly endedAt?: string;
  /**
  * The initial label applied to the issue. The "current" label of the entire issue may be updated by the labels of Issue Updates, though this must be taken from the latest Update in `updates`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#label Issue#label}
  */
  readonly label?: string;
  /**
  * The URL to an image which will be displayed alongside this issue when shared on social media websites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#open_graph_image_url Issue#open_graph_image_url}
  */
  readonly openGraphImageUrl?: string;
  /**
  * The integer priority of the Issue. Priority pertains to how notifications are
  * triggered for this Issue: -1 indicates **low priority**, meaning no
  * notifications whatsoever will be triggered for this issue; 0 indicates
  * **normal priority**, which is the default behavior; and, 1 indicates
  * **high priority**, meaning all subscriptions across all notifiers will receive
  * notifications for this Issue regardless of their notification preferences.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#priority Issue#priority}
  */
  readonly priority?: number;
  /**
  * An object detailing the Schedule of this issue if it is scheduled. This field is `null` if the Issue is not scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#schedule Issue#schedule}
  */
  readonly schedule?: IssueSchedule;
  /**
  * The integer state which overrides the state of affected Components in
  * `component`. A value of `null` indicates no override is present.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#state_override Issue#state_override}
  */
  readonly stateOverride?: number;
  /**
  * An application of an IssueTemplate, which contains a copy of the template fields of the associated IssueTemplate, as well as an object of user-defined variables that parameterize the template. 
  * 
  * -> Alterations to this field do not affect the associated `issue_template_id`, and will update the Issue/Update's content accordingly. Conversely, modification/deletion of the associated IssueTemplate do not affect the attributes of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#template Issue#template}
  */
  readonly template?: IssueTemplate;
  /**
  * The title of the Issue, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#title Issue#title}
  */
  readonly title?: string;
  /**
  * The title of the Issue, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#title_translations Issue#title_translations}
  */
  readonly titleTranslations?: { [key: string]: string };
  /**
  * An optional list of Updates to create when initially creating the Issue. When creating a sequence of Updates, ensure that their `effective_after` timestamps do not encroach upon one another, or an error will occur.
  * 
  * ~> This field is primarily meant for assisting with the creation of retrospective Issues, rather than creating new Updates as they arise. Please use the full hund_issue_update resource instead, rather than configuring this field directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#updates Issue#updates}
  */
  readonly updates?: IssueUpdates[] | cdktf.IResolvable;
}
export interface IssueSchedule {
  /**
  * The time at which this scheduled Issue will end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#ends_at Issue#ends_at}
  */
  readonly endsAt: string;
  /**
  * The time at which this scheduled Issue will fire a "heads-up" `issue_upcoming` notification, informing subscribers that the Issue will begin soon. This field is `null` if the Issue will not be sending an `issue_upcoming` notification.
  * 
  * -> This field cannot be changed once the Issue has emitted an `issue_upcoming` notification. Consider creating a new Update if you'd like to remind subscribers additional times apart from this automated notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#notify_subscribers_at Issue#notify_subscribers_at}
  */
  readonly notifySubscribersAt?: string;
  /**
  * The time at which this scheduled Issue will begin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#starts_at Issue#starts_at}
  */
  readonly startsAt: string;
}

export function issueScheduleToTerraform(struct?: IssueSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ends_at: cdktf.stringToTerraform(struct!.endsAt),
    notify_subscribers_at: cdktf.stringToTerraform(struct!.notifySubscribersAt),
    starts_at: cdktf.stringToTerraform(struct!.startsAt),
  }
}


export function issueScheduleToHclTerraform(struct?: IssueSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ends_at: {
      value: cdktf.stringToHclTerraform(struct!.endsAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_subscribers_at: {
      value: cdktf.stringToHclTerraform(struct!.notifySubscribersAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starts_at: {
      value: cdktf.stringToHclTerraform(struct!.startsAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endsAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.endsAt = this._endsAt;
    }
    if (this._notifySubscribersAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifySubscribersAt = this._notifySubscribersAt;
    }
    if (this._startsAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startsAt = this._startsAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endsAt = undefined;
      this._notifySubscribersAt = undefined;
      this._startsAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endsAt = value.endsAt;
      this._notifySubscribersAt = value.notifySubscribersAt;
      this._startsAt = value.startsAt;
    }
  }

  // ended - computed: true, optional: false, required: false
  public get ended() {
    return this.getBooleanAttribute('ended');
  }

  // ends_at - computed: false, optional: false, required: true
  private _endsAt?: string; 
  public get endsAt() {
    return this.getStringAttribute('ends_at');
  }
  public set endsAt(value: string) {
    this._endsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endsAtInput() {
    return this._endsAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notified - computed: true, optional: false, required: false
  public get notified() {
    return this.getBooleanAttribute('notified');
  }

  // notify_subscribers_at - computed: true, optional: true, required: false
  private _notifySubscribersAt?: string; 
  public get notifySubscribersAt() {
    return this.getStringAttribute('notify_subscribers_at');
  }
  public set notifySubscribersAt(value: string) {
    this._notifySubscribersAt = value;
  }
  public resetNotifySubscribersAt() {
    this._notifySubscribersAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySubscribersAtInput() {
    return this._notifySubscribersAt;
  }

  // started - computed: true, optional: false, required: false
  public get started() {
    return this.getBooleanAttribute('started');
  }

  // starts_at - computed: false, optional: false, required: true
  private _startsAt?: string; 
  public get startsAt() {
    return this.getStringAttribute('starts_at');
  }
  public set startsAt(value: string) {
    this._startsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startsAtInput() {
    return this._startsAt;
  }
}
export interface IssueTemplateSchema {
  /**
  * Whether this variable is required when applying the template to an Issue/Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#required Issue#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The expected type of this variable. One of `datetime`, `i18n-string`, `number`, or `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#type Issue#type}
  */
  readonly type?: string;
}

export function issueTemplateSchemaToTerraform(struct?: IssueTemplateSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function issueTemplateSchemaToHclTerraform(struct?: IssueTemplateSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
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

export class IssueTemplateSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): IssueTemplateSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueTemplateSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class IssueTemplateSchemaMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IssueTemplateSchema } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): IssueTemplateSchemaOutputReference {
    return new IssueTemplateSchemaOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IssueTemplateVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#datetime Issue#datetime}
  */
  readonly datetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#i18n_string Issue#i18n_string}
  */
  readonly i18NString?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#number Issue#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#string Issue#string}
  */
  readonly string?: string;
}

export function issueTemplateVariablesToTerraform(struct?: IssueTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datetime: cdktf.stringToTerraform(struct!.datetime),
    i18n_string: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.i18NString),
    number: cdktf.numberToTerraform(struct!.number),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function issueTemplateVariablesToHclTerraform(struct?: IssueTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datetime: {
      value: cdktf.stringToHclTerraform(struct!.datetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    i18n_string: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.i18NString),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueTemplateVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): IssueTemplateVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetime = this._datetime;
    }
    if (this._i18NString !== undefined) {
      hasAnyValues = true;
      internalValueResult.i18NString = this._i18NString;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueTemplateVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datetime = undefined;
      this._i18NString = undefined;
      this._number = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datetime = value.datetime;
      this._i18NString = value.i18NString;
      this._number = value.number;
      this._string = value.string;
    }
  }

  // datetime - computed: false, optional: true, required: false
  private _datetime?: string; 
  public get datetime() {
    return this.getStringAttribute('datetime');
  }
  public set datetime(value: string) {
    this._datetime = value;
  }
  public resetDatetime() {
    this._datetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeInput() {
    return this._datetime;
  }

  // i18n_string - computed: false, optional: true, required: false
  private _i18NString?: { [key: string]: string }; 
  public get i18NString() {
    return this.getStringMapAttribute('i18n_string');
  }
  public set i18NString(value: { [key: string]: string }) {
    this._i18NString = value;
  }
  public resetI18NString() {
    this._i18NString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get i18NStringInput() {
    return this._i18NString;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class IssueTemplateVariablesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IssueTemplateVariables } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): IssueTemplateVariablesOutputReference {
    return new IssueTemplateVariablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IssueTemplate {
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `body` of the applied Issue/Update, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body Issue#body}
  */
  readonly body?: string;
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `body` of the applied Issue/Update, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body_translations Issue#body_translations}
  */
  readonly bodyTranslations?: { [key: string]: string };
  /**
  * The ObjectId of an IssueTemplate to use as the basis of this Application, which will inform the values for `body`, `label`, and `title` (when `kind = "issue"`). If this value is changed, then the application will be re-created according to the values of the given IssueTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#issue_template_id Issue#issue_template_id}
  */
  readonly issueTemplateId: string;
  /**
  * The template for the `label` of the applied Issue/Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#label Issue#label}
  */
  readonly label?: string;
  /**
  * An object defining a set of typed variables that can be provided in `variables`. The variables can be accessed from any field in the IssueTemplate supporting Liquid.
  * 
  * -> This field is normally copied from the underlying `issue_template`, but can be overridden here as necessary. In any case, `variables` must adhere to `schema`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#schema Issue#schema}
  */
  readonly schema?: { [key: string]: IssueTemplateSchema } | cdktf.IResolvable;
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `title` of the applied Issue, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#title Issue#title}
  */
  readonly title?: string;
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `title` of the applied Issue, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#title_translations Issue#title_translations}
  */
  readonly titleTranslations?: { [key: string]: string };
  /**
  * An object of variable assignments used to parameterize the associated IssueTemplate. If the associated IssueTemplate marks a variable as `required`, then it must appear here with an appropriate value. The type of each variable must match the type set in the template's schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#variables Issue#variables}
  */
  readonly variables?: { [key: string]: IssueTemplateVariables } | cdktf.IResolvable;
}

export function issueTemplateToTerraform(struct?: IssueTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.bodyTranslations),
    issue_template_id: cdktf.stringToTerraform(struct!.issueTemplateId),
    label: cdktf.stringToTerraform(struct!.label),
    schema: cdktf.hashMapper(issueTemplateSchemaToTerraform)(struct!.schema),
    title: cdktf.stringToTerraform(struct!.title),
    title_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.titleTranslations),
    variables: cdktf.hashMapper(issueTemplateVariablesToTerraform)(struct!.variables),
  }
}


export function issueTemplateToHclTerraform(struct?: IssueTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.bodyTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    issue_template_id: {
      value: cdktf.stringToHclTerraform(struct!.issueTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.hashMapperHcl(issueTemplateSchemaToHclTerraform)(struct!.schema),
      isBlock: true,
      type: "map",
      storageClassType: "IssueTemplateSchemaMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.titleTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    variables: {
      value: cdktf.hashMapperHcl(issueTemplateVariablesToHclTerraform)(struct!.variables),
      isBlock: true,
      type: "map",
      storageClassType: "IssueTemplateVariablesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTranslations = this._bodyTranslations;
    }
    if (this._issueTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueTemplateId = this._issueTemplateId;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleTranslations = this._titleTranslations;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._bodyTranslations = undefined;
      this._issueTemplateId = undefined;
      this._label = undefined;
      this._schema.internalValue = undefined;
      this._title = undefined;
      this._titleTranslations = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._bodyTranslations = value.bodyTranslations;
      this._issueTemplateId = value.issueTemplateId;
      this._label = value.label;
      this._schema.internalValue = value.schema;
      this._title = value.title;
      this._titleTranslations = value.titleTranslations;
      this._variables.internalValue = value.variables;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_translations - computed: true, optional: true, required: false
  private _bodyTranslations?: { [key: string]: string }; 
  public get bodyTranslations() {
    return this.getStringMapAttribute('body_translations');
  }
  public set bodyTranslations(value: { [key: string]: string }) {
    this._bodyTranslations = value;
  }
  public resetBodyTranslations() {
    this._bodyTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTranslationsInput() {
    return this._bodyTranslations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_template_id - computed: false, optional: false, required: true
  private _issueTemplateId?: string; 
  public get issueTemplateId() {
    return this.getStringAttribute('issue_template_id');
  }
  public set issueTemplateId(value: string) {
    this._issueTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTemplateIdInput() {
    return this._issueTemplateId;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // schema - computed: true, optional: true, required: false
  private _schema = new IssueTemplateSchemaMap(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: { [key: string]: IssueTemplateSchema } | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // title - computed: true, optional: true, required: false
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

  // title_translations - computed: true, optional: true, required: false
  private _titleTranslations?: { [key: string]: string }; 
  public get titleTranslations() {
    return this.getStringMapAttribute('title_translations');
  }
  public set titleTranslations(value: { [key: string]: string }) {
    this._titleTranslations = value;
  }
  public resetTitleTranslations() {
    this._titleTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTranslationsInput() {
    return this._titleTranslations;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new IssueTemplateVariablesMap(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: { [key: string]: IssueTemplateVariables } | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface IssueUpdatesTemplateSchema {
  /**
  * Whether this variable is required when applying the template to an Issue/Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#required Issue#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The expected type of this variable. One of `datetime`, `i18n-string`, `number`, or `string`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#type Issue#type}
  */
  readonly type?: string;
}

export function issueUpdatesTemplateSchemaToTerraform(struct?: IssueUpdatesTemplateSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function issueUpdatesTemplateSchemaToHclTerraform(struct?: IssueUpdatesTemplateSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
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

export class IssueUpdatesTemplateSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): IssueUpdatesTemplateSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueUpdatesTemplateSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

export class IssueUpdatesTemplateSchemaMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IssueUpdatesTemplateSchema } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): IssueUpdatesTemplateSchemaOutputReference {
    return new IssueUpdatesTemplateSchemaOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IssueUpdatesTemplateVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#datetime Issue#datetime}
  */
  readonly datetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#i18n_string Issue#i18n_string}
  */
  readonly i18NString?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#number Issue#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#string Issue#string}
  */
  readonly string?: string;
}

export function issueUpdatesTemplateVariablesToTerraform(struct?: IssueUpdatesTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datetime: cdktf.stringToTerraform(struct!.datetime),
    i18n_string: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.i18NString),
    number: cdktf.numberToTerraform(struct!.number),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function issueUpdatesTemplateVariablesToHclTerraform(struct?: IssueUpdatesTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datetime: {
      value: cdktf.stringToHclTerraform(struct!.datetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    i18n_string: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.i18NString),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueUpdatesTemplateVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): IssueUpdatesTemplateVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetime = this._datetime;
    }
    if (this._i18NString !== undefined) {
      hasAnyValues = true;
      internalValueResult.i18NString = this._i18NString;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueUpdatesTemplateVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datetime = undefined;
      this._i18NString = undefined;
      this._number = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datetime = value.datetime;
      this._i18NString = value.i18NString;
      this._number = value.number;
      this._string = value.string;
    }
  }

  // datetime - computed: true, optional: true, required: false
  private _datetime?: string; 
  public get datetime() {
    return this.getStringAttribute('datetime');
  }
  public set datetime(value: string) {
    this._datetime = value;
  }
  public resetDatetime() {
    this._datetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeInput() {
    return this._datetime;
  }

  // i18n_string - computed: true, optional: true, required: false
  private _i18NString?: { [key: string]: string }; 
  public get i18NString() {
    return this.getStringMapAttribute('i18n_string');
  }
  public set i18NString(value: { [key: string]: string }) {
    this._i18NString = value;
  }
  public resetI18NString() {
    this._i18NString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get i18NStringInput() {
    return this._i18NString;
  }

  // number - computed: true, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class IssueUpdatesTemplateVariablesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: IssueUpdatesTemplateVariables } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): IssueUpdatesTemplateVariablesOutputReference {
    return new IssueUpdatesTemplateVariablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface IssueUpdatesTemplate {
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `body` of the applied Issue/Update, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body Issue#body}
  */
  readonly body?: string;
  /**
  * The [Liquid](https://shopify.github.io/liquid/) template for the `body` of the applied Issue/Update, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body_translations Issue#body_translations}
  */
  readonly bodyTranslations?: { [key: string]: string };
  /**
  * The ObjectId of an IssueTemplate to use as the basis of this Application, which will inform the values for `body`, `label`, and `title` (when `kind = "issue"`). If this value is changed, then the application will be re-created according to the values of the given IssueTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#issue_template_id Issue#issue_template_id}
  */
  readonly issueTemplateId: string;
  /**
  * The template for the `label` of the applied Issue/Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#label Issue#label}
  */
  readonly label?: string;
  /**
  * An object defining a set of typed variables that can be provided in `variables`. The variables can be accessed from any field in the IssueTemplate supporting Liquid.
  * 
  * -> This field is normally copied from the underlying `issue_template`, but can be overridden here as necessary. In any case, `variables` must adhere to `schema`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#schema Issue#schema}
  */
  readonly schema?: { [key: string]: IssueUpdatesTemplateSchema } | cdktf.IResolvable;
  /**
  * An object of variable assignments used to parameterize the associated IssueTemplate. If the associated IssueTemplate marks a variable as `required`, then it must appear here with an appropriate value. The type of each variable must match the type set in the template's schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#variables Issue#variables}
  */
  readonly variables?: { [key: string]: IssueUpdatesTemplateVariables } | cdktf.IResolvable;
}

export function issueUpdatesTemplateToTerraform(struct?: IssueUpdatesTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.bodyTranslations),
    issue_template_id: cdktf.stringToTerraform(struct!.issueTemplateId),
    label: cdktf.stringToTerraform(struct!.label),
    schema: cdktf.hashMapper(issueUpdatesTemplateSchemaToTerraform)(struct!.schema),
    variables: cdktf.hashMapper(issueUpdatesTemplateVariablesToTerraform)(struct!.variables),
  }
}


export function issueUpdatesTemplateToHclTerraform(struct?: IssueUpdatesTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.bodyTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    issue_template_id: {
      value: cdktf.stringToHclTerraform(struct!.issueTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.hashMapperHcl(issueUpdatesTemplateSchemaToHclTerraform)(struct!.schema),
      isBlock: true,
      type: "map",
      storageClassType: "IssueUpdatesTemplateSchemaMap",
    },
    variables: {
      value: cdktf.hashMapperHcl(issueUpdatesTemplateVariablesToHclTerraform)(struct!.variables),
      isBlock: true,
      type: "map",
      storageClassType: "IssueUpdatesTemplateVariablesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueUpdatesTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IssueUpdatesTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTranslations = this._bodyTranslations;
    }
    if (this._issueTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueTemplateId = this._issueTemplateId;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueUpdatesTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._bodyTranslations = undefined;
      this._issueTemplateId = undefined;
      this._label = undefined;
      this._schema.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._bodyTranslations = value.bodyTranslations;
      this._issueTemplateId = value.issueTemplateId;
      this._label = value.label;
      this._schema.internalValue = value.schema;
      this._variables.internalValue = value.variables;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_translations - computed: true, optional: true, required: false
  private _bodyTranslations?: { [key: string]: string }; 
  public get bodyTranslations() {
    return this.getStringMapAttribute('body_translations');
  }
  public set bodyTranslations(value: { [key: string]: string }) {
    this._bodyTranslations = value;
  }
  public resetBodyTranslations() {
    this._bodyTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTranslationsInput() {
    return this._bodyTranslations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_template_id - computed: true, optional: false, required: true
  private _issueTemplateId?: string; 
  public get issueTemplateId() {
    return this.getStringAttribute('issue_template_id');
  }
  public set issueTemplateId(value: string) {
    this._issueTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTemplateIdInput() {
    return this._issueTemplateId;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // schema - computed: true, optional: true, required: false
  private _schema = new IssueUpdatesTemplateSchemaMap(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: { [key: string]: IssueUpdatesTemplateSchema } | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // variables - computed: true, optional: true, required: false
  private _variables = new IssueUpdatesTemplateVariablesMap(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: { [key: string]: IssueUpdatesTemplateVariables } | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface IssueUpdates {
  /**
  * The body text of this Update in raw markdown, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body Issue#body}
  */
  readonly body?: string;
  /**
  * The body text of this Update in raw markdown, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#body_translations Issue#body_translations}
  */
  readonly bodyTranslations?: { [key: string]: string };
  /**
  * The time after which this Update is considered the latest Update on its Issue, until the `effective_after` time of the Update succeeding this one, if one exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#effective_after Issue#effective_after}
  */
  readonly effectiveAfter?: string;
  /**
  * The label applied to this update, as well as the issue at large when this Update is the *latest* Update in the Issue. The label can be thought of as the "state" of the Issue as of this Update (e.g. "Problem Identified", "Monitoring", "Resolved").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#label Issue#label}
  */
  readonly label?: string;
  /**
  * The integer state which overrides the state of affected Components in `component`. A value of `null` indicates no override is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#state_override Issue#state_override}
  */
  readonly stateOverride?: number;
  /**
  * An application of an IssueTemplate, which contains a copy of the template fields of the associated IssueTemplate, as well as an object of user-defined variables that parameterize the template. 
  * 
  * -> Alterations to this field do not affect the associated `issue_template_id`, and will update the Issue/Update's content accordingly. Conversely, modification/deletion of the associated IssueTemplate do not affect the attributes of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#template Issue#template}
  */
  readonly template?: IssueUpdatesTemplate;
}

export function issueUpdatesToTerraform(struct?: IssueUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.bodyTranslations),
    effective_after: cdktf.stringToTerraform(struct!.effectiveAfter),
    label: cdktf.stringToTerraform(struct!.label),
    state_override: cdktf.numberToTerraform(struct!.stateOverride),
    template: issueUpdatesTemplateToTerraform(struct!.template),
  }
}


export function issueUpdatesToHclTerraform(struct?: IssueUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.bodyTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    effective_after: {
      value: cdktf.stringToHclTerraform(struct!.effectiveAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_override: {
      value: cdktf.numberToHclTerraform(struct!.stateOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template: {
      value: issueUpdatesTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "IssueUpdatesTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IssueUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IssueUpdates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTranslations = this._bodyTranslations;
    }
    if (this._effectiveAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveAfter = this._effectiveAfter;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._stateOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateOverride = this._stateOverride;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IssueUpdates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._bodyTranslations = undefined;
      this._effectiveAfter = undefined;
      this._label = undefined;
      this._stateOverride = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._bodyTranslations = value.bodyTranslations;
      this._effectiveAfter = value.effectiveAfter;
      this._label = value.label;
      this._stateOverride = value.stateOverride;
      this._template.internalValue = value.template;
    }
  }

  // archive_on_destroy - computed: true, optional: false, required: false
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_html - computed: true, optional: false, required: false
  public get bodyHtml() {
    return this.getStringAttribute('body_html');
  }

  // body_html_translations - computed: true, optional: false, required: false
  private _bodyHtmlTranslations = new cdktf.StringMap(this, "body_html_translations");
  public get bodyHtmlTranslations() {
    return this._bodyHtmlTranslations;
  }

  // body_translations - computed: true, optional: true, required: false
  private _bodyTranslations?: { [key: string]: string }; 
  public get bodyTranslations() {
    return this.getStringMapAttribute('body_translations');
  }
  public set bodyTranslations(value: { [key: string]: string }) {
    this._bodyTranslations = value;
  }
  public resetBodyTranslations() {
    this._bodyTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTranslationsInput() {
    return this._bodyTranslations;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getBooleanAttribute('effective');
  }

  // effective_after - computed: true, optional: true, required: false
  private _effectiveAfter?: string; 
  public get effectiveAfter() {
    return this.getStringAttribute('effective_after');
  }
  public set effectiveAfter(value: string) {
    this._effectiveAfter = value;
  }
  public resetEffectiveAfter() {
    this._effectiveAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveAfterInput() {
    return this._effectiveAfter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_id - computed: true, optional: false, required: false
  public get issueId() {
    return this.getStringAttribute('issue_id');
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // reopening - computed: true, optional: false, required: false
  public get reopening() {
    return this.getBooleanAttribute('reopening');
  }

  // state_override - computed: true, optional: true, required: false
  private _stateOverride?: number; 
  public get stateOverride() {
    return this.getNumberAttribute('state_override');
  }
  public set stateOverride(value: number) {
    this._stateOverride = value;
  }
  public resetStateOverride() {
    this._stateOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOverrideInput() {
    return this._stateOverride;
  }

  // template - computed: true, optional: true, required: false
  private _template = new IssueUpdatesTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: IssueUpdatesTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class IssueUpdatesList extends cdktf.ComplexList {
  public internalValue? : IssueUpdates[] | cdktf.IResolvable

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
  public get(index: number): IssueUpdatesOutputReference {
    return new IssueUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue hund_issue}
*/
export class Issue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_issue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Issue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Issue to import
  * @param importFromId The id of the existing Issue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Issue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_issue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/issue hund_issue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueConfig
  */
  public constructor(scope: Construct, id: string, config: IssueConfig) {
    super(scope, id, {
      terraformResourceType: 'hund_issue',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveOnDestroy = config.archiveOnDestroy;
    this._beganAt = config.beganAt;
    this._body = config.body;
    this._bodyTranslations = config.bodyTranslations;
    this._componentIds = config.componentIds;
    this._endedAt = config.endedAt;
    this._label = config.label;
    this._openGraphImageUrl = config.openGraphImageUrl;
    this._priority = config.priority;
    this._schedule.internalValue = config.schedule;
    this._stateOverride = config.stateOverride;
    this._template.internalValue = config.template;
    this._title = config.title;
    this._titleTranslations = config.titleTranslations;
    this._updates.internalValue = config.updates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_on_destroy - computed: false, optional: true, required: false
  private _archiveOnDestroy?: boolean | cdktf.IResolvable; 
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }
  public set archiveOnDestroy(value: boolean | cdktf.IResolvable) {
    this._archiveOnDestroy = value;
  }
  public resetArchiveOnDestroy() {
    this._archiveOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOnDestroyInput() {
    return this._archiveOnDestroy;
  }

  // began_at - computed: true, optional: true, required: false
  private _beganAt?: string; 
  public get beganAt() {
    return this.getStringAttribute('began_at');
  }
  public set beganAt(value: string) {
    this._beganAt = value;
  }
  public resetBeganAt() {
    this._beganAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beganAtInput() {
    return this._beganAt;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_html - computed: true, optional: false, required: false
  public get bodyHtml() {
    return this.getStringAttribute('body_html');
  }

  // body_html_translations - computed: true, optional: false, required: false
  private _bodyHtmlTranslations = new cdktf.StringMap(this, "body_html_translations");
  public get bodyHtmlTranslations() {
    return this._bodyHtmlTranslations;
  }

  // body_translations - computed: true, optional: true, required: false
  private _bodyTranslations?: { [key: string]: string }; 
  public get bodyTranslations() {
    return this.getStringMapAttribute('body_translations');
  }
  public set bodyTranslations(value: { [key: string]: string }) {
    this._bodyTranslations = value;
  }
  public resetBodyTranslations() {
    this._bodyTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTranslationsInput() {
    return this._bodyTranslations;
  }

  // cancelled_at - computed: true, optional: false, required: false
  public get cancelledAt() {
    return this.getStringAttribute('cancelled_at');
  }

  // component_ids - computed: false, optional: false, required: true
  private _componentIds?: string[]; 
  public get componentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('component_ids'));
  }
  public set componentIds(value: string[]) {
    this._componentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdsInput() {
    return this._componentIds;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // ended_at - computed: true, optional: true, required: false
  private _endedAt?: string; 
  public get endedAt() {
    return this.getStringAttribute('ended_at');
  }
  public set endedAt(value: string) {
    this._endedAt = value;
  }
  public resetEndedAt() {
    this._endedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endedAtInput() {
    return this._endedAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // open_graph_image_url - computed: false, optional: true, required: false
  private _openGraphImageUrl?: string; 
  public get openGraphImageUrl() {
    return this.getStringAttribute('open_graph_image_url');
  }
  public set openGraphImageUrl(value: string) {
    this._openGraphImageUrl = value;
  }
  public resetOpenGraphImageUrl() {
    this._openGraphImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openGraphImageUrlInput() {
    return this._openGraphImageUrl;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // resolved - computed: true, optional: false, required: false
  public get resolved() {
    return this.getBooleanAttribute('resolved');
  }

  // retrospective - computed: true, optional: false, required: false
  public get retrospective() {
    return this.getBooleanAttribute('retrospective');
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new IssueScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: IssueSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // scheduled - computed: true, optional: false, required: false
  public get scheduled() {
    return this.getBooleanAttribute('scheduled');
  }

  // specialization - computed: true, optional: false, required: false
  public get specialization() {
    return this.getStringAttribute('specialization');
  }

  // standing - computed: true, optional: false, required: false
  public get standing() {
    return this.getBooleanAttribute('standing');
  }

  // state_override - computed: false, optional: true, required: false
  private _stateOverride?: number; 
  public get stateOverride() {
    return this.getNumberAttribute('state_override');
  }
  public set stateOverride(value: number) {
    this._stateOverride = value;
  }
  public resetStateOverride() {
    this._stateOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateOverrideInput() {
    return this._stateOverride;
  }

  // template - computed: false, optional: true, required: false
  private _template = new IssueTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: IssueTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // title - computed: true, optional: true, required: false
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

  // title_translations - computed: true, optional: true, required: false
  private _titleTranslations?: { [key: string]: string }; 
  public get titleTranslations() {
    return this.getStringMapAttribute('title_translations');
  }
  public set titleTranslations(value: { [key: string]: string }) {
    this._titleTranslations = value;
  }
  public resetTitleTranslations() {
    this._titleTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTranslationsInput() {
    return this._titleTranslations;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updates - computed: true, optional: true, required: false
  private _updates = new IssueUpdatesList(this, "updates", false);
  public get updates() {
    return this._updates;
  }
  public putUpdates(value: IssueUpdates[] | cdktf.IResolvable) {
    this._updates.internalValue = value;
  }
  public resetUpdates() {
    this._updates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
      began_at: cdktf.stringToTerraform(this._beganAt),
      body: cdktf.stringToTerraform(this._body),
      body_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._bodyTranslations),
      component_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._componentIds),
      ended_at: cdktf.stringToTerraform(this._endedAt),
      label: cdktf.stringToTerraform(this._label),
      open_graph_image_url: cdktf.stringToTerraform(this._openGraphImageUrl),
      priority: cdktf.numberToTerraform(this._priority),
      schedule: issueScheduleToTerraform(this._schedule.internalValue),
      state_override: cdktf.numberToTerraform(this._stateOverride),
      template: issueTemplateToTerraform(this._template.internalValue),
      title: cdktf.stringToTerraform(this._title),
      title_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._titleTranslations),
      updates: cdktf.listMapper(issueUpdatesToTerraform, false)(this._updates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._archiveOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      began_at: {
        value: cdktf.stringToHclTerraform(this._beganAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bodyTranslations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      component_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._componentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ended_at: {
        value: cdktf.stringToHclTerraform(this._endedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      open_graph_image_url: {
        value: cdktf.stringToHclTerraform(this._openGraphImageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: issueScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IssueSchedule",
      },
      state_override: {
        value: cdktf.numberToHclTerraform(this._stateOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template: {
        value: issueTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IssueTemplate",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._titleTranslations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      updates: {
        value: cdktf.listMapperHcl(issueUpdatesToHclTerraform, false)(this._updates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IssueUpdatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
