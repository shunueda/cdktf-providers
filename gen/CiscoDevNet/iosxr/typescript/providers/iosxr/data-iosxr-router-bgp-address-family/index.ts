// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterBgpAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter Address Family command mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_address_family#af_name DataIosxrRouterBgpAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_address_family#as_number DataIosxrRouterBgpAddressFamily#as_number}
  */
  readonly asNumber: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_address_family#device DataIosxrRouterBgpAddressFamily#device}
  */
  readonly device?: string;
}
export interface DataIosxrRouterBgpAddressFamilyAggregateAddresses {
}

export function dataIosxrRouterBgpAddressFamilyAggregateAddressesToTerraform(struct?: DataIosxrRouterBgpAddressFamilyAggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpAddressFamilyAggregateAddressesToHclTerraform(struct?: DataIosxrRouterBgpAddressFamilyAggregateAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpAddressFamilyAggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpAddressFamilyAggregateAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpAddressFamilyAggregateAddresses | undefined) {
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

  // as_confed_set - computed: true, optional: false, required: false
  public get asConfedSet() {
    return this.getBooleanAttribute('as_confed_set');
  }

  // as_set - computed: true, optional: false, required: false
  public get asSet() {
    return this.getBooleanAttribute('as_set');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // set_tag - computed: true, optional: false, required: false
  public get setTag() {
    return this.getNumberAttribute('set_tag');
  }

  // summary_only - computed: true, optional: false, required: false
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }
}

export class DataIosxrRouterBgpAddressFamilyAggregateAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpAddressFamilyAggregateAddressesOutputReference {
    return new DataIosxrRouterBgpAddressFamilyAggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterBgpAddressFamilyNetworks {
}

export function dataIosxrRouterBgpAddressFamilyNetworksToTerraform(struct?: DataIosxrRouterBgpAddressFamilyNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpAddressFamilyNetworksToHclTerraform(struct?: DataIosxrRouterBgpAddressFamilyNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpAddressFamilyNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpAddressFamilyNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpAddressFamilyNetworks | undefined) {
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

  // backdoor - computed: true, optional: false, required: false
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }

  // multipath - computed: true, optional: false, required: false
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataIosxrRouterBgpAddressFamilyNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpAddressFamilyNetworksOutputReference {
    return new DataIosxrRouterBgpAddressFamilyNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterBgpAddressFamilyRedistributeEigrp {
}

export function dataIosxrRouterBgpAddressFamilyRedistributeEigrpToTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeEigrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpAddressFamilyRedistributeEigrpToHclTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeEigrp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpAddressFamilyRedistributeEigrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpAddressFamilyRedistributeEigrp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpAddressFamilyRedistributeEigrp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // match_external - computed: true, optional: false, required: false
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }

  // match_internal - computed: true, optional: false, required: false
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }

  // match_internal_external - computed: true, optional: false, required: false
  public get matchInternalExternal() {
    return this.getBooleanAttribute('match_internal_external');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // multipath - computed: true, optional: false, required: false
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataIosxrRouterBgpAddressFamilyRedistributeEigrpList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpAddressFamilyRedistributeEigrpOutputReference {
    return new DataIosxrRouterBgpAddressFamilyRedistributeEigrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterBgpAddressFamilyRedistributeIsis {
}

export function dataIosxrRouterBgpAddressFamilyRedistributeIsisToTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpAddressFamilyRedistributeIsisToHclTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeIsis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpAddressFamilyRedistributeIsisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpAddressFamilyRedistributeIsis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpAddressFamilyRedistributeIsis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // level_1 - computed: true, optional: false, required: false
  public get level1() {
    return this.getBooleanAttribute('level_1');
  }

  // level_1_inter_area - computed: true, optional: false, required: false
  public get level1InterArea() {
    return this.getBooleanAttribute('level_1_inter_area');
  }

  // level_1_level_1_inter_area - computed: true, optional: false, required: false
  public get level1Level1InterArea() {
    return this.getBooleanAttribute('level_1_level_1_inter_area');
  }

  // level_1_level_2 - computed: true, optional: false, required: false
  public get level1Level2() {
    return this.getBooleanAttribute('level_1_level_2');
  }

  // level_1_level_2_level_1_inter_area - computed: true, optional: false, required: false
  public get level1Level2Level1InterArea() {
    return this.getBooleanAttribute('level_1_level_2_level_1_inter_area');
  }

  // level_2 - computed: true, optional: false, required: false
  public get level2() {
    return this.getBooleanAttribute('level_2');
  }

  // level_2_level_1_inter_area - computed: true, optional: false, required: false
  public get level2Level1InterArea() {
    return this.getBooleanAttribute('level_2_level_1_inter_area');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // multipath - computed: true, optional: false, required: false
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
}

export class DataIosxrRouterBgpAddressFamilyRedistributeIsisList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpAddressFamilyRedistributeIsisOutputReference {
    return new DataIosxrRouterBgpAddressFamilyRedistributeIsisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterBgpAddressFamilyRedistributeOspf {
}

export function dataIosxrRouterBgpAddressFamilyRedistributeOspfToTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpAddressFamilyRedistributeOspfToHclTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpAddressFamilyRedistributeOspfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpAddressFamilyRedistributeOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpAddressFamilyRedistributeOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_external - computed: true, optional: false, required: false
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }

  // match_external_1 - computed: true, optional: false, required: false
  public get matchExternal1() {
    return this.getBooleanAttribute('match_external_1');
  }

  // match_external_1_nssa_external - computed: true, optional: false, required: false
  public get matchExternal1NssaExternal() {
    return this.getBooleanAttribute('match_external_1_nssa_external');
  }

  // match_external_1_nssa_external_1 - computed: true, optional: false, required: false
  public get matchExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_external_1_nssa_external_1');
  }

  // match_external_1_nssa_external_2 - computed: true, optional: false, required: false
  public get matchExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_external_1_nssa_external_2');
  }

  // match_external_2 - computed: true, optional: false, required: false
  public get matchExternal2() {
    return this.getBooleanAttribute('match_external_2');
  }

  // match_external_2_nssa_external - computed: true, optional: false, required: false
  public get matchExternal2NssaExternal() {
    return this.getBooleanAttribute('match_external_2_nssa_external');
  }

  // match_external_2_nssa_external_1 - computed: true, optional: false, required: false
  public get matchExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_external_2_nssa_external_1');
  }

  // match_external_2_nssa_external_2 - computed: true, optional: false, required: false
  public get matchExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_external_2_nssa_external_2');
  }

  // match_external_nssa_external - computed: true, optional: false, required: false
  public get matchExternalNssaExternal() {
    return this.getBooleanAttribute('match_external_nssa_external');
  }

  // match_external_nssa_external_1 - computed: true, optional: false, required: false
  public get matchExternalNssaExternal1() {
    return this.getBooleanAttribute('match_external_nssa_external_1');
  }

  // match_external_nssa_external_2 - computed: true, optional: false, required: false
  public get matchExternalNssaExternal2() {
    return this.getBooleanAttribute('match_external_nssa_external_2');
  }

  // match_internal - computed: true, optional: false, required: false
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }

  // match_internal_external - computed: true, optional: false, required: false
  public get matchInternalExternal() {
    return this.getBooleanAttribute('match_internal_external');
  }

  // match_internal_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternal1() {
    return this.getBooleanAttribute('match_internal_external_1');
  }

  // match_internal_external_1_nssa_external - computed: true, optional: false, required: false
  public get matchInternalExternal1NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external');
  }

  // match_internal_external_1_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_1');
  }

  // match_internal_external_1_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_2');
  }

  // match_internal_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternal2() {
    return this.getBooleanAttribute('match_internal_external_2');
  }

  // match_internal_external_2_nssa_external - computed: true, optional: false, required: false
  public get matchInternalExternal2NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external');
  }

  // match_internal_external_2_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_1');
  }

  // match_internal_external_2_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_2');
  }

  // match_internal_external_nssa_external - computed: true, optional: false, required: false
  public get matchInternalExternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_external_nssa_external');
  }

  // match_internal_external_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_1');
  }

  // match_internal_external_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_2');
  }

  // match_internal_nssa_external - computed: true, optional: false, required: false
  public get matchInternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_nssa_external');
  }

  // match_internal_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_nssa_external_1');
  }

  // match_internal_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_nssa_external_2');
  }

  // match_nssa_external - computed: true, optional: false, required: false
  public get matchNssaExternal() {
    return this.getBooleanAttribute('match_nssa_external');
  }

  // match_nssa_external_1 - computed: true, optional: false, required: false
  public get matchNssaExternal1() {
    return this.getBooleanAttribute('match_nssa_external_1');
  }

  // match_nssa_external_2 - computed: true, optional: false, required: false
  public get matchNssaExternal2() {
    return this.getBooleanAttribute('match_nssa_external_2');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // multipath - computed: true, optional: false, required: false
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // router_tag - computed: true, optional: false, required: false
  public get routerTag() {
    return this.getStringAttribute('router_tag');
  }
}

export class DataIosxrRouterBgpAddressFamilyRedistributeOspfList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpAddressFamilyRedistributeOspfOutputReference {
    return new DataIosxrRouterBgpAddressFamilyRedistributeOspfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrRouterBgpAddressFamilyRedistributeOspfv3 {
}

export function dataIosxrRouterBgpAddressFamilyRedistributeOspfv3ToTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeOspfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrRouterBgpAddressFamilyRedistributeOspfv3ToHclTerraform(struct?: DataIosxrRouterBgpAddressFamilyRedistributeOspfv3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrRouterBgpAddressFamilyRedistributeOspfv3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrRouterBgpAddressFamilyRedistributeOspfv3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrRouterBgpAddressFamilyRedistributeOspfv3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_external - computed: true, optional: false, required: false
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }

  // match_external_1 - computed: true, optional: false, required: false
  public get matchExternal1() {
    return this.getBooleanAttribute('match_external_1');
  }

  // match_external_1_nssa_external - computed: true, optional: false, required: false
  public get matchExternal1NssaExternal() {
    return this.getBooleanAttribute('match_external_1_nssa_external');
  }

  // match_external_1_nssa_external_1 - computed: true, optional: false, required: false
  public get matchExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_external_1_nssa_external_1');
  }

  // match_external_1_nssa_external_2 - computed: true, optional: false, required: false
  public get matchExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_external_1_nssa_external_2');
  }

  // match_external_2 - computed: true, optional: false, required: false
  public get matchExternal2() {
    return this.getBooleanAttribute('match_external_2');
  }

  // match_external_2_nssa_external - computed: true, optional: false, required: false
  public get matchExternal2NssaExternal() {
    return this.getBooleanAttribute('match_external_2_nssa_external');
  }

  // match_external_2_nssa_external_1 - computed: true, optional: false, required: false
  public get matchExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_external_2_nssa_external_1');
  }

  // match_external_2_nssa_external_2 - computed: true, optional: false, required: false
  public get matchExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_external_2_nssa_external_2');
  }

  // match_external_nssa_external - computed: true, optional: false, required: false
  public get matchExternalNssaExternal() {
    return this.getBooleanAttribute('match_external_nssa_external');
  }

  // match_external_nssa_external_1 - computed: true, optional: false, required: false
  public get matchExternalNssaExternal1() {
    return this.getBooleanAttribute('match_external_nssa_external_1');
  }

  // match_external_nssa_external_2 - computed: true, optional: false, required: false
  public get matchExternalNssaExternal2() {
    return this.getBooleanAttribute('match_external_nssa_external_2');
  }

  // match_internal - computed: true, optional: false, required: false
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }

  // match_internal_external - computed: true, optional: false, required: false
  public get matchInternalExternal() {
    return this.getBooleanAttribute('match_internal_external');
  }

  // match_internal_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternal1() {
    return this.getBooleanAttribute('match_internal_external_1');
  }

  // match_internal_external_1_nssa_external - computed: true, optional: false, required: false
  public get matchInternalExternal1NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external');
  }

  // match_internal_external_1_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_1');
  }

  // match_internal_external_1_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_2');
  }

  // match_internal_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternal2() {
    return this.getBooleanAttribute('match_internal_external_2');
  }

  // match_internal_external_2_nssa_external - computed: true, optional: false, required: false
  public get matchInternalExternal2NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external');
  }

  // match_internal_external_2_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_1');
  }

  // match_internal_external_2_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_2');
  }

  // match_internal_external_nssa_external - computed: true, optional: false, required: false
  public get matchInternalExternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_external_nssa_external');
  }

  // match_internal_external_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalExternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_1');
  }

  // match_internal_external_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalExternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_2');
  }

  // match_internal_nssa_external - computed: true, optional: false, required: false
  public get matchInternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_nssa_external');
  }

  // match_internal_nssa_external_1 - computed: true, optional: false, required: false
  public get matchInternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_nssa_external_1');
  }

  // match_internal_nssa_external_2 - computed: true, optional: false, required: false
  public get matchInternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_nssa_external_2');
  }

  // match_nssa_external - computed: true, optional: false, required: false
  public get matchNssaExternal() {
    return this.getBooleanAttribute('match_nssa_external');
  }

  // match_nssa_external_1 - computed: true, optional: false, required: false
  public get matchNssaExternal1() {
    return this.getBooleanAttribute('match_nssa_external_1');
  }

  // match_nssa_external_2 - computed: true, optional: false, required: false
  public get matchNssaExternal2() {
    return this.getBooleanAttribute('match_nssa_external_2');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getNumberAttribute('metric');
  }

  // multipath - computed: true, optional: false, required: false
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }

  // route_policy - computed: true, optional: false, required: false
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }

  // router_tag - computed: true, optional: false, required: false
  public get routerTag() {
    return this.getStringAttribute('router_tag');
  }
}

export class DataIosxrRouterBgpAddressFamilyRedistributeOspfv3List extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrRouterBgpAddressFamilyRedistributeOspfv3OutputReference {
    return new DataIosxrRouterBgpAddressFamilyRedistributeOspfv3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_address_family iosxr_router_bgp_address_family}
*/
export class DataIosxrRouterBgpAddressFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterBgpAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterBgpAddressFamily to import
  * @param importFromId The id of the existing DataIosxrRouterBgpAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterBgpAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_address_family iosxr_router_bgp_address_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterBgpAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterBgpAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_address_family',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afName = config.afName;
    this._asNumber = config.asNumber;
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_paths_receive - computed: true, optional: false, required: false
  public get additionalPathsReceive() {
    return this.getBooleanAttribute('additional_paths_receive');
  }

  // additional_paths_selection_disable - computed: true, optional: false, required: false
  public get additionalPathsSelectionDisable() {
    return this.getBooleanAttribute('additional_paths_selection_disable');
  }

  // additional_paths_selection_route_policy - computed: true, optional: false, required: false
  public get additionalPathsSelectionRoutePolicy() {
    return this.getStringAttribute('additional_paths_selection_route_policy');
  }

  // additional_paths_send - computed: true, optional: false, required: false
  public get additionalPathsSend() {
    return this.getBooleanAttribute('additional_paths_send');
  }

  // advertise_best_external - computed: true, optional: false, required: false
  public get advertiseBestExternal() {
    return this.getBooleanAttribute('advertise_best_external');
  }

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // aggregate_addresses - computed: true, optional: false, required: false
  private _aggregateAddresses = new DataIosxrRouterBgpAddressFamilyAggregateAddressesList(this, "aggregate_addresses", false);
  public get aggregateAddresses() {
    return this._aggregateAddresses;
  }

  // allocate_label_all - computed: true, optional: false, required: false
  public get allocateLabelAll() {
    return this.getBooleanAttribute('allocate_label_all');
  }

  // allocate_label_all_unlabeled_path - computed: true, optional: false, required: false
  public get allocateLabelAllUnlabeledPath() {
    return this.getBooleanAttribute('allocate_label_all_unlabeled_path');
  }

  // allocate_label_route_policy - computed: true, optional: false, required: false
  public get allocateLabelRoutePolicy() {
    return this.getStringAttribute('allocate_label_route_policy');
  }

  // allocate_label_route_policy_unlabeled_path - computed: true, optional: false, required: false
  public get allocateLabelRoutePolicyUnlabeledPath() {
    return this.getBooleanAttribute('allocate_label_route_policy_unlabeled_path');
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_mode_per_ce - computed: true, optional: false, required: false
  public get labelModePerCe() {
    return this.getBooleanAttribute('label_mode_per_ce');
  }

  // label_mode_per_nexthop_received_label - computed: true, optional: false, required: false
  public get labelModePerNexthopReceivedLabel() {
    return this.getBooleanAttribute('label_mode_per_nexthop_received_label');
  }

  // label_mode_per_nexthop_received_label_allocate_secondary_label - computed: true, optional: false, required: false
  public get labelModePerNexthopReceivedLabelAllocateSecondaryLabel() {
    return this.getBooleanAttribute('label_mode_per_nexthop_received_label_allocate_secondary_label');
  }

  // label_mode_per_prefix - computed: true, optional: false, required: false
  public get labelModePerPrefix() {
    return this.getBooleanAttribute('label_mode_per_prefix');
  }

  // label_mode_per_vrf - computed: true, optional: false, required: false
  public get labelModePerVrf() {
    return this.getBooleanAttribute('label_mode_per_vrf');
  }

  // label_mode_per_vrf_46 - computed: true, optional: false, required: false
  public get labelModePerVrf46() {
    return this.getBooleanAttribute('label_mode_per_vrf_46');
  }

  // label_mode_route_policy - computed: true, optional: false, required: false
  public get labelModeRoutePolicy() {
    return this.getStringAttribute('label_mode_route_policy');
  }

  // maximum_paths_ebgp_multipath - computed: true, optional: false, required: false
  public get maximumPathsEbgpMultipath() {
    return this.getNumberAttribute('maximum_paths_ebgp_multipath');
  }

  // maximum_paths_ebgp_route_policy - computed: true, optional: false, required: false
  public get maximumPathsEbgpRoutePolicy() {
    return this.getStringAttribute('maximum_paths_ebgp_route_policy');
  }

  // maximum_paths_ebgp_selective - computed: true, optional: false, required: false
  public get maximumPathsEbgpSelective() {
    return this.getBooleanAttribute('maximum_paths_ebgp_selective');
  }

  // maximum_paths_eibgp_equal_cost - computed: true, optional: false, required: false
  public get maximumPathsEibgpEqualCost() {
    return this.getBooleanAttribute('maximum_paths_eibgp_equal_cost');
  }

  // maximum_paths_eibgp_multipath - computed: true, optional: false, required: false
  public get maximumPathsEibgpMultipath() {
    return this.getNumberAttribute('maximum_paths_eibgp_multipath');
  }

  // maximum_paths_eibgp_route_policy - computed: true, optional: false, required: false
  public get maximumPathsEibgpRoutePolicy() {
    return this.getStringAttribute('maximum_paths_eibgp_route_policy');
  }

  // maximum_paths_eibgp_selective - computed: true, optional: false, required: false
  public get maximumPathsEibgpSelective() {
    return this.getBooleanAttribute('maximum_paths_eibgp_selective');
  }

  // maximum_paths_ibgp_multipath - computed: true, optional: false, required: false
  public get maximumPathsIbgpMultipath() {
    return this.getNumberAttribute('maximum_paths_ibgp_multipath');
  }

  // maximum_paths_ibgp_route_policy - computed: true, optional: false, required: false
  public get maximumPathsIbgpRoutePolicy() {
    return this.getStringAttribute('maximum_paths_ibgp_route_policy');
  }

  // maximum_paths_ibgp_selective - computed: true, optional: false, required: false
  public get maximumPathsIbgpSelective() {
    return this.getBooleanAttribute('maximum_paths_ibgp_selective');
  }

  // maximum_paths_ibgp_unequal_cost - computed: true, optional: false, required: false
  public get maximumPathsIbgpUnequalCost() {
    return this.getBooleanAttribute('maximum_paths_ibgp_unequal_cost');
  }

  // maximum_paths_ibgp_unequal_cost_deterministic - computed: true, optional: false, required: false
  public get maximumPathsIbgpUnequalCostDeterministic() {
    return this.getBooleanAttribute('maximum_paths_ibgp_unequal_cost_deterministic');
  }

  // maximum_paths_unique_nexthop_check_disable - computed: true, optional: false, required: false
  public get maximumPathsUniqueNexthopCheckDisable() {
    return this.getBooleanAttribute('maximum_paths_unique_nexthop_check_disable');
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataIosxrRouterBgpAddressFamilyNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // nexthop_trigger_delay_critical - computed: true, optional: false, required: false
  public get nexthopTriggerDelayCritical() {
    return this.getNumberAttribute('nexthop_trigger_delay_critical');
  }

  // nexthop_trigger_delay_non_critical - computed: true, optional: false, required: false
  public get nexthopTriggerDelayNonCritical() {
    return this.getNumberAttribute('nexthop_trigger_delay_non_critical');
  }

  // redistribute_connected - computed: true, optional: false, required: false
  public get redistributeConnected() {
    return this.getBooleanAttribute('redistribute_connected');
  }

  // redistribute_connected_metric - computed: true, optional: false, required: false
  public get redistributeConnectedMetric() {
    return this.getNumberAttribute('redistribute_connected_metric');
  }

  // redistribute_connected_multipath - computed: true, optional: false, required: false
  public get redistributeConnectedMultipath() {
    return this.getBooleanAttribute('redistribute_connected_multipath');
  }

  // redistribute_connected_route_policy - computed: true, optional: false, required: false
  public get redistributeConnectedRoutePolicy() {
    return this.getStringAttribute('redistribute_connected_route_policy');
  }

  // redistribute_eigrp - computed: true, optional: false, required: false
  private _redistributeEigrp = new DataIosxrRouterBgpAddressFamilyRedistributeEigrpList(this, "redistribute_eigrp", false);
  public get redistributeEigrp() {
    return this._redistributeEigrp;
  }

  // redistribute_isis - computed: true, optional: false, required: false
  private _redistributeIsis = new DataIosxrRouterBgpAddressFamilyRedistributeIsisList(this, "redistribute_isis", false);
  public get redistributeIsis() {
    return this._redistributeIsis;
  }

  // redistribute_ospf - computed: true, optional: false, required: false
  private _redistributeOspf = new DataIosxrRouterBgpAddressFamilyRedistributeOspfList(this, "redistribute_ospf", false);
  public get redistributeOspf() {
    return this._redistributeOspf;
  }

  // redistribute_ospfv3 - computed: true, optional: false, required: false
  private _redistributeOspfv3 = new DataIosxrRouterBgpAddressFamilyRedistributeOspfv3List(this, "redistribute_ospfv3", false);
  public get redistributeOspfv3() {
    return this._redistributeOspfv3;
  }

  // redistribute_rip - computed: true, optional: false, required: false
  public get redistributeRip() {
    return this.getBooleanAttribute('redistribute_rip');
  }

  // redistribute_rip_metric - computed: true, optional: false, required: false
  public get redistributeRipMetric() {
    return this.getNumberAttribute('redistribute_rip_metric');
  }

  // redistribute_rip_multipath - computed: true, optional: false, required: false
  public get redistributeRipMultipath() {
    return this.getBooleanAttribute('redistribute_rip_multipath');
  }

  // redistribute_rip_route_policy - computed: true, optional: false, required: false
  public get redistributeRipRoutePolicy() {
    return this.getStringAttribute('redistribute_rip_route_policy');
  }

  // redistribute_static - computed: true, optional: false, required: false
  public get redistributeStatic() {
    return this.getBooleanAttribute('redistribute_static');
  }

  // redistribute_static_metric - computed: true, optional: false, required: false
  public get redistributeStaticMetric() {
    return this.getNumberAttribute('redistribute_static_metric');
  }

  // redistribute_static_multipath - computed: true, optional: false, required: false
  public get redistributeStaticMultipath() {
    return this.getBooleanAttribute('redistribute_static_multipath');
  }

  // redistribute_static_route_policy - computed: true, optional: false, required: false
  public get redistributeStaticRoutePolicy() {
    return this.getStringAttribute('redistribute_static_route_policy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      af_name: cdktf.stringToTerraform(this._afName),
      as_number: cdktf.stringToTerraform(this._asNumber),
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
