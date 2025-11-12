// https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/data-sources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogdnaAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/data-sources/alert#id DataLogdnaAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/data-sources/alert#presetid DataLogdnaAlert#presetid}
  */
  readonly presetid: string;
}
export interface DataLogdnaAlertEmailChannel {
}

export function dataLogdnaAlertEmailChannelToTerraform(struct?: DataLogdnaAlertEmailChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogdnaAlertEmailChannelToHclTerraform(struct?: DataLogdnaAlertEmailChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogdnaAlertEmailChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogdnaAlertEmailChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogdnaAlertEmailChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // immediate - computed: true, optional: false, required: false
  public get immediate() {
    return this.getStringAttribute('immediate');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // terminal - computed: true, optional: false, required: false
  public get terminal() {
    return this.getStringAttribute('terminal');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // triggerinterval - computed: true, optional: false, required: false
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }

  // triggerlimit - computed: true, optional: false, required: false
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }
}

export class DataLogdnaAlertEmailChannelList extends cdktf.ComplexList {

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
  public get(index: number): DataLogdnaAlertEmailChannelOutputReference {
    return new DataLogdnaAlertEmailChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogdnaAlertPagerdutyChannel {
}

export function dataLogdnaAlertPagerdutyChannelToTerraform(struct?: DataLogdnaAlertPagerdutyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogdnaAlertPagerdutyChannelToHclTerraform(struct?: DataLogdnaAlertPagerdutyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogdnaAlertPagerdutyChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogdnaAlertPagerdutyChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogdnaAlertPagerdutyChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoresolve - computed: true, optional: false, required: false
  public get autoresolve() {
    return this.getBooleanAttribute('autoresolve');
  }

  // autoresolveinterval - computed: true, optional: false, required: false
  public get autoresolveinterval() {
    return this.getStringAttribute('autoresolveinterval');
  }

  // autoresolvelimit - computed: true, optional: false, required: false
  public get autoresolvelimit() {
    return this.getNumberAttribute('autoresolvelimit');
  }

  // immediate - computed: true, optional: false, required: false
  public get immediate() {
    return this.getStringAttribute('immediate');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // terminal - computed: true, optional: false, required: false
  public get terminal() {
    return this.getStringAttribute('terminal');
  }

  // triggerinterval - computed: true, optional: false, required: false
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }

  // triggerlimit - computed: true, optional: false, required: false
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }
}

export class DataLogdnaAlertPagerdutyChannelList extends cdktf.ComplexList {

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
  public get(index: number): DataLogdnaAlertPagerdutyChannelOutputReference {
    return new DataLogdnaAlertPagerdutyChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogdnaAlertSlackChannel {
}

export function dataLogdnaAlertSlackChannelToTerraform(struct?: DataLogdnaAlertSlackChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogdnaAlertSlackChannelToHclTerraform(struct?: DataLogdnaAlertSlackChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogdnaAlertSlackChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogdnaAlertSlackChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogdnaAlertSlackChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // immediate - computed: true, optional: false, required: false
  public get immediate() {
    return this.getStringAttribute('immediate');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // terminal - computed: true, optional: false, required: false
  public get terminal() {
    return this.getStringAttribute('terminal');
  }

  // triggerinterval - computed: true, optional: false, required: false
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }

  // triggerlimit - computed: true, optional: false, required: false
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataLogdnaAlertSlackChannelList extends cdktf.ComplexList {

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
  public get(index: number): DataLogdnaAlertSlackChannelOutputReference {
    return new DataLogdnaAlertSlackChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogdnaAlertWebhookChannel {
}

export function dataLogdnaAlertWebhookChannelToTerraform(struct?: DataLogdnaAlertWebhookChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogdnaAlertWebhookChannelToHclTerraform(struct?: DataLogdnaAlertWebhookChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogdnaAlertWebhookChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogdnaAlertWebhookChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogdnaAlertWebhookChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bodytemplate - computed: true, optional: false, required: false
  public get bodytemplate() {
    return this.getStringAttribute('bodytemplate');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // immediate - computed: true, optional: false, required: false
  public get immediate() {
    return this.getStringAttribute('immediate');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // terminal - computed: true, optional: false, required: false
  public get terminal() {
    return this.getStringAttribute('terminal');
  }

  // triggerinterval - computed: true, optional: false, required: false
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }

  // triggerlimit - computed: true, optional: false, required: false
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataLogdnaAlertWebhookChannelList extends cdktf.ComplexList {

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
  public get(index: number): DataLogdnaAlertWebhookChannelOutputReference {
    return new DataLogdnaAlertWebhookChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/data-sources/alert logdna_alert}
*/
export class DataLogdnaAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logdna_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogdnaAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogdnaAlert to import
  * @param importFromId The id of the existing DataLogdnaAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/data-sources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogdnaAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logdna_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/data-sources/alert logdna_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogdnaAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogdnaAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'logdna_alert',
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
    this._id = config.id;
    this._presetid = config.presetid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_channel - computed: true, optional: false, required: false
  private _emailChannel = new DataLogdnaAlertEmailChannelList(this, "email_channel", false);
  public get emailChannel() {
    return this._emailChannel;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pagerduty_channel - computed: true, optional: false, required: false
  private _pagerdutyChannel = new DataLogdnaAlertPagerdutyChannelList(this, "pagerduty_channel", false);
  public get pagerdutyChannel() {
    return this._pagerdutyChannel;
  }

  // presetid - computed: false, optional: false, required: true
  private _presetid?: string; 
  public get presetid() {
    return this.getStringAttribute('presetid');
  }
  public set presetid(value: string) {
    this._presetid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetidInput() {
    return this._presetid;
  }

  // slack_channel - computed: true, optional: false, required: false
  private _slackChannel = new DataLogdnaAlertSlackChannelList(this, "slack_channel", false);
  public get slackChannel() {
    return this._slackChannel;
  }

  // webhook_channel - computed: true, optional: false, required: false
  private _webhookChannel = new DataLogdnaAlertWebhookChannelList(this, "webhook_channel", false);
  public get webhookChannel() {
    return this._webhookChannel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      presetid: cdktf.stringToTerraform(this._presetid),
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
      presetid: {
        value: cdktf.stringToHclTerraform(this._presetid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
