// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/ospf_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeOspfVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/ospf_vrf#device DataIosxeOspfVrf#device}
  */
  readonly device?: string;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/ospf_vrf#process_id DataIosxeOspfVrf#process_id}
  */
  readonly processId: number;
  /**
  * VPN Routing/Forwarding Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/ospf_vrf#vrf DataIosxeOspfVrf#vrf}
  */
  readonly vrf: string;
}
export interface DataIosxeOspfVrfAreas {
}

export function dataIosxeOspfVrfAreasToTerraform(struct?: DataIosxeOspfVrfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfAreasToHclTerraform(struct?: DataIosxeOspfVrfAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfAreas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfAreas | undefined) {
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

export class DataIosxeOspfVrfAreasList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfAreasOutputReference {
    return new DataIosxeOspfVrfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfNeighbor {
}

export function dataIosxeOspfVrfNeighborToTerraform(struct?: DataIosxeOspfVrfNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfNeighborToHclTerraform(struct?: DataIosxeOspfVrfNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfNeighbor | undefined) {
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

export class DataIosxeOspfVrfNeighborList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfNeighborOutputReference {
    return new DataIosxeOspfVrfNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfNetwork {
}

export function dataIosxeOspfVrfNetworkToTerraform(struct?: DataIosxeOspfVrfNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfNetworkToHclTerraform(struct?: DataIosxeOspfVrfNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfNetwork | undefined) {
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

export class DataIosxeOspfVrfNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfNetworkOutputReference {
    return new DataIosxeOspfVrfNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableLoopbacks {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableLoopbacksToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableLoopbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableLoopbacksToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableLoopbacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableLoopbacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableLoopbacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableLoopbacks | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableLoopbacksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableLoopbacksOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableLoopbacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfaces {
}

export function dataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfacesToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfacesToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfaces | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisablePortChannels {
}

export function dataIosxeOspfVrfPassiveInterfaceDisablePortChannelsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisablePortChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisablePortChannelsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisablePortChannels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisablePortChannelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisablePortChannels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisablePortChannels | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisablePortChannelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisablePortChannelsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisablePortChannelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableTunnels {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableTunnelsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableTunnelsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableTunnels | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableTunnelsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernets | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfPassiveInterfaceDisableVlans {
}

export function dataIosxeOspfVrfPassiveInterfaceDisableVlansToTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfPassiveInterfaceDisableVlansToHclTerraform(struct?: DataIosxeOspfVrfPassiveInterfaceDisableVlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfPassiveInterfaceDisableVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfPassiveInterfaceDisableVlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfPassiveInterfaceDisableVlans | undefined) {
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

export class DataIosxeOspfVrfPassiveInterfaceDisableVlansList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfPassiveInterfaceDisableVlansOutputReference {
    return new DataIosxeOspfVrfPassiveInterfaceDisableVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeOspfVrfSummaryAddress {
}

export function dataIosxeOspfVrfSummaryAddressToTerraform(struct?: DataIosxeOspfVrfSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeOspfVrfSummaryAddressToHclTerraform(struct?: DataIosxeOspfVrfSummaryAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeOspfVrfSummaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeOspfVrfSummaryAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeOspfVrfSummaryAddress | undefined) {
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

export class DataIosxeOspfVrfSummaryAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeOspfVrfSummaryAddressOutputReference {
    return new DataIosxeOspfVrfSummaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/ospf_vrf iosxe_ospf_vrf}
*/
export class DataIosxeOspfVrf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_ospf_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeOspfVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeOspfVrf to import
  * @param importFromId The id of the existing DataIosxeOspfVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/ospf_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeOspfVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_ospf_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/ospf_vrf iosxe_ospf_vrf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeOspfVrfConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeOspfVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_ospf_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
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
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: true, optional: false, required: false
  private _areas = new DataIosxeOspfVrfAreasList(this, "areas", false);
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

  // neighbor - computed: true, optional: false, required: false
  private _neighbor = new DataIosxeOspfVrfNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataIosxeOspfVrfNetworkList(this, "network", false);
  public get network() {
    return this._network;
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
  private _passiveInterfaceDisableFiveGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableFiveGigabitEthernetsList(this, "passive_interface_disable_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableFiveGigabitEthernets() {
    return this._passiveInterfaceDisableFiveGigabitEthernets;
  }

  // passive_interface_disable_forty_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableFortyGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableFortyGigabitEthernetsList(this, "passive_interface_disable_forty_gigabit_ethernets", true);
  public get passiveInterfaceDisableFortyGigabitEthernets() {
    return this._passiveInterfaceDisableFortyGigabitEthernets;
  }

  // passive_interface_disable_four_hundred_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableFourHundredGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableFourHundredGigabitEthernetsList(this, "passive_interface_disable_four_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableFourHundredGigabitEthernets() {
    return this._passiveInterfaceDisableFourHundredGigabitEthernets;
  }

  // passive_interface_disable_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableGigabitEthernetsList(this, "passive_interface_disable_gigabit_ethernets", true);
  public get passiveInterfaceDisableGigabitEthernets() {
    return this._passiveInterfaceDisableGigabitEthernets;
  }

  // passive_interface_disable_hundred_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableHundredGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableHundredGigabitEthernetsList(this, "passive_interface_disable_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableHundredGigabitEthernets() {
    return this._passiveInterfaceDisableHundredGigabitEthernets;
  }

  // passive_interface_disable_loopbacks - computed: true, optional: false, required: false
  private _passiveInterfaceDisableLoopbacks = new DataIosxeOspfVrfPassiveInterfaceDisableLoopbacksList(this, "passive_interface_disable_loopbacks", true);
  public get passiveInterfaceDisableLoopbacks() {
    return this._passiveInterfaceDisableLoopbacks;
  }

  // passive_interface_disable_port_channel_subinterfaces - computed: true, optional: false, required: false
  private _passiveInterfaceDisablePortChannelSubinterfaces = new DataIosxeOspfVrfPassiveInterfaceDisablePortChannelSubinterfacesList(this, "passive_interface_disable_port_channel_subinterfaces", true);
  public get passiveInterfaceDisablePortChannelSubinterfaces() {
    return this._passiveInterfaceDisablePortChannelSubinterfaces;
  }

  // passive_interface_disable_port_channels - computed: true, optional: false, required: false
  private _passiveInterfaceDisablePortChannels = new DataIosxeOspfVrfPassiveInterfaceDisablePortChannelsList(this, "passive_interface_disable_port_channels", true);
  public get passiveInterfaceDisablePortChannels() {
    return this._passiveInterfaceDisablePortChannels;
  }

  // passive_interface_disable_ten_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTenGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableTenGigabitEthernetsList(this, "passive_interface_disable_ten_gigabit_ethernets", true);
  public get passiveInterfaceDisableTenGigabitEthernets() {
    return this._passiveInterfaceDisableTenGigabitEthernets;
  }

  // passive_interface_disable_tunnels - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTunnels = new DataIosxeOspfVrfPassiveInterfaceDisableTunnelsList(this, "passive_interface_disable_tunnels", true);
  public get passiveInterfaceDisableTunnels() {
    return this._passiveInterfaceDisableTunnels;
  }

  // passive_interface_disable_twenty_five_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTwentyFiveGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableTwentyFiveGigabitEthernetsList(this, "passive_interface_disable_twenty_five_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwentyFiveGigabitEthernets() {
    return this._passiveInterfaceDisableTwentyFiveGigabitEthernets;
  }

  // passive_interface_disable_two_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTwoGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableTwoGigabitEthernetsList(this, "passive_interface_disable_two_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoGigabitEthernets() {
    return this._passiveInterfaceDisableTwoGigabitEthernets;
  }

  // passive_interface_disable_two_hundred_gigabit_ethernets - computed: true, optional: false, required: false
  private _passiveInterfaceDisableTwoHundredGigabitEthernets = new DataIosxeOspfVrfPassiveInterfaceDisableTwoHundredGigabitEthernetsList(this, "passive_interface_disable_two_hundred_gigabit_ethernets", true);
  public get passiveInterfaceDisableTwoHundredGigabitEthernets() {
    return this._passiveInterfaceDisableTwoHundredGigabitEthernets;
  }

  // passive_interface_disable_vlans - computed: true, optional: false, required: false
  private _passiveInterfaceDisableVlans = new DataIosxeOspfVrfPassiveInterfaceDisableVlansList(this, "passive_interface_disable_vlans", true);
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

  // summary_address - computed: true, optional: false, required: false
  private _summaryAddress = new DataIosxeOspfVrfSummaryAddressList(this, "summary_address", false);
  public get summaryAddress() {
    return this._summaryAddress;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      process_id: cdktf.numberToTerraform(this._processId),
      vrf: cdktf.stringToTerraform(this._vrf),
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
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
