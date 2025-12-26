// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqttHttpAuthenticatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum concurrent connections, default 8, range: 1-20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#concurrency MqttHttpAuthenticator#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Connection timeout, unit: seconds, range: 1-30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#connect_timeout MqttHttpAuthenticator#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * JWKS endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#endpoint MqttHttpAuthenticator#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#id MqttHttpAuthenticator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#instance_id MqttHttpAuthenticator#instance_id}
  */
  readonly instanceId: string;
  /**
  * Network request method GET or POST, default POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#method MqttHttpAuthenticator#method}
  */
  readonly method?: string;
  /**
  * Request timeout, unit: seconds, range: 1-30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#read_timeout MqttHttpAuthenticator#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#remark MqttHttpAuthenticator#remark}
  */
  readonly remark?: string;
  /**
  * Is the authenticator enabled: open enable; Close close.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#status MqttHttpAuthenticator#status}
  */
  readonly status?: string;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#body MqttHttpAuthenticator#body}
  */
  readonly body?: MqttHttpAuthenticatorBody[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#header MqttHttpAuthenticator#header}
  */
  readonly header?: MqttHttpAuthenticatorHeader[] | cdktf.IResolvable;
}
export interface MqttHttpAuthenticatorBody {
  /**
  * Body key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#key MqttHttpAuthenticator#key}
  */
  readonly key: string;
  /**
  * Body key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#value MqttHttpAuthenticator#value}
  */
  readonly value: string;
}

export function mqttHttpAuthenticatorBodyToTerraform(struct?: MqttHttpAuthenticatorBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mqttHttpAuthenticatorBodyToHclTerraform(struct?: MqttHttpAuthenticatorBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class MqttHttpAuthenticatorBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MqttHttpAuthenticatorBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MqttHttpAuthenticatorBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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

export class MqttHttpAuthenticatorBodyList extends cdktf.ComplexList {
  public internalValue? : MqttHttpAuthenticatorBody[] | cdktf.IResolvable

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
  public get(index: number): MqttHttpAuthenticatorBodyOutputReference {
    return new MqttHttpAuthenticatorBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MqttHttpAuthenticatorHeader {
  /**
  * Header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#key MqttHttpAuthenticator#key}
  */
  readonly key: string;
  /**
  * Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#value MqttHttpAuthenticator#value}
  */
  readonly value: string;
}

export function mqttHttpAuthenticatorHeaderToTerraform(struct?: MqttHttpAuthenticatorHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mqttHttpAuthenticatorHeaderToHclTerraform(struct?: MqttHttpAuthenticatorHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class MqttHttpAuthenticatorHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MqttHttpAuthenticatorHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MqttHttpAuthenticatorHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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

export class MqttHttpAuthenticatorHeaderList extends cdktf.ComplexList {
  public internalValue? : MqttHttpAuthenticatorHeader[] | cdktf.IResolvable

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
  public get(index: number): MqttHttpAuthenticatorHeaderOutputReference {
    return new MqttHttpAuthenticatorHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator tencentcloud_mqtt_http_authenticator}
*/
export class MqttHttpAuthenticator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mqtt_http_authenticator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MqttHttpAuthenticator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MqttHttpAuthenticator to import
  * @param importFromId The id of the existing MqttHttpAuthenticator that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MqttHttpAuthenticator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mqtt_http_authenticator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/mqtt_http_authenticator tencentcloud_mqtt_http_authenticator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MqttHttpAuthenticatorConfig
  */
  public constructor(scope: Construct, id: string, config: MqttHttpAuthenticatorConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mqtt_http_authenticator',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrency = config.concurrency;
    this._connectTimeout = config.connectTimeout;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._method = config.method;
    this._readTimeout = config.readTimeout;
    this._remark = config.remark;
    this._status = config.status;
    this._body.internalValue = config.body;
    this._header.internalValue = config.header;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // body - computed: false, optional: true, required: false
  private _body = new MqttHttpAuthenticatorBodyList(this, "body", false);
  public get body() {
    return this._body;
  }
  public putBody(value: MqttHttpAuthenticatorBody[] | cdktf.IResolvable) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new MqttHttpAuthenticatorHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: MqttHttpAuthenticatorHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrency: cdktf.numberToTerraform(this._concurrency),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      method: cdktf.stringToTerraform(this._method),
      read_timeout: cdktf.numberToTerraform(this._readTimeout),
      remark: cdktf.stringToTerraform(this._remark),
      status: cdktf.stringToTerraform(this._status),
      body: cdktf.listMapper(mqttHttpAuthenticatorBodyToTerraform, true)(this._body.internalValue),
      header: cdktf.listMapper(mqttHttpAuthenticatorHeaderToTerraform, true)(this._header.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrency: {
        value: cdktf.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_timeout: {
        value: cdktf.numberToHclTerraform(this._readTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body: {
        value: cdktf.listMapperHcl(mqttHttpAuthenticatorBodyToHclTerraform, true)(this._body.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MqttHttpAuthenticatorBodyList",
      },
      header: {
        value: cdktf.listMapperHcl(mqttHttpAuthenticatorHeaderToHclTerraform, true)(this._header.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MqttHttpAuthenticatorHeaderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
