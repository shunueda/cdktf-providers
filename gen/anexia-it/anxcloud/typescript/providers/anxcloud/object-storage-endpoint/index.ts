// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the customer the resource should be assigned to (mandatory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#customer ObjectStorageEndpoint#customer}
  */
  readonly customer: string;
  /**
  * Indicates if the endpoint is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#enabled ObjectStorageEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Password of the endpoint user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#endpoint_password ObjectStorageEndpoint#endpoint_password}
  */
  readonly endpointPassword: string;
  /**
  * Name of the endpoint user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#endpoint_user ObjectStorageEndpoint#endpoint_user}
  */
  readonly endpointUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#id ObjectStorageEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the reseller the resource should be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#reseller ObjectStorageEndpoint#reseller}
  */
  readonly reseller?: string;
  /**
  * List of resource pool identifiers to which the resource should be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#resource_pools ObjectStorageEndpoint#resource_pools}
  */
  readonly resourcePools?: string[];
  /**
  * Defines whether a resource is shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#share ObjectStorageEndpoint#share}
  */
  readonly share?: boolean | cdktf.IResolvable;
  /**
  * URL of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#url ObjectStorageEndpoint#url}
  */
  readonly url: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#timeouts ObjectStorageEndpoint#timeouts}
  */
  readonly timeouts?: ObjectStorageEndpointTimeouts;
}
export interface ObjectStorageEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#create ObjectStorageEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#delete ObjectStorageEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#read ObjectStorageEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#update ObjectStorageEndpoint#update}
  */
  readonly update?: string;
}

export function objectStorageEndpointTimeoutsToTerraform(struct?: ObjectStorageEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function objectStorageEndpointTimeoutsToHclTerraform(struct?: ObjectStorageEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint anxcloud_object_storage_endpoint}
*/
export class ObjectStorageEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_object_storage_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageEndpoint to import
  * @param importFromId The id of the existing ObjectStorageEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_object_storage_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/resources/object_storage_endpoint anxcloud_object_storage_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'anxcloud_object_storage_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'anxcloud',
        providerVersion: '0.7.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customer = config.customer;
    this._enabled = config.enabled;
    this._endpointPassword = config.endpointPassword;
    this._endpointUser = config.endpointUser;
    this._id = config.id;
    this._reseller = config.reseller;
    this._resourcePools = config.resourcePools;
    this._share = config.share;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // customer - computed: false, optional: false, required: true
  private _customer?: string; 
  public get customer() {
    return this.getStringAttribute('customer');
  }
  public set customer(value: string) {
    this._customer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInput() {
    return this._customer;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint_password - computed: false, optional: false, required: true
  private _endpointPassword?: string; 
  public get endpointPassword() {
    return this.getStringAttribute('endpoint_password');
  }
  public set endpointPassword(value: string) {
    this._endpointPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPasswordInput() {
    return this._endpointPassword;
  }

  // endpoint_user - computed: false, optional: false, required: true
  private _endpointUser?: string; 
  public get endpointUser() {
    return this.getStringAttribute('endpoint_user');
  }
  public set endpointUser(value: string) {
    this._endpointUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUserInput() {
    return this._endpointUser;
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

  // reseller - computed: false, optional: true, required: false
  private _reseller?: string; 
  public get reseller() {
    return this.getStringAttribute('reseller');
  }
  public set reseller(value: string) {
    this._reseller = value;
  }
  public resetReseller() {
    this._reseller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resellerInput() {
    return this._reseller;
  }

  // resource_pools - computed: false, optional: true, required: false
  private _resourcePools?: string[]; 
  public get resourcePools() {
    return this.getListAttribute('resource_pools');
  }
  public set resourcePools(value: string[]) {
    this._resourcePools = value;
  }
  public resetResourcePools() {
    this._resourcePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolsInput() {
    return this._resourcePools;
  }

  // share - computed: false, optional: true, required: false
  private _share?: boolean | cdktf.IResolvable; 
  public get share() {
    return this.getBooleanAttribute('share');
  }
  public set share(value: boolean | cdktf.IResolvable) {
    this._share = value;
  }
  public resetShare() {
    this._share = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ObjectStorageEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObjectStorageEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer: cdktf.stringToTerraform(this._customer),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_password: cdktf.stringToTerraform(this._endpointPassword),
      endpoint_user: cdktf.stringToTerraform(this._endpointUser),
      id: cdktf.stringToTerraform(this._id),
      reseller: cdktf.stringToTerraform(this._reseller),
      resource_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourcePools),
      share: cdktf.booleanToTerraform(this._share),
      url: cdktf.stringToTerraform(this._url),
      timeouts: objectStorageEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer: {
        value: cdktf.stringToHclTerraform(this._customer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_password: {
        value: cdktf.stringToHclTerraform(this._endpointPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_user: {
        value: cdktf.stringToHclTerraform(this._endpointUser),
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
      reseller: {
        value: cdktf.stringToHclTerraform(this._reseller),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_pools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourcePools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      share: {
        value: cdktf.booleanToHclTerraform(this._share),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: objectStorageEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStorageEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
