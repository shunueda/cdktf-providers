// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/system#device DataIosxeSystem#device}
  */
  readonly device?: string;
}
export interface DataIosxeSystemBootSystemBootfiles {
}

export function dataIosxeSystemBootSystemBootfilesToTerraform(struct?: DataIosxeSystemBootSystemBootfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemBootSystemBootfilesToHclTerraform(struct?: DataIosxeSystemBootSystemBootfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemBootSystemBootfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemBootSystemBootfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemBootSystemBootfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataIosxeSystemBootSystemBootfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemBootSystemBootfilesOutputReference {
    return new DataIosxeSystemBootSystemBootfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemBootSystemFlashFiles {
}

export function dataIosxeSystemBootSystemFlashFilesToTerraform(struct?: DataIosxeSystemBootSystemFlashFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemBootSystemFlashFilesToHclTerraform(struct?: DataIosxeSystemBootSystemFlashFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemBootSystemFlashFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemBootSystemFlashFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemBootSystemFlashFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataIosxeSystemBootSystemFlashFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemBootSystemFlashFilesOutputReference {
    return new DataIosxeSystemBootSystemFlashFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemIpDomainLookupVrfs {
}

export function dataIosxeSystemIpDomainLookupVrfsToTerraform(struct?: DataIosxeSystemIpDomainLookupVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemIpDomainLookupVrfsToHclTerraform(struct?: DataIosxeSystemIpDomainLookupVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemIpDomainLookupVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemIpDomainLookupVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemIpDomainLookupVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('source_interface_five_gigabit_ethernet');
  }

  // source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('source_interface_forty_gigabit_ethernet');
  }

  // source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('source_interface_gigabit_ethernet');
  }

  // source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('source_interface_hundred_gigabit_ethernet');
  }

  // source_interface_loopback - computed: true, optional: false, required: false
  public get sourceInterfaceLoopback() {
    return this.getNumberAttribute('source_interface_loopback');
  }

  // source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('source_interface_ten_gigabit_ethernet');
  }

  // source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('source_interface_twenty_five_gigabit_ethernet');
  }

  // source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('source_interface_two_gigabit_ethernet');
  }

  // source_interface_vlan - computed: true, optional: false, required: false
  public get sourceInterfaceVlan() {
    return this.getNumberAttribute('source_interface_vlan');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeSystemIpDomainLookupVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemIpDomainLookupVrfsOutputReference {
    return new DataIosxeSystemIpDomainLookupVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemIpHosts {
}

export function dataIosxeSystemIpHostsToTerraform(struct?: DataIosxeSystemIpHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemIpHostsToHclTerraform(struct?: DataIosxeSystemIpHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemIpHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemIpHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemIpHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeSystemIpHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemIpHostsOutputReference {
    return new DataIosxeSystemIpHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemIpHostsVrfHosts {
}

export function dataIosxeSystemIpHostsVrfHostsToTerraform(struct?: DataIosxeSystemIpHostsVrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemIpHostsVrfHostsToHclTerraform(struct?: DataIosxeSystemIpHostsVrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemIpHostsVrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemIpHostsVrfHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemIpHostsVrfHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeSystemIpHostsVrfHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemIpHostsVrfHostsOutputReference {
    return new DataIosxeSystemIpHostsVrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemIpHostsVrf {
}

export function dataIosxeSystemIpHostsVrfToTerraform(struct?: DataIosxeSystemIpHostsVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemIpHostsVrfToHclTerraform(struct?: DataIosxeSystemIpHostsVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemIpHostsVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemIpHostsVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemIpHostsVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataIosxeSystemIpHostsVrfHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeSystemIpHostsVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemIpHostsVrfOutputReference {
    return new DataIosxeSystemIpHostsVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorization {
}

export function dataIosxeSystemIpHttpAuthenticationAaaCommandAuthorizationToTerraform(struct?: DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemIpHttpAuthenticationAaaCommandAuthorizationToHclTerraform(struct?: DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getNumberAttribute('level');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorizationOutputReference {
    return new DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemIpNameServersVrf {
}

export function dataIosxeSystemIpNameServersVrfToTerraform(struct?: DataIosxeSystemIpNameServersVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemIpNameServersVrfToHclTerraform(struct?: DataIosxeSystemIpNameServersVrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemIpNameServersVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemIpNameServersVrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemIpNameServersVrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return this.getListAttribute('servers');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeSystemIpNameServersVrfList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemIpNameServersVrfOutputReference {
    return new DataIosxeSystemIpNameServersVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemMulticastRoutingVrfs {
}

export function dataIosxeSystemMulticastRoutingVrfsToTerraform(struct?: DataIosxeSystemMulticastRoutingVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemMulticastRoutingVrfsToHclTerraform(struct?: DataIosxeSystemMulticastRoutingVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemMulticastRoutingVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemMulticastRoutingVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemMulticastRoutingVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // distributed - computed: true, optional: false, required: false
  public get distributed() {
    return this.getBooleanAttribute('distributed');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeSystemMulticastRoutingVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemMulticastRoutingVrfsOutputReference {
    return new DataIosxeSystemMulticastRoutingVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemPnpProfiles {
}

export function dataIosxeSystemPnpProfilesToTerraform(struct?: DataIosxeSystemPnpProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemPnpProfilesToHclTerraform(struct?: DataIosxeSystemPnpProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemPnpProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemPnpProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemPnpProfiles | undefined) {
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

  // transport_https_ipv4_ipv4_address - computed: true, optional: false, required: false
  public get transportHttpsIpv4Ipv4Address() {
    return this.getStringAttribute('transport_https_ipv4_ipv4_address');
  }

  // transport_https_ipv4_port - computed: true, optional: false, required: false
  public get transportHttpsIpv4Port() {
    return this.getNumberAttribute('transport_https_ipv4_port');
  }
}

export class DataIosxeSystemPnpProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemPnpProfilesOutputReference {
    return new DataIosxeSystemPnpProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemTableMapsMappings {
}

export function dataIosxeSystemTableMapsMappingsToTerraform(struct?: DataIosxeSystemTableMapsMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemTableMapsMappingsToHclTerraform(struct?: DataIosxeSystemTableMapsMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemTableMapsMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemTableMapsMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemTableMapsMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

export class DataIosxeSystemTableMapsMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemTableMapsMappingsOutputReference {
    return new DataIosxeSystemTableMapsMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemTableMaps {
}

export function dataIosxeSystemTableMapsToTerraform(struct?: DataIosxeSystemTableMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemTableMapsToHclTerraform(struct?: DataIosxeSystemTableMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemTableMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemTableMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemTableMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // mappings - computed: true, optional: false, required: false
  private _mappings = new DataIosxeSystemTableMapsMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeSystemTableMapsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemTableMapsOutputReference {
    return new DataIosxeSystemTableMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSystemTrackObjects {
}

export function dataIosxeSystemTrackObjectsToTerraform(struct?: DataIosxeSystemTrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSystemTrackObjectsToHclTerraform(struct?: DataIosxeSystemTrackObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSystemTrackObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSystemTrackObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSystemTrackObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_sla_number - computed: true, optional: false, required: false
  public get ipSlaNumber() {
    return this.getNumberAttribute('ip_sla_number');
  }

  // ip_sla_reachability - computed: true, optional: false, required: false
  public get ipSlaReachability() {
    return this.getBooleanAttribute('ip_sla_reachability');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }
}

export class DataIosxeSystemTrackObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSystemTrackObjectsOutputReference {
    return new DataIosxeSystemTrackObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/system iosxe_system}
*/
export class DataIosxeSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeSystem to import
  * @param importFromId The id of the existing DataIosxeSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/data-sources/system iosxe_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeSystemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeSystemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_system',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_session_mac_move_deny - computed: true, optional: false, required: false
  public get accessSessionMacMoveDeny() {
    return this.getBooleanAttribute('access_session_mac_move_deny');
  }

  // archive_log_config_logging_enable - computed: true, optional: false, required: false
  public get archiveLogConfigLoggingEnable() {
    return this.getBooleanAttribute('archive_log_config_logging_enable');
  }

  // archive_log_config_logging_size - computed: true, optional: false, required: false
  public get archiveLogConfigLoggingSize() {
    return this.getNumberAttribute('archive_log_config_logging_size');
  }

  // archive_maximum - computed: true, optional: false, required: false
  public get archiveMaximum() {
    return this.getNumberAttribute('archive_maximum');
  }

  // archive_path - computed: true, optional: false, required: false
  public get archivePath() {
    return this.getStringAttribute('archive_path');
  }

  // archive_time_period - computed: true, optional: false, required: false
  public get archiveTimePeriod() {
    return this.getNumberAttribute('archive_time_period');
  }

  // archive_write_memory - computed: true, optional: false, required: false
  public get archiveWriteMemory() {
    return this.getBooleanAttribute('archive_write_memory');
  }

  // authentication_mac_move_deny_uncontrolled - computed: true, optional: false, required: false
  public get authenticationMacMoveDenyUncontrolled() {
    return this.getBooleanAttribute('authentication_mac_move_deny_uncontrolled');
  }

  // authentication_mac_move_permit - computed: true, optional: false, required: false
  public get authenticationMacMovePermit() {
    return this.getBooleanAttribute('authentication_mac_move_permit');
  }

  // boot_system_bootfiles - computed: true, optional: false, required: false
  private _bootSystemBootfiles = new DataIosxeSystemBootSystemBootfilesList(this, "boot_system_bootfiles", false);
  public get bootSystemBootfiles() {
    return this._bootSystemBootfiles;
  }

  // boot_system_flash_files - computed: true, optional: false, required: false
  private _bootSystemFlashFiles = new DataIosxeSystemBootSystemFlashFilesList(this, "boot_system_flash_files", false);
  public get bootSystemFlashFiles() {
    return this._bootSystemFlashFiles;
  }

  // call_home_cisco_tac_1_destination_transport_method - computed: true, optional: false, required: false
  public get callHomeCiscoTac1DestinationTransportMethod() {
    return this.getStringAttribute('call_home_cisco_tac_1_destination_transport_method');
  }

  // call_home_cisco_tac_1_profile_active - computed: true, optional: false, required: false
  public get callHomeCiscoTac1ProfileActive() {
    return this.getBooleanAttribute('call_home_cisco_tac_1_profile_active');
  }

  // call_home_contact_email - computed: true, optional: false, required: false
  public get callHomeContactEmail() {
    return this.getStringAttribute('call_home_contact_email');
  }

  // cisp_enable - computed: true, optional: false, required: false
  public get cispEnable() {
    return this.getBooleanAttribute('cisp_enable');
  }

  // control_plane_service_policy_input - computed: true, optional: false, required: false
  public get controlPlaneServicePolicyInput() {
    return this.getStringAttribute('control_plane_service_policy_input');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // device_classifier - computed: true, optional: false, required: false
  public get deviceClassifier() {
    return this.getBooleanAttribute('device_classifier');
  }

  // diagnostic_bootup_level - computed: true, optional: false, required: false
  public get diagnosticBootupLevel() {
    return this.getStringAttribute('diagnostic_bootup_level');
  }

  // diagnostic_event_log_size - computed: true, optional: false, required: false
  public get diagnosticEventLogSize() {
    return this.getNumberAttribute('diagnostic_event_log_size');
  }

  // enable_secret - computed: true, optional: false, required: false
  public get enableSecret() {
    return this.getStringAttribute('enable_secret');
  }

  // enable_secret_level - computed: true, optional: false, required: false
  public get enableSecretLevel() {
    return this.getNumberAttribute('enable_secret_level');
  }

  // enable_secret_type - computed: true, optional: false, required: false
  public get enableSecretType() {
    return this.getStringAttribute('enable_secret_type');
  }

  // epm_logging - computed: true, optional: false, required: false
  public get epmLogging() {
    return this.getBooleanAttribute('epm_logging');
  }

  // ethernet_cfm_alarm_config_delay - computed: true, optional: false, required: false
  public get ethernetCfmAlarmConfigDelay() {
    return this.getNumberAttribute('ethernet_cfm_alarm_config_delay');
  }

  // ethernet_cfm_alarm_config_reset - computed: true, optional: false, required: false
  public get ethernetCfmAlarmConfigReset() {
    return this.getNumberAttribute('ethernet_cfm_alarm_config_reset');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_bgp_community_new_format - computed: true, optional: false, required: false
  public get ipBgpCommunityNewFormat() {
    return this.getBooleanAttribute('ip_bgp_community_new_format');
  }

  // ip_cef_load_sharing_algorithm_include_ports_destination - computed: true, optional: false, required: false
  public get ipCefLoadSharingAlgorithmIncludePortsDestination() {
    return this.getBooleanAttribute('ip_cef_load_sharing_algorithm_include_ports_destination');
  }

  // ip_cef_load_sharing_algorithm_include_ports_source - computed: true, optional: false, required: false
  public get ipCefLoadSharingAlgorithmIncludePortsSource() {
    return this.getBooleanAttribute('ip_cef_load_sharing_algorithm_include_ports_source');
  }

  // ip_default_gateway - computed: true, optional: false, required: false
  public get ipDefaultGateway() {
    return this.getStringAttribute('ip_default_gateway');
  }

  // ip_domain_list_names - computed: true, optional: false, required: false
  public get ipDomainListNames() {
    return this.getListAttribute('ip_domain_list_names');
  }

  // ip_domain_list_vrf - computed: true, optional: false, required: false
  public get ipDomainListVrf() {
    return this.getStringAttribute('ip_domain_list_vrf');
  }

  // ip_domain_list_vrf_domain - computed: true, optional: false, required: false
  public get ipDomainListVrfDomain() {
    return this.getStringAttribute('ip_domain_list_vrf_domain');
  }

  // ip_domain_lookup - computed: true, optional: false, required: false
  public get ipDomainLookup() {
    return this.getBooleanAttribute('ip_domain_lookup');
  }

  // ip_domain_lookup_nsap - computed: true, optional: false, required: false
  public get ipDomainLookupNsap() {
    return this.getBooleanAttribute('ip_domain_lookup_nsap');
  }

  // ip_domain_lookup_recursive - computed: true, optional: false, required: false
  public get ipDomainLookupRecursive() {
    return this.getBooleanAttribute('ip_domain_lookup_recursive');
  }

  // ip_domain_lookup_source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_five_gigabit_ethernet');
  }

  // ip_domain_lookup_source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_forty_gigabit_ethernet');
  }

  // ip_domain_lookup_source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_gigabit_ethernet');
  }

  // ip_domain_lookup_source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_hundred_gigabit_ethernet');
  }

  // ip_domain_lookup_source_interface_loopback - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_domain_lookup_source_interface_loopback');
  }

  // ip_domain_lookup_source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_ten_gigabit_ethernet');
  }

  // ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_twenty_five_gigabit_ethernet');
  }

  // ip_domain_lookup_source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_domain_lookup_source_interface_two_gigabit_ethernet');
  }

  // ip_domain_lookup_source_interface_vlan - computed: true, optional: false, required: false
  public get ipDomainLookupSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_domain_lookup_source_interface_vlan');
  }

  // ip_domain_lookup_vrfs - computed: true, optional: false, required: false
  private _ipDomainLookupVrfs = new DataIosxeSystemIpDomainLookupVrfsList(this, "ip_domain_lookup_vrfs", false);
  public get ipDomainLookupVrfs() {
    return this._ipDomainLookupVrfs;
  }

  // ip_domain_name - computed: true, optional: false, required: false
  public get ipDomainName() {
    return this.getStringAttribute('ip_domain_name');
  }

  // ip_forward_protocol_nd - computed: true, optional: false, required: false
  public get ipForwardProtocolNd() {
    return this.getBooleanAttribute('ip_forward_protocol_nd');
  }

  // ip_ftp_passive - computed: true, optional: false, required: false
  public get ipFtpPassive() {
    return this.getBooleanAttribute('ip_ftp_passive');
  }

  // ip_hosts - computed: true, optional: false, required: false
  private _ipHosts = new DataIosxeSystemIpHostsList(this, "ip_hosts", false);
  public get ipHosts() {
    return this._ipHosts;
  }

  // ip_hosts_vrf - computed: true, optional: false, required: false
  private _ipHostsVrf = new DataIosxeSystemIpHostsVrfList(this, "ip_hosts_vrf", false);
  public get ipHostsVrf() {
    return this._ipHostsVrf;
  }

  // ip_http_access_class - computed: true, optional: false, required: false
  public get ipHttpAccessClass() {
    return this.getNumberAttribute('ip_http_access_class');
  }

  // ip_http_active_session_modules - computed: true, optional: false, required: false
  public get ipHttpActiveSessionModules() {
    return this.getStringAttribute('ip_http_active_session_modules');
  }

  // ip_http_authentication_aaa - computed: true, optional: false, required: false
  public get ipHttpAuthenticationAaa() {
    return this.getBooleanAttribute('ip_http_authentication_aaa');
  }

  // ip_http_authentication_aaa_command_authorization - computed: true, optional: false, required: false
  private _ipHttpAuthenticationAaaCommandAuthorization = new DataIosxeSystemIpHttpAuthenticationAaaCommandAuthorizationList(this, "ip_http_authentication_aaa_command_authorization", false);
  public get ipHttpAuthenticationAaaCommandAuthorization() {
    return this._ipHttpAuthenticationAaaCommandAuthorization;
  }

  // ip_http_authentication_aaa_exec_authorization - computed: true, optional: false, required: false
  public get ipHttpAuthenticationAaaExecAuthorization() {
    return this.getStringAttribute('ip_http_authentication_aaa_exec_authorization');
  }

  // ip_http_authentication_aaa_login_authentication - computed: true, optional: false, required: false
  public get ipHttpAuthenticationAaaLoginAuthentication() {
    return this.getStringAttribute('ip_http_authentication_aaa_login_authentication');
  }

  // ip_http_authentication_local - computed: true, optional: false, required: false
  public get ipHttpAuthenticationLocal() {
    return this.getBooleanAttribute('ip_http_authentication_local');
  }

  // ip_http_client_secure_trustpoint - computed: true, optional: false, required: false
  public get ipHttpClientSecureTrustpoint() {
    return this.getStringAttribute('ip_http_client_secure_trustpoint');
  }

  // ip_http_client_source_interface - computed: true, optional: false, required: false
  public get ipHttpClientSourceInterface() {
    return this.getStringAttribute('ip_http_client_source_interface');
  }

  // ip_http_max_connections - computed: true, optional: false, required: false
  public get ipHttpMaxConnections() {
    return this.getNumberAttribute('ip_http_max_connections');
  }

  // ip_http_secure_active_session_modules - computed: true, optional: false, required: false
  public get ipHttpSecureActiveSessionModules() {
    return this.getStringAttribute('ip_http_secure_active_session_modules');
  }

  // ip_http_secure_server - computed: true, optional: false, required: false
  public get ipHttpSecureServer() {
    return this.getBooleanAttribute('ip_http_secure_server');
  }

  // ip_http_secure_trustpoint - computed: true, optional: false, required: false
  public get ipHttpSecureTrustpoint() {
    return this.getStringAttribute('ip_http_secure_trustpoint');
  }

  // ip_http_server - computed: true, optional: false, required: false
  public get ipHttpServer() {
    return this.getBooleanAttribute('ip_http_server');
  }

  // ip_http_tls_version - computed: true, optional: false, required: false
  public get ipHttpTlsVersion() {
    return this.getStringAttribute('ip_http_tls_version');
  }

  // ip_multicast_route_limit - computed: true, optional: false, required: false
  public get ipMulticastRouteLimit() {
    return this.getNumberAttribute('ip_multicast_route_limit');
  }

  // ip_multicast_routing - computed: true, optional: false, required: false
  public get ipMulticastRouting() {
    return this.getBooleanAttribute('ip_multicast_routing');
  }

  // ip_multicast_routing_distributed - computed: true, optional: false, required: false
  public get ipMulticastRoutingDistributed() {
    return this.getBooleanAttribute('ip_multicast_routing_distributed');
  }

  // ip_name_servers - computed: true, optional: false, required: false
  public get ipNameServers() {
    return this.getListAttribute('ip_name_servers');
  }

  // ip_name_servers_vrf - computed: true, optional: false, required: false
  private _ipNameServersVrf = new DataIosxeSystemIpNameServersVrfList(this, "ip_name_servers_vrf", false);
  public get ipNameServersVrf() {
    return this._ipNameServersVrf;
  }

  // ip_nbar_classification_dns_classify_by_domain - computed: true, optional: false, required: false
  public get ipNbarClassificationDnsClassifyByDomain() {
    return this.getBooleanAttribute('ip_nbar_classification_dns_classify_by_domain');
  }

  // ip_radius_source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_five_gigabit_ethernet');
  }

  // ip_radius_source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_forty_gigabit_ethernet');
  }

  // ip_radius_source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_gigabit_ethernet');
  }

  // ip_radius_source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_hundred_gigabit_ethernet');
  }

  // ip_radius_source_interface_loopback - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_radius_source_interface_loopback');
  }

  // ip_radius_source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_ten_gigabit_ethernet');
  }

  // ip_radius_source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_twenty_five_gigabit_ethernet');
  }

  // ip_radius_source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_radius_source_interface_two_gigabit_ethernet');
  }

  // ip_radius_source_interface_vlan - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_radius_source_interface_vlan');
  }

  // ip_radius_source_interface_vrf - computed: true, optional: false, required: false
  public get ipRadiusSourceInterfaceVrf() {
    return this.getStringAttribute('ip_radius_source_interface_vrf');
  }

  // ip_routing - computed: true, optional: false, required: false
  public get ipRouting() {
    return this.getBooleanAttribute('ip_routing');
  }

  // ip_routing_protocol_purge_interface - computed: true, optional: false, required: false
  public get ipRoutingProtocolPurgeInterface() {
    return this.getBooleanAttribute('ip_routing_protocol_purge_interface');
  }

  // ip_scp_server_enable - computed: true, optional: false, required: false
  public get ipScpServerEnable() {
    return this.getBooleanAttribute('ip_scp_server_enable');
  }

  // ip_source_route - computed: true, optional: false, required: false
  public get ipSourceRoute() {
    return this.getBooleanAttribute('ip_source_route');
  }

  // ip_ssh_authentication_retries - computed: true, optional: false, required: false
  public get ipSshAuthenticationRetries() {
    return this.getNumberAttribute('ip_ssh_authentication_retries');
  }

  // ip_ssh_bulk_mode - computed: true, optional: false, required: false
  public get ipSshBulkMode() {
    return this.getBooleanAttribute('ip_ssh_bulk_mode');
  }

  // ip_ssh_bulk_mode_window_size - computed: true, optional: false, required: false
  public get ipSshBulkModeWindowSize() {
    return this.getNumberAttribute('ip_ssh_bulk_mode_window_size');
  }

  // ip_ssh_source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_five_gigabit_ethernet');
  }

  // ip_ssh_source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_forty_gigabit_ethernet');
  }

  // ip_ssh_source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_gigabit_ethernet');
  }

  // ip_ssh_source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_hundred_gigabit_ethernet');
  }

  // ip_ssh_source_interface_loopback - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_ssh_source_interface_loopback');
  }

  // ip_ssh_source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_ten_gigabit_ethernet');
  }

  // ip_ssh_source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_twenty_five_gigabit_ethernet');
  }

  // ip_ssh_source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_ssh_source_interface_two_gigabit_ethernet');
  }

  // ip_ssh_source_interface_vlan - computed: true, optional: false, required: false
  public get ipSshSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_ssh_source_interface_vlan');
  }

  // ip_ssh_time_out - computed: true, optional: false, required: false
  public get ipSshTimeOut() {
    return this.getNumberAttribute('ip_ssh_time_out');
  }

  // ip_ssh_version - computed: true, optional: false, required: false
  public get ipSshVersion() {
    return this.getStringAttribute('ip_ssh_version');
  }

  // ip_ssh_version_legacy - computed: true, optional: false, required: false
  public get ipSshVersionLegacy() {
    return this.getNumberAttribute('ip_ssh_version_legacy');
  }

  // ip_tacacs_source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_five_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_forty_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_hundred_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_loopback - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceLoopback() {
    return this.getNumberAttribute('ip_tacacs_source_interface_loopback');
  }

  // ip_tacacs_source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_ten_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_twenty_five_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('ip_tacacs_source_interface_two_gigabit_ethernet');
  }

  // ip_tacacs_source_interface_vlan - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceVlan() {
    return this.getNumberAttribute('ip_tacacs_source_interface_vlan');
  }

  // ip_tacacs_source_interface_vrf - computed: true, optional: false, required: false
  public get ipTacacsSourceInterfaceVrf() {
    return this.getStringAttribute('ip_tacacs_source_interface_vrf');
  }

  // ipv6_cef_load_sharing_algorithm_include_ports_destination - computed: true, optional: false, required: false
  public get ipv6CefLoadSharingAlgorithmIncludePortsDestination() {
    return this.getBooleanAttribute('ipv6_cef_load_sharing_algorithm_include_ports_destination');
  }

  // ipv6_cef_load_sharing_algorithm_include_ports_source - computed: true, optional: false, required: false
  public get ipv6CefLoadSharingAlgorithmIncludePortsSource() {
    return this.getBooleanAttribute('ipv6_cef_load_sharing_algorithm_include_ports_source');
  }

  // ipv6_unicast_routing - computed: true, optional: false, required: false
  public get ipv6UnicastRouting() {
    return this.getBooleanAttribute('ipv6_unicast_routing');
  }

  // login_delay - computed: true, optional: false, required: false
  public get loginDelay() {
    return this.getNumberAttribute('login_delay');
  }

  // login_on_failure - computed: true, optional: false, required: false
  public get loginOnFailure() {
    return this.getBooleanAttribute('login_on_failure');
  }

  // login_on_failure_log - computed: true, optional: false, required: false
  public get loginOnFailureLog() {
    return this.getBooleanAttribute('login_on_failure_log');
  }

  // login_on_success - computed: true, optional: false, required: false
  public get loginOnSuccess() {
    return this.getBooleanAttribute('login_on_success');
  }

  // login_on_success_log - computed: true, optional: false, required: false
  public get loginOnSuccessLog() {
    return this.getBooleanAttribute('login_on_success_log');
  }

  // memory_free_low_watermark_processor - computed: true, optional: false, required: false
  public get memoryFreeLowWatermarkProcessor() {
    return this.getNumberAttribute('memory_free_low_watermark_processor');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // multicast_routing_switch - computed: true, optional: false, required: false
  public get multicastRoutingSwitch() {
    return this.getBooleanAttribute('multicast_routing_switch');
  }

  // multicast_routing_vrfs - computed: true, optional: false, required: false
  private _multicastRoutingVrfs = new DataIosxeSystemMulticastRoutingVrfsList(this, "multicast_routing_vrfs", false);
  public get multicastRoutingVrfs() {
    return this._multicastRoutingVrfs;
  }

  // multilink_ppp_bundle_name - computed: true, optional: false, required: false
  public get multilinkPppBundleName() {
    return this.getStringAttribute('multilink_ppp_bundle_name');
  }

  // pnp_profiles - computed: true, optional: false, required: false
  private _pnpProfiles = new DataIosxeSystemPnpProfilesList(this, "pnp_profiles", false);
  public get pnpProfiles() {
    return this._pnpProfiles;
  }

  // port_channel_load_balance - computed: true, optional: false, required: false
  public get portChannelLoadBalance() {
    return this.getStringAttribute('port_channel_load_balance');
  }

  // redundancy - computed: true, optional: false, required: false
  public get redundancy() {
    return this.getBooleanAttribute('redundancy');
  }

  // redundancy_mode - computed: true, optional: false, required: false
  public get redundancyMode() {
    return this.getStringAttribute('redundancy_mode');
  }

  // security_passwords_min_length - computed: true, optional: false, required: false
  public get securityPasswordsMinLength() {
    return this.getNumberAttribute('security_passwords_min_length');
  }

  // standby_redirects - computed: true, optional: false, required: false
  public get standbyRedirects() {
    return this.getBooleanAttribute('standby_redirects');
  }

  // standby_redirects_enable_disable - computed: true, optional: false, required: false
  public get standbyRedirectsEnableDisable() {
    return this.getStringAttribute('standby_redirects_enable_disable');
  }

  // subscriber_templating - computed: true, optional: false, required: false
  public get subscriberTemplating() {
    return this.getBooleanAttribute('subscriber_templating');
  }

  // table_maps - computed: true, optional: false, required: false
  private _tableMaps = new DataIosxeSystemTableMapsList(this, "table_maps", false);
  public get tableMaps() {
    return this._tableMaps;
  }

  // tftp_source_interface_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get tftpSourceInterfaceFiveGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_five_gigabit_ethernet');
  }

  // tftp_source_interface_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get tftpSourceInterfaceFortyGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_forty_gigabit_ethernet');
  }

  // tftp_source_interface_gigabit_ethernet - computed: true, optional: false, required: false
  public get tftpSourceInterfaceGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_gigabit_ethernet');
  }

  // tftp_source_interface_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get tftpSourceInterfaceHundredGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_hundred_gigabit_ethernet');
  }

  // tftp_source_interface_loopback - computed: true, optional: false, required: false
  public get tftpSourceInterfaceLoopback() {
    return this.getNumberAttribute('tftp_source_interface_loopback');
  }

  // tftp_source_interface_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get tftpSourceInterfaceTenGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_ten_gigabit_ethernet');
  }

  // tftp_source_interface_twenty_five_gigabit_ethernet - computed: true, optional: false, required: false
  public get tftpSourceInterfaceTwentyFiveGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_twenty_five_gigabit_ethernet');
  }

  // tftp_source_interface_two_gigabit_ethernet - computed: true, optional: false, required: false
  public get tftpSourceInterfaceTwoGigabitEthernet() {
    return this.getStringAttribute('tftp_source_interface_two_gigabit_ethernet');
  }

  // tftp_source_interface_vlan - computed: true, optional: false, required: false
  public get tftpSourceInterfaceVlan() {
    return this.getNumberAttribute('tftp_source_interface_vlan');
  }

  // track_objects - computed: true, optional: false, required: false
  private _trackObjects = new DataIosxeSystemTrackObjectsList(this, "track_objects", false);
  public get trackObjects() {
    return this._trackObjects;
  }

  // transceiver_type_all_monitoring - computed: true, optional: false, required: false
  public get transceiverTypeAllMonitoring() {
    return this.getBooleanAttribute('transceiver_type_all_monitoring');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
