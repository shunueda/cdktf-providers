// https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_auth_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataB1DdiDnsAuthZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure a map of filters to be applied on the search result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_auth_zones#filters DataB1DdiDnsAuthZones#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_auth_zones#id DataB1DdiDnsAuthZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure a map of tag filters to be applied on the search result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_auth_zones#tfilters DataB1DdiDnsAuthZones#tfilters}
  */
  readonly tfilters?: { [key: string]: string };
}
export interface DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsExternalPrimaries {
}

export function dataB1DdiDnsAuthZonesResultsExternalPrimariesToTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsExternalPrimariesToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsExternalPrimaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsExternalPrimaries | undefined) {
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // nsg - computed: true, optional: false, required: false
  public get nsg() {
    return this.getStringAttribute('nsg');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }

  // tsig_enabled - computed: true, optional: false, required: false
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsExternalPrimariesTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataB1DdiDnsAuthZonesResultsExternalPrimariesList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsExternalPrimariesOutputReference {
    return new DataB1DdiDnsAuthZonesResultsExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsExternalSecondaries {
}

export function dataB1DdiDnsAuthZonesResultsExternalSecondariesToTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalSecondaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsExternalSecondariesToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsExternalSecondaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsExternalSecondaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsExternalSecondaries | undefined) {
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

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_enabled - computed: true, optional: false, required: false
  public get tsigEnabled() {
    return this.getBooleanAttribute('tsig_enabled');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsExternalSecondariesTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataB1DdiDnsAuthZonesResultsExternalSecondariesList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsExternalSecondariesOutputReference {
    return new DataB1DdiDnsAuthZonesResultsExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceAssignedHosts {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceAssignedHostsToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceAssignedHostsToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceAssignedHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceAssignedHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceAssignedHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceAssignedHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceAssignedHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceAssignedHostsOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceAssignedHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotify {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesNotifyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesNotifyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotifyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotifyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotifyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotifyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValue {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAcl {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValue {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAcl {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValue {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAcl {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getBooleanAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpire | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mname - computed: true, optional: false, required: false
  public get mname() {
    return this.getStringAttribute('mname');
  }

  // protocol_mname - computed: true, optional: false, required: false
  public get protocolMname() {
    return this.getStringAttribute('protocol_mname');
  }

  // use_default_mname - computed: true, optional: false, required: false
  public get useDefaultMname() {
    return this.getBooleanAttribute('use_default_mname');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRname | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefresh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRname | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthority {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ttl - computed: true, optional: false, required: false
  private _defaultTtl = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityDefaultTtlList(this, "default_ttl", false);
  public get defaultTtl() {
    return this._defaultTtl;
  }

  // expire - computed: true, optional: false, required: false
  private _expire = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityExpireList(this, "expire", false);
  public get expire() {
    return this._expire;
  }

  // mname_block - computed: true, optional: false, required: false
  private _mnameBlock = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityMnameBlockList(this, "mname_block", false);
  public get mnameBlock() {
    return this._mnameBlock;
  }

  // negative_ttl - computed: true, optional: false, required: false
  private _negativeTtl = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityNegativeTtlList(this, "negative_ttl", false);
  public get negativeTtl() {
    return this._negativeTtl;
  }

  // protocol_rname - computed: true, optional: false, required: false
  private _protocolRname = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityProtocolRnameList(this, "protocol_rname", false);
  public get protocolRname() {
    return this._protocolRname;
  }

  // refresh - computed: true, optional: false, required: false
  private _refresh = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRefreshList(this, "refresh", false);
  public get refresh() {
    return this._refresh;
  }

  // retry - computed: true, optional: false, required: false
  private _retry = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRetryList(this, "retry", false);
  public get retry() {
    return this._retry;
  }

  // rname - computed: true, optional: false, required: false
  private _rname = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityRnameList(this, "rname", false);
  public get rname() {
    return this._rname;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInheritanceSources {
}

export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInheritanceSourcesToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInheritanceSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInheritanceSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInheritanceSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gss_tsig_enabled - computed: true, optional: false, required: false
  private _gssTsigEnabled = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesGssTsigEnabledList(this, "gss_tsig_enabled", false);
  public get gssTsigEnabled() {
    return this._gssTsigEnabled;
  }

  // notify - computed: true, optional: false, required: false
  private _notify = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesNotifyList(this, "notify", false);
  public get notify() {
    return this._notify;
  }

  // query_acl - computed: true, optional: false, required: false
  private _queryAcl = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }

  // transfer_acl - computed: true, optional: false, required: false
  private _transferAcl = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }

  // update_acl - computed: true, optional: false, required: false
  private _updateAcl = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }

  // use_forwarders_for_subzones - computed: true, optional: false, required: false
  private _useForwardersForSubzones = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesUseForwardersForSubzonesList(this, "use_forwarders_for_subzones", false);
  public get useForwardersForSubzones() {
    return this._useForwardersForSubzones;
  }

  // zone_authority - computed: true, optional: false, required: false
  private _zoneAuthority = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesZoneAuthorityList(this, "zone_authority", false);
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
}

export class DataB1DdiDnsAuthZonesResultsInheritanceSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInheritanceSourcesOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInheritanceSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsInternalSecondaries {
}

export function dataB1DdiDnsAuthZonesResultsInternalSecondariesToTerraform(struct?: DataB1DdiDnsAuthZonesResultsInternalSecondaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsInternalSecondariesToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsInternalSecondaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsInternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsInternalSecondaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsInternalSecondaries | undefined) {
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
}

export class DataB1DdiDnsAuthZonesResultsInternalSecondariesList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsInternalSecondariesOutputReference {
    return new DataB1DdiDnsAuthZonesResultsInternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsQueryAclTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsQueryAclTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsQueryAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsQueryAclTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsQueryAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsQueryAclTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsQueryAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsQueryAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsQueryAclTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsQueryAclTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsQueryAclTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsQueryAcl {
}

export function dataB1DdiDnsAuthZonesResultsQueryAclToTerraform(struct?: DataB1DdiDnsAuthZonesResultsQueryAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsQueryAclToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsQueryAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsQueryAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsQueryAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsQueryAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsQueryAclTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataB1DdiDnsAuthZonesResultsQueryAclList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsQueryAclOutputReference {
    return new DataB1DdiDnsAuthZonesResultsQueryAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsTransferAclTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsTransferAclTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsTransferAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsTransferAclTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsTransferAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsTransferAclTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsTransferAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsTransferAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsTransferAclTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsTransferAclTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsTransferAclTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsTransferAcl {
}

export function dataB1DdiDnsAuthZonesResultsTransferAclToTerraform(struct?: DataB1DdiDnsAuthZonesResultsTransferAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsTransferAclToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsTransferAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsTransferAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsTransferAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsTransferAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsTransferAclTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataB1DdiDnsAuthZonesResultsTransferAclList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsTransferAclOutputReference {
    return new DataB1DdiDnsAuthZonesResultsTransferAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsUpdateAclTsigKey {
}

export function dataB1DdiDnsAuthZonesResultsUpdateAclTsigKeyToTerraform(struct?: DataB1DdiDnsAuthZonesResultsUpdateAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsUpdateAclTsigKeyToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsUpdateAclTsigKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsUpdateAclTsigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsUpdateAclTsigKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsUpdateAclTsigKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol_name - computed: true, optional: false, required: false
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataB1DdiDnsAuthZonesResultsUpdateAclTsigKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsUpdateAclTsigKeyOutputReference {
    return new DataB1DdiDnsAuthZonesResultsUpdateAclTsigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsUpdateAcl {
}

export function dataB1DdiDnsAuthZonesResultsUpdateAclToTerraform(struct?: DataB1DdiDnsAuthZonesResultsUpdateAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsUpdateAclToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsUpdateAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsUpdateAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsUpdateAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsUpdateAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // acl - computed: true, optional: false, required: false
  public get acl() {
    return this.getStringAttribute('acl');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // element - computed: true, optional: false, required: false
  public get element() {
    return this.getStringAttribute('element');
  }

  // tsig_key - computed: true, optional: false, required: false
  private _tsigKey = new DataB1DdiDnsAuthZonesResultsUpdateAclTsigKeyList(this, "tsig_key", false);
  public get tsigKey() {
    return this._tsigKey;
  }
}

export class DataB1DdiDnsAuthZonesResultsUpdateAclList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsUpdateAclOutputReference {
    return new DataB1DdiDnsAuthZonesResultsUpdateAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResultsZoneAuthority {
}

export function dataB1DdiDnsAuthZonesResultsZoneAuthorityToTerraform(struct?: DataB1DdiDnsAuthZonesResultsZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsZoneAuthorityToHclTerraform(struct?: DataB1DdiDnsAuthZonesResultsZoneAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsZoneAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResultsZoneAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResultsZoneAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ttl - computed: true, optional: false, required: false
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }

  // expire - computed: true, optional: false, required: false
  public get expire() {
    return this.getNumberAttribute('expire');
  }

  // mname - computed: true, optional: false, required: false
  public get mname() {
    return this.getStringAttribute('mname');
  }

  // negative_ttl - computed: true, optional: false, required: false
  public get negativeTtl() {
    return this.getNumberAttribute('negative_ttl');
  }

  // protocol_mname - computed: true, optional: false, required: false
  public get protocolMname() {
    return this.getStringAttribute('protocol_mname');
  }

  // protocol_rname - computed: true, optional: false, required: false
  public get protocolRname() {
    return this.getStringAttribute('protocol_rname');
  }

  // refresh - computed: true, optional: false, required: false
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getNumberAttribute('retry');
  }

  // rname - computed: true, optional: false, required: false
  public get rname() {
    return this.getStringAttribute('rname');
  }

  // use_default_mname - computed: true, optional: false, required: false
  public get useDefaultMname() {
    return this.getBooleanAttribute('use_default_mname');
  }
}

export class DataB1DdiDnsAuthZonesResultsZoneAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsZoneAuthorityOutputReference {
    return new DataB1DdiDnsAuthZonesResultsZoneAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB1DdiDnsAuthZonesResults {
}

export function dataB1DdiDnsAuthZonesResultsToTerraform(struct?: DataB1DdiDnsAuthZonesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB1DdiDnsAuthZonesResultsToHclTerraform(struct?: DataB1DdiDnsAuthZonesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB1DdiDnsAuthZonesResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataB1DdiDnsAuthZonesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB1DdiDnsAuthZonesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // external_primaries - computed: true, optional: false, required: false
  private _externalPrimaries = new DataB1DdiDnsAuthZonesResultsExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }

  // external_secondaries - computed: true, optional: false, required: false
  private _externalSecondaries = new DataB1DdiDnsAuthZonesResultsExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // gss_tsig_enabled - computed: true, optional: false, required: false
  public get gssTsigEnabled() {
    return this.getBooleanAttribute('gss_tsig_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_assigned_hosts - computed: true, optional: false, required: false
  private _inheritanceAssignedHosts = new DataB1DdiDnsAuthZonesResultsInheritanceAssignedHostsList(this, "inheritance_assigned_hosts", false);
  public get inheritanceAssignedHosts() {
    return this._inheritanceAssignedHosts;
  }

  // inheritance_sources - computed: true, optional: false, required: false
  private _inheritanceSources = new DataB1DdiDnsAuthZonesResultsInheritanceSourcesList(this, "inheritance_sources", false);
  public get inheritanceSources() {
    return this._inheritanceSources;
  }

  // initial_soa_serial - computed: true, optional: false, required: false
  public get initialSoaSerial() {
    return this.getNumberAttribute('initial_soa_serial');
  }

  // internal_secondaries - computed: true, optional: false, required: false
  private _internalSecondaries = new DataB1DdiDnsAuthZonesResultsInternalSecondariesList(this, "internal_secondaries", false);
  public get internalSecondaries() {
    return this._internalSecondaries;
  }

  // mapped_subnet - computed: true, optional: false, required: false
  public get mappedSubnet() {
    return this.getStringAttribute('mapped_subnet');
  }

  // mapping - computed: true, optional: false, required: false
  public get mapping() {
    return this.getStringAttribute('mapping');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getBooleanAttribute('notify');
  }

  // nsgs - computed: true, optional: false, required: false
  public get nsgs() {
    return this.getListAttribute('nsgs');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // primary_type - computed: true, optional: false, required: false
  public get primaryType() {
    return this.getStringAttribute('primary_type');
  }

  // protocol_fqdn - computed: true, optional: false, required: false
  public get protocolFqdn() {
    return this.getStringAttribute('protocol_fqdn');
  }

  // query_acl - computed: true, optional: false, required: false
  private _queryAcl = new DataB1DdiDnsAuthZonesResultsQueryAclList(this, "query_acl", false);
  public get queryAcl() {
    return this._queryAcl;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // transfer_acl - computed: true, optional: false, required: false
  private _transferAcl = new DataB1DdiDnsAuthZonesResultsTransferAclList(this, "transfer_acl", false);
  public get transferAcl() {
    return this._transferAcl;
  }

  // update_acl - computed: true, optional: false, required: false
  private _updateAcl = new DataB1DdiDnsAuthZonesResultsUpdateAclList(this, "update_acl", false);
  public get updateAcl() {
    return this._updateAcl;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // use_forwarders_for_subzones - computed: true, optional: false, required: false
  public get useForwardersForSubzones() {
    return this.getBooleanAttribute('use_forwarders_for_subzones');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // zone_authority - computed: true, optional: false, required: false
  private _zoneAuthority = new DataB1DdiDnsAuthZonesResultsZoneAuthorityList(this, "zone_authority", false);
  public get zoneAuthority() {
    return this._zoneAuthority;
  }
}

export class DataB1DdiDnsAuthZonesResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataB1DdiDnsAuthZonesResultsOutputReference {
    return new DataB1DdiDnsAuthZonesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_auth_zones b1ddi_dns_auth_zones}
*/
export class DataB1DdiDnsAuthZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b1ddi_dns_auth_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataB1DdiDnsAuthZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataB1DdiDnsAuthZones to import
  * @param importFromId The id of the existing DataB1DdiDnsAuthZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_auth_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataB1DdiDnsAuthZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b1ddi_dns_auth_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/b1ddi/0.1.5/docs/data-sources/dns_auth_zones b1ddi_dns_auth_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataB1DdiDnsAuthZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataB1DdiDnsAuthZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'b1ddi_dns_auth_zones',
      terraformGeneratorMetadata: {
        providerName: 'b1ddi',
        providerVersion: '0.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._id = config.id;
    this._tfilters = config.tfilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
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

  // results - computed: true, optional: false, required: false
  private _results = new DataB1DdiDnsAuthZonesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tfilters - computed: false, optional: true, required: false
  private _tfilters?: { [key: string]: string }; 
  public get tfilters() {
    return this.getStringMapAttribute('tfilters');
  }
  public set tfilters(value: { [key: string]: string }) {
    this._tfilters = value;
  }
  public resetTfilters() {
    this._tfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tfiltersInput() {
    return this._tfilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      id: cdktf.stringToTerraform(this._id),
      tfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tfilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
