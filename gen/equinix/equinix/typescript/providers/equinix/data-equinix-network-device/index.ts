// https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixNetworkDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device#id DataEquinixNetworkDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device#name DataEquinixNetworkDevice#name}
  */
  readonly name?: string;
  /**
  * Device unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device#uuid DataEquinixNetworkDevice#uuid}
  */
  readonly uuid?: string;
  /**
  * Comma Separated List of states to be considered valid when searching by name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device#valid_status_list DataEquinixNetworkDevice#valid_status_list}
  */
  readonly validStatusList?: string;
}
export interface DataEquinixNetworkDeviceClusterDetailsNode0VendorConfiguration {
}

export function dataEquinixNetworkDeviceClusterDetailsNode0VendorConfigurationToTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode0VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceClusterDetailsNode0VendorConfigurationToHclTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode0VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceClusterDetailsNode0VendorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceClusterDetailsNode0VendorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceClusterDetailsNode0VendorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_key - computed: true, optional: false, required: false
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // controller1 - computed: true, optional: false, required: false
  public get controller1() {
    return this.getStringAttribute('controller1');
  }

  // controller_fqdn - computed: true, optional: false, required: false
  public get controllerFqdn() {
    return this.getStringAttribute('controller_fqdn');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // license_id - computed: true, optional: false, required: false
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }

  // license_key - computed: true, optional: false, required: false
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }

  // panorama_auth_key - computed: true, optional: false, required: false
  public get panoramaAuthKey() {
    return this.getStringAttribute('panorama_auth_key');
  }

  // panorama_ip_address - computed: true, optional: false, required: false
  public get panoramaIpAddress() {
    return this.getStringAttribute('panorama_ip_address');
  }

  // private_address - computed: true, optional: false, required: false
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }

  // private_cidr_mask - computed: true, optional: false, required: false
  public get privateCidrMask() {
    return this.getStringAttribute('private_cidr_mask');
  }

  // private_gateway - computed: true, optional: false, required: false
  public get privateGateway() {
    return this.getStringAttribute('private_gateway');
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
}

export class DataEquinixNetworkDeviceClusterDetailsNode0VendorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceClusterDetailsNode0VendorConfigurationOutputReference {
    return new DataEquinixNetworkDeviceClusterDetailsNode0VendorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceClusterDetailsNode0 {
}

export function dataEquinixNetworkDeviceClusterDetailsNode0ToTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceClusterDetailsNode0ToHclTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceClusterDetailsNode0OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceClusterDetailsNode0 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceClusterDetailsNode0 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_file_id - computed: true, optional: false, required: false
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }

  // license_token - computed: true, optional: false, required: false
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor_configuration - computed: true, optional: false, required: false
  private _vendorConfiguration = new DataEquinixNetworkDeviceClusterDetailsNode0VendorConfigurationList(this, "vendor_configuration", false);
  public get vendorConfiguration() {
    return this._vendorConfiguration;
  }
}

export class DataEquinixNetworkDeviceClusterDetailsNode0List extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceClusterDetailsNode0OutputReference {
    return new DataEquinixNetworkDeviceClusterDetailsNode0OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceClusterDetailsNode1VendorConfiguration {
}

export function dataEquinixNetworkDeviceClusterDetailsNode1VendorConfigurationToTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode1VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceClusterDetailsNode1VendorConfigurationToHclTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode1VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceClusterDetailsNode1VendorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceClusterDetailsNode1VendorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceClusterDetailsNode1VendorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_key - computed: true, optional: false, required: false
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // controller1 - computed: true, optional: false, required: false
  public get controller1() {
    return this.getStringAttribute('controller1');
  }

  // controller_fqdn - computed: true, optional: false, required: false
  public get controllerFqdn() {
    return this.getStringAttribute('controller_fqdn');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // license_id - computed: true, optional: false, required: false
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }

  // license_key - computed: true, optional: false, required: false
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }

  // panorama_auth_key - computed: true, optional: false, required: false
  public get panoramaAuthKey() {
    return this.getStringAttribute('panorama_auth_key');
  }

  // panorama_ip_address - computed: true, optional: false, required: false
  public get panoramaIpAddress() {
    return this.getStringAttribute('panorama_ip_address');
  }

  // private_address - computed: true, optional: false, required: false
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }

  // private_cidr_mask - computed: true, optional: false, required: false
  public get privateCidrMask() {
    return this.getStringAttribute('private_cidr_mask');
  }

  // private_gateway - computed: true, optional: false, required: false
  public get privateGateway() {
    return this.getStringAttribute('private_gateway');
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
}

export class DataEquinixNetworkDeviceClusterDetailsNode1VendorConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceClusterDetailsNode1VendorConfigurationOutputReference {
    return new DataEquinixNetworkDeviceClusterDetailsNode1VendorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceClusterDetailsNode1 {
}

export function dataEquinixNetworkDeviceClusterDetailsNode1ToTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceClusterDetailsNode1ToHclTerraform(struct?: DataEquinixNetworkDeviceClusterDetailsNode1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceClusterDetailsNode1OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceClusterDetailsNode1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceClusterDetailsNode1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_file_id - computed: true, optional: false, required: false
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }

  // license_token - computed: true, optional: false, required: false
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor_configuration - computed: true, optional: false, required: false
  private _vendorConfiguration = new DataEquinixNetworkDeviceClusterDetailsNode1VendorConfigurationList(this, "vendor_configuration", false);
  public get vendorConfiguration() {
    return this._vendorConfiguration;
  }
}

export class DataEquinixNetworkDeviceClusterDetailsNode1List extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceClusterDetailsNode1OutputReference {
    return new DataEquinixNetworkDeviceClusterDetailsNode1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceClusterDetails {
}

export function dataEquinixNetworkDeviceClusterDetailsToTerraform(struct?: DataEquinixNetworkDeviceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceClusterDetailsToHclTerraform(struct?: DataEquinixNetworkDeviceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceClusterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceClusterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceClusterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // node0 - computed: true, optional: false, required: false
  private _node0 = new DataEquinixNetworkDeviceClusterDetailsNode0List(this, "node0", false);
  public get node0() {
    return this._node0;
  }

  // node1 - computed: true, optional: false, required: false
  private _node1 = new DataEquinixNetworkDeviceClusterDetailsNode1List(this, "node1", false);
  public get node1() {
    return this._node1;
  }

  // num_of_nodes - computed: true, optional: false, required: false
  public get numOfNodes() {
    return this.getNumberAttribute('num_of_nodes');
  }
}

export class DataEquinixNetworkDeviceClusterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceClusterDetailsOutputReference {
    return new DataEquinixNetworkDeviceClusterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceInterface {
}

export function dataEquinixNetworkDeviceInterfaceToTerraform(struct?: DataEquinixNetworkDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceInterfaceToHclTerraform(struct?: DataEquinixNetworkDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_type - computed: true, optional: false, required: false
  public get assignedType() {
    return this.getStringAttribute('assigned_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataEquinixNetworkDeviceInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceInterfaceOutputReference {
    return new DataEquinixNetworkDeviceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceSecondaryDeviceInterface {
}

export function dataEquinixNetworkDeviceSecondaryDeviceInterfaceToTerraform(struct?: DataEquinixNetworkDeviceSecondaryDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceSecondaryDeviceInterfaceToHclTerraform(struct?: DataEquinixNetworkDeviceSecondaryDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceSecondaryDeviceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceSecondaryDeviceInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceSecondaryDeviceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_type - computed: true, optional: false, required: false
  public get assignedType() {
    return this.getStringAttribute('assigned_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataEquinixNetworkDeviceSecondaryDeviceInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceSecondaryDeviceInterfaceOutputReference {
    return new DataEquinixNetworkDeviceSecondaryDeviceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceSecondaryDeviceSshKey {
}

export function dataEquinixNetworkDeviceSecondaryDeviceSshKeyToTerraform(struct?: DataEquinixNetworkDeviceSecondaryDeviceSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceSecondaryDeviceSshKeyToHclTerraform(struct?: DataEquinixNetworkDeviceSecondaryDeviceSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceSecondaryDeviceSshKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceSecondaryDeviceSshKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceSecondaryDeviceSshKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataEquinixNetworkDeviceSecondaryDeviceSshKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceSecondaryDeviceSshKeyOutputReference {
    return new DataEquinixNetworkDeviceSecondaryDeviceSshKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceSecondaryDevice {
}

export function dataEquinixNetworkDeviceSecondaryDeviceToTerraform(struct?: DataEquinixNetworkDeviceSecondaryDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceSecondaryDeviceToHclTerraform(struct?: DataEquinixNetworkDeviceSecondaryDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceSecondaryDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceSecondaryDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceSecondaryDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }

  // acl_template_id - computed: true, optional: false, required: false
  public get aclTemplateId() {
    return this.getStringAttribute('acl_template_id');
  }

  // additional_bandwidth - computed: true, optional: false, required: false
  public get additionalBandwidth() {
    return this.getNumberAttribute('additional_bandwidth');
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // cloud_init_file_id - computed: true, optional: false, required: false
  public get cloudInitFileId() {
    return this.getStringAttribute('cloud_init_file_id');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataEquinixNetworkDeviceSecondaryDeviceInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // license_file - computed: true, optional: false, required: false
  public get licenseFile() {
    return this.getStringAttribute('license_file');
  }

  // license_file_id - computed: true, optional: false, required: false
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }

  // license_status - computed: true, optional: false, required: false
  public get licenseStatus() {
    return this.getStringAttribute('license_status');
  }

  // license_token - computed: true, optional: false, required: false
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // mgmt_acl_template_uuid - computed: true, optional: false, required: false
  public get mgmtAclTemplateUuid() {
    return this.getStringAttribute('mgmt_acl_template_uuid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // redundancy_type - computed: true, optional: false, required: false
  public get redundancyType() {
    return this.getStringAttribute('redundancy_type');
  }

  // redundant_id - computed: true, optional: false, required: false
  public get redundantId() {
    return this.getStringAttribute('redundant_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // ssh_ip_address - computed: true, optional: false, required: false
  public get sshIpAddress() {
    return this.getStringAttribute('ssh_ip_address');
  }

  // ssh_ip_fqdn - computed: true, optional: false, required: false
  public get sshIpFqdn() {
    return this.getStringAttribute('ssh_ip_fqdn');
  }

  // ssh_key - computed: true, optional: false, required: false
  private _sshKey = new DataEquinixNetworkDeviceSecondaryDeviceSshKeyList(this, "ssh_key", true);
  public get sshKey() {
    return this._sshKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor_configuration - computed: true, optional: false, required: false
  private _vendorConfiguration = new cdktf.StringMap(this, "vendor_configuration");
  public get vendorConfiguration() {
    return this._vendorConfiguration;
  }

  // wan_interface_id - computed: true, optional: false, required: false
  public get wanInterfaceId() {
    return this.getStringAttribute('wan_interface_id');
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }
}

export class DataEquinixNetworkDeviceSecondaryDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceSecondaryDeviceOutputReference {
    return new DataEquinixNetworkDeviceSecondaryDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixNetworkDeviceSshKey {
}

export function dataEquinixNetworkDeviceSshKeyToTerraform(struct?: DataEquinixNetworkDeviceSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixNetworkDeviceSshKeyToHclTerraform(struct?: DataEquinixNetworkDeviceSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixNetworkDeviceSshKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixNetworkDeviceSshKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixNetworkDeviceSshKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataEquinixNetworkDeviceSshKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixNetworkDeviceSshKeyOutputReference {
    return new DataEquinixNetworkDeviceSshKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device equinix_network_device}
*/
export class DataEquinixNetworkDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixNetworkDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixNetworkDevice to import
  * @param importFromId The id of the existing DataEquinixNetworkDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixNetworkDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/data-sources/network_device equinix_network_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixNetworkDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEquinixNetworkDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_device',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.0',
        providerVersionConstraint: '4.11.0'
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
    this._name = config.name;
    this._uuid = config.uuid;
    this._validStatusList = config.validStatusList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }

  // acl_template_id - computed: true, optional: false, required: false
  public get aclTemplateId() {
    return this.getStringAttribute('acl_template_id');
  }

  // additional_bandwidth - computed: true, optional: false, required: false
  public get additionalBandwidth() {
    return this.getNumberAttribute('additional_bandwidth');
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // byol - computed: true, optional: false, required: false
  public get byol() {
    return this.getBooleanAttribute('byol');
  }

  // cluster_details - computed: true, optional: false, required: false
  private _clusterDetails = new DataEquinixNetworkDeviceClusterDetailsList(this, "cluster_details", false);
  public get clusterDetails() {
    return this._clusterDetails;
  }

  // connectivity - computed: true, optional: false, required: false
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }

  // core_count - computed: true, optional: false, required: false
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }

  // diverse_device_id - computed: true, optional: false, required: false
  public get diverseDeviceId() {
    return this.getStringAttribute('diverse_device_id');
  }

  // diverse_device_name - computed: true, optional: false, required: false
  public get diverseDeviceName() {
    return this.getStringAttribute('diverse_device_name');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
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

  // interface - computed: true, optional: false, required: false
  private _interface = new DataEquinixNetworkDeviceInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // interface_count - computed: true, optional: false, required: false
  public get interfaceCount() {
    return this.getNumberAttribute('interface_count');
  }

  // license_file - computed: true, optional: false, required: false
  public get licenseFile() {
    return this.getStringAttribute('license_file');
  }

  // license_file_id - computed: true, optional: false, required: false
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }

  // license_status - computed: true, optional: false, required: false
  public get licenseStatus() {
    return this.getStringAttribute('license_status');
  }

  // license_token - computed: true, optional: false, required: false
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }

  // metro_code - computed: true, optional: false, required: false
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }

  // mgmt_acl_template_uuid - computed: true, optional: false, required: false
  public get mgmtAclTemplateUuid() {
    return this.getStringAttribute('mgmt_acl_template_uuid');
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // order_reference - computed: true, optional: false, required: false
  public get orderReference() {
    return this.getStringAttribute('order_reference');
  }

  // package_code - computed: true, optional: false, required: false
  public get packageCode() {
    return this.getStringAttribute('package_code');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // purchase_order_number - computed: true, optional: false, required: false
  public get purchaseOrderNumber() {
    return this.getStringAttribute('purchase_order_number');
  }

  // redundancy_type - computed: true, optional: false, required: false
  public get redundancyType() {
    return this.getStringAttribute('redundancy_type');
  }

  // redundant_id - computed: true, optional: false, required: false
  public get redundantId() {
    return this.getStringAttribute('redundant_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secondary_device - computed: true, optional: false, required: false
  private _secondaryDevice = new DataEquinixNetworkDeviceSecondaryDeviceList(this, "secondary_device", false);
  public get secondaryDevice() {
    return this._secondaryDevice;
  }

  // self_managed - computed: true, optional: false, required: false
  public get selfManaged() {
    return this.getBooleanAttribute('self_managed');
  }

  // ssh_ip_address - computed: true, optional: false, required: false
  public get sshIpAddress() {
    return this.getStringAttribute('ssh_ip_address');
  }

  // ssh_ip_fqdn - computed: true, optional: false, required: false
  public get sshIpFqdn() {
    return this.getStringAttribute('ssh_ip_fqdn');
  }

  // ssh_key - computed: true, optional: false, required: false
  private _sshKey = new DataEquinixNetworkDeviceSshKeyList(this, "ssh_key", true);
  public get sshKey() {
    return this._sshKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // term_length - computed: true, optional: false, required: false
  public get termLength() {
    return this.getNumberAttribute('term_length');
  }

  // throughput - computed: true, optional: false, required: false
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }

  // throughput_unit - computed: true, optional: false, required: false
  public get throughputUnit() {
    return this.getStringAttribute('throughput_unit');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getNumberAttribute('tier');
  }

  // type_code - computed: true, optional: false, required: false
  public get typeCode() {
    return this.getStringAttribute('type_code');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // valid_status_list - computed: false, optional: true, required: false
  private _validStatusList?: string; 
  public get validStatusList() {
    return this.getStringAttribute('valid_status_list');
  }
  public set validStatusList(value: string) {
    this._validStatusList = value;
  }
  public resetValidStatusList() {
    this._validStatusList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validStatusListInput() {
    return this._validStatusList;
  }

  // vendor_configuration - computed: true, optional: false, required: false
  private _vendorConfiguration = new cdktf.StringMap(this, "vendor_configuration");
  public get vendorConfiguration() {
    return this._vendorConfiguration;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // wan_interface_id - computed: true, optional: false, required: false
  public get wanInterfaceId() {
    return this.getStringAttribute('wan_interface_id');
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      valid_status_list: cdktf.stringToTerraform(this._validStatusList),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_status_list: {
        value: cdktf.stringToHclTerraform(this._validStatusList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
