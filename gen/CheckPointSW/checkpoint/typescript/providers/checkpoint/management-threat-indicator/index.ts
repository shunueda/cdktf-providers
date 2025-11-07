// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementThreatIndicatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The indicator's action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#action ManagementThreatIndicator#action}
  */
  readonly action?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#color ManagementThreatIndicator#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#comments ManagementThreatIndicator#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#id ManagementThreatIndicator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#ignore_errors ManagementThreatIndicator#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#ignore_warnings ManagementThreatIndicator#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#name ManagementThreatIndicator#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#tags ManagementThreatIndicator#tags}
  */
  readonly tags?: string[];
  /**
  * observables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#observables ManagementThreatIndicator#observables}
  */
  readonly observables?: ManagementThreatIndicatorObservables[] | cdktf.IResolvable;
  /**
  * profile_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#profile_overrides ManagementThreatIndicator#profile_overrides}
  */
  readonly profileOverrides?: ManagementThreatIndicatorProfileOverrides[] | cdktf.IResolvable;
}
export interface ManagementThreatIndicatorObservables {
  /**
  * The confidence level the indicator has that a real threat has been uncovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#confidence ManagementThreatIndicator#confidence}
  */
  readonly confidence?: string;
  /**
  * The name of a domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#domain ManagementThreatIndicator#domain}
  */
  readonly domain?: string;
  /**
  * A valid IP-Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#ip_address ManagementThreatIndicator#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * A valid IP-Address, the beginning of the range. If you configure this parameter with a value, you must also configure the value of the 'ip-address-last' parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#ip_address_first ManagementThreatIndicator#ip_address_first}
  */
  readonly ipAddressFirst?: string;
  /**
  * A valid IP-Address, the end of the range. If you configure this parameter with a value, you must also configure the value of the 'ip-address-first' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#ip_address_last ManagementThreatIndicator#ip_address_last}
  */
  readonly ipAddressLast?: string;
  /**
  * A valid E-Mail address, cc field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#mail_cc ManagementThreatIndicator#mail_cc}
  */
  readonly mailCc?: string;
  /**
  * A valid E-Mail address, sender field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#mail_from ManagementThreatIndicator#mail_from}
  */
  readonly mailFrom?: string;
  /**
  * A valid E-Mail address, reply-to field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#mail_reply_to ManagementThreatIndicator#mail_reply_to}
  */
  readonly mailReplyTo?: string;
  /**
  * Subject of E-Mail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#mail_subject ManagementThreatIndicator#mail_subject}
  */
  readonly mailSubject?: string;
  /**
  * A valid E-Mail address, recipient filed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#mail_to ManagementThreatIndicator#mail_to}
  */
  readonly mailTo?: string;
  /**
  * A valid MD5 sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#md5 ManagementThreatIndicator#md5}
  */
  readonly md5?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#name ManagementThreatIndicator#name}
  */
  readonly name: string;
  /**
  * The software blade that processes the observable: AV - AntiVirus, AB - AntiBot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#product ManagementThreatIndicator#product}
  */
  readonly product?: string;
  /**
  * The severity level of the threat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#severity ManagementThreatIndicator#severity}
  */
  readonly severity?: string;
  /**
  * A valid URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#url ManagementThreatIndicator#url}
  */
  readonly url?: string;
}

export function managementThreatIndicatorObservablesToTerraform(struct?: ManagementThreatIndicatorObservables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidence: cdktf.stringToTerraform(struct!.confidence),
    domain: cdktf.stringToTerraform(struct!.domain),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_first: cdktf.stringToTerraform(struct!.ipAddressFirst),
    ip_address_last: cdktf.stringToTerraform(struct!.ipAddressLast),
    mail_cc: cdktf.stringToTerraform(struct!.mailCc),
    mail_from: cdktf.stringToTerraform(struct!.mailFrom),
    mail_reply_to: cdktf.stringToTerraform(struct!.mailReplyTo),
    mail_subject: cdktf.stringToTerraform(struct!.mailSubject),
    mail_to: cdktf.stringToTerraform(struct!.mailTo),
    md5: cdktf.stringToTerraform(struct!.md5),
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    severity: cdktf.stringToTerraform(struct!.severity),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function managementThreatIndicatorObservablesToHclTerraform(struct?: ManagementThreatIndicatorObservables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidence: {
      value: cdktf.stringToHclTerraform(struct!.confidence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_first: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_last: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressLast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_cc: {
      value: cdktf.stringToHclTerraform(struct!.mailCc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_from: {
      value: cdktf.stringToHclTerraform(struct!.mailFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_reply_to: {
      value: cdktf.stringToHclTerraform(struct!.mailReplyTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_subject: {
      value: cdktf.stringToHclTerraform(struct!.mailSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mail_to: {
      value: cdktf.stringToHclTerraform(struct!.mailTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5: {
      value: cdktf.stringToHclTerraform(struct!.md5),
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
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementThreatIndicatorObservablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementThreatIndicatorObservables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidence = this._confidence;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressFirst = this._ipAddressFirst;
    }
    if (this._ipAddressLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressLast = this._ipAddressLast;
    }
    if (this._mailCc !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailCc = this._mailCc;
    }
    if (this._mailFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFrom = this._mailFrom;
    }
    if (this._mailReplyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailReplyTo = this._mailReplyTo;
    }
    if (this._mailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailSubject = this._mailSubject;
    }
    if (this._mailTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailTo = this._mailTo;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatIndicatorObservables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidence = undefined;
      this._domain = undefined;
      this._ipAddress = undefined;
      this._ipAddressFirst = undefined;
      this._ipAddressLast = undefined;
      this._mailCc = undefined;
      this._mailFrom = undefined;
      this._mailReplyTo = undefined;
      this._mailSubject = undefined;
      this._mailTo = undefined;
      this._md5 = undefined;
      this._name = undefined;
      this._product = undefined;
      this._severity = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidence = value.confidence;
      this._domain = value.domain;
      this._ipAddress = value.ipAddress;
      this._ipAddressFirst = value.ipAddressFirst;
      this._ipAddressLast = value.ipAddressLast;
      this._mailCc = value.mailCc;
      this._mailFrom = value.mailFrom;
      this._mailReplyTo = value.mailReplyTo;
      this._mailSubject = value.mailSubject;
      this._mailTo = value.mailTo;
      this._md5 = value.md5;
      this._name = value.name;
      this._product = value.product;
      this._severity = value.severity;
      this._url = value.url;
    }
  }

  // confidence - computed: false, optional: true, required: false
  private _confidence?: string; 
  public get confidence() {
    return this.getStringAttribute('confidence');
  }
  public set confidence(value: string) {
    this._confidence = value;
  }
  public resetConfidence() {
    this._confidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceInput() {
    return this._confidence;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_first - computed: false, optional: true, required: false
  private _ipAddressFirst?: string; 
  public get ipAddressFirst() {
    return this.getStringAttribute('ip_address_first');
  }
  public set ipAddressFirst(value: string) {
    this._ipAddressFirst = value;
  }
  public resetIpAddressFirst() {
    this._ipAddressFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressFirstInput() {
    return this._ipAddressFirst;
  }

  // ip_address_last - computed: false, optional: true, required: false
  private _ipAddressLast?: string; 
  public get ipAddressLast() {
    return this.getStringAttribute('ip_address_last');
  }
  public set ipAddressLast(value: string) {
    this._ipAddressLast = value;
  }
  public resetIpAddressLast() {
    this._ipAddressLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressLastInput() {
    return this._ipAddressLast;
  }

  // mail_cc - computed: false, optional: true, required: false
  private _mailCc?: string; 
  public get mailCc() {
    return this.getStringAttribute('mail_cc');
  }
  public set mailCc(value: string) {
    this._mailCc = value;
  }
  public resetMailCc() {
    this._mailCc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailCcInput() {
    return this._mailCc;
  }

  // mail_from - computed: false, optional: true, required: false
  private _mailFrom?: string; 
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }
  public set mailFrom(value: string) {
    this._mailFrom = value;
  }
  public resetMailFrom() {
    this._mailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromInput() {
    return this._mailFrom;
  }

  // mail_reply_to - computed: false, optional: true, required: false
  private _mailReplyTo?: string; 
  public get mailReplyTo() {
    return this.getStringAttribute('mail_reply_to');
  }
  public set mailReplyTo(value: string) {
    this._mailReplyTo = value;
  }
  public resetMailReplyTo() {
    this._mailReplyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailReplyToInput() {
    return this._mailReplyTo;
  }

  // mail_subject - computed: false, optional: true, required: false
  private _mailSubject?: string; 
  public get mailSubject() {
    return this.getStringAttribute('mail_subject');
  }
  public set mailSubject(value: string) {
    this._mailSubject = value;
  }
  public resetMailSubject() {
    this._mailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailSubjectInput() {
    return this._mailSubject;
  }

  // mail_to - computed: false, optional: true, required: false
  private _mailTo?: string; 
  public get mailTo() {
    return this.getStringAttribute('mail_to');
  }
  public set mailTo(value: string) {
    this._mailTo = value;
  }
  public resetMailTo() {
    this._mailTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailToInput() {
    return this._mailTo;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
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

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

export class ManagementThreatIndicatorObservablesList extends cdktf.ComplexList {
  public internalValue? : ManagementThreatIndicatorObservables[] | cdktf.IResolvable

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
  public get(index: number): ManagementThreatIndicatorObservablesOutputReference {
    return new ManagementThreatIndicatorObservablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementThreatIndicatorProfileOverrides {
  /**
  * The indicator's action in this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#action ManagementThreatIndicator#action}
  */
  readonly action?: string;
  /**
  * The profile in which to override the indicator's action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#profile ManagementThreatIndicator#profile}
  */
  readonly profile?: string;
}

export function managementThreatIndicatorProfileOverridesToTerraform(struct?: ManagementThreatIndicatorProfileOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function managementThreatIndicatorProfileOverridesToHclTerraform(struct?: ManagementThreatIndicatorProfileOverrides | cdktf.IResolvable): any {
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
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementThreatIndicatorProfileOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementThreatIndicatorProfileOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatIndicatorProfileOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._profile = value.profile;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class ManagementThreatIndicatorProfileOverridesList extends cdktf.ComplexList {
  public internalValue? : ManagementThreatIndicatorProfileOverrides[] | cdktf.IResolvable

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
  public get(index: number): ManagementThreatIndicatorProfileOverridesOutputReference {
    return new ManagementThreatIndicatorProfileOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator checkpoint_management_threat_indicator}
*/
export class ManagementThreatIndicator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_threat_indicator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementThreatIndicator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementThreatIndicator to import
  * @param importFromId The id of the existing ManagementThreatIndicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementThreatIndicator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_threat_indicator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_indicator checkpoint_management_threat_indicator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementThreatIndicatorConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementThreatIndicatorConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_threat_indicator',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._tags = config.tags;
    this._observables.internalValue = config.observables;
    this._profileOverrides.internalValue = config.profileOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // observables - computed: false, optional: true, required: false
  private _observables = new ManagementThreatIndicatorObservablesList(this, "observables", false);
  public get observables() {
    return this._observables;
  }
  public putObservables(value: ManagementThreatIndicatorObservables[] | cdktf.IResolvable) {
    this._observables.internalValue = value;
  }
  public resetObservables() {
    this._observables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observablesInput() {
    return this._observables.internalValue;
  }

  // profile_overrides - computed: false, optional: true, required: false
  private _profileOverrides = new ManagementThreatIndicatorProfileOverridesList(this, "profile_overrides", false);
  public get profileOverrides() {
    return this._profileOverrides;
  }
  public putProfileOverrides(value: ManagementThreatIndicatorProfileOverrides[] | cdktf.IResolvable) {
    this._profileOverrides.internalValue = value;
  }
  public resetProfileOverrides() {
    this._profileOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileOverridesInput() {
    return this._profileOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      observables: cdktf.listMapper(managementThreatIndicatorObservablesToTerraform, true)(this._observables.internalValue),
      profile_overrides: cdktf.listMapper(managementThreatIndicatorProfileOverridesToTerraform, true)(this._profileOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      observables: {
        value: cdktf.listMapperHcl(managementThreatIndicatorObservablesToHclTerraform, true)(this._observables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementThreatIndicatorObservablesList",
      },
      profile_overrides: {
        value: cdktf.listMapperHcl(managementThreatIndicatorProfileOverridesToHclTerraform, true)(this._profileOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementThreatIndicatorProfileOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
