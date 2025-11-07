import * as cdktf from 'cdktf';
export interface DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4 {
}

export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4ToTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4OutputReference {
    return new DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6 {
}

export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6ToTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6OutputReference {
    return new DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIp {
}

export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpToTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpToHclTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpOutputReference {
    return new DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2AssociationPrivateIpAssociation {
}

export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationToTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2AssociationPrivateIpAssociationToHclTerraform(struct?: DataNutanixFloatingIpV2AssociationPrivateIpAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2AssociationPrivateIpAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2AssociationPrivateIpAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_ip - computed: true, optional: false, required: false
  private _privateIp = new DataNutanixFloatingIpV2AssociationPrivateIpAssociationPrivateIpList(this, "private_ip", false);
  public get privateIp() {
    return this._privateIp;
  }

  // vpc_reference - computed: true, optional: false, required: false
  public get vpcReference() {
    return this.getStringAttribute('vpc_reference');
  }
}

export class DataNutanixFloatingIpV2AssociationPrivateIpAssociationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2AssociationPrivateIpAssociationOutputReference {
    return new DataNutanixFloatingIpV2AssociationPrivateIpAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2AssociationVmNicAssociation {
}

export function dataNutanixFloatingIpV2AssociationVmNicAssociationToTerraform(struct?: DataNutanixFloatingIpV2AssociationVmNicAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2AssociationVmNicAssociationToHclTerraform(struct?: DataNutanixFloatingIpV2AssociationVmNicAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2AssociationVmNicAssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2AssociationVmNicAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2AssociationVmNicAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vm_nic_reference - computed: true, optional: false, required: false
  public get vmNicReference() {
    return this.getStringAttribute('vm_nic_reference');
  }

  // vpc_reference - computed: true, optional: false, required: false
  public get vpcReference() {
    return this.getStringAttribute('vpc_reference');
  }
}

export class DataNutanixFloatingIpV2AssociationVmNicAssociationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2AssociationVmNicAssociationOutputReference {
    return new DataNutanixFloatingIpV2AssociationVmNicAssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2Association {
}

export function dataNutanixFloatingIpV2AssociationToTerraform(struct?: DataNutanixFloatingIpV2Association): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2AssociationToHclTerraform(struct?: DataNutanixFloatingIpV2Association): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2AssociationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2Association | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2Association | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_ip_association - computed: true, optional: false, required: false
  private _privateIpAssociation = new DataNutanixFloatingIpV2AssociationPrivateIpAssociationList(this, "private_ip_association", false);
  public get privateIpAssociation() {
    return this._privateIpAssociation;
  }

  // vm_nic_association - computed: true, optional: false, required: false
  private _vmNicAssociation = new DataNutanixFloatingIpV2AssociationVmNicAssociationList(this, "vm_nic_association", false);
  public get vmNicAssociation() {
    return this._vmNicAssociation;
  }
}

export class DataNutanixFloatingIpV2AssociationList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2AssociationOutputReference {
    return new DataNutanixFloatingIpV2AssociationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServers {
}

export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServers {
}

export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDhcpOptions {
}

export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDhcpOptionsToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDhcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_file_name - computed: true, optional: false, required: false
  public get bootFileName() {
    return this.getStringAttribute('boot_file_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_name_servers - computed: true, optional: false, required: false
  private _domainNameServers = new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsDomainNameServersList(this, "domain_name_servers", false);
  public get domainNameServers() {
    return this._domainNameServers;
  }

  // ntp_servers - computed: true, optional: false, required: false
  private _ntpServers = new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsNtpServersList(this, "ntp_servers", false);
  public get ntpServers() {
    return this._ntpServers;
  }

  // search_domains - computed: true, optional: false, required: false
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }

  // tftp_server_name - computed: true, optional: false, required: false
  public get tftpServerName() {
    return this.getStringAttribute('tftp_server_name');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddresses {
}

export function dataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddress {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddressToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddressToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddressOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnet {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStruct {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStructToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStructToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_ip - computed: true, optional: false, required: false
  private _endIp = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListEndIpList(this, "end_ip", false);
  public get endIp() {
    return this._endIp;
  }

  // start_ip - computed: true, optional: false, required: false
  private _startIp = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStartIpList(this, "start_ip", false);
  public get startIp() {
    return this._startIp;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStructOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_gateway_ip - computed: true, optional: false, required: false
  private _defaultGatewayIp = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DefaultGatewayIpList(this, "default_gateway_ip", false);
  public get defaultGatewayIp() {
    return this._defaultGatewayIp;
  }

  // dhcp_server_address - computed: true, optional: false, required: false
  private _dhcpServerAddress = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4DhcpServerAddressList(this, "dhcp_server_address", false);
  public get dhcpServerAddress() {
    return this._dhcpServerAddress;
  }

  // ip_subnet - computed: true, optional: false, required: false
  private _ipSubnet = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4IpSubnetList(this, "ip_subnet", false);
  public get ipSubnet() {
    return this._ipSubnet;
  }

  // pool_list - computed: true, optional: false, required: false
  private _poolList = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4PoolListStructList(this, "pool_list", false);
  public get poolList() {
    return this._poolList;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddress {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddressToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddressToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddressOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnet {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStruct {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStructToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStructToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_ip - computed: true, optional: false, required: false
  private _endIp = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListEndIpList(this, "end_ip", false);
  public get endIp() {
    return this._endIp;
  }

  // start_ip - computed: true, optional: false, required: false
  private _startIp = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStartIpList(this, "start_ip", false);
  public get startIp() {
    return this._startIp;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStructOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_gateway_ip - computed: true, optional: false, required: false
  private _defaultGatewayIp = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DefaultGatewayIpList(this, "default_gateway_ip", false);
  public get defaultGatewayIp() {
    return this._defaultGatewayIp;
  }

  // dhcp_server_address - computed: true, optional: false, required: false
  private _dhcpServerAddress = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6DhcpServerAddressList(this, "dhcp_server_address", false);
  public get dhcpServerAddress() {
    return this._dhcpServerAddress;
  }

  // ip_subnet - computed: true, optional: false, required: false
  private _ipSubnet = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6IpSubnetList(this, "ip_subnet", false);
  public get ipSubnet() {
    return this._ipSubnet;
  }

  // pool_list - computed: true, optional: false, required: false
  private _poolList = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6PoolListStructList(this, "pool_list", false);
  public get poolList() {
    return this._poolList;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpConfig {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpConfigToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpConfigToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetIpConfigIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpConfigOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRange {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_ip - computed: true, optional: false, required: false
  private _endIp = new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeEndIpList(this, "end_ip", false);
  public get endIp() {
    return this._endIp;
  }

  // start_ip - computed: true, optional: false, required: false
  private _startIp = new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeStartIpList(this, "start_ip", false);
  public get startIp() {
    return this._startIp;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsages {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_free_ips - computed: true, optional: false, required: false
  public get numFreeIps() {
    return this.getNumberAttribute('num_free_ips');
  }

  // num_total_ips - computed: true, optional: false, required: false
  public get numTotalIps() {
    return this.getNumberAttribute('num_total_ips');
  }

  // range - computed: true, optional: false, required: false
  private _range = new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetIpUsage {
}

export function dataNutanixFloatingIpV2ExternalSubnetIpUsageToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetIpUsageToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetIpUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetIpUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetIpUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_pool_usages - computed: true, optional: false, required: false
  private _ipPoolUsages = new DataNutanixFloatingIpV2ExternalSubnetIpUsageIpPoolUsagesList(this, "ip_pool_usages", false);
  public get ipPoolUsages() {
    return this._ipPoolUsages;
  }

  // num_assigned_ips - computed: true, optional: false, required: false
  public get numAssignedIps() {
    return this.getNumberAttribute('num_assigned_ips');
  }

  // num_free_ips - computed: true, optional: false, required: false
  public get numFreeIps() {
    return this.getNumberAttribute('num_free_ips');
  }

  // num_macs - computed: true, optional: false, required: false
  public get numMacs() {
    return this.getNumberAttribute('num_macs');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetIpUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetIpUsageOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetIpUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetLinks {
}

export function dataNutanixFloatingIpV2ExternalSubnetLinksToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetLinksToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetLinksOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetReservedIpAddresses {
}

export function dataNutanixFloatingIpV2ExternalSubnetReservedIpAddressesToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetReservedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetReservedIpAddressesToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetReservedIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetReservedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetReservedIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetReservedIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetReservedIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetReservedIpAddressesOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetReservedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddress {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddressToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddressToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddressOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIp {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddress {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHosts {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // host_nics - computed: true, optional: false, required: false
  public get hostNics() {
    return this.getListAttribute('host_nics');
  }

  // internal_bridge_name - computed: true, optional: false, required: false
  public get internalBridgeName() {
    return this.getStringAttribute('internal_bridge_name');
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // route_table - computed: true, optional: false, required: false
  public get routeTable() {
    return this.getNumberAttribute('route_table');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClusters {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // gateway_ip_address - computed: true, optional: false, required: false
  private _gatewayIpAddress = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersGatewayIpAddressList(this, "gateway_ip_address", false);
  public get gatewayIpAddress() {
    return this._gatewayIpAddress;
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinks {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinksToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinksToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinksOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadata {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadataToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadataToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ids - computed: true, optional: false, required: false
  private _categoryIds = new cdktf.StringListList(this, "category_ids", false);
  public get categoryIds() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: false, required: false
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_reference_id - computed: true, optional: false, required: false
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadataOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVirtualSwitch {
}

export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVirtualSwitchToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVirtualSwitch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bond_mode - computed: true, optional: false, required: false
  public get bondMode() {
    return this.getBooleanAttribute('bond_mode');
  }

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // has_deployment_error - computed: true, optional: false, required: false
  public get hasDeploymentError() {
    return this.getBooleanAttribute('has_deployment_error');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServers {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptions {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name_servers - computed: true, optional: false, required: false
  private _domainNameServers = new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsDomainNameServersList(this, "domain_name_servers", false);
  public get domainNameServers() {
    return this._domainNameServers;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddress {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNode {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_ip_address - computed: true, optional: false, required: false
  private _nodeIpAddress = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeNodeIpAddressList(this, "node_ip_address", false);
  public get nodeIpAddress() {
    return this._nodeIpAddress;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIps {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnets {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_gateway_count - computed: true, optional: false, required: false
  public get activeGatewayCount() {
    return this.getNumberAttribute('active_gateway_count');
  }

  // active_gateway_node - computed: true, optional: false, required: false
  private _activeGatewayNode = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsActiveGatewayNodeList(this, "active_gateway_node", false);
  public get activeGatewayNode() {
    return this._activeGatewayNode;
  }

  // external_ips - computed: true, optional: false, required: false
  private _externalIps = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsExternalIpsList(this, "external_ips", false);
  public get externalIps() {
    return this._externalIps;
  }

  // gateway_nodes - computed: true, optional: false, required: false
  public get gatewayNodes() {
    return this.getListAttribute('gateway_nodes');
  }

  // subnet_reference - computed: true, optional: false, required: false
  public get subnetReference() {
    return this.getStringAttribute('subnet_reference');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4Ip {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4IpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4IpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4Ip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4IpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6Ip {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6IpToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6IpToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6Ip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6IpOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixes {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcLinks {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcLinksToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcLinksToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcLinksOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcMetadata {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcMetadataToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcMetadataToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ids - computed: true, optional: false, required: false
  private _categoryIds = new cdktf.StringListList(this, "category_ids", false);
  public get categoryIds() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: false, required: false
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_reference_id - computed: true, optional: false, required: false
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcMetadataOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6 {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6ToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6OutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpcSnatIps {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpcSnatIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpcSnatIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnetVpc {
}

export function dataNutanixFloatingIpV2ExternalSubnetVpcToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetVpcToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnetVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnetVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnetVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_dhcp_options - computed: true, optional: false, required: false
  private _commonDhcpOptions = new DataNutanixFloatingIpV2ExternalSubnetVpcCommonDhcpOptionsList(this, "common_dhcp_options", false);
  public get commonDhcpOptions() {
    return this._commonDhcpOptions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // external_routing_domain_reference - computed: true, optional: false, required: false
  public get externalRoutingDomainReference() {
    return this.getStringAttribute('external_routing_domain_reference');
  }

  // external_subnets - computed: true, optional: false, required: false
  private _externalSubnets = new DataNutanixFloatingIpV2ExternalSubnetVpcExternalSubnetsList(this, "external_subnets", false);
  public get externalSubnets() {
    return this._externalSubnets;
  }

  // externally_routable_prefixes - computed: true, optional: false, required: false
  private _externallyRoutablePrefixes = new DataNutanixFloatingIpV2ExternalSubnetVpcExternallyRoutablePrefixesList(this, "externally_routable_prefixes", false);
  public get externallyRoutablePrefixes() {
    return this._externallyRoutablePrefixes;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixFloatingIpV2ExternalSubnetVpcLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataNutanixFloatingIpV2ExternalSubnetVpcMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // snat_ips - computed: true, optional: false, required: false
  private _snatIps = new DataNutanixFloatingIpV2ExternalSubnetVpcSnatIpsList(this, "snat_ips", false);
  public get snatIps() {
    return this._snatIps;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vpc_type - computed: true, optional: false, required: false
  public get vpcType() {
    return this.getStringAttribute('vpc_type');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetVpcList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetVpcOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2ExternalSubnet {
}

export function dataNutanixFloatingIpV2ExternalSubnetToTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2ExternalSubnetToHclTerraform(struct?: DataNutanixFloatingIpV2ExternalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2ExternalSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2ExternalSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2ExternalSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bridge_name - computed: true, optional: false, required: false
  public get bridgeName() {
    return this.getStringAttribute('bridge_name');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_reference - computed: true, optional: false, required: false
  public get clusterReference() {
    return this.getStringAttribute('cluster_reference');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dhcp_options - computed: true, optional: false, required: false
  private _dhcpOptions = new DataNutanixFloatingIpV2ExternalSubnetDhcpOptionsList(this, "dhcp_options", false);
  public get dhcpOptions() {
    return this._dhcpOptions;
  }

  // dynamic_ip_addresses - computed: true, optional: false, required: false
  private _dynamicIpAddresses = new DataNutanixFloatingIpV2ExternalSubnetDynamicIpAddressesList(this, "dynamic_ip_addresses", false);
  public get dynamicIpAddresses() {
    return this._dynamicIpAddresses;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // ip_config - computed: true, optional: false, required: false
  private _ipConfig = new DataNutanixFloatingIpV2ExternalSubnetIpConfigList(this, "ip_config", false);
  public get ipConfig() {
    return this._ipConfig;
  }

  // ip_prefix - computed: true, optional: false, required: false
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }

  // ip_usage - computed: true, optional: false, required: false
  private _ipUsage = new DataNutanixFloatingIpV2ExternalSubnetIpUsageList(this, "ip_usage", false);
  public get ipUsage() {
    return this._ipUsage;
  }

  // is_advanced_networking - computed: true, optional: false, required: false
  public get isAdvancedNetworking() {
    return this.getBooleanAttribute('is_advanced_networking');
  }

  // is_external - computed: true, optional: false, required: false
  public get isExternal() {
    return this.getBooleanAttribute('is_external');
  }

  // is_nat_enabled - computed: true, optional: false, required: false
  public get isNatEnabled() {
    return this.getBooleanAttribute('is_nat_enabled');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixFloatingIpV2ExternalSubnetLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // migration_state - computed: true, optional: false, required: false
  public get migrationState() {
    return this.getStringAttribute('migration_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_function_chain_reference - computed: true, optional: false, required: false
  public get networkFunctionChainReference() {
    return this.getStringAttribute('network_function_chain_reference');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }

  // reserved_ip_addresses - computed: true, optional: false, required: false
  private _reservedIpAddresses = new DataNutanixFloatingIpV2ExternalSubnetReservedIpAddressesList(this, "reserved_ip_addresses", false);
  public get reservedIpAddresses() {
    return this._reservedIpAddresses;
  }

  // subnet_type - computed: true, optional: false, required: false
  public get subnetType() {
    return this.getStringAttribute('subnet_type');
  }

  // virtual_switch - computed: true, optional: false, required: false
  private _virtualSwitch = new DataNutanixFloatingIpV2ExternalSubnetVirtualSwitchList(this, "virtual_switch", false);
  public get virtualSwitch() {
    return this._virtualSwitch;
  }

  // virtual_switch_reference - computed: true, optional: false, required: false
  public get virtualSwitchReference() {
    return this.getStringAttribute('virtual_switch_reference');
  }

  // vpc - computed: true, optional: false, required: false
  private _vpc = new DataNutanixFloatingIpV2ExternalSubnetVpcList(this, "vpc", false);
  public get vpc() {
    return this._vpc;
  }

  // vpc_reference - computed: true, optional: false, required: false
  public get vpcReference() {
    return this.getStringAttribute('vpc_reference');
  }
}

export class DataNutanixFloatingIpV2ExternalSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2ExternalSubnetOutputReference {
    return new DataNutanixFloatingIpV2ExternalSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2FloatingIpIpv4 {
}

export function dataNutanixFloatingIpV2FloatingIpIpv4ToTerraform(struct?: DataNutanixFloatingIpV2FloatingIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2FloatingIpIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2FloatingIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2FloatingIpIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2FloatingIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2FloatingIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2FloatingIpIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2FloatingIpIpv4OutputReference {
    return new DataNutanixFloatingIpV2FloatingIpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2FloatingIpIpv6 {
}

export function dataNutanixFloatingIpV2FloatingIpIpv6ToTerraform(struct?: DataNutanixFloatingIpV2FloatingIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2FloatingIpIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2FloatingIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2FloatingIpIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2FloatingIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2FloatingIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2FloatingIpIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2FloatingIpIpv6OutputReference {
    return new DataNutanixFloatingIpV2FloatingIpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2FloatingIp {
}

export function dataNutanixFloatingIpV2FloatingIpToTerraform(struct?: DataNutanixFloatingIpV2FloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2FloatingIpToHclTerraform(struct?: DataNutanixFloatingIpV2FloatingIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2FloatingIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2FloatingIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2FloatingIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2FloatingIpIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2FloatingIpIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2FloatingIpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2FloatingIpOutputReference {
    return new DataNutanixFloatingIpV2FloatingIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2Links {
}

export function dataNutanixFloatingIpV2LinksToTerraform(struct?: DataNutanixFloatingIpV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2LinksToHclTerraform(struct?: DataNutanixFloatingIpV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixFloatingIpV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2LinksOutputReference {
    return new DataNutanixFloatingIpV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2Metadata {
}

export function dataNutanixFloatingIpV2MetadataToTerraform(struct?: DataNutanixFloatingIpV2Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2MetadataToHclTerraform(struct?: DataNutanixFloatingIpV2Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2MetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ids - computed: true, optional: false, required: false
  private _categoryIds = new cdktf.StringListList(this, "category_ids", false);
  public get categoryIds() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: false, required: false
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_reference_id - computed: true, optional: false, required: false
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
}

export class DataNutanixFloatingIpV2MetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2MetadataOutputReference {
    return new DataNutanixFloatingIpV2MetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VmNic {
}

export function dataNutanixFloatingIpV2VmNicToTerraform(struct?: DataNutanixFloatingIpV2VmNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VmNicToHclTerraform(struct?: DataNutanixFloatingIpV2VmNic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VmNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VmNic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VmNic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
}

export class DataNutanixFloatingIpV2VmNicList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VmNicOutputReference {
    return new DataNutanixFloatingIpV2VmNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4 {
}

export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4ToTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4OutputReference {
    return new DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6 {
}

export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6ToTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6OutputReference {
    return new DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServers {
}

export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersToTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersToHclTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersOutputReference {
    return new DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcCommonDhcpOptions {
}

export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsToTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcCommonDhcpOptionsToHclTerraform(struct?: DataNutanixFloatingIpV2VpcCommonDhcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcCommonDhcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcCommonDhcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name_servers - computed: true, optional: false, required: false
  private _domainNameServers = new DataNutanixFloatingIpV2VpcCommonDhcpOptionsDomainNameServersList(this, "domain_name_servers", false);
  public get domainNameServers() {
    return this._domainNameServers;
  }
}

export class DataNutanixFloatingIpV2VpcCommonDhcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcCommonDhcpOptionsOutputReference {
    return new DataNutanixFloatingIpV2VpcCommonDhcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4 {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4ToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4OutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6 {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6ToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6OutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddress {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressOutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNode {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_ip_address - computed: true, optional: false, required: false
  private _nodeIpAddress = new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeNodeIpAddressList(this, "node_ip_address", false);
  public get nodeIpAddress() {
    return this._nodeIpAddress;
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeOutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4 {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4ToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4OutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6 {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6ToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6OutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnetsExternalIps {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnetsExternalIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnetsExternalIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsOutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternalSubnets {
}

export function dataNutanixFloatingIpV2VpcExternalSubnetsToTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternalSubnetsToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternalSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternalSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternalSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_gateway_count - computed: true, optional: false, required: false
  public get activeGatewayCount() {
    return this.getNumberAttribute('active_gateway_count');
  }

  // active_gateway_node - computed: true, optional: false, required: false
  private _activeGatewayNode = new DataNutanixFloatingIpV2VpcExternalSubnetsActiveGatewayNodeList(this, "active_gateway_node", false);
  public get activeGatewayNode() {
    return this._activeGatewayNode;
  }

  // external_ips - computed: true, optional: false, required: false
  private _externalIps = new DataNutanixFloatingIpV2VpcExternalSubnetsExternalIpsList(this, "external_ips", false);
  public get externalIps() {
    return this._externalIps;
  }

  // gateway_nodes - computed: true, optional: false, required: false
  public get gatewayNodes() {
    return this.getListAttribute('gateway_nodes');
  }

  // subnet_reference - computed: true, optional: false, required: false
  public get subnetReference() {
    return this.getStringAttribute('subnet_reference');
  }
}

export class DataNutanixFloatingIpV2VpcExternalSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternalSubnetsOutputReference {
    return new DataNutanixFloatingIpV2VpcExternalSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4Ip {
}

export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4IpToTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4IpToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4Ip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4IpOutputReference {
    return new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4 {
}

export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4ToTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4OutputReference {
    return new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6Ip {
}

export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6IpToTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6IpToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6Ip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6IpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6Ip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6Ip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6IpList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6IpOutputReference {
    return new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6IpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6 {
}

export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6ToTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  private _ip = new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6IpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6OutputReference {
    return new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcExternallyRoutablePrefixes {
}

export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesToTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcExternallyRoutablePrefixesToHclTerraform(struct?: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcExternallyRoutablePrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesOutputReference {
    return new DataNutanixFloatingIpV2VpcExternallyRoutablePrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcLinks {
}

export function dataNutanixFloatingIpV2VpcLinksToTerraform(struct?: DataNutanixFloatingIpV2VpcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcLinksToHclTerraform(struct?: DataNutanixFloatingIpV2VpcLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataNutanixFloatingIpV2VpcLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcLinksOutputReference {
    return new DataNutanixFloatingIpV2VpcLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcMetadata {
}

export function dataNutanixFloatingIpV2VpcMetadataToTerraform(struct?: DataNutanixFloatingIpV2VpcMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcMetadataToHclTerraform(struct?: DataNutanixFloatingIpV2VpcMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category_ids - computed: true, optional: false, required: false
  private _categoryIds = new cdktf.StringListList(this, "category_ids", false);
  public get categoryIds() {
    return this._categoryIds;
  }

  // owner_reference_id - computed: true, optional: false, required: false
  public get ownerReferenceId() {
    return this.getStringAttribute('owner_reference_id');
  }

  // owner_user_name - computed: true, optional: false, required: false
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_reference_id - computed: true, optional: false, required: false
  public get projectReferenceId() {
    return this.getStringAttribute('project_reference_id');
  }
}

export class DataNutanixFloatingIpV2VpcMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcMetadataOutputReference {
    return new DataNutanixFloatingIpV2VpcMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcSnatIpsIpv4 {
}

export function dataNutanixFloatingIpV2VpcSnatIpsIpv4ToTerraform(struct?: DataNutanixFloatingIpV2VpcSnatIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcSnatIpsIpv4ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcSnatIpsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcSnatIpsIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcSnatIpsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcSnatIpsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcSnatIpsIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcSnatIpsIpv4OutputReference {
    return new DataNutanixFloatingIpV2VpcSnatIpsIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcSnatIpsIpv6 {
}

export function dataNutanixFloatingIpV2VpcSnatIpsIpv6ToTerraform(struct?: DataNutanixFloatingIpV2VpcSnatIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcSnatIpsIpv6ToHclTerraform(struct?: DataNutanixFloatingIpV2VpcSnatIpsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcSnatIpsIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcSnatIpsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcSnatIpsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixFloatingIpV2VpcSnatIpsIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcSnatIpsIpv6OutputReference {
    return new DataNutanixFloatingIpV2VpcSnatIpsIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixFloatingIpV2VpcSnatIps {
}

export function dataNutanixFloatingIpV2VpcSnatIpsToTerraform(struct?: DataNutanixFloatingIpV2VpcSnatIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixFloatingIpV2VpcSnatIpsToHclTerraform(struct?: DataNutanixFloatingIpV2VpcSnatIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixFloatingIpV2VpcSnatIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixFloatingIpV2VpcSnatIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixFloatingIpV2VpcSnatIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixFloatingIpV2VpcSnatIpsIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixFloatingIpV2VpcSnatIpsIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixFloatingIpV2VpcSnatIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixFloatingIpV2VpcSnatIpsOutputReference {
    return new DataNutanixFloatingIpV2VpcSnatIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
