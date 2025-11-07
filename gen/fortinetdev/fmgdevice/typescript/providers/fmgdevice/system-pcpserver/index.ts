// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemPcpserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#device_name SystemPcpserver#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#device_vdom SystemPcpserver#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#dynamic_sort_subtable SystemPcpserver#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#id SystemPcpserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#status SystemPcpserver#status}
  */
  readonly status?: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#pools SystemPcpserver#pools}
  */
  readonly pools?: SystemPcpserverPools[] | cdktf.IResolvable;
}
export interface SystemPcpserverPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#allow_opcode SystemPcpserver#allow_opcode}
  */
  readonly allowOpcode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#announcement_count SystemPcpserver#announcement_count}
  */
  readonly announcementCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#arp_reply SystemPcpserver#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#client_mapping_limit SystemPcpserver#client_mapping_limit}
  */
  readonly clientMappingLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#client_subnet SystemPcpserver#client_subnet}
  */
  readonly clientSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#description SystemPcpserver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#ext_intf SystemPcpserver#ext_intf}
  */
  readonly extIntf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#extip SystemPcpserver#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#extport SystemPcpserver#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#id SystemPcpserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#intl_intf SystemPcpserver#intl_intf}
  */
  readonly intlIntf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#mapping_filter_limit SystemPcpserver#mapping_filter_limit}
  */
  readonly mappingFilterLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#maximal_lifetime SystemPcpserver#maximal_lifetime}
  */
  readonly maximalLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#minimal_lifetime SystemPcpserver#minimal_lifetime}
  */
  readonly minimalLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#multicast_announcement SystemPcpserver#multicast_announcement}
  */
  readonly multicastAnnouncement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#name SystemPcpserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#recycle_delay SystemPcpserver#recycle_delay}
  */
  readonly recycleDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#third_party SystemPcpserver#third_party}
  */
  readonly thirdParty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#third_party_subnet SystemPcpserver#third_party_subnet}
  */
  readonly thirdPartySubnet?: string[];
}

export function systemPcpserverPoolsToTerraform(struct?: SystemPcpserverPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_opcode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOpcode),
    announcement_count: cdktf.numberToTerraform(struct!.announcementCount),
    arp_reply: cdktf.stringToTerraform(struct!.arpReply),
    client_mapping_limit: cdktf.numberToTerraform(struct!.clientMappingLimit),
    client_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientSubnet),
    description: cdktf.stringToTerraform(struct!.description),
    ext_intf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extIntf),
    extip: cdktf.stringToTerraform(struct!.extip),
    extport: cdktf.stringToTerraform(struct!.extport),
    id: cdktf.numberToTerraform(struct!.id),
    intl_intf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.intlIntf),
    mapping_filter_limit: cdktf.numberToTerraform(struct!.mappingFilterLimit),
    maximal_lifetime: cdktf.numberToTerraform(struct!.maximalLifetime),
    minimal_lifetime: cdktf.numberToTerraform(struct!.minimalLifetime),
    multicast_announcement: cdktf.stringToTerraform(struct!.multicastAnnouncement),
    name: cdktf.stringToTerraform(struct!.name),
    recycle_delay: cdktf.numberToTerraform(struct!.recycleDelay),
    third_party: cdktf.stringToTerraform(struct!.thirdParty),
    third_party_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.thirdPartySubnet),
  }
}


export function systemPcpserverPoolsToHclTerraform(struct?: SystemPcpserverPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_opcode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOpcode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    client_subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientSubnet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_intf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extIntf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    intl_intf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.intlIntf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    third_party_subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.thirdPartySubnet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    if (this._clientSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnet = this._clientSubnet;
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
    if (this._intlIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.intlIntf = this._intlIntf;
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
    if (this._thirdPartySubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartySubnet = this._thirdPartySubnet;
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
      this._clientSubnet = undefined;
      this._description = undefined;
      this._extIntf = undefined;
      this._extip = undefined;
      this._extport = undefined;
      this._id = undefined;
      this._intlIntf = undefined;
      this._mappingFilterLimit = undefined;
      this._maximalLifetime = undefined;
      this._minimalLifetime = undefined;
      this._multicastAnnouncement = undefined;
      this._name = undefined;
      this._recycleDelay = undefined;
      this._thirdParty = undefined;
      this._thirdPartySubnet = undefined;
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
      this._clientSubnet = value.clientSubnet;
      this._description = value.description;
      this._extIntf = value.extIntf;
      this._extip = value.extip;
      this._extport = value.extport;
      this._id = value.id;
      this._intlIntf = value.intlIntf;
      this._mappingFilterLimit = value.mappingFilterLimit;
      this._maximalLifetime = value.maximalLifetime;
      this._minimalLifetime = value.minimalLifetime;
      this._multicastAnnouncement = value.multicastAnnouncement;
      this._name = value.name;
      this._recycleDelay = value.recycleDelay;
      this._thirdParty = value.thirdParty;
      this._thirdPartySubnet = value.thirdPartySubnet;
    }
  }

  // allow_opcode - computed: true, optional: true, required: false
  private _allowOpcode?: string[]; 
  public get allowOpcode() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_opcode'));
  }
  public set allowOpcode(value: string[]) {
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

  // client_subnet - computed: true, optional: true, required: false
  private _clientSubnet?: string[]; 
  public get clientSubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('client_subnet'));
  }
  public set clientSubnet(value: string[]) {
    this._clientSubnet = value;
  }
  public resetClientSubnet() {
    this._clientSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetInput() {
    return this._clientSubnet;
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

  // ext_intf - computed: true, optional: true, required: false
  private _extIntf?: string[]; 
  public get extIntf() {
    return cdktf.Fn.tolist(this.getListAttribute('ext_intf'));
  }
  public set extIntf(value: string[]) {
    this._extIntf = value;
  }
  public resetExtIntf() {
    this._extIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIntfInput() {
    return this._extIntf;
  }

  // extip - computed: true, optional: true, required: false
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

  // extport - computed: true, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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

  // intl_intf - computed: true, optional: true, required: false
  private _intlIntf?: string[]; 
  public get intlIntf() {
    return cdktf.Fn.tolist(this.getListAttribute('intl_intf'));
  }
  public set intlIntf(value: string[]) {
    this._intlIntf = value;
  }
  public resetIntlIntf() {
    this._intlIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intlIntfInput() {
    return this._intlIntf;
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

  // third_party_subnet - computed: true, optional: true, required: false
  private _thirdPartySubnet?: string[]; 
  public get thirdPartySubnet() {
    return cdktf.Fn.tolist(this.getListAttribute('third_party_subnet'));
  }
  public set thirdPartySubnet(value: string[]) {
    this._thirdPartySubnet = value;
  }
  public resetThirdPartySubnet() {
    this._thirdPartySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartySubnetInput() {
    return this._thirdPartySubnet;
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver fmgdevice_system_pcpserver}
*/
export class SystemPcpserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_pcpserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemPcpserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemPcpserver to import
  * @param importFromId The id of the existing SystemPcpserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemPcpserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_pcpserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_pcpserver fmgdevice_system_pcpserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemPcpserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemPcpserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_pcpserver',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._status = config.status;
    this._pools.internalValue = config.pools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

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
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      pools: cdktf.listMapper(systemPcpserverPoolsToTerraform, true)(this._pools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
