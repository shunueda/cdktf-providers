// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ospf#device DataIosxeOspf#device}
  */
  readonly device?: string;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ospf#process_id DataIosxeOspf#process_id}
  */
  readonly processId: number;
}
export interface DataIosxeOspfAreas {
}

export function dataIosxeOspfAreasToTerraform(struct?: DataIosxeOspfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfAreasToHclTerraform(struct?: DataIosxeOspfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfAreas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfAreas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_id - computed: true, optional: false, required: false
  public get areaId() {
    return this.getStringAttribute('area_id');
  }

  // authentication_message_digest - computed: true, optional: false, required: false
  public get authenticationMessageDigest() {
    return this.getBooleanAttribute('authentication_message_digest');
  }

  // nssa - computed: true, optional: false, required: false
  public get nssa() {
    return this.getBooleanAttribute('nssa');
  }

  // nssa_default_information_originate - computed: true, optional: false, required: false
  public get nssaDefaultInformationOriginate() {
    return this.getBooleanAttribute('nssa_default_information_originate');
  }

  // nssa_default_information_originate_metric - computed: true, optional: false, required: false
  public get nssaDefaultInformationOriginateMetric() {
    return this.getNumberAttribute('nssa_default_information_originate_metric');
  }

  // nssa_default_information_originate_metric_type - computed: true, optional: false, required: false
  public get nssaDefaultInformationOriginateMetricType() {
    return this.getNumberAttribute('nssa_default_information_originate_metric_type');
  }

  // nssa_no_redistribution - computed: true, optional: false, required: false
  public get nssaNoRedistribution() {
    return this.getBooleanAttribute('nssa_no_redistribution');
  }

  // nssa_no_summary - computed: true, optional: false, required: false
  public get nssaNoSummary() {
    return this.getBooleanAttribute('nssa_no_summary');
  }
}

export class DataIosxeOspfAreasList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfAreasOutputReference {
    return new DataIosxeOspfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfNeighbors {
}

export function dataIosxeOspfNeighborsToTerraform(struct?: DataIosxeOspfNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfNeighborsToHclTerraform(struct?: DataIosxeOspfNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfNeighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getNumberAttribute('cost');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataIosxeOspfNeighborsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfNeighborsOutputReference {
    return new DataIosxeOspfNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfNetworks {
}

export function dataIosxeOspfNetworksToTerraform(struct?: DataIosxeOspfNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfNetworksToHclTerraform(struct?: DataIosxeOspfNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // wildcard - computed: true, optional: false, required: false
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
}

export class DataIosxeOspfNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfNetworksOutputReference {
    return new DataIosxeOspfNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableLoopbacks {
}

export function dataIosxeOspfPassiveInterfaceDisableLoopbacksToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableLoopbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableLoopbacksToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableLoopbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableLoopbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableLoopbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableLoopbacks | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableLoopbacksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableLoopbacksOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableLoopbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfaces {
}

export function dataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfacesToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfacesToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfaces | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisablePortChannels {
}

export function dataIosxeOspfPassiveInterfaceDisablePortChannelsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisablePortChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisablePortChannelsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisablePortChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisablePortChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisablePortChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisablePortChannels | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisablePortChannelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisablePortChannelsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisablePortChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableTenGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableTenGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableTunnels {
}

export function dataIosxeOspfPassiveInterfaceDisableTunnelsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableTunnelsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableTunnels | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableTunnelsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernets {
}

export function dataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernetsToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernets | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfPassiveInterfaceDisableVlans {
}

export function dataIosxeOspfPassiveInterfaceDisableVlansToTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfPassiveInterfaceDisableVlansToHclTerraform(struct?: DataIosxeOspfPassiveInterfaceDisableVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfPassiveInterfaceDisableVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfPassiveInterfaceDisableVlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfPassiveInterfaceDisableVlans | undefined) {
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
}

export class DataIosxeOspfPassiveInterfaceDisableVlansList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfPassiveInterfaceDisableVlansOutputReference {
    return new DataIosxeOspfPassiveInterfaceDisableVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfSummaryAddresses {
}

export function dataIosxeOspfSummaryAddressesToTerraform(struct?: DataIosxeOspfSummaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfSummaryAddressesToHclTerraform(struct?: DataIosxeOspfSummaryAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfSummaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfSummaryAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfSummaryAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataIosxeOspfSummaryAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfSummaryAddressesOutputReference {
    return new DataIosxeOspfSummaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ospf iosxe_ospf}
*/
export class DataIosxeOspf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeOspf to import
  * @param importFromId The id of the existing DataIosxeOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ospf iosxe_ospf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeOspfConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeOspfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_ospf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._processId = config.processId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: true, optional: false, required: false
  private _areas = new DataIosxeOspfAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }

  // auto_cost_reference_bandwidth - computed: true, optional: false, required: false
  public get autoCostReferenceBandwidth() {
    return this.getNumberAttribute('auto_cost_reference_bandwidth');
  }

  // bfd_all_interfaces - computed: true, optional: false, required: false
  public get bfdAllInterfaces() {
    return this.getBooleanAttribute('bfd_all_interfaces');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }

  // default_information_originate_always - computed: true, optional: false, required: false
  public get defaultInformationOriginateAlways() {
    return this.getBooleanAttribute('default_information_originate_always');
  }

  // default_metric - computed: true, optional: false, required: false
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
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

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // domain_tag - computed: true, optional: false, required: false
  public get domainTag() {
    return this.getNumberAttribute('domain_tag');
  }

  // fast_reroute_per_prefix_enable_prefix_priority - computed: true, optional: false, required: false
  public get fastReroutePerPrefixEnablePrefixPriority() {
    return this.getStringAttribute('fast_reroute_per_prefix_enable_prefix_priority');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_adjacency_changes - computed: true, optional: false, required: false
  public get logAdjacencyChanges() {
    return this.getBooleanAttribute('log_adjacency_changes');
  }

  // log_adjacency_changes_detail - computed: true, optional: false, required: false
  public get logAdjacencyChangesDetail() {
    return this.getBooleanAttribute('log_adjacency_changes_detail');
  }

  // max_metric_router_lsa - computed: true, optional: false, required: false
  public get maxMetricRouterLsa() {
    return this.getBooleanAttribute('max_metric_router_lsa');
  }

  // max_metric_router_lsa_external_lsa_metric - computed: true, optional: false, required: false
  public get maxMetricRouterLsaExternalLsaMetric() {
    return this.getNumberAttribute('max_metric_router_lsa_external_lsa_metric');
  }

  // max_metric_router_lsa_include_stub - computed: true, optional: false, required: false
  public get maxMetricRouterLsaIncludeStub() {
    return this.getBooleanAttribute('max_metric_router_lsa_include_stub');
  }

  // max_metric_router_lsa_on_startup_time - computed: true, optional: false, required: false
  public get maxMetricRouterLsaOnStartupTime() {
    return this.getNumberAttribute('max_metric_router_lsa_on_startup_time');
  }

  // max_metric_router_lsa_on_startup_wait_for_bgp - computed: true, optional: false, required: false
  public get maxMetricRouterLsaOnStartupWaitForBgp() {
    return this.getBooleanAttribute('max_metric_router_lsa_on_startup_wait_for_bgp');
  }

  // max_metric_router_lsa_summary_lsa_metric - computed: true, optional: false, required: false
  public get maxMetricRouterLsaSummaryLsaMetric() {
    return this.getNumberAttribute('max_metric_router_lsa_summary_lsa_metric');
  }

  // mpls_ldp_autoconfig - computed: true, optional: false, required: false
  public get mplsLdpAutoconfig() {
    return this.getBooleanAttribute('mpls_ldp_autoconfig');
  }

  // mpls_ldp_sync - computed: true, optional: false, required: false
  public get mplsLdpSync() {
    return this.getBooleanAttribute('mpls_ldp_sync');
  }

  // neighbors - computed: true, optional: false, required: false
  private _neighbors = new DataIosxeOspfNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataIosxeOspfNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // nsf_cisco - computed: true, optional: false, required: false
  public get nsfCisco() {
    return this.getBooleanAttribute('nsf_cisco');
  }

  // nsf_cisco_enforce_global - computed: true, optional: false, required: false
  public get nsfCiscoEnforceGlobal() {
    return this.getBooleanAttribute('nsf_cisco_enforce_global');
  }

  // nsf_ietf - computed: true, optional: false, required: false
  public get nsfIetf() {
    return this.getBooleanAttribute('nsf_ietf');
  }

  // nsf_ietf_restart_interval - computed: true, optional: false, required: false
  public get nsfIetfRestartInterval() {
    return this.getNumberAttribute('nsf_ietf_restart_interval');
  }

  // passive_interface - computed: true, optional: false, required: false
  public get passiveInterface() {
    return this.getListAttribute('passive_interface');
  }

  // passive_interface_default - computed: true, optional: false, required: false
  public get passiveInterfaceDefault() {
    return this.getBooleanAttribute('passive_interface_default');
  }

  // passive_interface_disable_five_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableFiveGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableFiveGigabitEthernetsList(this, "passive_interface_disable_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableFiveGigabitEthernets() {
    return this._passiveInterfaceDisableFiveGigabitEthernets;
  }

  // passive_interface_disable_forty_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableFortyGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableFortyGigabitEthernetsList(this, "passive_interface_disable_forty_gigabit_ethernets", true);
  public get passiveInterfaceDisableFortyGigabitEthernets() {
    return this._passiveInterfaceDisableFortyGigabitEthernets;
  }

  // passive_interface_disable_four_hundred_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableFourHundredGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableFourHundredGigabitEthernetsList(this, "passive_interface_disable_four_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableFourHundredGigabitEthernets() {
    return this._passiveInterfaceDisableFourHundredGigabitEthernets;
  }

  // passive_interface_disable_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableGigabitEthernetsList(this, "passive_interface_disable_gigabit_ethernets", true);
  public get passiveInterfaceDisableGigabitEthernets() {
    return this._passiveInterfaceDisableGigabitEthernets;
  }

  // passive_interface_disable_hundred_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableHundredGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableHundredGigabitEthernetsList(this, "passive_interface_disable_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableHundredGigabitEthernets() {
    return this._passiveInterfaceDisableHundredGigabitEthernets;
  }

  // passive_interface_disable_loopbacks - computed: true, optional: false, required: false
  private _passiveInterfaceDisableLoopbacks = new DataIosxeOspfPassiveInterfaceDisableLoopbacksList(this, "passive_interface_disable_loopbacks", true);
  public get passiveInterfaceDisableLoopbacks() {
    return this._passiveInterfaceDisableLoopbacks;
  }

  // passive_interface_disable_port_channel_subinterfaces - computed: true, optional: false, required: false
  private _passiveInterfaceDisablePortChannelSubinterfaces = new DataIosxeOspfPassiveInterfaceDisablePortChannelSubinterfacesList(this, "passive_interface_disable_port_channel_subinterfaces", true);
  public get passiveInterfaceDisablePortChannelSubinterfaces() {
    return this._passiveInterfaceDisablePortChannelSubinterfaces;
  }

  // passive_interface_disable_port_channels - computed: true, optional: false, required: false
  private _passiveInterfaceDisablePortChannels = new DataIosxeOspfPassiveInterfaceDisablePortChannelsList(this, "passive_interface_disable_port_channels", true);
  public get passiveInterfaceDisablePortChannels() {
    return this._passiveInterfaceDisablePortChannels;
  }

  // passive_interface_disable_ten_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTenGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableTenGigabitEthernetsList(this, "passive_interface_disable_ten_gigabit_ethernets", true);
  public get passiveInterfaceDisableTenGigabitEthernets() {
    return this._passiveInterfaceDisableTenGigabitEthernets;
  }

  // passive_interface_disable_tunnels - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTunnels = new DataIosxeOspfPassiveInterfaceDisableTunnelsList(this, "passive_interface_disable_tunnels", true);
  public get passiveInterfaceDisableTunnels() {
    return this._passiveInterfaceDisableTunnels;
  }

  // passive_interface_disable_twenty_five_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTwentyFiveGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList(this, "passive_interface_disable_twenty_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwentyFiveGigabitEthernets() {
    return this._passiveInterfaceDisableTwentyFiveGigabitEthernets;
  }

  // passive_interface_disable_two_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTwoGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableTwoGigabitEthernetsList(this, "passive_interface_disable_two_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoGigabitEthernets() {
    return this._passiveInterfaceDisableTwoGigabitEthernets;
  }

  // passive_interface_disable_two_hundred_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTwoHundredGigabitEthernets = new DataIosxeOspfPassiveInterfaceDisableTwoHundredGigabitEthernetsList(this, "passive_interface_disable_two_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoHundredGigabitEthernets() {
    return this._passiveInterfaceDisableTwoHundredGigabitEthernets;
  }

  // passive_interface_disable_vlans - computed: true, optional: false, required: false
  private _passiveInterfaceDisableVlans = new DataIosxeOspfPassiveInterfaceDisableVlansList(this, "passive_interface_disable_vlans", true);
  public get passiveInterfaceDisableVlans() {
    return this._passiveInterfaceDisableVlans;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: number; 
  public get processId() {
    return this.getNumberAttribute('process_id');
  }
  public set processId(value: number) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // redistribute_connected_subnets - computed: true, optional: false, required: false
  public get redistributeConnectedSubnets() {
    return this.getBooleanAttribute('redistribute_connected_subnets');
  }

  // redistribute_static_subnets - computed: true, optional: false, required: false
  public get redistributeStaticSubnets() {
    return this.getBooleanAttribute('redistribute_static_subnets');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // summary_addresses - computed: true, optional: false, required: false
  private _summaryAddresses = new DataIosxeOspfSummaryAddressesList(this, "summary_addresses", false);
  public get summaryAddresses() {
    return this._summaryAddresses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      process_id: cdktf.numberToTerraform(this._processId),
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
      process_id: {
        value: cdktf.numberToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
