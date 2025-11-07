// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/static_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixStaticRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/static_routes#id DataNutanixStaticRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/static_routes#vpc_name DataNutanixStaticRoutes#vpc_name}
  */
  readonly vpcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/static_routes#vpc_reference_uuid DataNutanixStaticRoutes#vpc_reference_uuid}
  */
  readonly vpcReferenceUuid?: string;
}
export interface DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthop {
}

export function dataNutanixStaticRoutesSpecResourcesDefaultRouteNexthopToTerraform(struct?: DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesSpecResourcesDefaultRouteNexthopToHclTerraform(struct?: DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_connect_virtual_interface_reference - computed: true, optional: false, required: false
  private _directConnectVirtualInterfaceReference = new cdktf.StringMap(this, "direct_connect_virtual_interface_reference");
  public get directConnectVirtualInterfaceReference() {
    return this._directConnectVirtualInterfaceReference;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  private _externalSubnetReference = new cdktf.StringMap(this, "external_subnet_reference");
  public get externalSubnetReference() {
    return this._externalSubnetReference;
  }

  // local_subnet_reference - computed: true, optional: false, required: false
  private _localSubnetReference = new cdktf.StringMap(this, "local_subnet_reference");
  public get localSubnetReference() {
    return this._localSubnetReference;
  }

  // vpn_connection_reference - computed: true, optional: false, required: false
  private _vpnConnectionReference = new cdktf.StringMap(this, "vpn_connection_reference");
  public get vpnConnectionReference() {
    return this._vpnConnectionReference;
  }
}

export class DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthopList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthopOutputReference {
    return new DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthop {
}

export function dataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthopToTerraform(struct?: DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthopToHclTerraform(struct?: DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_connect_virtual_interface_reference - computed: true, optional: false, required: false
  private _directConnectVirtualInterfaceReference = new cdktf.StringMap(this, "direct_connect_virtual_interface_reference");
  public get directConnectVirtualInterfaceReference() {
    return this._directConnectVirtualInterfaceReference;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  private _externalSubnetReference = new cdktf.StringMap(this, "external_subnet_reference");
  public get externalSubnetReference() {
    return this._externalSubnetReference;
  }

  // local_subnet_reference - computed: true, optional: false, required: false
  private _localSubnetReference = new cdktf.StringMap(this, "local_subnet_reference");
  public get localSubnetReference() {
    return this._localSubnetReference;
  }

  // vpn_connection_reference - computed: true, optional: false, required: false
  private _vpnConnectionReference = new cdktf.StringMap(this, "vpn_connection_reference");
  public get vpnConnectionReference() {
    return this._vpnConnectionReference;
  }
}

export class DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthopList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthopOutputReference {
    return new DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesSpecResourcesStaticRoutesListStruct {
}

export function dataNutanixStaticRoutesSpecResourcesStaticRoutesListStructToTerraform(struct?: DataNutanixStaticRoutesSpecResourcesStaticRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesSpecResourcesStaticRoutesListStructToHclTerraform(struct?: DataNutanixStaticRoutesSpecResourcesStaticRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesSpecResourcesStaticRoutesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesSpecResourcesStaticRoutesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesSpecResourcesStaticRoutesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataNutanixStaticRoutesSpecResourcesStaticRoutesListNexthopList(this, "nexthop", false);
  public get nexthop() {
    return this._nexthop;
  }
}

export class DataNutanixStaticRoutesSpecResourcesStaticRoutesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesSpecResourcesStaticRoutesListStructOutputReference {
    return new DataNutanixStaticRoutesSpecResourcesStaticRoutesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesSpecResources {
}

export function dataNutanixStaticRoutesSpecResourcesToTerraform(struct?: DataNutanixStaticRoutesSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesSpecResourcesToHclTerraform(struct?: DataNutanixStaticRoutesSpecResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesSpecResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesSpecResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_route_nexthop - computed: true, optional: false, required: false
  private _defaultRouteNexthop = new DataNutanixStaticRoutesSpecResourcesDefaultRouteNexthopList(this, "default_route_nexthop", false);
  public get defaultRouteNexthop() {
    return this._defaultRouteNexthop;
  }

  // static_routes_list - computed: true, optional: false, required: false
  private _staticRoutesList = new DataNutanixStaticRoutesSpecResourcesStaticRoutesListStructList(this, "static_routes_list", false);
  public get staticRoutesList() {
    return this._staticRoutesList;
  }
}

export class DataNutanixStaticRoutesSpecResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesSpecResourcesOutputReference {
    return new DataNutanixStaticRoutesSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesSpec {
}

export function dataNutanixStaticRoutesSpecToTerraform(struct?: DataNutanixStaticRoutesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesSpecToHclTerraform(struct?: DataNutanixStaticRoutesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataNutanixStaticRoutesSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
}

export class DataNutanixStaticRoutesSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesSpecOutputReference {
    return new DataNutanixStaticRoutesSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusExecutionContext {
}

export function dataNutanixStaticRoutesStatusExecutionContextToTerraform(struct?: DataNutanixStaticRoutesStatusExecutionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusExecutionContextToHclTerraform(struct?: DataNutanixStaticRoutesStatusExecutionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusExecutionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusExecutionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusExecutionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_uuid - computed: true, optional: false, required: false
  public get taskUuid() {
    return this.getListAttribute('task_uuid');
  }
}

export class DataNutanixStaticRoutesStatusExecutionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusExecutionContextOutputReference {
    return new DataNutanixStaticRoutesStatusExecutionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthop {
}

export function dataNutanixStaticRoutesStatusResourcesDefaultRouteNexthopToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesDefaultRouteNexthopToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_connect_virtual_interface_reference - computed: true, optional: false, required: false
  private _directConnectVirtualInterfaceReference = new cdktf.StringMap(this, "direct_connect_virtual_interface_reference");
  public get directConnectVirtualInterfaceReference() {
    return this._directConnectVirtualInterfaceReference;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  private _externalSubnetReference = new cdktf.StringMap(this, "external_subnet_reference");
  public get externalSubnetReference() {
    return this._externalSubnetReference;
  }

  // local_subnet_reference - computed: true, optional: false, required: false
  private _localSubnetReference = new cdktf.StringMap(this, "local_subnet_reference");
  public get localSubnetReference() {
    return this._localSubnetReference;
  }

  // nexthop_ip_address - computed: true, optional: false, required: false
  public get nexthopIpAddress() {
    return this.getStringAttribute('nexthop_ip_address');
  }

  // vpn_connection_reference - computed: true, optional: false, required: false
  private _vpnConnectionReference = new cdktf.StringMap(this, "vpn_connection_reference");
  public get vpnConnectionReference() {
    return this._vpnConnectionReference;
  }
}

export class DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthopList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthopOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesDefaultRoute {
}

export function dataNutanixStaticRoutesStatusResourcesDefaultRouteToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesDefaultRouteToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDefaultRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesDefaultRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesDefaultRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesDefaultRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataNutanixStaticRoutesStatusResourcesDefaultRouteNexthopList(this, "nexthop", false);
  public get nexthop() {
    return this._nexthop;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataNutanixStaticRoutesStatusResourcesDefaultRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesDefaultRouteOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesDefaultRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthop {
}

export function dataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthopToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthopToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_connect_virtual_interface_reference - computed: true, optional: false, required: false
  private _directConnectVirtualInterfaceReference = new cdktf.StringMap(this, "direct_connect_virtual_interface_reference");
  public get directConnectVirtualInterfaceReference() {
    return this._directConnectVirtualInterfaceReference;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  private _externalSubnetReference = new cdktf.StringMap(this, "external_subnet_reference");
  public get externalSubnetReference() {
    return this._externalSubnetReference;
  }

  // local_subnet_reference - computed: true, optional: false, required: false
  private _localSubnetReference = new cdktf.StringMap(this, "local_subnet_reference");
  public get localSubnetReference() {
    return this._localSubnetReference;
  }

  // nexthop_ip_address - computed: true, optional: false, required: false
  public get nexthopIpAddress() {
    return this.getStringAttribute('nexthop_ip_address');
  }

  // vpn_connection_reference - computed: true, optional: false, required: false
  private _vpnConnectionReference = new cdktf.StringMap(this, "vpn_connection_reference");
  public get vpnConnectionReference() {
    return this._vpnConnectionReference;
  }
}

export class DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthopList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthopOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStruct {
}

export function dataNutanixStaticRoutesStatusResourcesDynamicRoutesListStructToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesDynamicRoutesListStructToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataNutanixStaticRoutesStatusResourcesDynamicRoutesListNexthopList(this, "nexthop", false);
  public get nexthop() {
    return this._nexthop;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStructOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthop {
}

export function dataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthopToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthopToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_connect_virtual_interface_reference - computed: true, optional: false, required: false
  private _directConnectVirtualInterfaceReference = new cdktf.StringMap(this, "direct_connect_virtual_interface_reference");
  public get directConnectVirtualInterfaceReference() {
    return this._directConnectVirtualInterfaceReference;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  private _externalSubnetReference = new cdktf.StringMap(this, "external_subnet_reference");
  public get externalSubnetReference() {
    return this._externalSubnetReference;
  }

  // local_subnet_reference - computed: true, optional: false, required: false
  private _localSubnetReference = new cdktf.StringMap(this, "local_subnet_reference");
  public get localSubnetReference() {
    return this._localSubnetReference;
  }

  // nexthop_ip_address - computed: true, optional: false, required: false
  public get nexthopIpAddress() {
    return this.getStringAttribute('nexthop_ip_address');
  }

  // vpn_connection_reference - computed: true, optional: false, required: false
  private _vpnConnectionReference = new cdktf.StringMap(this, "vpn_connection_reference");
  public get vpnConnectionReference() {
    return this._vpnConnectionReference;
  }
}

export class DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthopList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthopOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesLocalRoutesListStruct {
}

export function dataNutanixStaticRoutesStatusResourcesLocalRoutesListStructToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesLocalRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesLocalRoutesListStructToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesLocalRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesLocalRoutesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesLocalRoutesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesLocalRoutesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataNutanixStaticRoutesStatusResourcesLocalRoutesListNexthopList(this, "nexthop", false);
  public get nexthop() {
    return this._nexthop;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataNutanixStaticRoutesStatusResourcesLocalRoutesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesLocalRoutesListStructOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesLocalRoutesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthop {
}

export function dataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthopToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthopToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direct_connect_virtual_interface_reference - computed: true, optional: false, required: false
  private _directConnectVirtualInterfaceReference = new cdktf.StringMap(this, "direct_connect_virtual_interface_reference");
  public get directConnectVirtualInterfaceReference() {
    return this._directConnectVirtualInterfaceReference;
  }

  // external_subnet_reference - computed: true, optional: false, required: false
  private _externalSubnetReference = new cdktf.StringMap(this, "external_subnet_reference");
  public get externalSubnetReference() {
    return this._externalSubnetReference;
  }

  // local_subnet_reference - computed: true, optional: false, required: false
  private _localSubnetReference = new cdktf.StringMap(this, "local_subnet_reference");
  public get localSubnetReference() {
    return this._localSubnetReference;
  }

  // nexthop_ip_address - computed: true, optional: false, required: false
  public get nexthopIpAddress() {
    return this.getStringAttribute('nexthop_ip_address');
  }

  // vpn_connection_reference - computed: true, optional: false, required: false
  private _vpnConnectionReference = new cdktf.StringMap(this, "vpn_connection_reference");
  public get vpnConnectionReference() {
    return this._vpnConnectionReference;
  }
}

export class DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthopList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthopOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResourcesStaticRoutesListStruct {
}

export function dataNutanixStaticRoutesStatusResourcesStaticRoutesListStructToTerraform(struct?: DataNutanixStaticRoutesStatusResourcesStaticRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesStaticRoutesListStructToHclTerraform(struct?: DataNutanixStaticRoutesStatusResourcesStaticRoutesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesStaticRoutesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResourcesStaticRoutesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResourcesStaticRoutesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataNutanixStaticRoutesStatusResourcesStaticRoutesListNexthopList(this, "nexthop", false);
  public get nexthop() {
    return this._nexthop;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataNutanixStaticRoutesStatusResourcesStaticRoutesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesStaticRoutesListStructOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesStaticRoutesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatusResources {
}

export function dataNutanixStaticRoutesStatusResourcesToTerraform(struct?: DataNutanixStaticRoutesStatusResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusResourcesToHclTerraform(struct?: DataNutanixStaticRoutesStatusResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatusResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatusResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_route - computed: true, optional: false, required: false
  private _defaultRoute = new DataNutanixStaticRoutesStatusResourcesDefaultRouteList(this, "default_route", false);
  public get defaultRoute() {
    return this._defaultRoute;
  }

  // dynamic_routes_list - computed: true, optional: false, required: false
  private _dynamicRoutesList = new DataNutanixStaticRoutesStatusResourcesDynamicRoutesListStructList(this, "dynamic_routes_list", false);
  public get dynamicRoutesList() {
    return this._dynamicRoutesList;
  }

  // local_routes_list - computed: true, optional: false, required: false
  private _localRoutesList = new DataNutanixStaticRoutesStatusResourcesLocalRoutesListStructList(this, "local_routes_list", false);
  public get localRoutesList() {
    return this._localRoutesList;
  }

  // static_routes_list - computed: true, optional: false, required: false
  private _staticRoutesList = new DataNutanixStaticRoutesStatusResourcesStaticRoutesListStructList(this, "static_routes_list", false);
  public get staticRoutesList() {
    return this._staticRoutesList;
  }
}

export class DataNutanixStaticRoutesStatusResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusResourcesOutputReference {
    return new DataNutanixStaticRoutesStatusResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixStaticRoutesStatus {
}

export function dataNutanixStaticRoutesStatusToTerraform(struct?: DataNutanixStaticRoutesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixStaticRoutesStatusToHclTerraform(struct?: DataNutanixStaticRoutesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixStaticRoutesStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixStaticRoutesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixStaticRoutesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_context - computed: true, optional: false, required: false
  private _executionContext = new DataNutanixStaticRoutesStatusExecutionContextList(this, "execution_context", false);
  public get executionContext() {
    return this._executionContext;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataNutanixStaticRoutesStatusResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataNutanixStaticRoutesStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixStaticRoutesStatusOutputReference {
    return new DataNutanixStaticRoutesStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/static_routes nutanix_static_routes}
*/
export class DataNutanixStaticRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_static_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixStaticRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixStaticRoutes to import
  * @param importFromId The id of the existing DataNutanixStaticRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/static_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixStaticRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_static_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/data-sources/static_routes nutanix_static_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixStaticRoutesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixStaticRoutesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_static_routes',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._vpcName = config.vpcName;
    this._vpcReferenceUuid = config.vpcReferenceUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataNutanixStaticRoutesSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataNutanixStaticRoutesStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // vpc_name - computed: false, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // vpc_reference_uuid - computed: false, optional: true, required: false
  private _vpcReferenceUuid?: string; 
  public get vpcReferenceUuid() {
    return this.getStringAttribute('vpc_reference_uuid');
  }
  public set vpcReferenceUuid(value: string) {
    this._vpcReferenceUuid = value;
  }
  public resetVpcReferenceUuid() {
    this._vpcReferenceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcReferenceUuidInput() {
    return this._vpcReferenceUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      vpc_reference_uuid: cdktf.stringToTerraform(this._vpcReferenceUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reference_uuid: {
        value: cdktf.stringToHclTerraform(this._vpcReferenceUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
