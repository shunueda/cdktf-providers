// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeContainerAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum number of instances that will be provisioned per active region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#autoscaling_max ComputeContainerApp#autoscaling_max}
  */
  readonly autoscalingMax?: number;
  /**
  * The minimum number of instances that will be provisioned per active region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#autoscaling_min ComputeContainerApp#autoscaling_min}
  */
  readonly autoscalingMin?: number;
  /**
  * The name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#name ComputeContainerApp#name}
  */
  readonly name: string;
  /**
  * The regions that will be dynamically provisionable based on the user latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#regions_allowed ComputeContainerApp#regions_allowed}
  */
  readonly regionsAllowed: string[];
  /**
  * The maximum amount of regions to be deployed at any given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#regions_max_allowed ComputeContainerApp#regions_max_allowed}
  */
  readonly regionsMaxAllowed?: number;
  /**
  * The regions that will be statically provisioned and will always be running and available to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#regions_required ComputeContainerApp#regions_required}
  */
  readonly regionsRequired: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#version ComputeContainerApp#version}
  */
  readonly version?: number;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#container ComputeContainerApp#container}
  */
  readonly container?: ComputeContainerAppContainer[] | cdktf.IResolvable;
}
export interface ComputeContainerAppContainerEndpointCdnStickySessions {
  /**
  * Incoming request headers used to select a pod for sticky sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#headers ComputeContainerApp#headers}
  */
  readonly headers: string[];
}

export function computeContainerAppContainerEndpointCdnStickySessionsToTerraform(struct?: ComputeContainerAppContainerEndpointCdnStickySessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
  }
}


export function computeContainerAppContainerEndpointCdnStickySessionsToHclTerraform(struct?: ComputeContainerAppContainerEndpointCdnStickySessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerEndpointCdnStickySessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerEndpointCdnStickySessions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerEndpointCdnStickySessions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }
}

export class ComputeContainerAppContainerEndpointCdnStickySessionsList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerEndpointCdnStickySessions[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerEndpointCdnStickySessionsOutputReference {
    return new ComputeContainerAppContainerEndpointCdnStickySessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerEndpointCdn {
  /**
  * Indicates whether the container will handle TLS termination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#origin_ssl ComputeContainerApp#origin_ssl}
  */
  readonly originSsl?: boolean | cdktf.IResolvable;
  /**
  * sticky_sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#sticky_sessions ComputeContainerApp#sticky_sessions}
  */
  readonly stickySessions?: ComputeContainerAppContainerEndpointCdnStickySessions[] | cdktf.IResolvable;
}

export function computeContainerAppContainerEndpointCdnToTerraform(struct?: ComputeContainerAppContainerEndpointCdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_ssl: cdktf.booleanToTerraform(struct!.originSsl),
    sticky_sessions: cdktf.listMapper(computeContainerAppContainerEndpointCdnStickySessionsToTerraform, true)(struct!.stickySessions),
  }
}


export function computeContainerAppContainerEndpointCdnToHclTerraform(struct?: ComputeContainerAppContainerEndpointCdn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.originSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sticky_sessions: {
      value: cdktf.listMapperHcl(computeContainerAppContainerEndpointCdnStickySessionsToHclTerraform, true)(struct!.stickySessions),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerEndpointCdnStickySessionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerEndpointCdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerEndpointCdn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.originSsl = this._originSsl;
    }
    if (this._stickySessions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickySessions = this._stickySessions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerEndpointCdn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._originSsl = undefined;
      this._stickySessions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._originSsl = value.originSsl;
      this._stickySessions.internalValue = value.stickySessions;
    }
  }

  // origin_ssl - computed: true, optional: true, required: false
  private _originSsl?: boolean | cdktf.IResolvable; 
  public get originSsl() {
    return this.getBooleanAttribute('origin_ssl');
  }
  public set originSsl(value: boolean | cdktf.IResolvable) {
    this._originSsl = value;
  }
  public resetOriginSsl() {
    this._originSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originSslInput() {
    return this._originSsl;
  }

  // pullzone_id - computed: true, optional: false, required: false
  public get pullzoneId() {
    return this.getNumberAttribute('pullzone_id');
  }

  // sticky_sessions - computed: false, optional: true, required: false
  private _stickySessions = new ComputeContainerAppContainerEndpointCdnStickySessionsList(this, "sticky_sessions", false);
  public get stickySessions() {
    return this._stickySessions;
  }
  public putStickySessions(value: ComputeContainerAppContainerEndpointCdnStickySessions[] | cdktf.IResolvable) {
    this._stickySessions.internalValue = value;
  }
  public resetStickySessions() {
    this._stickySessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickySessionsInput() {
    return this._stickySessions.internalValue;
  }
}

export class ComputeContainerAppContainerEndpointCdnList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerEndpointCdn[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerEndpointCdnOutputReference {
    return new ComputeContainerAppContainerEndpointCdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerEndpointPort {
  /**
  * The container port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#container ComputeContainerApp#container}
  */
  readonly container: number;
  /**
  * The exposed port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#exposed ComputeContainerApp#exposed}
  */
  readonly exposed?: number;
  /**
  * Options: `Tcp`, `Udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#protocols ComputeContainerApp#protocols}
  */
  readonly protocols?: string[];
}

export function computeContainerAppContainerEndpointPortToTerraform(struct?: ComputeContainerAppContainerEndpointPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.numberToTerraform(struct!.container),
    exposed: cdktf.numberToTerraform(struct!.exposed),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
  }
}


export function computeContainerAppContainerEndpointPortToHclTerraform(struct?: ComputeContainerAppContainerEndpointPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.numberToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exposed: {
      value: cdktf.numberToHclTerraform(struct!.exposed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerEndpointPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerEndpointPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._exposed !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposed = this._exposed;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerEndpointPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container = undefined;
      this._exposed = undefined;
      this._protocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container = value.container;
      this._exposed = value.exposed;
      this._protocols = value.protocols;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: number; 
  public get container() {
    return this.getNumberAttribute('container');
  }
  public set container(value: number) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // exposed - computed: false, optional: true, required: false
  private _exposed?: number; 
  public get exposed() {
    return this.getNumberAttribute('exposed');
  }
  public set exposed(value: number) {
    this._exposed = value;
  }
  public resetExposed() {
    this._exposed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedInput() {
    return this._exposed;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}

export class ComputeContainerAppContainerEndpointPortList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerEndpointPort[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerEndpointPortOutputReference {
    return new ComputeContainerAppContainerEndpointPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerEndpoint {
  /**
  * The name of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#name ComputeContainerApp#name}
  */
  readonly name: string;
  /**
  * Options: `Anycast`, `CDN`, `InternalIP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#type ComputeContainerApp#type}
  */
  readonly type: string;
  /**
  * cdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#cdn ComputeContainerApp#cdn}
  */
  readonly cdn?: ComputeContainerAppContainerEndpointCdn[] | cdktf.IResolvable;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#port ComputeContainerApp#port}
  */
  readonly port?: ComputeContainerAppContainerEndpointPort[] | cdktf.IResolvable;
}

export function computeContainerAppContainerEndpointToTerraform(struct?: ComputeContainerAppContainerEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    cdn: cdktf.listMapper(computeContainerAppContainerEndpointCdnToTerraform, true)(struct!.cdn),
    port: cdktf.listMapper(computeContainerAppContainerEndpointPortToTerraform, true)(struct!.port),
  }
}


export function computeContainerAppContainerEndpointToHclTerraform(struct?: ComputeContainerAppContainerEndpoint | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdn: {
      value: cdktf.listMapperHcl(computeContainerAppContainerEndpointCdnToHclTerraform, true)(struct!.cdn),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerEndpointCdnList",
    },
    port: {
      value: cdktf.listMapperHcl(computeContainerAppContainerEndpointPortToHclTerraform, true)(struct!.port),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerEndpointPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cdn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdn = this._cdn?.internalValue;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._cdn.internalValue = undefined;
      this._port.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._cdn.internalValue = value.cdn;
      this._port.internalValue = value.port;
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

  // cdn - computed: false, optional: true, required: false
  private _cdn = new ComputeContainerAppContainerEndpointCdnList(this, "cdn", false);
  public get cdn() {
    return this._cdn;
  }
  public putCdn(value: ComputeContainerAppContainerEndpointCdn[] | cdktf.IResolvable) {
    this._cdn.internalValue = value;
  }
  public resetCdn() {
    this._cdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnInput() {
    return this._cdn.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new ComputeContainerAppContainerEndpointPortList(this, "port", false);
  public get port() {
    return this._port;
  }
  public putPort(value: ComputeContainerAppContainerEndpointPort[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }
}

export class ComputeContainerAppContainerEndpointList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerEndpoint[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerEndpointOutputReference {
    return new ComputeContainerAppContainerEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerEnv {
  /**
  * The name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#name ComputeContainerApp#name}
  */
  readonly name: string;
  /**
  * The value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#value ComputeContainerApp#value}
  */
  readonly value: string;
}

export function computeContainerAppContainerEnvToTerraform(struct?: ComputeContainerAppContainerEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function computeContainerAppContainerEnvToHclTerraform(struct?: ComputeContainerAppContainerEnv | cdktf.IResolvable): any {
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

export class ComputeContainerAppContainerEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class ComputeContainerAppContainerEnvList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerEnv[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerEnvOutputReference {
    return new ComputeContainerAppContainerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerLivenessProbeGrpc {
  /**
  * The gRPC service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#service ComputeContainerApp#service}
  */
  readonly service: string;
}

export function computeContainerAppContainerLivenessProbeGrpcToTerraform(struct?: ComputeContainerAppContainerLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function computeContainerAppContainerLivenessProbeGrpcToHclTerraform(struct?: ComputeContainerAppContainerLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerLivenessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerLivenessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class ComputeContainerAppContainerLivenessProbeGrpcList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerLivenessProbeGrpc[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerLivenessProbeGrpcOutputReference {
    return new ComputeContainerAppContainerLivenessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerLivenessProbeHttp {
  /**
  * The expected HTTP response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#expected_status ComputeContainerApp#expected_status}
  */
  readonly expectedStatus?: number;
  /**
  * The HTTP path to be requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#path ComputeContainerApp#path}
  */
  readonly path: string;
}

export function computeContainerAppContainerLivenessProbeHttpToTerraform(struct?: ComputeContainerAppContainerLivenessProbeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_status: cdktf.numberToTerraform(struct!.expectedStatus),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function computeContainerAppContainerLivenessProbeHttpToHclTerraform(struct?: ComputeContainerAppContainerLivenessProbeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_status: {
      value: cdktf.numberToHclTerraform(struct!.expectedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerLivenessProbeHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerLivenessProbeHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatus = this._expectedStatus;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerLivenessProbeHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedStatus = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedStatus = value.expectedStatus;
      this._path = value.path;
    }
  }

  // expected_status - computed: true, optional: true, required: false
  private _expectedStatus?: number; 
  public get expectedStatus() {
    return this.getNumberAttribute('expected_status');
  }
  public set expectedStatus(value: number) {
    this._expectedStatus = value;
  }
  public resetExpectedStatus() {
    this._expectedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusInput() {
    return this._expectedStatus;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ComputeContainerAppContainerLivenessProbeHttpList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerLivenessProbeHttp[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerLivenessProbeHttpOutputReference {
    return new ComputeContainerAppContainerLivenessProbeHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerLivenessProbe {
  /**
  * The number of failed probes to consider the container unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#failure_threshold ComputeContainerApp#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The amount of time in seconds after the container is started to wait before the first probe is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#initial_delay ComputeContainerApp#initial_delay}
  */
  readonly initialDelay?: number;
  /**
  * The amount of time in seconds between each probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#period ComputeContainerApp#period}
  */
  readonly period?: number;
  /**
  * The port within the container the probe will connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#port ComputeContainerApp#port}
  */
  readonly port: number;
  /**
  * The number of successful probes to consider the container healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#success_threshold ComputeContainerApp#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The amount of time in seconds the probe will wait for a response before considering it a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#timeout ComputeContainerApp#timeout}
  */
  readonly timeout?: number;
  /**
  * Options: `grpc`, `http`, `tcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#type ComputeContainerApp#type}
  */
  readonly type: string;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#grpc ComputeContainerApp#grpc}
  */
  readonly grpc?: ComputeContainerAppContainerLivenessProbeGrpc[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#http ComputeContainerApp#http}
  */
  readonly http?: ComputeContainerAppContainerLivenessProbeHttp[] | cdktf.IResolvable;
}

export function computeContainerAppContainerLivenessProbeToTerraform(struct?: ComputeContainerAppContainerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay: cdktf.numberToTerraform(struct!.initialDelay),
    period: cdktf.numberToTerraform(struct!.period),
    port: cdktf.numberToTerraform(struct!.port),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    grpc: cdktf.listMapper(computeContainerAppContainerLivenessProbeGrpcToTerraform, true)(struct!.grpc),
    http: cdktf.listMapper(computeContainerAppContainerLivenessProbeHttpToTerraform, true)(struct!.http),
  }
}


export function computeContainerAppContainerLivenessProbeToHclTerraform(struct?: ComputeContainerAppContainerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay: {
      value: cdktf.numberToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc: {
      value: cdktf.listMapperHcl(computeContainerAppContainerLivenessProbeGrpcToHclTerraform, true)(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerLivenessProbeGrpcList",
    },
    http: {
      value: cdktf.listMapperHcl(computeContainerAppContainerLivenessProbeHttpToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerLivenessProbeHttpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._initialDelay = undefined;
      this._period = undefined;
      this._port = undefined;
      this._successThreshold = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureThreshold = value.failureThreshold;
      this._initialDelay = value.initialDelay;
      this._period = value.period;
      this._port = value.port;
      this._successThreshold = value.successThreshold;
      this._timeout = value.timeout;
      this._type = value.type;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay - computed: true, optional: true, required: false
  private _initialDelay?: number; 
  public get initialDelay() {
    return this.getNumberAttribute('initial_delay');
  }
  public set initialDelay(value: number) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // grpc - computed: false, optional: true, required: false
  private _grpc = new ComputeContainerAppContainerLivenessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: ComputeContainerAppContainerLivenessProbeGrpc[] | cdktf.IResolvable) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ComputeContainerAppContainerLivenessProbeHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: ComputeContainerAppContainerLivenessProbeHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}

export class ComputeContainerAppContainerLivenessProbeList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerLivenessProbe[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerLivenessProbeOutputReference {
    return new ComputeContainerAppContainerLivenessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerReadinessProbeGrpc {
  /**
  * The gRPC service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#service ComputeContainerApp#service}
  */
  readonly service: string;
}

export function computeContainerAppContainerReadinessProbeGrpcToTerraform(struct?: ComputeContainerAppContainerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function computeContainerAppContainerReadinessProbeGrpcToHclTerraform(struct?: ComputeContainerAppContainerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerReadinessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerReadinessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class ComputeContainerAppContainerReadinessProbeGrpcList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerReadinessProbeGrpc[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerReadinessProbeGrpcOutputReference {
    return new ComputeContainerAppContainerReadinessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerReadinessProbeHttp {
  /**
  * The expected HTTP response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#expected_status ComputeContainerApp#expected_status}
  */
  readonly expectedStatus?: number;
  /**
  * The HTTP path to be requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#path ComputeContainerApp#path}
  */
  readonly path: string;
}

export function computeContainerAppContainerReadinessProbeHttpToTerraform(struct?: ComputeContainerAppContainerReadinessProbeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_status: cdktf.numberToTerraform(struct!.expectedStatus),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function computeContainerAppContainerReadinessProbeHttpToHclTerraform(struct?: ComputeContainerAppContainerReadinessProbeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_status: {
      value: cdktf.numberToHclTerraform(struct!.expectedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerReadinessProbeHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerReadinessProbeHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatus = this._expectedStatus;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerReadinessProbeHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedStatus = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedStatus = value.expectedStatus;
      this._path = value.path;
    }
  }

  // expected_status - computed: true, optional: true, required: false
  private _expectedStatus?: number; 
  public get expectedStatus() {
    return this.getNumberAttribute('expected_status');
  }
  public set expectedStatus(value: number) {
    this._expectedStatus = value;
  }
  public resetExpectedStatus() {
    this._expectedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusInput() {
    return this._expectedStatus;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ComputeContainerAppContainerReadinessProbeHttpList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerReadinessProbeHttp[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerReadinessProbeHttpOutputReference {
    return new ComputeContainerAppContainerReadinessProbeHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerReadinessProbe {
  /**
  * The number of failed probes to consider the container unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#failure_threshold ComputeContainerApp#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The amount of time in seconds after the container is started to wait before the first probe is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#initial_delay ComputeContainerApp#initial_delay}
  */
  readonly initialDelay?: number;
  /**
  * The amount of time in seconds between each probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#period ComputeContainerApp#period}
  */
  readonly period?: number;
  /**
  * The port within the container the probe will connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#port ComputeContainerApp#port}
  */
  readonly port: number;
  /**
  * The number of successful probes to consider the container healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#success_threshold ComputeContainerApp#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The amount of time in seconds the probe will wait for a response before considering it a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#timeout ComputeContainerApp#timeout}
  */
  readonly timeout?: number;
  /**
  * Options: `grpc`, `http`, `tcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#type ComputeContainerApp#type}
  */
  readonly type: string;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#grpc ComputeContainerApp#grpc}
  */
  readonly grpc?: ComputeContainerAppContainerReadinessProbeGrpc[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#http ComputeContainerApp#http}
  */
  readonly http?: ComputeContainerAppContainerReadinessProbeHttp[] | cdktf.IResolvable;
}

export function computeContainerAppContainerReadinessProbeToTerraform(struct?: ComputeContainerAppContainerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay: cdktf.numberToTerraform(struct!.initialDelay),
    period: cdktf.numberToTerraform(struct!.period),
    port: cdktf.numberToTerraform(struct!.port),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    grpc: cdktf.listMapper(computeContainerAppContainerReadinessProbeGrpcToTerraform, true)(struct!.grpc),
    http: cdktf.listMapper(computeContainerAppContainerReadinessProbeHttpToTerraform, true)(struct!.http),
  }
}


export function computeContainerAppContainerReadinessProbeToHclTerraform(struct?: ComputeContainerAppContainerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay: {
      value: cdktf.numberToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc: {
      value: cdktf.listMapperHcl(computeContainerAppContainerReadinessProbeGrpcToHclTerraform, true)(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerReadinessProbeGrpcList",
    },
    http: {
      value: cdktf.listMapperHcl(computeContainerAppContainerReadinessProbeHttpToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerReadinessProbeHttpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._initialDelay = undefined;
      this._period = undefined;
      this._port = undefined;
      this._successThreshold = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureThreshold = value.failureThreshold;
      this._initialDelay = value.initialDelay;
      this._period = value.period;
      this._port = value.port;
      this._successThreshold = value.successThreshold;
      this._timeout = value.timeout;
      this._type = value.type;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay - computed: true, optional: true, required: false
  private _initialDelay?: number; 
  public get initialDelay() {
    return this.getNumberAttribute('initial_delay');
  }
  public set initialDelay(value: number) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // grpc - computed: false, optional: true, required: false
  private _grpc = new ComputeContainerAppContainerReadinessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: ComputeContainerAppContainerReadinessProbeGrpc[] | cdktf.IResolvable) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ComputeContainerAppContainerReadinessProbeHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: ComputeContainerAppContainerReadinessProbeHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}

export class ComputeContainerAppContainerReadinessProbeList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerReadinessProbe[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerReadinessProbeOutputReference {
    return new ComputeContainerAppContainerReadinessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerStartupProbeGrpc {
  /**
  * The gRPC service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#service ComputeContainerApp#service}
  */
  readonly service: string;
}

export function computeContainerAppContainerStartupProbeGrpcToTerraform(struct?: ComputeContainerAppContainerStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function computeContainerAppContainerStartupProbeGrpcToHclTerraform(struct?: ComputeContainerAppContainerStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerStartupProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerStartupProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class ComputeContainerAppContainerStartupProbeGrpcList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerStartupProbeGrpc[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerStartupProbeGrpcOutputReference {
    return new ComputeContainerAppContainerStartupProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerStartupProbeHttp {
  /**
  * The expected HTTP response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#expected_status ComputeContainerApp#expected_status}
  */
  readonly expectedStatus?: number;
  /**
  * The HTTP path to be requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#path ComputeContainerApp#path}
  */
  readonly path: string;
}

export function computeContainerAppContainerStartupProbeHttpToTerraform(struct?: ComputeContainerAppContainerStartupProbeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_status: cdktf.numberToTerraform(struct!.expectedStatus),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function computeContainerAppContainerStartupProbeHttpToHclTerraform(struct?: ComputeContainerAppContainerStartupProbeHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_status: {
      value: cdktf.numberToHclTerraform(struct!.expectedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerStartupProbeHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerStartupProbeHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatus = this._expectedStatus;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerStartupProbeHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expectedStatus = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expectedStatus = value.expectedStatus;
      this._path = value.path;
    }
  }

  // expected_status - computed: true, optional: true, required: false
  private _expectedStatus?: number; 
  public get expectedStatus() {
    return this.getNumberAttribute('expected_status');
  }
  public set expectedStatus(value: number) {
    this._expectedStatus = value;
  }
  public resetExpectedStatus() {
    this._expectedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusInput() {
    return this._expectedStatus;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ComputeContainerAppContainerStartupProbeHttpList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerStartupProbeHttp[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerStartupProbeHttpOutputReference {
    return new ComputeContainerAppContainerStartupProbeHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainerStartupProbe {
  /**
  * The number of failed probes to consider the container unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#failure_threshold ComputeContainerApp#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * The amount of time in seconds after the container is started to wait before the first probe is sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#initial_delay ComputeContainerApp#initial_delay}
  */
  readonly initialDelay?: number;
  /**
  * The amount of time in seconds between each probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#period ComputeContainerApp#period}
  */
  readonly period?: number;
  /**
  * The port within the container the probe will connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#port ComputeContainerApp#port}
  */
  readonly port: number;
  /**
  * The number of successful probes to consider the container healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#success_threshold ComputeContainerApp#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * The amount of time in seconds the probe will wait for a response before considering it a failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#timeout ComputeContainerApp#timeout}
  */
  readonly timeout?: number;
  /**
  * Options: `grpc`, `http`, `tcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#type ComputeContainerApp#type}
  */
  readonly type: string;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#grpc ComputeContainerApp#grpc}
  */
  readonly grpc?: ComputeContainerAppContainerStartupProbeGrpc[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#http ComputeContainerApp#http}
  */
  readonly http?: ComputeContainerAppContainerStartupProbeHttp[] | cdktf.IResolvable;
}

export function computeContainerAppContainerStartupProbeToTerraform(struct?: ComputeContainerAppContainerStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay: cdktf.numberToTerraform(struct!.initialDelay),
    period: cdktf.numberToTerraform(struct!.period),
    port: cdktf.numberToTerraform(struct!.port),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    grpc: cdktf.listMapper(computeContainerAppContainerStartupProbeGrpcToTerraform, true)(struct!.grpc),
    http: cdktf.listMapper(computeContainerAppContainerStartupProbeHttpToTerraform, true)(struct!.http),
  }
}


export function computeContainerAppContainerStartupProbeToHclTerraform(struct?: ComputeContainerAppContainerStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay: {
      value: cdktf.numberToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc: {
      value: cdktf.listMapperHcl(computeContainerAppContainerStartupProbeGrpcToHclTerraform, true)(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerStartupProbeGrpcList",
    },
    http: {
      value: cdktf.listMapperHcl(computeContainerAppContainerStartupProbeHttpToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerStartupProbeHttpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerStartupProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainerStartupProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainerStartupProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._initialDelay = undefined;
      this._period = undefined;
      this._port = undefined;
      this._successThreshold = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._grpc.internalValue = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureThreshold = value.failureThreshold;
      this._initialDelay = value.initialDelay;
      this._period = value.period;
      this._port = value.port;
      this._successThreshold = value.successThreshold;
      this._timeout = value.timeout;
      this._type = value.type;
      this._grpc.internalValue = value.grpc;
      this._http.internalValue = value.http;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay - computed: true, optional: true, required: false
  private _initialDelay?: number; 
  public get initialDelay() {
    return this.getNumberAttribute('initial_delay');
  }
  public set initialDelay(value: number) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // grpc - computed: false, optional: true, required: false
  private _grpc = new ComputeContainerAppContainerStartupProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: ComputeContainerAppContainerStartupProbeGrpc[] | cdktf.IResolvable) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ComputeContainerAppContainerStartupProbeHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: ComputeContainerAppContainerStartupProbeHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}

export class ComputeContainerAppContainerStartupProbeList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainerStartupProbe[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerStartupProbeOutputReference {
    return new ComputeContainerAppContainerStartupProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeContainerAppContainer {
  /**
  * The arguments that will be added to the container entry point when starting the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#arguments ComputeContainerApp#arguments}
  */
  readonly arguments?: string;
  /**
  * A custom startup command that will execute once the container is launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#command ComputeContainerApp#command}
  */
  readonly command?: string;
  /**
  * The image name within the registry, without the domain prefix (i.e.: `my-app`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#image_name ComputeContainerApp#image_name}
  */
  readonly imageName: string;
  /**
  * The image namespace within the registry, without the domain prefix (i.e.: `my-org`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#image_namespace ComputeContainerApp#image_namespace}
  */
  readonly imageNamespace: string;
  /**
  * Options: `Always`, `IfNotPresent`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#image_pull_policy ComputeContainerApp#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * The image registry for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#image_registry ComputeContainerApp#image_registry}
  */
  readonly imageRegistry: number;
  /**
  * The image tag (i.e.: `2.9-alpine`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#image_tag ComputeContainerApp#image_tag}
  */
  readonly imageTag: string;
  /**
  * The name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#name ComputeContainerApp#name}
  */
  readonly name: string;
  /**
  * The working directory of the container runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#working_dir ComputeContainerApp#working_dir}
  */
  readonly workingDir?: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#endpoint ComputeContainerApp#endpoint}
  */
  readonly endpoint?: ComputeContainerAppContainerEndpoint[] | cdktf.IResolvable;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#env ComputeContainerApp#env}
  */
  readonly env?: ComputeContainerAppContainerEnv[] | cdktf.IResolvable;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#liveness_probe ComputeContainerApp#liveness_probe}
  */
  readonly livenessProbe?: ComputeContainerAppContainerLivenessProbe[] | cdktf.IResolvable;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#readiness_probe ComputeContainerApp#readiness_probe}
  */
  readonly readinessProbe?: ComputeContainerAppContainerReadinessProbe[] | cdktf.IResolvable;
  /**
  * startup_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#startup_probe ComputeContainerApp#startup_probe}
  */
  readonly startupProbe?: ComputeContainerAppContainerStartupProbe[] | cdktf.IResolvable;
}

export function computeContainerAppContainerToTerraform(struct?: ComputeContainerAppContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    command: cdktf.stringToTerraform(struct!.command),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_namespace: cdktf.stringToTerraform(struct!.imageNamespace),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_registry: cdktf.numberToTerraform(struct!.imageRegistry),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
    name: cdktf.stringToTerraform(struct!.name),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    endpoint: cdktf.listMapper(computeContainerAppContainerEndpointToTerraform, true)(struct!.endpoint),
    env: cdktf.listMapper(computeContainerAppContainerEnvToTerraform, true)(struct!.env),
    liveness_probe: cdktf.listMapper(computeContainerAppContainerLivenessProbeToTerraform, true)(struct!.livenessProbe),
    readiness_probe: cdktf.listMapper(computeContainerAppContainerReadinessProbeToTerraform, true)(struct!.readinessProbe),
    startup_probe: cdktf.listMapper(computeContainerAppContainerStartupProbeToTerraform, true)(struct!.startupProbe),
  }
}


export function computeContainerAppContainerToHclTerraform(struct?: ComputeContainerAppContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.stringToHclTerraform(struct!.arguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_namespace: {
      value: cdktf.stringToHclTerraform(struct!.imageNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_registry: {
      value: cdktf.numberToHclTerraform(struct!.imageRegistry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
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
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.listMapperHcl(computeContainerAppContainerEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerEndpointList",
    },
    env: {
      value: cdktf.listMapperHcl(computeContainerAppContainerEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerEnvList",
    },
    liveness_probe: {
      value: cdktf.listMapperHcl(computeContainerAppContainerLivenessProbeToHclTerraform, true)(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerLivenessProbeList",
    },
    readiness_probe: {
      value: cdktf.listMapperHcl(computeContainerAppContainerReadinessProbeToHclTerraform, true)(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerReadinessProbeList",
    },
    startup_probe: {
      value: cdktf.listMapperHcl(computeContainerAppContainerStartupProbeToHclTerraform, true)(struct!.startupProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeContainerAppContainerStartupProbeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeContainerAppContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeContainerAppContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageNamespace = this._imageNamespace;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imageRegistry !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRegistry = this._imageRegistry;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeContainerAppContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arguments = undefined;
      this._command = undefined;
      this._imageName = undefined;
      this._imageNamespace = undefined;
      this._imagePullPolicy = undefined;
      this._imageRegistry = undefined;
      this._imageTag = undefined;
      this._name = undefined;
      this._workingDir = undefined;
      this._endpoint.internalValue = undefined;
      this._env.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arguments = value.arguments;
      this._command = value.command;
      this._imageName = value.imageName;
      this._imageNamespace = value.imageNamespace;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imageRegistry = value.imageRegistry;
      this._imageTag = value.imageTag;
      this._name = value.name;
      this._workingDir = value.workingDir;
      this._endpoint.internalValue = value.endpoint;
      this._env.internalValue = value.env;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._startupProbe.internalValue = value.startupProbe;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string; 
  public get arguments() {
    return this.getStringAttribute('arguments');
  }
  public set arguments(value: string) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_namespace - computed: false, optional: false, required: true
  private _imageNamespace?: string; 
  public get imageNamespace() {
    return this.getStringAttribute('image_namespace');
  }
  public set imageNamespace(value: string) {
    this._imageNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNamespaceInput() {
    return this._imageNamespace;
  }

  // image_pull_policy - computed: true, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_registry - computed: false, optional: false, required: true
  private _imageRegistry?: number; 
  public get imageRegistry() {
    return this.getNumberAttribute('image_registry');
  }
  public set imageRegistry(value: number) {
    this._imageRegistry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryInput() {
    return this._imageRegistry;
  }

  // image_tag - computed: false, optional: false, required: true
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
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

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new ComputeContainerAppContainerEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: ComputeContainerAppContainerEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new ComputeContainerAppContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: ComputeContainerAppContainerEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new ComputeContainerAppContainerLivenessProbeList(this, "liveness_probe", false);
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: ComputeContainerAppContainerLivenessProbe[] | cdktf.IResolvable) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new ComputeContainerAppContainerReadinessProbeList(this, "readiness_probe", false);
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: ComputeContainerAppContainerReadinessProbe[] | cdktf.IResolvable) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new ComputeContainerAppContainerStartupProbeList(this, "startup_probe", false);
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: ComputeContainerAppContainerStartupProbe[] | cdktf.IResolvable) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }
}

export class ComputeContainerAppContainerList extends cdktf.ComplexList {
  public internalValue? : ComputeContainerAppContainer[] | cdktf.IResolvable

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
  public get(index: number): ComputeContainerAppContainerOutputReference {
    return new ComputeContainerAppContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app bunnynet_compute_container_app}
*/
export class ComputeContainerApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_compute_container_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeContainerApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeContainerApp to import
  * @param importFromId The id of the existing ComputeContainerApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeContainerApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_compute_container_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/compute_container_app bunnynet_compute_container_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeContainerAppConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeContainerAppConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_compute_container_app',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscalingMax = config.autoscalingMax;
    this._autoscalingMin = config.autoscalingMin;
    this._name = config.name;
    this._regionsAllowed = config.regionsAllowed;
    this._regionsMaxAllowed = config.regionsMaxAllowed;
    this._regionsRequired = config.regionsRequired;
    this._version = config.version;
    this._container.internalValue = config.container;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_max - computed: true, optional: true, required: false
  private _autoscalingMax?: number; 
  public get autoscalingMax() {
    return this.getNumberAttribute('autoscaling_max');
  }
  public set autoscalingMax(value: number) {
    this._autoscalingMax = value;
  }
  public resetAutoscalingMax() {
    this._autoscalingMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingMaxInput() {
    return this._autoscalingMax;
  }

  // autoscaling_min - computed: true, optional: true, required: false
  private _autoscalingMin?: number; 
  public get autoscalingMin() {
    return this.getNumberAttribute('autoscaling_min');
  }
  public set autoscalingMin(value: number) {
    this._autoscalingMin = value;
  }
  public resetAutoscalingMin() {
    this._autoscalingMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingMinInput() {
    return this._autoscalingMin;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // regions_allowed - computed: false, optional: false, required: true
  private _regionsAllowed?: string[]; 
  public get regionsAllowed() {
    return cdktf.Fn.tolist(this.getListAttribute('regions_allowed'));
  }
  public set regionsAllowed(value: string[]) {
    this._regionsAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsAllowedInput() {
    return this._regionsAllowed;
  }

  // regions_max_allowed - computed: false, optional: true, required: false
  private _regionsMaxAllowed?: number; 
  public get regionsMaxAllowed() {
    return this.getNumberAttribute('regions_max_allowed');
  }
  public set regionsMaxAllowed(value: number) {
    this._regionsMaxAllowed = value;
  }
  public resetRegionsMaxAllowed() {
    this._regionsMaxAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsMaxAllowedInput() {
    return this._regionsMaxAllowed;
  }

  // regions_required - computed: false, optional: false, required: true
  private _regionsRequired?: string[]; 
  public get regionsRequired() {
    return cdktf.Fn.tolist(this.getListAttribute('regions_required'));
  }
  public set regionsRequired(value: string[]) {
    this._regionsRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsRequiredInput() {
    return this._regionsRequired;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // container - computed: false, optional: true, required: false
  private _container = new ComputeContainerAppContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: ComputeContainerAppContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_max: cdktf.numberToTerraform(this._autoscalingMax),
      autoscaling_min: cdktf.numberToTerraform(this._autoscalingMin),
      name: cdktf.stringToTerraform(this._name),
      regions_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionsAllowed),
      regions_max_allowed: cdktf.numberToTerraform(this._regionsMaxAllowed),
      regions_required: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionsRequired),
      version: cdktf.numberToTerraform(this._version),
      container: cdktf.listMapper(computeContainerAppContainerToTerraform, true)(this._container.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling_max: {
        value: cdktf.numberToHclTerraform(this._autoscalingMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscaling_min: {
        value: cdktf.numberToHclTerraform(this._autoscalingMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions_allowed: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionsAllowed),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      regions_max_allowed: {
        value: cdktf.numberToHclTerraform(this._regionsMaxAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regions_required: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionsRequired),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container: {
        value: cdktf.listMapperHcl(computeContainerAppContainerToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeContainerAppContainerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
