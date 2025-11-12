// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationTemplateContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object that specifies properties for the `email` delivery method.  Exactly one of `email`, `push`, `sms` or `voice` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#email NotificationTemplateContent#email}
  */
  readonly email?: NotificationTemplateContentEmail;
  /**
  * The ID of the environment to manage notification template contents in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#environment_id NotificationTemplateContent#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies an ISO standard language code. For more information about standard language codes, see [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm).  Options are `aa`, `ab`, `ae`, `af`, `af-ZA`, `ak`, `am`, `an`, `ar`, `ar-AE`, `ar-BH`, `ar-DZ`, `ar-EG`, `ar-IQ`, `ar-JO`, `ar-KW`, `ar-LB`, `ar-LY`, `ar-MA`, `ar-OM`, `ar-QA`, `ar-SA`, `ar-SY`, `ar-TN`, `ar-YE`, `as`, `av`, `ay`, `az`, `az-AZ`, `ba`, `be`, `be-BY`, `bg`, `bg-BG`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `bs-BA`, `ca`, `ca-ES`, `ce`, `ch`, `cmn-CN`, `cmn-TW`, `co`, `cr`, `cs`, `cs-CZ`, `cu`, `cv`, `cy`, `cy-GB`, `da`, `da-DK`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`, `dv`, `dv-MV`, `dz`, `ee`, `el`, `el-GR`, `en`, `en-AU`, `en-BZ`, `en-CA`, `en-CB`, `en-GB`, `en-GB-WLS`, `en-IE`, `en-IN`, `en-JM`, `en-NZ`, `en-PH`, `en-TT`, `en-US`, `en-ZA`, `en-ZW`, `eo`, `es`, `es-AR`, `es-BO`, `es-CL`, `es-CO`, `es-CR`, `es-DO`, `es-EC`, `es-ES`, `es-GT`, `es-HN`, `es-MX`, `es-NI`, `es-PA`, `es-PE`, `es-PR`, `es-PY`, `es-SV`, `es-US`, `es-UY`, `es-VE`, `et`, `et-EE`, `eu`, `eu-ES`, `fa`, `fa-IR`, `ff`, `fi`, `fi-FI`, `fj`, `fo`, `fo-FO`, `fr`, `fr-BE`, `fr-CA`, `fr-CH`, `fr-FR`, `fr-LU`, `fr-MC`, `fy`, `ga`, `gd`, `gl`, `gl-ES`, `gn`, `gu`, `gu-IN`, `gv`, `ha`, `he`, `he-IL`, `hi`, `hi-IN`, `ho`, `hr`, `hr-BA`, `hr-HR`, `ht`, `hu`, `hu-HU`, `hy`, `hy-AM`, `hz`, `ia`, `id`, `id-ID`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `is-IS`, `it`, `it-CH`, `it-IT`, `iu`, `ja`, `ja-JP`, `jv`, `ka`, `ka-GE`, `kg`, `ki`, `kj`, `kk`, `kk-KZ`, `kl`, `km`, `kn`, `kn-IN`, `ko`, `ko-KR`, `kok`, `kok-IN`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `ky-KG`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lt-LT`, `lu`, `lv`, `lv-LV`, `mg`, `mh`, `mi`, `mi-NZ`, `mk`, `mk-MK`, `ml`, `mn`, `mn-MN`, `mr`, `mr-IN`, `ms`, `ms-BN`, `ms-MY`, `mt`, `mt-MT`, `my`, `na`, `nb`, `nb-NO`, `nd`, `ne`, `ng`, `nl`, `nl-BE`, `nl-NL`, `nn`, `nn-NO`, `no`, `nr`, `ns`, `ns-ZA`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pa-IN`, `pi`, `pl`, `pl-PL`, `ps`, `ps-AR`, `pt`, `pt-BR`, `pt-PT`, `qu`, `qu-BO`, `qu-EC`, `qu-PE`, `rm`, `rn`, `ro`, `ro-RO`, `ru`, `ru-RU`, `rw`, `sa`, `sa-IN`, `sc`, `sd`, `se`, `se-FI`, `se-NO`, `se-SE`, `sg`, `si`, `sk`, `sk-SK`, `sl`, `sl-SI`, `sm`, `sn`, `so`, `sq`, `sq-AL`, `sr`, `sr-BA`, `sr-SP`, `ss`, `st`, `su`, `sv`, `sv-FI`, `sv-SE`, `sw`, `sw-KE`, `syr`, `syr-SY`, `ta`, `ta-IN`, `te`, `te-IN`, `tg`, `th`, `th-TH`, `ti`, `tk`, `tl`, `tl-PH`, `tn`, `tn-ZA`, `to`, `tr`, `tr-TR`, `ts`, `tt`, `tt-RU`, `tw`, `ty`, `ug`, `uk`, `uk-UA`, `ur`, `ur-PK`, `uz`, `uz-UZ`, `ve`, `vi`, `vi-VN`, `vo`, `wa`, `wo`, `xh`, `xh-ZA`, `yi`, `yo`, `yue-CN`, `za`, `zh`, `zh-CN`, `zh-HK`, `zh-MO`, `zh-SG`, `zh-TW`, `zu`, `zu-ZA`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#locale NotificationTemplateContent#locale}
  */
  readonly locale: string;
  /**
  * A single object that specifies properties for the `push` delivery method.  Exactly one of `email`, `push`, `sms` or `voice` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#push NotificationTemplateContent#push}
  */
  readonly push?: NotificationTemplateContentPush;
  /**
  * A single object that specifies properties for the `sms` delivery method.  Exactly one of `email`, `push`, `sms` or `voice` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#sms NotificationTemplateContent#sms}
  */
  readonly sms?: NotificationTemplateContentSms;
  /**
  * A string that specifies the ID of the template to manage localised contents for.  Options are `credential_issued`, `credential_revoked`, `credential_updated`, `credential_verification`, `device_pairing`, `digital_wallet_pairing`, `email_phone_verification`, `email_verification_admin`, `email_verification_user`, `general`, `id_verification`, `new_device_paired`, `recovery_code_template`, `strong_authentication`, `transaction`, `verification_code_template`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#template_name NotificationTemplateContent#template_name}
  */
  readonly templateName: string;
  /**
  * A string that specifies the unique user-defined name for each content variant that uses the same template + `deliveryMethod` + `locale` combination.  This property is case insensitive and has a limit of 100 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#variant NotificationTemplateContent#variant}
  */
  readonly variant?: string;
  /**
  * A single object that specifies properties for the `voice` delivery method.  Exactly one of `email`, `push`, `sms` or `voice` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#voice NotificationTemplateContent#voice}
  */
  readonly voice?: NotificationTemplateContentVoice;
}
export interface NotificationTemplateContentEmailFrom {
  /**
  * A string that specifies the sender email address. If the environment uses the Ping Identity email sender, or if the address field is empty, the address `noreply@pingidentity.com` is used.  You can configure other email sender addresses per environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#address NotificationTemplateContent#address}
  */
  readonly address?: string;
  /**
  * A string that specifies the email's sender name.  If the environment uses the Ping Identity email sender, the name `PingOne` is used. You can configure other email sender names per environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#name NotificationTemplateContent#name}
  */
  readonly name?: string;
}

export function notificationTemplateContentEmailFromToTerraform(struct?: NotificationTemplateContentEmailFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationTemplateContentEmailFromToHclTerraform(struct?: NotificationTemplateContentEmailFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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

export class NotificationTemplateContentEmailFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTemplateContentEmailFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateContentEmailFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
export interface NotificationTemplateContentEmailReplyTo {
  /**
  * A string that specifies the "reply to" email address.  If the environment uses the Ping Identity email sender, or if the address field is empty, the address `noreply@pingidentity.com` is used.  You can configure other email "reply to" addresses per environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#address NotificationTemplateContent#address}
  */
  readonly address?: string;
  /**
  * A string that specifies the email's "reply to" name.  If the environment uses the Ping Identity email sender, the name `PingOne` is used.  You can configure other email "reply to" names per environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#name NotificationTemplateContent#name}
  */
  readonly name?: string;
}

export function notificationTemplateContentEmailReplyToToTerraform(struct?: NotificationTemplateContentEmailReplyTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationTemplateContentEmailReplyToToHclTerraform(struct?: NotificationTemplateContentEmailReplyTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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

export class NotificationTemplateContentEmailReplyToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTemplateContentEmailReplyTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateContentEmailReplyTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
export interface NotificationTemplateContentEmail {
  /**
  * A string representing the email body. Email text can contain HTML but cannot be larger than 100 kB.  Use of variables is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#body NotificationTemplateContent#body}
  */
  readonly body: string;
  /**
  * A string that specifies the email's character set.  Defaults to `UTF-8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#character_set NotificationTemplateContent#character_set}
  */
  readonly characterSet?: string;
  /**
  * A string that specifies the email's content-type.  Defaults to `text/html`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#content_type NotificationTemplateContent#content_type}
  */
  readonly contentType?: string;
  /**
  * A single object that specifies properties for the email sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#from NotificationTemplateContent#from}
  */
  readonly from?: NotificationTemplateContentEmailFrom;
  /**
  * A single object that specifies properties for the email "reply to" address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#reply_to NotificationTemplateContent#reply_to}
  */
  readonly replyTo?: NotificationTemplateContentEmailReplyTo;
  /**
  * A string representing the email's subject line. Cannot exceed 256 characters. Can include variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#subject NotificationTemplateContent#subject}
  */
  readonly subject: string;
}

export function notificationTemplateContentEmailToTerraform(struct?: NotificationTemplateContentEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    from: notificationTemplateContentEmailFromToTerraform(struct!.from),
    reply_to: notificationTemplateContentEmailReplyToToTerraform(struct!.replyTo),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function notificationTemplateContentEmailToHclTerraform(struct?: NotificationTemplateContentEmail | cdktf.IResolvable): any {
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
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: notificationTemplateContentEmailFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationTemplateContentEmailFrom",
    },
    reply_to: {
      value: notificationTemplateContentEmailReplyToToHclTerraform(struct!.replyTo),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationTemplateContentEmailReplyTo",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateContentEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTemplateContentEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._replyTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyTo = this._replyTo?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateContentEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._characterSet = undefined;
      this._contentType = undefined;
      this._from.internalValue = undefined;
      this._replyTo.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._characterSet = value.characterSet;
      this._contentType = value.contentType;
      this._from.internalValue = value.from;
      this._replyTo.internalValue = value.replyTo;
      this._subject = value.subject;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // from - computed: false, optional: true, required: false
  private _from = new NotificationTemplateContentEmailFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: NotificationTemplateContentEmailFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo = new NotificationTemplateContentEmailReplyToOutputReference(this, "reply_to");
  public get replyTo() {
    return this._replyTo;
  }
  public putReplyTo(value: NotificationTemplateContentEmailReplyTo) {
    this._replyTo.internalValue = value;
  }
  public resetReplyTo() {
    this._replyTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface NotificationTemplateContentPush {
  /**
  * A string that specifies the push notification text. This can include variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#body NotificationTemplateContent#body}
  */
  readonly body: string;
  /**
  * A string that specifies what type of banner should be displayed to the user.  Options are `APPROVE_AND_OPEN_APP` (when the Approve button is clicked, authentication is completed and the user is taken to the relevant application), `BANNER_BUTTONS` (the banner contains both Approve and Deny buttons), `WITHOUT_BANNER_BUTTONS` (when the user clicks the banner, they are taken to an application that contains the necessary approval controls).  Defaults to `BANNER_BUTTONS`.  Note that to use the non-default push banners, you must implement them in your application code, using the PingOne SDK. For details, see the [README for iOS](https://github.com/pingidentity/pingone-mobile-sdk-ios/#171-push-notifications-categories) and the [README for Android](https://github.com/pingidentity/pingone-mobile-sdk-android).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#category NotificationTemplateContent#category}
  */
  readonly category?: string;
  /**
  * A string that specifies the push notification title. This can include variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#title NotificationTemplateContent#title}
  */
  readonly title: string;
}

export function notificationTemplateContentPushToTerraform(struct?: NotificationTemplateContentPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    category: cdktf.stringToTerraform(struct!.category),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function notificationTemplateContentPushToHclTerraform(struct?: NotificationTemplateContentPush | cdktf.IResolvable): any {
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
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateContentPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTemplateContentPush | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateContentPush | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._category = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._category = value.category;
      this._title = value.title;
    }
  }

  // body - computed: false, optional: false, required: true
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface NotificationTemplateContentSms {
  /**
  * A string that specifies the SMS text. UC-2 encoding is used for text that contains non GSM-7 characters. UC-2 encoded text cannot exceed 67 characters. GSM-7 encoded text cannot exceed 153 characters. This can include variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#content NotificationTemplateContent#content}
  */
  readonly content: string;
  /**
  * A string that specifies the SMS sender ID. This property can contain only alphanumeric characters and spaces, and its length cannot exceed 11 characters. In some countries, it is impossible to send an SMS with an alphanumeric sender ID. For those countries, the sender ID must be empty. For SMS recipients in specific countries, refer to Twilio's documentation on [International support for Alphanumeric Sender ID](https://support.twilio.com/hc/en-us/articles/223133767-International-support-for-Alphanumeric-Sender-ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#sender NotificationTemplateContent#sender}
  */
  readonly sender?: string;
}

export function notificationTemplateContentSmsToTerraform(struct?: NotificationTemplateContentSms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    sender: cdktf.stringToTerraform(struct!.sender),
  }
}


export function notificationTemplateContentSmsToHclTerraform(struct?: NotificationTemplateContentSms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender: {
      value: cdktf.stringToHclTerraform(struct!.sender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateContentSmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTemplateContentSms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._sender !== undefined) {
      hasAnyValues = true;
      internalValueResult.sender = this._sender;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateContentSms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._sender = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._sender = value.sender;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // sender - computed: false, optional: true, required: false
  private _sender?: string; 
  public get sender() {
    return this.getStringAttribute('sender');
  }
  public set sender(value: string) {
    this._sender = value;
  }
  public resetSender() {
    this._sender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderInput() {
    return this._sender;
  }
}
export interface NotificationTemplateContentVoice {
  /**
  * A string that specifies the voice text to read. This can include variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#content NotificationTemplateContent#content}
  */
  readonly content: string;
  /**
  * A string that specifies the voice type desired for the message. Out of the box options include `Man`, `Woman`, `Alice` (Twilio only), `Amazon Polly`, or your own user-defined custom string. In the case that the selected voice type is not supported by the provider in the desired locale, another voice type will be automatically selected. Additional charges may be incurred for these selections, as determined by the sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#type NotificationTemplateContent#type}
  */
  readonly type?: string;
}

export function notificationTemplateContentVoiceToTerraform(struct?: NotificationTemplateContentVoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function notificationTemplateContentVoiceToHclTerraform(struct?: NotificationTemplateContentVoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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

export class NotificationTemplateContentVoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTemplateContentVoice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateContentVoice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content pingone_notification_template_content}
*/
export class NotificationTemplateContent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_notification_template_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationTemplateContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationTemplateContent to import
  * @param importFromId The id of the existing NotificationTemplateContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationTemplateContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_notification_template_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/notification_template_content pingone_notification_template_content} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationTemplateContentConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationTemplateContentConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_notification_template_content',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email.internalValue = config.email;
    this._environmentId = config.environmentId;
    this._locale = config.locale;
    this._push.internalValue = config.push;
    this._sms.internalValue = config.sms;
    this._templateName = config.templateName;
    this._variant = config.variant;
    this._voice.internalValue = config.voice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // email - computed: false, optional: true, required: false
  private _email = new NotificationTemplateContentEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: NotificationTemplateContentEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locale - computed: false, optional: false, required: true
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // push - computed: false, optional: true, required: false
  private _push = new NotificationTemplateContentPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: NotificationTemplateContentPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }

  // sms - computed: false, optional: true, required: false
  private _sms = new NotificationTemplateContentSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: NotificationTemplateContentSms) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // variant - computed: false, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }

  // voice - computed: false, optional: true, required: false
  private _voice = new NotificationTemplateContentVoiceOutputReference(this, "voice");
  public get voice() {
    return this._voice;
  }
  public putVoice(value: NotificationTemplateContentVoice) {
    this._voice.internalValue = value;
  }
  public resetVoice() {
    this._voice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: notificationTemplateContentEmailToTerraform(this._email.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      locale: cdktf.stringToTerraform(this._locale),
      push: notificationTemplateContentPushToTerraform(this._push.internalValue),
      sms: notificationTemplateContentSmsToTerraform(this._sms.internalValue),
      template_name: cdktf.stringToTerraform(this._templateName),
      variant: cdktf.stringToTerraform(this._variant),
      voice: notificationTemplateContentVoiceToTerraform(this._voice.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: notificationTemplateContentEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTemplateContentEmail",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale: {
        value: cdktf.stringToHclTerraform(this._locale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push: {
        value: notificationTemplateContentPushToHclTerraform(this._push.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTemplateContentPush",
      },
      sms: {
        value: notificationTemplateContentSmsToHclTerraform(this._sms.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTemplateContentSms",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variant: {
        value: cdktf.stringToHclTerraform(this._variant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice: {
        value: notificationTemplateContentVoiceToHclTerraform(this._voice.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTemplateContentVoice",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
