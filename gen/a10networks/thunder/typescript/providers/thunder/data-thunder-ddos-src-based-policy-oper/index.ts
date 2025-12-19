// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosSrcBasedPolicyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#id DataThunderDdosSrcBasedPolicyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#name DataThunderDdosSrcBasedPolicyOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#oper DataThunderDdosSrcBasedPolicyOper#oper}
  */
  readonly oper?: DataThunderDdosSrcBasedPolicyOperOper;
}
export interface DataThunderDdosSrcBasedPolicyOperOperClassListEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#address DataThunderDdosSrcBasedPolicyOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#class_list_name DataThunderDdosSrcBasedPolicyOper#class_list_name}
  */
  readonly classListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#geo_location_name DataThunderDdosSrcBasedPolicyOper#geo_location_name}
  */
  readonly geoLocationName?: string;
}

export function dataThunderDdosSrcBasedPolicyOperOperClassListEntriesToTerraform(struct?: DataThunderDdosSrcBasedPolicyOperOperClassListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    geo_location_name: cdktf.stringToTerraform(struct!.geoLocationName),
  }
}


export function dataThunderDdosSrcBasedPolicyOperOperClassListEntriesToHclTerraform(struct?: DataThunderDdosSrcBasedPolicyOperOperClassListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location_name: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSrcBasedPolicyOperOperClassListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosSrcBasedPolicyOperOperClassListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._geoLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationName = this._geoLocationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSrcBasedPolicyOperOperClassListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._classListName = undefined;
      this._geoLocationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._classListName = value.classListName;
      this._geoLocationName = value.geoLocationName;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // class_list_name - computed: false, optional: true, required: false
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  public resetClassListName() {
    this._classListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // geo_location_name - computed: false, optional: true, required: false
  private _geoLocationName?: string; 
  public get geoLocationName() {
    return this.getStringAttribute('geo_location_name');
  }
  public set geoLocationName(value: string) {
    this._geoLocationName = value;
  }
  public resetGeoLocationName() {
    this._geoLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationNameInput() {
    return this._geoLocationName;
  }
}

export class DataThunderDdosSrcBasedPolicyOperOperClassListEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosSrcBasedPolicyOperOperClassListEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosSrcBasedPolicyOperOperClassListEntriesOutputReference {
    return new DataThunderDdosSrcBasedPolicyOperOperClassListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosSrcBasedPolicyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#all_entries DataThunderDdosSrcBasedPolicyOper#all_entries}
  */
  readonly allEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#geoloc_ipv4_total_single_ip DataThunderDdosSrcBasedPolicyOper#geoloc_ipv4_total_single_ip}
  */
  readonly geolocIpv4TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#geoloc_ipv4_total_subnet DataThunderDdosSrcBasedPolicyOper#geoloc_ipv4_total_subnet}
  */
  readonly geolocIpv4TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#geoloc_ipv6_total_single_ip DataThunderDdosSrcBasedPolicyOper#geoloc_ipv6_total_single_ip}
  */
  readonly geolocIpv6TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#geoloc_ipv6_total_subnet DataThunderDdosSrcBasedPolicyOper#geoloc_ipv6_total_subnet}
  */
  readonly geolocIpv6TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#geoloc_unexpanded_node DataThunderDdosSrcBasedPolicyOper#geoloc_unexpanded_node}
  */
  readonly geolocUnexpandedNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#ipv4_total_single_ip DataThunderDdosSrcBasedPolicyOper#ipv4_total_single_ip}
  */
  readonly ipv4TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#ipv4_total_subnet DataThunderDdosSrcBasedPolicyOper#ipv4_total_subnet}
  */
  readonly ipv4TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#ipv6_total_single_ip DataThunderDdosSrcBasedPolicyOper#ipv6_total_single_ip}
  */
  readonly ipv6TotalSingleIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#ipv6_total_subnet DataThunderDdosSrcBasedPolicyOper#ipv6_total_subnet}
  */
  readonly ipv6TotalSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#resource_usage DataThunderDdosSrcBasedPolicyOper#resource_usage}
  */
  readonly resourceUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#src_based_policy_name DataThunderDdosSrcBasedPolicyOper#src_based_policy_name}
  */
  readonly srcBasedPolicyName?: string;
  /**
  * class_list_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#class_list_entries DataThunderDdosSrcBasedPolicyOper#class_list_entries}
  */
  readonly classListEntries?: DataThunderDdosSrcBasedPolicyOperOperClassListEntries[] | cdktf.IResolvable;
}

export function dataThunderDdosSrcBasedPolicyOperOperToTerraform(struct?: DataThunderDdosSrcBasedPolicyOperOperOutputReference | DataThunderDdosSrcBasedPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_entries: cdktf.numberToTerraform(struct!.allEntries),
    geoloc_ipv4_total_single_ip: cdktf.numberToTerraform(struct!.geolocIpv4TotalSingleIp),
    geoloc_ipv4_total_subnet: cdktf.numberToTerraform(struct!.geolocIpv4TotalSubnet),
    geoloc_ipv6_total_single_ip: cdktf.numberToTerraform(struct!.geolocIpv6TotalSingleIp),
    geoloc_ipv6_total_subnet: cdktf.numberToTerraform(struct!.geolocIpv6TotalSubnet),
    geoloc_unexpanded_node: cdktf.numberToTerraform(struct!.geolocUnexpandedNode),
    ipv4_total_single_ip: cdktf.numberToTerraform(struct!.ipv4TotalSingleIp),
    ipv4_total_subnet: cdktf.numberToTerraform(struct!.ipv4TotalSubnet),
    ipv6_total_single_ip: cdktf.numberToTerraform(struct!.ipv6TotalSingleIp),
    ipv6_total_subnet: cdktf.numberToTerraform(struct!.ipv6TotalSubnet),
    resource_usage: cdktf.numberToTerraform(struct!.resourceUsage),
    src_based_policy_name: cdktf.stringToTerraform(struct!.srcBasedPolicyName),
    class_list_entries: cdktf.listMapper(dataThunderDdosSrcBasedPolicyOperOperClassListEntriesToTerraform, true)(struct!.classListEntries),
  }
}


export function dataThunderDdosSrcBasedPolicyOperOperToHclTerraform(struct?: DataThunderDdosSrcBasedPolicyOperOperOutputReference | DataThunderDdosSrcBasedPolicyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_entries: {
      value: cdktf.numberToHclTerraform(struct!.allEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_ipv4_total_single_ip: {
      value: cdktf.numberToHclTerraform(struct!.geolocIpv4TotalSingleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_ipv4_total_subnet: {
      value: cdktf.numberToHclTerraform(struct!.geolocIpv4TotalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_ipv6_total_single_ip: {
      value: cdktf.numberToHclTerraform(struct!.geolocIpv6TotalSingleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_ipv6_total_subnet: {
      value: cdktf.numberToHclTerraform(struct!.geolocIpv6TotalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_unexpanded_node: {
      value: cdktf.numberToHclTerraform(struct!.geolocUnexpandedNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_total_single_ip: {
      value: cdktf.numberToHclTerraform(struct!.ipv4TotalSingleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_total_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv4TotalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_total_single_ip: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TotalSingleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_total_subnet: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TotalSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_usage: {
      value: cdktf.numberToHclTerraform(struct!.resourceUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_based_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.srcBasedPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosSrcBasedPolicyOperOperClassListEntriesToHclTerraform, true)(struct!.classListEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosSrcBasedPolicyOperOperClassListEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSrcBasedPolicyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosSrcBasedPolicyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEntries = this._allEntries;
    }
    if (this._geolocIpv4TotalSingleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocIpv4TotalSingleIp = this._geolocIpv4TotalSingleIp;
    }
    if (this._geolocIpv4TotalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocIpv4TotalSubnet = this._geolocIpv4TotalSubnet;
    }
    if (this._geolocIpv6TotalSingleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocIpv6TotalSingleIp = this._geolocIpv6TotalSingleIp;
    }
    if (this._geolocIpv6TotalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocIpv6TotalSubnet = this._geolocIpv6TotalSubnet;
    }
    if (this._geolocUnexpandedNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocUnexpandedNode = this._geolocUnexpandedNode;
    }
    if (this._ipv4TotalSingleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4TotalSingleIp = this._ipv4TotalSingleIp;
    }
    if (this._ipv4TotalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4TotalSubnet = this._ipv4TotalSubnet;
    }
    if (this._ipv6TotalSingleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TotalSingleIp = this._ipv6TotalSingleIp;
    }
    if (this._ipv6TotalSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TotalSubnet = this._ipv6TotalSubnet;
    }
    if (this._resourceUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUsage = this._resourceUsage;
    }
    if (this._srcBasedPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBasedPolicyName = this._srcBasedPolicyName;
    }
    if (this._classListEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListEntries = this._classListEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSrcBasedPolicyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEntries = undefined;
      this._geolocIpv4TotalSingleIp = undefined;
      this._geolocIpv4TotalSubnet = undefined;
      this._geolocIpv6TotalSingleIp = undefined;
      this._geolocIpv6TotalSubnet = undefined;
      this._geolocUnexpandedNode = undefined;
      this._ipv4TotalSingleIp = undefined;
      this._ipv4TotalSubnet = undefined;
      this._ipv6TotalSingleIp = undefined;
      this._ipv6TotalSubnet = undefined;
      this._resourceUsage = undefined;
      this._srcBasedPolicyName = undefined;
      this._classListEntries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEntries = value.allEntries;
      this._geolocIpv4TotalSingleIp = value.geolocIpv4TotalSingleIp;
      this._geolocIpv4TotalSubnet = value.geolocIpv4TotalSubnet;
      this._geolocIpv6TotalSingleIp = value.geolocIpv6TotalSingleIp;
      this._geolocIpv6TotalSubnet = value.geolocIpv6TotalSubnet;
      this._geolocUnexpandedNode = value.geolocUnexpandedNode;
      this._ipv4TotalSingleIp = value.ipv4TotalSingleIp;
      this._ipv4TotalSubnet = value.ipv4TotalSubnet;
      this._ipv6TotalSingleIp = value.ipv6TotalSingleIp;
      this._ipv6TotalSubnet = value.ipv6TotalSubnet;
      this._resourceUsage = value.resourceUsage;
      this._srcBasedPolicyName = value.srcBasedPolicyName;
      this._classListEntries.internalValue = value.classListEntries;
    }
  }

  // all_entries - computed: false, optional: true, required: false
  private _allEntries?: number; 
  public get allEntries() {
    return this.getNumberAttribute('all_entries');
  }
  public set allEntries(value: number) {
    this._allEntries = value;
  }
  public resetAllEntries() {
    this._allEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEntriesInput() {
    return this._allEntries;
  }

  // geoloc_ipv4_total_single_ip - computed: false, optional: true, required: false
  private _geolocIpv4TotalSingleIp?: number; 
  public get geolocIpv4TotalSingleIp() {
    return this.getNumberAttribute('geoloc_ipv4_total_single_ip');
  }
  public set geolocIpv4TotalSingleIp(value: number) {
    this._geolocIpv4TotalSingleIp = value;
  }
  public resetGeolocIpv4TotalSingleIp() {
    this._geolocIpv4TotalSingleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocIpv4TotalSingleIpInput() {
    return this._geolocIpv4TotalSingleIp;
  }

  // geoloc_ipv4_total_subnet - computed: false, optional: true, required: false
  private _geolocIpv4TotalSubnet?: number; 
  public get geolocIpv4TotalSubnet() {
    return this.getNumberAttribute('geoloc_ipv4_total_subnet');
  }
  public set geolocIpv4TotalSubnet(value: number) {
    this._geolocIpv4TotalSubnet = value;
  }
  public resetGeolocIpv4TotalSubnet() {
    this._geolocIpv4TotalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocIpv4TotalSubnetInput() {
    return this._geolocIpv4TotalSubnet;
  }

  // geoloc_ipv6_total_single_ip - computed: false, optional: true, required: false
  private _geolocIpv6TotalSingleIp?: number; 
  public get geolocIpv6TotalSingleIp() {
    return this.getNumberAttribute('geoloc_ipv6_total_single_ip');
  }
  public set geolocIpv6TotalSingleIp(value: number) {
    this._geolocIpv6TotalSingleIp = value;
  }
  public resetGeolocIpv6TotalSingleIp() {
    this._geolocIpv6TotalSingleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocIpv6TotalSingleIpInput() {
    return this._geolocIpv6TotalSingleIp;
  }

  // geoloc_ipv6_total_subnet - computed: false, optional: true, required: false
  private _geolocIpv6TotalSubnet?: number; 
  public get geolocIpv6TotalSubnet() {
    return this.getNumberAttribute('geoloc_ipv6_total_subnet');
  }
  public set geolocIpv6TotalSubnet(value: number) {
    this._geolocIpv6TotalSubnet = value;
  }
  public resetGeolocIpv6TotalSubnet() {
    this._geolocIpv6TotalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocIpv6TotalSubnetInput() {
    return this._geolocIpv6TotalSubnet;
  }

  // geoloc_unexpanded_node - computed: false, optional: true, required: false
  private _geolocUnexpandedNode?: number; 
  public get geolocUnexpandedNode() {
    return this.getNumberAttribute('geoloc_unexpanded_node');
  }
  public set geolocUnexpandedNode(value: number) {
    this._geolocUnexpandedNode = value;
  }
  public resetGeolocUnexpandedNode() {
    this._geolocUnexpandedNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocUnexpandedNodeInput() {
    return this._geolocUnexpandedNode;
  }

  // ipv4_total_single_ip - computed: false, optional: true, required: false
  private _ipv4TotalSingleIp?: number; 
  public get ipv4TotalSingleIp() {
    return this.getNumberAttribute('ipv4_total_single_ip');
  }
  public set ipv4TotalSingleIp(value: number) {
    this._ipv4TotalSingleIp = value;
  }
  public resetIpv4TotalSingleIp() {
    this._ipv4TotalSingleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TotalSingleIpInput() {
    return this._ipv4TotalSingleIp;
  }

  // ipv4_total_subnet - computed: false, optional: true, required: false
  private _ipv4TotalSubnet?: number; 
  public get ipv4TotalSubnet() {
    return this.getNumberAttribute('ipv4_total_subnet');
  }
  public set ipv4TotalSubnet(value: number) {
    this._ipv4TotalSubnet = value;
  }
  public resetIpv4TotalSubnet() {
    this._ipv4TotalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TotalSubnetInput() {
    return this._ipv4TotalSubnet;
  }

  // ipv6_total_single_ip - computed: false, optional: true, required: false
  private _ipv6TotalSingleIp?: number; 
  public get ipv6TotalSingleIp() {
    return this.getNumberAttribute('ipv6_total_single_ip');
  }
  public set ipv6TotalSingleIp(value: number) {
    this._ipv6TotalSingleIp = value;
  }
  public resetIpv6TotalSingleIp() {
    this._ipv6TotalSingleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TotalSingleIpInput() {
    return this._ipv6TotalSingleIp;
  }

  // ipv6_total_subnet - computed: false, optional: true, required: false
  private _ipv6TotalSubnet?: number; 
  public get ipv6TotalSubnet() {
    return this.getNumberAttribute('ipv6_total_subnet');
  }
  public set ipv6TotalSubnet(value: number) {
    this._ipv6TotalSubnet = value;
  }
  public resetIpv6TotalSubnet() {
    this._ipv6TotalSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TotalSubnetInput() {
    return this._ipv6TotalSubnet;
  }

  // resource_usage - computed: false, optional: true, required: false
  private _resourceUsage?: number; 
  public get resourceUsage() {
    return this.getNumberAttribute('resource_usage');
  }
  public set resourceUsage(value: number) {
    this._resourceUsage = value;
  }
  public resetResourceUsage() {
    this._resourceUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageInput() {
    return this._resourceUsage;
  }

  // src_based_policy_name - computed: false, optional: true, required: false
  private _srcBasedPolicyName?: string; 
  public get srcBasedPolicyName() {
    return this.getStringAttribute('src_based_policy_name');
  }
  public set srcBasedPolicyName(value: string) {
    this._srcBasedPolicyName = value;
  }
  public resetSrcBasedPolicyName() {
    this._srcBasedPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBasedPolicyNameInput() {
    return this._srcBasedPolicyName;
  }

  // class_list_entries - computed: false, optional: true, required: false
  private _classListEntries = new DataThunderDdosSrcBasedPolicyOperOperClassListEntriesList(this, "class_list_entries", false);
  public get classListEntries() {
    return this._classListEntries;
  }
  public putClassListEntries(value: DataThunderDdosSrcBasedPolicyOperOperClassListEntries[] | cdktf.IResolvable) {
    this._classListEntries.internalValue = value;
  }
  public resetClassListEntries() {
    this._classListEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListEntriesInput() {
    return this._classListEntries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper thunder_ddos_src_based_policy_oper}
*/
export class DataThunderDdosSrcBasedPolicyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_based_policy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosSrcBasedPolicyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosSrcBasedPolicyOper to import
  * @param importFromId The id of the existing DataThunderDdosSrcBasedPolicyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosSrcBasedPolicyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_based_policy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_src_based_policy_oper thunder_ddos_src_based_policy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosSrcBasedPolicyOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosSrcBasedPolicyOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_based_policy_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosSrcBasedPolicyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosSrcBasedPolicyOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderDdosSrcBasedPolicyOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      oper: {
        value: dataThunderDdosSrcBasedPolicyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosSrcBasedPolicyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
