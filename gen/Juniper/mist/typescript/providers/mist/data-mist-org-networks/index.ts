// https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMistOrgNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_networks#org_id DataMistOrgNetworks#org_id}
  */
  readonly orgId: string;
}
export interface DataMistOrgNetworksOrgNetworksInternalAccess {
}

export function dataMistOrgNetworksOrgNetworksInternalAccessToTerraform(struct?: DataMistOrgNetworksOrgNetworksInternalAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksInternalAccessToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksInternalAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksInternalAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksInternalAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksInternalAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataMistOrgNetworksOrgNetworksInternetAccessDestinationNat {
}

export function dataMistOrgNetworksOrgNetworksInternetAccessDestinationNatToTerraform(struct?: DataMistOrgNetworksOrgNetworksInternetAccessDestinationNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksInternetAccessDestinationNatToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksInternetAccessDestinationNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksInternetAccessDestinationNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksInternetAccessDestinationNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksInternetAccessDestinationNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // wan_name - computed: true, optional: false, required: false
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
}

export class DataMistOrgNetworksOrgNetworksInternetAccessDestinationNatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgNetworksOrgNetworksInternetAccessDestinationNatOutputReference {
    return new DataMistOrgNetworksOrgNetworksInternetAccessDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgNetworksOrgNetworksInternetAccessStaticNat {
}

export function dataMistOrgNetworksOrgNetworksInternetAccessStaticNatToTerraform(struct?: DataMistOrgNetworksOrgNetworksInternetAccessStaticNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksInternetAccessStaticNatToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksInternetAccessStaticNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksInternetAccessStaticNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksInternetAccessStaticNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksInternetAccessStaticNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // wan_name - computed: true, optional: false, required: false
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
}

export class DataMistOrgNetworksOrgNetworksInternetAccessStaticNatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgNetworksOrgNetworksInternetAccessStaticNatOutputReference {
    return new DataMistOrgNetworksOrgNetworksInternetAccessStaticNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgNetworksOrgNetworksInternetAccess {
}

export function dataMistOrgNetworksOrgNetworksInternetAccessToTerraform(struct?: DataMistOrgNetworksOrgNetworksInternetAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksInternetAccessToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksInternetAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksInternetAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksInternetAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksInternetAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_simple_service_policy - computed: true, optional: false, required: false
  public get createSimpleServicePolicy() {
    return this.getBooleanAttribute('create_simple_service_policy');
  }

  // destination_nat - computed: true, optional: false, required: false
  private _destinationNat = new DataMistOrgNetworksOrgNetworksInternetAccessDestinationNatMap(this, "destination_nat");
  public get destinationNat() {
    return this._destinationNat;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // restricted - computed: true, optional: false, required: false
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }

  // static_nat - computed: true, optional: false, required: false
  private _staticNat = new DataMistOrgNetworksOrgNetworksInternetAccessStaticNatMap(this, "static_nat");
  public get staticNat() {
    return this._staticNat;
  }
}
export interface DataMistOrgNetworksOrgNetworksMulticastGroups {
}

export function dataMistOrgNetworksOrgNetworksMulticastGroupsToTerraform(struct?: DataMistOrgNetworksOrgNetworksMulticastGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksMulticastGroupsToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksMulticastGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksMulticastGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksMulticastGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksMulticastGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rp_ip - computed: true, optional: false, required: false
  public get rpIp() {
    return this.getStringAttribute('rp_ip');
  }
}

export class DataMistOrgNetworksOrgNetworksMulticastGroupsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgNetworksOrgNetworksMulticastGroupsOutputReference {
    return new DataMistOrgNetworksOrgNetworksMulticastGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgNetworksOrgNetworksMulticast {
}

export function dataMistOrgNetworksOrgNetworksMulticastToTerraform(struct?: DataMistOrgNetworksOrgNetworksMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksMulticastToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksMulticast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksMulticast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksMulticast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_igmp - computed: true, optional: false, required: false
  public get disableIgmp() {
    return this.getBooleanAttribute('disable_igmp');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataMistOrgNetworksOrgNetworksMulticastGroupsMap(this, "groups");
  public get groups() {
    return this._groups;
  }
}
export interface DataMistOrgNetworksOrgNetworksTenants {
}

export function dataMistOrgNetworksOrgNetworksTenantsToTerraform(struct?: DataMistOrgNetworksOrgNetworksTenants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksTenantsToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksTenants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksTenants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksTenants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
  }
}

export class DataMistOrgNetworksOrgNetworksTenantsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgNetworksOrgNetworksTenantsOutputReference {
    return new DataMistOrgNetworksOrgNetworksTenantsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgNetworksOrgNetworksVpnAccessDestinationNat {
}

export function dataMistOrgNetworksOrgNetworksVpnAccessDestinationNatToTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccessDestinationNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksVpnAccessDestinationNatToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccessDestinationNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksVpnAccessDestinationNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksVpnAccessDestinationNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksVpnAccessDestinationNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}

export class DataMistOrgNetworksOrgNetworksVpnAccessDestinationNatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgNetworksOrgNetworksVpnAccessDestinationNatOutputReference {
    return new DataMistOrgNetworksOrgNetworksVpnAccessDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgNetworksOrgNetworksVpnAccessSourceNat {
}

export function dataMistOrgNetworksOrgNetworksVpnAccessSourceNatToTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccessSourceNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksVpnAccessSourceNatToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccessSourceNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksVpnAccessSourceNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksVpnAccessSourceNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksVpnAccessSourceNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
}
export interface DataMistOrgNetworksOrgNetworksVpnAccessStaticNat {
}

export function dataMistOrgNetworksOrgNetworksVpnAccessStaticNatToTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccessStaticNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksVpnAccessStaticNatToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccessStaticNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksVpnAccessStaticNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksVpnAccessStaticNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksVpnAccessStaticNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataMistOrgNetworksOrgNetworksVpnAccessStaticNatMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgNetworksOrgNetworksVpnAccessStaticNatOutputReference {
    return new DataMistOrgNetworksOrgNetworksVpnAccessStaticNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgNetworksOrgNetworksVpnAccess {
}

export function dataMistOrgNetworksOrgNetworksVpnAccessToTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksVpnAccessToHclTerraform(struct?: DataMistOrgNetworksOrgNetworksVpnAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksVpnAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataMistOrgNetworksOrgNetworksVpnAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworksVpnAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertised_subnet - computed: true, optional: false, required: false
  public get advertisedSubnet() {
    return this.getStringAttribute('advertised_subnet');
  }

  // allow_ping - computed: true, optional: false, required: false
  public get allowPing() {
    return this.getBooleanAttribute('allow_ping');
  }

  // destination_nat - computed: true, optional: false, required: false
  private _destinationNat = new DataMistOrgNetworksOrgNetworksVpnAccessDestinationNatMap(this, "destination_nat");
  public get destinationNat() {
    return this._destinationNat;
  }

  // nat_pool - computed: true, optional: false, required: false
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }

  // no_readvertise_to_lan_bgp - computed: true, optional: false, required: false
  public get noReadvertiseToLanBgp() {
    return this.getBooleanAttribute('no_readvertise_to_lan_bgp');
  }

  // no_readvertise_to_lan_ospf - computed: true, optional: false, required: false
  public get noReadvertiseToLanOspf() {
    return this.getBooleanAttribute('no_readvertise_to_lan_ospf');
  }

  // no_readvertise_to_overlay - computed: true, optional: false, required: false
  public get noReadvertiseToOverlay() {
    return this.getBooleanAttribute('no_readvertise_to_overlay');
  }

  // other_vrfs - computed: true, optional: false, required: false
  public get otherVrfs() {
    return this.getListAttribute('other_vrfs');
  }

  // routed - computed: true, optional: false, required: false
  public get routed() {
    return this.getBooleanAttribute('routed');
  }

  // source_nat - computed: true, optional: false, required: false
  private _sourceNat = new DataMistOrgNetworksOrgNetworksVpnAccessSourceNatOutputReference(this, "source_nat");
  public get sourceNat() {
    return this._sourceNat;
  }

  // static_nat - computed: true, optional: false, required: false
  private _staticNat = new DataMistOrgNetworksOrgNetworksVpnAccessStaticNatMap(this, "static_nat");
  public get staticNat() {
    return this._staticNat;
  }

  // summarized_subnet - computed: true, optional: false, required: false
  public get summarizedSubnet() {
    return this.getStringAttribute('summarized_subnet');
  }

  // summarized_subnet_to_lan_bgp - computed: true, optional: false, required: false
  public get summarizedSubnetToLanBgp() {
    return this.getStringAttribute('summarized_subnet_to_lan_bgp');
  }

  // summarized_subnet_to_lan_ospf - computed: true, optional: false, required: false
  public get summarizedSubnetToLanOspf() {
    return this.getStringAttribute('summarized_subnet_to_lan_ospf');
  }
}

export class DataMistOrgNetworksOrgNetworksVpnAccessMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataMistOrgNetworksOrgNetworksVpnAccessOutputReference {
    return new DataMistOrgNetworksOrgNetworksVpnAccessOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataMistOrgNetworksOrgNetworks {
}

export function dataMistOrgNetworksOrgNetworksToTerraform(struct?: DataMistOrgNetworksOrgNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMistOrgNetworksOrgNetworksToHclTerraform(struct?: DataMistOrgNetworksOrgNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMistOrgNetworksOrgNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMistOrgNetworksOrgNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMistOrgNetworksOrgNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }

  // disallow_mist_services - computed: true, optional: false, required: false
  public get disallowMistServices() {
    return this.getBooleanAttribute('disallow_mist_services');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // gateway6 - computed: true, optional: false, required: false
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_access - computed: true, optional: false, required: false
  private _internalAccess = new DataMistOrgNetworksOrgNetworksInternalAccessOutputReference(this, "internal_access");
  public get internalAccess() {
    return this._internalAccess;
  }

  // internet_access - computed: true, optional: false, required: false
  private _internetAccess = new DataMistOrgNetworksOrgNetworksInternetAccessOutputReference(this, "internet_access");
  public get internetAccess() {
    return this._internetAccess;
  }

  // isolation - computed: true, optional: false, required: false
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getNumberAttribute('modified_time');
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataMistOrgNetworksOrgNetworksMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // routed_for_networks - computed: true, optional: false, required: false
  public get routedForNetworks() {
    return this.getListAttribute('routed_for_networks');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }

  // subnet6 - computed: true, optional: false, required: false
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }

  // tenants - computed: true, optional: false, required: false
  private _tenants = new DataMistOrgNetworksOrgNetworksTenantsMap(this, "tenants");
  public get tenants() {
    return this._tenants;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vpn_access - computed: true, optional: false, required: false
  private _vpnAccess = new DataMistOrgNetworksOrgNetworksVpnAccessMap(this, "vpn_access");
  public get vpnAccess() {
    return this._vpnAccess;
  }
}

export class DataMistOrgNetworksOrgNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataMistOrgNetworksOrgNetworksOutputReference {
    return new DataMistOrgNetworksOrgNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_networks mist_org_networks}
*/
export class DataMistOrgNetworks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMistOrgNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMistOrgNetworks to import
  * @param importFromId The id of the existing DataMistOrgNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMistOrgNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/data-sources/org_networks mist_org_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMistOrgNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: DataMistOrgNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_networks',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // org_networks - computed: true, optional: false, required: false
  private _orgNetworks = new DataMistOrgNetworksOrgNetworksList(this, "org_networks", true);
  public get orgNetworks() {
    return this._orgNetworks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
