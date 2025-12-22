import * as cdktf from 'cdktf';
import { DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestination,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestinationToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestinationToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestinationOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxy,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxyToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxyToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxyOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptions,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefs,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefsToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefsToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefsOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectAction,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectActionToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectActionToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectActionOutputReference } from './structs1600'
import { DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptions,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptionsToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptionsToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptionsOutputReference } from './structs2000'
import { DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateAction,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateActionToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateActionToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateActionOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseAction,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseActionToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseActionToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseActionOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRef,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRefToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRefToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRefOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchers,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchersToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchersToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchersList,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptions,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefs,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefsToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefsToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefsOutputReference } from './structs800'
import { DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatuses,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatusesToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatusesToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatusesOutputReference,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfig,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfigToTerraform,
dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfigToHclTerraform,
DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfigOutputReference } from './structs0'
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#destination DataK8SGatewaySoloIoVirtualServiceV1Manifest#destination}
  */
  readonly destination?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#options DataK8SGatewaySoloIoVirtualServiceV1Manifest#options}
  */
  readonly options?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#weight DataK8SGatewaySoloIoVirtualServiceV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestinationToTerraform(struct!.destination),
    options: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptionsToTerraform(struct!.options),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestination",
    },
    options: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptions",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._options.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._options.internalValue = value.options;
      this._weight = value.weight;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOutputReference {
    return new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#destinations DataK8SGatewaySoloIoVirtualServiceV1Manifest#destinations}
  */
  readonly destinations?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations[] | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsToTerraform, false)(struct!.destinations),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
    }
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#data_centers DataK8SGatewaySoloIoVirtualServiceV1Manifest#data_centers}
  */
  readonly dataCenters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#service_name DataK8SGatewaySoloIoVirtualServiceV1Manifest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#tags DataK8SGatewaySoloIoVirtualServiceV1Manifest#tags}
  */
  readonly tags?: string[];
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsulToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_centers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataCenters),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsulToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_centers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataCenters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCenters = this._dataCenters;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataCenters = undefined;
      this._serviceName = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataCenters = value.dataCenters;
      this._serviceName = value.serviceName;
      this._tags = value.tags;
    }
  }

  // data_centers - computed: false, optional: true, required: false
  private _dataCenters?: string[]; 
  public get dataCenters() {
    return this.getListAttribute('data_centers');
  }
  public set dataCenters(value: string[]) {
    this._dataCenters = value;
  }
  public resetDataCenters() {
    this._dataCenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentersInput() {
    return this._dataCenters;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#invocation_style DataK8SGatewaySoloIoVirtualServiceV1Manifest#invocation_style}
  */
  readonly invocationStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#logical_name DataK8SGatewaySoloIoVirtualServiceV1Manifest#logical_name}
  */
  readonly logicalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#request_transformation DataK8SGatewaySoloIoVirtualServiceV1Manifest#request_transformation}
  */
  readonly requestTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#response_transformation DataK8SGatewaySoloIoVirtualServiceV1Manifest#response_transformation}
  */
  readonly responseTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#unwrap_as_alb DataK8SGatewaySoloIoVirtualServiceV1Manifest#unwrap_as_alb}
  */
  readonly unwrapAsAlb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#unwrap_as_api_gateway DataK8SGatewaySoloIoVirtualServiceV1Manifest#unwrap_as_api_gateway}
  */
  readonly unwrapAsApiGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#wrap_as_api_gateway DataK8SGatewaySoloIoVirtualServiceV1Manifest#wrap_as_api_gateway}
  */
  readonly wrapAsApiGateway?: boolean | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAwsToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invocation_style: cdktf.stringToTerraform(struct!.invocationStyle),
    logical_name: cdktf.stringToTerraform(struct!.logicalName),
    request_transformation: cdktf.booleanToTerraform(struct!.requestTransformation),
    response_transformation: cdktf.booleanToTerraform(struct!.responseTransformation),
    unwrap_as_alb: cdktf.booleanToTerraform(struct!.unwrapAsAlb),
    unwrap_as_api_gateway: cdktf.booleanToTerraform(struct!.unwrapAsApiGateway),
    wrap_as_api_gateway: cdktf.booleanToTerraform(struct!.wrapAsApiGateway),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAwsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invocation_style: {
      value: cdktf.stringToHclTerraform(struct!.invocationStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_name: {
      value: cdktf.stringToHclTerraform(struct!.logicalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.requestTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.responseTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unwrap_as_alb: {
      value: cdktf.booleanToHclTerraform(struct!.unwrapAsAlb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unwrap_as_api_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.unwrapAsApiGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wrap_as_api_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.wrapAsApiGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invocationStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationStyle = this._invocationStyle;
    }
    if (this._logicalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalName = this._logicalName;
    }
    if (this._requestTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTransformation = this._requestTransformation;
    }
    if (this._responseTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTransformation = this._responseTransformation;
    }
    if (this._unwrapAsAlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapAsAlb = this._unwrapAsAlb;
    }
    if (this._unwrapAsApiGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapAsApiGateway = this._unwrapAsApiGateway;
    }
    if (this._wrapAsApiGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapAsApiGateway = this._wrapAsApiGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invocationStyle = undefined;
      this._logicalName = undefined;
      this._requestTransformation = undefined;
      this._responseTransformation = undefined;
      this._unwrapAsAlb = undefined;
      this._unwrapAsApiGateway = undefined;
      this._wrapAsApiGateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invocationStyle = value.invocationStyle;
      this._logicalName = value.logicalName;
      this._requestTransformation = value.requestTransformation;
      this._responseTransformation = value.responseTransformation;
      this._unwrapAsAlb = value.unwrapAsAlb;
      this._unwrapAsApiGateway = value.unwrapAsApiGateway;
      this._wrapAsApiGateway = value.wrapAsApiGateway;
    }
  }

  // invocation_style - computed: false, optional: true, required: false
  private _invocationStyle?: string; 
  public get invocationStyle() {
    return this.getStringAttribute('invocation_style');
  }
  public set invocationStyle(value: string) {
    this._invocationStyle = value;
  }
  public resetInvocationStyle() {
    this._invocationStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationStyleInput() {
    return this._invocationStyle;
  }

  // logical_name - computed: false, optional: true, required: false
  private _logicalName?: string; 
  public get logicalName() {
    return this.getStringAttribute('logical_name');
  }
  public set logicalName(value: string) {
    this._logicalName = value;
  }
  public resetLogicalName() {
    this._logicalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNameInput() {
    return this._logicalName;
  }

  // request_transformation - computed: false, optional: true, required: false
  private _requestTransformation?: boolean | cdktf.IResolvable; 
  public get requestTransformation() {
    return this.getBooleanAttribute('request_transformation');
  }
  public set requestTransformation(value: boolean | cdktf.IResolvable) {
    this._requestTransformation = value;
  }
  public resetRequestTransformation() {
    this._requestTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTransformationInput() {
    return this._requestTransformation;
  }

  // response_transformation - computed: false, optional: true, required: false
  private _responseTransformation?: boolean | cdktf.IResolvable; 
  public get responseTransformation() {
    return this.getBooleanAttribute('response_transformation');
  }
  public set responseTransformation(value: boolean | cdktf.IResolvable) {
    this._responseTransformation = value;
  }
  public resetResponseTransformation() {
    this._responseTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTransformationInput() {
    return this._responseTransformation;
  }

  // unwrap_as_alb - computed: false, optional: true, required: false
  private _unwrapAsAlb?: boolean | cdktf.IResolvable; 
  public get unwrapAsAlb() {
    return this.getBooleanAttribute('unwrap_as_alb');
  }
  public set unwrapAsAlb(value: boolean | cdktf.IResolvable) {
    this._unwrapAsAlb = value;
  }
  public resetUnwrapAsAlb() {
    this._unwrapAsAlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrapAsAlbInput() {
    return this._unwrapAsAlb;
  }

  // unwrap_as_api_gateway - computed: false, optional: true, required: false
  private _unwrapAsApiGateway?: boolean | cdktf.IResolvable; 
  public get unwrapAsApiGateway() {
    return this.getBooleanAttribute('unwrap_as_api_gateway');
  }
  public set unwrapAsApiGateway(value: boolean | cdktf.IResolvable) {
    this._unwrapAsApiGateway = value;
  }
  public resetUnwrapAsApiGateway() {
    this._unwrapAsApiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrapAsApiGatewayInput() {
    return this._unwrapAsApiGateway;
  }

  // wrap_as_api_gateway - computed: false, optional: true, required: false
  private _wrapAsApiGateway?: boolean | cdktf.IResolvable; 
  public get wrapAsApiGateway() {
    return this.getBooleanAttribute('wrap_as_api_gateway');
  }
  public set wrapAsApiGateway(value: boolean | cdktf.IResolvable) {
    this._wrapAsApiGateway = value;
  }
  public resetWrapAsApiGateway() {
    this._wrapAsApiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapAsApiGatewayInput() {
    return this._wrapAsApiGateway;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#function_name DataK8SGatewaySoloIoVirtualServiceV1Manifest#function_name}
  */
  readonly functionName?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzureToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzureToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
    }
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#headers DataK8SGatewaySoloIoVirtualServiceV1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#path DataK8SGatewaySoloIoVirtualServiceV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParametersToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParametersToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._path = value.path;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#function DataK8SGatewaySoloIoVirtualServiceV1Manifest#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#package DataK8SGatewaySoloIoVirtualServiceV1Manifest#package}
  */
  readonly package?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#parameters DataK8SGatewaySoloIoVirtualServiceV1Manifest#parameters}
  */
  readonly parameters?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#service DataK8SGatewaySoloIoVirtualServiceV1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    package: cdktf.stringToTerraform(struct!.package),
    parameters: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParametersToTerraform(struct!.parameters),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package: {
      value: cdktf.stringToHclTerraform(struct!.package),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters",
    },
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

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._package !== undefined) {
      hasAnyValues = true;
      internalValueResult.package = this._package;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._function = undefined;
      this._package = undefined;
      this._parameters.internalValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._function = value.function;
      this._package = value.package;
      this._parameters.internalValue = value.parameters;
      this._service = value.service;
    }
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#headers DataK8SGatewaySoloIoVirtualServiceV1Manifest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#path DataK8SGatewaySoloIoVirtualServiceV1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParametersToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParametersToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers = value.headers;
      this._path = value.path;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#text DataK8SGatewaySoloIoVirtualServiceV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBodyToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBodyToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#text DataK8SGatewaySoloIoVirtualServiceV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#json_to_proto DataK8SGatewaySoloIoVirtualServiceV1Manifest#json_to_proto}
  */
  readonly jsonToProto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#key DataK8SGatewaySoloIoVirtualServiceV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#metadata_namespace DataK8SGatewaySoloIoVirtualServiceV1Manifest#metadata_namespace}
  */
  readonly metadataNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#value DataK8SGatewaySoloIoVirtualServiceV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_to_proto: cdktf.booleanToTerraform(struct!.jsonToProto),
    key: cdktf.stringToTerraform(struct!.key),
    metadata_namespace: cdktf.stringToTerraform(struct!.metadataNamespace),
    value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_to_proto: {
      value: cdktf.booleanToHclTerraform(struct!.jsonToProto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metadataNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonToProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonToProto = this._jsonToProto;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._metadataNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataNamespace = this._metadataNamespace;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonToProto = undefined;
      this._key = undefined;
      this._metadataNamespace = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonToProto = value.jsonToProto;
      this._key = value.key;
      this._metadataNamespace = value.metadataNamespace;
      this._value.internalValue = value.value;
    }
  }

  // json_to_proto - computed: false, optional: true, required: false
  private _jsonToProto?: boolean | cdktf.IResolvable; 
  public get jsonToProto() {
    return this.getBooleanAttribute('json_to_proto');
  }
  public set jsonToProto(value: boolean | cdktf.IResolvable) {
    this._jsonToProto = value;
  }
  public resetJsonToProto() {
    this._jsonToProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonToProtoInput() {
    return this._jsonToProto;
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

  // metadata_namespace - computed: false, optional: true, required: false
  private _metadataNamespace?: string; 
  public get metadataNamespace() {
    return this.getStringAttribute('metadata_namespace');
  }
  public set metadataNamespace(value: string) {
    this._metadataNamespace = value;
  }
  public resetMetadataNamespace() {
    this._metadataNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataNamespaceInput() {
    return this._metadataNamespace;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesOutputReference {
    return new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#body DataK8SGatewaySoloIoVirtualServiceV1Manifest#body}
  */
  readonly body?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#header DataK8SGatewaySoloIoVirtualServiceV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#mode DataK8SGatewaySoloIoVirtualServiceV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#regex DataK8SGatewaySoloIoVirtualServiceV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#replacement_text DataK8SGatewaySoloIoVirtualServiceV1Manifest#replacement_text}
  */
  readonly replacementText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#subgroup DataK8SGatewaySoloIoVirtualServiceV1Manifest#subgroup}
  */
  readonly subgroup?: number;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractorsToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.body),
    header: cdktf.stringToTerraform(struct!.header),
    mode: cdktf.stringToTerraform(struct!.mode),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement_text: cdktf.stringToTerraform(struct!.replacementText),
    subgroup: cdktf.numberToTerraform(struct!.subgroup),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractorsToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.body),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_text: {
      value: cdktf.stringToHclTerraform(struct!.replacementText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subgroup: {
      value: cdktf.numberToHclTerraform(struct!.subgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacementText !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementText = this._replacementText;
    }
    if (this._subgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.subgroup = this._subgroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._header = undefined;
      this._mode = undefined;
      this._regex = undefined;
      this._replacementText = undefined;
      this._subgroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._header = value.header;
      this._mode = value.mode;
      this._regex = value.regex;
      this._replacementText = value.replacementText;
      this._subgroup = value.subgroup;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: { [key: string]: string }; 
  public get body() {
    return this.getStringMapAttribute('body');
  }
  public set body(value: { [key: string]: string }) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement_text - computed: false, optional: true, required: false
  private _replacementText?: string; 
  public get replacementText() {
    return this.getStringAttribute('replacement_text');
  }
  public set replacementText(value: string) {
    this._replacementText = value;
  }
  public resetReplacementText() {
    this._replacementText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementTextInput() {
    return this._replacementText;
  }

  // subgroup - computed: false, optional: true, required: false
  private _subgroup?: number; 
  public get subgroup() {
    return this.getNumberAttribute('subgroup');
  }
  public set subgroup(value: number) {
    this._subgroup = value;
  }
  public resetSubgroup() {
    this._subgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subgroupInput() {
    return this._subgroup;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#text DataK8SGatewaySoloIoVirtualServiceV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#text DataK8SGatewaySoloIoVirtualServiceV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#key DataK8SGatewaySoloIoVirtualServiceV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#value DataK8SGatewaySoloIoVirtualServiceV1Manifest#value}
  */
  readonly value?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToTerraform(struct!.value),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable): any {
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
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendOutputReference {
    return new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#text DataK8SGatewaySoloIoVirtualServiceV1Manifest#text}
  */
  readonly text?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#override_empty DataK8SGatewaySoloIoVirtualServiceV1Manifest#override_empty}
  */
  readonly overrideEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#tmpl DataK8SGatewaySoloIoVirtualServiceV1Manifest#tmpl}
  */
  readonly tmpl?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_empty: cdktf.booleanToTerraform(struct!.overrideEmpty),
    tmpl: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToTerraform(struct!.tmpl),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_empty: {
      value: cdktf.booleanToHclTerraform(struct!.overrideEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tmpl: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplToHclTerraform(struct!.tmpl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideEmpty = this._overrideEmpty;
    }
    if (this._tmpl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpl = this._tmpl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideEmpty = undefined;
      this._tmpl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideEmpty = value.overrideEmpty;
      this._tmpl.internalValue = value.tmpl;
    }
  }

  // override_empty - computed: false, optional: true, required: false
  private _overrideEmpty?: boolean | cdktf.IResolvable; 
  public get overrideEmpty() {
    return this.getBooleanAttribute('override_empty');
  }
  public set overrideEmpty(value: boolean | cdktf.IResolvable) {
    this._overrideEmpty = value;
  }
  public resetOverrideEmpty() {
    this._overrideEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideEmptyInput() {
    return this._overrideEmpty;
  }

  // tmpl - computed: false, optional: true, required: false
  private _tmpl = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmplOutputReference(this, "tmpl");
  public get tmpl() {
    return this._tmpl;
  }
  public putTmpl(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysTmpl) {
    this._tmpl.internalValue = value;
  }
  public resetTmpl() {
    this._tmpl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmplInput() {
    return this._tmpl.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#json_keys DataK8SGatewaySoloIoVirtualServiceV1Manifest#json_keys}
  */
  readonly jsonKeys?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_keys: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToTerraform(struct!.jsonKeys),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_keys: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysToHclTerraform(struct!.jsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonKeys = this._jsonKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonKeys.internalValue = value.jsonKeys;
    }
  }

  // json_keys - computed: false, optional: true, required: false
  private _jsonKeys = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeysOutputReference(this, "json_keys");
  public get jsonKeys() {
    return this._jsonKeys;
  }
  public putJsonKeys(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysJsonKeys) {
    this._jsonKeys.internalValue = value;
  }
  public resetJsonKeys() {
    this._jsonKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeysInput() {
    return this._jsonKeys.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#advanced_templates DataK8SGatewaySoloIoVirtualServiceV1Manifest#advanced_templates}
  */
  readonly advancedTemplates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#body DataK8SGatewaySoloIoVirtualServiceV1Manifest#body}
  */
  readonly body?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#dynamic_metadata_values DataK8SGatewaySoloIoVirtualServiceV1Manifest#dynamic_metadata_values}
  */
  readonly dynamicMetadataValues?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#escape_characters DataK8SGatewaySoloIoVirtualServiceV1Manifest#escape_characters}
  */
  readonly escapeCharacters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#extractors DataK8SGatewaySoloIoVirtualServiceV1Manifest#extractors}
  */
  readonly extractors?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#headers DataK8SGatewaySoloIoVirtualServiceV1Manifest#headers}
  */
  readonly headers?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#headers_to_append DataK8SGatewaySoloIoVirtualServiceV1Manifest#headers_to_append}
  */
  readonly headersToAppend?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#headers_to_remove DataK8SGatewaySoloIoVirtualServiceV1Manifest#headers_to_remove}
  */
  readonly headersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#ignore_error_on_parse DataK8SGatewaySoloIoVirtualServiceV1Manifest#ignore_error_on_parse}
  */
  readonly ignoreErrorOnParse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#merge_extractors_to_body DataK8SGatewaySoloIoVirtualServiceV1Manifest#merge_extractors_to_body}
  */
  readonly mergeExtractorsToBody?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#merge_json_keys DataK8SGatewaySoloIoVirtualServiceV1Manifest#merge_json_keys}
  */
  readonly mergeJsonKeys?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#parse_body_behavior DataK8SGatewaySoloIoVirtualServiceV1Manifest#parse_body_behavior}
  */
  readonly parseBodyBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#passthrough DataK8SGatewaySoloIoVirtualServiceV1Manifest#passthrough}
  */
  readonly passthrough?: { [key: string]: string };
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_templates: cdktf.booleanToTerraform(struct!.advancedTemplates),
    body: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBodyToTerraform(struct!.body),
    dynamic_metadata_values: cdktf.listMapper(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToTerraform, false)(struct!.dynamicMetadataValues),
    escape_characters: cdktf.booleanToTerraform(struct!.escapeCharacters),
    extractors: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractorsToTerraform(struct!.extractors),
    headers: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToTerraform(struct!.headers),
    headers_to_append: cdktf.listMapper(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendToTerraform, false)(struct!.headersToAppend),
    headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersToRemove),
    ignore_error_on_parse: cdktf.booleanToTerraform(struct!.ignoreErrorOnParse),
    merge_extractors_to_body: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.mergeExtractorsToBody),
    merge_json_keys: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysToTerraform(struct!.mergeJsonKeys),
    parse_body_behavior: cdktf.stringToTerraform(struct!.parseBodyBehavior),
    passthrough: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.passthrough),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_templates: {
      value: cdktf.booleanToHclTerraform(struct!.advancedTemplates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody",
    },
    dynamic_metadata_values: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesToHclTerraform, false)(struct!.dynamicMetadataValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesList",
    },
    escape_characters: {
      value: cdktf.booleanToHclTerraform(struct!.escapeCharacters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extractors: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractorsToHclTerraform(struct!.extractors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors",
    },
    headers: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders",
    },
    headers_to_append: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendToHclTerraform, false)(struct!.headersToAppend),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendList",
    },
    headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_error_on_parse: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreErrorOnParse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    merge_extractors_to_body: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.mergeExtractorsToBody),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    merge_json_keys: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysToHclTerraform(struct!.mergeJsonKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys",
    },
    parse_body_behavior: {
      value: cdktf.stringToHclTerraform(struct!.parseBodyBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.passthrough),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedTemplates !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedTemplates = this._advancedTemplates;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._dynamicMetadataValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMetadataValues = this._dynamicMetadataValues?.internalValue;
    }
    if (this._escapeCharacters !== undefined) {
      hasAnyValues = true;
      internalValueResult.escapeCharacters = this._escapeCharacters;
    }
    if (this._extractors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractors = this._extractors?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._headersToAppend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToAppend = this._headersToAppend?.internalValue;
    }
    if (this._headersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersToRemove = this._headersToRemove;
    }
    if (this._ignoreErrorOnParse !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreErrorOnParse = this._ignoreErrorOnParse;
    }
    if (this._mergeExtractorsToBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeExtractorsToBody = this._mergeExtractorsToBody;
    }
    if (this._mergeJsonKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeJsonKeys = this._mergeJsonKeys?.internalValue;
    }
    if (this._parseBodyBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseBodyBehavior = this._parseBodyBehavior;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedTemplates = undefined;
      this._body.internalValue = undefined;
      this._dynamicMetadataValues.internalValue = undefined;
      this._escapeCharacters = undefined;
      this._extractors.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._headersToAppend.internalValue = undefined;
      this._headersToRemove = undefined;
      this._ignoreErrorOnParse = undefined;
      this._mergeExtractorsToBody = undefined;
      this._mergeJsonKeys.internalValue = undefined;
      this._parseBodyBehavior = undefined;
      this._passthrough = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedTemplates = value.advancedTemplates;
      this._body.internalValue = value.body;
      this._dynamicMetadataValues.internalValue = value.dynamicMetadataValues;
      this._escapeCharacters = value.escapeCharacters;
      this._extractors.internalValue = value.extractors;
      this._headers.internalValue = value.headers;
      this._headersToAppend.internalValue = value.headersToAppend;
      this._headersToRemove = value.headersToRemove;
      this._ignoreErrorOnParse = value.ignoreErrorOnParse;
      this._mergeExtractorsToBody = value.mergeExtractorsToBody;
      this._mergeJsonKeys.internalValue = value.mergeJsonKeys;
      this._parseBodyBehavior = value.parseBodyBehavior;
      this._passthrough = value.passthrough;
    }
  }

  // advanced_templates - computed: false, optional: true, required: false
  private _advancedTemplates?: boolean | cdktf.IResolvable; 
  public get advancedTemplates() {
    return this.getBooleanAttribute('advanced_templates');
  }
  public set advancedTemplates(value: boolean | cdktf.IResolvable) {
    this._advancedTemplates = value;
  }
  public resetAdvancedTemplates() {
    this._advancedTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedTemplatesInput() {
    return this._advancedTemplates;
  }

  // body - computed: false, optional: true, required: false
  private _body = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // dynamic_metadata_values - computed: false, optional: true, required: false
  private _dynamicMetadataValues = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValuesList(this, "dynamic_metadata_values", false);
  public get dynamicMetadataValues() {
    return this._dynamicMetadataValues;
  }
  public putDynamicMetadataValues(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationDynamicMetadataValues[] | cdktf.IResolvable) {
    this._dynamicMetadataValues.internalValue = value;
  }
  public resetDynamicMetadataValues() {
    this._dynamicMetadataValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMetadataValuesInput() {
    return this._dynamicMetadataValues.internalValue;
  }

  // escape_characters - computed: false, optional: true, required: false
  private _escapeCharacters?: boolean | cdktf.IResolvable; 
  public get escapeCharacters() {
    return this.getBooleanAttribute('escape_characters');
  }
  public set escapeCharacters(value: boolean | cdktf.IResolvable) {
    this._escapeCharacters = value;
  }
  public resetEscapeCharacters() {
    this._escapeCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escapeCharactersInput() {
    return this._escapeCharacters;
  }

  // extractors - computed: false, optional: true, required: false
  private _extractors = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractorsOutputReference(this, "extractors");
  public get extractors() {
    return this._extractors;
  }
  public putExtractors(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationExtractors) {
    this._extractors.internalValue = value;
  }
  public resetExtractors() {
    this._extractors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorsInput() {
    return this._extractors.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // headers_to_append - computed: false, optional: true, required: false
  private _headersToAppend = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppendList(this, "headers_to_append", false);
  public get headersToAppend() {
    return this._headersToAppend;
  }
  public putHeadersToAppend(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationHeadersToAppend[] | cdktf.IResolvable) {
    this._headersToAppend.internalValue = value;
  }
  public resetHeadersToAppend() {
    this._headersToAppend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToAppendInput() {
    return this._headersToAppend.internalValue;
  }

  // headers_to_remove - computed: false, optional: true, required: false
  private _headersToRemove?: string[]; 
  public get headersToRemove() {
    return this.getListAttribute('headers_to_remove');
  }
  public set headersToRemove(value: string[]) {
    this._headersToRemove = value;
  }
  public resetHeadersToRemove() {
    this._headersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersToRemoveInput() {
    return this._headersToRemove;
  }

  // ignore_error_on_parse - computed: false, optional: true, required: false
  private _ignoreErrorOnParse?: boolean | cdktf.IResolvable; 
  public get ignoreErrorOnParse() {
    return this.getBooleanAttribute('ignore_error_on_parse');
  }
  public set ignoreErrorOnParse(value: boolean | cdktf.IResolvable) {
    this._ignoreErrorOnParse = value;
  }
  public resetIgnoreErrorOnParse() {
    this._ignoreErrorOnParse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorOnParseInput() {
    return this._ignoreErrorOnParse;
  }

  // merge_extractors_to_body - computed: false, optional: true, required: false
  private _mergeExtractorsToBody?: { [key: string]: string }; 
  public get mergeExtractorsToBody() {
    return this.getStringMapAttribute('merge_extractors_to_body');
  }
  public set mergeExtractorsToBody(value: { [key: string]: string }) {
    this._mergeExtractorsToBody = value;
  }
  public resetMergeExtractorsToBody() {
    this._mergeExtractorsToBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeExtractorsToBodyInput() {
    return this._mergeExtractorsToBody;
  }

  // merge_json_keys - computed: false, optional: true, required: false
  private _mergeJsonKeys = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeysOutputReference(this, "merge_json_keys");
  public get mergeJsonKeys() {
    return this._mergeJsonKeys;
  }
  public putMergeJsonKeys(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationMergeJsonKeys) {
    this._mergeJsonKeys.internalValue = value;
  }
  public resetMergeJsonKeys() {
    this._mergeJsonKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeJsonKeysInput() {
    return this._mergeJsonKeys.internalValue;
  }

  // parse_body_behavior - computed: false, optional: true, required: false
  private _parseBodyBehavior?: string; 
  public get parseBodyBehavior() {
    return this.getStringAttribute('parse_body_behavior');
  }
  public set parseBodyBehavior(value: string) {
    this._parseBodyBehavior = value;
  }
  public resetParseBodyBehavior() {
    this._parseBodyBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseBodyBehaviorInput() {
    return this._parseBodyBehavior;
  }

  // passthrough - computed: false, optional: true, required: false
  private _passthrough?: { [key: string]: string }; 
  public get passthrough() {
    return this.getStringMapAttribute('passthrough');
  }
  public set passthrough(value: { [key: string]: string }) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#function_name DataK8SGatewaySoloIoVirtualServiceV1Manifest#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#parameters DataK8SGatewaySoloIoVirtualServiceV1Manifest#parameters}
  */
  readonly parameters?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#response_transformation DataK8SGatewaySoloIoVirtualServiceV1Manifest#response_transformation}
  */
  readonly responseTransformation?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    parameters: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParametersToTerraform(struct!.parameters),
    response_transformation: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationToTerraform(struct!.responseTransformation),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters",
    },
    response_transformation: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationToHclTerraform(struct!.responseTransformation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._responseTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTransformation = this._responseTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._parameters.internalValue = undefined;
      this._responseTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._parameters.internalValue = value.parameters;
      this._responseTransformation.internalValue = value.responseTransformation;
    }
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // response_transformation - computed: false, optional: true, required: false
  private _responseTransformation = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformationOutputReference(this, "response_transformation");
  public get responseTransformation() {
    return this._responseTransformation;
  }
  public putResponseTransformation(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestResponseTransformation) {
    this._responseTransformation.internalValue = value;
  }
  public resetResponseTransformation() {
    this._responseTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTransformationInput() {
    return this._responseTransformation.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#aws DataK8SGatewaySoloIoVirtualServiceV1Manifest#aws}
  */
  readonly aws?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#azure DataK8SGatewaySoloIoVirtualServiceV1Manifest#azure}
  */
  readonly azure?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#grpc DataK8SGatewaySoloIoVirtualServiceV1Manifest#grpc}
  */
  readonly grpc?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#rest DataK8SGatewaySoloIoVirtualServiceV1Manifest#rest}
  */
  readonly rest?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAwsToTerraform(struct!.aws),
    azure: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzureToTerraform(struct!.azure),
    grpc: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcToTerraform(struct!.grpc),
    rest: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestToTerraform(struct!.rest),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws",
    },
    azure: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure",
    },
    grpc: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc",
    },
    rest: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestToHclTerraform(struct!.rest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._rest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rest = this._rest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._rest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._grpc.internalValue = value.grpc;
      this._rest.internalValue = value.rest;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // rest - computed: false, optional: true, required: false
  private _rest = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRestOutputReference(this, "rest");
  public get rest() {
    return this._rest;
  }
  public putRest(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecRest) {
    this._rest.internalValue = value;
  }
  public resetRest() {
    this._rest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInput() {
    return this._rest.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#name DataK8SGatewaySoloIoVirtualServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#namespace DataK8SGatewaySoloIoVirtualServiceV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRefToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRefToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#port DataK8SGatewaySoloIoVirtualServiceV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#ref DataK8SGatewaySoloIoVirtualServiceV1Manifest#ref}
  */
  readonly ref?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    ref: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRefToTerraform(struct!.ref),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._ref.internalValue = value.ref;
    }
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

  // ref - computed: false, optional: true, required: false
  private _ref = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeRef) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#values DataK8SGatewaySoloIoVirtualServiceV1Manifest#values}
  */
  readonly values?: { [key: string]: string };
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubsetToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubsetToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#name DataK8SGatewaySoloIoVirtualServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#namespace DataK8SGatewaySoloIoVirtualServiceV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstreamToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstreamToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#consul DataK8SGatewaySoloIoVirtualServiceV1Manifest#consul}
  */
  readonly consul?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#destination_spec DataK8SGatewaySoloIoVirtualServiceV1Manifest#destination_spec}
  */
  readonly destinationSpec?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#kube DataK8SGatewaySoloIoVirtualServiceV1Manifest#kube}
  */
  readonly kube?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#subset DataK8SGatewaySoloIoVirtualServiceV1Manifest#subset}
  */
  readonly subset?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#upstream DataK8SGatewaySoloIoVirtualServiceV1Manifest#upstream}
  */
  readonly upstream?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consul: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsulToTerraform(struct!.consul),
    destination_spec: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecToTerraform(struct!.destinationSpec),
    kube: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeToTerraform(struct!.kube),
    subset: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubsetToTerraform(struct!.subset),
    upstream: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstreamToTerraform(struct!.upstream),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consul: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsulToHclTerraform(struct!.consul),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul",
    },
    destination_spec: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecToHclTerraform(struct!.destinationSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec",
    },
    kube: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeToHclTerraform(struct!.kube),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube",
    },
    subset: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubsetToHclTerraform(struct!.subset),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset",
    },
    upstream: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstreamToHclTerraform(struct!.upstream),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consul?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consul = this._consul?.internalValue;
    }
    if (this._destinationSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSpec = this._destinationSpec?.internalValue;
    }
    if (this._kube?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kube = this._kube?.internalValue;
    }
    if (this._subset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subset = this._subset?.internalValue;
    }
    if (this._upstream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consul.internalValue = undefined;
      this._destinationSpec.internalValue = undefined;
      this._kube.internalValue = undefined;
      this._subset.internalValue = undefined;
      this._upstream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consul.internalValue = value.consul;
      this._destinationSpec.internalValue = value.destinationSpec;
      this._kube.internalValue = value.kube;
      this._subset.internalValue = value.subset;
      this._upstream.internalValue = value.upstream;
    }
  }

  // consul - computed: false, optional: true, required: false
  private _consul = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsulOutputReference(this, "consul");
  public get consul() {
    return this._consul;
  }
  public putConsul(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleConsul) {
    this._consul.internalValue = value;
  }
  public resetConsul() {
    this._consul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulInput() {
    return this._consul.internalValue;
  }

  // destination_spec - computed: false, optional: true, required: false
  private _destinationSpec = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpecOutputReference(this, "destination_spec");
  public get destinationSpec() {
    return this._destinationSpec;
  }
  public putDestinationSpec(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleDestinationSpec) {
    this._destinationSpec.internalValue = value;
  }
  public resetDestinationSpec() {
    this._destinationSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSpecInput() {
    return this._destinationSpec.internalValue;
  }

  // kube - computed: false, optional: true, required: false
  private _kube = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKubeOutputReference(this, "kube");
  public get kube() {
    return this._kube;
  }
  public putKube(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleKube) {
    this._kube.internalValue = value;
  }
  public resetKube() {
    this._kube.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeInput() {
    return this._kube.internalValue;
  }

  // subset - computed: false, optional: true, required: false
  private _subset = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubsetOutputReference(this, "subset");
  public get subset() {
    return this._subset;
  }
  public putSubset(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleSubset) {
    this._subset.internalValue = value;
  }
  public resetSubset() {
    this._subset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetInput() {
    return this._subset.internalValue;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstreamOutputReference(this, "upstream");
  public get upstream() {
    return this._upstream;
  }
  public putUpstream(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleUpstream) {
    this._upstream.internalValue = value;
  }
  public resetUpstream() {
    this._upstream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#name DataK8SGatewaySoloIoVirtualServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#namespace DataK8SGatewaySoloIoVirtualServiceV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroupToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroupToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#cluster_header DataK8SGatewaySoloIoVirtualServiceV1Manifest#cluster_header}
  */
  readonly clusterHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#dynamic_forward_proxy DataK8SGatewaySoloIoVirtualServiceV1Manifest#dynamic_forward_proxy}
  */
  readonly dynamicForwardProxy?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#multi DataK8SGatewaySoloIoVirtualServiceV1Manifest#multi}
  */
  readonly multi?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#single DataK8SGatewaySoloIoVirtualServiceV1Manifest#single}
  */
  readonly single?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#upstream_group DataK8SGatewaySoloIoVirtualServiceV1Manifest#upstream_group}
  */
  readonly upstreamGroup?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_header: cdktf.stringToTerraform(struct!.clusterHeader),
    dynamic_forward_proxy: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxyToTerraform(struct!.dynamicForwardProxy),
    multi: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiToTerraform(struct!.multi),
    single: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleToTerraform(struct!.single),
    upstream_group: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroupToTerraform(struct!.upstreamGroup),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_header: {
      value: cdktf.stringToHclTerraform(struct!.clusterHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_forward_proxy: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxyToHclTerraform(struct!.dynamicForwardProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxy",
    },
    multi: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiToHclTerraform(struct!.multi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti",
    },
    single: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleToHclTerraform(struct!.single),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle",
    },
    upstream_group: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroupToHclTerraform(struct!.upstreamGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterHeader = this._clusterHeader;
    }
    if (this._dynamicForwardProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicForwardProxy = this._dynamicForwardProxy?.internalValue;
    }
    if (this._multi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multi = this._multi?.internalValue;
    }
    if (this._single?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.single = this._single?.internalValue;
    }
    if (this._upstreamGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamGroup = this._upstreamGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterHeader = undefined;
      this._dynamicForwardProxy.internalValue = undefined;
      this._multi.internalValue = undefined;
      this._single.internalValue = undefined;
      this._upstreamGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterHeader = value.clusterHeader;
      this._dynamicForwardProxy.internalValue = value.dynamicForwardProxy;
      this._multi.internalValue = value.multi;
      this._single.internalValue = value.single;
      this._upstreamGroup.internalValue = value.upstreamGroup;
    }
  }

  // cluster_header - computed: false, optional: true, required: false
  private _clusterHeader?: string; 
  public get clusterHeader() {
    return this.getStringAttribute('cluster_header');
  }
  public set clusterHeader(value: string) {
    this._clusterHeader = value;
  }
  public resetClusterHeader() {
    this._clusterHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterHeaderInput() {
    return this._clusterHeader;
  }

  // dynamic_forward_proxy - computed: false, optional: true, required: false
  private _dynamicForwardProxy = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxyOutputReference(this, "dynamic_forward_proxy");
  public get dynamicForwardProxy() {
    return this._dynamicForwardProxy;
  }
  public putDynamicForwardProxy(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionDynamicForwardProxy) {
    this._dynamicForwardProxy.internalValue = value;
  }
  public resetDynamicForwardProxy() {
    this._dynamicForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicForwardProxyInput() {
    return this._dynamicForwardProxy.internalValue;
  }

  // multi - computed: false, optional: true, required: false
  private _multi = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMultiOutputReference(this, "multi");
  public get multi() {
    return this._multi;
  }
  public putMulti(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionMulti) {
    this._multi.internalValue = value;
  }
  public resetMulti() {
    this._multi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi.internalValue;
  }

  // single - computed: false, optional: true, required: false
  private _single = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingleOutputReference(this, "single");
  public get single() {
    return this._single;
  }
  public putSingle(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionSingle) {
    this._single.internalValue = value;
  }
  public resetSingle() {
    this._single.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInput() {
    return this._single.internalValue;
  }

  // upstream_group - computed: false, optional: true, required: false
  private _upstreamGroup = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroupOutputReference(this, "upstream_group");
  public get upstreamGroup() {
    return this._upstreamGroup;
  }
  public putUpstreamGroup(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionUpstreamGroup) {
    this._upstreamGroup.internalValue = value;
  }
  public resetUpstreamGroup() {
    this._upstreamGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamGroupInput() {
    return this._upstreamGroup.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#delegate_action DataK8SGatewaySoloIoVirtualServiceV1Manifest#delegate_action}
  */
  readonly delegateAction?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#direct_response_action DataK8SGatewaySoloIoVirtualServiceV1Manifest#direct_response_action}
  */
  readonly directResponseAction?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#graphql_api_ref DataK8SGatewaySoloIoVirtualServiceV1Manifest#graphql_api_ref}
  */
  readonly graphqlApiRef?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#inheritable_matchers DataK8SGatewaySoloIoVirtualServiceV1Manifest#inheritable_matchers}
  */
  readonly inheritableMatchers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#inheritable_path_matchers DataK8SGatewaySoloIoVirtualServiceV1Manifest#inheritable_path_matchers}
  */
  readonly inheritablePathMatchers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#matchers DataK8SGatewaySoloIoVirtualServiceV1Manifest#matchers}
  */
  readonly matchers?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#name DataK8SGatewaySoloIoVirtualServiceV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#options DataK8SGatewaySoloIoVirtualServiceV1Manifest#options}
  */
  readonly options?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#options_config_refs DataK8SGatewaySoloIoVirtualServiceV1Manifest#options_config_refs}
  */
  readonly optionsConfigRefs?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#redirect_action DataK8SGatewaySoloIoVirtualServiceV1Manifest#redirect_action}
  */
  readonly redirectAction?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#route_action DataK8SGatewaySoloIoVirtualServiceV1Manifest#route_action}
  */
  readonly routeAction?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate_action: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateActionToTerraform(struct!.delegateAction),
    direct_response_action: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseActionToTerraform(struct!.directResponseAction),
    graphql_api_ref: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRefToTerraform(struct!.graphqlApiRef),
    inheritable_matchers: cdktf.booleanToTerraform(struct!.inheritableMatchers),
    inheritable_path_matchers: cdktf.booleanToTerraform(struct!.inheritablePathMatchers),
    matchers: cdktf.listMapper(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchersToTerraform, false)(struct!.matchers),
    name: cdktf.stringToTerraform(struct!.name),
    options: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsToTerraform(struct!.options),
    options_config_refs: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefsToTerraform(struct!.optionsConfigRefs),
    redirect_action: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectActionToTerraform(struct!.redirectAction),
    route_action: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionToTerraform(struct!.routeAction),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate_action: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateActionToHclTerraform(struct!.delegateAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateAction",
    },
    direct_response_action: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseActionToHclTerraform(struct!.directResponseAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseAction",
    },
    graphql_api_ref: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRefToHclTerraform(struct!.graphqlApiRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRef",
    },
    inheritable_matchers: {
      value: cdktf.booleanToHclTerraform(struct!.inheritableMatchers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inheritable_path_matchers: {
      value: cdktf.booleanToHclTerraform(struct!.inheritablePathMatchers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    matchers: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchersToHclTerraform, false)(struct!.matchers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptions",
    },
    options_config_refs: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefsToHclTerraform(struct!.optionsConfigRefs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefs",
    },
    redirect_action: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectActionToHclTerraform(struct!.redirectAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectAction",
    },
    route_action: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionToHclTerraform(struct!.routeAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegateAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegateAction = this._delegateAction?.internalValue;
    }
    if (this._directResponseAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directResponseAction = this._directResponseAction?.internalValue;
    }
    if (this._graphqlApiRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlApiRef = this._graphqlApiRef?.internalValue;
    }
    if (this._inheritableMatchers !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritableMatchers = this._inheritableMatchers;
    }
    if (this._inheritablePathMatchers !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritablePathMatchers = this._inheritablePathMatchers;
    }
    if (this._matchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchers = this._matchers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._optionsConfigRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsConfigRefs = this._optionsConfigRefs?.internalValue;
    }
    if (this._redirectAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAction = this._redirectAction?.internalValue;
    }
    if (this._routeAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAction = this._routeAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegateAction.internalValue = undefined;
      this._directResponseAction.internalValue = undefined;
      this._graphqlApiRef.internalValue = undefined;
      this._inheritableMatchers = undefined;
      this._inheritablePathMatchers = undefined;
      this._matchers.internalValue = undefined;
      this._name = undefined;
      this._options.internalValue = undefined;
      this._optionsConfigRefs.internalValue = undefined;
      this._redirectAction.internalValue = undefined;
      this._routeAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegateAction.internalValue = value.delegateAction;
      this._directResponseAction.internalValue = value.directResponseAction;
      this._graphqlApiRef.internalValue = value.graphqlApiRef;
      this._inheritableMatchers = value.inheritableMatchers;
      this._inheritablePathMatchers = value.inheritablePathMatchers;
      this._matchers.internalValue = value.matchers;
      this._name = value.name;
      this._options.internalValue = value.options;
      this._optionsConfigRefs.internalValue = value.optionsConfigRefs;
      this._redirectAction.internalValue = value.redirectAction;
      this._routeAction.internalValue = value.routeAction;
    }
  }

  // delegate_action - computed: false, optional: true, required: false
  private _delegateAction = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateActionOutputReference(this, "delegate_action");
  public get delegateAction() {
    return this._delegateAction;
  }
  public putDelegateAction(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDelegateAction) {
    this._delegateAction.internalValue = value;
  }
  public resetDelegateAction() {
    this._delegateAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateActionInput() {
    return this._delegateAction.internalValue;
  }

  // direct_response_action - computed: false, optional: true, required: false
  private _directResponseAction = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseActionOutputReference(this, "direct_response_action");
  public get directResponseAction() {
    return this._directResponseAction;
  }
  public putDirectResponseAction(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesDirectResponseAction) {
    this._directResponseAction.internalValue = value;
  }
  public resetDirectResponseAction() {
    this._directResponseAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directResponseActionInput() {
    return this._directResponseAction.internalValue;
  }

  // graphql_api_ref - computed: false, optional: true, required: false
  private _graphqlApiRef = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRefOutputReference(this, "graphql_api_ref");
  public get graphqlApiRef() {
    return this._graphqlApiRef;
  }
  public putGraphqlApiRef(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesGraphqlApiRef) {
    this._graphqlApiRef.internalValue = value;
  }
  public resetGraphqlApiRef() {
    this._graphqlApiRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlApiRefInput() {
    return this._graphqlApiRef.internalValue;
  }

  // inheritable_matchers - computed: false, optional: true, required: false
  private _inheritableMatchers?: boolean | cdktf.IResolvable; 
  public get inheritableMatchers() {
    return this.getBooleanAttribute('inheritable_matchers');
  }
  public set inheritableMatchers(value: boolean | cdktf.IResolvable) {
    this._inheritableMatchers = value;
  }
  public resetInheritableMatchers() {
    this._inheritableMatchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritableMatchersInput() {
    return this._inheritableMatchers;
  }

  // inheritable_path_matchers - computed: false, optional: true, required: false
  private _inheritablePathMatchers?: boolean | cdktf.IResolvable; 
  public get inheritablePathMatchers() {
    return this.getBooleanAttribute('inheritable_path_matchers');
  }
  public set inheritablePathMatchers(value: boolean | cdktf.IResolvable) {
    this._inheritablePathMatchers = value;
  }
  public resetInheritablePathMatchers() {
    this._inheritablePathMatchers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritablePathMatchersInput() {
    return this._inheritablePathMatchers;
  }

  // matchers - computed: false, optional: true, required: false
  private _matchers = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchersList(this, "matchers", false);
  public get matchers() {
    return this._matchers;
  }
  public putMatchers(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesMatchers[] | cdktf.IResolvable) {
    this._matchers.internalValue = value;
  }
  public resetMatchers() {
    this._matchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchersInput() {
    return this._matchers.internalValue;
  }

  // name - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // options_config_refs - computed: false, optional: true, required: false
  private _optionsConfigRefs = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefsOutputReference(this, "options_config_refs");
  public get optionsConfigRefs() {
    return this._optionsConfigRefs;
  }
  public putOptionsConfigRefs(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOptionsConfigRefs) {
    this._optionsConfigRefs.internalValue = value;
  }
  public resetOptionsConfigRefs() {
    this._optionsConfigRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsConfigRefsInput() {
    return this._optionsConfigRefs.internalValue;
  }

  // redirect_action - computed: false, optional: true, required: false
  private _redirectAction = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectActionOutputReference(this, "redirect_action");
  public get redirectAction() {
    return this._redirectAction;
  }
  public putRedirectAction(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRedirectAction) {
    this._redirectAction.internalValue = value;
  }
  public resetRedirectAction() {
    this._redirectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionInput() {
    return this._redirectAction.internalValue;
  }

  // route_action - computed: false, optional: true, required: false
  private _routeAction = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteActionOutputReference(this, "route_action");
  public get routeAction() {
    return this._routeAction;
  }
  public putRouteAction(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesRouteAction) {
    this._routeAction.internalValue = value;
  }
  public resetRouteAction() {
    this._routeAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeActionInput() {
    return this._routeAction.internalValue;
  }
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOutputReference {
    return new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#domains DataK8SGatewaySoloIoVirtualServiceV1Manifest#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#options DataK8SGatewaySoloIoVirtualServiceV1Manifest#options}
  */
  readonly options?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#options_config_refs DataK8SGatewaySoloIoVirtualServiceV1Manifest#options_config_refs}
  */
  readonly optionsConfigRefs?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#routes DataK8SGatewaySoloIoVirtualServiceV1Manifest#routes}
  */
  readonly routes?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes[] | cdktf.IResolvable;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    options: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsToTerraform(struct!.options),
    options_config_refs: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefsToTerraform(struct!.optionsConfigRefs),
    routes: cdktf.listMapper(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesToTerraform, false)(struct!.routes),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptions",
    },
    options_config_refs: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefsToHclTerraform(struct!.optionsConfigRefs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefs",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._optionsConfigRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionsConfigRefs = this._optionsConfigRefs?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domains = undefined;
      this._options.internalValue = undefined;
      this._optionsConfigRefs.internalValue = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domains = value.domains;
      this._options.internalValue = value.options;
      this._optionsConfigRefs.internalValue = value.optionsConfigRefs;
      this._routes.internalValue = value.routes;
    }
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // options_config_refs - computed: false, optional: true, required: false
  private _optionsConfigRefs = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefsOutputReference(this, "options_config_refs");
  public get optionsConfigRefs() {
    return this._optionsConfigRefs;
  }
  public putOptionsConfigRefs(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOptionsConfigRefs) {
    this._optionsConfigRefs.internalValue = value;
  }
  public resetOptionsConfigRefs() {
    this._optionsConfigRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsConfigRefsInput() {
    return this._optionsConfigRefs.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#display_name DataK8SGatewaySoloIoVirtualServiceV1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#namespaced_statuses DataK8SGatewaySoloIoVirtualServiceV1Manifest#namespaced_statuses}
  */
  readonly namespacedStatuses?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatuses;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#ssl_config DataK8SGatewaySoloIoVirtualServiceV1Manifest#ssl_config}
  */
  readonly sslConfig?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/gateway_solo_io_virtual_service_v1_manifest#virtual_host DataK8SGatewaySoloIoVirtualServiceV1Manifest#virtual_host}
  */
  readonly virtualHost?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost;
}

export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecToTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    namespaced_statuses: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatusesToTerraform(struct!.namespacedStatuses),
    ssl_config: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfigToTerraform(struct!.sslConfig),
    virtual_host: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostToTerraform(struct!.virtualHost),
  }
}


export function dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecToHclTerraform(struct?: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaced_statuses: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatusesToHclTerraform(struct!.namespacedStatuses),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatuses",
    },
    ssl_config: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfigToHclTerraform(struct!.sslConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfig",
    },
    virtual_host: {
      value: dataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostToHclTerraform(struct!.virtualHost),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._namespacedStatuses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedStatuses = this._namespacedStatuses?.internalValue;
    }
    if (this._sslConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslConfig = this._sslConfig?.internalValue;
    }
    if (this._virtualHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHost = this._virtualHost?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._namespacedStatuses.internalValue = undefined;
      this._sslConfig.internalValue = undefined;
      this._virtualHost.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._namespacedStatuses.internalValue = value.namespacedStatuses;
      this._sslConfig.internalValue = value.sslConfig;
      this._virtualHost.internalValue = value.virtualHost;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // namespaced_statuses - computed: false, optional: true, required: false
  private _namespacedStatuses = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatusesOutputReference(this, "namespaced_statuses");
  public get namespacedStatuses() {
    return this._namespacedStatuses;
  }
  public putNamespacedStatuses(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecNamespacedStatuses) {
    this._namespacedStatuses.internalValue = value;
  }
  public resetNamespacedStatuses() {
    this._namespacedStatuses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedStatusesInput() {
    return this._namespacedStatuses.internalValue;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }

  // virtual_host - computed: false, optional: true, required: false
  private _virtualHost = new DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHostOutputReference(this, "virtual_host");
  public get virtualHost() {
    return this._virtualHost;
  }
  public putVirtualHost(value: DataK8SGatewaySoloIoVirtualServiceV1ManifestSpecVirtualHost) {
    this._virtualHost.internalValue = value;
  }
  public resetVirtualHost() {
    this._virtualHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost.internalValue;
  }
}
