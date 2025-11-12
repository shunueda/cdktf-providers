// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclVnaApplianceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#appliance_type DataEclVnaApplianceV1#appliance_type}
  */
  readonly applianceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#availability_zone DataEclVnaApplianceV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#description DataEclVnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#id DataEclVnaApplianceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#name DataEclVnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#operation_status DataEclVnaApplianceV1#operation_status}
  */
  readonly operationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#os_login_status DataEclVnaApplianceV1#os_login_status}
  */
  readonly osLoginStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#os_monitoring_status DataEclVnaApplianceV1#os_monitoring_status}
  */
  readonly osMonitoringStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#tenant_id DataEclVnaApplianceV1#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#virtual_network_appliance_id DataEclVnaApplianceV1#virtual_network_appliance_id}
  */
  readonly virtualNetworkApplianceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#virtual_network_appliance_plan_id DataEclVnaApplianceV1#virtual_network_appliance_plan_id}
  */
  readonly virtualNetworkAppliancePlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#vm_status DataEclVnaApplianceV1#vm_status}
  */
  readonly vmStatus?: string;
  /**
  * interface_1_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_1_info DataEclVnaApplianceV1#interface_1_info}
  */
  readonly interface1Info?: DataEclVnaApplianceV1Interface1Info[] | cdktf.IResolvable;
  /**
  * interface_2_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_2_info DataEclVnaApplianceV1#interface_2_info}
  */
  readonly interface2Info?: DataEclVnaApplianceV1Interface2Info[] | cdktf.IResolvable;
  /**
  * interface_3_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_3_info DataEclVnaApplianceV1#interface_3_info}
  */
  readonly interface3Info?: DataEclVnaApplianceV1Interface3Info[] | cdktf.IResolvable;
  /**
  * interface_4_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_4_info DataEclVnaApplianceV1#interface_4_info}
  */
  readonly interface4Info?: DataEclVnaApplianceV1Interface4Info[] | cdktf.IResolvable;
  /**
  * interface_5_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_5_info DataEclVnaApplianceV1#interface_5_info}
  */
  readonly interface5Info?: DataEclVnaApplianceV1Interface5Info[] | cdktf.IResolvable;
  /**
  * interface_6_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_6_info DataEclVnaApplianceV1#interface_6_info}
  */
  readonly interface6Info?: DataEclVnaApplianceV1Interface6Info[] | cdktf.IResolvable;
  /**
  * interface_7_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_7_info DataEclVnaApplianceV1#interface_7_info}
  */
  readonly interface7Info?: DataEclVnaApplianceV1Interface7Info[] | cdktf.IResolvable;
  /**
  * interface_8_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#interface_8_info DataEclVnaApplianceV1#interface_8_info}
  */
  readonly interface8Info?: DataEclVnaApplianceV1Interface8Info[] | cdktf.IResolvable;
}
export interface DataEclVnaApplianceV1Interface1AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface1AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface1AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface1AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface1AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface1AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface1AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface1AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface1AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface1AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface1AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface1FixedIps {
}

export function dataEclVnaApplianceV1Interface1FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface1FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface1FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface1FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface1FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface1FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface1FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface1FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface1FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface1FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface2AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface2AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface2AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface2AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface2AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface2AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface2AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface2AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface2AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface2AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface2AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface2FixedIps {
}

export function dataEclVnaApplianceV1Interface2FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface2FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface2FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface2FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface2FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface2FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface2FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface2FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface2FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface2FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface3AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface3AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface3AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface3AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface3AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface3AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface3AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface3AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface3AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface3AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface3AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface3FixedIps {
}

export function dataEclVnaApplianceV1Interface3FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface3FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface3FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface3FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface3FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface3FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface3FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface3FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface3FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface3FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface4AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface4AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface4AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface4AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface4AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface4AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface4AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface4AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface4AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface4AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface4AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface4FixedIps {
}

export function dataEclVnaApplianceV1Interface4FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface4FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface4FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface4FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface4FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface4FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface4FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface4FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface4FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface4FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface5AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface5AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface5AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface5AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface5AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface5AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface5AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface5AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface5AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface5AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface5AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface5FixedIps {
}

export function dataEclVnaApplianceV1Interface5FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface5FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface5FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface5FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface5FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface5FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface5FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface5FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface5FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface5FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface6AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface6AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface6AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface6AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface6AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface6AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface6AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface6AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface6AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface6AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface6AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface6FixedIps {
}

export function dataEclVnaApplianceV1Interface6FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface6FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface6FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface6FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface6FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface6FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface6FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface6FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface6FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface6FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface7AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface7AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface7AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface7AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface7AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface7AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface7AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface7AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface7AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface7AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface7AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface7FixedIps {
}

export function dataEclVnaApplianceV1Interface7FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface7FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface7FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface7FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface7FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface7FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface7FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface7FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface7FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface7FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface8AllowedAddressPairs {
}

export function dataEclVnaApplianceV1Interface8AllowedAddressPairsToTerraform(struct?: DataEclVnaApplianceV1Interface8AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface8AllowedAddressPairsToHclTerraform(struct?: DataEclVnaApplianceV1Interface8AllowedAddressPairs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface8AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface8AllowedAddressPairs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface8AllowedAddressPairs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrid - computed: true, optional: false, required: false
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
}

export class DataEclVnaApplianceV1Interface8AllowedAddressPairsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface8AllowedAddressPairsOutputReference {
    return new DataEclVnaApplianceV1Interface8AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface8FixedIps {
}

export function dataEclVnaApplianceV1Interface8FixedIpsToTerraform(struct?: DataEclVnaApplianceV1Interface8FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface8FixedIpsToHclTerraform(struct?: DataEclVnaApplianceV1Interface8FixedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface8FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface8FixedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface8FixedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataEclVnaApplianceV1Interface8FixedIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataEclVnaApplianceV1Interface8FixedIpsOutputReference {
    return new DataEclVnaApplianceV1Interface8FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface1Info {
}

export function dataEclVnaApplianceV1Interface1InfoToTerraform(struct?: DataEclVnaApplianceV1Interface1Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface1InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface1Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface1InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface1Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface1Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface1InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface1Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface1InfoOutputReference {
    return new DataEclVnaApplianceV1Interface1InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface2Info {
}

export function dataEclVnaApplianceV1Interface2InfoToTerraform(struct?: DataEclVnaApplianceV1Interface2Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface2InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface2Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface2InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface2Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface2Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface2InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface2Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface2InfoOutputReference {
    return new DataEclVnaApplianceV1Interface2InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface3Info {
}

export function dataEclVnaApplianceV1Interface3InfoToTerraform(struct?: DataEclVnaApplianceV1Interface3Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface3InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface3Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface3InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface3Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface3Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface3InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface3Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface3InfoOutputReference {
    return new DataEclVnaApplianceV1Interface3InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface4Info {
}

export function dataEclVnaApplianceV1Interface4InfoToTerraform(struct?: DataEclVnaApplianceV1Interface4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface4InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface4InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface4Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface4Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface4InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface4Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface4InfoOutputReference {
    return new DataEclVnaApplianceV1Interface4InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface5Info {
}

export function dataEclVnaApplianceV1Interface5InfoToTerraform(struct?: DataEclVnaApplianceV1Interface5Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface5InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface5Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface5InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface5Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface5Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface5InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface5Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface5InfoOutputReference {
    return new DataEclVnaApplianceV1Interface5InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface6Info {
}

export function dataEclVnaApplianceV1Interface6InfoToTerraform(struct?: DataEclVnaApplianceV1Interface6Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface6InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface6Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface6InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface6Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface6Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface6InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface6Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface6InfoOutputReference {
    return new DataEclVnaApplianceV1Interface6InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface7Info {
}

export function dataEclVnaApplianceV1Interface7InfoToTerraform(struct?: DataEclVnaApplianceV1Interface7Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface7InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface7Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface7InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface7Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface7Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface7InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface7Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface7InfoOutputReference {
    return new DataEclVnaApplianceV1Interface7InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclVnaApplianceV1Interface8Info {
}

export function dataEclVnaApplianceV1Interface8InfoToTerraform(struct?: DataEclVnaApplianceV1Interface8Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEclVnaApplianceV1Interface8InfoToHclTerraform(struct?: DataEclVnaApplianceV1Interface8Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEclVnaApplianceV1Interface8InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclVnaApplianceV1Interface8Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclVnaApplianceV1Interface8Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}

export class DataEclVnaApplianceV1Interface8InfoList extends cdktf.ComplexList {
  public internalValue? : DataEclVnaApplianceV1Interface8Info[] | cdktf.IResolvable

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
  public get(index: number): DataEclVnaApplianceV1Interface8InfoOutputReference {
    return new DataEclVnaApplianceV1Interface8InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1 ecl_vna_appliance_v1}
*/
export class DataEclVnaApplianceV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_vna_appliance_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclVnaApplianceV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclVnaApplianceV1 to import
  * @param importFromId The id of the existing DataEclVnaApplianceV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclVnaApplianceV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_vna_appliance_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/vna_appliance_v1 ecl_vna_appliance_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclVnaApplianceV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclVnaApplianceV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_vna_appliance_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applianceType = config.applianceType;
    this._availabilityZone = config.availabilityZone;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._operationStatus = config.operationStatus;
    this._osLoginStatus = config.osLoginStatus;
    this._osMonitoringStatus = config.osMonitoringStatus;
    this._tenantId = config.tenantId;
    this._virtualNetworkApplianceId = config.virtualNetworkApplianceId;
    this._virtualNetworkAppliancePlanId = config.virtualNetworkAppliancePlanId;
    this._vmStatus = config.vmStatus;
    this._interface1Info.internalValue = config.interface1Info;
    this._interface2Info.internalValue = config.interface2Info;
    this._interface3Info.internalValue = config.interface3Info;
    this._interface4Info.internalValue = config.interface4Info;
    this._interface5Info.internalValue = config.interface5Info;
    this._interface6Info.internalValue = config.interface6Info;
    this._interface7Info.internalValue = config.interface7Info;
    this._interface8Info.internalValue = config.interface8Info;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_type - computed: true, optional: true, required: false
  private _applianceType?: string; 
  public get applianceType() {
    return this.getStringAttribute('appliance_type');
  }
  public set applianceType(value: string) {
    this._applianceType = value;
  }
  public resetApplianceType() {
    this._applianceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceTypeInput() {
    return this._applianceType;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // interface_1_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface1AllowedAddressPairs = new DataEclVnaApplianceV1Interface1AllowedAddressPairsList(this, "interface_1_allowed_address_pairs", false);
  public get interface1AllowedAddressPairs() {
    return this._interface1AllowedAddressPairs;
  }

  // interface_1_fixed_ips - computed: true, optional: false, required: false
  private _interface1FixedIps = new DataEclVnaApplianceV1Interface1FixedIpsList(this, "interface_1_fixed_ips", false);
  public get interface1FixedIps() {
    return this._interface1FixedIps;
  }

  // interface_2_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface2AllowedAddressPairs = new DataEclVnaApplianceV1Interface2AllowedAddressPairsList(this, "interface_2_allowed_address_pairs", false);
  public get interface2AllowedAddressPairs() {
    return this._interface2AllowedAddressPairs;
  }

  // interface_2_fixed_ips - computed: true, optional: false, required: false
  private _interface2FixedIps = new DataEclVnaApplianceV1Interface2FixedIpsList(this, "interface_2_fixed_ips", false);
  public get interface2FixedIps() {
    return this._interface2FixedIps;
  }

  // interface_3_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface3AllowedAddressPairs = new DataEclVnaApplianceV1Interface3AllowedAddressPairsList(this, "interface_3_allowed_address_pairs", false);
  public get interface3AllowedAddressPairs() {
    return this._interface3AllowedAddressPairs;
  }

  // interface_3_fixed_ips - computed: true, optional: false, required: false
  private _interface3FixedIps = new DataEclVnaApplianceV1Interface3FixedIpsList(this, "interface_3_fixed_ips", false);
  public get interface3FixedIps() {
    return this._interface3FixedIps;
  }

  // interface_4_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface4AllowedAddressPairs = new DataEclVnaApplianceV1Interface4AllowedAddressPairsList(this, "interface_4_allowed_address_pairs", false);
  public get interface4AllowedAddressPairs() {
    return this._interface4AllowedAddressPairs;
  }

  // interface_4_fixed_ips - computed: true, optional: false, required: false
  private _interface4FixedIps = new DataEclVnaApplianceV1Interface4FixedIpsList(this, "interface_4_fixed_ips", false);
  public get interface4FixedIps() {
    return this._interface4FixedIps;
  }

  // interface_5_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface5AllowedAddressPairs = new DataEclVnaApplianceV1Interface5AllowedAddressPairsList(this, "interface_5_allowed_address_pairs", false);
  public get interface5AllowedAddressPairs() {
    return this._interface5AllowedAddressPairs;
  }

  // interface_5_fixed_ips - computed: true, optional: false, required: false
  private _interface5FixedIps = new DataEclVnaApplianceV1Interface5FixedIpsList(this, "interface_5_fixed_ips", false);
  public get interface5FixedIps() {
    return this._interface5FixedIps;
  }

  // interface_6_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface6AllowedAddressPairs = new DataEclVnaApplianceV1Interface6AllowedAddressPairsList(this, "interface_6_allowed_address_pairs", false);
  public get interface6AllowedAddressPairs() {
    return this._interface6AllowedAddressPairs;
  }

  // interface_6_fixed_ips - computed: true, optional: false, required: false
  private _interface6FixedIps = new DataEclVnaApplianceV1Interface6FixedIpsList(this, "interface_6_fixed_ips", false);
  public get interface6FixedIps() {
    return this._interface6FixedIps;
  }

  // interface_7_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface7AllowedAddressPairs = new DataEclVnaApplianceV1Interface7AllowedAddressPairsList(this, "interface_7_allowed_address_pairs", false);
  public get interface7AllowedAddressPairs() {
    return this._interface7AllowedAddressPairs;
  }

  // interface_7_fixed_ips - computed: true, optional: false, required: false
  private _interface7FixedIps = new DataEclVnaApplianceV1Interface7FixedIpsList(this, "interface_7_fixed_ips", false);
  public get interface7FixedIps() {
    return this._interface7FixedIps;
  }

  // interface_8_allowed_address_pairs - computed: true, optional: false, required: false
  private _interface8AllowedAddressPairs = new DataEclVnaApplianceV1Interface8AllowedAddressPairsList(this, "interface_8_allowed_address_pairs", false);
  public get interface8AllowedAddressPairs() {
    return this._interface8AllowedAddressPairs;
  }

  // interface_8_fixed_ips - computed: true, optional: false, required: false
  private _interface8FixedIps = new DataEclVnaApplianceV1Interface8FixedIpsList(this, "interface_8_fixed_ips", false);
  public get interface8FixedIps() {
    return this._interface8FixedIps;
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

  // operation_status - computed: true, optional: true, required: false
  private _operationStatus?: string; 
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
  public set operationStatus(value: string) {
    this._operationStatus = value;
  }
  public resetOperationStatus() {
    this._operationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }

  // os_login_status - computed: true, optional: true, required: false
  private _osLoginStatus?: string; 
  public get osLoginStatus() {
    return this.getStringAttribute('os_login_status');
  }
  public set osLoginStatus(value: string) {
    this._osLoginStatus = value;
  }
  public resetOsLoginStatus() {
    this._osLoginStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osLoginStatusInput() {
    return this._osLoginStatus;
  }

  // os_monitoring_status - computed: true, optional: true, required: false
  private _osMonitoringStatus?: string; 
  public get osMonitoringStatus() {
    return this.getStringAttribute('os_monitoring_status');
  }
  public set osMonitoringStatus(value: string) {
    this._osMonitoringStatus = value;
  }
  public resetOsMonitoringStatus() {
    this._osMonitoringStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osMonitoringStatusInput() {
    return this._osMonitoringStatus;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // virtual_network_appliance_id - computed: true, optional: true, required: false
  private _virtualNetworkApplianceId?: string; 
  public get virtualNetworkApplianceId() {
    return this.getStringAttribute('virtual_network_appliance_id');
  }
  public set virtualNetworkApplianceId(value: string) {
    this._virtualNetworkApplianceId = value;
  }
  public resetVirtualNetworkApplianceId() {
    this._virtualNetworkApplianceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkApplianceIdInput() {
    return this._virtualNetworkApplianceId;
  }

  // virtual_network_appliance_plan_id - computed: true, optional: true, required: false
  private _virtualNetworkAppliancePlanId?: string; 
  public get virtualNetworkAppliancePlanId() {
    return this.getStringAttribute('virtual_network_appliance_plan_id');
  }
  public set virtualNetworkAppliancePlanId(value: string) {
    this._virtualNetworkAppliancePlanId = value;
  }
  public resetVirtualNetworkAppliancePlanId() {
    this._virtualNetworkAppliancePlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkAppliancePlanIdInput() {
    return this._virtualNetworkAppliancePlanId;
  }

  // vm_status - computed: true, optional: true, required: false
  private _vmStatus?: string; 
  public get vmStatus() {
    return this.getStringAttribute('vm_status');
  }
  public set vmStatus(value: string) {
    this._vmStatus = value;
  }
  public resetVmStatus() {
    this._vmStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStatusInput() {
    return this._vmStatus;
  }

  // interface_1_info - computed: false, optional: true, required: false
  private _interface1Info = new DataEclVnaApplianceV1Interface1InfoList(this, "interface_1_info", false);
  public get interface1Info() {
    return this._interface1Info;
  }
  public putInterface1Info(value: DataEclVnaApplianceV1Interface1Info[] | cdktf.IResolvable) {
    this._interface1Info.internalValue = value;
  }
  public resetInterface1Info() {
    this._interface1Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface1InfoInput() {
    return this._interface1Info.internalValue;
  }

  // interface_2_info - computed: false, optional: true, required: false
  private _interface2Info = new DataEclVnaApplianceV1Interface2InfoList(this, "interface_2_info", false);
  public get interface2Info() {
    return this._interface2Info;
  }
  public putInterface2Info(value: DataEclVnaApplianceV1Interface2Info[] | cdktf.IResolvable) {
    this._interface2Info.internalValue = value;
  }
  public resetInterface2Info() {
    this._interface2Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface2InfoInput() {
    return this._interface2Info.internalValue;
  }

  // interface_3_info - computed: false, optional: true, required: false
  private _interface3Info = new DataEclVnaApplianceV1Interface3InfoList(this, "interface_3_info", false);
  public get interface3Info() {
    return this._interface3Info;
  }
  public putInterface3Info(value: DataEclVnaApplianceV1Interface3Info[] | cdktf.IResolvable) {
    this._interface3Info.internalValue = value;
  }
  public resetInterface3Info() {
    this._interface3Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface3InfoInput() {
    return this._interface3Info.internalValue;
  }

  // interface_4_info - computed: false, optional: true, required: false
  private _interface4Info = new DataEclVnaApplianceV1Interface4InfoList(this, "interface_4_info", false);
  public get interface4Info() {
    return this._interface4Info;
  }
  public putInterface4Info(value: DataEclVnaApplianceV1Interface4Info[] | cdktf.IResolvable) {
    this._interface4Info.internalValue = value;
  }
  public resetInterface4Info() {
    this._interface4Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface4InfoInput() {
    return this._interface4Info.internalValue;
  }

  // interface_5_info - computed: false, optional: true, required: false
  private _interface5Info = new DataEclVnaApplianceV1Interface5InfoList(this, "interface_5_info", false);
  public get interface5Info() {
    return this._interface5Info;
  }
  public putInterface5Info(value: DataEclVnaApplianceV1Interface5Info[] | cdktf.IResolvable) {
    this._interface5Info.internalValue = value;
  }
  public resetInterface5Info() {
    this._interface5Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface5InfoInput() {
    return this._interface5Info.internalValue;
  }

  // interface_6_info - computed: false, optional: true, required: false
  private _interface6Info = new DataEclVnaApplianceV1Interface6InfoList(this, "interface_6_info", false);
  public get interface6Info() {
    return this._interface6Info;
  }
  public putInterface6Info(value: DataEclVnaApplianceV1Interface6Info[] | cdktf.IResolvable) {
    this._interface6Info.internalValue = value;
  }
  public resetInterface6Info() {
    this._interface6Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface6InfoInput() {
    return this._interface6Info.internalValue;
  }

  // interface_7_info - computed: false, optional: true, required: false
  private _interface7Info = new DataEclVnaApplianceV1Interface7InfoList(this, "interface_7_info", false);
  public get interface7Info() {
    return this._interface7Info;
  }
  public putInterface7Info(value: DataEclVnaApplianceV1Interface7Info[] | cdktf.IResolvable) {
    this._interface7Info.internalValue = value;
  }
  public resetInterface7Info() {
    this._interface7Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface7InfoInput() {
    return this._interface7Info.internalValue;
  }

  // interface_8_info - computed: false, optional: true, required: false
  private _interface8Info = new DataEclVnaApplianceV1Interface8InfoList(this, "interface_8_info", false);
  public get interface8Info() {
    return this._interface8Info;
  }
  public putInterface8Info(value: DataEclVnaApplianceV1Interface8Info[] | cdktf.IResolvable) {
    this._interface8Info.internalValue = value;
  }
  public resetInterface8Info() {
    this._interface8Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface8InfoInput() {
    return this._interface8Info.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appliance_type: cdktf.stringToTerraform(this._applianceType),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operation_status: cdktf.stringToTerraform(this._operationStatus),
      os_login_status: cdktf.stringToTerraform(this._osLoginStatus),
      os_monitoring_status: cdktf.stringToTerraform(this._osMonitoringStatus),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      virtual_network_appliance_id: cdktf.stringToTerraform(this._virtualNetworkApplianceId),
      virtual_network_appliance_plan_id: cdktf.stringToTerraform(this._virtualNetworkAppliancePlanId),
      vm_status: cdktf.stringToTerraform(this._vmStatus),
      interface_1_info: cdktf.listMapper(dataEclVnaApplianceV1Interface1InfoToTerraform, true)(this._interface1Info.internalValue),
      interface_2_info: cdktf.listMapper(dataEclVnaApplianceV1Interface2InfoToTerraform, true)(this._interface2Info.internalValue),
      interface_3_info: cdktf.listMapper(dataEclVnaApplianceV1Interface3InfoToTerraform, true)(this._interface3Info.internalValue),
      interface_4_info: cdktf.listMapper(dataEclVnaApplianceV1Interface4InfoToTerraform, true)(this._interface4Info.internalValue),
      interface_5_info: cdktf.listMapper(dataEclVnaApplianceV1Interface5InfoToTerraform, true)(this._interface5Info.internalValue),
      interface_6_info: cdktf.listMapper(dataEclVnaApplianceV1Interface6InfoToTerraform, true)(this._interface6Info.internalValue),
      interface_7_info: cdktf.listMapper(dataEclVnaApplianceV1Interface7InfoToTerraform, true)(this._interface7Info.internalValue),
      interface_8_info: cdktf.listMapper(dataEclVnaApplianceV1Interface8InfoToTerraform, true)(this._interface8Info.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appliance_type: {
        value: cdktf.stringToHclTerraform(this._applianceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_status: {
        value: cdktf.stringToHclTerraform(this._operationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_login_status: {
        value: cdktf.stringToHclTerraform(this._osLoginStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_monitoring_status: {
        value: cdktf.stringToHclTerraform(this._osMonitoringStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_appliance_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkApplianceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_appliance_plan_id: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkAppliancePlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_status: {
        value: cdktf.stringToHclTerraform(this._vmStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_1_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface1InfoToHclTerraform, true)(this._interface1Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface1InfoList",
      },
      interface_2_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface2InfoToHclTerraform, true)(this._interface2Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface2InfoList",
      },
      interface_3_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface3InfoToHclTerraform, true)(this._interface3Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface3InfoList",
      },
      interface_4_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface4InfoToHclTerraform, true)(this._interface4Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface4InfoList",
      },
      interface_5_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface5InfoToHclTerraform, true)(this._interface5Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface5InfoList",
      },
      interface_6_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface6InfoToHclTerraform, true)(this._interface6Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface6InfoList",
      },
      interface_7_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface7InfoToHclTerraform, true)(this._interface7Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface7InfoList",
      },
      interface_8_info: {
        value: cdktf.listMapperHcl(dataEclVnaApplianceV1Interface8InfoToHclTerraform, true)(this._interface8Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclVnaApplianceV1Interface8InfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
