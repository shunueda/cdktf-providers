// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPcpserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#dynamic_sort_subtable SystemPcpserver#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#get_all_tables SystemPcpserver#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#id SystemPcpserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#status SystemPcpserver#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#vdomparam SystemPcpserver#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#pools SystemPcpserver#pools}
  */
  readonly pools?: SystemPcpserverPools[] | cdktf.IResolvable;
}
export interface SystemPcpserverPoolsClientSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#subnet SystemPcpserver#subnet}
  */
  readonly subnet?: string;
}

export function systemPcpserverPoolsClientSubnetToTerraform(struct?: SystemPcpserverPoolsClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function systemPcpserverPoolsClientSubnetToHclTerraform(struct?: SystemPcpserverPoolsClientSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPcpserverPoolsClientSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPcpserverPoolsClientSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPcpserverPoolsClientSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet = value.subnet;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class SystemPcpserverPoolsClientSubnetList extends cdktf.ComplexList {
  public internalValue? : SystemPcpserverPoolsClientSubnet[] | cdktf.IResolvable

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
  public get(index: number): SystemPcpserverPoolsClientSubnetOutputReference {
    return new SystemPcpserverPoolsClientSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPcpserverPoolsIntlIntf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#interface_name SystemPcpserver#interface_name}
  */
  readonly interfaceName?: string;
}

export function systemPcpserverPoolsIntlIntfToTerraform(struct?: SystemPcpserverPoolsIntlIntf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function systemPcpserverPoolsIntlIntfToHclTerraform(struct?: SystemPcpserverPoolsIntlIntf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPcpserverPoolsIntlIntfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPcpserverPoolsIntlIntf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPcpserverPoolsIntlIntf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class SystemPcpserverPoolsIntlIntfList extends cdktf.ComplexList {
  public internalValue? : SystemPcpserverPoolsIntlIntf[] | cdktf.IResolvable

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
  public get(index: number): SystemPcpserverPoolsIntlIntfOutputReference {
    return new SystemPcpserverPoolsIntlIntfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPcpserverPoolsThirdPartySubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#subnet SystemPcpserver#subnet}
  */
  readonly subnet?: string;
}

export function systemPcpserverPoolsThirdPartySubnetToTerraform(struct?: SystemPcpserverPoolsThirdPartySubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function systemPcpserverPoolsThirdPartySubnetToHclTerraform(struct?: SystemPcpserverPoolsThirdPartySubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPcpserverPoolsThirdPartySubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPcpserverPoolsThirdPartySubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPcpserverPoolsThirdPartySubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet = value.subnet;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

export class SystemPcpserverPoolsThirdPartySubnetList extends cdktf.ComplexList {
  public internalValue? : SystemPcpserverPoolsThirdPartySubnet[] | cdktf.IResolvable

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
  public get(index: number): SystemPcpserverPoolsThirdPartySubnetOutputReference {
    return new SystemPcpserverPoolsThirdPartySubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPcpserverPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#allow_opcode SystemPcpserver#allow_opcode}
  */
  readonly allowOpcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#announcement_count SystemPcpserver#announcement_count}
  */
  readonly announcementCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#arp_reply SystemPcpserver#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#client_mapping_limit SystemPcpserver#client_mapping_limit}
  */
  readonly clientMappingLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#description SystemPcpserver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#ext_intf SystemPcpserver#ext_intf}
  */
  readonly extIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#extip SystemPcpserver#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#extport SystemPcpserver#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#id SystemPcpserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#mapping_filter_limit SystemPcpserver#mapping_filter_limit}
  */
  readonly mappingFilterLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#maximal_lifetime SystemPcpserver#maximal_lifetime}
  */
  readonly maximalLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#minimal_lifetime SystemPcpserver#minimal_lifetime}
  */
  readonly minimalLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#multicast_announcement SystemPcpserver#multicast_announcement}
  */
  readonly multicastAnnouncement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#name SystemPcpserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#recycle_delay SystemPcpserver#recycle_delay}
  */
  readonly recycleDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#third_party SystemPcpserver#third_party}
  */
  readonly thirdParty?: string;
  /**
  * client_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#client_subnet SystemPcpserver#client_subnet}
  */
  readonly clientSubnet?: SystemPcpserverPoolsClientSubnet[] | cdktf.IResolvable;
  /**
  * intl_intf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#intl_intf SystemPcpserver#intl_intf}
  */
  readonly intlIntf?: SystemPcpserverPoolsIntlIntf[] | cdktf.IResolvable;
  /**
  * third_party_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#third_party_subnet SystemPcpserver#third_party_subnet}
  */
  readonly thirdPartySubnet?: SystemPcpserverPoolsThirdPartySubnet[] | cdktf.IResolvable;
}

export function systemPcpserverPoolsToTerraform(struct?: SystemPcpserverPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_opcode: cdktf.stringToTerraform(struct!.allowOpcode),
    announcement_count: cdktf.numberToTerraform(struct!.announcementCount),
    arp_reply: cdktf.stringToTerraform(struct!.arpReply),
    client_mapping_limit: cdktf.numberToTerraform(struct!.clientMappingLimit),
    description: cdktf.stringToTerraform(struct!.description),
    ext_intf: cdktf.stringToTerraform(struct!.extIntf),
    extip: cdktf.stringToTerraform(struct!.extip),
    extport: cdktf.stringToTerraform(struct!.extport),
    id: cdktf.numberToTerraform(struct!.id),
    mapping_filter_limit: cdktf.numberToTerraform(struct!.mappingFilterLimit),
    maximal_lifetime: cdktf.numberToTerraform(struct!.maximalLifetime),
    minimal_lifetime: cdktf.numberToTerraform(struct!.minimalLifetime),
    multicast_announcement: cdktf.stringToTerraform(struct!.multicastAnnouncement),
    name: cdktf.stringToTerraform(struct!.name),
    recycle_delay: cdktf.numberToTerraform(struct!.recycleDelay),
    third_party: cdktf.stringToTerraform(struct!.thirdParty),
    client_subnet: cdktf.listMapper(systemPcpserverPoolsClientSubnetToTerraform, true)(struct!.clientSubnet),
    intl_intf: cdktf.listMapper(systemPcpserverPoolsIntlIntfToTerraform, true)(struct!.intlIntf),
    third_party_subnet: cdktf.listMapper(systemPcpserverPoolsThirdPartySubnetToTerraform, true)(struct!.thirdPartySubnet),
  }
}


export function systemPcpserverPoolsToHclTerraform(struct?: SystemPcpserverPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_opcode: {
      value: cdktf.stringToHclTerraform(struct!.allowOpcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    announcement_count: {
      value: cdktf.numberToHclTerraform(struct!.announcementCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_reply: {
      value: cdktf.stringToHclTerraform(struct!.arpReply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_mapping_limit: {
      value: cdktf.numberToHclTerraform(struct!.clientMappingLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_intf: {
      value: cdktf.stringToHclTerraform(struct!.extIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extip: {
      value: cdktf.stringToHclTerraform(struct!.extip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extport: {
      value: cdktf.stringToHclTerraform(struct!.extport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mapping_filter_limit: {
      value: cdktf.numberToHclTerraform(struct!.mappingFilterLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximal_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.maximalLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimal_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.minimalLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_announcement: {
      value: cdktf.stringToHclTerraform(struct!.multicastAnnouncement),
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
    recycle_delay: {
      value: cdktf.numberToHclTerraform(struct!.recycleDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    third_party: {
      value: cdktf.stringToHclTerraform(struct!.thirdParty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_subnet: {
      value: cdktf.listMapperHcl(systemPcpserverPoolsClientSubnetToHclTerraform, true)(struct!.clientSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "SystemPcpserverPoolsClientSubnetList",
    },
    intl_intf: {
      value: cdktf.listMapperHcl(systemPcpserverPoolsIntlIntfToHclTerraform, true)(struct!.intlIntf),
      isBlock: true,
      type: "set",
      storageClassType: "SystemPcpserverPoolsIntlIntfList",
    },
    third_party_subnet: {
      value: cdktf.listMapperHcl(systemPcpserverPoolsThirdPartySubnetToHclTerraform, true)(struct!.thirdPartySubnet),
      isBlock: true,
      type: "set",
      storageClassType: "SystemPcpserverPoolsThirdPartySubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPcpserverPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPcpserverPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOpcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOpcode = this._allowOpcode;
    }
    if (this._announcementCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.announcementCount = this._announcementCount;
    }
    if (this._arpReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpReply = this._arpReply;
    }
    if (this._clientMappingLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMappingLimit = this._clientMappingLimit;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.extIntf = this._extIntf;
    }
    if (this._extip !== undefined) {
      hasAnyValues = true;
      internalValueResult.extip = this._extip;
    }
    if (this._extport !== undefined) {
      hasAnyValues = true;
      internalValueResult.extport = this._extport;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mappingFilterLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingFilterLimit = this._mappingFilterLimit;
    }
    if (this._maximalLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximalLifetime = this._maximalLifetime;
    }
    if (this._minimalLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalLifetime = this._minimalLifetime;
    }
    if (this._multicastAnnouncement !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastAnnouncement = this._multicastAnnouncement;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._recycleDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.recycleDelay = this._recycleDelay;
    }
    if (this._thirdParty !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdParty = this._thirdParty;
    }
    if (this._clientSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet?.internalValue;
    }
    if (this._intlIntf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intlIntf = this._intlIntf?.internalValue;
    }
    if (this._thirdPartySubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartySubnet = this._thirdPartySubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPcpserverPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowOpcode = undefined;
      this._announcementCount = undefined;
      this._arpReply = undefined;
      this._clientMappingLimit = undefined;
      this._description = undefined;
      this._extIntf = undefined;
      this._extip = undefined;
      this._extport = undefined;
      this._id = undefined;
      this._mappingFilterLimit = undefined;
      this._maximalLifetime = undefined;
      this._minimalLifetime = undefined;
      this._multicastAnnouncement = undefined;
      this._name = undefined;
      this._recycleDelay = undefined;
      this._thirdParty = undefined;
      this._clientSubnet.internalValue = undefined;
      this._intlIntf.internalValue = undefined;
      this._thirdPartySubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowOpcode = value.allowOpcode;
      this._announcementCount = value.announcementCount;
      this._arpReply = value.arpReply;
      this._clientMappingLimit = value.clientMappingLimit;
      this._description = value.description;
      this._extIntf = value.extIntf;
      this._extip = value.extip;
      this._extport = value.extport;
      this._id = value.id;
      this._mappingFilterLimit = value.mappingFilterLimit;
      this._maximalLifetime = value.maximalLifetime;
      this._minimalLifetime = value.minimalLifetime;
      this._multicastAnnouncement = value.multicastAnnouncement;
      this._name = value.name;
      this._recycleDelay = value.recycleDelay;
      this._thirdParty = value.thirdParty;
      this._clientSubnet.internalValue = value.clientSubnet;
      this._intlIntf.internalValue = value.intlIntf;
      this._thirdPartySubnet.internalValue = value.thirdPartySubnet;
    }
  }

  // allow_opcode - computed: true, optional: true, required: false
  private _allowOpcode?: string; 
  public get allowOpcode() {
    return this.getStringAttribute('allow_opcode');
  }
  public set allowOpcode(value: string) {
    this._allowOpcode = value;
  }
  public resetAllowOpcode() {
    this._allowOpcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOpcodeInput() {
    return this._allowOpcode;
  }

  // announcement_count - computed: true, optional: true, required: false
  private _announcementCount?: number; 
  public get announcementCount() {
    return this.getNumberAttribute('announcement_count');
  }
  public set announcementCount(value: number) {
    this._announcementCount = value;
  }
  public resetAnnouncementCount() {
    this._announcementCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementCountInput() {
    return this._announcementCount;
  }

  // arp_reply - computed: true, optional: true, required: false
  private _arpReply?: string; 
  public get arpReply() {
    return this.getStringAttribute('arp_reply');
  }
  public set arpReply(value: string) {
    this._arpReply = value;
  }
  public resetArpReply() {
    this._arpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReplyInput() {
    return this._arpReply;
  }

  // client_mapping_limit - computed: false, optional: true, required: false
  private _clientMappingLimit?: number; 
  public get clientMappingLimit() {
    return this.getNumberAttribute('client_mapping_limit');
  }
  public set clientMappingLimit(value: number) {
    this._clientMappingLimit = value;
  }
  public resetClientMappingLimit() {
    this._clientMappingLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMappingLimitInput() {
    return this._clientMappingLimit;
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

  // ext_intf - computed: false, optional: true, required: false
  private _extIntf?: string; 
  public get extIntf() {
    return this.getStringAttribute('ext_intf');
  }
  public set extIntf(value: string) {
    this._extIntf = value;
  }
  public resetExtIntf() {
    this._extIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIntfInput() {
    return this._extIntf;
  }

  // extip - computed: false, optional: true, required: false
  private _extip?: string; 
  public get extip() {
    return this.getStringAttribute('extip');
  }
  public set extip(value: string) {
    this._extip = value;
  }
  public resetExtip() {
    this._extip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extipInput() {
    return this._extip;
  }

  // extport - computed: false, optional: true, required: false
  private _extport?: string; 
  public get extport() {
    return this.getStringAttribute('extport');
  }
  public set extport(value: string) {
    this._extport = value;
  }
  public resetExtport() {
    this._extport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extportInput() {
    return this._extport;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mapping_filter_limit - computed: true, optional: true, required: false
  private _mappingFilterLimit?: number; 
  public get mappingFilterLimit() {
    return this.getNumberAttribute('mapping_filter_limit');
  }
  public set mappingFilterLimit(value: number) {
    this._mappingFilterLimit = value;
  }
  public resetMappingFilterLimit() {
    this._mappingFilterLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingFilterLimitInput() {
    return this._mappingFilterLimit;
  }

  // maximal_lifetime - computed: true, optional: true, required: false
  private _maximalLifetime?: number; 
  public get maximalLifetime() {
    return this.getNumberAttribute('maximal_lifetime');
  }
  public set maximalLifetime(value: number) {
    this._maximalLifetime = value;
  }
  public resetMaximalLifetime() {
    this._maximalLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximalLifetimeInput() {
    return this._maximalLifetime;
  }

  // minimal_lifetime - computed: true, optional: true, required: false
  private _minimalLifetime?: number; 
  public get minimalLifetime() {
    return this.getNumberAttribute('minimal_lifetime');
  }
  public set minimalLifetime(value: number) {
    this._minimalLifetime = value;
  }
  public resetMinimalLifetime() {
    this._minimalLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalLifetimeInput() {
    return this._minimalLifetime;
  }

  // multicast_announcement - computed: true, optional: true, required: false
  private _multicastAnnouncement?: string; 
  public get multicastAnnouncement() {
    return this.getStringAttribute('multicast_announcement');
  }
  public set multicastAnnouncement(value: string) {
    this._multicastAnnouncement = value;
  }
  public resetMulticastAnnouncement() {
    this._multicastAnnouncement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastAnnouncementInput() {
    return this._multicastAnnouncement;
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

  // recycle_delay - computed: false, optional: true, required: false
  private _recycleDelay?: number; 
  public get recycleDelay() {
    return this.getNumberAttribute('recycle_delay');
  }
  public set recycleDelay(value: number) {
    this._recycleDelay = value;
  }
  public resetRecycleDelay() {
    this._recycleDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleDelayInput() {
    return this._recycleDelay;
  }

  // third_party - computed: true, optional: true, required: false
  private _thirdParty?: string; 
  public get thirdParty() {
    return this.getStringAttribute('third_party');
  }
  public set thirdParty(value: string) {
    this._thirdParty = value;
  }
  public resetThirdParty() {
    this._thirdParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyInput() {
    return this._thirdParty;
  }

  // client_subnet - computed: false, optional: true, required: false
  private _clientSubnet = new SystemPcpserverPoolsClientSubnetList(this, "client_subnet", true);
  public get clientSubnet() {
    return this._clientSubnet;
  }
  public putClientSubnet(value: SystemPcpserverPoolsClientSubnet[] | cdktf.IResolvable) {
    this._clientSubnet.internalValue = value;
  }
  public resetClientSubnet() {
    this._clientSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet.internalValue;
  }

  // intl_intf - computed: false, optional: true, required: false
  private _intlIntf = new SystemPcpserverPoolsIntlIntfList(this, "intl_intf", true);
  public get intlIntf() {
    return this._intlIntf;
  }
  public putIntlIntf(value: SystemPcpserverPoolsIntlIntf[] | cdktf.IResolvable) {
    this._intlIntf.internalValue = value;
  }
  public resetIntlIntf() {
    this._intlIntf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intlIntfInput() {
    return this._intlIntf.internalValue;
  }

  // third_party_subnet - computed: false, optional: true, required: false
  private _thirdPartySubnet = new SystemPcpserverPoolsThirdPartySubnetList(this, "third_party_subnet", true);
  public get thirdPartySubnet() {
    return this._thirdPartySubnet;
  }
  public putThirdPartySubnet(value: SystemPcpserverPoolsThirdPartySubnet[] | cdktf.IResolvable) {
    this._thirdPartySubnet.internalValue = value;
  }
  public resetThirdPartySubnet() {
    this._thirdPartySubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartySubnetInput() {
    return this._thirdPartySubnet.internalValue;
  }
}

export class SystemPcpserverPoolsList extends cdktf.ComplexList {
  public internalValue? : SystemPcpserverPools[] | cdktf.IResolvable

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
  public get(index: number): SystemPcpserverPoolsOutputReference {
    return new SystemPcpserverPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver fortios_system_pcpserver}
*/
export class SystemPcpserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_pcpserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPcpserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPcpserver to import
  * @param importFromId The id of the existing SystemPcpserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPcpserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_pcpserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_pcpserver fortios_system_pcpserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPcpserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPcpserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_pcpserver',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
    this._pools.internalValue = config.pools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SystemPcpserverPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SystemPcpserverPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      pools: cdktf.listMapper(systemPcpserverPoolsToTerraform, true)(this._pools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pools: {
        value: cdktf.listMapperHcl(systemPcpserverPoolsToHclTerraform, true)(this._pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemPcpserverPoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
