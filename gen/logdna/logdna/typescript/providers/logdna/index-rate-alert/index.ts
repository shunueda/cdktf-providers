// https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexRateAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#enabled IndexRateAlert#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#frequency IndexRateAlert#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#id IndexRateAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max number of lines for alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#max_lines IndexRateAlert#max_lines}
  */
  readonly maxLines?: number;
  /**
  * Max Z score before alerting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#max_z_score IndexRateAlert#max_z_score}
  */
  readonly maxZScore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#threshold_alert IndexRateAlert#threshold_alert}
  */
  readonly thresholdAlert: string;
  /**
  * channels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#channels IndexRateAlert#channels}
  */
  readonly channels?: IndexRateAlertChannels[] | cdktf.IResolvable;
  /**
  * webhook_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#webhook_channel IndexRateAlert#webhook_channel}
  */
  readonly webhookChannel?: IndexRateAlertWebhookChannel[] | cdktf.IResolvable;
}
export interface IndexRateAlertChannels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#email IndexRateAlert#email}
  */
  readonly email?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#pagerduty IndexRateAlert#pagerduty}
  */
  readonly pagerduty?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#slack IndexRateAlert#slack}
  */
  readonly slack?: string[];
}

export function indexRateAlertChannelsToTerraform(struct?: IndexRateAlertChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    pagerduty: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pagerduty),
    slack: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slack),
  }
}


export function indexRateAlertChannelsToHclTerraform(struct?: IndexRateAlertChannels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pagerduty: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pagerduty),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    slack: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slack),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IndexRateAlertChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IndexRateAlertChannels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._pagerduty !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerduty = this._pagerduty;
    }
    if (this._slack !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexRateAlertChannels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._pagerduty = undefined;
      this._slack = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._pagerduty = value.pagerduty;
      this._slack = value.slack;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty?: string[]; 
  public get pagerduty() {
    return this.getListAttribute('pagerduty');
  }
  public set pagerduty(value: string[]) {
    this._pagerduty = value;
  }
  public resetPagerduty() {
    this._pagerduty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty;
  }

  // slack - computed: false, optional: true, required: false
  private _slack?: string[]; 
  public get slack() {
    return this.getListAttribute('slack');
  }
  public set slack(value: string[]) {
    this._slack = value;
  }
  public resetSlack() {
    this._slack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack;
  }
}

export class IndexRateAlertChannelsList extends cdktf.ComplexList {
  public internalValue? : IndexRateAlertChannels[] | cdktf.IResolvable

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
  public get(index: number): IndexRateAlertChannelsOutputReference {
    return new IndexRateAlertChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IndexRateAlertWebhookChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#bodytemplate IndexRateAlert#bodytemplate}
  */
  readonly bodytemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#headers IndexRateAlert#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#method IndexRateAlert#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#url IndexRateAlert#url}
  */
  readonly url: string;
}

export function indexRateAlertWebhookChannelToTerraform(struct?: IndexRateAlertWebhookChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bodytemplate: cdktf.stringToTerraform(struct!.bodytemplate),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function indexRateAlertWebhookChannelToHclTerraform(struct?: IndexRateAlertWebhookChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bodytemplate: {
      value: cdktf.stringToHclTerraform(struct!.bodytemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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

export class IndexRateAlertWebhookChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IndexRateAlertWebhookChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodytemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodytemplate = this._bodytemplate;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IndexRateAlertWebhookChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodytemplate = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodytemplate = value.bodytemplate;
      this._headers = value.headers;
      this._method = value.method;
      this._url = value.url;
    }
  }

  // bodytemplate - computed: false, optional: true, required: false
  private _bodytemplate?: string; 
  public get bodytemplate() {
    return this.getStringAttribute('bodytemplate');
  }
  public set bodytemplate(value: string) {
    this._bodytemplate = value;
  }
  public resetBodytemplate() {
    this._bodytemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodytemplateInput() {
    return this._bodytemplate;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

export class IndexRateAlertWebhookChannelList extends cdktf.ComplexList {
  public internalValue? : IndexRateAlertWebhookChannel[] | cdktf.IResolvable

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
  public get(index: number): IndexRateAlertWebhookChannelOutputReference {
    return new IndexRateAlertWebhookChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert logdna_index_rate_alert}
*/
export class IndexRateAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logdna_index_rate_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexRateAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexRateAlert to import
  * @param importFromId The id of the existing IndexRateAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexRateAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logdna_index_rate_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/index_rate_alert logdna_index_rate_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexRateAlertConfig
  */
  public constructor(scope: Construct, id: string, config: IndexRateAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'logdna_index_rate_alert',
      terraformGeneratorMetadata: {
        providerName: 'logdna',
        providerVersion: '1.17.2',
        providerVersionConstraint: '1.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._id = config.id;
    this._maxLines = config.maxLines;
    this._maxZScore = config.maxZScore;
    this._thresholdAlert = config.thresholdAlert;
    this._channels.internalValue = config.channels;
    this._webhookChannel.internalValue = config.webhookChannel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // max_lines - computed: false, optional: true, required: false
  private _maxLines?: number; 
  public get maxLines() {
    return this.getNumberAttribute('max_lines');
  }
  public set maxLines(value: number) {
    this._maxLines = value;
  }
  public resetMaxLines() {
    this._maxLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLinesInput() {
    return this._maxLines;
  }

  // max_z_score - computed: false, optional: true, required: false
  private _maxZScore?: number; 
  public get maxZScore() {
    return this.getNumberAttribute('max_z_score');
  }
  public set maxZScore(value: number) {
    this._maxZScore = value;
  }
  public resetMaxZScore() {
    this._maxZScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxZScoreInput() {
    return this._maxZScore;
  }

  // threshold_alert - computed: false, optional: false, required: true
  private _thresholdAlert?: string; 
  public get thresholdAlert() {
    return this.getStringAttribute('threshold_alert');
  }
  public set thresholdAlert(value: string) {
    this._thresholdAlert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertInput() {
    return this._thresholdAlert;
  }

  // channels - computed: false, optional: true, required: false
  private _channels = new IndexRateAlertChannelsList(this, "channels", false);
  public get channels() {
    return this._channels;
  }
  public putChannels(value: IndexRateAlertChannels[] | cdktf.IResolvable) {
    this._channels.internalValue = value;
  }
  public resetChannels() {
    this._channels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels.internalValue;
  }

  // webhook_channel - computed: false, optional: true, required: false
  private _webhookChannel = new IndexRateAlertWebhookChannelList(this, "webhook_channel", false);
  public get webhookChannel() {
    return this._webhookChannel;
  }
  public putWebhookChannel(value: IndexRateAlertWebhookChannel[] | cdktf.IResolvable) {
    this._webhookChannel.internalValue = value;
  }
  public resetWebhookChannel() {
    this._webhookChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookChannelInput() {
    return this._webhookChannel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      frequency: cdktf.stringToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      max_lines: cdktf.numberToTerraform(this._maxLines),
      max_z_score: cdktf.numberToTerraform(this._maxZScore),
      threshold_alert: cdktf.stringToTerraform(this._thresholdAlert),
      channels: cdktf.listMapper(indexRateAlertChannelsToTerraform, true)(this._channels.internalValue),
      webhook_channel: cdktf.listMapper(indexRateAlertWebhookChannelToTerraform, true)(this._webhookChannel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
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
      max_lines: {
        value: cdktf.numberToHclTerraform(this._maxLines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_z_score: {
        value: cdktf.numberToHclTerraform(this._maxZScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_alert: {
        value: cdktf.stringToHclTerraform(this._thresholdAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channels: {
        value: cdktf.listMapperHcl(indexRateAlertChannelsToHclTerraform, true)(this._channels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IndexRateAlertChannelsList",
      },
      webhook_channel: {
        value: cdktf.listMapperHcl(indexRateAlertWebhookChannelToHclTerraform, true)(this._webhookChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IndexRateAlertWebhookChannelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
