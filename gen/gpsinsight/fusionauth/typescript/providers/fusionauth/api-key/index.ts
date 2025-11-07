// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#description ApiKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#id ApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Id of the IP Access Control List limiting access to this API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#ip_access_control_list_id ApiKey#ip_access_control_list_id}
  */
  readonly ipAccessControlListId?: string;
  /**
  * API key string. When you create an API key the key is defaulted to a secure random value but the API key is simply a string, so you may call it super-secret-key if you’d like. However a long and random value makes a good API key in that it is unique and difficult to guess.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#key ApiKey#key}
  */
  readonly key?: string;
  /**
  * The Id to use for the new Form. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#key_id ApiKey#key_id}
  */
  readonly keyId?: string;
  /**
  * The unique Id of the Tenant. This value is required if the key is meant to be tenant scoped. Tenant scoped keys can only be used to access users and other tenant scoped objects for the specified tenant. This value is read-only once the key is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#tenant_id ApiKey#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * permissions_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#permissions_endpoints ApiKey#permissions_endpoints}
  */
  readonly permissionsEndpoints?: ApiKeyPermissionsEndpoints[] | cdktf.IResolvable;
}
export interface ApiKeyPermissionsEndpoints {
  /**
  * HTTP DELETE Verb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#delete ApiKey#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#endpoint ApiKey#endpoint}
  */
  readonly endpoint: string;
  /**
  * HTTP GET Verb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#get ApiKey#get}
  */
  readonly get?: boolean | cdktf.IResolvable;
  /**
  * HTTP PATCH Verb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#patch ApiKey#patch}
  */
  readonly patch?: boolean | cdktf.IResolvable;
  /**
  * HTTP POST Verb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#post ApiKey#post}
  */
  readonly post?: boolean | cdktf.IResolvable;
  /**
  * HTTP PUT Verb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#put ApiKey#put}
  */
  readonly put?: boolean | cdktf.IResolvable;
}

export function apiKeyPermissionsEndpointsToTerraform(struct?: ApiKeyPermissionsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.booleanToTerraform(struct!.delete),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    get: cdktf.booleanToTerraform(struct!.get),
    patch: cdktf.booleanToTerraform(struct!.patch),
    post: cdktf.booleanToTerraform(struct!.post),
    put: cdktf.booleanToTerraform(struct!.put),
  }
}


export function apiKeyPermissionsEndpointsToHclTerraform(struct?: ApiKeyPermissionsEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    get: {
      value: cdktf.booleanToHclTerraform(struct!.get),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patch: {
      value: cdktf.booleanToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post: {
      value: cdktf.booleanToHclTerraform(struct!.post),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    put: {
      value: cdktf.booleanToHclTerraform(struct!.put),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiKeyPermissionsEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiKeyPermissionsEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._get !== undefined) {
      hasAnyValues = true;
      internalValueResult.get = this._get;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._post !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post;
    }
    if (this._put !== undefined) {
      hasAnyValues = true;
      internalValueResult.put = this._put;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiKeyPermissionsEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
      this._endpoint = undefined;
      this._get = undefined;
      this._patch = undefined;
      this._post = undefined;
      this._put = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
      this._endpoint = value.endpoint;
      this._get = value.get;
      this._patch = value.patch;
      this._post = value.post;
      this._put = value.put;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // get - computed: false, optional: true, required: false
  private _get?: boolean | cdktf.IResolvable; 
  public get get() {
    return this.getBooleanAttribute('get');
  }
  public set get(value: boolean | cdktf.IResolvable) {
    this._get = value;
  }
  public resetGet() {
    this._get = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get getInput() {
    return this._get;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: boolean | cdktf.IResolvable; 
  public get patch() {
    return this.getBooleanAttribute('patch');
  }
  public set patch(value: boolean | cdktf.IResolvable) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // post - computed: false, optional: true, required: false
  private _post?: boolean | cdktf.IResolvable; 
  public get post() {
    return this.getBooleanAttribute('post');
  }
  public set post(value: boolean | cdktf.IResolvable) {
    this._post = value;
  }
  public resetPost() {
    this._post = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post;
  }

  // put - computed: false, optional: true, required: false
  private _put?: boolean | cdktf.IResolvable; 
  public get put() {
    return this.getBooleanAttribute('put');
  }
  public set put(value: boolean | cdktf.IResolvable) {
    this._put = value;
  }
  public resetPut() {
    this._put = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putInput() {
    return this._put;
  }
}

export class ApiKeyPermissionsEndpointsList extends cdktf.ComplexList {
  public internalValue? : ApiKeyPermissionsEndpoints[] | cdktf.IResolvable

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
  public get(index: number): ApiKeyPermissionsEndpointsOutputReference {
    return new ApiKeyPermissionsEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key fusionauth_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/api_key fusionauth_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_api_key',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ipAccessControlListId = config.ipAccessControlListId;
    this._key = config.key;
    this._keyId = config.keyId;
    this._tenantId = config.tenantId;
    this._permissionsEndpoints.internalValue = config.permissionsEndpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ip_access_control_list_id - computed: false, optional: true, required: false
  private _ipAccessControlListId?: string; 
  public get ipAccessControlListId() {
    return this.getStringAttribute('ip_access_control_list_id');
  }
  public set ipAccessControlListId(value: string) {
    this._ipAccessControlListId = value;
  }
  public resetIpAccessControlListId() {
    this._ipAccessControlListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessControlListIdInput() {
    return this._ipAccessControlListId;
  }

  // key - computed: true, optional: true, required: false
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

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // permissions_endpoints - computed: false, optional: true, required: false
  private _permissionsEndpoints = new ApiKeyPermissionsEndpointsList(this, "permissions_endpoints", true);
  public get permissionsEndpoints() {
    return this._permissionsEndpoints;
  }
  public putPermissionsEndpoints(value: ApiKeyPermissionsEndpoints[] | cdktf.IResolvable) {
    this._permissionsEndpoints.internalValue = value;
  }
  public resetPermissionsEndpoints() {
    this._permissionsEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsEndpointsInput() {
    return this._permissionsEndpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_access_control_list_id: cdktf.stringToTerraform(this._ipAccessControlListId),
      key: cdktf.stringToTerraform(this._key),
      key_id: cdktf.stringToTerraform(this._keyId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      permissions_endpoints: cdktf.listMapper(apiKeyPermissionsEndpointsToTerraform, true)(this._permissionsEndpoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ip_access_control_list_id: {
        value: cdktf.stringToHclTerraform(this._ipAccessControlListId),
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
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_endpoints: {
        value: cdktf.listMapperHcl(apiKeyPermissionsEndpointsToHclTerraform, true)(this._permissionsEndpoints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiKeyPermissionsEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
