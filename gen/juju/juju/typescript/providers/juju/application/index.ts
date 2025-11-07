// https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application specific configuration. Must evaluate to a string, integer or boolean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#config Application#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Constraints imposed on this application. Changing this value will cause the application to be destroyed and recreated by terraform. Multiple constraints can be provided as a space-separated list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#constraints Application#constraints}
  */
  readonly constraints?: string;
  /**
  * Configure endpoint bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#endpoint_bindings Application#endpoint_bindings}
  */
  readonly endpointBindings?: ApplicationEndpointBindings[] | cdktf.IResolvable;
  /**
  * Specify the target machines for the application's units. The number of machines in the set indicates the unit count for the application. Removing a machine from the set will remove the application's unit residing on it. `machines` is mutually exclusive with `units`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#machines Application#machines}
  */
  readonly machines?: string[];
  /**
  * The UUID of the model where the application is to be deployed. Changing this value will cause the application to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#model_uuid Application#model_uuid}
  */
  readonly modelUuid: string;
  /**
  * A custom name for the application deployment. If empty, uses the charm's name.Changing this value will cause the application to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * 
  * 	OCI image registry credentials for OCI images specified in the charm resources. The map key is the registry URL.
  * 
  * 	If the charm resource requires authentication, supply a username and password that will be passed to the Juju API and added to the Kubernetes cluster.
  * 
  * 	The registry credentials will only be used if the URL of the registry is a partial match for the OCI image URL specified in the charm resources.
  * 	An OCI image URL is considered a match for a registry URL if the URL without the OCI image tag matches the registry URL. For example, 
  * 	a charm OCI resource specified as "registry.example.com:5000/path/image:tag" will match a registry entry with key "registry.example.com:5000/path" 
  * 	but not "registry.example.com:5000" nor "registry.example.com".
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#registry_credentials Application#registry_credentials}
  */
  readonly registryCredentials?: { [key: string]: ApplicationRegistryCredentials } | cdktf.IResolvable;
  /**
  * 
  * Charm resources. Must evaluate to a string. A resource could be a resource revision number from CharmHub or a custom OCI image resource.
  * Specify a resource other than the default for a charm. Note that not all charms have resources.
  * 
  * Notes:
  * * A resource can be specified by a revision number or by URL to a OCI image repository. Resources of type 'file' can only be specified by revision number. Resources of type 'oci-image' can be specified by revision number or URL.
  * * A resource can be added or changed at any time. If the charm has resources and None is specified in the plan, Juju will use the resource defined in the charm's specified channel.
  * * If a charm is refreshed, by changing the charm revision or channel and if the resource is specified by a revision in the plan, Juju will use the resource defined in the plan.
  * * Resources specified by URL to an OCI image repository will never be refreshed (upgraded) by juju during a charm refresh unless explicitly changed in the plan.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#resources Application#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * Storage directives (constraints) for the juju application. The map key is the label of the storage defined by the charm, the map value is the storage directive in the form [<pool>,][<count>,][<size>]  where at least one constraint must be specified. See https://documentation.ubuntu.com/juju/3.6/reference/storage/ for more details. If a pool is not specified, the model's default pool will be used. Changing an existing key/value pair will cause the application to be replaced. Adding a new key/value pair will add storage to the application on upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#storage_directives Application#storage_directives}
  */
  readonly storageDirectives?: { [key: string]: string };
  /**
  * Set the trust for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#trust Application#trust}
  */
  readonly trust?: boolean | cdktf.IResolvable;
  /**
  * The number of application units to deploy for the charm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#units Application#units}
  */
  readonly units?: number;
  /**
  * charm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#charm Application#charm}
  */
  readonly charm?: ApplicationCharm[] | cdktf.IResolvable;
  /**
  * expose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#expose Application#expose}
  */
  readonly expose?: ApplicationExpose[] | cdktf.IResolvable;
}
export interface ApplicationEndpointBindings {
  /**
  * Name of the endpoint to bind to a space. Keep null (or undefined) to define default binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#endpoint Application#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Name of the space to bind the endpoint to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#space Application#space}
  */
  readonly space: string;
}

export function applicationEndpointBindingsToTerraform(struct?: ApplicationEndpointBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    space: cdktf.stringToTerraform(struct!.space),
  }
}


export function applicationEndpointBindingsToHclTerraform(struct?: ApplicationEndpointBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEndpointBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEndpointBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEndpointBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._space = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._space = value.space;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }
}

export class ApplicationEndpointBindingsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEndpointBindings[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEndpointBindingsOutputReference {
    return new ApplicationEndpointBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationRegistryCredentials {
  /**
  * The password for authenticating to the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#password Application#password}
  */
  readonly password: string;
  /**
  * The username for authenticating to the registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#username Application#username}
  */
  readonly username: string;
}

export function applicationRegistryCredentialsToTerraform(struct?: ApplicationRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function applicationRegistryCredentialsToHclTerraform(struct?: ApplicationRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class ApplicationRegistryCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ApplicationRegistryCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistryCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ApplicationRegistryCredentialsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ApplicationRegistryCredentials } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ApplicationRegistryCredentialsOutputReference {
    return new ApplicationRegistryCredentialsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ApplicationStorage {
}

export function applicationStorageToTerraform(struct?: ApplicationStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationStorageToHclTerraform(struct?: ApplicationStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }
}

export class ApplicationStorageList extends cdktf.ComplexList {

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
  public get(index: number): ApplicationStorageOutputReference {
    return new ApplicationStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationCharm {
  /**
  * The operating system on which to deploy. E.g. ubuntu@22.04. Changing this value for machine charms will trigger a replace by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#base Application#base}
  */
  readonly base?: string;
  /**
  * The channel to use when deploying a charm. Specified as \<track>/\<risk>/\<branch>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#channel Application#channel}
  */
  readonly channel?: string;
  /**
  * The name of the charm to be deployed.  Changing this value will cause the application to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * The revision of the charm to deploy. During the update phase, the charm revision should be update before config update, to avoid issues with config parameters parsing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#revision Application#revision}
  */
  readonly revision?: number;
}

export function applicationCharmToTerraform(struct?: ApplicationCharm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.stringToTerraform(struct!.base),
    channel: cdktf.stringToTerraform(struct!.channel),
    name: cdktf.stringToTerraform(struct!.name),
    revision: cdktf.numberToTerraform(struct!.revision),
  }
}


export function applicationCharmToHclTerraform(struct?: ApplicationCharm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.stringToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
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
    revision: {
      value: cdktf.numberToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationCharmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationCharm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationCharm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._channel = undefined;
      this._name = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._channel = value.channel;
      this._name = value.name;
      this._revision = value.revision;
    }
  }

  // base - computed: true, optional: true, required: false
  private _base?: string; 
  public get base() {
    return this.getStringAttribute('base');
  }
  public set base(value: string) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // channel - computed: true, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // revision - computed: true, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}

export class ApplicationCharmList extends cdktf.ComplexList {
  public internalValue? : ApplicationCharm[] | cdktf.IResolvable

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
  public get(index: number): ApplicationCharmOutputReference {
    return new ApplicationCharmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationExpose {
  /**
  * A comma-delimited list of CIDRs that should be able to access the application ports once exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#cidrs Application#cidrs}
  */
  readonly cidrs?: string;
  /**
  * Expose only the ports that charms have opened for this comma-delimited list of endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#endpoints Application#endpoints}
  */
  readonly endpoints?: string;
  /**
  * A comma-delimited list of spaces that should be able to access the application ports once exposed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#spaces Application#spaces}
  */
  readonly spaces?: string;
}

export function applicationExposeToTerraform(struct?: ApplicationExpose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.stringToTerraform(struct!.cidrs),
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    spaces: cdktf.stringToTerraform(struct!.spaces),
  }
}


export function applicationExposeToHclTerraform(struct?: ApplicationExpose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.stringToHclTerraform(struct!.cidrs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spaces: {
      value: cdktf.stringToHclTerraform(struct!.spaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationExposeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationExpose | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._spaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaces = this._spaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationExpose | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrs = undefined;
      this._endpoints = undefined;
      this._spaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrs = value.cidrs;
      this._endpoints = value.endpoints;
      this._spaces = value.spaces;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string; 
  public get cidrs() {
    return this.getStringAttribute('cidrs');
  }
  public set cidrs(value: string) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // spaces - computed: false, optional: true, required: false
  private _spaces?: string; 
  public get spaces() {
    return this.getStringAttribute('spaces');
  }
  public set spaces(value: string) {
    this._spaces = value;
  }
  public resetSpaces() {
    this._spaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spacesInput() {
    return this._spaces;
  }
}

export class ApplicationExposeList extends cdktf.ComplexList {
  public internalValue? : ApplicationExpose[] | cdktf.IResolvable

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
  public get(index: number): ApplicationExposeOutputReference {
    return new ApplicationExposeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application juju_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/resources/application juju_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_application',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._constraints = config.constraints;
    this._endpointBindings.internalValue = config.endpointBindings;
    this._machines = config.machines;
    this._modelUuid = config.modelUuid;
    this._name = config.name;
    this._registryCredentials.internalValue = config.registryCredentials;
    this._resources = config.resources;
    this._storageDirectives = config.storageDirectives;
    this._trust = config.trust;
    this._units = config.units;
    this._charm.internalValue = config.charm;
    this._expose.internalValue = config.expose;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints?: string; 
  public get constraints() {
    return this.getStringAttribute('constraints');
  }
  public set constraints(value: string) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
  }

  // endpoint_bindings - computed: false, optional: true, required: false
  private _endpointBindings = new ApplicationEndpointBindingsList(this, "endpoint_bindings", true);
  public get endpointBindings() {
    return this._endpointBindings;
  }
  public putEndpointBindings(value: ApplicationEndpointBindings[] | cdktf.IResolvable) {
    this._endpointBindings.internalValue = value;
  }
  public resetEndpointBindings() {
    this._endpointBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointBindingsInput() {
    return this._endpointBindings.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machines - computed: true, optional: true, required: false
  private _machines?: string[]; 
  public get machines() {
    return cdktf.Fn.tolist(this.getListAttribute('machines'));
  }
  public set machines(value: string[]) {
    this._machines = value;
  }
  public resetMachines() {
    this._machines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinesInput() {
    return this._machines;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_uuid - computed: false, optional: false, required: true
  private _modelUuid?: string; 
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }
  public set modelUuid(value: string) {
    this._modelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUuidInput() {
    return this._modelUuid;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // registry_credentials - computed: false, optional: true, required: false
  private _registryCredentials = new ApplicationRegistryCredentialsMap(this, "registry_credentials");
  public get registryCredentials() {
    return this._registryCredentials;
  }
  public putRegistryCredentials(value: { [key: string]: ApplicationRegistryCredentials } | cdktf.IResolvable) {
    this._registryCredentials.internalValue = value;
  }
  public resetRegistryCredentials() {
    this._registryCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryCredentialsInput() {
    return this._registryCredentials.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // storage - computed: true, optional: false, required: false
  private _storage = new ApplicationStorageList(this, "storage", true);
  public get storage() {
    return this._storage;
  }

  // storage_directives - computed: false, optional: true, required: false
  private _storageDirectives?: { [key: string]: string }; 
  public get storageDirectives() {
    return this.getStringMapAttribute('storage_directives');
  }
  public set storageDirectives(value: { [key: string]: string }) {
    this._storageDirectives = value;
  }
  public resetStorageDirectives() {
    this._storageDirectives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDirectivesInput() {
    return this._storageDirectives;
  }

  // trust - computed: true, optional: true, required: false
  private _trust?: boolean | cdktf.IResolvable; 
  public get trust() {
    return this.getBooleanAttribute('trust');
  }
  public set trust(value: boolean | cdktf.IResolvable) {
    this._trust = value;
  }
  public resetTrust() {
    this._trust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust;
  }

  // units - computed: true, optional: true, required: false
  private _units?: number; 
  public get units() {
    return this.getNumberAttribute('units');
  }
  public set units(value: number) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // charm - computed: false, optional: true, required: false
  private _charm = new ApplicationCharmList(this, "charm", false);
  public get charm() {
    return this._charm;
  }
  public putCharm(value: ApplicationCharm[] | cdktf.IResolvable) {
    this._charm.internalValue = value;
  }
  public resetCharm() {
    this._charm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charmInput() {
    return this._charm.internalValue;
  }

  // expose - computed: false, optional: true, required: false
  private _expose = new ApplicationExposeList(this, "expose", false);
  public get expose() {
    return this._expose;
  }
  public putExpose(value: ApplicationExpose[] | cdktf.IResolvable) {
    this._expose.internalValue = value;
  }
  public resetExpose() {
    this._expose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      constraints: cdktf.stringToTerraform(this._constraints),
      endpoint_bindings: cdktf.listMapper(applicationEndpointBindingsToTerraform, false)(this._endpointBindings.internalValue),
      machines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._machines),
      model_uuid: cdktf.stringToTerraform(this._modelUuid),
      name: cdktf.stringToTerraform(this._name),
      registry_credentials: cdktf.hashMapper(applicationRegistryCredentialsToTerraform)(this._registryCredentials.internalValue),
      resources: cdktf.hashMapper(cdktf.stringToTerraform)(this._resources),
      storage_directives: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageDirectives),
      trust: cdktf.booleanToTerraform(this._trust),
      units: cdktf.numberToTerraform(this._units),
      charm: cdktf.listMapper(applicationCharmToTerraform, true)(this._charm.internalValue),
      expose: cdktf.listMapper(applicationExposeToTerraform, true)(this._expose.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      constraints: {
        value: cdktf.stringToHclTerraform(this._constraints),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_bindings: {
        value: cdktf.listMapperHcl(applicationEndpointBindingsToHclTerraform, false)(this._endpointBindings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEndpointBindingsList",
      },
      machines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._machines),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      model_uuid: {
        value: cdktf.stringToHclTerraform(this._modelUuid),
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
      registry_credentials: {
        value: cdktf.hashMapperHcl(applicationRegistryCredentialsToHclTerraform)(this._registryCredentials.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ApplicationRegistryCredentialsMap",
      },
      resources: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resources),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      storage_directives: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._storageDirectives),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trust: {
        value: cdktf.booleanToHclTerraform(this._trust),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      units: {
        value: cdktf.numberToHclTerraform(this._units),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      charm: {
        value: cdktf.listMapperHcl(applicationCharmToHclTerraform, true)(this._charm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationCharmList",
      },
      expose: {
        value: cdktf.listMapperHcl(applicationExposeToHclTerraform, true)(this._expose.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationExposeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
