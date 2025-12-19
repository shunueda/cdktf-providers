// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwTemplateLoggingDisableLogByDestinationIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable logging for the ICMP traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#icmp FwTemplateLoggingDisableLogByDestinationIp#icmp}
  */
  readonly icmp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#id FwTemplateLoggingDisableLogByDestinationIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure an IP subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#ipv4_addr FwTemplateLoggingDisableLogByDestinationIp#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * Logging_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#logging_name FwTemplateLoggingDisableLogByDestinationIp#logging_name}
  */
  readonly loggingName: string;
  /**
  * Disable logging for the other layer-4 protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#others FwTemplateLoggingDisableLogByDestinationIp#others}
  */
  readonly others?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#user_tag FwTemplateLoggingDisableLogByDestinationIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#uuid FwTemplateLoggingDisableLogByDestinationIp#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#tcp_list FwTemplateLoggingDisableLogByDestinationIp#tcp_list}
  */
  readonly tcpList?: FwTemplateLoggingDisableLogByDestinationIpTcpListStruct[] | cdktf.IResolvable;
  /**
  * udp_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#udp_list FwTemplateLoggingDisableLogByDestinationIp#udp_list}
  */
  readonly udpList?: FwTemplateLoggingDisableLogByDestinationIpUdpListStruct[] | cdktf.IResolvable;
}
export interface FwTemplateLoggingDisableLogByDestinationIpTcpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#tcp_port_end FwTemplateLoggingDisableLogByDestinationIp#tcp_port_end}
  */
  readonly tcpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#tcp_port_start FwTemplateLoggingDisableLogByDestinationIp#tcp_port_start}
  */
  readonly tcpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationIpTcpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpTcpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_port_end: cdktf.numberToTerraform(struct!.tcpPortEnd),
    tcp_port_start: cdktf.numberToTerraform(struct!.tcpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIpTcpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpTcpListStruct | cdktf.IResolvable): any {
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

export class FwTemplateLoggingDisableLogByDestinationIpTcpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIpTcpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIpTcpListStruct | cdktf.IResolvable | undefined) {
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

export class FwTemplateLoggingDisableLogByDestinationIpTcpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIpTcpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIpTcpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIpTcpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwTemplateLoggingDisableLogByDestinationIpUdpListStruct {
  /**
  * Port Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#udp_port_end FwTemplateLoggingDisableLogByDestinationIp#udp_port_end}
  */
  readonly udpPortEnd?: number;
  /**
  * Destination Port (Single Destination Port or Port Range Start)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#udp_port_start FwTemplateLoggingDisableLogByDestinationIp#udp_port_start}
  */
  readonly udpPortStart?: number;
}

export function fwTemplateLoggingDisableLogByDestinationIpUdpListStructToTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpUdpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_port_end: cdktf.numberToTerraform(struct!.udpPortEnd),
    udp_port_start: cdktf.numberToTerraform(struct!.udpPortStart),
  }
}


export function fwTemplateLoggingDisableLogByDestinationIpUdpListStructToHclTerraform(struct?: FwTemplateLoggingDisableLogByDestinationIpUdpListStruct | cdktf.IResolvable): any {
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

export class FwTemplateLoggingDisableLogByDestinationIpUdpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwTemplateLoggingDisableLogByDestinationIpUdpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwTemplateLoggingDisableLogByDestinationIpUdpListStruct | cdktf.IResolvable | undefined) {
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

export class FwTemplateLoggingDisableLogByDestinationIpUdpListStructList extends cdktf.ComplexList {
  public internalValue? : FwTemplateLoggingDisableLogByDestinationIpUdpListStruct[] | cdktf.IResolvable

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
  public get(index: number): FwTemplateLoggingDisableLogByDestinationIpUdpListStructOutputReference {
    return new FwTemplateLoggingDisableLogByDestinationIpUdpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip thunder_fw_template_logging_disable_log_by_destination_ip}
*/
export class FwTemplateLoggingDisableLogByDestinationIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_template_logging_disable_log_by_destination_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwTemplateLoggingDisableLogByDestinationIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwTemplateLoggingDisableLogByDestinationIp to import
  * @param importFromId The id of the existing FwTemplateLoggingDisableLogByDestinationIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwTemplateLoggingDisableLogByDestinationIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_template_logging_disable_log_by_destination_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_template_logging_disable_log_by_destination_ip thunder_fw_template_logging_disable_log_by_destination_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwTemplateLoggingDisableLogByDestinationIpConfig
  */
  public constructor(scope: Construct, id: string, config: FwTemplateLoggingDisableLogByDestinationIpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_template_logging_disable_log_by_destination_ip',
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
    this._ipv4Addr = config.ipv4Addr;
    this._loggingName = config.loggingName;
    this._others = config.others;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
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
  private _tcpList = new FwTemplateLoggingDisableLogByDestinationIpTcpListStructList(this, "tcp_list", false);
  public get tcpList() {
    return this._tcpList;
  }
  public putTcpList(value: FwTemplateLoggingDisableLogByDestinationIpTcpListStruct[] | cdktf.IResolvable) {
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
  private _udpList = new FwTemplateLoggingDisableLogByDestinationIpUdpListStructList(this, "udp_list", false);
  public get udpList() {
    return this._udpList;
  }
  public putUdpList(value: FwTemplateLoggingDisableLogByDestinationIpUdpListStruct[] | cdktf.IResolvable) {
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
      ipv4_addr: cdktf.stringToTerraform(this._ipv4Addr),
      logging_name: cdktf.stringToTerraform(this._loggingName),
      others: cdktf.numberToTerraform(this._others),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      tcp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIpTcpListStructToTerraform, true)(this._tcpList.internalValue),
      udp_list: cdktf.listMapper(fwTemplateLoggingDisableLogByDestinationIpUdpListStructToTerraform, true)(this._udpList.internalValue),
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
      ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._ipv4Addr),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_list: {
        value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIpTcpListStructToHclTerraform, true)(this._tcpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingDisableLogByDestinationIpTcpListStructList",
      },
      udp_list: {
        value: cdktf.listMapperHcl(fwTemplateLoggingDisableLogByDestinationIpUdpListStructToHclTerraform, true)(this._udpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwTemplateLoggingDisableLogByDestinationIpUdpListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
