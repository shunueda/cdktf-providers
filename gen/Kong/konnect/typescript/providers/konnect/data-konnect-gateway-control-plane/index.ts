// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKonnectGatewayControlPlaneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filters a collection of control-planes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#filter DataKonnectGatewayControlPlane#filter}
  */
  readonly filter?: DataKonnectGatewayControlPlaneFilter;
  /**
  * Filter control planes in the response by associated labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#filter_labels DataKonnectGatewayControlPlane#filter_labels}
  */
  readonly filterLabels?: string;
  /**
  * Sorts a collection of control-planes. Supported sort attributes are:
  *   - created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#sort DataKonnectGatewayControlPlane#sort}
  */
  readonly sort?: string;
}
export interface DataKonnectGatewayControlPlaneConfigProxyUrls {
}

export function dataKonnectGatewayControlPlaneConfigProxyUrlsToTerraform(struct?: DataKonnectGatewayControlPlaneConfigProxyUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKonnectGatewayControlPlaneConfigProxyUrlsToHclTerraform(struct?: DataKonnectGatewayControlPlaneConfigProxyUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKonnectGatewayControlPlaneConfigProxyUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKonnectGatewayControlPlaneConfigProxyUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectGatewayControlPlaneConfigProxyUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataKonnectGatewayControlPlaneConfigProxyUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataKonnectGatewayControlPlaneConfigProxyUrlsOutputReference {
    return new DataKonnectGatewayControlPlaneConfigProxyUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKonnectGatewayControlPlaneConfigA {
}

export function dataKonnectGatewayControlPlaneConfigAToTerraform(struct?: DataKonnectGatewayControlPlaneConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKonnectGatewayControlPlaneConfigAToHclTerraform(struct?: DataKonnectGatewayControlPlaneConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKonnectGatewayControlPlaneConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectGatewayControlPlaneConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectGatewayControlPlaneConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // cloud_gateway - computed: true, optional: false, required: false
  public get cloudGateway() {
    return this.getBooleanAttribute('cloud_gateway');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // control_plane_endpoint - computed: true, optional: false, required: false
  public get controlPlaneEndpoint() {
    return this.getStringAttribute('control_plane_endpoint');
  }

  // proxy_urls - computed: true, optional: false, required: false
  private _proxyUrls = new DataKonnectGatewayControlPlaneConfigProxyUrlsList(this, "proxy_urls", true);
  public get proxyUrls() {
    return this._proxyUrls;
  }

  // telemetry_endpoint - computed: true, optional: false, required: false
  public get telemetryEndpoint() {
    return this.getStringAttribute('telemetry_endpoint');
  }
}
export interface DataKonnectGatewayControlPlaneFilterClusterType {
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#eq DataKonnectGatewayControlPlane#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#neq DataKonnectGatewayControlPlane#neq}
  */
  readonly neq?: string;
}

export function dataKonnectGatewayControlPlaneFilterClusterTypeToTerraform(struct?: DataKonnectGatewayControlPlaneFilterClusterType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
  }
}


export function dataKonnectGatewayControlPlaneFilterClusterTypeToHclTerraform(struct?: DataKonnectGatewayControlPlaneFilterClusterType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectGatewayControlPlaneFilterClusterTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectGatewayControlPlaneFilterClusterType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectGatewayControlPlaneFilterClusterType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._neq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._neq = value.neq;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }
}
export interface DataKonnectGatewayControlPlaneFilterId {
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#eq DataKonnectGatewayControlPlane#eq}
  */
  readonly eq?: string;
  /**
  * The field matches any of the provided values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#oeq DataKonnectGatewayControlPlane#oeq}
  */
  readonly oeq?: string;
}

export function dataKonnectGatewayControlPlaneFilterIdToTerraform(struct?: DataKonnectGatewayControlPlaneFilterId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    oeq: cdktf.stringToTerraform(struct!.oeq),
  }
}


export function dataKonnectGatewayControlPlaneFilterIdToHclTerraform(struct?: DataKonnectGatewayControlPlaneFilterId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oeq: {
      value: cdktf.stringToHclTerraform(struct!.oeq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectGatewayControlPlaneFilterIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectGatewayControlPlaneFilterId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._oeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.oeq = this._oeq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectGatewayControlPlaneFilterId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eq = undefined;
      this._oeq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eq = value.eq;
      this._oeq = value.oeq;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // oeq - computed: false, optional: true, required: false
  private _oeq?: string; 
  public get oeq() {
    return this.getStringAttribute('oeq');
  }
  public set oeq(value: string) {
    this._oeq = value;
  }
  public resetOeq() {
    this._oeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oeqInput() {
    return this._oeq;
  }
}
export interface DataKonnectGatewayControlPlaneFilterName {
  /**
  * The field contains the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#contains DataKonnectGatewayControlPlane#contains}
  */
  readonly contains?: string;
  /**
  * The field exactly matches the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#eq DataKonnectGatewayControlPlane#eq}
  */
  readonly eq?: string;
  /**
  * The field does not match the provided value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#neq DataKonnectGatewayControlPlane#neq}
  */
  readonly neq?: string;
}

export function dataKonnectGatewayControlPlaneFilterNameToTerraform(struct?: DataKonnectGatewayControlPlaneFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    eq: cdktf.stringToTerraform(struct!.eq),
    neq: cdktf.stringToTerraform(struct!.neq),
  }
}


export function dataKonnectGatewayControlPlaneFilterNameToHclTerraform(struct?: DataKonnectGatewayControlPlaneFilterName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eq: {
      value: cdktf.stringToHclTerraform(struct!.eq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neq: {
      value: cdktf.stringToHclTerraform(struct!.neq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectGatewayControlPlaneFilterNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectGatewayControlPlaneFilterName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._eq !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq;
    }
    if (this._neq !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectGatewayControlPlaneFilterName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._eq = undefined;
      this._neq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._eq = value.eq;
      this._neq = value.neq;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // eq - computed: false, optional: true, required: false
  private _eq?: string; 
  public get eq() {
    return this.getStringAttribute('eq');
  }
  public set eq(value: string) {
    this._eq = value;
  }
  public resetEq() {
    this._eq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq;
  }

  // neq - computed: false, optional: true, required: false
  private _neq?: string; 
  public get neq() {
    return this.getStringAttribute('neq');
  }
  public set neq(value: string) {
    this._neq = value;
  }
  public resetNeq() {
    this._neq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq;
  }
}
export interface DataKonnectGatewayControlPlaneFilter {
  /**
  * Filter by a boolean value (true/false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#cloud_gateway DataKonnectGatewayControlPlane#cloud_gateway}
  */
  readonly cloudGateway?: boolean | cdktf.IResolvable;
  /**
  * Filter using **one** of the following operators: `eq`, `neq`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#cluster_type DataKonnectGatewayControlPlane#cluster_type}
  */
  readonly clusterType?: DataKonnectGatewayControlPlaneFilterClusterType;
  /**
  * Filter using **one** of the following operators: `eq`, `oeq`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#id DataKonnectGatewayControlPlane#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: DataKonnectGatewayControlPlaneFilterId;
  /**
  * Filter using **one** of the following operators: `eq`, `neq`, `contains`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#name DataKonnectGatewayControlPlane#name}
  */
  readonly name?: DataKonnectGatewayControlPlaneFilterName;
}

export function dataKonnectGatewayControlPlaneFilterToTerraform(struct?: DataKonnectGatewayControlPlaneFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_gateway: cdktf.booleanToTerraform(struct!.cloudGateway),
    cluster_type: dataKonnectGatewayControlPlaneFilterClusterTypeToTerraform(struct!.clusterType),
    id: dataKonnectGatewayControlPlaneFilterIdToTerraform(struct!.id),
    name: dataKonnectGatewayControlPlaneFilterNameToTerraform(struct!.name),
  }
}


export function dataKonnectGatewayControlPlaneFilterToHclTerraform(struct?: DataKonnectGatewayControlPlaneFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.cloudGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_type: {
      value: dataKonnectGatewayControlPlaneFilterClusterTypeToHclTerraform(struct!.clusterType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectGatewayControlPlaneFilterClusterType",
    },
    id: {
      value: dataKonnectGatewayControlPlaneFilterIdToHclTerraform(struct!.id),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectGatewayControlPlaneFilterId",
    },
    name: {
      value: dataKonnectGatewayControlPlaneFilterNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKonnectGatewayControlPlaneFilterName",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKonnectGatewayControlPlaneFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKonnectGatewayControlPlaneFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudGateway = this._cloudGateway;
    }
    if (this._clusterType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType?.internalValue;
    }
    if (this._id?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKonnectGatewayControlPlaneFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudGateway = undefined;
      this._clusterType.internalValue = undefined;
      this._id.internalValue = undefined;
      this._name.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudGateway = value.cloudGateway;
      this._clusterType.internalValue = value.clusterType;
      this._id.internalValue = value.id;
      this._name.internalValue = value.name;
    }
  }

  // cloud_gateway - computed: false, optional: true, required: false
  private _cloudGateway?: boolean | cdktf.IResolvable; 
  public get cloudGateway() {
    return this.getBooleanAttribute('cloud_gateway');
  }
  public set cloudGateway(value: boolean | cdktf.IResolvable) {
    this._cloudGateway = value;
  }
  public resetCloudGateway() {
    this._cloudGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGatewayInput() {
    return this._cloudGateway;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType = new DataKonnectGatewayControlPlaneFilterClusterTypeOutputReference(this, "cluster_type");
  public get clusterType() {
    return this._clusterType;
  }
  public putClusterType(value: DataKonnectGatewayControlPlaneFilterClusterType) {
    this._clusterType.internalValue = value;
  }
  public resetClusterType() {
    this._clusterType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType.internalValue;
  }

  // id - computed: false, optional: true, required: false
  private _id = new DataKonnectGatewayControlPlaneFilterIdOutputReference(this, "id");
  public get id() {
    return this._id;
  }
  public putId(value: DataKonnectGatewayControlPlaneFilterId) {
    this._id.internalValue = value;
  }
  public resetId() {
    this._id.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataKonnectGatewayControlPlaneFilterNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataKonnectGatewayControlPlaneFilterName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane konnect_gateway_control_plane}
*/
export class DataKonnectGatewayControlPlane extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_control_plane";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKonnectGatewayControlPlane resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKonnectGatewayControlPlane to import
  * @param importFromId The id of the existing DataKonnectGatewayControlPlane that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKonnectGatewayControlPlane to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_control_plane", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/gateway_control_plane konnect_gateway_control_plane} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKonnectGatewayControlPlaneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKonnectGatewayControlPlaneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_control_plane',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
    this._filterLabels = config.filterLabels;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new DataKonnectGatewayControlPlaneConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataKonnectGatewayControlPlaneFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataKonnectGatewayControlPlaneFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // filter_labels - computed: false, optional: true, required: false
  private _filterLabels?: string; 
  public get filterLabels() {
    return this.getStringAttribute('filter_labels');
  }
  public set filterLabels(value: string) {
    this._filterLabels = value;
  }
  public resetFilterLabels() {
    this._filterLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLabelsInput() {
    return this._filterLabels;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataKonnectGatewayControlPlaneFilterToTerraform(this._filter.internalValue),
      filter_labels: cdktf.stringToTerraform(this._filterLabels),
      sort: cdktf.stringToTerraform(this._sort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataKonnectGatewayControlPlaneFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKonnectGatewayControlPlaneFilter",
      },
      filter_labels: {
        value: cdktf.stringToHclTerraform(this._filterLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
