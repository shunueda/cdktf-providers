// https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKopsInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/instance_group#cluster_name DataKopsInstanceGroup#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/instance_group#id DataKopsInstanceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/instance_group#name DataKopsInstanceGroup#name}
  */
  readonly name: string;
}
export interface DataKopsInstanceGroupAdditionalUserData {
}

export function dataKopsInstanceGroupAdditionalUserDataToTerraform(struct?: DataKopsInstanceGroupAdditionalUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupAdditionalUserDataToHclTerraform(struct?: DataKopsInstanceGroupAdditionalUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupAdditionalUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupAdditionalUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupAdditionalUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKopsInstanceGroupAdditionalUserDataList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupAdditionalUserDataOutputReference {
    return new DataKopsInstanceGroupAdditionalUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupContainerdNvidiaGpu {
}

export function dataKopsInstanceGroupContainerdNvidiaGpuToTerraform(struct?: DataKopsInstanceGroupContainerdNvidiaGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupContainerdNvidiaGpuToHclTerraform(struct?: DataKopsInstanceGroupContainerdNvidiaGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupContainerdNvidiaGpuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupContainerdNvidiaGpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupContainerdNvidiaGpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // driver_package - computed: true, optional: false, required: false
  public get driverPackage() {
    return this.getStringAttribute('driver_package');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataKopsInstanceGroupContainerdNvidiaGpuList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupContainerdNvidiaGpuOutputReference {
    return new DataKopsInstanceGroupContainerdNvidiaGpuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupContainerdPackages {
}

export function dataKopsInstanceGroupContainerdPackagesToTerraform(struct?: DataKopsInstanceGroupContainerdPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupContainerdPackagesToHclTerraform(struct?: DataKopsInstanceGroupContainerdPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupContainerdPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupContainerdPackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupContainerdPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash_amd64 - computed: true, optional: false, required: false
  public get hashAmd64() {
    return this.getStringAttribute('hash_amd64');
  }

  // hash_arm64 - computed: true, optional: false, required: false
  public get hashArm64() {
    return this.getStringAttribute('hash_arm64');
  }

  // url_amd64 - computed: true, optional: false, required: false
  public get urlAmd64() {
    return this.getStringAttribute('url_amd64');
  }

  // url_arm64 - computed: true, optional: false, required: false
  public get urlArm64() {
    return this.getStringAttribute('url_arm64');
  }
}

export class DataKopsInstanceGroupContainerdPackagesList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupContainerdPackagesOutputReference {
    return new DataKopsInstanceGroupContainerdPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupContainerdRegistryMirrors {
}

export function dataKopsInstanceGroupContainerdRegistryMirrorsToTerraform(struct?: DataKopsInstanceGroupContainerdRegistryMirrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupContainerdRegistryMirrorsToHclTerraform(struct?: DataKopsInstanceGroupContainerdRegistryMirrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupContainerdRegistryMirrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupContainerdRegistryMirrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupContainerdRegistryMirrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataKopsInstanceGroupContainerdRegistryMirrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupContainerdRegistryMirrorsOutputReference {
    return new DataKopsInstanceGroupContainerdRegistryMirrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupContainerdRuncPackages {
}

export function dataKopsInstanceGroupContainerdRuncPackagesToTerraform(struct?: DataKopsInstanceGroupContainerdRuncPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupContainerdRuncPackagesToHclTerraform(struct?: DataKopsInstanceGroupContainerdRuncPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupContainerdRuncPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupContainerdRuncPackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupContainerdRuncPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hash_amd64 - computed: true, optional: false, required: false
  public get hashAmd64() {
    return this.getStringAttribute('hash_amd64');
  }

  // hash_arm64 - computed: true, optional: false, required: false
  public get hashArm64() {
    return this.getStringAttribute('hash_arm64');
  }

  // url_amd64 - computed: true, optional: false, required: false
  public get urlAmd64() {
    return this.getStringAttribute('url_amd64');
  }

  // url_arm64 - computed: true, optional: false, required: false
  public get urlArm64() {
    return this.getStringAttribute('url_arm64');
  }
}

export class DataKopsInstanceGroupContainerdRuncPackagesList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupContainerdRuncPackagesOutputReference {
    return new DataKopsInstanceGroupContainerdRuncPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupContainerdRunc {
}

export function dataKopsInstanceGroupContainerdRuncToTerraform(struct?: DataKopsInstanceGroupContainerdRunc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupContainerdRuncToHclTerraform(struct?: DataKopsInstanceGroupContainerdRunc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupContainerdRuncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupContainerdRunc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupContainerdRunc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // packages - computed: true, optional: false, required: false
  private _packages = new DataKopsInstanceGroupContainerdRuncPackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataKopsInstanceGroupContainerdRuncList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupContainerdRuncOutputReference {
    return new DataKopsInstanceGroupContainerdRuncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupContainerd {
}

export function dataKopsInstanceGroupContainerdToTerraform(struct?: DataKopsInstanceGroupContainerd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupContainerdToHclTerraform(struct?: DataKopsInstanceGroupContainerd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupContainerdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupContainerd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupContainerd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // config_override - computed: true, optional: false, required: false
  public get configOverride() {
    return this.getStringAttribute('config_override');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // nvidia_gpu - computed: true, optional: false, required: false
  private _nvidiaGpu = new DataKopsInstanceGroupContainerdNvidiaGpuList(this, "nvidia_gpu", false);
  public get nvidiaGpu() {
    return this._nvidiaGpu;
  }

  // packages - computed: true, optional: false, required: false
  private _packages = new DataKopsInstanceGroupContainerdPackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }

  // registry_mirrors - computed: true, optional: false, required: false
  private _registryMirrors = new DataKopsInstanceGroupContainerdRegistryMirrorsList(this, "registry_mirrors", false);
  public get registryMirrors() {
    return this._registryMirrors;
  }

  // root - computed: true, optional: false, required: false
  public get root() {
    return this.getStringAttribute('root');
  }

  // runc - computed: true, optional: false, required: false
  private _runc = new DataKopsInstanceGroupContainerdRuncList(this, "runc", false);
  public get runc() {
    return this._runc;
  }

  // skip_install - computed: true, optional: false, required: false
  public get skipInstall() {
    return this.getBooleanAttribute('skip_install');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataKopsInstanceGroupContainerdList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupContainerdOutputReference {
    return new DataKopsInstanceGroupContainerdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupExternalLoadBalancers {
}

export function dataKopsInstanceGroupExternalLoadBalancersToTerraform(struct?: DataKopsInstanceGroupExternalLoadBalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupExternalLoadBalancersToHclTerraform(struct?: DataKopsInstanceGroupExternalLoadBalancers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupExternalLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupExternalLoadBalancers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupExternalLoadBalancers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // target_group_arn - computed: true, optional: false, required: false
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
}

export class DataKopsInstanceGroupExternalLoadBalancersList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupExternalLoadBalancersOutputReference {
    return new DataKopsInstanceGroupExternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupFileAssets {
}

export function dataKopsInstanceGroupFileAssetsToTerraform(struct?: DataKopsInstanceGroupFileAssets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupFileAssetsToHclTerraform(struct?: DataKopsInstanceGroupFileAssets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupFileAssetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupFileAssets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupFileAssets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // is_base64 - computed: true, optional: false, required: false
  public get isBase64() {
    return this.getBooleanAttribute('is_base64');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }
}

export class DataKopsInstanceGroupFileAssetsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupFileAssetsOutputReference {
    return new DataKopsInstanceGroupFileAssetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupGuestAccelerators {
}

export function dataKopsInstanceGroupGuestAcceleratorsToTerraform(struct?: DataKopsInstanceGroupGuestAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupGuestAcceleratorsToHclTerraform(struct?: DataKopsInstanceGroupGuestAccelerators): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupGuestAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupGuestAccelerators | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupGuestAccelerators | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }

  // accelerator_type - computed: true, optional: false, required: false
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
}

export class DataKopsInstanceGroupGuestAcceleratorsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupGuestAcceleratorsOutputReference {
    return new DataKopsInstanceGroupGuestAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupHooksExecContainer {
}

export function dataKopsInstanceGroupHooksExecContainerToTerraform(struct?: DataKopsInstanceGroupHooksExecContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupHooksExecContainerToHclTerraform(struct?: DataKopsInstanceGroupHooksExecContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupHooksExecContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupHooksExecContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupHooksExecContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktf.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }
}

export class DataKopsInstanceGroupHooksExecContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupHooksExecContainerOutputReference {
    return new DataKopsInstanceGroupHooksExecContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupHooks {
}

export function dataKopsInstanceGroupHooksToTerraform(struct?: DataKopsInstanceGroupHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupHooksToHclTerraform(struct?: DataKopsInstanceGroupHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // before - computed: true, optional: false, required: false
  public get before() {
    return this.getListAttribute('before');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exec_container - computed: true, optional: false, required: false
  private _execContainer = new DataKopsInstanceGroupHooksExecContainerList(this, "exec_container", false);
  public get execContainer() {
    return this._execContainer;
  }

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // requires - computed: true, optional: false, required: false
  public get requires() {
    return this.getListAttribute('requires');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // use_raw_manifest - computed: true, optional: false, required: false
  public get useRawManifest() {
    return this.getBooleanAttribute('use_raw_manifest');
  }
}

export class DataKopsInstanceGroupHooksList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupHooksOutputReference {
    return new DataKopsInstanceGroupHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupIam {
}

export function dataKopsInstanceGroupIamToTerraform(struct?: DataKopsInstanceGroupIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupIamToHclTerraform(struct?: DataKopsInstanceGroupIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupIamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}

export class DataKopsInstanceGroupIamList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupIamOutputReference {
    return new DataKopsInstanceGroupIamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupInstanceMetadata {
}

export function dataKopsInstanceGroupInstanceMetadataToTerraform(struct?: DataKopsInstanceGroupInstanceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupInstanceMetadataToHclTerraform(struct?: DataKopsInstanceGroupInstanceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupInstanceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupInstanceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupInstanceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_put_response_hop_limit - computed: true, optional: false, required: false
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }

  // http_tokens - computed: true, optional: false, required: false
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
}

export class DataKopsInstanceGroupInstanceMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupInstanceMetadataOutputReference {
    return new DataKopsInstanceGroupInstanceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupKubeletAnonymousAuth {
}

export function dataKopsInstanceGroupKubeletAnonymousAuthToTerraform(struct?: DataKopsInstanceGroupKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupKubeletAnonymousAuthToHclTerraform(struct?: DataKopsInstanceGroupKubeletAnonymousAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupKubeletAnonymousAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupKubeletAnonymousAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupKubeletAnonymousAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataKopsInstanceGroupKubeletAnonymousAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupKubeletAnonymousAuthOutputReference {
    return new DataKopsInstanceGroupKubeletAnonymousAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupKubeletCpuCfsQuota {
}

export function dataKopsInstanceGroupKubeletCpuCfsQuotaToTerraform(struct?: DataKopsInstanceGroupKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupKubeletCpuCfsQuotaToHclTerraform(struct?: DataKopsInstanceGroupKubeletCpuCfsQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupKubeletCpuCfsQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupKubeletCpuCfsQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupKubeletCpuCfsQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataKopsInstanceGroupKubeletCpuCfsQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupKubeletCpuCfsQuotaOutputReference {
    return new DataKopsInstanceGroupKubeletCpuCfsQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupKubelet {
}

export function dataKopsInstanceGroupKubeletToTerraform(struct?: DataKopsInstanceGroupKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupKubeletToHclTerraform(struct?: DataKopsInstanceGroupKubelet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupKubeletOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupKubelet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupKubelet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privileged - computed: true, optional: false, required: false
  public get allowPrivileged() {
    return this.getBooleanAttribute('allow_privileged');
  }

  // allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }

  // anonymous_auth - computed: true, optional: false, required: false
  private _anonymousAuth = new DataKopsInstanceGroupKubeletAnonymousAuthList(this, "anonymous_auth", false);
  public get anonymousAuth() {
    return this._anonymousAuth;
  }

  // api_servers - computed: true, optional: false, required: false
  public get apiServers() {
    return this.getStringAttribute('api_servers');
  }

  // authentication_token_webhook - computed: true, optional: false, required: false
  public get authenticationTokenWebhook() {
    return this.getBooleanAttribute('authentication_token_webhook');
  }

  // authentication_token_webhook_cache_ttl - computed: true, optional: false, required: false
  public get authenticationTokenWebhookCacheTtl() {
    return this.getStringAttribute('authentication_token_webhook_cache_ttl');
  }

  // authorization_mode - computed: true, optional: false, required: false
  public get authorizationMode() {
    return this.getStringAttribute('authorization_mode');
  }

  // babysit_daemons - computed: true, optional: false, required: false
  public get babysitDaemons() {
    return this.getBooleanAttribute('babysit_daemons');
  }

  // bootstrap_kubeconfig - computed: true, optional: false, required: false
  public get bootstrapKubeconfig() {
    return this.getStringAttribute('bootstrap_kubeconfig');
  }

  // cgroup_driver - computed: true, optional: false, required: false
  public get cgroupDriver() {
    return this.getStringAttribute('cgroup_driver');
  }

  // cgroup_root - computed: true, optional: false, required: false
  public get cgroupRoot() {
    return this.getStringAttribute('cgroup_root');
  }

  // client_ca_file - computed: true, optional: false, required: false
  public get clientCaFile() {
    return this.getStringAttribute('client_ca_file');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_dns - computed: true, optional: false, required: false
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }

  // cluster_domain - computed: true, optional: false, required: false
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }

  // configure_cbr0 - computed: true, optional: false, required: false
  public get configureCbr0() {
    return this.getBooleanAttribute('configure_cbr0');
  }

  // container_log_max_files - computed: true, optional: false, required: false
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }

  // container_log_max_size - computed: true, optional: false, required: false
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }

  // cpu_cfs_quota - computed: true, optional: false, required: false
  private _cpuCfsQuota = new DataKopsInstanceGroupKubeletCpuCfsQuotaList(this, "cpu_cfs_quota", false);
  public get cpuCfsQuota() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: true, optional: false, required: false
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }

  // cpu_manager_policy - computed: true, optional: false, required: false
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }

  // docker_disable_shared_pid - computed: true, optional: false, required: false
  public get dockerDisableSharedPid() {
    return this.getBooleanAttribute('docker_disable_shared_pid');
  }

  // enable_cadvisor_json_endpoints - computed: true, optional: false, required: false
  public get enableCadvisorJsonEndpoints() {
    return this.getBooleanAttribute('enable_cadvisor_json_endpoints');
  }

  // enable_custom_metrics - computed: true, optional: false, required: false
  public get enableCustomMetrics() {
    return this.getBooleanAttribute('enable_custom_metrics');
  }

  // enable_debugging_handlers - computed: true, optional: false, required: false
  public get enableDebuggingHandlers() {
    return this.getBooleanAttribute('enable_debugging_handlers');
  }

  // enforce_node_allocatable - computed: true, optional: false, required: false
  public get enforceNodeAllocatable() {
    return this.getStringAttribute('enforce_node_allocatable');
  }

  // event_burst - computed: true, optional: false, required: false
  public get eventBurst() {
    return this.getNumberAttribute('event_burst');
  }

  // event_qps - computed: true, optional: false, required: false
  public get eventQps() {
    return this.getNumberAttribute('event_qps');
  }

  // eviction_hard - computed: true, optional: false, required: false
  public get evictionHard() {
    return this.getStringAttribute('eviction_hard');
  }

  // eviction_max_pod_grace_period - computed: true, optional: false, required: false
  public get evictionMaxPodGracePeriod() {
    return this.getNumberAttribute('eviction_max_pod_grace_period');
  }

  // eviction_minimum_reclaim - computed: true, optional: false, required: false
  public get evictionMinimumReclaim() {
    return this.getStringAttribute('eviction_minimum_reclaim');
  }

  // eviction_pressure_transition_period - computed: true, optional: false, required: false
  public get evictionPressureTransitionPeriod() {
    return this.getStringAttribute('eviction_pressure_transition_period');
  }

  // eviction_soft - computed: true, optional: false, required: false
  public get evictionSoft() {
    return this.getStringAttribute('eviction_soft');
  }

  // eviction_soft_grace_period - computed: true, optional: false, required: false
  public get evictionSoftGracePeriod() {
    return this.getStringAttribute('eviction_soft_grace_period');
  }

  // experimental_allowed_unsafe_sysctls - computed: true, optional: false, required: false
  public get experimentalAllowedUnsafeSysctls() {
    return this.getListAttribute('experimental_allowed_unsafe_sysctls');
  }

  // fail_swap_on - computed: true, optional: false, required: false
  public get failSwapOn() {
    return this.getBooleanAttribute('fail_swap_on');
  }

  // feature_gates - computed: true, optional: false, required: false
  private _featureGates = new cdktf.StringMap(this, "feature_gates");
  public get featureGates() {
    return this._featureGates;
  }

  // hairpin_mode - computed: true, optional: false, required: false
  public get hairpinMode() {
    return this.getStringAttribute('hairpin_mode');
  }

  // hostname_override - computed: true, optional: false, required: false
  public get hostnameOverride() {
    return this.getStringAttribute('hostname_override');
  }

  // housekeeping_interval - computed: true, optional: false, required: false
  public get housekeepingInterval() {
    return this.getStringAttribute('housekeeping_interval');
  }

  // image_gc_high_threshold_percent - computed: true, optional: false, required: false
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }

  // image_gc_low_threshold_percent - computed: true, optional: false, required: false
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }

  // image_pull_progress_deadline - computed: true, optional: false, required: false
  public get imagePullProgressDeadline() {
    return this.getStringAttribute('image_pull_progress_deadline');
  }

  // kernel_memcg_notification - computed: true, optional: false, required: false
  public get kernelMemcgNotification() {
    return this.getBooleanAttribute('kernel_memcg_notification');
  }

  // kube_reserved - computed: true, optional: false, required: false
  private _kubeReserved = new cdktf.StringMap(this, "kube_reserved");
  public get kubeReserved() {
    return this._kubeReserved;
  }

  // kube_reserved_cgroup - computed: true, optional: false, required: false
  public get kubeReservedCgroup() {
    return this.getStringAttribute('kube_reserved_cgroup');
  }

  // kubeconfig_path - computed: true, optional: false, required: false
  public get kubeconfigPath() {
    return this.getStringAttribute('kubeconfig_path');
  }

  // kubelet_cgroups - computed: true, optional: false, required: false
  public get kubeletCgroups() {
    return this.getStringAttribute('kubelet_cgroups');
  }

  // log_format - computed: true, optional: false, required: false
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // network_plugin_mtu - computed: true, optional: false, required: false
  public get networkPluginMtu() {
    return this.getNumberAttribute('network_plugin_mtu');
  }

  // network_plugin_name - computed: true, optional: false, required: false
  public get networkPluginName() {
    return this.getStringAttribute('network_plugin_name');
  }

  // node_labels - computed: true, optional: false, required: false
  private _nodeLabels = new cdktf.StringMap(this, "node_labels");
  public get nodeLabels() {
    return this._nodeLabels;
  }

  // node_status_update_frequency - computed: true, optional: false, required: false
  public get nodeStatusUpdateFrequency() {
    return this.getStringAttribute('node_status_update_frequency');
  }

  // non_masquerade_cidr - computed: true, optional: false, required: false
  public get nonMasqueradeCidr() {
    return this.getStringAttribute('non_masquerade_cidr');
  }

  // nvidia_gp_us - computed: true, optional: false, required: false
  public get nvidiaGpUs() {
    return this.getNumberAttribute('nvidia_gp_us');
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // pod_infra_container_image - computed: true, optional: false, required: false
  public get podInfraContainerImage() {
    return this.getStringAttribute('pod_infra_container_image');
  }

  // pod_manifest_path - computed: true, optional: false, required: false
  public get podManifestPath() {
    return this.getStringAttribute('pod_manifest_path');
  }

  // pod_pids_limit - computed: true, optional: false, required: false
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }

  // protect_kernel_defaults - computed: true, optional: false, required: false
  public get protectKernelDefaults() {
    return this.getBooleanAttribute('protect_kernel_defaults');
  }

  // read_only_port - computed: true, optional: false, required: false
  public get readOnlyPort() {
    return this.getNumberAttribute('read_only_port');
  }

  // reconcile_cidr - computed: true, optional: false, required: false
  public get reconcileCidr() {
    return this.getBooleanAttribute('reconcile_cidr');
  }

  // register_node - computed: true, optional: false, required: false
  public get registerNode() {
    return this.getBooleanAttribute('register_node');
  }

  // register_schedulable - computed: true, optional: false, required: false
  public get registerSchedulable() {
    return this.getBooleanAttribute('register_schedulable');
  }

  // registry_burst - computed: true, optional: false, required: false
  public get registryBurst() {
    return this.getNumberAttribute('registry_burst');
  }

  // registry_pull_qps - computed: true, optional: false, required: false
  public get registryPullQps() {
    return this.getNumberAttribute('registry_pull_qps');
  }

  // require_kubeconfig - computed: true, optional: false, required: false
  public get requireKubeconfig() {
    return this.getBooleanAttribute('require_kubeconfig');
  }

  // resolver_config - computed: true, optional: false, required: false
  public get resolverConfig() {
    return this.getStringAttribute('resolver_config');
  }

  // root_dir - computed: true, optional: false, required: false
  public get rootDir() {
    return this.getStringAttribute('root_dir');
  }

  // rotate_certificates - computed: true, optional: false, required: false
  public get rotateCertificates() {
    return this.getBooleanAttribute('rotate_certificates');
  }

  // runtime_cgroups - computed: true, optional: false, required: false
  public get runtimeCgroups() {
    return this.getStringAttribute('runtime_cgroups');
  }

  // runtime_request_timeout - computed: true, optional: false, required: false
  public get runtimeRequestTimeout() {
    return this.getStringAttribute('runtime_request_timeout');
  }

  // seccomp_profile_root - computed: true, optional: false, required: false
  public get seccompProfileRoot() {
    return this.getStringAttribute('seccomp_profile_root');
  }

  // serialize_image_pulls - computed: true, optional: false, required: false
  public get serializeImagePulls() {
    return this.getBooleanAttribute('serialize_image_pulls');
  }

  // shutdown_grace_period - computed: true, optional: false, required: false
  public get shutdownGracePeriod() {
    return this.getStringAttribute('shutdown_grace_period');
  }

  // shutdown_grace_period_critical_pods - computed: true, optional: false, required: false
  public get shutdownGracePeriodCriticalPods() {
    return this.getStringAttribute('shutdown_grace_period_critical_pods');
  }

  // streaming_connection_idle_timeout - computed: true, optional: false, required: false
  public get streamingConnectionIdleTimeout() {
    return this.getStringAttribute('streaming_connection_idle_timeout');
  }

  // system_cgroups - computed: true, optional: false, required: false
  public get systemCgroups() {
    return this.getStringAttribute('system_cgroups');
  }

  // system_reserved - computed: true, optional: false, required: false
  private _systemReserved = new cdktf.StringMap(this, "system_reserved");
  public get systemReserved() {
    return this._systemReserved;
  }

  // system_reserved_cgroup - computed: true, optional: false, required: false
  public get systemReservedCgroup() {
    return this.getStringAttribute('system_reserved_cgroup');
  }

  // taints - computed: true, optional: false, required: false
  public get taints() {
    return this.getListAttribute('taints');
  }

  // tls_cert_file - computed: true, optional: false, required: false
  public get tlsCertFile() {
    return this.getStringAttribute('tls_cert_file');
  }

  // tls_cipher_suites - computed: true, optional: false, required: false
  public get tlsCipherSuites() {
    return this.getListAttribute('tls_cipher_suites');
  }

  // tls_min_version - computed: true, optional: false, required: false
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }

  // tls_private_key_file - computed: true, optional: false, required: false
  public get tlsPrivateKeyFile() {
    return this.getStringAttribute('tls_private_key_file');
  }

  // topology_manager_policy - computed: true, optional: false, required: false
  public get topologyManagerPolicy() {
    return this.getStringAttribute('topology_manager_policy');
  }

  // volume_plugin_directory - computed: true, optional: false, required: false
  public get volumePluginDirectory() {
    return this.getStringAttribute('volume_plugin_directory');
  }

  // volume_stats_agg_period - computed: true, optional: false, required: false
  public get volumeStatsAggPeriod() {
    return this.getStringAttribute('volume_stats_agg_period');
  }
}

export class DataKopsInstanceGroupKubeletList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupKubeletOutputReference {
    return new DataKopsInstanceGroupKubeletOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpu {
}

export function dataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpuToTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpuToHclTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }
}

export class DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpuList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpuOutputReference {
    return new DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemory {
}

export function dataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryToTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryToHclTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }
}

export class DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryOutputReference {
    return new DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirements {
}

export function dataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsToTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsToHclTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsCpuList(this, "cpu", false);
  public get cpu() {
    return this._cpu;
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
}

export class DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsOutputReference {
    return new DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBase {
}

export function dataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBaseToTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBaseToHclTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBaseList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBaseOutputReference {
    return new DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupMixedInstancesPolicyOnDemandBase {
}

export function dataKopsInstanceGroupMixedInstancesPolicyOnDemandBaseToTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyOnDemandBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupMixedInstancesPolicyOnDemandBaseToHclTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicyOnDemandBase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupMixedInstancesPolicyOnDemandBaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupMixedInstancesPolicyOnDemandBase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupMixedInstancesPolicyOnDemandBase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataKopsInstanceGroupMixedInstancesPolicyOnDemandBaseList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupMixedInstancesPolicyOnDemandBaseOutputReference {
    return new DataKopsInstanceGroupMixedInstancesPolicyOnDemandBaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupMixedInstancesPolicy {
}

export function dataKopsInstanceGroupMixedInstancesPolicyToTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupMixedInstancesPolicyToHclTerraform(struct?: DataKopsInstanceGroupMixedInstancesPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupMixedInstancesPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupMixedInstancesPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupMixedInstancesPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_requirements - computed: true, optional: false, required: false
  private _instanceRequirements = new DataKopsInstanceGroupMixedInstancesPolicyInstanceRequirementsList(this, "instance_requirements", false);
  public get instanceRequirements() {
    return this._instanceRequirements;
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getListAttribute('instances');
  }

  // on_demand_above_base - computed: true, optional: false, required: false
  private _onDemandAboveBase = new DataKopsInstanceGroupMixedInstancesPolicyOnDemandAboveBaseList(this, "on_demand_above_base", false);
  public get onDemandAboveBase() {
    return this._onDemandAboveBase;
  }

  // on_demand_allocation_strategy - computed: true, optional: false, required: false
  public get onDemandAllocationStrategy() {
    return this.getStringAttribute('on_demand_allocation_strategy');
  }

  // on_demand_base - computed: true, optional: false, required: false
  private _onDemandBase = new DataKopsInstanceGroupMixedInstancesPolicyOnDemandBaseList(this, "on_demand_base", false);
  public get onDemandBase() {
    return this._onDemandBase;
  }

  // spot_allocation_strategy - computed: true, optional: false, required: false
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }

  // spot_instance_pools - computed: true, optional: false, required: false
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }
}

export class DataKopsInstanceGroupMixedInstancesPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupMixedInstancesPolicyOutputReference {
    return new DataKopsInstanceGroupMixedInstancesPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupRollingUpdate {
}

export function dataKopsInstanceGroupRollingUpdateToTerraform(struct?: DataKopsInstanceGroupRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupRollingUpdateToHclTerraform(struct?: DataKopsInstanceGroupRollingUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupRollingUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupRollingUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupRollingUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain_and_terminate - computed: true, optional: false, required: false
  public get drainAndTerminate() {
    return this.getBooleanAttribute('drain_and_terminate');
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
}

export class DataKopsInstanceGroupRollingUpdateList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupRollingUpdateOutputReference {
    return new DataKopsInstanceGroupRollingUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupVolumeMounts {
}

export function dataKopsInstanceGroupVolumeMountsToTerraform(struct?: DataKopsInstanceGroupVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupVolumeMountsToHclTerraform(struct?: DataKopsInstanceGroupVolumeMounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // filesystem - computed: true, optional: false, required: false
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }

  // format_options - computed: true, optional: false, required: false
  public get formatOptions() {
    return this.getListAttribute('format_options');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataKopsInstanceGroupVolumeMountsList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupVolumeMountsOutputReference {
    return new DataKopsInstanceGroupVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupVolumes {
}

export function dataKopsInstanceGroupVolumesToTerraform(struct?: DataKopsInstanceGroupVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupVolumesToHclTerraform(struct?: DataKopsInstanceGroupVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_on_termination - computed: true, optional: false, required: false
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // iops - computed: true, optional: false, required: false
  public get iops() {
    return this.getNumberAttribute('iops');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataKopsInstanceGroupVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupVolumesOutputReference {
    return new DataKopsInstanceGroupVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKopsInstanceGroupWarmPool {
}

export function dataKopsInstanceGroupWarmPoolToTerraform(struct?: DataKopsInstanceGroupWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKopsInstanceGroupWarmPoolToHclTerraform(struct?: DataKopsInstanceGroupWarmPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKopsInstanceGroupWarmPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKopsInstanceGroupWarmPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKopsInstanceGroupWarmPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_lifecycle_hook - computed: true, optional: false, required: false
  public get enableLifecycleHook() {
    return this.getBooleanAttribute('enable_lifecycle_hook');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
}

export class DataKopsInstanceGroupWarmPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataKopsInstanceGroupWarmPoolOutputReference {
    return new DataKopsInstanceGroupWarmPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/instance_group kops_instance_group}
*/
export class DataKopsInstanceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kops_instance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKopsInstanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKopsInstanceGroup to import
  * @param importFromId The id of the existing DataKopsInstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/instance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKopsInstanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kops_instance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs/data-sources/instance_group kops_instance_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKopsInstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataKopsInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'kops_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'kops',
        providerVersion: '1.25.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_security_groups - computed: true, optional: false, required: false
  public get additionalSecurityGroups() {
    return this.getListAttribute('additional_security_groups');
  }

  // additional_user_data - computed: true, optional: false, required: false
  private _additionalUserData = new DataKopsInstanceGroupAdditionalUserDataList(this, "additional_user_data", false);
  public get additionalUserData() {
    return this._additionalUserData;
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // associate_public_ip - computed: true, optional: false, required: false
  public get associatePublicIp() {
    return this.getBooleanAttribute('associate_public_ip');
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // cloud_labels - computed: true, optional: false, required: false
  private _cloudLabels = new cdktf.StringMap(this, "cloud_labels");
  public get cloudLabels() {
    return this._cloudLabels;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // compress_user_data - computed: true, optional: false, required: false
  public get compressUserData() {
    return this.getBooleanAttribute('compress_user_data');
  }

  // containerd - computed: true, optional: false, required: false
  private _containerd = new DataKopsInstanceGroupContainerdList(this, "containerd", false);
  public get containerd() {
    return this._containerd;
  }

  // cpu_credits - computed: true, optional: false, required: false
  public get cpuCredits() {
    return this.getStringAttribute('cpu_credits');
  }

  // detailed_instance_monitoring - computed: true, optional: false, required: false
  public get detailedInstanceMonitoring() {
    return this.getBooleanAttribute('detailed_instance_monitoring');
  }

  // external_load_balancers - computed: true, optional: false, required: false
  private _externalLoadBalancers = new DataKopsInstanceGroupExternalLoadBalancersList(this, "external_load_balancers", false);
  public get externalLoadBalancers() {
    return this._externalLoadBalancers;
  }

  // file_assets - computed: true, optional: false, required: false
  private _fileAssets = new DataKopsInstanceGroupFileAssetsList(this, "file_assets", false);
  public get fileAssets() {
    return this._fileAssets;
  }

  // gcp_provisioning_model - computed: true, optional: false, required: false
  public get gcpProvisioningModel() {
    return this.getStringAttribute('gcp_provisioning_model');
  }

  // guest_accelerators - computed: true, optional: false, required: false
  private _guestAccelerators = new DataKopsInstanceGroupGuestAcceleratorsList(this, "guest_accelerators", false);
  public get guestAccelerators() {
    return this._guestAccelerators;
  }

  // hooks - computed: true, optional: false, required: false
  private _hooks = new DataKopsInstanceGroupHooksList(this, "hooks", false);
  public get hooks() {
    return this._hooks;
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new DataKopsInstanceGroupIamList(this, "iam", false);
  public get iam() {
    return this._iam;
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

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // instance_interruption_behavior - computed: true, optional: false, required: false
  public get instanceInterruptionBehavior() {
    return this.getStringAttribute('instance_interruption_behavior');
  }

  // instance_metadata - computed: true, optional: false, required: false
  private _instanceMetadata = new DataKopsInstanceGroupInstanceMetadataList(this, "instance_metadata", false);
  public get instanceMetadata() {
    return this._instanceMetadata;
  }

  // instance_protection - computed: true, optional: false, required: false
  public get instanceProtection() {
    return this.getBooleanAttribute('instance_protection');
  }

  // kubelet - computed: true, optional: false, required: false
  private _kubelet = new DataKopsInstanceGroupKubeletList(this, "kubelet", false);
  public get kubelet() {
    return this._kubelet;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // manager - computed: true, optional: false, required: false
  public get manager() {
    return this.getStringAttribute('manager');
  }

  // max_instance_lifetime - computed: true, optional: false, required: false
  public get maxInstanceLifetime() {
    return this.getStringAttribute('max_instance_lifetime');
  }

  // max_price - computed: true, optional: false, required: false
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // mixed_instances_policy - computed: true, optional: false, required: false
  private _mixedInstancesPolicy = new DataKopsInstanceGroupMixedInstancesPolicyList(this, "mixed_instances_policy", false);
  public get mixedInstancesPolicy() {
    return this._mixedInstancesPolicy;
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

  // node_labels - computed: true, optional: false, required: false
  private _nodeLabels = new cdktf.StringMap(this, "node_labels");
  public get nodeLabels() {
    return this._nodeLabels;
  }

  // packages - computed: true, optional: false, required: false
  public get packages() {
    return this.getListAttribute('packages');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // rolling_update - computed: true, optional: false, required: false
  private _rollingUpdate = new DataKopsInstanceGroupRollingUpdateList(this, "rolling_update", false);
  public get rollingUpdate() {
    return this._rollingUpdate;
  }

  // root_volume_encryption - computed: true, optional: false, required: false
  public get rootVolumeEncryption() {
    return this.getBooleanAttribute('root_volume_encryption');
  }

  // root_volume_encryption_key - computed: true, optional: false, required: false
  public get rootVolumeEncryptionKey() {
    return this.getStringAttribute('root_volume_encryption_key');
  }

  // root_volume_iops - computed: true, optional: false, required: false
  public get rootVolumeIops() {
    return this.getNumberAttribute('root_volume_iops');
  }

  // root_volume_optimization - computed: true, optional: false, required: false
  public get rootVolumeOptimization() {
    return this.getBooleanAttribute('root_volume_optimization');
  }

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_throughput - computed: true, optional: false, required: false
  public get rootVolumeThroughput() {
    return this.getNumberAttribute('root_volume_throughput');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }

  // security_group_override - computed: true, optional: false, required: false
  public get securityGroupOverride() {
    return this.getStringAttribute('security_group_override');
  }

  // spot_duration_in_minutes - computed: true, optional: false, required: false
  public get spotDurationInMinutes() {
    return this.getNumberAttribute('spot_duration_in_minutes');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // suspend_processes - computed: true, optional: false, required: false
  public get suspendProcesses() {
    return this.getListAttribute('suspend_processes');
  }

  // sysctl_parameters - computed: true, optional: false, required: false
  public get sysctlParameters() {
    return this.getListAttribute('sysctl_parameters');
  }

  // taints - computed: true, optional: false, required: false
  public get taints() {
    return this.getListAttribute('taints');
  }

  // tenancy - computed: true, optional: false, required: false
  public get tenancy() {
    return this.getStringAttribute('tenancy');
  }

  // update_policy - computed: true, optional: false, required: false
  public get updatePolicy() {
    return this.getStringAttribute('update_policy');
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new DataKopsInstanceGroupVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataKopsInstanceGroupVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // warm_pool - computed: true, optional: false, required: false
  private _warmPool = new DataKopsInstanceGroupWarmPoolList(this, "warm_pool", false);
  public get warmPool() {
    return this._warmPool;
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
