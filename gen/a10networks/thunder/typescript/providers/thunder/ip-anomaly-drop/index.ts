// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAnomalyDropConfig extends cdktf.TerraformMetaArguments {
  /**
  * bad content threshold (threshold value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#bad_content IpAnomalyDrop#bad_content}
  */
  readonly badContent?: number;
  /**
  * drop all IP anomaly packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#drop_all IpAnomalyDrop#drop_all}
  */
  readonly dropAll?: number;
  /**
  * drop all fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#frag IpAnomalyDrop#frag}
  */
  readonly frag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#id IpAnomalyDrop#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * drop packets with IP options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ip_option IpAnomalyDrop#ip_option}
  */
  readonly ipOption?: number;
  /**
  * drop IP packets with the same source and destination addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#land_attack IpAnomalyDrop#land_attack}
  */
  readonly landAttack?: number;
  /**
  * out of sequence packet threshold (threshold value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#out_of_sequence IpAnomalyDrop#out_of_sequence}
  */
  readonly outOfSequence?: number;
  /**
  * drop oversize ICMP packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ping_of_death IpAnomalyDrop#ping_of_death}
  */
  readonly pingOfDeath?: number;
  /**
  * drop TCP packets with no flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#tcp_no_flag IpAnomalyDrop#tcp_no_flag}
  */
  readonly tcpNoFlag?: number;
  /**
  * drop TCP packets with both syn and fin flags set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#tcp_syn_fin IpAnomalyDrop#tcp_syn_fin}
  */
  readonly tcpSynFin?: number;
  /**
  * drop fragmented TCP packets with syn flag set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#tcp_syn_frag IpAnomalyDrop#tcp_syn_frag}
  */
  readonly tcpSynFrag?: number;
  /**
  * drop all TCP/UDP packets with 0 port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#tcp_udp_zero_port IpAnomalyDrop#tcp_udp_zero_port}
  */
  readonly tcpUdpZeroPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#uuid IpAnomalyDrop#uuid}
  */
  readonly uuid?: string;
  /**
  * zero window size threshold (threshold value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#zero_window IpAnomalyDrop#zero_window}
  */
  readonly zeroWindow?: number;
  /**
  * ipv6_ext_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_ext_header IpAnomalyDrop#ipv6_ext_header}
  */
  readonly ipv6ExtHeader?: IpAnomalyDropIpv6ExtHeader;
  /**
  * packet_deformity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#packet_deformity IpAnomalyDrop#packet_deformity}
  */
  readonly packetDeformity?: IpAnomalyDropPacketDeformity;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#sampling_enable IpAnomalyDrop#sampling_enable}
  */
  readonly samplingEnable?: IpAnomalyDropSamplingEnable[] | cdktf.IResolvable;
  /**
  * security_attack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#security_attack IpAnomalyDrop#security_attack}
  */
  readonly securityAttack?: IpAnomalyDropSecurityAttack;
}
export interface IpAnomalyDropIpv6ExtHeaderDstOptionListStruct {
  /**
  * Filter destination header option type (Option type value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#dst_otype_from IpAnomalyDrop#dst_otype_from}
  */
  readonly dstOtypeFrom?: number;
  /**
  * Option type range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#dst_otype_to IpAnomalyDrop#dst_otype_to}
  */
  readonly dstOtypeTo?: number;
}

export function ipAnomalyDropIpv6ExtHeaderDstOptionListStructToTerraform(struct?: IpAnomalyDropIpv6ExtHeaderDstOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_otype_from: cdktf.numberToTerraform(struct!.dstOtypeFrom),
    dst_otype_to: cdktf.numberToTerraform(struct!.dstOtypeTo),
  }
}


export function ipAnomalyDropIpv6ExtHeaderDstOptionListStructToHclTerraform(struct?: IpAnomalyDropIpv6ExtHeaderDstOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_otype_from: {
      value: cdktf.numberToHclTerraform(struct!.dstOtypeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_otype_to: {
      value: cdktf.numberToHclTerraform(struct!.dstOtypeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropIpv6ExtHeaderDstOptionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAnomalyDropIpv6ExtHeaderDstOptionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstOtypeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtypeFrom = this._dstOtypeFrom;
    }
    if (this._dstOtypeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtypeTo = this._dstOtypeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropIpv6ExtHeaderDstOptionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstOtypeFrom = undefined;
      this._dstOtypeTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstOtypeFrom = value.dstOtypeFrom;
      this._dstOtypeTo = value.dstOtypeTo;
    }
  }

  // dst_otype_from - computed: false, optional: true, required: false
  private _dstOtypeFrom?: number; 
  public get dstOtypeFrom() {
    return this.getNumberAttribute('dst_otype_from');
  }
  public set dstOtypeFrom(value: number) {
    this._dstOtypeFrom = value;
  }
  public resetDstOtypeFrom() {
    this._dstOtypeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtypeFromInput() {
    return this._dstOtypeFrom;
  }

  // dst_otype_to - computed: false, optional: true, required: false
  private _dstOtypeTo?: number; 
  public get dstOtypeTo() {
    return this.getNumberAttribute('dst_otype_to');
  }
  public set dstOtypeTo(value: number) {
    this._dstOtypeTo = value;
  }
  public resetDstOtypeTo() {
    this._dstOtypeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtypeToInput() {
    return this._dstOtypeTo;
  }
}

export class IpAnomalyDropIpv6ExtHeaderDstOptionListStructList extends cdktf.ComplexList {
  public internalValue? : IpAnomalyDropIpv6ExtHeaderDstOptionListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpAnomalyDropIpv6ExtHeaderDstOptionListStructOutputReference {
    return new IpAnomalyDropIpv6ExtHeaderDstOptionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct {
  /**
  * Filter hop by hop option type (Option type value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#hbh_otype_from IpAnomalyDrop#hbh_otype_from}
  */
  readonly hbhOtypeFrom?: number;
  /**
  * Option type range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#hbh_otype_to IpAnomalyDrop#hbh_otype_to}
  */
  readonly hbhOtypeTo?: number;
}

export function ipAnomalyDropIpv6ExtHeaderHbhOptionListStructToTerraform(struct?: IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hbh_otype_from: cdktf.numberToTerraform(struct!.hbhOtypeFrom),
    hbh_otype_to: cdktf.numberToTerraform(struct!.hbhOtypeTo),
  }
}


export function ipAnomalyDropIpv6ExtHeaderHbhOptionListStructToHclTerraform(struct?: IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hbh_otype_from: {
      value: cdktf.numberToHclTerraform(struct!.hbhOtypeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hbh_otype_to: {
      value: cdktf.numberToHclTerraform(struct!.hbhOtypeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropIpv6ExtHeaderHbhOptionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hbhOtypeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbhOtypeFrom = this._hbhOtypeFrom;
    }
    if (this._hbhOtypeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbhOtypeTo = this._hbhOtypeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hbhOtypeFrom = undefined;
      this._hbhOtypeTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hbhOtypeFrom = value.hbhOtypeFrom;
      this._hbhOtypeTo = value.hbhOtypeTo;
    }
  }

  // hbh_otype_from - computed: false, optional: true, required: false
  private _hbhOtypeFrom?: number; 
  public get hbhOtypeFrom() {
    return this.getNumberAttribute('hbh_otype_from');
  }
  public set hbhOtypeFrom(value: number) {
    this._hbhOtypeFrom = value;
  }
  public resetHbhOtypeFrom() {
    this._hbhOtypeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbhOtypeFromInput() {
    return this._hbhOtypeFrom;
  }

  // hbh_otype_to - computed: false, optional: true, required: false
  private _hbhOtypeTo?: number; 
  public get hbhOtypeTo() {
    return this.getNumberAttribute('hbh_otype_to');
  }
  public set hbhOtypeTo(value: number) {
    this._hbhOtypeTo = value;
  }
  public resetHbhOtypeTo() {
    this._hbhOtypeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbhOtypeToInput() {
    return this._hbhOtypeTo;
  }
}

export class IpAnomalyDropIpv6ExtHeaderHbhOptionListStructList extends cdktf.ComplexList {
  public internalValue? : IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpAnomalyDropIpv6ExtHeaderHbhOptionListStructOutputReference {
    return new IpAnomalyDropIpv6ExtHeaderHbhOptionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct {
  /**
  * Filter routing header option type (Option type value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#routing_otype_from IpAnomalyDrop#routing_otype_from}
  */
  readonly routingOtypeFrom?: number;
  /**
  * Option type range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#routing_otype_to IpAnomalyDrop#routing_otype_to}
  */
  readonly routingOtypeTo?: number;
}

export function ipAnomalyDropIpv6ExtHeaderRoutingOptionListStructToTerraform(struct?: IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_otype_from: cdktf.numberToTerraform(struct!.routingOtypeFrom),
    routing_otype_to: cdktf.numberToTerraform(struct!.routingOtypeTo),
  }
}


export function ipAnomalyDropIpv6ExtHeaderRoutingOptionListStructToHclTerraform(struct?: IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_otype_from: {
      value: cdktf.numberToHclTerraform(struct!.routingOtypeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_otype_to: {
      value: cdktf.numberToHclTerraform(struct!.routingOtypeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropIpv6ExtHeaderRoutingOptionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingOtypeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingOtypeFrom = this._routingOtypeFrom;
    }
    if (this._routingOtypeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingOtypeTo = this._routingOtypeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingOtypeFrom = undefined;
      this._routingOtypeTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingOtypeFrom = value.routingOtypeFrom;
      this._routingOtypeTo = value.routingOtypeTo;
    }
  }

  // routing_otype_from - computed: false, optional: true, required: false
  private _routingOtypeFrom?: number; 
  public get routingOtypeFrom() {
    return this.getNumberAttribute('routing_otype_from');
  }
  public set routingOtypeFrom(value: number) {
    this._routingOtypeFrom = value;
  }
  public resetRoutingOtypeFrom() {
    this._routingOtypeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOtypeFromInput() {
    return this._routingOtypeFrom;
  }

  // routing_otype_to - computed: false, optional: true, required: false
  private _routingOtypeTo?: number; 
  public get routingOtypeTo() {
    return this.getNumberAttribute('routing_otype_to');
  }
  public set routingOtypeTo(value: number) {
    this._routingOtypeTo = value;
  }
  public resetRoutingOtypeTo() {
    this._routingOtypeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOtypeToInput() {
    return this._routingOtypeTo;
  }
}

export class IpAnomalyDropIpv6ExtHeaderRoutingOptionListStructList extends cdktf.ComplexList {
  public internalValue? : IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpAnomalyDropIpv6ExtHeaderRoutingOptionListStructOutputReference {
    return new IpAnomalyDropIpv6ExtHeaderRoutingOptionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct {
  /**
  * Filter unknown extension header (eh) type (Extension header type value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#eh_type_from IpAnomalyDrop#eh_type_from}
  */
  readonly ehTypeFrom?: number;
  /**
  * Extension header type range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#eh_type_to IpAnomalyDrop#eh_type_to}
  */
  readonly ehTypeTo?: number;
}

export function ipAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructToTerraform(struct?: IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eh_type_from: cdktf.numberToTerraform(struct!.ehTypeFrom),
    eh_type_to: cdktf.numberToTerraform(struct!.ehTypeTo),
  }
}


export function ipAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructToHclTerraform(struct?: IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eh_type_from: {
      value: cdktf.numberToHclTerraform(struct!.ehTypeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eh_type_to: {
      value: cdktf.numberToHclTerraform(struct!.ehTypeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ehTypeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.ehTypeFrom = this._ehTypeFrom;
    }
    if (this._ehTypeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ehTypeTo = this._ehTypeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ehTypeFrom = undefined;
      this._ehTypeTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ehTypeFrom = value.ehTypeFrom;
      this._ehTypeTo = value.ehTypeTo;
    }
  }

  // eh_type_from - computed: false, optional: true, required: false
  private _ehTypeFrom?: number; 
  public get ehTypeFrom() {
    return this.getNumberAttribute('eh_type_from');
  }
  public set ehTypeFrom(value: number) {
    this._ehTypeFrom = value;
  }
  public resetEhTypeFrom() {
    this._ehTypeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ehTypeFromInput() {
    return this._ehTypeFrom;
  }

  // eh_type_to - computed: false, optional: true, required: false
  private _ehTypeTo?: number; 
  public get ehTypeTo() {
    return this.getNumberAttribute('eh_type_to');
  }
  public set ehTypeTo(value: number) {
    this._ehTypeTo = value;
  }
  public resetEhTypeTo() {
    this._ehTypeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ehTypeToInput() {
    return this._ehTypeTo;
  }
}

export class IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructList extends cdktf.ComplexList {
  public internalValue? : IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructOutputReference {
    return new IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAnomalyDropIpv6ExtHeader {
  /**
  * Filter authentication extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_auth IpAnomalyDrop#ipv6_eh_auth}
  */
  readonly ipv6EhAuth?: number;
  /**
  * Filter destination extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_dest IpAnomalyDrop#ipv6_eh_dest}
  */
  readonly ipv6EhDest?: number;
  /**
  * Filter ESP extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_esp IpAnomalyDrop#ipv6_eh_esp}
  */
  readonly ipv6EhEsp?: number;
  /**
  * Filter fragmentation extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_frag IpAnomalyDrop#ipv6_eh_frag}
  */
  readonly ipv6EhFrag?: number;
  /**
  * Filter hop by hop extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_hbh IpAnomalyDrop#ipv6_eh_hbh}
  */
  readonly ipv6EhHbh?: number;
  /**
  * Filter malformed extension headers (check for order and occurrences)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_malformed IpAnomalyDrop#ipv6_eh_malformed}
  */
  readonly ipv6EhMalformed?: number;
  /**
  * Filter mobility extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_mobility IpAnomalyDrop#ipv6_eh_mobility}
  */
  readonly ipv6EhMobility?: number;
  /**
  * Filter no-next-header extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_nonext IpAnomalyDrop#ipv6_eh_nonext}
  */
  readonly ipv6EhNonext?: number;
  /**
  * Filter routing extension header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#ipv6_eh_routing IpAnomalyDrop#ipv6_eh_routing}
  */
  readonly ipv6EhRouting?: number;
  /**
  * dst_option_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#dst_option_list IpAnomalyDrop#dst_option_list}
  */
  readonly dstOptionList?: IpAnomalyDropIpv6ExtHeaderDstOptionListStruct[] | cdktf.IResolvable;
  /**
  * hbh_option_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#hbh_option_list IpAnomalyDrop#hbh_option_list}
  */
  readonly hbhOptionList?: IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct[] | cdktf.IResolvable;
  /**
  * routing_option_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#routing_option_list IpAnomalyDrop#routing_option_list}
  */
  readonly routingOptionList?: IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct[] | cdktf.IResolvable;
  /**
  * unknown_ext_header_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#unknown_ext_header_list IpAnomalyDrop#unknown_ext_header_list}
  */
  readonly unknownExtHeaderList?: IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct[] | cdktf.IResolvable;
}

export function ipAnomalyDropIpv6ExtHeaderToTerraform(struct?: IpAnomalyDropIpv6ExtHeaderOutputReference | IpAnomalyDropIpv6ExtHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_eh_auth: cdktf.numberToTerraform(struct!.ipv6EhAuth),
    ipv6_eh_dest: cdktf.numberToTerraform(struct!.ipv6EhDest),
    ipv6_eh_esp: cdktf.numberToTerraform(struct!.ipv6EhEsp),
    ipv6_eh_frag: cdktf.numberToTerraform(struct!.ipv6EhFrag),
    ipv6_eh_hbh: cdktf.numberToTerraform(struct!.ipv6EhHbh),
    ipv6_eh_malformed: cdktf.numberToTerraform(struct!.ipv6EhMalformed),
    ipv6_eh_mobility: cdktf.numberToTerraform(struct!.ipv6EhMobility),
    ipv6_eh_nonext: cdktf.numberToTerraform(struct!.ipv6EhNonext),
    ipv6_eh_routing: cdktf.numberToTerraform(struct!.ipv6EhRouting),
    dst_option_list: cdktf.listMapper(ipAnomalyDropIpv6ExtHeaderDstOptionListStructToTerraform, true)(struct!.dstOptionList),
    hbh_option_list: cdktf.listMapper(ipAnomalyDropIpv6ExtHeaderHbhOptionListStructToTerraform, true)(struct!.hbhOptionList),
    routing_option_list: cdktf.listMapper(ipAnomalyDropIpv6ExtHeaderRoutingOptionListStructToTerraform, true)(struct!.routingOptionList),
    unknown_ext_header_list: cdktf.listMapper(ipAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructToTerraform, true)(struct!.unknownExtHeaderList),
  }
}


export function ipAnomalyDropIpv6ExtHeaderToHclTerraform(struct?: IpAnomalyDropIpv6ExtHeaderOutputReference | IpAnomalyDropIpv6ExtHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_eh_auth: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_dest: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhDest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_esp: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhEsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_frag: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_hbh: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhHbh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_malformed: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhMalformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_mobility: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhMobility),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_nonext: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhNonext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_eh_routing: {
      value: cdktf.numberToHclTerraform(struct!.ipv6EhRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_option_list: {
      value: cdktf.listMapperHcl(ipAnomalyDropIpv6ExtHeaderDstOptionListStructToHclTerraform, true)(struct!.dstOptionList),
      isBlock: true,
      type: "list",
      storageClassType: "IpAnomalyDropIpv6ExtHeaderDstOptionListStructList",
    },
    hbh_option_list: {
      value: cdktf.listMapperHcl(ipAnomalyDropIpv6ExtHeaderHbhOptionListStructToHclTerraform, true)(struct!.hbhOptionList),
      isBlock: true,
      type: "list",
      storageClassType: "IpAnomalyDropIpv6ExtHeaderHbhOptionListStructList",
    },
    routing_option_list: {
      value: cdktf.listMapperHcl(ipAnomalyDropIpv6ExtHeaderRoutingOptionListStructToHclTerraform, true)(struct!.routingOptionList),
      isBlock: true,
      type: "list",
      storageClassType: "IpAnomalyDropIpv6ExtHeaderRoutingOptionListStructList",
    },
    unknown_ext_header_list: {
      value: cdktf.listMapperHcl(ipAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructToHclTerraform, true)(struct!.unknownExtHeaderList),
      isBlock: true,
      type: "list",
      storageClassType: "IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropIpv6ExtHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpAnomalyDropIpv6ExtHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6EhAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhAuth = this._ipv6EhAuth;
    }
    if (this._ipv6EhDest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhDest = this._ipv6EhDest;
    }
    if (this._ipv6EhEsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhEsp = this._ipv6EhEsp;
    }
    if (this._ipv6EhFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhFrag = this._ipv6EhFrag;
    }
    if (this._ipv6EhHbh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhHbh = this._ipv6EhHbh;
    }
    if (this._ipv6EhMalformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhMalformed = this._ipv6EhMalformed;
    }
    if (this._ipv6EhMobility !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhMobility = this._ipv6EhMobility;
    }
    if (this._ipv6EhNonext !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhNonext = this._ipv6EhNonext;
    }
    if (this._ipv6EhRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6EhRouting = this._ipv6EhRouting;
    }
    if (this._dstOptionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOptionList = this._dstOptionList?.internalValue;
    }
    if (this._hbhOptionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbhOptionList = this._hbhOptionList?.internalValue;
    }
    if (this._routingOptionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingOptionList = this._routingOptionList?.internalValue;
    }
    if (this._unknownExtHeaderList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownExtHeaderList = this._unknownExtHeaderList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropIpv6ExtHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6EhAuth = undefined;
      this._ipv6EhDest = undefined;
      this._ipv6EhEsp = undefined;
      this._ipv6EhFrag = undefined;
      this._ipv6EhHbh = undefined;
      this._ipv6EhMalformed = undefined;
      this._ipv6EhMobility = undefined;
      this._ipv6EhNonext = undefined;
      this._ipv6EhRouting = undefined;
      this._dstOptionList.internalValue = undefined;
      this._hbhOptionList.internalValue = undefined;
      this._routingOptionList.internalValue = undefined;
      this._unknownExtHeaderList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6EhAuth = value.ipv6EhAuth;
      this._ipv6EhDest = value.ipv6EhDest;
      this._ipv6EhEsp = value.ipv6EhEsp;
      this._ipv6EhFrag = value.ipv6EhFrag;
      this._ipv6EhHbh = value.ipv6EhHbh;
      this._ipv6EhMalformed = value.ipv6EhMalformed;
      this._ipv6EhMobility = value.ipv6EhMobility;
      this._ipv6EhNonext = value.ipv6EhNonext;
      this._ipv6EhRouting = value.ipv6EhRouting;
      this._dstOptionList.internalValue = value.dstOptionList;
      this._hbhOptionList.internalValue = value.hbhOptionList;
      this._routingOptionList.internalValue = value.routingOptionList;
      this._unknownExtHeaderList.internalValue = value.unknownExtHeaderList;
    }
  }

  // ipv6_eh_auth - computed: false, optional: true, required: false
  private _ipv6EhAuth?: number; 
  public get ipv6EhAuth() {
    return this.getNumberAttribute('ipv6_eh_auth');
  }
  public set ipv6EhAuth(value: number) {
    this._ipv6EhAuth = value;
  }
  public resetIpv6EhAuth() {
    this._ipv6EhAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhAuthInput() {
    return this._ipv6EhAuth;
  }

  // ipv6_eh_dest - computed: false, optional: true, required: false
  private _ipv6EhDest?: number; 
  public get ipv6EhDest() {
    return this.getNumberAttribute('ipv6_eh_dest');
  }
  public set ipv6EhDest(value: number) {
    this._ipv6EhDest = value;
  }
  public resetIpv6EhDest() {
    this._ipv6EhDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhDestInput() {
    return this._ipv6EhDest;
  }

  // ipv6_eh_esp - computed: false, optional: true, required: false
  private _ipv6EhEsp?: number; 
  public get ipv6EhEsp() {
    return this.getNumberAttribute('ipv6_eh_esp');
  }
  public set ipv6EhEsp(value: number) {
    this._ipv6EhEsp = value;
  }
  public resetIpv6EhEsp() {
    this._ipv6EhEsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhEspInput() {
    return this._ipv6EhEsp;
  }

  // ipv6_eh_frag - computed: false, optional: true, required: false
  private _ipv6EhFrag?: number; 
  public get ipv6EhFrag() {
    return this.getNumberAttribute('ipv6_eh_frag');
  }
  public set ipv6EhFrag(value: number) {
    this._ipv6EhFrag = value;
  }
  public resetIpv6EhFrag() {
    this._ipv6EhFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhFragInput() {
    return this._ipv6EhFrag;
  }

  // ipv6_eh_hbh - computed: false, optional: true, required: false
  private _ipv6EhHbh?: number; 
  public get ipv6EhHbh() {
    return this.getNumberAttribute('ipv6_eh_hbh');
  }
  public set ipv6EhHbh(value: number) {
    this._ipv6EhHbh = value;
  }
  public resetIpv6EhHbh() {
    this._ipv6EhHbh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhHbhInput() {
    return this._ipv6EhHbh;
  }

  // ipv6_eh_malformed - computed: false, optional: true, required: false
  private _ipv6EhMalformed?: number; 
  public get ipv6EhMalformed() {
    return this.getNumberAttribute('ipv6_eh_malformed');
  }
  public set ipv6EhMalformed(value: number) {
    this._ipv6EhMalformed = value;
  }
  public resetIpv6EhMalformed() {
    this._ipv6EhMalformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhMalformedInput() {
    return this._ipv6EhMalformed;
  }

  // ipv6_eh_mobility - computed: false, optional: true, required: false
  private _ipv6EhMobility?: number; 
  public get ipv6EhMobility() {
    return this.getNumberAttribute('ipv6_eh_mobility');
  }
  public set ipv6EhMobility(value: number) {
    this._ipv6EhMobility = value;
  }
  public resetIpv6EhMobility() {
    this._ipv6EhMobility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhMobilityInput() {
    return this._ipv6EhMobility;
  }

  // ipv6_eh_nonext - computed: false, optional: true, required: false
  private _ipv6EhNonext?: number; 
  public get ipv6EhNonext() {
    return this.getNumberAttribute('ipv6_eh_nonext');
  }
  public set ipv6EhNonext(value: number) {
    this._ipv6EhNonext = value;
  }
  public resetIpv6EhNonext() {
    this._ipv6EhNonext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhNonextInput() {
    return this._ipv6EhNonext;
  }

  // ipv6_eh_routing - computed: false, optional: true, required: false
  private _ipv6EhRouting?: number; 
  public get ipv6EhRouting() {
    return this.getNumberAttribute('ipv6_eh_routing');
  }
  public set ipv6EhRouting(value: number) {
    this._ipv6EhRouting = value;
  }
  public resetIpv6EhRouting() {
    this._ipv6EhRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EhRoutingInput() {
    return this._ipv6EhRouting;
  }

  // dst_option_list - computed: false, optional: true, required: false
  private _dstOptionList = new IpAnomalyDropIpv6ExtHeaderDstOptionListStructList(this, "dst_option_list", false);
  public get dstOptionList() {
    return this._dstOptionList;
  }
  public putDstOptionList(value: IpAnomalyDropIpv6ExtHeaderDstOptionListStruct[] | cdktf.IResolvable) {
    this._dstOptionList.internalValue = value;
  }
  public resetDstOptionList() {
    this._dstOptionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOptionListInput() {
    return this._dstOptionList.internalValue;
  }

  // hbh_option_list - computed: false, optional: true, required: false
  private _hbhOptionList = new IpAnomalyDropIpv6ExtHeaderHbhOptionListStructList(this, "hbh_option_list", false);
  public get hbhOptionList() {
    return this._hbhOptionList;
  }
  public putHbhOptionList(value: IpAnomalyDropIpv6ExtHeaderHbhOptionListStruct[] | cdktf.IResolvable) {
    this._hbhOptionList.internalValue = value;
  }
  public resetHbhOptionList() {
    this._hbhOptionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbhOptionListInput() {
    return this._hbhOptionList.internalValue;
  }

  // routing_option_list - computed: false, optional: true, required: false
  private _routingOptionList = new IpAnomalyDropIpv6ExtHeaderRoutingOptionListStructList(this, "routing_option_list", false);
  public get routingOptionList() {
    return this._routingOptionList;
  }
  public putRoutingOptionList(value: IpAnomalyDropIpv6ExtHeaderRoutingOptionListStruct[] | cdktf.IResolvable) {
    this._routingOptionList.internalValue = value;
  }
  public resetRoutingOptionList() {
    this._routingOptionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionListInput() {
    return this._routingOptionList.internalValue;
  }

  // unknown_ext_header_list - computed: false, optional: true, required: false
  private _unknownExtHeaderList = new IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStructList(this, "unknown_ext_header_list", false);
  public get unknownExtHeaderList() {
    return this._unknownExtHeaderList;
  }
  public putUnknownExtHeaderList(value: IpAnomalyDropIpv6ExtHeaderUnknownExtHeaderListStruct[] | cdktf.IResolvable) {
    this._unknownExtHeaderList.internalValue = value;
  }
  public resetUnknownExtHeaderList() {
    this._unknownExtHeaderList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownExtHeaderListInput() {
    return this._unknownExtHeaderList.internalValue;
  }
}
export interface IpAnomalyDropPacketDeformity {
  /**
  * drop packets with layer 3 anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#packet_deformity_layer_3 IpAnomalyDrop#packet_deformity_layer_3}
  */
  readonly packetDeformityLayer3?: number;
  /**
  * drop packets with layer 4 anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#packet_deformity_layer_4 IpAnomalyDrop#packet_deformity_layer_4}
  */
  readonly packetDeformityLayer4?: number;
}

export function ipAnomalyDropPacketDeformityToTerraform(struct?: IpAnomalyDropPacketDeformityOutputReference | IpAnomalyDropPacketDeformity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    packet_deformity_layer_3: cdktf.numberToTerraform(struct!.packetDeformityLayer3),
    packet_deformity_layer_4: cdktf.numberToTerraform(struct!.packetDeformityLayer4),
  }
}


export function ipAnomalyDropPacketDeformityToHclTerraform(struct?: IpAnomalyDropPacketDeformityOutputReference | IpAnomalyDropPacketDeformity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    packet_deformity_layer_3: {
      value: cdktf.numberToHclTerraform(struct!.packetDeformityLayer3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_deformity_layer_4: {
      value: cdktf.numberToHclTerraform(struct!.packetDeformityLayer4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropPacketDeformityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpAnomalyDropPacketDeformity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetDeformityLayer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDeformityLayer3 = this._packetDeformityLayer3;
    }
    if (this._packetDeformityLayer4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDeformityLayer4 = this._packetDeformityLayer4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropPacketDeformity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packetDeformityLayer3 = undefined;
      this._packetDeformityLayer4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packetDeformityLayer3 = value.packetDeformityLayer3;
      this._packetDeformityLayer4 = value.packetDeformityLayer4;
    }
  }

  // packet_deformity_layer_3 - computed: false, optional: true, required: false
  private _packetDeformityLayer3?: number; 
  public get packetDeformityLayer3() {
    return this.getNumberAttribute('packet_deformity_layer_3');
  }
  public set packetDeformityLayer3(value: number) {
    this._packetDeformityLayer3 = value;
  }
  public resetPacketDeformityLayer3() {
    this._packetDeformityLayer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDeformityLayer3Input() {
    return this._packetDeformityLayer3;
  }

  // packet_deformity_layer_4 - computed: false, optional: true, required: false
  private _packetDeformityLayer4?: number; 
  public get packetDeformityLayer4() {
    return this.getNumberAttribute('packet_deformity_layer_4');
  }
  public set packetDeformityLayer4(value: number) {
    this._packetDeformityLayer4 = value;
  }
  public resetPacketDeformityLayer4() {
    this._packetDeformityLayer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDeformityLayer4Input() {
    return this._packetDeformityLayer4;
  }
}
export interface IpAnomalyDropSamplingEnable {
  /**
  * 'all': all; 'land': Land Attack Drop; 'emp_frg': Empty Fragment Drop; 'emp_mic_frg': Micro Fragment Drop; 'opt': IPv4 Options Drop; 'frg': IPv4 Fragment Drop; 'bad_ip_hdrlen': Bad IP Header Len Drop; 'bad_ip_flg': Bad IP Flags Drop; 'bad_ip_ttl': Bad IP TTL Drop; 'no_ip_payload': No IP Payload drop; 'over_ip_payload': Oversize IP Payload Drop; 'bad_ip_payload_len': Bad IP Payload Len Drop; 'bad_ip_frg_offset': Bad IP Fragment Offset Drop; 'csum': Bad IP Checksum Drop; 'pod': ICMP Ping of Death Drop; 'bad_tcp_urg_offset': TCP Bad Urgent Offset Drop; 'tcp_sht_hdr': TCP Short Header Drop; 'tcp_bad_iplen': TCP Bad IP Length Drop; 'tcp_null_frg': TCP Null Flags Drop; 'tcp_null_scan': TCP Null Scan Drop; 'tcp_syn_fin': TCP Syn and Fin Drop; 'tcp_xmas': TCP XMAS Flags Drop; 'tcp_xmas_scan': TCP XMAS Scan Drop; 'tcp_syn_frg': TCP Syn Fragment Drop; 'tcp_frg_hdr': TCP Fragmented Header Drop; 'tcp_bad_csum': TCP Bad Checksum Drop; 'udp_srt_hdr': UDP Short Header Drop; 'udp_bad_len': UDP Bad Length Drop; 'udp_kerb_frg': UDP Kerberos Fragment Drop; 'udp_port_lb': UDP Port Loopback Drop; 'udp_bad_csum': UDP Bad Checksum Drop; 'runt_ip_hdr': Runt IP Header Drop; 'runt_tcp_udp_hdr': Runt TCP/UDP Header Drop; 'ipip_tnl_msmtch': IP-over-IP Tunnel Mismatch Drop; 'tcp_opt_err': TCP Option Error Drop; 'ipip_tnl_err': IP-over-IP Tunnel Error Drop; 'vxlan_err': VXLAN Tunnel Error Drop; 'nvgre_err': GRE Tunnel Error Drop; 'gre_pptp_err': GRE PPTP Error Drop; 'ipv6_eh_hbh': IPv6 Hop by Hop Header Drop; 'ipv6_eh_dest': IPv6 Destination Header Drop; 'ipv6_eh_routing': IPv6 Routing Header Drop; 'ipv6_eh_frag': IPv6 Fragmentation Header Drop; 'ipv6_eh_ah': IPv6 Authentication Header Drop; 'ipv6_eh_esp': IPv6 ESP Header Drop; 'ipv6_eh_mobility': IPv6 Mobility Header Drop; 'ipv6_eh_none': IPv6 No Next Header Drop; 'ipv6_eh_other': IPv6 Unknown Extension Header Drop; 'ipv6_eh_malformed': IPv6 Malformed Extension Header Drop; 'tcp_udp_zero_port': TCP UDP Zero Port Drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#counters1 IpAnomalyDrop#counters1}
  */
  readonly counters1?: string;
}

export function ipAnomalyDropSamplingEnableToTerraform(struct?: IpAnomalyDropSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ipAnomalyDropSamplingEnableToHclTerraform(struct?: IpAnomalyDropSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAnomalyDropSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class IpAnomalyDropSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : IpAnomalyDropSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): IpAnomalyDropSamplingEnableOutputReference {
    return new IpAnomalyDropSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAnomalyDropSecurityAttack {
  /**
  * drop packets with layer 3 anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#security_attack_layer_3 IpAnomalyDrop#security_attack_layer_3}
  */
  readonly securityAttackLayer3?: number;
  /**
  * drop packets with layer 4 anomaly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#security_attack_layer_4 IpAnomalyDrop#security_attack_layer_4}
  */
  readonly securityAttackLayer4?: number;
}

export function ipAnomalyDropSecurityAttackToTerraform(struct?: IpAnomalyDropSecurityAttackOutputReference | IpAnomalyDropSecurityAttack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_attack_layer_3: cdktf.numberToTerraform(struct!.securityAttackLayer3),
    security_attack_layer_4: cdktf.numberToTerraform(struct!.securityAttackLayer4),
  }
}


export function ipAnomalyDropSecurityAttackToHclTerraform(struct?: IpAnomalyDropSecurityAttackOutputReference | IpAnomalyDropSecurityAttack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_attack_layer_3: {
      value: cdktf.numberToHclTerraform(struct!.securityAttackLayer3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_attack_layer_4: {
      value: cdktf.numberToHclTerraform(struct!.securityAttackLayer4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAnomalyDropSecurityAttackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpAnomalyDropSecurityAttack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityAttackLayer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttackLayer3 = this._securityAttackLayer3;
    }
    if (this._securityAttackLayer4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityAttackLayer4 = this._securityAttackLayer4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAnomalyDropSecurityAttack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityAttackLayer3 = undefined;
      this._securityAttackLayer4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityAttackLayer3 = value.securityAttackLayer3;
      this._securityAttackLayer4 = value.securityAttackLayer4;
    }
  }

  // security_attack_layer_3 - computed: false, optional: true, required: false
  private _securityAttackLayer3?: number; 
  public get securityAttackLayer3() {
    return this.getNumberAttribute('security_attack_layer_3');
  }
  public set securityAttackLayer3(value: number) {
    this._securityAttackLayer3 = value;
  }
  public resetSecurityAttackLayer3() {
    this._securityAttackLayer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttackLayer3Input() {
    return this._securityAttackLayer3;
  }

  // security_attack_layer_4 - computed: false, optional: true, required: false
  private _securityAttackLayer4?: number; 
  public get securityAttackLayer4() {
    return this.getNumberAttribute('security_attack_layer_4');
  }
  public set securityAttackLayer4(value: number) {
    this._securityAttackLayer4 = value;
  }
  public resetSecurityAttackLayer4() {
    this._securityAttackLayer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttackLayer4Input() {
    return this._securityAttackLayer4;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop thunder_ip_anomaly_drop}
*/
export class IpAnomalyDrop extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_anomaly_drop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAnomalyDrop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAnomalyDrop to import
  * @param importFromId The id of the existing IpAnomalyDrop that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAnomalyDrop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_anomaly_drop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_anomaly_drop thunder_ip_anomaly_drop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAnomalyDropConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpAnomalyDropConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_anomaly_drop',
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
    this._badContent = config.badContent;
    this._dropAll = config.dropAll;
    this._frag = config.frag;
    this._id = config.id;
    this._ipOption = config.ipOption;
    this._landAttack = config.landAttack;
    this._outOfSequence = config.outOfSequence;
    this._pingOfDeath = config.pingOfDeath;
    this._tcpNoFlag = config.tcpNoFlag;
    this._tcpSynFin = config.tcpSynFin;
    this._tcpSynFrag = config.tcpSynFrag;
    this._tcpUdpZeroPort = config.tcpUdpZeroPort;
    this._uuid = config.uuid;
    this._zeroWindow = config.zeroWindow;
    this._ipv6ExtHeader.internalValue = config.ipv6ExtHeader;
    this._packetDeformity.internalValue = config.packetDeformity;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._securityAttack.internalValue = config.securityAttack;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bad_content - computed: false, optional: true, required: false
  private _badContent?: number; 
  public get badContent() {
    return this.getNumberAttribute('bad_content');
  }
  public set badContent(value: number) {
    this._badContent = value;
  }
  public resetBadContent() {
    this._badContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badContentInput() {
    return this._badContent;
  }

  // drop_all - computed: false, optional: true, required: false
  private _dropAll?: number; 
  public get dropAll() {
    return this.getNumberAttribute('drop_all');
  }
  public set dropAll(value: number) {
    this._dropAll = value;
  }
  public resetDropAll() {
    this._dropAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAllInput() {
    return this._dropAll;
  }

  // frag - computed: false, optional: true, required: false
  private _frag?: number; 
  public get frag() {
    return this.getNumberAttribute('frag');
  }
  public set frag(value: number) {
    this._frag = value;
  }
  public resetFrag() {
    this._frag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragInput() {
    return this._frag;
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

  // ip_option - computed: false, optional: true, required: false
  private _ipOption?: number; 
  public get ipOption() {
    return this.getNumberAttribute('ip_option');
  }
  public set ipOption(value: number) {
    this._ipOption = value;
  }
  public resetIpOption() {
    this._ipOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOptionInput() {
    return this._ipOption;
  }

  // land_attack - computed: false, optional: true, required: false
  private _landAttack?: number; 
  public get landAttack() {
    return this.getNumberAttribute('land_attack');
  }
  public set landAttack(value: number) {
    this._landAttack = value;
  }
  public resetLandAttack() {
    this._landAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landAttackInput() {
    return this._landAttack;
  }

  // out_of_sequence - computed: false, optional: true, required: false
  private _outOfSequence?: number; 
  public get outOfSequence() {
    return this.getNumberAttribute('out_of_sequence');
  }
  public set outOfSequence(value: number) {
    this._outOfSequence = value;
  }
  public resetOutOfSequence() {
    this._outOfSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSequenceInput() {
    return this._outOfSequence;
  }

  // ping_of_death - computed: false, optional: true, required: false
  private _pingOfDeath?: number; 
  public get pingOfDeath() {
    return this.getNumberAttribute('ping_of_death');
  }
  public set pingOfDeath(value: number) {
    this._pingOfDeath = value;
  }
  public resetPingOfDeath() {
    this._pingOfDeath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingOfDeathInput() {
    return this._pingOfDeath;
  }

  // tcp_no_flag - computed: false, optional: true, required: false
  private _tcpNoFlag?: number; 
  public get tcpNoFlag() {
    return this.getNumberAttribute('tcp_no_flag');
  }
  public set tcpNoFlag(value: number) {
    this._tcpNoFlag = value;
  }
  public resetTcpNoFlag() {
    this._tcpNoFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNoFlagInput() {
    return this._tcpNoFlag;
  }

  // tcp_syn_fin - computed: false, optional: true, required: false
  private _tcpSynFin?: number; 
  public get tcpSynFin() {
    return this.getNumberAttribute('tcp_syn_fin');
  }
  public set tcpSynFin(value: number) {
    this._tcpSynFin = value;
  }
  public resetTcpSynFin() {
    this._tcpSynFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFinInput() {
    return this._tcpSynFin;
  }

  // tcp_syn_frag - computed: false, optional: true, required: false
  private _tcpSynFrag?: number; 
  public get tcpSynFrag() {
    return this.getNumberAttribute('tcp_syn_frag');
  }
  public set tcpSynFrag(value: number) {
    this._tcpSynFrag = value;
  }
  public resetTcpSynFrag() {
    this._tcpSynFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFragInput() {
    return this._tcpSynFrag;
  }

  // tcp_udp_zero_port - computed: false, optional: true, required: false
  private _tcpUdpZeroPort?: number; 
  public get tcpUdpZeroPort() {
    return this.getNumberAttribute('tcp_udp_zero_port');
  }
  public set tcpUdpZeroPort(value: number) {
    this._tcpUdpZeroPort = value;
  }
  public resetTcpUdpZeroPort() {
    this._tcpUdpZeroPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUdpZeroPortInput() {
    return this._tcpUdpZeroPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // zero_window - computed: false, optional: true, required: false
  private _zeroWindow?: number; 
  public get zeroWindow() {
    return this.getNumberAttribute('zero_window');
  }
  public set zeroWindow(value: number) {
    this._zeroWindow = value;
  }
  public resetZeroWindow() {
    this._zeroWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWindowInput() {
    return this._zeroWindow;
  }

  // ipv6_ext_header - computed: false, optional: true, required: false
  private _ipv6ExtHeader = new IpAnomalyDropIpv6ExtHeaderOutputReference(this, "ipv6_ext_header");
  public get ipv6ExtHeader() {
    return this._ipv6ExtHeader;
  }
  public putIpv6ExtHeader(value: IpAnomalyDropIpv6ExtHeader) {
    this._ipv6ExtHeader.internalValue = value;
  }
  public resetIpv6ExtHeader() {
    this._ipv6ExtHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExtHeaderInput() {
    return this._ipv6ExtHeader.internalValue;
  }

  // packet_deformity - computed: false, optional: true, required: false
  private _packetDeformity = new IpAnomalyDropPacketDeformityOutputReference(this, "packet_deformity");
  public get packetDeformity() {
    return this._packetDeformity;
  }
  public putPacketDeformity(value: IpAnomalyDropPacketDeformity) {
    this._packetDeformity.internalValue = value;
  }
  public resetPacketDeformity() {
    this._packetDeformity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDeformityInput() {
    return this._packetDeformity.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new IpAnomalyDropSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: IpAnomalyDropSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // security_attack - computed: false, optional: true, required: false
  private _securityAttack = new IpAnomalyDropSecurityAttackOutputReference(this, "security_attack");
  public get securityAttack() {
    return this._securityAttack;
  }
  public putSecurityAttack(value: IpAnomalyDropSecurityAttack) {
    this._securityAttack.internalValue = value;
  }
  public resetSecurityAttack() {
    this._securityAttack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttackInput() {
    return this._securityAttack.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bad_content: cdktf.numberToTerraform(this._badContent),
      drop_all: cdktf.numberToTerraform(this._dropAll),
      frag: cdktf.numberToTerraform(this._frag),
      id: cdktf.stringToTerraform(this._id),
      ip_option: cdktf.numberToTerraform(this._ipOption),
      land_attack: cdktf.numberToTerraform(this._landAttack),
      out_of_sequence: cdktf.numberToTerraform(this._outOfSequence),
      ping_of_death: cdktf.numberToTerraform(this._pingOfDeath),
      tcp_no_flag: cdktf.numberToTerraform(this._tcpNoFlag),
      tcp_syn_fin: cdktf.numberToTerraform(this._tcpSynFin),
      tcp_syn_frag: cdktf.numberToTerraform(this._tcpSynFrag),
      tcp_udp_zero_port: cdktf.numberToTerraform(this._tcpUdpZeroPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      zero_window: cdktf.numberToTerraform(this._zeroWindow),
      ipv6_ext_header: ipAnomalyDropIpv6ExtHeaderToTerraform(this._ipv6ExtHeader.internalValue),
      packet_deformity: ipAnomalyDropPacketDeformityToTerraform(this._packetDeformity.internalValue),
      sampling_enable: cdktf.listMapper(ipAnomalyDropSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      security_attack: ipAnomalyDropSecurityAttackToTerraform(this._securityAttack.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bad_content: {
        value: cdktf.numberToHclTerraform(this._badContent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_all: {
        value: cdktf.numberToHclTerraform(this._dropAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frag: {
        value: cdktf.numberToHclTerraform(this._frag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_option: {
        value: cdktf.numberToHclTerraform(this._ipOption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      land_attack: {
        value: cdktf.numberToHclTerraform(this._landAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      out_of_sequence: {
        value: cdktf.numberToHclTerraform(this._outOfSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ping_of_death: {
        value: cdktf.numberToHclTerraform(this._pingOfDeath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_no_flag: {
        value: cdktf.numberToHclTerraform(this._tcpNoFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_syn_fin: {
        value: cdktf.numberToHclTerraform(this._tcpSynFin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_syn_frag: {
        value: cdktf.numberToHclTerraform(this._tcpSynFrag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_udp_zero_port: {
        value: cdktf.numberToHclTerraform(this._tcpUdpZeroPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zero_window: {
        value: cdktf.numberToHclTerraform(this._zeroWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_ext_header: {
        value: ipAnomalyDropIpv6ExtHeaderToHclTerraform(this._ipv6ExtHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAnomalyDropIpv6ExtHeaderList",
      },
      packet_deformity: {
        value: ipAnomalyDropPacketDeformityToHclTerraform(this._packetDeformity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAnomalyDropPacketDeformityList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ipAnomalyDropSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAnomalyDropSamplingEnableList",
      },
      security_attack: {
        value: ipAnomalyDropSecurityAttackToHclTerraform(this._securityAttack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAnomalyDropSecurityAttackList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
