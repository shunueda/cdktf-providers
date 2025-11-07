// https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#custom_http_headers Monitor#custom_http_headers}
  */
  readonly customHttpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#friendly_name Monitor#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#http_auth_type Monitor#http_auth_type}
  */
  readonly httpAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#http_method Monitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#http_password Monitor#http_password}
  */
  readonly httpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#http_username Monitor#http_username}
  */
  readonly httpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#ignore_ssl_errors Monitor#ignore_ssl_errors}
  */
  readonly ignoreSslErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#interval Monitor#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#keyword_type Monitor#keyword_type}
  */
  readonly keywordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#keyword_value Monitor#keyword_value}
  */
  readonly keywordValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#port Monitor#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#sub_type Monitor#sub_type}
  */
  readonly subType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#type Monitor#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#url Monitor#url}
  */
  readonly url: string;
  /**
  * alert_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#alert_contact Monitor#alert_contact}
  */
  readonly alertContact?: MonitorAlertContact[] | cdktf.IResolvable;
}
export interface MonitorAlertContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#recurrence Monitor#recurrence}
  */
  readonly recurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#threshold Monitor#threshold}
  */
  readonly threshold?: number;
}

export function monitorAlertContactToTerraform(struct?: MonitorAlertContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    recurrence: cdktf.numberToTerraform(struct!.recurrence),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function monitorAlertContactToHclTerraform(struct?: MonitorAlertContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: cdktf.numberToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorAlertContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._recurrence = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._recurrence = value.recurrence;
      this._threshold = value.threshold;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: number; 
  public get recurrence() {
    return this.getNumberAttribute('recurrence');
  }
  public set recurrence(value: number) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class MonitorAlertContactList extends cdktf.ComplexList {
  public internalValue? : MonitorAlertContact[] | cdktf.IResolvable

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
  public get(index: number): MonitorAlertContactOutputReference {
    return new MonitorAlertContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor uptimerobot_monitor}
*/
export class Monitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptimerobot_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Monitor to import
  * @param importFromId The id of the existing Monitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptimerobot_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vexxhost/uptimerobot/0.8.2/docs/resources/monitor uptimerobot_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'uptimerobot_monitor',
      terraformGeneratorMetadata: {
        providerName: 'uptimerobot',
        providerVersion: '0.8.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customHttpHeaders = config.customHttpHeaders;
    this._friendlyName = config.friendlyName;
    this._httpAuthType = config.httpAuthType;
    this._httpMethod = config.httpMethod;
    this._httpPassword = config.httpPassword;
    this._httpUsername = config.httpUsername;
    this._id = config.id;
    this._ignoreSslErrors = config.ignoreSslErrors;
    this._interval = config.interval;
    this._keywordType = config.keywordType;
    this._keywordValue = config.keywordValue;
    this._port = config.port;
    this._subType = config.subType;
    this._type = config.type;
    this._url = config.url;
    this._alertContact.internalValue = config.alertContact;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_http_headers - computed: false, optional: true, required: false
  private _customHttpHeaders?: { [key: string]: string }; 
  public get customHttpHeaders() {
    return this.getStringMapAttribute('custom_http_headers');
  }
  public set customHttpHeaders(value: { [key: string]: string }) {
    this._customHttpHeaders = value;
  }
  public resetCustomHttpHeaders() {
    this._customHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHttpHeadersInput() {
    return this._customHttpHeaders;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // http_auth_type - computed: false, optional: true, required: false
  private _httpAuthType?: string; 
  public get httpAuthType() {
    return this.getStringAttribute('http_auth_type');
  }
  public set httpAuthType(value: string) {
    this._httpAuthType = value;
  }
  public resetHttpAuthType() {
    this._httpAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthTypeInput() {
    return this._httpAuthType;
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

  // http_password - computed: false, optional: true, required: false
  private _httpPassword?: string; 
  public get httpPassword() {
    return this.getStringAttribute('http_password');
  }
  public set httpPassword(value: string) {
    this._httpPassword = value;
  }
  public resetHttpPassword() {
    this._httpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordInput() {
    return this._httpPassword;
  }

  // http_username - computed: false, optional: true, required: false
  private _httpUsername?: string; 
  public get httpUsername() {
    return this.getStringAttribute('http_username');
  }
  public set httpUsername(value: string) {
    this._httpUsername = value;
  }
  public resetHttpUsername() {
    this._httpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUsernameInput() {
    return this._httpUsername;
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

  // ignore_ssl_errors - computed: false, optional: true, required: false
  private _ignoreSslErrors?: boolean | cdktf.IResolvable; 
  public get ignoreSslErrors() {
    return this.getBooleanAttribute('ignore_ssl_errors');
  }
  public set ignoreSslErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreSslErrors = value;
  }
  public resetIgnoreSslErrors() {
    this._ignoreSslErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSslErrorsInput() {
    return this._ignoreSslErrors;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // keyword_type - computed: false, optional: true, required: false
  private _keywordType?: string; 
  public get keywordType() {
    return this.getStringAttribute('keyword_type');
  }
  public set keywordType(value: string) {
    this._keywordType = value;
  }
  public resetKeywordType() {
    this._keywordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordTypeInput() {
    return this._keywordType;
  }

  // keyword_value - computed: false, optional: true, required: false
  private _keywordValue?: string; 
  public get keywordValue() {
    return this.getStringAttribute('keyword_value');
  }
  public set keywordValue(value: string) {
    this._keywordValue = value;
  }
  public resetKeywordValue() {
    this._keywordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordValueInput() {
    return this._keywordValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_type - computed: false, optional: true, required: false
  private _subType?: string; 
  public get subType() {
    return this.getStringAttribute('sub_type');
  }
  public set subType(value: string) {
    this._subType = value;
  }
  public resetSubType() {
    this._subType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeInput() {
    return this._subType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // alert_contact - computed: false, optional: true, required: false
  private _alertContact = new MonitorAlertContactList(this, "alert_contact", true);
  public get alertContact() {
    return this._alertContact;
  }
  public putAlertContact(value: MonitorAlertContact[] | cdktf.IResolvable) {
    this._alertContact.internalValue = value;
  }
  public resetAlertContact() {
    this._alertContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertContactInput() {
    return this._alertContact.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._customHttpHeaders),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      http_auth_type: cdktf.stringToTerraform(this._httpAuthType),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      http_password: cdktf.stringToTerraform(this._httpPassword),
      http_username: cdktf.stringToTerraform(this._httpUsername),
      id: cdktf.stringToTerraform(this._id),
      ignore_ssl_errors: cdktf.booleanToTerraform(this._ignoreSslErrors),
      interval: cdktf.numberToTerraform(this._interval),
      keyword_type: cdktf.stringToTerraform(this._keywordType),
      keyword_value: cdktf.stringToTerraform(this._keywordValue),
      port: cdktf.numberToTerraform(this._port),
      sub_type: cdktf.stringToTerraform(this._subType),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      alert_contact: cdktf.listMapper(monitorAlertContactToTerraform, true)(this._alertContact.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_http_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customHttpHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_auth_type: {
        value: cdktf.stringToHclTerraform(this._httpAuthType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_password: {
        value: cdktf.stringToHclTerraform(this._httpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_username: {
        value: cdktf.stringToHclTerraform(this._httpUsername),
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
      ignore_ssl_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreSslErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keyword_type: {
        value: cdktf.stringToHclTerraform(this._keywordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyword_value: {
        value: cdktf.stringToHclTerraform(this._keywordValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_type: {
        value: cdktf.stringToHclTerraform(this._subType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      alert_contact: {
        value: cdktf.listMapperHcl(monitorAlertContactToHclTerraform, true)(this._alertContact.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorAlertContactList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
