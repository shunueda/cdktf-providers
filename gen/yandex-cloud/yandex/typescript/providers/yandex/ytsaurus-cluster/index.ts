// https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YtsaurusClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the cluster to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#cluster_id YtsaurusCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Description of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#description YtsaurusCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the folder that the cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#folder_id YtsaurusCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * ID of the cluster to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#id YtsaurusCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster labels as `key:value` pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#labels YtsaurusCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the cluster.
  *  The name is unique within the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#name YtsaurusCluster#name}
  */
  readonly name?: string;
  /**
  * Network interfaces security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#security_group_ids YtsaurusCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Cluster specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#spec YtsaurusCluster#spec}
  */
  readonly spec?: YtsaurusClusterSpec;
  /**
  * ID of the subnet where the cluster resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#subnet_id YtsaurusCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#timeouts YtsaurusCluster#timeouts}
  */
  readonly timeouts?: YtsaurusClusterTimeouts;
  /**
  * ID of the availability zone where the cluster resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#zone_id YtsaurusCluster#zone_id}
  */
  readonly zoneId: string;
}
export interface YtsaurusClusterEndpoints {
}

export function ytsaurusClusterEndpointsToTerraform(struct?: YtsaurusClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ytsaurusClusterEndpointsToHclTerraform(struct?: YtsaurusClusterEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class YtsaurusClusterEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_http_proxy_balancer - computed: true, optional: false, required: false
  public get externalHttpProxyBalancer() {
    return this.getStringAttribute('external_http_proxy_balancer');
  }

  // internal_http_proxy_alias - computed: true, optional: false, required: false
  public get internalHttpProxyAlias() {
    return this.getStringAttribute('internal_http_proxy_alias');
  }

  // internal_rpc_proxy_alias - computed: true, optional: false, required: false
  public get internalRpcProxyAlias() {
    return this.getStringAttribute('internal_rpc_proxy_alias');
  }

  // ui - computed: true, optional: false, required: false
  public get ui() {
    return this.getStringAttribute('ui');
  }
}
export interface YtsaurusClusterSpecComputeDisks {
  /**
  * ID of the availability zone where the cluster resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#locations YtsaurusCluster#locations}
  */
  readonly locations?: string[];
  /**
  * ID of the folder that the cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#size_gb YtsaurusCluster#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * ID of the cluster. Generated at creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#type YtsaurusCluster#type}
  */
  readonly type?: string;
}

export function ytsaurusClusterSpecComputeDisksToTerraform(struct?: YtsaurusClusterSpecComputeDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ytsaurusClusterSpecComputeDisksToHclTerraform(struct?: YtsaurusClusterSpecComputeDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecComputeDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YtsaurusClusterSpecComputeDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecComputeDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locations = undefined;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locations = value.locations;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // locations - computed: true, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
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

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class YtsaurusClusterSpecComputeDisksList extends cdktf.ComplexList {
  public internalValue? : YtsaurusClusterSpecComputeDisks[] | cdktf.IResolvable

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
  public get(index: number): YtsaurusClusterSpecComputeDisksOutputReference {
    return new YtsaurusClusterSpecComputeDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YtsaurusClusterSpecComputeScalePolicyAuto {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#max_size YtsaurusCluster#max_size}
  */
  readonly maxSize?: number;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#min_size YtsaurusCluster#min_size}
  */
  readonly minSize?: number;
}

export function ytsaurusClusterSpecComputeScalePolicyAutoToTerraform(struct?: YtsaurusClusterSpecComputeScalePolicyAuto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
  }
}


export function ytsaurusClusterSpecComputeScalePolicyAutoToHclTerraform(struct?: YtsaurusClusterSpecComputeScalePolicyAuto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecComputeScalePolicyAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecComputeScalePolicyAuto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecComputeScalePolicyAuto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
    }
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }
}
export interface YtsaurusClusterSpecComputeScalePolicyFixed {
  /**
  * ID of the cluster. Generated at creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#size YtsaurusCluster#size}
  */
  readonly size?: number;
}

export function ytsaurusClusterSpecComputeScalePolicyFixedToTerraform(struct?: YtsaurusClusterSpecComputeScalePolicyFixed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function ytsaurusClusterSpecComputeScalePolicyFixedToHclTerraform(struct?: YtsaurusClusterSpecComputeScalePolicyFixed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecComputeScalePolicyFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecComputeScalePolicyFixed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecComputeScalePolicyFixed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface YtsaurusClusterSpecComputeScalePolicy {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#auto YtsaurusCluster#auto}
  */
  readonly auto?: YtsaurusClusterSpecComputeScalePolicyAuto;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#fixed YtsaurusCluster#fixed}
  */
  readonly fixed?: YtsaurusClusterSpecComputeScalePolicyFixed;
}

export function ytsaurusClusterSpecComputeScalePolicyToTerraform(struct?: YtsaurusClusterSpecComputeScalePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: ytsaurusClusterSpecComputeScalePolicyAutoToTerraform(struct!.auto),
    fixed: ytsaurusClusterSpecComputeScalePolicyFixedToTerraform(struct!.fixed),
  }
}


export function ytsaurusClusterSpecComputeScalePolicyToHclTerraform(struct?: YtsaurusClusterSpecComputeScalePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: ytsaurusClusterSpecComputeScalePolicyAutoToHclTerraform(struct!.auto),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecComputeScalePolicyAuto",
    },
    fixed: {
      value: ytsaurusClusterSpecComputeScalePolicyFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecComputeScalePolicyFixed",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecComputeScalePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecComputeScalePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto?.internalValue;
    }
    if (this._fixed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecComputeScalePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto.internalValue = undefined;
      this._fixed.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto.internalValue = value.auto;
      this._fixed.internalValue = value.fixed;
    }
  }

  // auto - computed: true, optional: true, required: false
  private _auto = new YtsaurusClusterSpecComputeScalePolicyAutoOutputReference(this, "auto");
  public get auto() {
    return this._auto;
  }
  public putAuto(value: YtsaurusClusterSpecComputeScalePolicyAuto) {
    this._auto.internalValue = value;
  }
  public resetAuto() {
    this._auto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto.internalValue;
  }

  // fixed - computed: true, optional: true, required: false
  private _fixed = new YtsaurusClusterSpecComputeScalePolicyFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: YtsaurusClusterSpecComputeScalePolicyFixed) {
    this._fixed.internalValue = value;
  }
  public resetFixed() {
    this._fixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed.internalValue;
  }
}
export interface YtsaurusClusterSpecCompute {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#disks YtsaurusCluster#disks}
  */
  readonly disks?: YtsaurusClusterSpecComputeDisks[] | cdktf.IResolvable;
  /**
  * Name for exec pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#name YtsaurusCluster#name}
  */
  readonly name?: string;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#preset YtsaurusCluster#preset}
  */
  readonly preset?: string;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#scale_policy YtsaurusCluster#scale_policy}
  */
  readonly scalePolicy?: YtsaurusClusterSpecComputeScalePolicy;
}

export function ytsaurusClusterSpecComputeToTerraform(struct?: YtsaurusClusterSpecCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disks: cdktf.listMapper(ytsaurusClusterSpecComputeDisksToTerraform, false)(struct!.disks),
    name: cdktf.stringToTerraform(struct!.name),
    preset: cdktf.stringToTerraform(struct!.preset),
    scale_policy: ytsaurusClusterSpecComputeScalePolicyToTerraform(struct!.scalePolicy),
  }
}


export function ytsaurusClusterSpecComputeToHclTerraform(struct?: YtsaurusClusterSpecCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disks: {
      value: cdktf.listMapperHcl(ytsaurusClusterSpecComputeDisksToHclTerraform, false)(struct!.disks),
      isBlock: true,
      type: "list",
      storageClassType: "YtsaurusClusterSpecComputeDisksList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset: {
      value: cdktf.stringToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_policy: {
      value: ytsaurusClusterSpecComputeScalePolicyToHclTerraform(struct!.scalePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecComputeScalePolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YtsaurusClusterSpecCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    if (this._scalePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalePolicy = this._scalePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disks.internalValue = undefined;
      this._name = undefined;
      this._preset = undefined;
      this._scalePolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disks.internalValue = value.disks;
      this._name = value.name;
      this._preset = value.preset;
      this._scalePolicy.internalValue = value.scalePolicy;
    }
  }

  // disks - computed: true, optional: true, required: false
  private _disks = new YtsaurusClusterSpecComputeDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: YtsaurusClusterSpecComputeDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
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

  // preset - computed: true, optional: true, required: false
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // scale_policy - computed: true, optional: true, required: false
  private _scalePolicy = new YtsaurusClusterSpecComputeScalePolicyOutputReference(this, "scale_policy");
  public get scalePolicy() {
    return this._scalePolicy;
  }
  public putScalePolicy(value: YtsaurusClusterSpecComputeScalePolicy) {
    this._scalePolicy.internalValue = value;
  }
  public resetScalePolicy() {
    this._scalePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalePolicyInput() {
    return this._scalePolicy.internalValue;
  }
}

export class YtsaurusClusterSpecComputeList extends cdktf.ComplexList {
  public internalValue? : YtsaurusClusterSpecCompute[] | cdktf.IResolvable

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
  public get(index: number): YtsaurusClusterSpecComputeOutputReference {
    return new YtsaurusClusterSpecComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YtsaurusClusterSpecOdin {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#checks_ttl YtsaurusCluster#checks_ttl}
  */
  readonly checksTtl?: string;
}

export function ytsaurusClusterSpecOdinToTerraform(struct?: YtsaurusClusterSpecOdin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks_ttl: cdktf.stringToTerraform(struct!.checksTtl),
  }
}


export function ytsaurusClusterSpecOdinToHclTerraform(struct?: YtsaurusClusterSpecOdin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checks_ttl: {
      value: cdktf.stringToHclTerraform(struct!.checksTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecOdinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecOdin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksTtl = this._checksTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecOdin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksTtl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksTtl = value.checksTtl;
    }
  }

  // checks_ttl - computed: true, optional: true, required: false
  private _checksTtl?: string; 
  public get checksTtl() {
    return this.getStringAttribute('checks_ttl');
  }
  public set checksTtl(value: string) {
    this._checksTtl = value;
  }
  public resetChecksTtl() {
    this._checksTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksTtlInput() {
    return this._checksTtl;
  }
}
export interface YtsaurusClusterSpecProxyHttp {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#count YtsaurusCluster#count}
  */
  readonly count?: number;
}

export function ytsaurusClusterSpecProxyHttpToTerraform(struct?: YtsaurusClusterSpecProxyHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function ytsaurusClusterSpecProxyHttpToHclTerraform(struct?: YtsaurusClusterSpecProxyHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecProxyHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecProxyHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecProxyHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface YtsaurusClusterSpecProxyRpc {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#count YtsaurusCluster#count}
  */
  readonly count?: number;
}

export function ytsaurusClusterSpecProxyRpcToTerraform(struct?: YtsaurusClusterSpecProxyRpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}


export function ytsaurusClusterSpecProxyRpcToHclTerraform(struct?: YtsaurusClusterSpecProxyRpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecProxyRpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecProxyRpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecProxyRpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface YtsaurusClusterSpecProxy {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#http YtsaurusCluster#http}
  */
  readonly http?: YtsaurusClusterSpecProxyHttp;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#rpc YtsaurusCluster#rpc}
  */
  readonly rpc?: YtsaurusClusterSpecProxyRpc;
}

export function ytsaurusClusterSpecProxyToTerraform(struct?: YtsaurusClusterSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: ytsaurusClusterSpecProxyHttpToTerraform(struct!.http),
    rpc: ytsaurusClusterSpecProxyRpcToTerraform(struct!.rpc),
  }
}


export function ytsaurusClusterSpecProxyToHclTerraform(struct?: YtsaurusClusterSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: ytsaurusClusterSpecProxyHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecProxyHttp",
    },
    rpc: {
      value: ytsaurusClusterSpecProxyRpcToHclTerraform(struct!.rpc),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecProxyRpc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._rpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpc = this._rpc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._rpc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._rpc.internalValue = value.rpc;
    }
  }

  // http - computed: true, optional: true, required: false
  private _http = new YtsaurusClusterSpecProxyHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: YtsaurusClusterSpecProxyHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // rpc - computed: true, optional: true, required: false
  private _rpc = new YtsaurusClusterSpecProxyRpcOutputReference(this, "rpc");
  public get rpc() {
    return this._rpc;
  }
  public putRpc(value: YtsaurusClusterSpecProxyRpc) {
    this._rpc.internalValue = value;
  }
  public resetRpc() {
    this._rpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcInput() {
    return this._rpc.internalValue;
  }
}
export interface YtsaurusClusterSpecStorageHdd {
  /**
  * ID of the folder that the cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#count YtsaurusCluster#count}
  */
  readonly count?: number;
  /**
  * ID of the cluster. Generated at creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#size_gb YtsaurusCluster#size_gb}
  */
  readonly sizeGb?: number;
}

export function ytsaurusClusterSpecStorageHddToTerraform(struct?: YtsaurusClusterSpecStorageHdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function ytsaurusClusterSpecStorageHddToHclTerraform(struct?: YtsaurusClusterSpecStorageHdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecStorageHddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecStorageHdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecStorageHdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._sizeGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._sizeGb = value.sizeGb;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface YtsaurusClusterSpecStorageSsd {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#count YtsaurusCluster#count}
  */
  readonly count?: number;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#size_gb YtsaurusCluster#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#type YtsaurusCluster#type}
  */
  readonly type?: string;
}

export function ytsaurusClusterSpecStorageSsdToTerraform(struct?: YtsaurusClusterSpecStorageSsd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ytsaurusClusterSpecStorageSsdToHclTerraform(struct?: YtsaurusClusterSpecStorageSsd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecStorageSsdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecStorageSsd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecStorageSsd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._sizeGb = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._sizeGb = value.sizeGb;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface YtsaurusClusterSpecStorage {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#hdd YtsaurusCluster#hdd}
  */
  readonly hdd?: YtsaurusClusterSpecStorageHdd;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#ssd YtsaurusCluster#ssd}
  */
  readonly ssd?: YtsaurusClusterSpecStorageSsd;
}

export function ytsaurusClusterSpecStorageToTerraform(struct?: YtsaurusClusterSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdd: ytsaurusClusterSpecStorageHddToTerraform(struct!.hdd),
    ssd: ytsaurusClusterSpecStorageSsdToTerraform(struct!.ssd),
  }
}


export function ytsaurusClusterSpecStorageToHclTerraform(struct?: YtsaurusClusterSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdd: {
      value: ytsaurusClusterSpecStorageHddToHclTerraform(struct!.hdd),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecStorageHdd",
    },
    ssd: {
      value: ytsaurusClusterSpecStorageSsdToHclTerraform(struct!.ssd),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecStorageSsd",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdd = this._hdd?.internalValue;
    }
    if (this._ssd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssd = this._ssd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdd.internalValue = undefined;
      this._ssd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdd.internalValue = value.hdd;
      this._ssd.internalValue = value.ssd;
    }
  }

  // hdd - computed: true, optional: true, required: false
  private _hdd = new YtsaurusClusterSpecStorageHddOutputReference(this, "hdd");
  public get hdd() {
    return this._hdd;
  }
  public putHdd(value: YtsaurusClusterSpecStorageHdd) {
    this._hdd.internalValue = value;
  }
  public resetHdd() {
    this._hdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hddInput() {
    return this._hdd.internalValue;
  }

  // ssd - computed: true, optional: true, required: false
  private _ssd = new YtsaurusClusterSpecStorageSsdOutputReference(this, "ssd");
  public get ssd() {
    return this._ssd;
  }
  public putSsd(value: YtsaurusClusterSpecStorageSsd) {
    this._ssd.internalValue = value;
  }
  public resetSsd() {
    this._ssd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdInput() {
    return this._ssd.internalValue;
  }
}
export interface YtsaurusClusterSpecTablet {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#count YtsaurusCluster#count}
  */
  readonly count?: number;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#preset YtsaurusCluster#preset}
  */
  readonly preset?: string;
}

export function ytsaurusClusterSpecTabletToTerraform(struct?: YtsaurusClusterSpecTablet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    preset: cdktf.stringToTerraform(struct!.preset),
  }
}


export function ytsaurusClusterSpecTabletToHclTerraform(struct?: YtsaurusClusterSpecTablet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preset: {
      value: cdktf.stringToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecTabletOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpecTablet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpecTablet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._preset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._preset = value.preset;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // preset - computed: true, optional: true, required: false
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }
}
export interface YtsaurusClusterSpec {
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#compute YtsaurusCluster#compute}
  */
  readonly compute?: YtsaurusClusterSpecCompute[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#odin YtsaurusCluster#odin}
  */
  readonly odin?: YtsaurusClusterSpecOdin;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#proxy YtsaurusCluster#proxy}
  */
  readonly proxy?: YtsaurusClusterSpecProxy;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#storage YtsaurusCluster#storage}
  */
  readonly storage?: YtsaurusClusterSpecStorage;
  /**
  * package: yandex.cloud.ytsaurus.v1
  * filename: yandex/cloud/ytsaurus/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#tablet YtsaurusCluster#tablet}
  */
  readonly tablet?: YtsaurusClusterSpecTablet;
}

export function ytsaurusClusterSpecToTerraform(struct?: YtsaurusClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute: cdktf.listMapper(ytsaurusClusterSpecComputeToTerraform, false)(struct!.compute),
    odin: ytsaurusClusterSpecOdinToTerraform(struct!.odin),
    proxy: ytsaurusClusterSpecProxyToTerraform(struct!.proxy),
    storage: ytsaurusClusterSpecStorageToTerraform(struct!.storage),
    tablet: ytsaurusClusterSpecTabletToTerraform(struct!.tablet),
  }
}


export function ytsaurusClusterSpecToHclTerraform(struct?: YtsaurusClusterSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute: {
      value: cdktf.listMapperHcl(ytsaurusClusterSpecComputeToHclTerraform, false)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "YtsaurusClusterSpecComputeList",
    },
    odin: {
      value: ytsaurusClusterSpecOdinToHclTerraform(struct!.odin),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecOdin",
    },
    proxy: {
      value: ytsaurusClusterSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecProxy",
    },
    storage: {
      value: ytsaurusClusterSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecStorage",
    },
    tablet: {
      value: ytsaurusClusterSpecTabletToHclTerraform(struct!.tablet),
      isBlock: true,
      type: "struct",
      storageClassType: "YtsaurusClusterSpecTablet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YtsaurusClusterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._odin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.odin = this._odin?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._tablet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablet = this._tablet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YtsaurusClusterSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compute.internalValue = undefined;
      this._odin.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._tablet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compute.internalValue = value.compute;
      this._odin.internalValue = value.odin;
      this._proxy.internalValue = value.proxy;
      this._storage.internalValue = value.storage;
      this._tablet.internalValue = value.tablet;
    }
  }

  // compute - computed: true, optional: true, required: false
  private _compute = new YtsaurusClusterSpecComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: YtsaurusClusterSpecCompute[] | cdktf.IResolvable) {
    this._compute.internalValue = value;
  }
  public resetCompute() {
    this._compute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // odin - computed: true, optional: true, required: false
  private _odin = new YtsaurusClusterSpecOdinOutputReference(this, "odin");
  public get odin() {
    return this._odin;
  }
  public putOdin(value: YtsaurusClusterSpecOdin) {
    this._odin.internalValue = value;
  }
  public resetOdin() {
    this._odin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odinInput() {
    return this._odin.internalValue;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy = new YtsaurusClusterSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: YtsaurusClusterSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // storage - computed: true, optional: true, required: false
  private _storage = new YtsaurusClusterSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: YtsaurusClusterSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // tablet - computed: true, optional: true, required: false
  private _tablet = new YtsaurusClusterSpecTabletOutputReference(this, "tablet");
  public get tablet() {
    return this._tablet;
  }
  public putTablet(value: YtsaurusClusterSpecTablet) {
    this._tablet.internalValue = value;
  }
  public resetTablet() {
    this._tablet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tabletInput() {
    return this._tablet.internalValue;
  }
}
export interface YtsaurusClusterTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#create YtsaurusCluster#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#delete YtsaurusCluster#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#read YtsaurusCluster#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#update YtsaurusCluster#update}
  */
  readonly update?: string;
}

export function ytsaurusClusterTimeoutsToTerraform(struct?: YtsaurusClusterTimeouts | cdktf.IResolvable): any {
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


export function ytsaurusClusterTimeoutsToHclTerraform(struct?: YtsaurusClusterTimeouts | cdktf.IResolvable): any {
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

export class YtsaurusClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YtsaurusClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: YtsaurusClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster yandex_ytsaurus_cluster}
*/
export class YtsaurusCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ytsaurus_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YtsaurusCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YtsaurusCluster to import
  * @param importFromId The id of the existing YtsaurusCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YtsaurusCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_ytsaurus_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/ytsaurus_cluster yandex_ytsaurus_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YtsaurusClusterConfig
  */
  public constructor(scope: Construct, id: string, config: YtsaurusClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_ytsaurus_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.170.0',
        providerVersionConstraint: '0.170.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._securityGroupIds = config.securityGroupIds;
    this._spec.internalValue = config.spec;
    this._subnetId = config.subnetId;
    this._timeouts.internalValue = config.timeouts;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: true, required: false
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

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new YtsaurusClusterEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // spec - computed: true, optional: true, required: false
  private _spec = new YtsaurusClusterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: YtsaurusClusterSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new YtsaurusClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YtsaurusClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      spec: ytsaurusClusterSpecToTerraform(this._spec.internalValue),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: ytsaurusClusterTimeoutsToTerraform(this._timeouts.internalValue),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      spec: {
        value: ytsaurusClusterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YtsaurusClusterSpec",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ytsaurusClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YtsaurusClusterTimeouts",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
