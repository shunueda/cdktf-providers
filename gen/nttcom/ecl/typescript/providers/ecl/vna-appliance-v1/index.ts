// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VnaApplianceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#availability_zone VnaApplianceV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#default_gateway VnaApplianceV1#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#id VnaApplianceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#initial_config VnaApplianceV1#initial_config}
  */
  readonly initialConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_1_no_allowed_address_pairs VnaApplianceV1#interface_1_no_allowed_address_pairs}
  */
  readonly interface1NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_1_no_fixed_ips VnaApplianceV1#interface_1_no_fixed_ips}
  */
  readonly interface1NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_2_no_allowed_address_pairs VnaApplianceV1#interface_2_no_allowed_address_pairs}
  */
  readonly interface2NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_2_no_fixed_ips VnaApplianceV1#interface_2_no_fixed_ips}
  */
  readonly interface2NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_3_no_allowed_address_pairs VnaApplianceV1#interface_3_no_allowed_address_pairs}
  */
  readonly interface3NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_3_no_fixed_ips VnaApplianceV1#interface_3_no_fixed_ips}
  */
  readonly interface3NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_4_no_allowed_address_pairs VnaApplianceV1#interface_4_no_allowed_address_pairs}
  */
  readonly interface4NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_4_no_fixed_ips VnaApplianceV1#interface_4_no_fixed_ips}
  */
  readonly interface4NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_5_no_allowed_address_pairs VnaApplianceV1#interface_5_no_allowed_address_pairs}
  */
  readonly interface5NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_5_no_fixed_ips VnaApplianceV1#interface_5_no_fixed_ips}
  */
  readonly interface5NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_6_no_allowed_address_pairs VnaApplianceV1#interface_6_no_allowed_address_pairs}
  */
  readonly interface6NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_6_no_fixed_ips VnaApplianceV1#interface_6_no_fixed_ips}
  */
  readonly interface6NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_7_no_allowed_address_pairs VnaApplianceV1#interface_7_no_allowed_address_pairs}
  */
  readonly interface7NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_7_no_fixed_ips VnaApplianceV1#interface_7_no_fixed_ips}
  */
  readonly interface7NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_8_no_allowed_address_pairs VnaApplianceV1#interface_8_no_allowed_address_pairs}
  */
  readonly interface8NoAllowedAddressPairs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_8_no_fixed_ips VnaApplianceV1#interface_8_no_fixed_ips}
  */
  readonly interface8NoFixedIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#password VnaApplianceV1#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tenant_id VnaApplianceV1#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#username VnaApplianceV1#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#virtual_network_appliance_plan_id VnaApplianceV1#virtual_network_appliance_plan_id}
  */
  readonly virtualNetworkAppliancePlanId: string;
  /**
  * interface_1_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_1_allowed_address_pairs VnaApplianceV1#interface_1_allowed_address_pairs}
  */
  readonly interface1AllowedAddressPairs?: VnaApplianceV1Interface1AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_1_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_1_fixed_ips VnaApplianceV1#interface_1_fixed_ips}
  */
  readonly interface1FixedIps?: VnaApplianceV1Interface1FixedIps[] | cdktf.IResolvable;
  /**
  * interface_1_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_1_info VnaApplianceV1#interface_1_info}
  */
  readonly interface1Info?: VnaApplianceV1Interface1Info;
  /**
  * interface_2_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_2_allowed_address_pairs VnaApplianceV1#interface_2_allowed_address_pairs}
  */
  readonly interface2AllowedAddressPairs?: VnaApplianceV1Interface2AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_2_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_2_fixed_ips VnaApplianceV1#interface_2_fixed_ips}
  */
  readonly interface2FixedIps?: VnaApplianceV1Interface2FixedIps[] | cdktf.IResolvable;
  /**
  * interface_2_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_2_info VnaApplianceV1#interface_2_info}
  */
  readonly interface2Info?: VnaApplianceV1Interface2Info;
  /**
  * interface_3_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_3_allowed_address_pairs VnaApplianceV1#interface_3_allowed_address_pairs}
  */
  readonly interface3AllowedAddressPairs?: VnaApplianceV1Interface3AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_3_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_3_fixed_ips VnaApplianceV1#interface_3_fixed_ips}
  */
  readonly interface3FixedIps?: VnaApplianceV1Interface3FixedIps[] | cdktf.IResolvable;
  /**
  * interface_3_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_3_info VnaApplianceV1#interface_3_info}
  */
  readonly interface3Info?: VnaApplianceV1Interface3Info;
  /**
  * interface_4_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_4_allowed_address_pairs VnaApplianceV1#interface_4_allowed_address_pairs}
  */
  readonly interface4AllowedAddressPairs?: VnaApplianceV1Interface4AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_4_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_4_fixed_ips VnaApplianceV1#interface_4_fixed_ips}
  */
  readonly interface4FixedIps?: VnaApplianceV1Interface4FixedIps[] | cdktf.IResolvable;
  /**
  * interface_4_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_4_info VnaApplianceV1#interface_4_info}
  */
  readonly interface4Info?: VnaApplianceV1Interface4Info;
  /**
  * interface_5_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_5_allowed_address_pairs VnaApplianceV1#interface_5_allowed_address_pairs}
  */
  readonly interface5AllowedAddressPairs?: VnaApplianceV1Interface5AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_5_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_5_fixed_ips VnaApplianceV1#interface_5_fixed_ips}
  */
  readonly interface5FixedIps?: VnaApplianceV1Interface5FixedIps[] | cdktf.IResolvable;
  /**
  * interface_5_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_5_info VnaApplianceV1#interface_5_info}
  */
  readonly interface5Info?: VnaApplianceV1Interface5Info;
  /**
  * interface_6_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_6_allowed_address_pairs VnaApplianceV1#interface_6_allowed_address_pairs}
  */
  readonly interface6AllowedAddressPairs?: VnaApplianceV1Interface6AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_6_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_6_fixed_ips VnaApplianceV1#interface_6_fixed_ips}
  */
  readonly interface6FixedIps?: VnaApplianceV1Interface6FixedIps[] | cdktf.IResolvable;
  /**
  * interface_6_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_6_info VnaApplianceV1#interface_6_info}
  */
  readonly interface6Info?: VnaApplianceV1Interface6Info;
  /**
  * interface_7_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_7_allowed_address_pairs VnaApplianceV1#interface_7_allowed_address_pairs}
  */
  readonly interface7AllowedAddressPairs?: VnaApplianceV1Interface7AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_7_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_7_fixed_ips VnaApplianceV1#interface_7_fixed_ips}
  */
  readonly interface7FixedIps?: VnaApplianceV1Interface7FixedIps[] | cdktf.IResolvable;
  /**
  * interface_7_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_7_info VnaApplianceV1#interface_7_info}
  */
  readonly interface7Info?: VnaApplianceV1Interface7Info;
  /**
  * interface_8_allowed_address_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_8_allowed_address_pairs VnaApplianceV1#interface_8_allowed_address_pairs}
  */
  readonly interface8AllowedAddressPairs?: VnaApplianceV1Interface8AllowedAddressPairs[] | cdktf.IResolvable;
  /**
  * interface_8_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_8_fixed_ips VnaApplianceV1#interface_8_fixed_ips}
  */
  readonly interface8FixedIps?: VnaApplianceV1Interface8FixedIps[] | cdktf.IResolvable;
  /**
  * interface_8_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#interface_8_info VnaApplianceV1#interface_8_info}
  */
  readonly interface8Info?: VnaApplianceV1Interface8Info;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#timeouts VnaApplianceV1#timeouts}
  */
  readonly timeouts?: VnaApplianceV1Timeouts;
}
export interface VnaApplianceV1Interface1AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface1AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface1AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface1AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface1AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface1AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface1AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface1AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface1AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface1AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface1AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface1AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface1FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface1FixedIpsToTerraform(struct?: VnaApplianceV1Interface1FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface1FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface1FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface1FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface1FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface1FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface1FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface1FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface1FixedIpsOutputReference {
    return new VnaApplianceV1Interface1FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface1Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface1InfoToTerraform(struct?: VnaApplianceV1Interface1InfoOutputReference | VnaApplianceV1Interface1Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface1InfoToHclTerraform(struct?: VnaApplianceV1Interface1InfoOutputReference | VnaApplianceV1Interface1Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface1InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface1Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface1Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Interface2AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface2AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface2AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface2AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface2AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface2AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface2AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface2AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface2AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface2AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface2AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface2AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface2FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface2FixedIpsToTerraform(struct?: VnaApplianceV1Interface2FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface2FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface2FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface2FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface2FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface2FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface2FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface2FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface2FixedIpsOutputReference {
    return new VnaApplianceV1Interface2FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface2Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface2InfoToTerraform(struct?: VnaApplianceV1Interface2InfoOutputReference | VnaApplianceV1Interface2Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface2InfoToHclTerraform(struct?: VnaApplianceV1Interface2InfoOutputReference | VnaApplianceV1Interface2Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface2InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface2Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface2Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Interface3AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface3AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface3AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface3AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface3AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface3AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface3AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface3AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface3AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface3AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface3AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface3AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface3FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface3FixedIpsToTerraform(struct?: VnaApplianceV1Interface3FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface3FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface3FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface3FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface3FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface3FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface3FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface3FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface3FixedIpsOutputReference {
    return new VnaApplianceV1Interface3FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface3Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface3InfoToTerraform(struct?: VnaApplianceV1Interface3InfoOutputReference | VnaApplianceV1Interface3Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface3InfoToHclTerraform(struct?: VnaApplianceV1Interface3InfoOutputReference | VnaApplianceV1Interface3Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface3InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface3Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface3Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Interface4AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface4AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface4AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface4AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface4AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface4AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface4AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface4AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface4AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface4AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface4AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface4AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface4FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface4FixedIpsToTerraform(struct?: VnaApplianceV1Interface4FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface4FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface4FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface4FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface4FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface4FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface4FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface4FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface4FixedIpsOutputReference {
    return new VnaApplianceV1Interface4FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface4Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface4InfoToTerraform(struct?: VnaApplianceV1Interface4InfoOutputReference | VnaApplianceV1Interface4Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface4InfoToHclTerraform(struct?: VnaApplianceV1Interface4InfoOutputReference | VnaApplianceV1Interface4Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface4InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface4Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface4Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Interface5AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface5AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface5AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface5AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface5AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface5AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface5AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface5AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface5AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface5AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface5AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface5AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface5FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface5FixedIpsToTerraform(struct?: VnaApplianceV1Interface5FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface5FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface5FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface5FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface5FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface5FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface5FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface5FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface5FixedIpsOutputReference {
    return new VnaApplianceV1Interface5FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface5Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface5InfoToTerraform(struct?: VnaApplianceV1Interface5InfoOutputReference | VnaApplianceV1Interface5Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface5InfoToHclTerraform(struct?: VnaApplianceV1Interface5InfoOutputReference | VnaApplianceV1Interface5Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface5InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface5Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface5Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Interface6AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface6AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface6AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface6AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface6AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface6AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface6AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface6AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface6AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface6AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface6AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface6AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface6FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface6FixedIpsToTerraform(struct?: VnaApplianceV1Interface6FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface6FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface6FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface6FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface6FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface6FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface6FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface6FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface6FixedIpsOutputReference {
    return new VnaApplianceV1Interface6FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface6Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface6InfoToTerraform(struct?: VnaApplianceV1Interface6InfoOutputReference | VnaApplianceV1Interface6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface6InfoToHclTerraform(struct?: VnaApplianceV1Interface6InfoOutputReference | VnaApplianceV1Interface6Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface6InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface6Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface6Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Interface7AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface7AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface7AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface7AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface7AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface7AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface7AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface7AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface7AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface7AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface7AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface7AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface7FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface7FixedIpsToTerraform(struct?: VnaApplianceV1Interface7FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface7FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface7FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface7FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface7FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface7FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface7FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface7FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface7FixedIpsOutputReference {
    return new VnaApplianceV1Interface7FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface7Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface7InfoToTerraform(struct?: VnaApplianceV1Interface7InfoOutputReference | VnaApplianceV1Interface7Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface7InfoToHclTerraform(struct?: VnaApplianceV1Interface7InfoOutputReference | VnaApplianceV1Interface7Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface7InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface7Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface7Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Interface8AllowedAddressPairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#mac_address VnaApplianceV1#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#type VnaApplianceV1#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#vrid VnaApplianceV1#vrid}
  */
  readonly vrid: string;
}

export function vnaApplianceV1Interface8AllowedAddressPairsToTerraform(struct?: VnaApplianceV1Interface8AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    type: cdktf.stringToTerraform(struct!.type),
    vrid: cdktf.stringToTerraform(struct!.vrid),
  }
}


export function vnaApplianceV1Interface8AllowedAddressPairsToHclTerraform(struct?: VnaApplianceV1Interface8AllowedAddressPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.stringToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface8AllowedAddressPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface8AllowedAddressPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface8AllowedAddressPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._type = undefined;
      this._vrid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._type = value.type;
      this._vrid = value.vrid;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrid - computed: false, optional: false, required: true
  private _vrid?: string; 
  public get vrid() {
    return this.getStringAttribute('vrid');
  }
  public set vrid(value: string) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}

export class VnaApplianceV1Interface8AllowedAddressPairsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface8AllowedAddressPairs[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface8AllowedAddressPairsOutputReference {
    return new VnaApplianceV1Interface8AllowedAddressPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface8FixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#ip_address VnaApplianceV1#ip_address}
  */
  readonly ipAddress: string;
}

export function vnaApplianceV1Interface8FixedIpsToTerraform(struct?: VnaApplianceV1Interface8FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vnaApplianceV1Interface8FixedIpsToHclTerraform(struct?: VnaApplianceV1Interface8FixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface8FixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VnaApplianceV1Interface8FixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface8FixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VnaApplianceV1Interface8FixedIpsList extends cdktf.ComplexList {
  public internalValue? : VnaApplianceV1Interface8FixedIps[] | cdktf.IResolvable

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
  public get(index: number): VnaApplianceV1Interface8FixedIpsOutputReference {
    return new VnaApplianceV1Interface8FixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VnaApplianceV1Interface8Info {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#description VnaApplianceV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#name VnaApplianceV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#network_id VnaApplianceV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#tags VnaApplianceV1#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function vnaApplianceV1Interface8InfoToTerraform(struct?: VnaApplianceV1Interface8InfoOutputReference | VnaApplianceV1Interface8Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function vnaApplianceV1Interface8InfoToHclTerraform(struct?: VnaApplianceV1Interface8InfoOutputReference | VnaApplianceV1Interface8Info): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1Interface8InfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VnaApplianceV1Interface8Info | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Interface8Info | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
      this._networkId = value.networkId;
      this._tags = value.tags;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updatable - computed: true, optional: false, required: false
  public get updatable() {
    return this.getBooleanAttribute('updatable');
  }
}
export interface VnaApplianceV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#create VnaApplianceV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#delete VnaApplianceV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#update VnaApplianceV1#update}
  */
  readonly update?: string;
}

export function vnaApplianceV1TimeoutsToTerraform(struct?: VnaApplianceV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vnaApplianceV1TimeoutsToHclTerraform(struct?: VnaApplianceV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VnaApplianceV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VnaApplianceV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VnaApplianceV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1 ecl_vna_appliance_v1}
*/
export class VnaApplianceV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_vna_appliance_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VnaApplianceV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VnaApplianceV1 to import
  * @param importFromId The id of the existing VnaApplianceV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VnaApplianceV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_vna_appliance_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/vna_appliance_v1 ecl_vna_appliance_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VnaApplianceV1Config
  */
  public constructor(scope: Construct, id: string, config: VnaApplianceV1Config) {
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
    this._availabilityZone = config.availabilityZone;
    this._defaultGateway = config.defaultGateway;
    this._description = config.description;
    this._id = config.id;
    this._initialConfig = config.initialConfig;
    this._interface1NoAllowedAddressPairs = config.interface1NoAllowedAddressPairs;
    this._interface1NoFixedIps = config.interface1NoFixedIps;
    this._interface2NoAllowedAddressPairs = config.interface2NoAllowedAddressPairs;
    this._interface2NoFixedIps = config.interface2NoFixedIps;
    this._interface3NoAllowedAddressPairs = config.interface3NoAllowedAddressPairs;
    this._interface3NoFixedIps = config.interface3NoFixedIps;
    this._interface4NoAllowedAddressPairs = config.interface4NoAllowedAddressPairs;
    this._interface4NoFixedIps = config.interface4NoFixedIps;
    this._interface5NoAllowedAddressPairs = config.interface5NoAllowedAddressPairs;
    this._interface5NoFixedIps = config.interface5NoFixedIps;
    this._interface6NoAllowedAddressPairs = config.interface6NoAllowedAddressPairs;
    this._interface6NoFixedIps = config.interface6NoFixedIps;
    this._interface7NoAllowedAddressPairs = config.interface7NoAllowedAddressPairs;
    this._interface7NoFixedIps = config.interface7NoFixedIps;
    this._interface8NoAllowedAddressPairs = config.interface8NoAllowedAddressPairs;
    this._interface8NoFixedIps = config.interface8NoFixedIps;
    this._name = config.name;
    this._password = config.password;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._username = config.username;
    this._virtualNetworkAppliancePlanId = config.virtualNetworkAppliancePlanId;
    this._interface1AllowedAddressPairs.internalValue = config.interface1AllowedAddressPairs;
    this._interface1FixedIps.internalValue = config.interface1FixedIps;
    this._interface1Info.internalValue = config.interface1Info;
    this._interface2AllowedAddressPairs.internalValue = config.interface2AllowedAddressPairs;
    this._interface2FixedIps.internalValue = config.interface2FixedIps;
    this._interface2Info.internalValue = config.interface2Info;
    this._interface3AllowedAddressPairs.internalValue = config.interface3AllowedAddressPairs;
    this._interface3FixedIps.internalValue = config.interface3FixedIps;
    this._interface3Info.internalValue = config.interface3Info;
    this._interface4AllowedAddressPairs.internalValue = config.interface4AllowedAddressPairs;
    this._interface4FixedIps.internalValue = config.interface4FixedIps;
    this._interface4Info.internalValue = config.interface4Info;
    this._interface5AllowedAddressPairs.internalValue = config.interface5AllowedAddressPairs;
    this._interface5FixedIps.internalValue = config.interface5FixedIps;
    this._interface5Info.internalValue = config.interface5Info;
    this._interface6AllowedAddressPairs.internalValue = config.interface6AllowedAddressPairs;
    this._interface6FixedIps.internalValue = config.interface6FixedIps;
    this._interface6Info.internalValue = config.interface6Info;
    this._interface7AllowedAddressPairs.internalValue = config.interface7AllowedAddressPairs;
    this._interface7FixedIps.internalValue = config.interface7FixedIps;
    this._interface7Info.internalValue = config.interface7Info;
    this._interface8AllowedAddressPairs.internalValue = config.interface8AllowedAddressPairs;
    this._interface8FixedIps.internalValue = config.interface8FixedIps;
    this._interface8Info.internalValue = config.interface8Info;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // description - computed: false, optional: true, required: false
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

  // initial_config - computed: false, optional: true, required: false
  private _initialConfig?: { [key: string]: string }; 
  public get initialConfig() {
    return this.getStringMapAttribute('initial_config');
  }
  public set initialConfig(value: { [key: string]: string }) {
    this._initialConfig = value;
  }
  public resetInitialConfig() {
    this._initialConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialConfigInput() {
    return this._initialConfig;
  }

  // interface_1_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface1NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface1NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_1_no_allowed_address_pairs');
  }
  public set interface1NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface1NoAllowedAddressPairs = value;
  }
  public resetInterface1NoAllowedAddressPairs() {
    this._interface1NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface1NoAllowedAddressPairsInput() {
    return this._interface1NoAllowedAddressPairs;
  }

  // interface_1_no_fixed_ips - computed: false, optional: true, required: false
  private _interface1NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface1NoFixedIps() {
    return this.getBooleanAttribute('interface_1_no_fixed_ips');
  }
  public set interface1NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface1NoFixedIps = value;
  }
  public resetInterface1NoFixedIps() {
    this._interface1NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface1NoFixedIpsInput() {
    return this._interface1NoFixedIps;
  }

  // interface_2_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface2NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface2NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_2_no_allowed_address_pairs');
  }
  public set interface2NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface2NoAllowedAddressPairs = value;
  }
  public resetInterface2NoAllowedAddressPairs() {
    this._interface2NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface2NoAllowedAddressPairsInput() {
    return this._interface2NoAllowedAddressPairs;
  }

  // interface_2_no_fixed_ips - computed: false, optional: true, required: false
  private _interface2NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface2NoFixedIps() {
    return this.getBooleanAttribute('interface_2_no_fixed_ips');
  }
  public set interface2NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface2NoFixedIps = value;
  }
  public resetInterface2NoFixedIps() {
    this._interface2NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface2NoFixedIpsInput() {
    return this._interface2NoFixedIps;
  }

  // interface_3_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface3NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface3NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_3_no_allowed_address_pairs');
  }
  public set interface3NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface3NoAllowedAddressPairs = value;
  }
  public resetInterface3NoAllowedAddressPairs() {
    this._interface3NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface3NoAllowedAddressPairsInput() {
    return this._interface3NoAllowedAddressPairs;
  }

  // interface_3_no_fixed_ips - computed: false, optional: true, required: false
  private _interface3NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface3NoFixedIps() {
    return this.getBooleanAttribute('interface_3_no_fixed_ips');
  }
  public set interface3NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface3NoFixedIps = value;
  }
  public resetInterface3NoFixedIps() {
    this._interface3NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface3NoFixedIpsInput() {
    return this._interface3NoFixedIps;
  }

  // interface_4_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface4NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface4NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_4_no_allowed_address_pairs');
  }
  public set interface4NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface4NoAllowedAddressPairs = value;
  }
  public resetInterface4NoAllowedAddressPairs() {
    this._interface4NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface4NoAllowedAddressPairsInput() {
    return this._interface4NoAllowedAddressPairs;
  }

  // interface_4_no_fixed_ips - computed: false, optional: true, required: false
  private _interface4NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface4NoFixedIps() {
    return this.getBooleanAttribute('interface_4_no_fixed_ips');
  }
  public set interface4NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface4NoFixedIps = value;
  }
  public resetInterface4NoFixedIps() {
    this._interface4NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface4NoFixedIpsInput() {
    return this._interface4NoFixedIps;
  }

  // interface_5_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface5NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface5NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_5_no_allowed_address_pairs');
  }
  public set interface5NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface5NoAllowedAddressPairs = value;
  }
  public resetInterface5NoAllowedAddressPairs() {
    this._interface5NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface5NoAllowedAddressPairsInput() {
    return this._interface5NoAllowedAddressPairs;
  }

  // interface_5_no_fixed_ips - computed: false, optional: true, required: false
  private _interface5NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface5NoFixedIps() {
    return this.getBooleanAttribute('interface_5_no_fixed_ips');
  }
  public set interface5NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface5NoFixedIps = value;
  }
  public resetInterface5NoFixedIps() {
    this._interface5NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface5NoFixedIpsInput() {
    return this._interface5NoFixedIps;
  }

  // interface_6_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface6NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface6NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_6_no_allowed_address_pairs');
  }
  public set interface6NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface6NoAllowedAddressPairs = value;
  }
  public resetInterface6NoAllowedAddressPairs() {
    this._interface6NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface6NoAllowedAddressPairsInput() {
    return this._interface6NoAllowedAddressPairs;
  }

  // interface_6_no_fixed_ips - computed: false, optional: true, required: false
  private _interface6NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface6NoFixedIps() {
    return this.getBooleanAttribute('interface_6_no_fixed_ips');
  }
  public set interface6NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface6NoFixedIps = value;
  }
  public resetInterface6NoFixedIps() {
    this._interface6NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface6NoFixedIpsInput() {
    return this._interface6NoFixedIps;
  }

  // interface_7_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface7NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface7NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_7_no_allowed_address_pairs');
  }
  public set interface7NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface7NoAllowedAddressPairs = value;
  }
  public resetInterface7NoAllowedAddressPairs() {
    this._interface7NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface7NoAllowedAddressPairsInput() {
    return this._interface7NoAllowedAddressPairs;
  }

  // interface_7_no_fixed_ips - computed: false, optional: true, required: false
  private _interface7NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface7NoFixedIps() {
    return this.getBooleanAttribute('interface_7_no_fixed_ips');
  }
  public set interface7NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface7NoFixedIps = value;
  }
  public resetInterface7NoFixedIps() {
    this._interface7NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface7NoFixedIpsInput() {
    return this._interface7NoFixedIps;
  }

  // interface_8_no_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface8NoAllowedAddressPairs?: boolean | cdktf.IResolvable; 
  public get interface8NoAllowedAddressPairs() {
    return this.getBooleanAttribute('interface_8_no_allowed_address_pairs');
  }
  public set interface8NoAllowedAddressPairs(value: boolean | cdktf.IResolvable) {
    this._interface8NoAllowedAddressPairs = value;
  }
  public resetInterface8NoAllowedAddressPairs() {
    this._interface8NoAllowedAddressPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface8NoAllowedAddressPairsInput() {
    return this._interface8NoAllowedAddressPairs;
  }

  // interface_8_no_fixed_ips - computed: false, optional: true, required: false
  private _interface8NoFixedIps?: boolean | cdktf.IResolvable; 
  public get interface8NoFixedIps() {
    return this.getBooleanAttribute('interface_8_no_fixed_ips');
  }
  public set interface8NoFixedIps(value: boolean | cdktf.IResolvable) {
    this._interface8NoFixedIps = value;
  }
  public resetInterface8NoFixedIps() {
    this._interface8NoFixedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface8NoFixedIpsInput() {
    return this._interface8NoFixedIps;
  }

  // name - computed: false, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // virtual_network_appliance_plan_id - computed: false, optional: false, required: true
  private _virtualNetworkAppliancePlanId?: string; 
  public get virtualNetworkAppliancePlanId() {
    return this.getStringAttribute('virtual_network_appliance_plan_id');
  }
  public set virtualNetworkAppliancePlanId(value: string) {
    this._virtualNetworkAppliancePlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkAppliancePlanIdInput() {
    return this._virtualNetworkAppliancePlanId;
  }

  // interface_1_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface1AllowedAddressPairs = new VnaApplianceV1Interface1AllowedAddressPairsList(this, "interface_1_allowed_address_pairs", false);
  public get interface1AllowedAddressPairs() {
    return this._interface1AllowedAddressPairs;
  }
  public putInterface1AllowedAddressPairs(value: VnaApplianceV1Interface1AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface1AllowedAddressPairs.internalValue = value;
  }
  public resetInterface1AllowedAddressPairs() {
    this._interface1AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface1AllowedAddressPairsInput() {
    return this._interface1AllowedAddressPairs.internalValue;
  }

  // interface_1_fixed_ips - computed: false, optional: true, required: false
  private _interface1FixedIps = new VnaApplianceV1Interface1FixedIpsList(this, "interface_1_fixed_ips", false);
  public get interface1FixedIps() {
    return this._interface1FixedIps;
  }
  public putInterface1FixedIps(value: VnaApplianceV1Interface1FixedIps[] | cdktf.IResolvable) {
    this._interface1FixedIps.internalValue = value;
  }
  public resetInterface1FixedIps() {
    this._interface1FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface1FixedIpsInput() {
    return this._interface1FixedIps.internalValue;
  }

  // interface_1_info - computed: false, optional: true, required: false
  private _interface1Info = new VnaApplianceV1Interface1InfoOutputReference(this, "interface_1_info");
  public get interface1Info() {
    return this._interface1Info;
  }
  public putInterface1Info(value: VnaApplianceV1Interface1Info) {
    this._interface1Info.internalValue = value;
  }
  public resetInterface1Info() {
    this._interface1Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface1InfoInput() {
    return this._interface1Info.internalValue;
  }

  // interface_2_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface2AllowedAddressPairs = new VnaApplianceV1Interface2AllowedAddressPairsList(this, "interface_2_allowed_address_pairs", false);
  public get interface2AllowedAddressPairs() {
    return this._interface2AllowedAddressPairs;
  }
  public putInterface2AllowedAddressPairs(value: VnaApplianceV1Interface2AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface2AllowedAddressPairs.internalValue = value;
  }
  public resetInterface2AllowedAddressPairs() {
    this._interface2AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface2AllowedAddressPairsInput() {
    return this._interface2AllowedAddressPairs.internalValue;
  }

  // interface_2_fixed_ips - computed: false, optional: true, required: false
  private _interface2FixedIps = new VnaApplianceV1Interface2FixedIpsList(this, "interface_2_fixed_ips", false);
  public get interface2FixedIps() {
    return this._interface2FixedIps;
  }
  public putInterface2FixedIps(value: VnaApplianceV1Interface2FixedIps[] | cdktf.IResolvable) {
    this._interface2FixedIps.internalValue = value;
  }
  public resetInterface2FixedIps() {
    this._interface2FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface2FixedIpsInput() {
    return this._interface2FixedIps.internalValue;
  }

  // interface_2_info - computed: false, optional: true, required: false
  private _interface2Info = new VnaApplianceV1Interface2InfoOutputReference(this, "interface_2_info");
  public get interface2Info() {
    return this._interface2Info;
  }
  public putInterface2Info(value: VnaApplianceV1Interface2Info) {
    this._interface2Info.internalValue = value;
  }
  public resetInterface2Info() {
    this._interface2Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface2InfoInput() {
    return this._interface2Info.internalValue;
  }

  // interface_3_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface3AllowedAddressPairs = new VnaApplianceV1Interface3AllowedAddressPairsList(this, "interface_3_allowed_address_pairs", false);
  public get interface3AllowedAddressPairs() {
    return this._interface3AllowedAddressPairs;
  }
  public putInterface3AllowedAddressPairs(value: VnaApplianceV1Interface3AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface3AllowedAddressPairs.internalValue = value;
  }
  public resetInterface3AllowedAddressPairs() {
    this._interface3AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface3AllowedAddressPairsInput() {
    return this._interface3AllowedAddressPairs.internalValue;
  }

  // interface_3_fixed_ips - computed: false, optional: true, required: false
  private _interface3FixedIps = new VnaApplianceV1Interface3FixedIpsList(this, "interface_3_fixed_ips", false);
  public get interface3FixedIps() {
    return this._interface3FixedIps;
  }
  public putInterface3FixedIps(value: VnaApplianceV1Interface3FixedIps[] | cdktf.IResolvable) {
    this._interface3FixedIps.internalValue = value;
  }
  public resetInterface3FixedIps() {
    this._interface3FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface3FixedIpsInput() {
    return this._interface3FixedIps.internalValue;
  }

  // interface_3_info - computed: false, optional: true, required: false
  private _interface3Info = new VnaApplianceV1Interface3InfoOutputReference(this, "interface_3_info");
  public get interface3Info() {
    return this._interface3Info;
  }
  public putInterface3Info(value: VnaApplianceV1Interface3Info) {
    this._interface3Info.internalValue = value;
  }
  public resetInterface3Info() {
    this._interface3Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface3InfoInput() {
    return this._interface3Info.internalValue;
  }

  // interface_4_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface4AllowedAddressPairs = new VnaApplianceV1Interface4AllowedAddressPairsList(this, "interface_4_allowed_address_pairs", false);
  public get interface4AllowedAddressPairs() {
    return this._interface4AllowedAddressPairs;
  }
  public putInterface4AllowedAddressPairs(value: VnaApplianceV1Interface4AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface4AllowedAddressPairs.internalValue = value;
  }
  public resetInterface4AllowedAddressPairs() {
    this._interface4AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface4AllowedAddressPairsInput() {
    return this._interface4AllowedAddressPairs.internalValue;
  }

  // interface_4_fixed_ips - computed: false, optional: true, required: false
  private _interface4FixedIps = new VnaApplianceV1Interface4FixedIpsList(this, "interface_4_fixed_ips", false);
  public get interface4FixedIps() {
    return this._interface4FixedIps;
  }
  public putInterface4FixedIps(value: VnaApplianceV1Interface4FixedIps[] | cdktf.IResolvable) {
    this._interface4FixedIps.internalValue = value;
  }
  public resetInterface4FixedIps() {
    this._interface4FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface4FixedIpsInput() {
    return this._interface4FixedIps.internalValue;
  }

  // interface_4_info - computed: false, optional: true, required: false
  private _interface4Info = new VnaApplianceV1Interface4InfoOutputReference(this, "interface_4_info");
  public get interface4Info() {
    return this._interface4Info;
  }
  public putInterface4Info(value: VnaApplianceV1Interface4Info) {
    this._interface4Info.internalValue = value;
  }
  public resetInterface4Info() {
    this._interface4Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface4InfoInput() {
    return this._interface4Info.internalValue;
  }

  // interface_5_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface5AllowedAddressPairs = new VnaApplianceV1Interface5AllowedAddressPairsList(this, "interface_5_allowed_address_pairs", false);
  public get interface5AllowedAddressPairs() {
    return this._interface5AllowedAddressPairs;
  }
  public putInterface5AllowedAddressPairs(value: VnaApplianceV1Interface5AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface5AllowedAddressPairs.internalValue = value;
  }
  public resetInterface5AllowedAddressPairs() {
    this._interface5AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface5AllowedAddressPairsInput() {
    return this._interface5AllowedAddressPairs.internalValue;
  }

  // interface_5_fixed_ips - computed: false, optional: true, required: false
  private _interface5FixedIps = new VnaApplianceV1Interface5FixedIpsList(this, "interface_5_fixed_ips", false);
  public get interface5FixedIps() {
    return this._interface5FixedIps;
  }
  public putInterface5FixedIps(value: VnaApplianceV1Interface5FixedIps[] | cdktf.IResolvable) {
    this._interface5FixedIps.internalValue = value;
  }
  public resetInterface5FixedIps() {
    this._interface5FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface5FixedIpsInput() {
    return this._interface5FixedIps.internalValue;
  }

  // interface_5_info - computed: false, optional: true, required: false
  private _interface5Info = new VnaApplianceV1Interface5InfoOutputReference(this, "interface_5_info");
  public get interface5Info() {
    return this._interface5Info;
  }
  public putInterface5Info(value: VnaApplianceV1Interface5Info) {
    this._interface5Info.internalValue = value;
  }
  public resetInterface5Info() {
    this._interface5Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface5InfoInput() {
    return this._interface5Info.internalValue;
  }

  // interface_6_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface6AllowedAddressPairs = new VnaApplianceV1Interface6AllowedAddressPairsList(this, "interface_6_allowed_address_pairs", false);
  public get interface6AllowedAddressPairs() {
    return this._interface6AllowedAddressPairs;
  }
  public putInterface6AllowedAddressPairs(value: VnaApplianceV1Interface6AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface6AllowedAddressPairs.internalValue = value;
  }
  public resetInterface6AllowedAddressPairs() {
    this._interface6AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface6AllowedAddressPairsInput() {
    return this._interface6AllowedAddressPairs.internalValue;
  }

  // interface_6_fixed_ips - computed: false, optional: true, required: false
  private _interface6FixedIps = new VnaApplianceV1Interface6FixedIpsList(this, "interface_6_fixed_ips", false);
  public get interface6FixedIps() {
    return this._interface6FixedIps;
  }
  public putInterface6FixedIps(value: VnaApplianceV1Interface6FixedIps[] | cdktf.IResolvable) {
    this._interface6FixedIps.internalValue = value;
  }
  public resetInterface6FixedIps() {
    this._interface6FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface6FixedIpsInput() {
    return this._interface6FixedIps.internalValue;
  }

  // interface_6_info - computed: false, optional: true, required: false
  private _interface6Info = new VnaApplianceV1Interface6InfoOutputReference(this, "interface_6_info");
  public get interface6Info() {
    return this._interface6Info;
  }
  public putInterface6Info(value: VnaApplianceV1Interface6Info) {
    this._interface6Info.internalValue = value;
  }
  public resetInterface6Info() {
    this._interface6Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface6InfoInput() {
    return this._interface6Info.internalValue;
  }

  // interface_7_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface7AllowedAddressPairs = new VnaApplianceV1Interface7AllowedAddressPairsList(this, "interface_7_allowed_address_pairs", false);
  public get interface7AllowedAddressPairs() {
    return this._interface7AllowedAddressPairs;
  }
  public putInterface7AllowedAddressPairs(value: VnaApplianceV1Interface7AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface7AllowedAddressPairs.internalValue = value;
  }
  public resetInterface7AllowedAddressPairs() {
    this._interface7AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface7AllowedAddressPairsInput() {
    return this._interface7AllowedAddressPairs.internalValue;
  }

  // interface_7_fixed_ips - computed: false, optional: true, required: false
  private _interface7FixedIps = new VnaApplianceV1Interface7FixedIpsList(this, "interface_7_fixed_ips", false);
  public get interface7FixedIps() {
    return this._interface7FixedIps;
  }
  public putInterface7FixedIps(value: VnaApplianceV1Interface7FixedIps[] | cdktf.IResolvable) {
    this._interface7FixedIps.internalValue = value;
  }
  public resetInterface7FixedIps() {
    this._interface7FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface7FixedIpsInput() {
    return this._interface7FixedIps.internalValue;
  }

  // interface_7_info - computed: false, optional: true, required: false
  private _interface7Info = new VnaApplianceV1Interface7InfoOutputReference(this, "interface_7_info");
  public get interface7Info() {
    return this._interface7Info;
  }
  public putInterface7Info(value: VnaApplianceV1Interface7Info) {
    this._interface7Info.internalValue = value;
  }
  public resetInterface7Info() {
    this._interface7Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface7InfoInput() {
    return this._interface7Info.internalValue;
  }

  // interface_8_allowed_address_pairs - computed: false, optional: true, required: false
  private _interface8AllowedAddressPairs = new VnaApplianceV1Interface8AllowedAddressPairsList(this, "interface_8_allowed_address_pairs", false);
  public get interface8AllowedAddressPairs() {
    return this._interface8AllowedAddressPairs;
  }
  public putInterface8AllowedAddressPairs(value: VnaApplianceV1Interface8AllowedAddressPairs[] | cdktf.IResolvable) {
    this._interface8AllowedAddressPairs.internalValue = value;
  }
  public resetInterface8AllowedAddressPairs() {
    this._interface8AllowedAddressPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface8AllowedAddressPairsInput() {
    return this._interface8AllowedAddressPairs.internalValue;
  }

  // interface_8_fixed_ips - computed: false, optional: true, required: false
  private _interface8FixedIps = new VnaApplianceV1Interface8FixedIpsList(this, "interface_8_fixed_ips", false);
  public get interface8FixedIps() {
    return this._interface8FixedIps;
  }
  public putInterface8FixedIps(value: VnaApplianceV1Interface8FixedIps[] | cdktf.IResolvable) {
    this._interface8FixedIps.internalValue = value;
  }
  public resetInterface8FixedIps() {
    this._interface8FixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface8FixedIpsInput() {
    return this._interface8FixedIps.internalValue;
  }

  // interface_8_info - computed: false, optional: true, required: false
  private _interface8Info = new VnaApplianceV1Interface8InfoOutputReference(this, "interface_8_info");
  public get interface8Info() {
    return this._interface8Info;
  }
  public putInterface8Info(value: VnaApplianceV1Interface8Info) {
    this._interface8Info.internalValue = value;
  }
  public resetInterface8Info() {
    this._interface8Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interface8InfoInput() {
    return this._interface8Info.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VnaApplianceV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VnaApplianceV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      initial_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._initialConfig),
      interface_1_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface1NoAllowedAddressPairs),
      interface_1_no_fixed_ips: cdktf.booleanToTerraform(this._interface1NoFixedIps),
      interface_2_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface2NoAllowedAddressPairs),
      interface_2_no_fixed_ips: cdktf.booleanToTerraform(this._interface2NoFixedIps),
      interface_3_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface3NoAllowedAddressPairs),
      interface_3_no_fixed_ips: cdktf.booleanToTerraform(this._interface3NoFixedIps),
      interface_4_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface4NoAllowedAddressPairs),
      interface_4_no_fixed_ips: cdktf.booleanToTerraform(this._interface4NoFixedIps),
      interface_5_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface5NoAllowedAddressPairs),
      interface_5_no_fixed_ips: cdktf.booleanToTerraform(this._interface5NoFixedIps),
      interface_6_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface6NoAllowedAddressPairs),
      interface_6_no_fixed_ips: cdktf.booleanToTerraform(this._interface6NoFixedIps),
      interface_7_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface7NoAllowedAddressPairs),
      interface_7_no_fixed_ips: cdktf.booleanToTerraform(this._interface7NoFixedIps),
      interface_8_no_allowed_address_pairs: cdktf.booleanToTerraform(this._interface8NoAllowedAddressPairs),
      interface_8_no_fixed_ips: cdktf.booleanToTerraform(this._interface8NoFixedIps),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      username: cdktf.stringToTerraform(this._username),
      virtual_network_appliance_plan_id: cdktf.stringToTerraform(this._virtualNetworkAppliancePlanId),
      interface_1_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface1AllowedAddressPairsToTerraform, true)(this._interface1AllowedAddressPairs.internalValue),
      interface_1_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface1FixedIpsToTerraform, true)(this._interface1FixedIps.internalValue),
      interface_1_info: vnaApplianceV1Interface1InfoToTerraform(this._interface1Info.internalValue),
      interface_2_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface2AllowedAddressPairsToTerraform, true)(this._interface2AllowedAddressPairs.internalValue),
      interface_2_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface2FixedIpsToTerraform, true)(this._interface2FixedIps.internalValue),
      interface_2_info: vnaApplianceV1Interface2InfoToTerraform(this._interface2Info.internalValue),
      interface_3_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface3AllowedAddressPairsToTerraform, true)(this._interface3AllowedAddressPairs.internalValue),
      interface_3_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface3FixedIpsToTerraform, true)(this._interface3FixedIps.internalValue),
      interface_3_info: vnaApplianceV1Interface3InfoToTerraform(this._interface3Info.internalValue),
      interface_4_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface4AllowedAddressPairsToTerraform, true)(this._interface4AllowedAddressPairs.internalValue),
      interface_4_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface4FixedIpsToTerraform, true)(this._interface4FixedIps.internalValue),
      interface_4_info: vnaApplianceV1Interface4InfoToTerraform(this._interface4Info.internalValue),
      interface_5_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface5AllowedAddressPairsToTerraform, true)(this._interface5AllowedAddressPairs.internalValue),
      interface_5_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface5FixedIpsToTerraform, true)(this._interface5FixedIps.internalValue),
      interface_5_info: vnaApplianceV1Interface5InfoToTerraform(this._interface5Info.internalValue),
      interface_6_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface6AllowedAddressPairsToTerraform, true)(this._interface6AllowedAddressPairs.internalValue),
      interface_6_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface6FixedIpsToTerraform, true)(this._interface6FixedIps.internalValue),
      interface_6_info: vnaApplianceV1Interface6InfoToTerraform(this._interface6Info.internalValue),
      interface_7_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface7AllowedAddressPairsToTerraform, true)(this._interface7AllowedAddressPairs.internalValue),
      interface_7_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface7FixedIpsToTerraform, true)(this._interface7FixedIps.internalValue),
      interface_7_info: vnaApplianceV1Interface7InfoToTerraform(this._interface7Info.internalValue),
      interface_8_allowed_address_pairs: cdktf.listMapper(vnaApplianceV1Interface8AllowedAddressPairsToTerraform, true)(this._interface8AllowedAddressPairs.internalValue),
      interface_8_fixed_ips: cdktf.listMapper(vnaApplianceV1Interface8FixedIpsToTerraform, true)(this._interface8FixedIps.internalValue),
      interface_8_info: vnaApplianceV1Interface8InfoToTerraform(this._interface8Info.internalValue),
      timeouts: vnaApplianceV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
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
      initial_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._initialConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      interface_1_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface1NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_1_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface1NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_2_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface2NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_2_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface2NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_3_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface3NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_3_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface3NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_4_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface4NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_4_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface4NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_5_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface5NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_5_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface5NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_6_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface6NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_6_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface6NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_7_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface7NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_7_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface7NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_8_no_allowed_address_pairs: {
        value: cdktf.booleanToHclTerraform(this._interface8NoAllowedAddressPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_8_no_fixed_ips: {
        value: cdktf.booleanToHclTerraform(this._interface8NoFixedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
      interface_1_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface1AllowedAddressPairsToHclTerraform, true)(this._interface1AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface1AllowedAddressPairsList",
      },
      interface_1_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface1FixedIpsToHclTerraform, true)(this._interface1FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface1FixedIpsList",
      },
      interface_1_info: {
        value: vnaApplianceV1Interface1InfoToHclTerraform(this._interface1Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface1InfoList",
      },
      interface_2_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface2AllowedAddressPairsToHclTerraform, true)(this._interface2AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface2AllowedAddressPairsList",
      },
      interface_2_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface2FixedIpsToHclTerraform, true)(this._interface2FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface2FixedIpsList",
      },
      interface_2_info: {
        value: vnaApplianceV1Interface2InfoToHclTerraform(this._interface2Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface2InfoList",
      },
      interface_3_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface3AllowedAddressPairsToHclTerraform, true)(this._interface3AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface3AllowedAddressPairsList",
      },
      interface_3_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface3FixedIpsToHclTerraform, true)(this._interface3FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface3FixedIpsList",
      },
      interface_3_info: {
        value: vnaApplianceV1Interface3InfoToHclTerraform(this._interface3Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface3InfoList",
      },
      interface_4_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface4AllowedAddressPairsToHclTerraform, true)(this._interface4AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface4AllowedAddressPairsList",
      },
      interface_4_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface4FixedIpsToHclTerraform, true)(this._interface4FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface4FixedIpsList",
      },
      interface_4_info: {
        value: vnaApplianceV1Interface4InfoToHclTerraform(this._interface4Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface4InfoList",
      },
      interface_5_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface5AllowedAddressPairsToHclTerraform, true)(this._interface5AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface5AllowedAddressPairsList",
      },
      interface_5_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface5FixedIpsToHclTerraform, true)(this._interface5FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface5FixedIpsList",
      },
      interface_5_info: {
        value: vnaApplianceV1Interface5InfoToHclTerraform(this._interface5Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface5InfoList",
      },
      interface_6_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface6AllowedAddressPairsToHclTerraform, true)(this._interface6AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface6AllowedAddressPairsList",
      },
      interface_6_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface6FixedIpsToHclTerraform, true)(this._interface6FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface6FixedIpsList",
      },
      interface_6_info: {
        value: vnaApplianceV1Interface6InfoToHclTerraform(this._interface6Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface6InfoList",
      },
      interface_7_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface7AllowedAddressPairsToHclTerraform, true)(this._interface7AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface7AllowedAddressPairsList",
      },
      interface_7_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface7FixedIpsToHclTerraform, true)(this._interface7FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface7FixedIpsList",
      },
      interface_7_info: {
        value: vnaApplianceV1Interface7InfoToHclTerraform(this._interface7Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface7InfoList",
      },
      interface_8_allowed_address_pairs: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface8AllowedAddressPairsToHclTerraform, true)(this._interface8AllowedAddressPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface8AllowedAddressPairsList",
      },
      interface_8_fixed_ips: {
        value: cdktf.listMapperHcl(vnaApplianceV1Interface8FixedIpsToHclTerraform, true)(this._interface8FixedIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface8FixedIpsList",
      },
      interface_8_info: {
        value: vnaApplianceV1Interface8InfoToHclTerraform(this._interface8Info.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VnaApplianceV1Interface8InfoList",
      },
      timeouts: {
        value: vnaApplianceV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VnaApplianceV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
