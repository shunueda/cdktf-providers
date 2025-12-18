// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreNetworkSecurityGroupSecurityRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#direction DataOciCoreNetworkSecurityGroupSecurityRules#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#id DataOciCoreNetworkSecurityGroupSecurityRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#network_security_group_id DataOciCoreNetworkSecurityGroupSecurityRules#network_security_group_id}
  */
  readonly networkSecurityGroupId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#filter DataOciCoreNetworkSecurityGroupSecurityRules#filter}
  */
  readonly filter?: DataOciCoreNetworkSecurityGroupSecurityRulesFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_port_range - computed: true, optional: false, required: false
  private _destinationPortRange = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRangeList(this, "destination_port_range", false);
  public get destinationPortRange() {
    return this._destinationPortRange;
  }

  // source_port_range - computed: true, optional: false, required: false
  private _sourcePortRange = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRangeList(this, "source_port_range", false);
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_port_range - computed: true, optional: false, required: false
  private _destinationPortRange = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRangeList(this, "destination_port_range", false);
  public get destinationPortRange() {
    return this._destinationPortRange;
  }

  // source_port_range - computed: true, optional: false, required: false
  private _sourcePortRange = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRangeList(this, "source_port_range", false);
  public get sourcePortRange() {
    return this._sourcePortRange;
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules {
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // icmp_options - computed: true, optional: false, required: false
  private _icmpOptions = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptionsList(this, "icmp_options", false);
  public get icmpOptions() {
    return this._icmpOptions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // stateless - computed: true, optional: false, required: false
  public get stateless() {
    return this.getBooleanAttribute('stateless');
  }

  // tcp_options - computed: true, optional: false, required: false
  private _tcpOptions = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsList(this, "tcp_options", false);
  public get tcpOptions() {
    return this._tcpOptions;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // udp_options - computed: true, optional: false, required: false
  private _udpOptions = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsList(this, "udp_options", false);
  public get udpOptions() {
    return this._udpOptions;
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#name DataOciCoreNetworkSecurityGroupSecurityRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#regex DataOciCoreNetworkSecurityGroupSecurityRules#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#values DataOciCoreNetworkSecurityGroupSecurityRules#values}
  */
  readonly values: string[];
}

export function dataOciCoreNetworkSecurityGroupSecurityRulesFilterToTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCoreNetworkSecurityGroupSecurityRulesFilterToHclTerraform(struct?: DataOciCoreNetworkSecurityGroupSecurityRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciCoreNetworkSecurityGroupSecurityRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreNetworkSecurityGroupSecurityRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciCoreNetworkSecurityGroupSecurityRulesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreNetworkSecurityGroupSecurityRulesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules oci_core_network_security_group_security_rules}
*/
export class DataOciCoreNetworkSecurityGroupSecurityRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_network_security_group_security_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreNetworkSecurityGroupSecurityRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreNetworkSecurityGroupSecurityRules to import
  * @param importFromId The id of the existing DataOciCoreNetworkSecurityGroupSecurityRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreNetworkSecurityGroupSecurityRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_network_security_group_security_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_network_security_group_security_rules oci_core_network_security_group_security_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreNetworkSecurityGroupSecurityRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreNetworkSecurityGroupSecurityRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_network_security_group_security_rules',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._id = config.id;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId?: string; 
  public get networkSecurityGroupId() {
    return this.getStringAttribute('network_security_group_id');
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupIdInput() {
    return this._networkSecurityGroupId;
  }

  // security_rules - computed: true, optional: false, required: false
  private _securityRules = new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesList(this, "security_rules", false);
  public get securityRules() {
    return this._securityRules;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreNetworkSecurityGroupSecurityRulesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreNetworkSecurityGroupSecurityRulesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      id: cdktf.stringToTerraform(this._id),
      network_security_group_id: cdktf.stringToTerraform(this._networkSecurityGroupId),
      filter: cdktf.listMapper(dataOciCoreNetworkSecurityGroupSecurityRulesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      network_security_group_id: {
        value: cdktf.stringToHclTerraform(this._networkSecurityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreNetworkSecurityGroupSecurityRulesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreNetworkSecurityGroupSecurityRulesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
