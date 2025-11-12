// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#id ApiExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-specific unique identifier for the extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#key ApiExtension#key}
  */
  readonly key?: string;
  /**
  * Maximum time (in milliseconds) that the Extension can respond within. If no timeout is provided, the default value is used for all types of Extensions, including payment Extensions. The maximum value is 10000 ms (10 seconds) for payment Extensions and 2000 ms (2 seconds) for all other Extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#timeout_in_ms ApiExtension#timeout_in_ms}
  */
  readonly timeoutInMs?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#destination ApiExtension#destination}
  */
  readonly destination: ApiExtensionDestination;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#trigger ApiExtension#trigger}
  */
  readonly trigger: ApiExtensionTrigger[] | cdktf.IResolvable;
}
export interface ApiExtensionDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#access_key ApiExtension#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#access_secret ApiExtension#access_secret}
  */
  readonly accessSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#arn ApiExtension#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#authorization_header ApiExtension#authorization_header}
  */
  readonly authorizationHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#azure_authentication ApiExtension#azure_authentication}
  */
  readonly azureAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#type ApiExtension#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#url ApiExtension#url}
  */
  readonly url?: string;
}

export function apiExtensionDestinationToTerraform(struct?: ApiExtensionDestinationOutputReference | ApiExtensionDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    access_secret: cdktf.stringToTerraform(struct!.accessSecret),
    arn: cdktf.stringToTerraform(struct!.arn),
    authorization_header: cdktf.stringToTerraform(struct!.authorizationHeader),
    azure_authentication: cdktf.stringToTerraform(struct!.azureAuthentication),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apiExtensionDestinationToHclTerraform(struct?: ApiExtensionDestinationOutputReference | ApiExtensionDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_header: {
      value: cdktf.stringToHclTerraform(struct!.authorizationHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_authentication: {
      value: cdktf.stringToHclTerraform(struct!.azureAuthentication),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiExtensionDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiExtensionDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessSecret = this._accessSecret;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._authorizationHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationHeader = this._authorizationHeader;
    }
    if (this._azureAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAuthentication = this._azureAuthentication;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiExtensionDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accessSecret = undefined;
      this._arn = undefined;
      this._authorizationHeader = undefined;
      this._azureAuthentication = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accessSecret = value.accessSecret;
      this._arn = value.arn;
      this._authorizationHeader = value.authorizationHeader;
      this._azureAuthentication = value.azureAuthentication;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_secret - computed: false, optional: true, required: false
  private _accessSecret?: string; 
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }
  public set accessSecret(value: string) {
    this._accessSecret = value;
  }
  public resetAccessSecret() {
    this._accessSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSecretInput() {
    return this._accessSecret;
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // authorization_header - computed: false, optional: true, required: false
  private _authorizationHeader?: string; 
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }
  public set authorizationHeader(value: string) {
    this._authorizationHeader = value;
  }
  public resetAuthorizationHeader() {
    this._authorizationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationHeaderInput() {
    return this._authorizationHeader;
  }

  // azure_authentication - computed: false, optional: true, required: false
  private _azureAuthentication?: string; 
  public get azureAuthentication() {
    return this.getStringAttribute('azure_authentication');
  }
  public set azureAuthentication(value: string) {
    this._azureAuthentication = value;
  }
  public resetAzureAuthentication() {
    this._azureAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAuthenticationInput() {
    return this._azureAuthentication;
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
export interface ApiExtensionTrigger {
  /**
  * Currently, Create and Update are supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#actions ApiExtension#actions}
  */
  readonly actions: string[];
  /**
  * Valid predicate that controls the conditions under which the API Extension is called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#condition ApiExtension#condition}
  */
  readonly condition?: string;
  /**
  * Currently, cart, order, payment, and customer are supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#resource_type_id ApiExtension#resource_type_id}
  */
  readonly resourceTypeId: string;
}

export function apiExtensionTriggerToTerraform(struct?: ApiExtensionTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    condition: cdktf.stringToTerraform(struct!.condition),
    resource_type_id: cdktf.stringToTerraform(struct!.resourceTypeId),
  }
}


export function apiExtensionTriggerToHclTerraform(struct?: ApiExtensionTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiExtensionTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiExtensionTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._resourceTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeId = this._resourceTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiExtensionTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._condition = undefined;
      this._resourceTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._condition = value.condition;
      this._resourceTypeId = value.resourceTypeId;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // resource_type_id - computed: false, optional: false, required: true
  private _resourceTypeId?: string; 
  public get resourceTypeId() {
    return this.getStringAttribute('resource_type_id');
  }
  public set resourceTypeId(value: string) {
    this._resourceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeIdInput() {
    return this._resourceTypeId;
  }
}

export class ApiExtensionTriggerList extends cdktf.ComplexList {
  public internalValue? : ApiExtensionTrigger[] | cdktf.IResolvable

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
  public get(index: number): ApiExtensionTriggerOutputReference {
    return new ApiExtensionTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension commercetools_api_extension}
*/
export class ApiExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_api_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiExtension to import
  * @param importFromId The id of the existing ApiExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_api_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/api_extension commercetools_api_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: ApiExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_api_extension',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
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
    this._key = config.key;
    this._timeoutInMs = config.timeoutInMs;
    this._destination.internalValue = config.destination;
    this._trigger.internalValue = config.trigger;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // timeout_in_ms - computed: false, optional: true, required: false
  private _timeoutInMs?: number; 
  public get timeoutInMs() {
    return this.getNumberAttribute('timeout_in_ms');
  }
  public set timeoutInMs(value: number) {
    this._timeoutInMs = value;
  }
  public resetTimeoutInMs() {
    this._timeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMsInput() {
    return this._timeoutInMs;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new ApiExtensionDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApiExtensionDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new ApiExtensionTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: ApiExtensionTrigger[] | cdktf.IResolvable) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      timeout_in_ms: cdktf.numberToTerraform(this._timeoutInMs),
      destination: apiExtensionDestinationToTerraform(this._destination.internalValue),
      trigger: cdktf.listMapper(apiExtensionTriggerToTerraform, true)(this._trigger.internalValue),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_in_ms: {
        value: cdktf.numberToHclTerraform(this._timeoutInMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      destination: {
        value: apiExtensionDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiExtensionDestinationList",
      },
      trigger: {
        value: cdktf.listMapperHcl(apiExtensionTriggerToHclTerraform, true)(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiExtensionTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
