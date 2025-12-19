// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TranslationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#id Cgnv6Translation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TCP protocol extended translations (Timeout in seconds (Interval of 60 seconds), default is 300 seconds (5 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#tcp_timeout Cgnv6Translation#tcp_timeout}
  */
  readonly tcpTimeout?: number;
  /**
  * UDP protocol extended translations (Timeout in seconds (Interval of 60 seconds), default is 300 seconds (5 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#udp_timeout Cgnv6Translation#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#uuid Cgnv6Translation#uuid}
  */
  readonly uuid?: string;
  /**
  * icmp_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#icmp_timeout Cgnv6Translation#icmp_timeout}
  */
  readonly icmpTimeout?: Cgnv6TranslationIcmpTimeout;
  /**
  * service_timeout_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#service_timeout_list Cgnv6Translation#service_timeout_list}
  */
  readonly serviceTimeoutList?: Cgnv6TranslationServiceTimeoutListStruct[] | cdktf.IResolvable;
}
export interface Cgnv6TranslationIcmpTimeout {
  /**
  * Use Fast Aging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#fast Cgnv6Translation#fast}
  */
  readonly fast?: number;
  /**
  * Timeout in seconds (Interval of 60 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#icmp_timeout_val Cgnv6Translation#icmp_timeout_val}
  */
  readonly icmpTimeoutVal?: number;
}

export function cgnv6TranslationIcmpTimeoutToTerraform(struct?: Cgnv6TranslationIcmpTimeoutOutputReference | Cgnv6TranslationIcmpTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast: cdktf.numberToTerraform(struct!.fast),
    icmp_timeout_val: cdktf.numberToTerraform(struct!.icmpTimeoutVal),
  }
}


export function cgnv6TranslationIcmpTimeoutToHclTerraform(struct?: Cgnv6TranslationIcmpTimeoutOutputReference | Cgnv6TranslationIcmpTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast: {
      value: cdktf.numberToHclTerraform(struct!.fast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class Cgnv6TranslationIcmpTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6TranslationIcmpTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fast = this._fast;
    }
    if (this._icmpTimeoutVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTimeoutVal = this._icmpTimeoutVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6TranslationIcmpTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fast = undefined;
      this._icmpTimeoutVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fast = value.fast;
      this._icmpTimeoutVal = value.icmpTimeoutVal;
    }
  }

  // fast - computed: false, optional: true, required: false
  private _fast?: number; 
  public get fast() {
    return this.getNumberAttribute('fast');
  }
  public set fast(value: number) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
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
export interface Cgnv6TranslationServiceTimeoutListStruct {
  /**
  * Use Fast Aging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#fast Cgnv6Translation#fast}
  */
  readonly fast?: number;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#port Cgnv6Translation#port}
  */
  readonly port: number;
  /**
  * End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#port_end Cgnv6Translation#port_end}
  */
  readonly portEnd?: number;
  /**
  * 'tcp': TCP Protocol; 'udp': UDP Protocol;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#service_type Cgnv6Translation#service_type}
  */
  readonly serviceType: string;
  /**
  * Timeout in seconds (Interval of 60 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#timeout_val Cgnv6Translation#timeout_val}
  */
  readonly timeoutVal?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#uuid Cgnv6Translation#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6TranslationServiceTimeoutListStructToTerraform(struct?: Cgnv6TranslationServiceTimeoutListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast: cdktf.numberToTerraform(struct!.fast),
    port: cdktf.numberToTerraform(struct!.port),
    port_end: cdktf.numberToTerraform(struct!.portEnd),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    timeout_val: cdktf.numberToTerraform(struct!.timeoutVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6TranslationServiceTimeoutListStructToHclTerraform(struct?: Cgnv6TranslationServiceTimeoutListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast: {
      value: cdktf.numberToHclTerraform(struct!.fast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_end: {
      value: cdktf.numberToHclTerraform(struct!.portEnd),
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

export class Cgnv6TranslationServiceTimeoutListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6TranslationServiceTimeoutListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fast = this._fast;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEnd = this._portEnd;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
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

  public set internalValue(value: Cgnv6TranslationServiceTimeoutListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fast = undefined;
      this._port = undefined;
      this._portEnd = undefined;
      this._serviceType = undefined;
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
      this._fast = value.fast;
      this._port = value.port;
      this._portEnd = value.portEnd;
      this._serviceType = value.serviceType;
      this._timeoutVal = value.timeoutVal;
      this._uuid = value.uuid;
    }
  }

  // fast - computed: false, optional: true, required: false
  private _fast?: number; 
  public get fast() {
    return this.getNumberAttribute('fast');
  }
  public set fast(value: number) {
    this._fast = value;
  }
  public resetFast() {
    this._fast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastInput() {
    return this._fast;
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

  // port_end - computed: false, optional: true, required: false
  private _portEnd?: number; 
  public get portEnd() {
    return this.getNumberAttribute('port_end');
  }
  public set portEnd(value: number) {
    this._portEnd = value;
  }
  public resetPortEnd() {
    this._portEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndInput() {
    return this._portEnd;
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

export class Cgnv6TranslationServiceTimeoutListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6TranslationServiceTimeoutListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6TranslationServiceTimeoutListStructOutputReference {
    return new Cgnv6TranslationServiceTimeoutListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation thunder_cgnv6_translation}
*/
export class Cgnv6Translation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_translation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Translation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Translation to import
  * @param importFromId The id of the existing Cgnv6Translation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Translation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_translation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_translation thunder_cgnv6_translation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TranslationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TranslationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_translation',
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
  private _icmpTimeout = new Cgnv6TranslationIcmpTimeoutOutputReference(this, "icmp_timeout");
  public get icmpTimeout() {
    return this._icmpTimeout;
  }
  public putIcmpTimeout(value: Cgnv6TranslationIcmpTimeout) {
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
  private _serviceTimeoutList = new Cgnv6TranslationServiceTimeoutListStructList(this, "service_timeout_list", false);
  public get serviceTimeoutList() {
    return this._serviceTimeoutList;
  }
  public putServiceTimeoutList(value: Cgnv6TranslationServiceTimeoutListStruct[] | cdktf.IResolvable) {
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
      tcp_timeout: cdktf.numberToTerraform(this._tcpTimeout),
      udp_timeout: cdktf.numberToTerraform(this._udpTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      icmp_timeout: cgnv6TranslationIcmpTimeoutToTerraform(this._icmpTimeout.internalValue),
      service_timeout_list: cdktf.listMapper(cgnv6TranslationServiceTimeoutListStructToTerraform, true)(this._serviceTimeoutList.internalValue),
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
        value: cgnv6TranslationIcmpTimeoutToHclTerraform(this._icmpTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TranslationIcmpTimeoutList",
      },
      service_timeout_list: {
        value: cdktf.listMapperHcl(cgnv6TranslationServiceTimeoutListStructToHclTerraform, true)(this._serviceTimeoutList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6TranslationServiceTimeoutListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
