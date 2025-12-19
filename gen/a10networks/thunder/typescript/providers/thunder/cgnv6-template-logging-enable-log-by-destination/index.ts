// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplateLoggingEnableLogByDestinationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#icmp Cgnv6TemplateLoggingEnableLogByDestinationA#icmp}
  */
  readonly icmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#id Cgnv6TemplateLoggingEnableLogByDestinationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logging_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#logging_name Cgnv6TemplateLoggingEnableLogByDestinationA#logging_name}
  */
  readonly loggingName: string;
  /**
  * Enable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#others Cgnv6TemplateLoggingEnableLogByDestinationA#others}
  */
  readonly others?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#uuid Cgnv6TemplateLoggingEnableLogByDestinationA#uuid}
  */
  readonly uuid?: string;
  /**
  * ip6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#ip6_list Cgnv6TemplateLoggingEnableLogByDestinationA#ip6_list}
  */
  readonly ip6List?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA[] | cdktf.IResolvable;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#ip_list Cgnv6TemplateLoggingEnableLogByDestinationA#ip_list}
  */
  readonly ipList?: Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA[] | cdktf.IResolvable;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_list Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_list}
  */
  readonly tcpList?: Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_list Cgnv6TemplateLoggingEnableLogByDestinationA#udp_list}
  */
  readonly udpList?: Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA[] | cdktf.IResolvable;
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_port_end Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_port_start Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_port_end Cgnv6TemplateLoggingEnableLogByDestinationA#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_port_start Cgnv6TemplateLoggingEnableLogByDestinationA#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA {
  /**
  * Enable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#icmp Cgnv6TemplateLoggingEnableLogByDestinationA#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IPv6 subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#ipv6_addr Cgnv6TemplateLoggingEnableLogByDestinationA#ipv6_addr}
  */
  readonly ipv6Addr: string;
  /**
  * Enable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#others Cgnv6TemplateLoggingEnableLogByDestinationA#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#user_tag Cgnv6TemplateLoggingEnableLogByDestinationA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#uuid Cgnv6TemplateLoggingEnableLogByDestinationA#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_list Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_list}
  */
  readonly tcpList?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_list Cgnv6TemplateLoggingEnableLogByDestinationA#udp_list}
  */
  readonly udpList?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAToTerraform, true)(struct!.udpList),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv6Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv6Addr = value.ipv6Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv6_addr - computed: false, optional: false, required: true
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructAList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListTcpListStructA[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructAList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListUdpListStructA[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_port_end Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_port_start Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_port_end Cgnv6TemplateLoggingEnableLogByDestinationA#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_port_start Cgnv6TemplateLoggingEnableLogByDestinationA#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA {
  /**
  * Enable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#icmp Cgnv6TemplateLoggingEnableLogByDestinationA#icmp}
  */
  readonly icmp?: number;
  /**
  * Configure an IP subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#ipv4_addr Cgnv6TemplateLoggingEnableLogByDestinationA#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Enable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#others Cgnv6TemplateLoggingEnableLogByDestinationA#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#user_tag Cgnv6TemplateLoggingEnableLogByDestinationA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#uuid Cgnv6TemplateLoggingEnableLogByDestinationA#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_list Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_list}
  */
  readonly tcpList?: Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_list Cgnv6TemplateLoggingEnableLogByDestinationA#udp_list}
  */
  readonly udpList?: Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA[] | cdktf.IResolvable;
}

export function cgnv6TemplateLoggingEnableLogByDestinationIpListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    others: cdktf.numberToTerraform(struct!.others),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    tcp_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAToTerraform, true)(struct!.tcpList),
    udp_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAToTerraform, true)(struct!.udpList),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationIpListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAToHclTerraform, true)(struct!.tcpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAList",
    },
    udp_list: {
      value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAToHclTerraform, true)(struct!.udpList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._tcpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpList = this._tcpList?.internalValue;
    }
    if (this._udpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpList = this._udpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmp = undefined;
      this._ipv4Addr = undefined;
      this._others = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._tcpList.internalValue = undefined;
      this._udpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmp = value.icmp;
      this._ipv4Addr = value.ipv4Addr;
      this._others = value.others;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._tcpList.internalValue = value.tcpList;
      this._udpList.internalValue = value.udpList;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructAList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: Cgnv6TemplateLoggingEnableLogByDestinationIpListTcpListStructA[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructAList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: Cgnv6TemplateLoggingEnableLogByDestinationIpListUdpListStructA[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationIpListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationIpListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationIpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_port_end Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#tcp_port_start Cgnv6TemplateLoggingEnableLogByDestinationA#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortEnd = this._tcpPortEnd;
    }
    if (this._tcpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortStart = this._tcpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tcpPortEnd = undefined;
      this._tcpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tcpPortEnd = value.tcpPortEnd;
      this._tcpPortStart = value.tcpPortStart;
    }
  }

  // tcp_port_end - computed: false, optional: true, required: false
  private _tcpPortEnd?: number; 
  public get tcpPortEnd() {
    return this.getNumberAttribute('tcp_port_end');
  }
  public set tcpPortEnd(value: number) {
    this._tcpPortEnd = value;
  }
  public resetTcpPortEnd() {
    this._tcpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEndInput() {
    return this._tcpPortEnd;
  }

  // tcp_port_start - computed: false, optional: true, required: false
  private _tcpPortStart?: number; 
  public get tcpPortStart() {
    return this.getNumberAttribute('tcp_port_start');
  }
  public set tcpPortStart(value: number) {
    this._tcpPortStart = value;
  }
  public resetTcpPortStart() {
    this._tcpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortStartInput() {
    return this._tcpPortStart;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_port_end Cgnv6TemplateLoggingEnableLogByDestinationA#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#udp_port_start Cgnv6TemplateLoggingEnableLogByDestinationA#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAToTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAToHclTerraform(struct?: Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_port_end: {
      value: cdktf.numberToHclTerraform(struct!.udpPortEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_start: {
      value: cdktf.numberToHclTerraform(struct!.udpPortStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpPortEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortEnd = this._udpPortEnd;
    }
    if (this._udpPortStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortStart = this._udpPortStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpPortEnd = undefined;
      this._udpPortStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpPortEnd = value.udpPortEnd;
      this._udpPortStart = value.udpPortStart;
    }
  }

  // udp_port_end - computed: false, optional: true, required: false
  private _udpPortEnd?: number; 
  public get udpPortEnd() {
    return this.getNumberAttribute('udp_port_end');
  }
  public set udpPortEnd(value: number) {
    this._udpPortEnd = value;
  }
  public resetUdpPortEnd() {
    this._udpPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEndInput() {
    return this._udpPortEnd;
  }

  // udp_port_start - computed: false, optional: true, required: false
  private _udpPortStart?: number; 
  public get udpPortStart() {
    return this.getNumberAttribute('udp_port_start');
  }
  public set udpPortStart(value: number) {
    this._udpPortStart = value;
  }
  public resetUdpPortStart() {
    this._udpPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortStartInput() {
    return this._udpPortStart;
  }
}

export class Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAOutputReference {
    return new Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination thunder_cgnv6_template_logging_enable_log_by_destination}
*/
export class Cgnv6TemplateLoggingEnableLogByDestinationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_logging_enable_log_by_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplateLoggingEnableLogByDestinationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplateLoggingEnableLogByDestinationA to import
  * @param importFromId The id of the existing Cgnv6TemplateLoggingEnableLogByDestinationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplateLoggingEnableLogByDestinationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_logging_enable_log_by_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_template_logging_enable_log_by_destination thunder_cgnv6_template_logging_enable_log_by_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplateLoggingEnableLogByDestinationAConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplateLoggingEnableLogByDestinationAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_logging_enable_log_by_destination',
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
    this._icmp = config.icmp;
    this._id = config.id;
    this._loggingName = config.loggingName;
    this._others = config.others;
    this._uuid = config.uuid;
    this._ip6List.internalValue = config.ip6List;
    this._ipList.internalValue = config.ipList;
    this._tcpList.internalValue = config.tcpList;
    this._udpList.internalValue = config.udpList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
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

  // logging_name - computed: false, optional: false, required: true
  private _loggingName?: string; 
  public get loggingName() {
    return this.getStringAttribute('logging_name');
  }
  public set loggingName(value: string) {
    this._loggingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingNameInput() {
    return this._loggingName;
  }

  // others - computed: false, optional: true, required: false
  private _others?: number; 
  public get others() {
    return this.getNumberAttribute('others');
  }
  public set others(value: number) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
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

  // ip6_list - computed: false, optional: true, required: false
  private _ip6List = new Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAList(this, "ip6_list", false);
  public get ip6List() {
    return this._ip6List;
  }
  public putIp6List(value: Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructA[] | cdktf.IResolvable) {
    this._ip6List.internalValue = value;
  }
  public resetIp6List() {
    this._ip6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ListInput() {
    return this._ip6List.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new Cgnv6TemplateLoggingEnableLogByDestinationIpListStructAList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: Cgnv6TemplateLoggingEnableLogByDestinationIpListStructA[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // tcp_list - computed: false, optional: true, required: false
  private _tcpList = new Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructA[] | cdktf.IResolvable) {
    this._tcpList.internalValue = value;
  }
  public resetTcpList() {
    this._tcpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpListInput() {
    return this._tcpList.internalValue;
  }

  // udp_list - computed: false, optional: true, required: false
  private _udpList = new Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructA[] | cdktf.IResolvable) {
    this._udpList.internalValue = value;
  }
  public resetUdpList() {
    this._udpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpListInput() {
    return this._udpList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmp: cdktf.numberToTerraform(this._icmp),
      id: cdktf.stringToTerraform(this._id),
      logging_name: cdktf.stringToTerraform(this._loggingName),
      others: cdktf.numberToTerraform(this._others),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip6_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAToTerraform, true)(this._ip6List.internalValue),
      ip_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationIpListStructAToTerraform, true)(this._ipList.internalValue),
      tcp_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAToTerraform, true)(this._tcpList.internalValue),
      udp_list: cdktf.listMapper(cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAToTerraform, true)(this._udpList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp: {
        value: cdktf.numberToHclTerraform(this._icmp),
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
      logging_name: {
        value: cdktf.stringToHclTerraform(this._loggingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      others: {
        value: cdktf.numberToHclTerraform(this._others),
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
      ip6_list: {
        value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAToHclTerraform, true)(this._ip6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationIp6ListStructAList",
      },
      ip_list: {
        value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationIpListStructAToHclTerraform, true)(this._ipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationIpListStructAList",
      },
      tcp_list: {
        value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAToHclTerraform, true)(this._tcpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationTcpListStructAList",
      },
      udp_list: {
        value: cdktf.listMapperHcl(cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAToHclTerraform, true)(this._udpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TemplateLoggingEnableLogByDestinationUdpListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
