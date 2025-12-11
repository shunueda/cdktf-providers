// https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HarnessK3SConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, the builtin (flannel) CNI will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#disable_cni HarnessK3S#disable_cni}
  */
  readonly disableCni?: boolean | cdktf.IResolvable;
  /**
  * When true, the builtin metrics server will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#disable_metrics_server HarnessK3S#disable_metrics_server}
  */
  readonly disableMetricsServer?: boolean | cdktf.IResolvable;
  /**
  * When true, the builtin network policy controller will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#disable_network_policy HarnessK3S#disable_network_policy}
  */
  readonly disableNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * When true, the builtin traefik ingress controller will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#disable_traefik HarnessK3S#disable_traefik}
  */
  readonly disableTraefik?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#hooks HarnessK3S#hooks}
  */
  readonly hooks?: HarnessK3SHooks;
  /**
  * The full image reference to use for the k3s container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#image HarnessK3S#image}
  */
  readonly image?: string;
  /**
  * The inventory this harness belongs to. This is received as a direct input from a data.imagetest_inventory data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#inventory HarnessK3S#inventory}
  */
  readonly inventory: HarnessK3SInventory;
  /**
  * The KubeletConfiguration to be applied to the underlying k3s cluster in YAML format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#kubelet_config HarnessK3S#kubelet_config}
  */
  readonly kubeletConfig?: string;
  /**
  * The name of the harness. This must be unique within the scope of the provided inventory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#name HarnessK3S#name}
  */
  readonly name: string;
  /**
  * A map of existing networks to attach the harness containers to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#networks HarnessK3S#networks}
  */
  readonly networks?: { [key: string]: HarnessK3SNetworks } | cdktf.IResolvable;
  /**
  * A map of registries containing configuration for optional auth, tls, and mirror configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#registries HarnessK3S#registries}
  */
  readonly registries?: { [key: string]: HarnessK3SRegistries } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#resources HarnessK3S#resources}
  */
  readonly resources?: HarnessK3SResources;
  /**
  * A map of configuration for the sandbox container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#sandbox HarnessK3S#sandbox}
  */
  readonly sandbox?: HarnessK3SSandbox;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#timeouts HarnessK3S#timeouts}
  */
  readonly timeouts?: HarnessK3STimeouts;
}
export interface HarnessK3SHooks {
  /**
  * A list of commands to run after the k3s container successfully starts (the api server is available)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#post_start HarnessK3S#post_start}
  */
  readonly postStart?: string[];
  /**
  * Not supported for this harness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#pre_start HarnessK3S#pre_start}
  */
  readonly preStart?: string[];
}

export function harnessK3SHooksToTerraform(struct?: HarnessK3SHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postStart),
    pre_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preStart),
  }
}


export function harnessK3SHooksToHclTerraform(struct?: HarnessK3SHooks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pre_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SHooksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SHooks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStart = this._postStart;
    }
    if (this._preStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStart = this._preStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SHooks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postStart = undefined;
      this._preStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postStart = value.postStart;
      this._preStart = value.preStart;
    }
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: string[]; 
  public get postStart() {
    return this.getListAttribute('post_start');
  }
  public set postStart(value: string[]) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }

  // pre_start - computed: false, optional: true, required: false
  private _preStart?: string[]; 
  public get preStart() {
    return this.getListAttribute('pre_start');
  }
  public set preStart(value: string[]) {
    this._preStart = value;
  }
  public resetPreStart() {
    this._preStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStartInput() {
    return this._preStart;
  }
}
export interface HarnessK3SInventory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#seed HarnessK3S#seed}
  */
  readonly seed: string;
}

export function harnessK3SInventoryToTerraform(struct?: HarnessK3SInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed: cdktf.stringToTerraform(struct!.seed),
  }
}


export function harnessK3SInventoryToHclTerraform(struct?: HarnessK3SInventory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seed: {
      value: cdktf.stringToHclTerraform(struct!.seed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SInventoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SInventory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seed = this._seed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SInventory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seed = value.seed;
    }
  }

  // seed - computed: false, optional: false, required: true
  private _seed?: string; 
  public get seed() {
    return this.getStringAttribute('seed');
  }
  public set seed(value: string) {
    this._seed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seedInput() {
    return this._seed;
  }
}
export interface HarnessK3SNetworks {
  /**
  * The name of the existing network to attach the harness containers to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#name HarnessK3S#name}
  */
  readonly name: string;
}

export function harnessK3SNetworksToTerraform(struct?: HarnessK3SNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function harnessK3SNetworksToHclTerraform(struct?: HarnessK3SNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HarnessK3SNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class HarnessK3SNetworksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: HarnessK3SNetworks } | cdktf.IResolvable

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
  public get(key: string): HarnessK3SNetworksOutputReference {
    return new HarnessK3SNetworksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface HarnessK3SRegistriesAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#auth HarnessK3S#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#password HarnessK3S#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#username HarnessK3S#username}
  */
  readonly username?: string;
}

export function harnessK3SRegistriesAuthToTerraform(struct?: HarnessK3SRegistriesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function harnessK3SRegistriesAuthToHclTerraform(struct?: HarnessK3SRegistriesAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class HarnessK3SRegistriesAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SRegistriesAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
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

  public set internalValue(value: HarnessK3SRegistriesAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
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
      this._auth = value.auth;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
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
export interface HarnessK3SRegistriesMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#endpoints HarnessK3S#endpoints}
  */
  readonly endpoints?: string[];
}

export function harnessK3SRegistriesMirrorToTerraform(struct?: HarnessK3SRegistriesMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
  }
}


export function harnessK3SRegistriesMirrorToHclTerraform(struct?: HarnessK3SRegistriesMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SRegistriesMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SRegistriesMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SRegistriesMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
    }
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }
}
export interface HarnessK3SRegistriesTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#ca_file HarnessK3S#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#cert_file HarnessK3S#cert_file}
  */
  readonly certFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#key_file HarnessK3S#key_file}
  */
  readonly keyFile?: string;
}

export function harnessK3SRegistriesTlsToTerraform(struct?: HarnessK3SRegistriesTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function harnessK3SRegistriesTlsToHclTerraform(struct?: HarnessK3SRegistriesTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SRegistriesTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SRegistriesTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SRegistriesTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._certFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._certFile = value.certFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface HarnessK3SRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#auth HarnessK3S#auth}
  */
  readonly auth?: HarnessK3SRegistriesAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#mirror HarnessK3S#mirror}
  */
  readonly mirror?: HarnessK3SRegistriesMirror;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#tls HarnessK3S#tls}
  */
  readonly tls?: HarnessK3SRegistriesTls;
}

export function harnessK3SRegistriesToTerraform(struct?: HarnessK3SRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: harnessK3SRegistriesAuthToTerraform(struct!.auth),
    mirror: harnessK3SRegistriesMirrorToTerraform(struct!.mirror),
    tls: harnessK3SRegistriesTlsToTerraform(struct!.tls),
  }
}


export function harnessK3SRegistriesToHclTerraform(struct?: HarnessK3SRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: harnessK3SRegistriesAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "HarnessK3SRegistriesAuth",
    },
    mirror: {
      value: harnessK3SRegistriesMirrorToHclTerraform(struct!.mirror),
      isBlock: true,
      type: "struct",
      storageClassType: "HarnessK3SRegistriesMirror",
    },
    tls: {
      value: harnessK3SRegistriesTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "HarnessK3SRegistriesTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HarnessK3SRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._mirror.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._mirror.internalValue = value.mirror;
      this._tls.internalValue = value.tls;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new HarnessK3SRegistriesAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: HarnessK3SRegistriesAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new HarnessK3SRegistriesMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: HarnessK3SRegistriesMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new HarnessK3SRegistriesTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: HarnessK3SRegistriesTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class HarnessK3SRegistriesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: HarnessK3SRegistries } | cdktf.IResolvable

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
  public get(key: string): HarnessK3SRegistriesOutputReference {
    return new HarnessK3SRegistriesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface HarnessK3SResourcesCpu {
  /**
  * Limit of memory the harness container can consume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#limit HarnessK3S#limit}
  */
  readonly limit?: string;
  /**
  * Amount of memory requested for the harness container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#request HarnessK3S#request}
  */
  readonly request?: string;
}

export function harnessK3SResourcesCpuToTerraform(struct?: HarnessK3SResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function harnessK3SResourcesCpuToHclTerraform(struct?: HarnessK3SResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._request = value.request;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // request - computed: true, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface HarnessK3SResourcesMemory {
  /**
  * Limit of memory the harness container can consume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#limit HarnessK3S#limit}
  */
  readonly limit?: string;
  /**
  * Amount of memory requested for the harness container. The default is the bare minimum required by k3s. Anything lower should be used with caution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#request HarnessK3S#request}
  */
  readonly request?: string;
}

export function harnessK3SResourcesMemoryToTerraform(struct?: HarnessK3SResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function harnessK3SResourcesMemoryToHclTerraform(struct?: HarnessK3SResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._request = value.request;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // request - computed: true, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface HarnessK3SResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#cpu HarnessK3S#cpu}
  */
  readonly cpu?: HarnessK3SResourcesCpu;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#memory HarnessK3S#memory}
  */
  readonly memory?: HarnessK3SResourcesMemory;
}

export function harnessK3SResourcesToTerraform(struct?: HarnessK3SResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: harnessK3SResourcesCpuToTerraform(struct!.cpu),
    memory: harnessK3SResourcesMemoryToTerraform(struct!.memory),
  }
}


export function harnessK3SResourcesToHclTerraform(struct?: HarnessK3SResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: harnessK3SResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "HarnessK3SResourcesCpu",
    },
    memory: {
      value: harnessK3SResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "HarnessK3SResourcesMemory",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new HarnessK3SResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: HarnessK3SResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new HarnessK3SResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: HarnessK3SResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface HarnessK3SSandboxLayers {
  /**
  * The relative or absolute path on the host to the source directory to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#source HarnessK3S#source}
  */
  readonly source: string;
  /**
  * The absolute path on the container to mount the source directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#target HarnessK3S#target}
  */
  readonly target: string;
}

export function harnessK3SSandboxLayersToTerraform(struct?: HarnessK3SSandboxLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function harnessK3SSandboxLayersToHclTerraform(struct?: HarnessK3SSandboxLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SSandboxLayersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HarnessK3SSandboxLayers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SSandboxLayers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class HarnessK3SSandboxLayersList extends cdktf.ComplexList {
  public internalValue? : HarnessK3SSandboxLayers[] | cdktf.IResolvable

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
  public get(index: number): HarnessK3SSandboxLayersOutputReference {
    return new HarnessK3SSandboxLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HarnessK3SSandboxMounts {
  /**
  * The absolute path on the container to mount the source directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#destination HarnessK3S#destination}
  */
  readonly destination: string;
  /**
  * Whether the mount should be read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#read_only HarnessK3S#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The relative or absolute path on the host to the source directory to mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#source HarnessK3S#source}
  */
  readonly source: string;
}

export function harnessK3SSandboxMountsToTerraform(struct?: HarnessK3SSandboxMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function harnessK3SSandboxMountsToHclTerraform(struct?: HarnessK3SSandboxMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SSandboxMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HarnessK3SSandboxMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SSandboxMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._readOnly = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._readOnly = value.readOnly;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class HarnessK3SSandboxMountsList extends cdktf.ComplexList {
  public internalValue? : HarnessK3SSandboxMounts[] | cdktf.IResolvable

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
  public get(index: number): HarnessK3SSandboxMountsOutputReference {
    return new HarnessK3SSandboxMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HarnessK3SSandboxNetworks {
  /**
  * The name of the existing network to attach the container to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#name HarnessK3S#name}
  */
  readonly name: string;
}

export function harnessK3SSandboxNetworksToTerraform(struct?: HarnessK3SSandboxNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function harnessK3SSandboxNetworksToHclTerraform(struct?: HarnessK3SSandboxNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SSandboxNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HarnessK3SSandboxNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SSandboxNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class HarnessK3SSandboxNetworksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: HarnessK3SSandboxNetworks } | cdktf.IResolvable

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
  public get(key: string): HarnessK3SSandboxNetworksOutputReference {
    return new HarnessK3SSandboxNetworksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface HarnessK3SSandbox {
  /**
  * Environment variables to set on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#envs HarnessK3S#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * The full image reference to use for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#image HarnessK3S#image}
  */
  readonly image?: string;
  /**
  * A list of keyrings to add to the sandbox container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#keyrings HarnessK3S#keyrings}
  */
  readonly keyrings?: string[];
  /**
  * A list of layers to add to the sandbox container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#layers HarnessK3S#layers}
  */
  readonly layers?: HarnessK3SSandboxLayers[] | cdktf.IResolvable;
  /**
  * The list of mounts to create on the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#mounts HarnessK3S#mounts}
  */
  readonly mounts?: HarnessK3SSandboxMounts[] | cdktf.IResolvable;
  /**
  * A map of existing networks to attach the container to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#networks HarnessK3S#networks}
  */
  readonly networks?: { [key: string]: HarnessK3SSandboxNetworks } | cdktf.IResolvable;
  /**
  * A list of packages to install in the sandbox container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#packages HarnessK3S#packages}
  */
  readonly packages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#privileged HarnessK3S#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * A list of repositories to add to the sandbox container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#repositories HarnessK3S#repositories}
  */
  readonly repositories?: string[];
}

export function harnessK3SSandboxToTerraform(struct?: HarnessK3SSandbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envs),
    image: cdktf.stringToTerraform(struct!.image),
    keyrings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyrings),
    layers: cdktf.listMapper(harnessK3SSandboxLayersToTerraform, false)(struct!.layers),
    mounts: cdktf.listMapper(harnessK3SSandboxMountsToTerraform, false)(struct!.mounts),
    networks: cdktf.hashMapper(harnessK3SSandboxNetworksToTerraform)(struct!.networks),
    packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packages),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    repositories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repositories),
  }
}


export function harnessK3SSandboxToHclTerraform(struct?: HarnessK3SSandbox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyrings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyrings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layers: {
      value: cdktf.listMapperHcl(harnessK3SSandboxLayersToHclTerraform, false)(struct!.layers),
      isBlock: true,
      type: "list",
      storageClassType: "HarnessK3SSandboxLayersList",
    },
    mounts: {
      value: cdktf.listMapperHcl(harnessK3SSandboxMountsToHclTerraform, false)(struct!.mounts),
      isBlock: true,
      type: "list",
      storageClassType: "HarnessK3SSandboxMountsList",
    },
    networks: {
      value: cdktf.hashMapperHcl(harnessK3SSandboxNetworksToHclTerraform)(struct!.networks),
      isBlock: true,
      type: "map",
      storageClassType: "HarnessK3SSandboxNetworksMap",
    },
    packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repositories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repositories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3SSandboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3SSandbox | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envs !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyrings !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyrings = this._keyrings;
    }
    if (this._layers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layers = this._layers?.internalValue;
    }
    if (this._mounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mounts = this._mounts?.internalValue;
    }
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    if (this._packages !== undefined) {
      hasAnyValues = true;
      internalValueResult.packages = this._packages;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._repositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositories = this._repositories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3SSandbox | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envs = undefined;
      this._image = undefined;
      this._keyrings = undefined;
      this._layers.internalValue = undefined;
      this._mounts.internalValue = undefined;
      this._networks.internalValue = undefined;
      this._packages = undefined;
      this._privileged = undefined;
      this._repositories = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envs = value.envs;
      this._image = value.image;
      this._keyrings = value.keyrings;
      this._layers.internalValue = value.layers;
      this._mounts.internalValue = value.mounts;
      this._networks.internalValue = value.networks;
      this._packages = value.packages;
      this._privileged = value.privileged;
      this._repositories = value.repositories;
    }
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: { [key: string]: string }; 
  public get envs() {
    return this.getStringMapAttribute('envs');
  }
  public set envs(value: { [key: string]: string }) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // keyrings - computed: false, optional: true, required: false
  private _keyrings?: string[]; 
  public get keyrings() {
    return this.getListAttribute('keyrings');
  }
  public set keyrings(value: string[]) {
    this._keyrings = value;
  }
  public resetKeyrings() {
    this._keyrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringsInput() {
    return this._keyrings;
  }

  // layers - computed: false, optional: true, required: false
  private _layers = new HarnessK3SSandboxLayersList(this, "layers", false);
  public get layers() {
    return this._layers;
  }
  public putLayers(value: HarnessK3SSandboxLayers[] | cdktf.IResolvable) {
    this._layers.internalValue = value;
  }
  public resetLayers() {
    this._layers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers.internalValue;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts = new HarnessK3SSandboxMountsList(this, "mounts", false);
  public get mounts() {
    return this._mounts;
  }
  public putMounts(value: HarnessK3SSandboxMounts[] | cdktf.IResolvable) {
    this._mounts.internalValue = value;
  }
  public resetMounts() {
    this._mounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new HarnessK3SSandboxNetworksMap(this, "networks");
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: { [key: string]: HarnessK3SSandboxNetworks } | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // privileged - computed: true, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // repositories - computed: false, optional: true, required: false
  private _repositories?: string[]; 
  public get repositories() {
    return this.getListAttribute('repositories');
  }
  public set repositories(value: string[]) {
    this._repositories = value;
  }
  public resetRepositories() {
    this._repositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoriesInput() {
    return this._repositories;
  }
}
export interface HarnessK3STimeouts {
  /**
  * The maximum time to wait for the k3s harness to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#create HarnessK3S#create}
  */
  readonly create?: string;
}

export function harnessK3STimeoutsToTerraform(struct?: HarnessK3STimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function harnessK3STimeoutsToHclTerraform(struct?: HarnessK3STimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HarnessK3STimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HarnessK3STimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HarnessK3STimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s imagetest_harness_k3s}
*/
export class HarnessK3S extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "imagetest_harness_k3s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HarnessK3S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HarnessK3S to import
  * @param importFromId The id of the existing HarnessK3S that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HarnessK3S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "imagetest_harness_k3s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/imagetest/0.0.107/docs/resources/harness_k3s imagetest_harness_k3s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HarnessK3SConfig
  */
  public constructor(scope: Construct, id: string, config: HarnessK3SConfig) {
    super(scope, id, {
      terraformResourceType: 'imagetest_harness_k3s',
      terraformGeneratorMetadata: {
        providerName: 'imagetest',
        providerVersion: '0.0.107',
        providerVersionConstraint: '0.0.107'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableCni = config.disableCni;
    this._disableMetricsServer = config.disableMetricsServer;
    this._disableNetworkPolicy = config.disableNetworkPolicy;
    this._disableTraefik = config.disableTraefik;
    this._hooks.internalValue = config.hooks;
    this._image = config.image;
    this._inventory.internalValue = config.inventory;
    this._kubeletConfig = config.kubeletConfig;
    this._name = config.name;
    this._networks.internalValue = config.networks;
    this._registries.internalValue = config.registries;
    this._resources.internalValue = config.resources;
    this._sandbox.internalValue = config.sandbox;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_cni - computed: true, optional: true, required: false
  private _disableCni?: boolean | cdktf.IResolvable; 
  public get disableCni() {
    return this.getBooleanAttribute('disable_cni');
  }
  public set disableCni(value: boolean | cdktf.IResolvable) {
    this._disableCni = value;
  }
  public resetDisableCni() {
    this._disableCni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCniInput() {
    return this._disableCni;
  }

  // disable_metrics_server - computed: true, optional: true, required: false
  private _disableMetricsServer?: boolean | cdktf.IResolvable; 
  public get disableMetricsServer() {
    return this.getBooleanAttribute('disable_metrics_server');
  }
  public set disableMetricsServer(value: boolean | cdktf.IResolvable) {
    this._disableMetricsServer = value;
  }
  public resetDisableMetricsServer() {
    this._disableMetricsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMetricsServerInput() {
    return this._disableMetricsServer;
  }

  // disable_network_policy - computed: true, optional: true, required: false
  private _disableNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get disableNetworkPolicy() {
    return this.getBooleanAttribute('disable_network_policy');
  }
  public set disableNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._disableNetworkPolicy = value;
  }
  public resetDisableNetworkPolicy() {
    this._disableNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNetworkPolicyInput() {
    return this._disableNetworkPolicy;
  }

  // disable_traefik - computed: true, optional: true, required: false
  private _disableTraefik?: boolean | cdktf.IResolvable; 
  public get disableTraefik() {
    return this.getBooleanAttribute('disable_traefik');
  }
  public set disableTraefik(value: boolean | cdktf.IResolvable) {
    this._disableTraefik = value;
  }
  public resetDisableTraefik() {
    this._disableTraefik = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTraefikInput() {
    return this._disableTraefik;
  }

  // hooks - computed: false, optional: true, required: false
  private _hooks = new HarnessK3SHooksOutputReference(this, "hooks");
  public get hooks() {
    return this._hooks;
  }
  public putHooks(value: HarnessK3SHooks) {
    this._hooks.internalValue = value;
  }
  public resetHooks() {
    this._hooks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hooksInput() {
    return this._hooks.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inventory - computed: false, optional: false, required: true
  private _inventory = new HarnessK3SInventoryOutputReference(this, "inventory");
  public get inventory() {
    return this._inventory;
  }
  public putInventory(value: HarnessK3SInventory) {
    this._inventory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryInput() {
    return this._inventory.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig?: string; 
  public get kubeletConfig() {
    return this.getStringAttribute('kubelet_config');
  }
  public set kubeletConfig(value: string) {
    this._kubeletConfig = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig;
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

  // networks - computed: false, optional: true, required: false
  private _networks = new HarnessK3SNetworksMap(this, "networks");
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: { [key: string]: HarnessK3SNetworks } | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // registries - computed: false, optional: true, required: false
  private _registries = new HarnessK3SRegistriesMap(this, "registries");
  public get registries() {
    return this._registries;
  }
  public putRegistries(value: { [key: string]: HarnessK3SRegistries } | cdktf.IResolvable) {
    this._registries.internalValue = value;
  }
  public resetRegistries() {
    this._registries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new HarnessK3SResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: HarnessK3SResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sandbox - computed: false, optional: true, required: false
  private _sandbox = new HarnessK3SSandboxOutputReference(this, "sandbox");
  public get sandbox() {
    return this._sandbox;
  }
  public putSandbox(value: HarnessK3SSandbox) {
    this._sandbox.internalValue = value;
  }
  public resetSandbox() {
    this._sandbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxInput() {
    return this._sandbox.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HarnessK3STimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HarnessK3STimeouts) {
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
      disable_cni: cdktf.booleanToTerraform(this._disableCni),
      disable_metrics_server: cdktf.booleanToTerraform(this._disableMetricsServer),
      disable_network_policy: cdktf.booleanToTerraform(this._disableNetworkPolicy),
      disable_traefik: cdktf.booleanToTerraform(this._disableTraefik),
      hooks: harnessK3SHooksToTerraform(this._hooks.internalValue),
      image: cdktf.stringToTerraform(this._image),
      inventory: harnessK3SInventoryToTerraform(this._inventory.internalValue),
      kubelet_config: cdktf.stringToTerraform(this._kubeletConfig),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.hashMapper(harnessK3SNetworksToTerraform)(this._networks.internalValue),
      registries: cdktf.hashMapper(harnessK3SRegistriesToTerraform)(this._registries.internalValue),
      resources: harnessK3SResourcesToTerraform(this._resources.internalValue),
      sandbox: harnessK3SSandboxToTerraform(this._sandbox.internalValue),
      timeouts: harnessK3STimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_cni: {
        value: cdktf.booleanToHclTerraform(this._disableCni),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_metrics_server: {
        value: cdktf.booleanToHclTerraform(this._disableMetricsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_network_policy: {
        value: cdktf.booleanToHclTerraform(this._disableNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_traefik: {
        value: cdktf.booleanToHclTerraform(this._disableTraefik),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hooks: {
        value: harnessK3SHooksToHclTerraform(this._hooks.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HarnessK3SHooks",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inventory: {
        value: harnessK3SInventoryToHclTerraform(this._inventory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HarnessK3SInventory",
      },
      kubelet_config: {
        value: cdktf.stringToHclTerraform(this._kubeletConfig),
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
      networks: {
        value: cdktf.hashMapperHcl(harnessK3SNetworksToHclTerraform)(this._networks.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "HarnessK3SNetworksMap",
      },
      registries: {
        value: cdktf.hashMapperHcl(harnessK3SRegistriesToHclTerraform)(this._registries.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "HarnessK3SRegistriesMap",
      },
      resources: {
        value: harnessK3SResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HarnessK3SResources",
      },
      sandbox: {
        value: harnessK3SSandboxToHclTerraform(this._sandbox.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HarnessK3SSandbox",
      },
      timeouts: {
        value: harnessK3STimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HarnessK3STimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
