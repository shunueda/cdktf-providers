// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaContactPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#id GrafanaContactPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#name GrafanaContactPoint#name}
  */
  readonly name: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#email GrafanaContactPoint#email}
  */
  readonly email?: GrafanaContactPointEmail[] | cdktf.IResolvable;
  /**
  * googlechat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#googlechat GrafanaContactPoint#googlechat}
  */
  readonly googlechat?: GrafanaContactPointGooglechat[] | cdktf.IResolvable;
  /**
  * opsgenie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#opsgenie GrafanaContactPoint#opsgenie}
  */
  readonly opsgenie?: GrafanaContactPointOpsgenie[] | cdktf.IResolvable;
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#pagerduty GrafanaContactPoint#pagerduty}
  */
  readonly pagerduty?: GrafanaContactPointPagerduty[] | cdktf.IResolvable;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#slack GrafanaContactPoint#slack}
  */
  readonly slack?: GrafanaContactPointSlack[] | cdktf.IResolvable;
  /**
  * teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#teams GrafanaContactPoint#teams}
  */
  readonly teams?: GrafanaContactPointTeams[] | cdktf.IResolvable;
  /**
  * victorops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#victorops GrafanaContactPoint#victorops}
  */
  readonly victorops?: GrafanaContactPointVictorops[] | cdktf.IResolvable;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#webhook GrafanaContactPoint#webhook}
  */
  readonly webhook?: GrafanaContactPointWebhook[] | cdktf.IResolvable;
}
export interface GrafanaContactPointEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#addresses GrafanaContactPoint#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#message GrafanaContactPoint#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#single_email GrafanaContactPoint#single_email}
  */
  readonly singleEmail?: boolean | cdktf.IResolvable;
}

export function grafanaContactPointEmailToTerraform(struct?: GrafanaContactPointEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    single_email: cdktf.booleanToTerraform(struct!.singleEmail),
  }
}


export function grafanaContactPointEmailToHclTerraform(struct?: GrafanaContactPointEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    single_email: {
      value: cdktf.booleanToHclTerraform(struct!.singleEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaContactPointEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._singleEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleEmail = this._singleEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaContactPointEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._singleEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._settings = value.settings;
      this._singleEmail = value.singleEmail;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // single_email - computed: false, optional: true, required: false
  private _singleEmail?: boolean | cdktf.IResolvable; 
  public get singleEmail() {
    return this.getBooleanAttribute('single_email');
  }
  public set singleEmail(value: boolean | cdktf.IResolvable) {
    this._singleEmail = value;
  }
  public resetSingleEmail() {
    this._singleEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleEmailInput() {
    return this._singleEmail;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GrafanaContactPointEmailList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointEmail[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointEmailOutputReference {
    return new GrafanaContactPointEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaContactPointGooglechat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#message GrafanaContactPoint#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#url GrafanaContactPoint#url}
  */
  readonly url: string;
}

export function grafanaContactPointGooglechatToTerraform(struct?: GrafanaContactPointGooglechat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function grafanaContactPointGooglechatToHclTerraform(struct?: GrafanaContactPointGooglechat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GrafanaContactPointGooglechatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointGooglechat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaContactPointGooglechat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._settings = value.settings;
      this._url = value.url;
    }
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
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

export class GrafanaContactPointGooglechatList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointGooglechat[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointGooglechatOutputReference {
    return new GrafanaContactPointGooglechatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaContactPointOpsgenie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#api_key GrafanaContactPoint#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#api_url GrafanaContactPoint#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#auto_close GrafanaContactPoint#auto_close}
  */
  readonly autoClose?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#override_priority GrafanaContactPoint#override_priority}
  */
  readonly overridePriority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#send_tags_as GrafanaContactPoint#send_tags_as}
  */
  readonly sendTagsAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
}

export function grafanaContactPointOpsgenieToTerraform(struct?: GrafanaContactPointOpsgenie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    auto_close: cdktf.booleanToTerraform(struct!.autoClose),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    override_priority: cdktf.booleanToTerraform(struct!.overridePriority),
    send_tags_as: cdktf.stringToTerraform(struct!.sendTagsAs),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
  }
}


export function grafanaContactPointOpsgenieToHclTerraform(struct?: GrafanaContactPointOpsgenie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_close: {
      value: cdktf.booleanToHclTerraform(struct!.autoClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_priority: {
      value: cdktf.booleanToHclTerraform(struct!.overridePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_tags_as: {
      value: cdktf.stringToHclTerraform(struct!.sendTagsAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaContactPointOpsgenieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointOpsgenie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._autoClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoClose = this._autoClose;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._overridePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePriority = this._overridePriority;
    }
    if (this._sendTagsAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTagsAs = this._sendTagsAs;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaContactPointOpsgenie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiUrl = undefined;
      this._autoClose = undefined;
      this._disableResolveMessage = undefined;
      this._overridePriority = undefined;
      this._sendTagsAs = undefined;
      this._settings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiUrl = value.apiUrl;
      this._autoClose = value.autoClose;
      this._disableResolveMessage = value.disableResolveMessage;
      this._overridePriority = value.overridePriority;
      this._sendTagsAs = value.sendTagsAs;
      this._settings = value.settings;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // auto_close - computed: false, optional: true, required: false
  private _autoClose?: boolean | cdktf.IResolvable; 
  public get autoClose() {
    return this.getBooleanAttribute('auto_close');
  }
  public set autoClose(value: boolean | cdktf.IResolvable) {
    this._autoClose = value;
  }
  public resetAutoClose() {
    this._autoClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCloseInput() {
    return this._autoClose;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // override_priority - computed: false, optional: true, required: false
  private _overridePriority?: boolean | cdktf.IResolvable; 
  public get overridePriority() {
    return this.getBooleanAttribute('override_priority');
  }
  public set overridePriority(value: boolean | cdktf.IResolvable) {
    this._overridePriority = value;
  }
  public resetOverridePriority() {
    this._overridePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePriorityInput() {
    return this._overridePriority;
  }

  // send_tags_as - computed: false, optional: true, required: false
  private _sendTagsAs?: string; 
  public get sendTagsAs() {
    return this.getStringAttribute('send_tags_as');
  }
  public set sendTagsAs(value: string) {
    this._sendTagsAs = value;
  }
  public resetSendTagsAs() {
    this._sendTagsAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTagsAsInput() {
    return this._sendTagsAs;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GrafanaContactPointOpsgenieList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointOpsgenie[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointOpsgenieOutputReference {
    return new GrafanaContactPointOpsgenieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaContactPointPagerduty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#class GrafanaContactPoint#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#component GrafanaContactPoint#component}
  */
  readonly component?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#group GrafanaContactPoint#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#integration_key GrafanaContactPoint#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#severity GrafanaContactPoint#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#summary GrafanaContactPoint#summary}
  */
  readonly summary?: string;
}

export function grafanaContactPointPagerdutyToTerraform(struct?: GrafanaContactPointPagerduty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    component: cdktf.stringToTerraform(struct!.component),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    group: cdktf.stringToTerraform(struct!.group),
    integration_key: cdktf.stringToTerraform(struct!.integrationKey),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    severity: cdktf.stringToTerraform(struct!.severity),
    summary: cdktf.stringToTerraform(struct!.summary),
  }
}


export function grafanaContactPointPagerdutyToHclTerraform(struct?: GrafanaContactPointPagerduty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration_key: {
      value: cdktf.stringToHclTerraform(struct!.integrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrafanaContactPointPagerdutyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointPagerduty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._integrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationKey = this._integrationKey;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaContactPointPagerduty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._component = undefined;
      this._disableResolveMessage = undefined;
      this._group = undefined;
      this._integrationKey = undefined;
      this._settings = undefined;
      this._severity = undefined;
      this._summary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._component = value.component;
      this._disableResolveMessage = value.disableResolveMessage;
      this._group = value.group;
      this._integrationKey = value.integrationKey;
      this._settings = value.settings;
      this._severity = value.severity;
      this._summary = value.summary;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
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

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GrafanaContactPointPagerdutyList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointPagerduty[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointPagerdutyOutputReference {
    return new GrafanaContactPointPagerdutyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaContactPointSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#endpoint_url GrafanaContactPoint#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#mention_channel GrafanaContactPoint#mention_channel}
  */
  readonly mentionChannel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#mention_groups GrafanaContactPoint#mention_groups}
  */
  readonly mentionGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#mention_users GrafanaContactPoint#mention_users}
  */
  readonly mentionUsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#recipient GrafanaContactPoint#recipient}
  */
  readonly recipient: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#text GrafanaContactPoint#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#title GrafanaContactPoint#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#token GrafanaContactPoint#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#url GrafanaContactPoint#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#username GrafanaContactPoint#username}
  */
  readonly username?: string;
}

export function grafanaContactPointSlackToTerraform(struct?: GrafanaContactPointSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    mention_channel: cdktf.stringToTerraform(struct!.mentionChannel),
    mention_groups: cdktf.stringToTerraform(struct!.mentionGroups),
    mention_users: cdktf.stringToTerraform(struct!.mentionUsers),
    recipient: cdktf.stringToTerraform(struct!.recipient),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    text: cdktf.stringToTerraform(struct!.text),
    title: cdktf.stringToTerraform(struct!.title),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function grafanaContactPointSlackToHclTerraform(struct?: GrafanaContactPointSlack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mention_channel: {
      value: cdktf.stringToHclTerraform(struct!.mentionChannel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mention_groups: {
      value: cdktf.stringToHclTerraform(struct!.mentionGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mention_users: {
      value: cdktf.stringToHclTerraform(struct!.mentionUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient: {
      value: cdktf.stringToHclTerraform(struct!.recipient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
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
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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

export class GrafanaContactPointSlackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointSlack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._mentionChannel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mentionChannel = this._mentionChannel;
    }
    if (this._mentionGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.mentionGroups = this._mentionGroups;
    }
    if (this._mentionUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.mentionUsers = this._mentionUsers;
    }
    if (this._recipient !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipient = this._recipient;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
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

  public set internalValue(value: GrafanaContactPointSlack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableResolveMessage = undefined;
      this._endpointUrl = undefined;
      this._mentionChannel = undefined;
      this._mentionGroups = undefined;
      this._mentionUsers = undefined;
      this._recipient = undefined;
      this._settings = undefined;
      this._text = undefined;
      this._title = undefined;
      this._token = undefined;
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
      this._disableResolveMessage = value.disableResolveMessage;
      this._endpointUrl = value.endpointUrl;
      this._mentionChannel = value.mentionChannel;
      this._mentionGroups = value.mentionGroups;
      this._mentionUsers = value.mentionUsers;
      this._recipient = value.recipient;
      this._settings = value.settings;
      this._text = value.text;
      this._title = value.title;
      this._token = value.token;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // mention_channel - computed: false, optional: true, required: false
  private _mentionChannel?: string; 
  public get mentionChannel() {
    return this.getStringAttribute('mention_channel');
  }
  public set mentionChannel(value: string) {
    this._mentionChannel = value;
  }
  public resetMentionChannel() {
    this._mentionChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionChannelInput() {
    return this._mentionChannel;
  }

  // mention_groups - computed: false, optional: true, required: false
  private _mentionGroups?: string; 
  public get mentionGroups() {
    return this.getStringAttribute('mention_groups');
  }
  public set mentionGroups(value: string) {
    this._mentionGroups = value;
  }
  public resetMentionGroups() {
    this._mentionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionGroupsInput() {
    return this._mentionGroups;
  }

  // mention_users - computed: false, optional: true, required: false
  private _mentionUsers?: string; 
  public get mentionUsers() {
    return this.getStringAttribute('mention_users');
  }
  public set mentionUsers(value: string) {
    this._mentionUsers = value;
  }
  public resetMentionUsers() {
    this._mentionUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mentionUsersInput() {
    return this._mentionUsers;
  }

  // recipient - computed: false, optional: false, required: true
  private _recipient?: string; 
  public get recipient() {
    return this.getStringAttribute('recipient');
  }
  public set recipient(value: string) {
    this._recipient = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
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

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
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

export class GrafanaContactPointSlackList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointSlack[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointSlackOutputReference {
    return new GrafanaContactPointSlackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaContactPointTeams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#message GrafanaContactPoint#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#url GrafanaContactPoint#url}
  */
  readonly url: string;
}

export function grafanaContactPointTeamsToTerraform(struct?: GrafanaContactPointTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message: cdktf.stringToTerraform(struct!.message),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function grafanaContactPointTeamsToHclTerraform(struct?: GrafanaContactPointTeams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GrafanaContactPointTeamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointTeams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaContactPointTeams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableResolveMessage = undefined;
      this._message = undefined;
      this._settings = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableResolveMessage = value.disableResolveMessage;
      this._message = value.message;
      this._settings = value.settings;
      this._url = value.url;
    }
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
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

export class GrafanaContactPointTeamsList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointTeams[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointTeamsOutputReference {
    return new GrafanaContactPointTeamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaContactPointVictorops {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#message_type GrafanaContactPoint#message_type}
  */
  readonly messageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#url GrafanaContactPoint#url}
  */
  readonly url: string;
}

export function grafanaContactPointVictoropsToTerraform(struct?: GrafanaContactPointVictorops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    message_type: cdktf.stringToTerraform(struct!.messageType),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function grafanaContactPointVictoropsToHclTerraform(struct?: GrafanaContactPointVictorops | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GrafanaContactPointVictoropsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointVictorops | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrafanaContactPointVictorops | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableResolveMessage = undefined;
      this._messageType = undefined;
      this._settings = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableResolveMessage = value.disableResolveMessage;
      this._messageType = value.messageType;
      this._settings = value.settings;
      this._url = value.url;
    }
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
  }

  // message_type - computed: false, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
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

export class GrafanaContactPointVictoropsList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointVictorops[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointVictoropsOutputReference {
    return new GrafanaContactPointVictoropsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrafanaContactPointWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#authorization_credentials GrafanaContactPoint#authorization_credentials}
  */
  readonly authorizationCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#disable_resolve_message GrafanaContactPoint#disable_resolve_message}
  */
  readonly disableResolveMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#http_method GrafanaContactPoint#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#max_alerts GrafanaContactPoint#max_alerts}
  */
  readonly maxAlerts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#password GrafanaContactPoint#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#settings GrafanaContactPoint#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#url GrafanaContactPoint#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#username GrafanaContactPoint#username}
  */
  readonly username?: string;
}

export function grafanaContactPointWebhookToTerraform(struct?: GrafanaContactPointWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_credentials: cdktf.stringToTerraform(struct!.authorizationCredentials),
    disable_resolve_message: cdktf.booleanToTerraform(struct!.disableResolveMessage),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    max_alerts: cdktf.numberToTerraform(struct!.maxAlerts),
    password: cdktf.stringToTerraform(struct!.password),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function grafanaContactPointWebhookToHclTerraform(struct?: GrafanaContactPointWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_credentials: {
      value: cdktf.stringToHclTerraform(struct!.authorizationCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_resolve_message: {
      value: cdktf.booleanToHclTerraform(struct!.disableResolveMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_alerts: {
      value: cdktf.numberToHclTerraform(struct!.maxAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GrafanaContactPointWebhookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrafanaContactPointWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationCredentials = this._authorizationCredentials;
    }
    if (this._disableResolveMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableResolveMessage = this._disableResolveMessage;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._maxAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAlerts = this._maxAlerts;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
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

  public set internalValue(value: GrafanaContactPointWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationCredentials = undefined;
      this._disableResolveMessage = undefined;
      this._httpMethod = undefined;
      this._maxAlerts = undefined;
      this._password = undefined;
      this._settings = undefined;
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
      this._authorizationCredentials = value.authorizationCredentials;
      this._disableResolveMessage = value.disableResolveMessage;
      this._httpMethod = value.httpMethod;
      this._maxAlerts = value.maxAlerts;
      this._password = value.password;
      this._settings = value.settings;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // authorization_credentials - computed: false, optional: true, required: false
  private _authorizationCredentials?: string; 
  public get authorizationCredentials() {
    return this.getStringAttribute('authorization_credentials');
  }
  public set authorizationCredentials(value: string) {
    this._authorizationCredentials = value;
  }
  public resetAuthorizationCredentials() {
    this._authorizationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCredentialsInput() {
    return this._authorizationCredentials;
  }

  // disable_resolve_message - computed: false, optional: true, required: false
  private _disableResolveMessage?: boolean | cdktf.IResolvable; 
  public get disableResolveMessage() {
    return this.getBooleanAttribute('disable_resolve_message');
  }
  public set disableResolveMessage(value: boolean | cdktf.IResolvable) {
    this._disableResolveMessage = value;
  }
  public resetDisableResolveMessage() {
    this._disableResolveMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResolveMessageInput() {
    return this._disableResolveMessage;
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

  // max_alerts - computed: false, optional: true, required: false
  private _maxAlerts?: number; 
  public get maxAlerts() {
    return this.getNumberAttribute('max_alerts');
  }
  public set maxAlerts(value: number) {
    this._maxAlerts = value;
  }
  public resetMaxAlerts() {
    this._maxAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlertsInput() {
    return this._maxAlerts;
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

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
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

export class GrafanaContactPointWebhookList extends cdktf.ComplexList {
  public internalValue? : GrafanaContactPointWebhook[] | cdktf.IResolvable

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
  public get(index: number): GrafanaContactPointWebhookOutputReference {
    return new GrafanaContactPointWebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point logzio_grafana_contact_point}
*/
export class GrafanaContactPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_grafana_contact_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrafanaContactPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrafanaContactPoint to import
  * @param importFromId The id of the existing GrafanaContactPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrafanaContactPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_grafana_contact_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/grafana_contact_point logzio_grafana_contact_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaContactPointConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaContactPointConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_grafana_contact_point',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._email.internalValue = config.email;
    this._googlechat.internalValue = config.googlechat;
    this._opsgenie.internalValue = config.opsgenie;
    this._pagerduty.internalValue = config.pagerduty;
    this._slack.internalValue = config.slack;
    this._teams.internalValue = config.teams;
    this._victorops.internalValue = config.victorops;
    this._webhook.internalValue = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // email - computed: false, optional: true, required: false
  private _email = new GrafanaContactPointEmailList(this, "email", false);
  public get email() {
    return this._email;
  }
  public putEmail(value: GrafanaContactPointEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // googlechat - computed: false, optional: true, required: false
  private _googlechat = new GrafanaContactPointGooglechatList(this, "googlechat", false);
  public get googlechat() {
    return this._googlechat;
  }
  public putGooglechat(value: GrafanaContactPointGooglechat[] | cdktf.IResolvable) {
    this._googlechat.internalValue = value;
  }
  public resetGooglechat() {
    this._googlechat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlechatInput() {
    return this._googlechat.internalValue;
  }

  // opsgenie - computed: false, optional: true, required: false
  private _opsgenie = new GrafanaContactPointOpsgenieList(this, "opsgenie", false);
  public get opsgenie() {
    return this._opsgenie;
  }
  public putOpsgenie(value: GrafanaContactPointOpsgenie[] | cdktf.IResolvable) {
    this._opsgenie.internalValue = value;
  }
  public resetOpsgenie() {
    this._opsgenie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieInput() {
    return this._opsgenie.internalValue;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new GrafanaContactPointPagerdutyList(this, "pagerduty", false);
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: GrafanaContactPointPagerduty[] | cdktf.IResolvable) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new GrafanaContactPointSlackList(this, "slack", false);
  public get slack() {
    return this._slack;
  }
  public putSlack(value: GrafanaContactPointSlack[] | cdktf.IResolvable) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // teams - computed: false, optional: true, required: false
  private _teams = new GrafanaContactPointTeamsList(this, "teams", false);
  public get teams() {
    return this._teams;
  }
  public putTeams(value: GrafanaContactPointTeams[] | cdktf.IResolvable) {
    this._teams.internalValue = value;
  }
  public resetTeams() {
    this._teams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams.internalValue;
  }

  // victorops - computed: false, optional: true, required: false
  private _victorops = new GrafanaContactPointVictoropsList(this, "victorops", false);
  public get victorops() {
    return this._victorops;
  }
  public putVictorops(value: GrafanaContactPointVictorops[] | cdktf.IResolvable) {
    this._victorops.internalValue = value;
  }
  public resetVictorops() {
    this._victorops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victoropsInput() {
    return this._victorops.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new GrafanaContactPointWebhookList(this, "webhook", false);
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: GrafanaContactPointWebhook[] | cdktf.IResolvable) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      email: cdktf.listMapper(grafanaContactPointEmailToTerraform, true)(this._email.internalValue),
      googlechat: cdktf.listMapper(grafanaContactPointGooglechatToTerraform, true)(this._googlechat.internalValue),
      opsgenie: cdktf.listMapper(grafanaContactPointOpsgenieToTerraform, true)(this._opsgenie.internalValue),
      pagerduty: cdktf.listMapper(grafanaContactPointPagerdutyToTerraform, true)(this._pagerduty.internalValue),
      slack: cdktf.listMapper(grafanaContactPointSlackToTerraform, true)(this._slack.internalValue),
      teams: cdktf.listMapper(grafanaContactPointTeamsToTerraform, true)(this._teams.internalValue),
      victorops: cdktf.listMapper(grafanaContactPointVictoropsToTerraform, true)(this._victorops.internalValue),
      webhook: cdktf.listMapper(grafanaContactPointWebhookToTerraform, true)(this._webhook.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      email: {
        value: cdktf.listMapperHcl(grafanaContactPointEmailToHclTerraform, true)(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointEmailList",
      },
      googlechat: {
        value: cdktf.listMapperHcl(grafanaContactPointGooglechatToHclTerraform, true)(this._googlechat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointGooglechatList",
      },
      opsgenie: {
        value: cdktf.listMapperHcl(grafanaContactPointOpsgenieToHclTerraform, true)(this._opsgenie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointOpsgenieList",
      },
      pagerduty: {
        value: cdktf.listMapperHcl(grafanaContactPointPagerdutyToHclTerraform, true)(this._pagerduty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointPagerdutyList",
      },
      slack: {
        value: cdktf.listMapperHcl(grafanaContactPointSlackToHclTerraform, true)(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointSlackList",
      },
      teams: {
        value: cdktf.listMapperHcl(grafanaContactPointTeamsToHclTerraform, true)(this._teams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointTeamsList",
      },
      victorops: {
        value: cdktf.listMapperHcl(grafanaContactPointVictoropsToHclTerraform, true)(this._victorops.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointVictoropsList",
      },
      webhook: {
        value: cdktf.listMapperHcl(grafanaContactPointWebhookToHclTerraform, true)(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrafanaContactPointWebhookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
