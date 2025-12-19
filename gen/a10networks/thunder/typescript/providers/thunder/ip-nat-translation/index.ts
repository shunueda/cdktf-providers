// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNatTranslationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#id IpNatTranslation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * reclaim TCP resource immediately without MSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#ignore_tcp_msl IpNatTranslation#ignore_tcp_msl}
  */
  readonly ignoreTcpMsl?: number;
  /**
  * TCP protocol extended translations (Timeout in seconds (Interval of 60 seconds), default is 300 seconds (5 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#tcp_timeout IpNatTranslation#tcp_timeout}
  */
  readonly tcpTimeout?: number;
  /**
  * UDP protocol extended translations (Timeout in seconds (Interval of 60 seconds), default is 300 seconds (5 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#udp_timeout IpNatTranslation#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#uuid IpNatTranslation#uuid}
  */
  readonly uuid?: string;
  /**
  * icmp_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#icmp_timeout IpNatTranslation#icmp_timeout}
  */
  readonly icmpTimeout?: IpNatTranslationIcmpTimeout;
  /**
  * service_timeout_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#service_timeout_list IpNatTranslation#service_timeout_list}
  */
  readonly serviceTimeoutList?: IpNatTranslationServiceTimeoutListStruct[] | cdktf.IResolvable;
}
export interface IpNatTranslationIcmpTimeout {
  /**
  * 'age': Expiration time; 'fast': Use Fast aging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#icmp_timeout IpNatTranslation#icmp_timeout}
  */
  readonly icmpTimeout?: string;
  /**
  * Timeout in seconds (Interval of 60 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#icmp_timeout_val IpNatTranslation#icmp_timeout_val}
  */
  readonly icmpTimeoutVal?: number;
}

export function ipNatTranslationIcmpTimeoutToTerraform(struct?: IpNatTranslationIcmpTimeoutOutputReference | IpNatTranslationIcmpTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_timeout: cdktf.stringToTerraform(struct!.icmpTimeout),
    icmp_timeout_val: cdktf.numberToTerraform(struct!.icmpTimeoutVal),
  }
}


export function ipNatTranslationIcmpTimeoutToHclTerraform(struct?: IpNatTranslationIcmpTimeoutOutputReference | IpNatTranslationIcmpTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_timeout: {
      value: cdktf.stringToHclTerraform(struct!.icmpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_timeout_val: {
      value: cdktf.numberToHclTerraform(struct!.icmpTimeoutVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpNatTranslationIcmpTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IpNatTranslationIcmpTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTimeout = this._icmpTimeout;
    }
    if (this._icmpTimeoutVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTimeoutVal = this._icmpTimeoutVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpNatTranslationIcmpTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpTimeout = undefined;
      this._icmpTimeoutVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpTimeout = value.icmpTimeout;
      this._icmpTimeoutVal = value.icmpTimeoutVal;
    }
  }

  // icmp_timeout - computed: false, optional: true, required: false
  private _icmpTimeout?: string; 
  public get icmpTimeout() {
    return this.getStringAttribute('icmp_timeout');
  }
  public set icmpTimeout(value: string) {
    this._icmpTimeout = value;
  }
  public resetIcmpTimeout() {
    this._icmpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTimeoutInput() {
    return this._icmpTimeout;
  }

  // icmp_timeout_val - computed: false, optional: true, required: false
  private _icmpTimeoutVal?: number; 
  public get icmpTimeoutVal() {
    return this.getNumberAttribute('icmp_timeout_val');
  }
  public set icmpTimeoutVal(value: number) {
    this._icmpTimeoutVal = value;
  }
  public resetIcmpTimeoutVal() {
    this._icmpTimeoutVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTimeoutValInput() {
    return this._icmpTimeoutVal;
  }
}
export interface IpNatTranslationServiceTimeoutListStruct {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#port IpNatTranslation#port}
  */
  readonly port: number;
  /**
  * 'tcp': TCP Protocol; 'udp': UDP Protocol;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#service_type IpNatTranslation#service_type}
  */
  readonly serviceType: string;
  /**
  * 'age': Expiration time; 'fast': Use Fast aging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#timeout_type IpNatTranslation#timeout_type}
  */
  readonly timeoutType?: string;
  /**
  * Timeout in seconds (Interval of 60 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#timeout_val IpNatTranslation#timeout_val}
  */
  readonly timeoutVal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#uuid IpNatTranslation#uuid}
  */
  readonly uuid?: string;
}

export function ipNatTranslationServiceTimeoutListStructToTerraform(struct?: IpNatTranslationServiceTimeoutListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    timeout_type: cdktf.stringToTerraform(struct!.timeoutType),
    timeout_val: cdktf.numberToTerraform(struct!.timeoutVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ipNatTranslationServiceTimeoutListStructToHclTerraform(struct?: IpNatTranslationServiceTimeoutListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_type: {
      value: cdktf.stringToHclTerraform(struct!.timeoutType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_val: {
      value: cdktf.numberToHclTerraform(struct!.timeoutVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpNatTranslationServiceTimeoutListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpNatTranslationServiceTimeoutListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._timeoutType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutType = this._timeoutType;
    }
    if (this._timeoutVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutVal = this._timeoutVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpNatTranslationServiceTimeoutListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._serviceType = undefined;
      this._timeoutType = undefined;
      this._timeoutVal = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._serviceType = value.serviceType;
      this._timeoutType = value.timeoutType;
      this._timeoutVal = value.timeoutVal;
      this._uuid = value.uuid;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // timeout_type - computed: false, optional: true, required: false
  private _timeoutType?: string; 
  public get timeoutType() {
    return this.getStringAttribute('timeout_type');
  }
  public set timeoutType(value: string) {
    this._timeoutType = value;
  }
  public resetTimeoutType() {
    this._timeoutType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTypeInput() {
    return this._timeoutType;
  }

  // timeout_val - computed: false, optional: true, required: false
  private _timeoutVal?: number; 
  public get timeoutVal() {
    return this.getNumberAttribute('timeout_val');
  }
  public set timeoutVal(value: number) {
    this._timeoutVal = value;
  }
  public resetTimeoutVal() {
    this._timeoutVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutValInput() {
    return this._timeoutVal;
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
}

export class IpNatTranslationServiceTimeoutListStructList extends cdktf.ComplexList {
  public internalValue? : IpNatTranslationServiceTimeoutListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpNatTranslationServiceTimeoutListStructOutputReference {
    return new IpNatTranslationServiceTimeoutListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation thunder_ip_nat_translation}
*/
export class IpNatTranslation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_translation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNatTranslation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNatTranslation to import
  * @param importFromId The id of the existing IpNatTranslation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNatTranslation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_translation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_translation thunder_ip_nat_translation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNatTranslationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpNatTranslationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_translation',
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
    this._ignoreTcpMsl = config.ignoreTcpMsl;
    this._tcpTimeout = config.tcpTimeout;
    this._udpTimeout = config.udpTimeout;
    this._uuid = config.uuid;
    this._icmpTimeout.internalValue = config.icmpTimeout;
    this._serviceTimeoutList.internalValue = config.serviceTimeoutList;
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

  // ignore_tcp_msl - computed: false, optional: true, required: false
  private _ignoreTcpMsl?: number; 
  public get ignoreTcpMsl() {
    return this.getNumberAttribute('ignore_tcp_msl');
  }
  public set ignoreTcpMsl(value: number) {
    this._ignoreTcpMsl = value;
  }
  public resetIgnoreTcpMsl() {
    this._ignoreTcpMsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTcpMslInput() {
    return this._ignoreTcpMsl;
  }

  // tcp_timeout - computed: false, optional: true, required: false
  private _tcpTimeout?: number; 
  public get tcpTimeout() {
    return this.getNumberAttribute('tcp_timeout');
  }
  public set tcpTimeout(value: number) {
    this._tcpTimeout = value;
  }
  public resetTcpTimeout() {
    this._tcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutInput() {
    return this._tcpTimeout;
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: number; 
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
  public set udpTimeout(value: number) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
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

  // icmp_timeout - computed: false, optional: true, required: false
  private _icmpTimeout = new IpNatTranslationIcmpTimeoutOutputReference(this, "icmp_timeout");
  public get icmpTimeout() {
    return this._icmpTimeout;
  }
  public putIcmpTimeout(value: IpNatTranslationIcmpTimeout) {
    this._icmpTimeout.internalValue = value;
  }
  public resetIcmpTimeout() {
    this._icmpTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTimeoutInput() {
    return this._icmpTimeout.internalValue;
  }

  // service_timeout_list - computed: false, optional: true, required: false
  private _serviceTimeoutList = new IpNatTranslationServiceTimeoutListStructList(this, "service_timeout_list", false);
  public get serviceTimeoutList() {
    return this._serviceTimeoutList;
  }
  public putServiceTimeoutList(value: IpNatTranslationServiceTimeoutListStruct[] | cdktf.IResolvable) {
    this._serviceTimeoutList.internalValue = value;
  }
  public resetServiceTimeoutList() {
    this._serviceTimeoutList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTimeoutListInput() {
    return this._serviceTimeoutList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_tcp_msl: cdktf.numberToTerraform(this._ignoreTcpMsl),
      tcp_timeout: cdktf.numberToTerraform(this._tcpTimeout),
      udp_timeout: cdktf.numberToTerraform(this._udpTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      icmp_timeout: ipNatTranslationIcmpTimeoutToTerraform(this._icmpTimeout.internalValue),
      service_timeout_list: cdktf.listMapper(ipNatTranslationServiceTimeoutListStructToTerraform, true)(this._serviceTimeoutList.internalValue),
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
      ignore_tcp_msl: {
        value: cdktf.numberToHclTerraform(this._ignoreTcpMsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_timeout: {
        value: cdktf.numberToHclTerraform(this._udpTimeout),
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
      icmp_timeout: {
        value: ipNatTranslationIcmpTimeoutToHclTerraform(this._icmpTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpNatTranslationIcmpTimeoutList",
      },
      service_timeout_list: {
        value: cdktf.listMapperHcl(ipNatTranslationServiceTimeoutListStructToHclTerraform, true)(this._serviceTimeoutList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpNatTranslationServiceTimeoutListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
