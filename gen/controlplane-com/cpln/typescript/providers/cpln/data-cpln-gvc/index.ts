// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCplnGvcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom domain name used by associated workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#domain DataCplnGvc#domain}
  */
  readonly domain?: string;
  /**
  * Customizes the subdomain format for the canonical workload endpoint. `legacy` leaves it as '${workloadName}-${gvcName}.cpln.app'. `org` follows the scheme '${workloadName}-${gvcName}.${orgEndpointPrefix}.cpln.app'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#endpoint_naming_format DataCplnGvc#endpoint_naming_format}
  */
  readonly endpointNamingFormat?: string;
  /**
  * Key-value array of resource environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#env DataCplnGvc#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * A list of [locations](https://docs.controlplane.com/reference/location#current) making up the Global Virtual Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#locations DataCplnGvc#locations}
  */
  readonly locations?: string[];
  /**
  * Name of the GVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#name DataCplnGvc#name}
  */
  readonly name: string;
  /**
  * A list of [pull secret](https://docs.controlplane.com/reference/gvc#pull-secrets) names used to authenticate to any private image repository referenced by Workloads within the GVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#pull_secrets DataCplnGvc#pull_secrets}
  */
  readonly pullSecrets?: string[];
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#tags DataCplnGvc#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * controlplane_tracing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#controlplane_tracing DataCplnGvc#controlplane_tracing}
  */
  readonly controlplaneTracing?: DataCplnGvcControlplaneTracing[] | cdktf.IResolvable;
  /**
  * keda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#keda DataCplnGvc#keda}
  */
  readonly keda?: DataCplnGvcKeda[] | cdktf.IResolvable;
  /**
  * lightstep_tracing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#lightstep_tracing DataCplnGvc#lightstep_tracing}
  */
  readonly lightstepTracing?: DataCplnGvcLightstepTracing[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#load_balancer DataCplnGvc#load_balancer}
  */
  readonly loadBalancer?: DataCplnGvcLoadBalancer[] | cdktf.IResolvable;
  /**
  * otel_tracing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#otel_tracing DataCplnGvc#otel_tracing}
  */
  readonly otelTracing?: DataCplnGvcOtelTracing[] | cdktf.IResolvable;
  /**
  * sidecar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#sidecar DataCplnGvc#sidecar}
  */
  readonly sidecar?: DataCplnGvcSidecar[] | cdktf.IResolvable;
}
export interface DataCplnGvcControlplaneTracing {
  /**
  * Key-value map of custom tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#custom_tags DataCplnGvc#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Determines what percentage of requests should be traced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#sampling DataCplnGvc#sampling}
  */
  readonly sampling: number;
}

export function dataCplnGvcControlplaneTracingToTerraform(struct?: DataCplnGvcControlplaneTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    sampling: cdktf.numberToTerraform(struct!.sampling),
  }
}


export function dataCplnGvcControlplaneTracingToHclTerraform(struct?: DataCplnGvcControlplaneTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcControlplaneTracingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcControlplaneTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcControlplaneTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTags = undefined;
      this._sampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTags = value.customTags;
      this._sampling = value.sampling;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // sampling - computed: false, optional: false, required: true
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }
}

export class DataCplnGvcControlplaneTracingList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcControlplaneTracing[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcControlplaneTracingOutputReference {
    return new DataCplnGvcControlplaneTracingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcKeda {
  /**
  * Enable KEDA for this GVC. KEDA is a Kubernetes-based event-driven autoscaler that allows you to scale workloads based on external events. When enabled, a keda operator will be deployed in the GVC and workloads in the GVC can use KEDA to scale based on external metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#enabled DataCplnGvc#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A link to an Identity resource that will be used for KEDA. This will allow the keda operator to access cloud and network resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#identity_link DataCplnGvc#identity_link}
  */
  readonly identityLink?: string;
  /**
  * A list of secrets to be used as TriggerAuthentication objects. The TriggerAuthentication object will be named after the secret and can be used by triggers on workloads in this GVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#secrets DataCplnGvc#secrets}
  */
  readonly secrets?: string[];
}

export function dataCplnGvcKedaToTerraform(struct?: DataCplnGvcKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identity_link: cdktf.stringToTerraform(struct!.identityLink),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
  }
}


export function dataCplnGvcKedaToHclTerraform(struct?: DataCplnGvcKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_link: {
      value: cdktf.stringToHclTerraform(struct!.identityLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcKedaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcKeda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identityLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityLink = this._identityLink;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcKeda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._identityLink = undefined;
      this._secrets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._identityLink = value.identityLink;
      this._secrets = value.secrets;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // identity_link - computed: false, optional: true, required: false
  private _identityLink?: string; 
  public get identityLink() {
    return this.getStringAttribute('identity_link');
  }
  public set identityLink(value: string) {
    this._identityLink = value;
  }
  public resetIdentityLink() {
    this._identityLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityLinkInput() {
    return this._identityLink;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return cdktf.Fn.tolist(this.getListAttribute('secrets'));
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }
}

export class DataCplnGvcKedaList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcKeda[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcKedaOutputReference {
    return new DataCplnGvcKedaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcLightstepTracing {
  /**
  * Full link to referenced Opaque Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#credentials DataCplnGvc#credentials}
  */
  readonly credentials?: string;
  /**
  * Key-value map of custom tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#custom_tags DataCplnGvc#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Tracing Endpoint Workload. Either the canonical endpoint or internal endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#endpoint DataCplnGvc#endpoint}
  */
  readonly endpoint: string;
  /**
  * Determines what percentage of requests should be traced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#sampling DataCplnGvc#sampling}
  */
  readonly sampling: number;
}

export function dataCplnGvcLightstepTracingToTerraform(struct?: DataCplnGvcLightstepTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    sampling: cdktf.numberToTerraform(struct!.sampling),
  }
}


export function dataCplnGvcLightstepTracingToHclTerraform(struct?: DataCplnGvcLightstepTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcLightstepTracingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcLightstepTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcLightstepTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials = undefined;
      this._customTags = undefined;
      this._endpoint = undefined;
      this._sampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials = value.credentials;
      this._customTags = value.customTags;
      this._endpoint = value.endpoint;
      this._sampling = value.sampling;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
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

  // sampling - computed: false, optional: false, required: true
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }
}

export class DataCplnGvcLightstepTracingList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcLightstepTracing[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcLightstepTracingOutputReference {
    return new DataCplnGvcLightstepTracingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcLoadBalancerMultiZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#enabled DataCplnGvc#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataCplnGvcLoadBalancerMultiZoneToTerraform(struct?: DataCplnGvcLoadBalancerMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataCplnGvcLoadBalancerMultiZoneToHclTerraform(struct?: DataCplnGvcLoadBalancerMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcLoadBalancerMultiZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcLoadBalancerMultiZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcLoadBalancerMultiZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}

export class DataCplnGvcLoadBalancerMultiZoneList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcLoadBalancerMultiZone[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcLoadBalancerMultiZoneOutputReference {
    return new DataCplnGvcLoadBalancerMultiZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcLoadBalancerRedirectClass {
  /**
  * An optional url redirect for 401 responses. Supports envoy format strings to include request information. E.g. https://your-oauth-server/oauth2/authorize?return_to=%REQ(:path)%&client_id=your-client-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#status_401 DataCplnGvc#status_401}
  */
  readonly status401?: string;
  /**
  * Specify the redirect url for any 500 level status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#status_5xx DataCplnGvc#status_5xx}
  */
  readonly status5Xx?: string;
}

export function dataCplnGvcLoadBalancerRedirectClassToTerraform(struct?: DataCplnGvcLoadBalancerRedirectClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_401: cdktf.stringToTerraform(struct!.status401),
    status_5xx: cdktf.stringToTerraform(struct!.status5Xx),
  }
}


export function dataCplnGvcLoadBalancerRedirectClassToHclTerraform(struct?: DataCplnGvcLoadBalancerRedirectClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_401: {
      value: cdktf.stringToHclTerraform(struct!.status401),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_5xx: {
      value: cdktf.stringToHclTerraform(struct!.status5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcLoadBalancerRedirectClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcLoadBalancerRedirectClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status401 = this._status401;
    }
    if (this._status5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status5Xx = this._status5Xx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcLoadBalancerRedirectClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status401 = undefined;
      this._status5Xx = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status401 = value.status401;
      this._status5Xx = value.status5Xx;
    }
  }

  // status_401 - computed: false, optional: true, required: false
  private _status401?: string; 
  public get status401() {
    return this.getStringAttribute('status_401');
  }
  public set status401(value: string) {
    this._status401 = value;
  }
  public resetStatus401() {
    this._status401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status401Input() {
    return this._status401;
  }

  // status_5xx - computed: false, optional: true, required: false
  private _status5Xx?: string; 
  public get status5Xx() {
    return this.getStringAttribute('status_5xx');
  }
  public set status5Xx(value: string) {
    this._status5Xx = value;
  }
  public resetStatus5Xx() {
    this._status5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status5XxInput() {
    return this._status5Xx;
  }
}

export class DataCplnGvcLoadBalancerRedirectClassList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcLoadBalancerRedirectClass[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcLoadBalancerRedirectClassOutputReference {
    return new DataCplnGvcLoadBalancerRedirectClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcLoadBalancerRedirect {
  /**
  * class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#class DataCplnGvc#class}
  */
  readonly class?: DataCplnGvcLoadBalancerRedirectClass[] | cdktf.IResolvable;
}

export function dataCplnGvcLoadBalancerRedirectToTerraform(struct?: DataCplnGvcLoadBalancerRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.listMapper(dataCplnGvcLoadBalancerRedirectClassToTerraform, true)(struct!.class),
  }
}


export function dataCplnGvcLoadBalancerRedirectToHclTerraform(struct?: DataCplnGvcLoadBalancerRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.listMapperHcl(dataCplnGvcLoadBalancerRedirectClassToHclTerraform, true)(struct!.class),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnGvcLoadBalancerRedirectClassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcLoadBalancerRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcLoadBalancerRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcLoadBalancerRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class.internalValue = value.class;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class = new DataCplnGvcLoadBalancerRedirectClassList(this, "class", false);
  public get class() {
    return this._class;
  }
  public putClass(value: DataCplnGvcLoadBalancerRedirectClass[] | cdktf.IResolvable) {
    this._class.internalValue = value;
  }
  public resetClass() {
    this._class.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class.internalValue;
  }
}

export class DataCplnGvcLoadBalancerRedirectList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcLoadBalancerRedirect[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcLoadBalancerRedirectOutputReference {
    return new DataCplnGvcLoadBalancerRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcLoadBalancer {
  /**
  * Creates a dedicated load balancer in each location and enables additional Domain features: custom ports, protocols and wildcard hostnames. Charges apply for each location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#dedicated DataCplnGvc#dedicated}
  */
  readonly dedicated?: boolean | cdktf.IResolvable;
  /**
  * The link or the name of the IP Set that will be used for this load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#ipset DataCplnGvc#ipset}
  */
  readonly ipset?: string;
  /**
  * Controls the address used for request logging and for setting the X-Envoy-External-Address header. If set to 1, then the last address in an existing X-Forwarded-For header will be used in place of the source client IP address. If set to 2, then the second to last address in an existing X-Forwarded-For header will be used in place of the source client IP address. If the XFF header does not have at least two addresses or does not exist then the source client IP address will be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#trusted_proxies DataCplnGvc#trusted_proxies}
  */
  readonly trustedProxies?: number;
  /**
  * multi_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#multi_zone DataCplnGvc#multi_zone}
  */
  readonly multiZone?: DataCplnGvcLoadBalancerMultiZone[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#redirect DataCplnGvc#redirect}
  */
  readonly redirect?: DataCplnGvcLoadBalancerRedirect[] | cdktf.IResolvable;
}

export function dataCplnGvcLoadBalancerToTerraform(struct?: DataCplnGvcLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated: cdktf.booleanToTerraform(struct!.dedicated),
    ipset: cdktf.stringToTerraform(struct!.ipset),
    trusted_proxies: cdktf.numberToTerraform(struct!.trustedProxies),
    multi_zone: cdktf.listMapper(dataCplnGvcLoadBalancerMultiZoneToTerraform, true)(struct!.multiZone),
    redirect: cdktf.listMapper(dataCplnGvcLoadBalancerRedirectToTerraform, true)(struct!.redirect),
  }
}


export function dataCplnGvcLoadBalancerToHclTerraform(struct?: DataCplnGvcLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated: {
      value: cdktf.booleanToHclTerraform(struct!.dedicated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipset: {
      value: cdktf.stringToHclTerraform(struct!.ipset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_proxies: {
      value: cdktf.numberToHclTerraform(struct!.trustedProxies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_zone: {
      value: cdktf.listMapperHcl(dataCplnGvcLoadBalancerMultiZoneToHclTerraform, true)(struct!.multiZone),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnGvcLoadBalancerMultiZoneList",
    },
    redirect: {
      value: cdktf.listMapperHcl(dataCplnGvcLoadBalancerRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnGvcLoadBalancerRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicated = this._dedicated;
    }
    if (this._ipset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipset = this._ipset;
    }
    if (this._trustedProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedProxies = this._trustedProxies;
    }
    if (this._multiZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiZone = this._multiZone?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedicated = undefined;
      this._ipset = undefined;
      this._trustedProxies = undefined;
      this._multiZone.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedicated = value.dedicated;
      this._ipset = value.ipset;
      this._trustedProxies = value.trustedProxies;
      this._multiZone.internalValue = value.multiZone;
      this._redirect.internalValue = value.redirect;
    }
  }

  // dedicated - computed: false, optional: true, required: false
  private _dedicated?: boolean | cdktf.IResolvable; 
  public get dedicated() {
    return this.getBooleanAttribute('dedicated');
  }
  public set dedicated(value: boolean | cdktf.IResolvable) {
    this._dedicated = value;
  }
  public resetDedicated() {
    this._dedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated;
  }

  // ipset - computed: false, optional: true, required: false
  private _ipset?: string; 
  public get ipset() {
    return this.getStringAttribute('ipset');
  }
  public set ipset(value: string) {
    this._ipset = value;
  }
  public resetIpset() {
    this._ipset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetInput() {
    return this._ipset;
  }

  // trusted_proxies - computed: true, optional: true, required: false
  private _trustedProxies?: number; 
  public get trustedProxies() {
    return this.getNumberAttribute('trusted_proxies');
  }
  public set trustedProxies(value: number) {
    this._trustedProxies = value;
  }
  public resetTrustedProxies() {
    this._trustedProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedProxiesInput() {
    return this._trustedProxies;
  }

  // multi_zone - computed: false, optional: true, required: false
  private _multiZone = new DataCplnGvcLoadBalancerMultiZoneList(this, "multi_zone", false);
  public get multiZone() {
    return this._multiZone;
  }
  public putMultiZone(value: DataCplnGvcLoadBalancerMultiZone[] | cdktf.IResolvable) {
    this._multiZone.internalValue = value;
  }
  public resetMultiZone() {
    this._multiZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneInput() {
    return this._multiZone.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataCplnGvcLoadBalancerRedirectList(this, "redirect", false);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataCplnGvcLoadBalancerRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class DataCplnGvcLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcLoadBalancerOutputReference {
    return new DataCplnGvcLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcOtelTracing {
  /**
  * Key-value map of custom tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#custom_tags DataCplnGvc#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Tracing Endpoint Workload. Either the canonical endpoint or internal endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#endpoint DataCplnGvc#endpoint}
  */
  readonly endpoint: string;
  /**
  * Determines what percentage of requests should be traced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#sampling DataCplnGvc#sampling}
  */
  readonly sampling: number;
}

export function dataCplnGvcOtelTracingToTerraform(struct?: DataCplnGvcOtelTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    sampling: cdktf.numberToTerraform(struct!.sampling),
  }
}


export function dataCplnGvcOtelTracingToHclTerraform(struct?: DataCplnGvcOtelTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling: {
      value: cdktf.numberToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcOtelTracingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcOtelTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcOtelTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTags = undefined;
      this._endpoint = undefined;
      this._sampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTags = value.customTags;
      this._endpoint = value.endpoint;
      this._sampling = value.sampling;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
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

  // sampling - computed: false, optional: false, required: true
  private _sampling?: number; 
  public get sampling() {
    return this.getNumberAttribute('sampling');
  }
  public set sampling(value: number) {
    this._sampling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }
}

export class DataCplnGvcOtelTracingList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcOtelTracing[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcOtelTracingOutputReference {
    return new DataCplnGvcOtelTracingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnGvcSidecar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#envoy DataCplnGvc#envoy}
  */
  readonly envoy: string;
}

export function dataCplnGvcSidecarToTerraform(struct?: DataCplnGvcSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envoy: cdktf.stringToTerraform(struct!.envoy),
  }
}


export function dataCplnGvcSidecarToHclTerraform(struct?: DataCplnGvcSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envoy: {
      value: cdktf.stringToHclTerraform(struct!.envoy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnGvcSidecarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnGvcSidecar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envoy !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoy = this._envoy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnGvcSidecar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envoy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envoy = value.envoy;
    }
  }

  // envoy - computed: false, optional: false, required: true
  private _envoy?: string; 
  public get envoy() {
    return this.getStringAttribute('envoy');
  }
  public set envoy(value: string) {
    this._envoy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyInput() {
    return this._envoy;
  }
}

export class DataCplnGvcSidecarList extends cdktf.ComplexList {
  public internalValue? : DataCplnGvcSidecar[] | cdktf.IResolvable

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
  public get(index: number): DataCplnGvcSidecarOutputReference {
    return new DataCplnGvcSidecarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc cpln_gvc}
*/
export class DataCplnGvc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_gvc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCplnGvc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCplnGvc to import
  * @param importFromId The id of the existing DataCplnGvc that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCplnGvc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_gvc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/data-sources/gvc cpln_gvc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCplnGvcConfig
  */
  public constructor(scope: Construct, id: string, config: DataCplnGvcConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_gvc',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._endpointNamingFormat = config.endpointNamingFormat;
    this._env = config.env;
    this._locations = config.locations;
    this._name = config.name;
    this._pullSecrets = config.pullSecrets;
    this._tags = config.tags;
    this._controlplaneTracing.internalValue = config.controlplaneTracing;
    this._keda.internalValue = config.keda;
    this._lightstepTracing.internalValue = config.lightstepTracing;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._otelTracing.internalValue = config.otelTracing;
    this._sidecar.internalValue = config.sidecar;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // endpoint_naming_format - computed: true, optional: true, required: false
  private _endpointNamingFormat?: string; 
  public get endpointNamingFormat() {
    return this.getStringAttribute('endpoint_naming_format');
  }
  public set endpointNamingFormat(value: string) {
    this._endpointNamingFormat = value;
  }
  public resetEndpointNamingFormat() {
    this._endpointNamingFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNamingFormatInput() {
    return this._endpointNamingFormat;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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

  // pull_secrets - computed: false, optional: true, required: false
  private _pullSecrets?: string[]; 
  public get pullSecrets() {
    return cdktf.Fn.tolist(this.getListAttribute('pull_secrets'));
  }
  public set pullSecrets(value: string[]) {
    this._pullSecrets = value;
  }
  public resetPullSecrets() {
    this._pullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullSecretsInput() {
    return this._pullSecrets;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // controlplane_tracing - computed: false, optional: true, required: false
  private _controlplaneTracing = new DataCplnGvcControlplaneTracingList(this, "controlplane_tracing", false);
  public get controlplaneTracing() {
    return this._controlplaneTracing;
  }
  public putControlplaneTracing(value: DataCplnGvcControlplaneTracing[] | cdktf.IResolvable) {
    this._controlplaneTracing.internalValue = value;
  }
  public resetControlplaneTracing() {
    this._controlplaneTracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlplaneTracingInput() {
    return this._controlplaneTracing.internalValue;
  }

  // keda - computed: false, optional: true, required: false
  private _keda = new DataCplnGvcKedaList(this, "keda", false);
  public get keda() {
    return this._keda;
  }
  public putKeda(value: DataCplnGvcKeda[] | cdktf.IResolvable) {
    this._keda.internalValue = value;
  }
  public resetKeda() {
    this._keda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kedaInput() {
    return this._keda.internalValue;
  }

  // lightstep_tracing - computed: false, optional: true, required: false
  private _lightstepTracing = new DataCplnGvcLightstepTracingList(this, "lightstep_tracing", false);
  public get lightstepTracing() {
    return this._lightstepTracing;
  }
  public putLightstepTracing(value: DataCplnGvcLightstepTracing[] | cdktf.IResolvable) {
    this._lightstepTracing.internalValue = value;
  }
  public resetLightstepTracing() {
    this._lightstepTracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepTracingInput() {
    return this._lightstepTracing.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataCplnGvcLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataCplnGvcLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // otel_tracing - computed: false, optional: true, required: false
  private _otelTracing = new DataCplnGvcOtelTracingList(this, "otel_tracing", false);
  public get otelTracing() {
    return this._otelTracing;
  }
  public putOtelTracing(value: DataCplnGvcOtelTracing[] | cdktf.IResolvable) {
    this._otelTracing.internalValue = value;
  }
  public resetOtelTracing() {
    this._otelTracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otelTracingInput() {
    return this._otelTracing.internalValue;
  }

  // sidecar - computed: false, optional: true, required: false
  private _sidecar = new DataCplnGvcSidecarList(this, "sidecar", false);
  public get sidecar() {
    return this._sidecar;
  }
  public putSidecar(value: DataCplnGvcSidecar[] | cdktf.IResolvable) {
    this._sidecar.internalValue = value;
  }
  public resetSidecar() {
    this._sidecar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInput() {
    return this._sidecar.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      endpoint_naming_format: cdktf.stringToTerraform(this._endpointNamingFormat),
      env: cdktf.hashMapper(cdktf.stringToTerraform)(this._env),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pullSecrets),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      controlplane_tracing: cdktf.listMapper(dataCplnGvcControlplaneTracingToTerraform, true)(this._controlplaneTracing.internalValue),
      keda: cdktf.listMapper(dataCplnGvcKedaToTerraform, true)(this._keda.internalValue),
      lightstep_tracing: cdktf.listMapper(dataCplnGvcLightstepTracingToTerraform, true)(this._lightstepTracing.internalValue),
      load_balancer: cdktf.listMapper(dataCplnGvcLoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      otel_tracing: cdktf.listMapper(dataCplnGvcOtelTracingToTerraform, true)(this._otelTracing.internalValue),
      sidecar: cdktf.listMapper(dataCplnGvcSidecarToTerraform, true)(this._sidecar.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_naming_format: {
        value: cdktf.stringToHclTerraform(this._endpointNamingFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._env),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_secrets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pullSecrets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      controlplane_tracing: {
        value: cdktf.listMapperHcl(dataCplnGvcControlplaneTracingToHclTerraform, true)(this._controlplaneTracing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnGvcControlplaneTracingList",
      },
      keda: {
        value: cdktf.listMapperHcl(dataCplnGvcKedaToHclTerraform, true)(this._keda.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnGvcKedaList",
      },
      lightstep_tracing: {
        value: cdktf.listMapperHcl(dataCplnGvcLightstepTracingToHclTerraform, true)(this._lightstepTracing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnGvcLightstepTracingList",
      },
      load_balancer: {
        value: cdktf.listMapperHcl(dataCplnGvcLoadBalancerToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnGvcLoadBalancerList",
      },
      otel_tracing: {
        value: cdktf.listMapperHcl(dataCplnGvcOtelTracingToHclTerraform, true)(this._otelTracing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnGvcOtelTracingList",
      },
      sidecar: {
        value: cdktf.listMapperHcl(dataCplnGvcSidecarToHclTerraform, true)(this._sidecar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnGvcSidecarList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
