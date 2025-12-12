// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackApiGatewayV2ConsumersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers#appid DataAlibabacloudstackApiGatewayV2Consumers#appid}
  */
  readonly appid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers#gw_instance_id DataAlibabacloudstackApiGatewayV2Consumers#gw_instance_id}
  */
  readonly gwInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers#id DataAlibabacloudstackApiGatewayV2Consumers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers#ids DataAlibabacloudstackApiGatewayV2Consumers#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers#is_source_consumer DataAlibabacloudstackApiGatewayV2Consumers#is_source_consumer}
  */
  readonly isSourceConsumer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers#name_regex DataAlibabacloudstackApiGatewayV2Consumers#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2Payload {
}

export function dataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2PayloadToTerraform(struct?: DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2Payload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2PayloadToHclTerraform(struct?: DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2Payload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2PayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2Payload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2Payload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_code - computed: true, optional: false, required: false
  public get authorizationCode() {
    return this.getBooleanAttribute('authorization_code');
  }

  // client_credentials - computed: true, optional: false, required: false
  public get clientCredentials() {
    return this.getBooleanAttribute('client_credentials');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // implicit_grant - computed: true, optional: false, required: false
  public get implicitGrant() {
    return this.getBooleanAttribute('implicit_grant');
  }

  // password_grant - computed: true, optional: false, required: false
  public get passwordGrant() {
    return this.getBooleanAttribute('password_grant');
  }

  // pkce - computed: true, optional: false, required: false
  public get pkce() {
    return this.getBooleanAttribute('pkce');
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return this.getStringAttribute('redirect_uris');
  }

  // refresh_token_expiration - computed: true, optional: false, required: false
  public get refreshTokenExpiration() {
    return this.getNumberAttribute('refresh_token_expiration');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getStringAttribute('scopes');
  }

  // token_expiration - computed: true, optional: false, required: false
  public get tokenExpiration() {
    return this.getNumberAttribute('token_expiration');
  }
}

export class DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2PayloadList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2PayloadOutputReference {
    return new DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2PayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackApiGatewayV2ConsumersConsumers {
}

export function dataAlibabacloudstackApiGatewayV2ConsumersConsumersToTerraform(struct?: DataAlibabacloudstackApiGatewayV2ConsumersConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackApiGatewayV2ConsumersConsumersToHclTerraform(struct?: DataAlibabacloudstackApiGatewayV2ConsumersConsumers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackApiGatewayV2ConsumersConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackApiGatewayV2ConsumersConsumers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackApiGatewayV2ConsumersConsumers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // app_code - computed: true, optional: false, required: false
  public get appCode() {
    return this.getStringAttribute('app_code');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // app_secret - computed: true, optional: false, required: false
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getNumberAttribute('auth_type');
  }

  // auth_type_name - computed: true, optional: false, required: false
  public get authTypeName() {
    return this.getStringAttribute('auth_type_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // oauth2_payload - computed: true, optional: false, required: false
  private _oauth2Payload = new DataAlibabacloudstackApiGatewayV2ConsumersConsumersOauth2PayloadList(this, "oauth2_payload", false);
  public get oauth2Payload() {
    return this._oauth2Payload;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // request_header - computed: true, optional: false, required: false
  public get requestHeader() {
    return this.getStringAttribute('request_header');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // use_white_list - computed: true, optional: false, required: false
  public get useWhiteList() {
    return this.getBooleanAttribute('use_white_list');
  }
}

export class DataAlibabacloudstackApiGatewayV2ConsumersConsumersList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackApiGatewayV2ConsumersConsumersOutputReference {
    return new DataAlibabacloudstackApiGatewayV2ConsumersConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers alibabacloudstack_api_gateway_v2_consumers}
*/
export class DataAlibabacloudstackApiGatewayV2Consumers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_api_gateway_v2_consumers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackApiGatewayV2Consumers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackApiGatewayV2Consumers to import
  * @param importFromId The id of the existing DataAlibabacloudstackApiGatewayV2Consumers that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackApiGatewayV2Consumers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_api_gateway_v2_consumers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/api_gateway_v2_consumers alibabacloudstack_api_gateway_v2_consumers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackApiGatewayV2ConsumersConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackApiGatewayV2ConsumersConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_api_gateway_v2_consumers',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appid = config.appid;
    this._gwInstanceId = config.gwInstanceId;
    this._id = config.id;
    this._ids = config.ids;
    this._isSourceConsumer = config.isSourceConsumer;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appid - computed: false, optional: true, required: false
  private _appid?: string; 
  public get appid() {
    return this.getStringAttribute('appid');
  }
  public set appid(value: string) {
    this._appid = value;
  }
  public resetAppid() {
    this._appid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appidInput() {
    return this._appid;
  }

  // consumers - computed: true, optional: false, required: false
  private _consumers = new DataAlibabacloudstackApiGatewayV2ConsumersConsumersList(this, "consumers", false);
  public get consumers() {
    return this._consumers;
  }

  // gw_instance_id - computed: false, optional: false, required: true
  private _gwInstanceId?: string; 
  public get gwInstanceId() {
    return this.getStringAttribute('gw_instance_id');
  }
  public set gwInstanceId(value: string) {
    this._gwInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInstanceIdInput() {
    return this._gwInstanceId;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // is_source_consumer - computed: false, optional: true, required: false
  private _isSourceConsumer?: boolean | cdktf.IResolvable; 
  public get isSourceConsumer() {
    return this.getBooleanAttribute('is_source_consumer');
  }
  public set isSourceConsumer(value: boolean | cdktf.IResolvable) {
    this._isSourceConsumer = value;
  }
  public resetIsSourceConsumer() {
    this._isSourceConsumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSourceConsumerInput() {
    return this._isSourceConsumer;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appid: cdktf.stringToTerraform(this._appid),
      gw_instance_id: cdktf.stringToTerraform(this._gwInstanceId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_source_consumer: cdktf.booleanToTerraform(this._isSourceConsumer),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appid: {
        value: cdktf.stringToHclTerraform(this._appid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_instance_id: {
        value: cdktf.stringToHclTerraform(this._gwInstanceId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_source_consumer: {
        value: cdktf.booleanToHclTerraform(this._isSourceConsumer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
