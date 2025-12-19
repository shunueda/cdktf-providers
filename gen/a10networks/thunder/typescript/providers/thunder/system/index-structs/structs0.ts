import * as cdktf from 'cdktf';
export interface SystemAddCpuCore {
  /**
  * core index to be added (Specify core index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#core_index System#core_index}
  */
  readonly coreIndex?: number;
}

export function systemAddCpuCoreToTerraform(struct?: SystemAddCpuCoreOutputReference | SystemAddCpuCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_index: cdktf.numberToTerraform(struct!.coreIndex),
  }
}


export function systemAddCpuCoreToHclTerraform(struct?: SystemAddCpuCoreOutputReference | SystemAddCpuCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_index: {
      value: cdktf.numberToHclTerraform(struct!.coreIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAddCpuCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAddCpuCore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreIndex = this._coreIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAddCpuCore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreIndex = value.coreIndex;
    }
  }

  // core_index - computed: false, optional: true, required: false
  private _coreIndex?: number; 
  public get coreIndex() {
    return this.getNumberAttribute('core_index');
  }
  public set coreIndex(value: number) {
    this._coreIndex = value;
  }
  public resetCoreIndex() {
    this._coreIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreIndexInput() {
    return this._coreIndex;
  }
}
export interface SystemAddPort {
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#port_index System#port_index}
  */
  readonly portIndex?: number;
}

export function systemAddPortToTerraform(struct?: SystemAddPortOutputReference | SystemAddPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_index: cdktf.numberToTerraform(struct!.portIndex),
  }
}


export function systemAddPortToHclTerraform(struct?: SystemAddPortOutputReference | SystemAddPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_index: {
      value: cdktf.numberToHclTerraform(struct!.portIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAddPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAddPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.portIndex = this._portIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAddPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portIndex = value.portIndex;
    }
  }

  // port_index - computed: false, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }
}
export interface SystemAllVlanLimit {
  /**
  * broadcast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#bcast System#bcast}
  */
  readonly bcast?: number;
  /**
  * IP multicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipmcast System#ipmcast}
  */
  readonly ipmcast?: number;
  /**
  * multicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#mcast System#mcast}
  */
  readonly mcast?: number;
  /**
  * unknown unicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#unknown_ucast System#unknown_ucast}
  */
  readonly unknownUcast?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemAllVlanLimitToTerraform(struct?: SystemAllVlanLimitOutputReference | SystemAllVlanLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bcast: cdktf.numberToTerraform(struct!.bcast),
    ipmcast: cdktf.numberToTerraform(struct!.ipmcast),
    mcast: cdktf.numberToTerraform(struct!.mcast),
    unknown_ucast: cdktf.numberToTerraform(struct!.unknownUcast),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemAllVlanLimitToHclTerraform(struct?: SystemAllVlanLimitOutputReference | SystemAllVlanLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bcast: {
      value: cdktf.numberToHclTerraform(struct!.bcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipmcast: {
      value: cdktf.numberToHclTerraform(struct!.ipmcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcast: {
      value: cdktf.numberToHclTerraform(struct!.mcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_ucast: {
      value: cdktf.numberToHclTerraform(struct!.unknownUcast),
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

export class SystemAllVlanLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAllVlanLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcast = this._bcast;
    }
    if (this._ipmcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmcast = this._ipmcast;
    }
    if (this._mcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcast = this._mcast;
    }
    if (this._unknownUcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownUcast = this._unknownUcast;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAllVlanLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bcast = undefined;
      this._ipmcast = undefined;
      this._mcast = undefined;
      this._unknownUcast = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bcast = value.bcast;
      this._ipmcast = value.ipmcast;
      this._mcast = value.mcast;
      this._unknownUcast = value.unknownUcast;
      this._uuid = value.uuid;
    }
  }

  // bcast - computed: false, optional: true, required: false
  private _bcast?: number; 
  public get bcast() {
    return this.getNumberAttribute('bcast');
  }
  public set bcast(value: number) {
    this._bcast = value;
  }
  public resetBcast() {
    this._bcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcastInput() {
    return this._bcast;
  }

  // ipmcast - computed: false, optional: true, required: false
  private _ipmcast?: number; 
  public get ipmcast() {
    return this.getNumberAttribute('ipmcast');
  }
  public set ipmcast(value: number) {
    this._ipmcast = value;
  }
  public resetIpmcast() {
    this._ipmcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmcastInput() {
    return this._ipmcast;
  }

  // mcast - computed: false, optional: true, required: false
  private _mcast?: number; 
  public get mcast() {
    return this.getNumberAttribute('mcast');
  }
  public set mcast(value: number) {
    this._mcast = value;
  }
  public resetMcast() {
    this._mcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastInput() {
    return this._mcast;
  }

  // unknown_ucast - computed: false, optional: true, required: false
  private _unknownUcast?: number; 
  public get unknownUcast() {
    return this.getNumberAttribute('unknown_ucast');
  }
  public set unknownUcast(value: number) {
    this._unknownUcast = value;
  }
  public resetUnknownUcast() {
    this._unknownUcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUcastInput() {
    return this._unknownUcast;
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
export interface SystemAppPerformanceSamplingEnable {
  /**
  * 'all': all; 'total-throughput-bits-per-sec': Total Throughput in bits/sec; 'l4-conns-per-sec': L4 Connections/sec; 'l7-conns-per-sec': L7 Connections/sec; 'l7-trans-per-sec': L7 Transactions/sec; 'ssl-conns-per-sec': SSL Connections/sec; 'ip-nat-conns-per-sec': IP NAT Connections/sec; 'total-new-conns-per-sec': Total New Connections Established/sec; 'total-curr-conns': Total Current Established Connections; 'l4-bandwidth': L4 Bandwidth in bits/sec; 'l7-bandwidth': L7 Bandwidth in bits/sec; 'serv-ssl-conns-per-sec': Server SSL Connections/sec; 'fw-conns-per-sec': FW Connections/sec; 'gifw-conns-per-sec': GiFW Connections/sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemAppPerformanceSamplingEnableToTerraform(struct?: SystemAppPerformanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemAppPerformanceSamplingEnableToHclTerraform(struct?: SystemAppPerformanceSamplingEnable | cdktf.IResolvable): any {
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

export class SystemAppPerformanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAppPerformanceSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemAppPerformanceSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemAppPerformanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemAppPerformanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemAppPerformanceSamplingEnableOutputReference {
    return new SystemAppPerformanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAppPerformance {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemAppPerformanceSamplingEnable[] | cdktf.IResolvable;
}

export function systemAppPerformanceToTerraform(struct?: SystemAppPerformanceOutputReference | SystemAppPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemAppPerformanceSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemAppPerformanceToHclTerraform(struct?: SystemAppPerformanceOutputReference | SystemAppPerformance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemAppPerformanceSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAppPerformanceSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAppPerformanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAppPerformance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAppPerformance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemAppPerformanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemAppPerformanceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemAppsGlobal {
  /**
  * Set threshold for the total Connections Per Second across the system (Enter threshold number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#cps_threshold System#cps_threshold}
  */
  readonly cpsThreshold?: number;
  /**
  * Send TCP session creation log on completion of 3-way handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#log_session_on_established System#log_session_on_established}
  */
  readonly logSessionOnEstablished?: number;
  /**
  * Configure maximum session life, default is 2 seconds (1-39 seconds, default is 2 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#msl_time System#msl_time}
  */
  readonly mslTime?: number;
  /**
  * Set threshold for total sessions across the system (Enter threshold number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sessions_threshold System#sessions_threshold}
  */
  readonly sessionsThreshold?: number;
  /**
  * Set timer wheel walk limit (0-1024, 0 is unlimited, default is 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#timer_wheel_walk_limit System#timer_wheel_walk_limit}
  */
  readonly timerWheelWalkLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemAppsGlobalToTerraform(struct?: SystemAppsGlobalOutputReference | SystemAppsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cps_threshold: cdktf.numberToTerraform(struct!.cpsThreshold),
    log_session_on_established: cdktf.numberToTerraform(struct!.logSessionOnEstablished),
    msl_time: cdktf.numberToTerraform(struct!.mslTime),
    sessions_threshold: cdktf.numberToTerraform(struct!.sessionsThreshold),
    timer_wheel_walk_limit: cdktf.numberToTerraform(struct!.timerWheelWalkLimit),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemAppsGlobalToHclTerraform(struct?: SystemAppsGlobalOutputReference | SystemAppsGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cps_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_session_on_established: {
      value: cdktf.numberToHclTerraform(struct!.logSessionOnEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msl_time: {
      value: cdktf.numberToHclTerraform(struct!.mslTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions_threshold: {
      value: cdktf.numberToHclTerraform(struct!.sessionsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_wheel_walk_limit: {
      value: cdktf.numberToHclTerraform(struct!.timerWheelWalkLimit),
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

export class SystemAppsGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAppsGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpsThreshold = this._cpsThreshold;
    }
    if (this._logSessionOnEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSessionOnEstablished = this._logSessionOnEstablished;
    }
    if (this._mslTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.mslTime = this._mslTime;
    }
    if (this._sessionsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsThreshold = this._sessionsThreshold;
    }
    if (this._timerWheelWalkLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerWheelWalkLimit = this._timerWheelWalkLimit;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAppsGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpsThreshold = undefined;
      this._logSessionOnEstablished = undefined;
      this._mslTime = undefined;
      this._sessionsThreshold = undefined;
      this._timerWheelWalkLimit = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpsThreshold = value.cpsThreshold;
      this._logSessionOnEstablished = value.logSessionOnEstablished;
      this._mslTime = value.mslTime;
      this._sessionsThreshold = value.sessionsThreshold;
      this._timerWheelWalkLimit = value.timerWheelWalkLimit;
      this._uuid = value.uuid;
    }
  }

  // cps_threshold - computed: false, optional: true, required: false
  private _cpsThreshold?: number; 
  public get cpsThreshold() {
    return this.getNumberAttribute('cps_threshold');
  }
  public set cpsThreshold(value: number) {
    this._cpsThreshold = value;
  }
  public resetCpsThreshold() {
    this._cpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsThresholdInput() {
    return this._cpsThreshold;
  }

  // log_session_on_established - computed: false, optional: true, required: false
  private _logSessionOnEstablished?: number; 
  public get logSessionOnEstablished() {
    return this.getNumberAttribute('log_session_on_established');
  }
  public set logSessionOnEstablished(value: number) {
    this._logSessionOnEstablished = value;
  }
  public resetLogSessionOnEstablished() {
    this._logSessionOnEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSessionOnEstablishedInput() {
    return this._logSessionOnEstablished;
  }

  // msl_time - computed: false, optional: true, required: false
  private _mslTime?: number; 
  public get mslTime() {
    return this.getNumberAttribute('msl_time');
  }
  public set mslTime(value: number) {
    this._mslTime = value;
  }
  public resetMslTime() {
    this._mslTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mslTimeInput() {
    return this._mslTime;
  }

  // sessions_threshold - computed: false, optional: true, required: false
  private _sessionsThreshold?: number; 
  public get sessionsThreshold() {
    return this.getNumberAttribute('sessions_threshold');
  }
  public set sessionsThreshold(value: number) {
    this._sessionsThreshold = value;
  }
  public resetSessionsThreshold() {
    this._sessionsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsThresholdInput() {
    return this._sessionsThreshold;
  }

  // timer_wheel_walk_limit - computed: false, optional: true, required: false
  private _timerWheelWalkLimit?: number; 
  public get timerWheelWalkLimit() {
    return this.getNumberAttribute('timer_wheel_walk_limit');
  }
  public set timerWheelWalkLimit(value: number) {
    this._timerWheelWalkLimit = value;
  }
  public resetTimerWheelWalkLimit() {
    this._timerWheelWalkLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerWheelWalkLimitInput() {
    return this._timerWheelWalkLimit;
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
export interface SystemAsicDebugDump {
  /**
  * Enable/Disable L2L3 ASIC traffic discard/drop events and Dump debug information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemAsicDebugDumpToTerraform(struct?: SystemAsicDebugDumpOutputReference | SystemAsicDebugDump): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemAsicDebugDumpToHclTerraform(struct?: SystemAsicDebugDumpOutputReference | SystemAsicDebugDump): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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

export class SystemAsicDebugDumpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAsicDebugDump | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAsicDebugDump | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemAsicMmuFailSafe {
  /**
  * Inject MMU SER/Parity errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#inject_error System#inject_error}
  */
  readonly injectError?: number;
  /**
  * Enable Fail-safe software error monitoring and act on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#monitor_disable System#monitor_disable}
  */
  readonly monitorDisable?: number;
  /**
  * ASIC Fail-safe monitoring intervals in Seconds (Units of 1 Seconds (default 60))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#monitor_interval System#monitor_interval}
  */
  readonly monitorInterval?: number;
  /**
  * Disable system reboot if system encounters mmu error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#reboot_disable System#reboot_disable}
  */
  readonly rebootDisable?: number;
  /**
  * ASIC Fail-safe recovery threshold in Errors (Units of 1 Errors (default 2))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#recovery_threshold System#recovery_threshold}
  */
  readonly recoveryThreshold?: number;
  /**
  * 'all-zeros': Inject all bits 0s in a byte; 'all-ones': Inject all bits 1s in a byte; 'lcb': Logical checker board; 'inverse-lcb': Inverse Logical checker board;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#test_pattern_type System#test_pattern_type}
  */
  readonly testPatternType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemAsicMmuFailSafeToTerraform(struct?: SystemAsicMmuFailSafeOutputReference | SystemAsicMmuFailSafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inject_error: cdktf.numberToTerraform(struct!.injectError),
    monitor_disable: cdktf.numberToTerraform(struct!.monitorDisable),
    monitor_interval: cdktf.numberToTerraform(struct!.monitorInterval),
    reboot_disable: cdktf.numberToTerraform(struct!.rebootDisable),
    recovery_threshold: cdktf.numberToTerraform(struct!.recoveryThreshold),
    test_pattern_type: cdktf.stringToTerraform(struct!.testPatternType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemAsicMmuFailSafeToHclTerraform(struct?: SystemAsicMmuFailSafeOutputReference | SystemAsicMmuFailSafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inject_error: {
      value: cdktf.numberToHclTerraform(struct!.injectError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_disable: {
      value: cdktf.numberToHclTerraform(struct!.monitorDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_interval: {
      value: cdktf.numberToHclTerraform(struct!.monitorInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reboot_disable: {
      value: cdktf.numberToHclTerraform(struct!.rebootDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recovery_threshold: {
      value: cdktf.numberToHclTerraform(struct!.recoveryThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.testPatternType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAsicMmuFailSafeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAsicMmuFailSafe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._injectError !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectError = this._injectError;
    }
    if (this._monitorDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisable = this._monitorDisable;
    }
    if (this._monitorInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorInterval = this._monitorInterval;
    }
    if (this._rebootDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootDisable = this._rebootDisable;
    }
    if (this._recoveryThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryThreshold = this._recoveryThreshold;
    }
    if (this._testPatternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testPatternType = this._testPatternType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAsicMmuFailSafe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._injectError = undefined;
      this._monitorDisable = undefined;
      this._monitorInterval = undefined;
      this._rebootDisable = undefined;
      this._recoveryThreshold = undefined;
      this._testPatternType = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._injectError = value.injectError;
      this._monitorDisable = value.monitorDisable;
      this._monitorInterval = value.monitorInterval;
      this._rebootDisable = value.rebootDisable;
      this._recoveryThreshold = value.recoveryThreshold;
      this._testPatternType = value.testPatternType;
      this._uuid = value.uuid;
    }
  }

  // inject_error - computed: false, optional: true, required: false
  private _injectError?: number; 
  public get injectError() {
    return this.getNumberAttribute('inject_error');
  }
  public set injectError(value: number) {
    this._injectError = value;
  }
  public resetInjectError() {
    this._injectError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectErrorInput() {
    return this._injectError;
  }

  // monitor_disable - computed: false, optional: true, required: false
  private _monitorDisable?: number; 
  public get monitorDisable() {
    return this.getNumberAttribute('monitor_disable');
  }
  public set monitorDisable(value: number) {
    this._monitorDisable = value;
  }
  public resetMonitorDisable() {
    this._monitorDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisableInput() {
    return this._monitorDisable;
  }

  // monitor_interval - computed: false, optional: true, required: false
  private _monitorInterval?: number; 
  public get monitorInterval() {
    return this.getNumberAttribute('monitor_interval');
  }
  public set monitorInterval(value: number) {
    this._monitorInterval = value;
  }
  public resetMonitorInterval() {
    this._monitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIntervalInput() {
    return this._monitorInterval;
  }

  // reboot_disable - computed: false, optional: true, required: false
  private _rebootDisable?: number; 
  public get rebootDisable() {
    return this.getNumberAttribute('reboot_disable');
  }
  public set rebootDisable(value: number) {
    this._rebootDisable = value;
  }
  public resetRebootDisable() {
    this._rebootDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootDisableInput() {
    return this._rebootDisable;
  }

  // recovery_threshold - computed: false, optional: true, required: false
  private _recoveryThreshold?: number; 
  public get recoveryThreshold() {
    return this.getNumberAttribute('recovery_threshold');
  }
  public set recoveryThreshold(value: number) {
    this._recoveryThreshold = value;
  }
  public resetRecoveryThreshold() {
    this._recoveryThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryThresholdInput() {
    return this._recoveryThreshold;
  }

  // test_pattern_type - computed: false, optional: true, required: false
  private _testPatternType?: string; 
  public get testPatternType() {
    return this.getStringAttribute('test_pattern_type');
  }
  public set testPatternType(value: string) {
    this._testPatternType = value;
  }
  public resetTestPatternType() {
    this._testPatternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testPatternTypeInput() {
    return this._testPatternType;
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
export interface SystemBandwidthSamplingEnable {
  /**
  * 'all': all; 'input-bytes-per-sec': In Bytes per second; 'output-bytes-per-sec': Out Bytes per second; 'ppsl_drop_egr': Packet-Per-Sec Limit Drop at egress; 'ppsl_drop_ing': Packet-Per-Sec Limit Drop at ingress; 'ppsl_ignore_limit': Packet-Per-Sec Limit ignored packets count; 'licexpire_drop': License Expire Drop; 'bwl_drop': BW Limit Drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemBandwidthSamplingEnableToTerraform(struct?: SystemBandwidthSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemBandwidthSamplingEnableToHclTerraform(struct?: SystemBandwidthSamplingEnable | cdktf.IResolvable): any {
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

export class SystemBandwidthSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemBandwidthSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemBandwidthSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemBandwidthSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemBandwidthSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemBandwidthSamplingEnableOutputReference {
    return new SystemBandwidthSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemBandwidth {
  /**
  * Adjust bandwidth critical threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#critical_threshold System#critical_threshold}
  */
  readonly criticalThreshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * Adjust bandwidth warning threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#warning_threshold System#warning_threshold}
  */
  readonly warningThreshold?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemBandwidthSamplingEnable[] | cdktf.IResolvable;
}

export function systemBandwidthToTerraform(struct?: SystemBandwidthOutputReference | SystemBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_threshold: cdktf.numberToTerraform(struct!.criticalThreshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    warning_threshold: cdktf.numberToTerraform(struct!.warningThreshold),
    sampling_enable: cdktf.listMapper(systemBandwidthSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemBandwidthToHclTerraform(struct?: SystemBandwidthOutputReference | SystemBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical_threshold: {
      value: cdktf.numberToHclTerraform(struct!.criticalThreshold),
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
    warning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemBandwidthSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemBandwidthSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criticalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalThreshold = this._criticalThreshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criticalThreshold = undefined;
      this._uuid = undefined;
      this._warningThreshold = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criticalThreshold = value.criticalThreshold;
      this._uuid = value.uuid;
      this._warningThreshold = value.warningThreshold;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // critical_threshold - computed: false, optional: true, required: false
  private _criticalThreshold?: number; 
  public get criticalThreshold() {
    return this.getNumberAttribute('critical_threshold');
  }
  public set criticalThreshold(value: number) {
    this._criticalThreshold = value;
  }
  public resetCriticalThreshold() {
    this._criticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalThresholdInput() {
    return this._criticalThreshold;
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

  // warning_threshold - computed: false, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemBandwidthSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemBandwidthSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemBfdSamplingEnable {
  /**
  * 'all': all; 'ip_checksum_error': IP packet checksum errors; 'udp_checksum_error': UDP packet checksum errors; 'session_not_found': Session not found; 'multihop_mismatch': Multihop session or packet mismatch; 'version_mismatch': BFD version mismatch; 'length_too_small': Packets too small; 'data_is_short': Packet data length too short; 'invalid_detect_mult': Invalid detect multiplier; 'invalid_multipoint': Invalid multipoint setting; 'invalid_my_disc': Invalid my descriptor; 'invalid_ttl': Invalid TTL; 'auth_length_invalid': Invalid authentication length; 'auth_mismatch': Authentication mismatch; 'auth_type_mismatch': Authentication type mismatch; 'auth_key_id_mismatch': Authentication key-id mismatch; 'auth_key_mismatch': Authentication key mismatch; 'auth_seqnum_invalid': Invalid authentication sequence number; 'auth_failed': Authentication failures; 'local_state_admin_down': Local admin down session state; 'dest_unreachable': Destination unreachable; 'no_ipv6_enable': No IPv6 enable; 'other_error': Other errors;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemBfdSamplingEnableToTerraform(struct?: SystemBfdSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemBfdSamplingEnableToHclTerraform(struct?: SystemBfdSamplingEnable | cdktf.IResolvable): any {
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

export class SystemBfdSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemBfdSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemBfdSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemBfdSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemBfdSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemBfdSamplingEnableOutputReference {
    return new SystemBfdSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemBfd {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemBfdSamplingEnable[] | cdktf.IResolvable;
}

export function systemBfdToTerraform(struct?: SystemBfdOutputReference | SystemBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemBfdSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemBfdToHclTerraform(struct?: SystemBfdOutputReference | SystemBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemBfdSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemBfdSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemBfdSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemBfdSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemClThreatCategory {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemClThreatCategoryToTerraform(struct?: SystemClThreatCategoryOutputReference | SystemClThreatCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemClThreatCategoryToHclTerraform(struct?: SystemClThreatCategoryOutputReference | SystemClThreatCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemClThreatCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemClThreatCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemClThreatCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCliMonitorInterval {
  /**
  * one interval is 300ms (0 = disable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#interval System#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemCliMonitorIntervalToTerraform(struct?: SystemCliMonitorIntervalOutputReference | SystemCliMonitorInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemCliMonitorIntervalToHclTerraform(struct?: SystemCliMonitorIntervalOutputReference | SystemCliMonitorInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
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

export class SystemCliMonitorIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCliMonitorInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCliMonitorInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._uuid = value.uuid;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
export interface SystemCmUpdateFileNameRef {
  /**
  * bind dest name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#dest_name System#dest_name}
  */
  readonly destName?: string;
  /**
  * Specify unique Partition id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#id1 System#id1}
  */
  readonly id1?: number;
  /**
  * bind source name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#source_name System#source_name}
  */
  readonly sourceName?: string;
}

export function systemCmUpdateFileNameRefToTerraform(struct?: SystemCmUpdateFileNameRefOutputReference | SystemCmUpdateFileNameRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_name: cdktf.stringToTerraform(struct!.destName),
    id1: cdktf.numberToTerraform(struct!.id1),
    source_name: cdktf.stringToTerraform(struct!.sourceName),
  }
}


export function systemCmUpdateFileNameRefToHclTerraform(struct?: SystemCmUpdateFileNameRefOutputReference | SystemCmUpdateFileNameRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_name: {
      value: cdktf.stringToHclTerraform(struct!.destName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCmUpdateFileNameRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCmUpdateFileNameRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destName = this._destName;
    }
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._sourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceName = this._sourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCmUpdateFileNameRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destName = undefined;
      this._id1 = undefined;
      this._sourceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destName = value.destName;
      this._id1 = value.id1;
      this._sourceName = value.sourceName;
    }
  }

  // dest_name - computed: false, optional: true, required: false
  private _destName?: string; 
  public get destName() {
    return this.getStringAttribute('dest_name');
  }
  public set destName(value: string) {
    this._destName = value;
  }
  public resetDestName() {
    this._destName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNameInput() {
    return this._destName;
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }
}
export interface SystemConfigMgmtMpm {
  /**
  * Set max workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#max_workers System#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Set minimum idle workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#min_idle_workers System#min_idle_workers}
  */
  readonly minIdleWorkers?: number;
  /**
  * Set starting workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#start_workers System#start_workers}
  */
  readonly startWorkers?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemConfigMgmtMpmToTerraform(struct?: SystemConfigMgmtMpmOutputReference | SystemConfigMgmtMpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_idle_workers: cdktf.numberToTerraform(struct!.minIdleWorkers),
    start_workers: cdktf.numberToTerraform(struct!.startWorkers),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemConfigMgmtMpmToHclTerraform(struct?: SystemConfigMgmtMpmOutputReference | SystemConfigMgmtMpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_workers: {
      value: cdktf.numberToHclTerraform(struct!.minIdleWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_workers: {
      value: cdktf.numberToHclTerraform(struct!.startWorkers),
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

export class SystemConfigMgmtMpmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemConfigMgmtMpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minIdleWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleWorkers = this._minIdleWorkers;
    }
    if (this._startWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.startWorkers = this._startWorkers;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigMgmtMpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minIdleWorkers = undefined;
      this._startWorkers = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minIdleWorkers = value.minIdleWorkers;
      this._startWorkers = value.startWorkers;
      this._uuid = value.uuid;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_idle_workers - computed: false, optional: true, required: false
  private _minIdleWorkers?: number; 
  public get minIdleWorkers() {
    return this.getNumberAttribute('min_idle_workers');
  }
  public set minIdleWorkers(value: number) {
    this._minIdleWorkers = value;
  }
  public resetMinIdleWorkers() {
    this._minIdleWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleWorkersInput() {
    return this._minIdleWorkers;
  }

  // start_workers - computed: false, optional: true, required: false
  private _startWorkers?: number; 
  public get startWorkers() {
    return this.getNumberAttribute('start_workers');
  }
  public set startWorkers(value: number) {
    this._startWorkers = value;
  }
  public resetStartWorkers() {
    this._startWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWorkersInput() {
    return this._startWorkers;
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
export interface SystemConfigMgmtNotification {
  /**
  * Time interval (seconds) for kafka notification. Default is 15 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#period System#period}
  */
  readonly period?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemConfigMgmtNotificationToTerraform(struct?: SystemConfigMgmtNotificationOutputReference | SystemConfigMgmtNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemConfigMgmtNotificationToHclTerraform(struct?: SystemConfigMgmtNotificationOutputReference | SystemConfigMgmtNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
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

export class SystemConfigMgmtNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemConfigMgmtNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigMgmtNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
      this._uuid = value.uuid;
    }
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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
export interface SystemConfigMgmtPuSyncDetection {
  /**
  * 'enable': Enable pu-sync-detection feature; 'disable': Disable pu-sync-detection feature;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#action System#action}
  */
  readonly action?: string;
  /**
  * Time interval (seconds) for detection. Default is 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#interval System#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemConfigMgmtPuSyncDetectionToTerraform(struct?: SystemConfigMgmtPuSyncDetectionOutputReference | SystemConfigMgmtPuSyncDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    interval: cdktf.numberToTerraform(struct!.interval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemConfigMgmtPuSyncDetectionToHclTerraform(struct?: SystemConfigMgmtPuSyncDetectionOutputReference | SystemConfigMgmtPuSyncDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
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

export class SystemConfigMgmtPuSyncDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemConfigMgmtPuSyncDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigMgmtPuSyncDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._interval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._interval = value.interval;
      this._uuid = value.uuid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
export interface SystemConfigMgmt {
  /**
  * 'enable': Allow deletion of referenced tagged objects. Default option.; 'disable': Block deletion of referenced tagged objects;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#delete_referenced_tagged_objects System#delete_referenced_tagged_objects}
  */
  readonly deleteReferencedTaggedObjects?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * mpm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#mpm System#mpm}
  */
  readonly mpm?: SystemConfigMgmtMpm;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#notification System#notification}
  */
  readonly notification?: SystemConfigMgmtNotification;
  /**
  * pu_sync_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#pu_sync_detection System#pu_sync_detection}
  */
  readonly puSyncDetection?: SystemConfigMgmtPuSyncDetection;
}

export function systemConfigMgmtToTerraform(struct?: SystemConfigMgmtOutputReference | SystemConfigMgmt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_referenced_tagged_objects: cdktf.stringToTerraform(struct!.deleteReferencedTaggedObjects),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    mpm: systemConfigMgmtMpmToTerraform(struct!.mpm),
    notification: systemConfigMgmtNotificationToTerraform(struct!.notification),
    pu_sync_detection: systemConfigMgmtPuSyncDetectionToTerraform(struct!.puSyncDetection),
  }
}


export function systemConfigMgmtToHclTerraform(struct?: SystemConfigMgmtOutputReference | SystemConfigMgmt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_referenced_tagged_objects: {
      value: cdktf.stringToHclTerraform(struct!.deleteReferencedTaggedObjects),
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
    mpm: {
      value: systemConfigMgmtMpmToHclTerraform(struct!.mpm),
      isBlock: true,
      type: "list",
      storageClassType: "SystemConfigMgmtMpmList",
    },
    notification: {
      value: systemConfigMgmtNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "SystemConfigMgmtNotificationList",
    },
    pu_sync_detection: {
      value: systemConfigMgmtPuSyncDetectionToHclTerraform(struct!.puSyncDetection),
      isBlock: true,
      type: "list",
      storageClassType: "SystemConfigMgmtPuSyncDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemConfigMgmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemConfigMgmt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteReferencedTaggedObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteReferencedTaggedObjects = this._deleteReferencedTaggedObjects;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._mpm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mpm = this._mpm?.internalValue;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    if (this._puSyncDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.puSyncDetection = this._puSyncDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigMgmt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteReferencedTaggedObjects = undefined;
      this._uuid = undefined;
      this._mpm.internalValue = undefined;
      this._notification.internalValue = undefined;
      this._puSyncDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteReferencedTaggedObjects = value.deleteReferencedTaggedObjects;
      this._uuid = value.uuid;
      this._mpm.internalValue = value.mpm;
      this._notification.internalValue = value.notification;
      this._puSyncDetection.internalValue = value.puSyncDetection;
    }
  }

  // delete_referenced_tagged_objects - computed: false, optional: true, required: false
  private _deleteReferencedTaggedObjects?: string; 
  public get deleteReferencedTaggedObjects() {
    return this.getStringAttribute('delete_referenced_tagged_objects');
  }
  public set deleteReferencedTaggedObjects(value: string) {
    this._deleteReferencedTaggedObjects = value;
  }
  public resetDeleteReferencedTaggedObjects() {
    this._deleteReferencedTaggedObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteReferencedTaggedObjectsInput() {
    return this._deleteReferencedTaggedObjects;
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

  // mpm - computed: false, optional: true, required: false
  private _mpm = new SystemConfigMgmtMpmOutputReference(this, "mpm");
  public get mpm() {
    return this._mpm;
  }
  public putMpm(value: SystemConfigMgmtMpm) {
    this._mpm.internalValue = value;
  }
  public resetMpm() {
    this._mpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpmInput() {
    return this._mpm.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new SystemConfigMgmtNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: SystemConfigMgmtNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // pu_sync_detection - computed: false, optional: true, required: false
  private _puSyncDetection = new SystemConfigMgmtPuSyncDetectionOutputReference(this, "pu_sync_detection");
  public get puSyncDetection() {
    return this._puSyncDetection;
  }
  public putPuSyncDetection(value: SystemConfigMgmtPuSyncDetection) {
    this._puSyncDetection.internalValue = value;
  }
  public resetPuSyncDetection() {
    this._puSyncDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puSyncDetectionInput() {
    return this._puSyncDetection.internalValue;
  }
}
export interface SystemControlCpu {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemControlCpuToTerraform(struct?: SystemControlCpuOutputReference | SystemControlCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemControlCpuToHclTerraform(struct?: SystemControlCpuOutputReference | SystemControlCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemControlCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemControlCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemControlCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCore {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemCoreToTerraform(struct?: SystemCoreOutputReference | SystemCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemCoreToHclTerraform(struct?: SystemCoreOutputReference | SystemCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCosqShow {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemCosqShowToTerraform(struct?: SystemCosqShowOutputReference | SystemCosqShow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemCosqShowToHclTerraform(struct?: SystemCosqShowOutputReference | SystemCosqShow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemCosqShowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCosqShow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCosqShow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCosqStats {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemCosqStatsToTerraform(struct?: SystemCosqStatsOutputReference | SystemCosqStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemCosqStatsToHclTerraform(struct?: SystemCosqStatsOutputReference | SystemCosqStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemCosqStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCosqStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCosqStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCounterLibAccounting {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemCounterLibAccountingToTerraform(struct?: SystemCounterLibAccountingOutputReference | SystemCounterLibAccounting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemCounterLibAccountingToHclTerraform(struct?: SystemCounterLibAccountingOutputReference | SystemCounterLibAccounting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemCounterLibAccountingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCounterLibAccounting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCounterLibAccounting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCpuHyperThread {
  /**
  * Disable CPU Hyperthreading
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Enable CPU Hyperthreading
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemCpuHyperThreadToTerraform(struct?: SystemCpuHyperThreadOutputReference | SystemCpuHyperThread): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemCpuHyperThreadToHclTerraform(struct?: SystemCpuHyperThreadOutputReference | SystemCpuHyperThread): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCpuHyperThreadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuHyperThread | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuHyperThread | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface SystemCpuListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemCpuListStructToTerraform(struct?: SystemCpuListStructOutputReference | SystemCpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemCpuListStructToHclTerraform(struct?: SystemCpuListStructOutputReference | SystemCpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemCpuListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCpuLoadSharingCpuUsage {
  /**
  * CPU usage threshold (percentage) that will trigger the redistribution (default: 75)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#high System#high}
  */
  readonly high?: number;
  /**
  * CPU usage threshold (percentage) that will restore the normal packet distribution (default: 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#low System#low}
  */
  readonly low?: number;
}

export function systemCpuLoadSharingCpuUsageToTerraform(struct?: SystemCpuLoadSharingCpuUsageOutputReference | SystemCpuLoadSharingCpuUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function systemCpuLoadSharingCpuUsageToHclTerraform(struct?: SystemCpuLoadSharingCpuUsageOutputReference | SystemCpuLoadSharingCpuUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCpuLoadSharingCpuUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuLoadSharingCpuUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuLoadSharingCpuUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._high = undefined;
      this._low = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: true, required: false
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}
export interface SystemCpuLoadSharingPacketsPerSecond {
  /**
  * Minimum packets-per-second threshold (per CPU) before redistribution will take effect (Minimum packets-per-second threshold (per CPU) before redistribution will take effect (default: 100000))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#min System#min}
  */
  readonly min?: number;
}

export function systemCpuLoadSharingPacketsPerSecondToTerraform(struct?: SystemCpuLoadSharingPacketsPerSecondOutputReference | SystemCpuLoadSharingPacketsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function systemCpuLoadSharingPacketsPerSecondToHclTerraform(struct?: SystemCpuLoadSharingPacketsPerSecondOutputReference | SystemCpuLoadSharingPacketsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCpuLoadSharingPacketsPerSecondOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuLoadSharingPacketsPerSecond | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuLoadSharingPacketsPerSecond | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._min = value.min;
    }
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface SystemCpuLoadSharing {
  /**
  * Allow L7 sessions forward to home cpu
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#allow_l7_sessions System#allow_l7_sessions}
  */
  readonly allowL7Sessions?: number;
  /**
  * Disable CPU load sharing in overload situations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Disallow redistribution of new non TCP/UDP IP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#others System#others}
  */
  readonly others?: number;
  /**
  * Disallow redistribution of new TCP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#tcp System#tcp}
  */
  readonly tcp?: number;
  /**
  * Disallow redistribution of new UDP sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#udp System#udp}
  */
  readonly udp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * cpu_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#cpu_usage System#cpu_usage}
  */
  readonly cpuUsage?: SystemCpuLoadSharingCpuUsage;
  /**
  * packets_per_second block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#packets_per_second System#packets_per_second}
  */
  readonly packetsPerSecond?: SystemCpuLoadSharingPacketsPerSecond;
}

export function systemCpuLoadSharingToTerraform(struct?: SystemCpuLoadSharingOutputReference | SystemCpuLoadSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_l7_sessions: cdktf.numberToTerraform(struct!.allowL7Sessions),
    disable: cdktf.numberToTerraform(struct!.disable),
    others: cdktf.numberToTerraform(struct!.others),
    tcp: cdktf.numberToTerraform(struct!.tcp),
    udp: cdktf.numberToTerraform(struct!.udp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cpu_usage: systemCpuLoadSharingCpuUsageToTerraform(struct!.cpuUsage),
    packets_per_second: systemCpuLoadSharingPacketsPerSecondToTerraform(struct!.packetsPerSecond),
  }
}


export function systemCpuLoadSharingToHclTerraform(struct?: SystemCpuLoadSharingOutputReference | SystemCpuLoadSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_l7_sessions: {
      value: cdktf.numberToHclTerraform(struct!.allowL7Sessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    others: {
      value: cdktf.numberToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp: {
      value: cdktf.numberToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp: {
      value: cdktf.numberToHclTerraform(struct!.udp),
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
    cpu_usage: {
      value: systemCpuLoadSharingCpuUsageToHclTerraform(struct!.cpuUsage),
      isBlock: true,
      type: "list",
      storageClassType: "SystemCpuLoadSharingCpuUsageList",
    },
    packets_per_second: {
      value: systemCpuLoadSharingPacketsPerSecondToHclTerraform(struct!.packetsPerSecond),
      isBlock: true,
      type: "list",
      storageClassType: "SystemCpuLoadSharingPacketsPerSecondList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCpuLoadSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuLoadSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowL7Sessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowL7Sessions = this._allowL7Sessions;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._cpuUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsage = this._cpuUsage?.internalValue;
    }
    if (this._packetsPerSecond?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsPerSecond = this._packetsPerSecond?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuLoadSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowL7Sessions = undefined;
      this._disable = undefined;
      this._others = undefined;
      this._tcp = undefined;
      this._udp = undefined;
      this._uuid = undefined;
      this._cpuUsage.internalValue = undefined;
      this._packetsPerSecond.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowL7Sessions = value.allowL7Sessions;
      this._disable = value.disable;
      this._others = value.others;
      this._tcp = value.tcp;
      this._udp = value.udp;
      this._uuid = value.uuid;
      this._cpuUsage.internalValue = value.cpuUsage;
      this._packetsPerSecond.internalValue = value.packetsPerSecond;
    }
  }

  // allow_l7_sessions - computed: false, optional: true, required: false
  private _allowL7Sessions?: number; 
  public get allowL7Sessions() {
    return this.getNumberAttribute('allow_l7_sessions');
  }
  public set allowL7Sessions(value: number) {
    this._allowL7Sessions = value;
  }
  public resetAllowL7Sessions() {
    this._allowL7Sessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowL7SessionsInput() {
    return this._allowL7Sessions;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
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

  // cpu_usage - computed: false, optional: true, required: false
  private _cpuUsage = new SystemCpuLoadSharingCpuUsageOutputReference(this, "cpu_usage");
  public get cpuUsage() {
    return this._cpuUsage;
  }
  public putCpuUsage(value: SystemCpuLoadSharingCpuUsage) {
    this._cpuUsage.internalValue = value;
  }
  public resetCpuUsage() {
    this._cpuUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageInput() {
    return this._cpuUsage.internalValue;
  }

  // packets_per_second - computed: false, optional: true, required: false
  private _packetsPerSecond = new SystemCpuLoadSharingPacketsPerSecondOutputReference(this, "packets_per_second");
  public get packetsPerSecond() {
    return this._packetsPerSecond;
  }
  public putPacketsPerSecond(value: SystemCpuLoadSharingPacketsPerSecond) {
    this._packetsPerSecond.internalValue = value;
  }
  public resetPacketsPerSecond() {
    this._packetsPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsPerSecondInput() {
    return this._packetsPerSecond.internalValue;
  }
}
export interface SystemCpuMap {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemCpuMapToTerraform(struct?: SystemCpuMapOutputReference | SystemCpuMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemCpuMapToHclTerraform(struct?: SystemCpuMapOutputReference | SystemCpuMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemCpuMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemCpuPacketPrioSupport {
  /**
  * Disable CPU packet prioritization Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Enable CPU packet prioritization Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemCpuPacketPrioSupportToTerraform(struct?: SystemCpuPacketPrioSupportOutputReference | SystemCpuPacketPrioSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemCpuPacketPrioSupportToHclTerraform(struct?: SystemCpuPacketPrioSupportOutputReference | SystemCpuPacketPrioSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCpuPacketPrioSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCpuPacketPrioSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCpuPacketPrioSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface SystemDataCpu {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemDataCpuToTerraform(struct?: SystemDataCpuOutputReference | SystemDataCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemDataCpuToHclTerraform(struct?: SystemDataCpuOutputReference | SystemDataCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemDataCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDataCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDataCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemDelPort {
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#port_index System#port_index}
  */
  readonly portIndex?: number;
}

export function systemDelPortToTerraform(struct?: SystemDelPortOutputReference | SystemDelPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_index: cdktf.numberToTerraform(struct!.portIndex),
  }
}


export function systemDelPortToHclTerraform(struct?: SystemDelPortOutputReference | SystemDelPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_index: {
      value: cdktf.numberToHclTerraform(struct!.portIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDelPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDelPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.portIndex = this._portIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDelPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portIndex = value.portIndex;
    }
  }

  // port_index - computed: false, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }
}
export interface SystemDeleteCpuCore {
  /**
  * core index to be deleted (Specify core index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#core_index System#core_index}
  */
  readonly coreIndex?: number;
}

export function systemDeleteCpuCoreToTerraform(struct?: SystemDeleteCpuCoreOutputReference | SystemDeleteCpuCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_index: cdktf.numberToTerraform(struct!.coreIndex),
  }
}


export function systemDeleteCpuCoreToHclTerraform(struct?: SystemDeleteCpuCoreOutputReference | SystemDeleteCpuCore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_index: {
      value: cdktf.numberToHclTerraform(struct!.coreIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDeleteCpuCoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDeleteCpuCore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreIndex = this._coreIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDeleteCpuCore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreIndex = value.coreIndex;
    }
  }

  // core_index - computed: false, optional: true, required: false
  private _coreIndex?: number; 
  public get coreIndex() {
    return this.getNumberAttribute('core_index');
  }
  public set coreIndex(value: number) {
    this._coreIndex = value;
  }
  public resetCoreIndex() {
    this._coreIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreIndexInput() {
    return this._coreIndex;
  }
}
export interface SystemDnsRecursiveNameserverServerListStruct {
  /**
  * Specify IPv4 server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv4_addr System#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Specify IPv6 server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv6_addr System#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Description for this ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#v4_desc System#v4_desc}
  */
  readonly v4Desc?: string;
  /**
  * Description for this ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#v6_desc System#v6_desc}
  */
  readonly v6Desc?: string;
}

export function systemDnsRecursiveNameserverServerListStructToTerraform(struct?: SystemDnsRecursiveNameserverServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    v4_desc: cdktf.stringToTerraform(struct!.v4Desc),
    v6_desc: cdktf.stringToTerraform(struct!.v6Desc),
  }
}


export function systemDnsRecursiveNameserverServerListStructToHclTerraform(struct?: SystemDnsRecursiveNameserverServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v4_desc: {
      value: cdktf.stringToHclTerraform(struct!.v4Desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_desc: {
      value: cdktf.stringToHclTerraform(struct!.v6Desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsRecursiveNameserverServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDnsRecursiveNameserverServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._v4Desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Desc = this._v4Desc;
    }
    if (this._v6Desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Desc = this._v6Desc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsRecursiveNameserverServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._v4Desc = undefined;
      this._v6Desc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._v4Desc = value.v4Desc;
      this._v6Desc = value.v6Desc;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // v4_desc - computed: false, optional: true, required: false
  private _v4Desc?: string; 
  public get v4Desc() {
    return this.getStringAttribute('v4_desc');
  }
  public set v4Desc(value: string) {
    this._v4Desc = value;
  }
  public resetV4Desc() {
    this._v4Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4DescInput() {
    return this._v4Desc;
  }

  // v6_desc - computed: false, optional: true, required: false
  private _v6Desc?: string; 
  public get v6Desc() {
    return this.getStringAttribute('v6_desc');
  }
  public set v6Desc(value: string) {
    this._v6Desc = value;
  }
  public resetV6Desc() {
    this._v6Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DescInput() {
    return this._v6Desc;
  }
}

export class SystemDnsRecursiveNameserverServerListStructList extends cdktf.ComplexList {
  public internalValue? : SystemDnsRecursiveNameserverServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsRecursiveNameserverServerListStructOutputReference {
    return new SystemDnsRecursiveNameserverServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDnsRecursiveNameserver {
  /**
  * Use the configured name servers of shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#follow_shared System#follow_shared}
  */
  readonly followShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#server_list System#server_list}
  */
  readonly serverList?: SystemDnsRecursiveNameserverServerListStruct[] | cdktf.IResolvable;
}

export function systemDnsRecursiveNameserverToTerraform(struct?: SystemDnsRecursiveNameserverOutputReference | SystemDnsRecursiveNameserver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_shared: cdktf.numberToTerraform(struct!.followShared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    server_list: cdktf.listMapper(systemDnsRecursiveNameserverServerListStructToTerraform, true)(struct!.serverList),
  }
}


export function systemDnsRecursiveNameserverToHclTerraform(struct?: SystemDnsRecursiveNameserverOutputReference | SystemDnsRecursiveNameserver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_shared: {
      value: cdktf.numberToHclTerraform(struct!.followShared),
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
    server_list: {
      value: cdktf.listMapperHcl(systemDnsRecursiveNameserverServerListStructToHclTerraform, true)(struct!.serverList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemDnsRecursiveNameserverServerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsRecursiveNameserverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDnsRecursiveNameserver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.followShared = this._followShared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._serverList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverList = this._serverList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsRecursiveNameserver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followShared = undefined;
      this._uuid = undefined;
      this._serverList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followShared = value.followShared;
      this._uuid = value.uuid;
      this._serverList.internalValue = value.serverList;
    }
  }

  // follow_shared - computed: false, optional: true, required: false
  private _followShared?: number; 
  public get followShared() {
    return this.getNumberAttribute('follow_shared');
  }
  public set followShared(value: number) {
    this._followShared = value;
  }
  public resetFollowShared() {
    this._followShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedInput() {
    return this._followShared;
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

  // server_list - computed: false, optional: true, required: false
  private _serverList = new SystemDnsRecursiveNameserverServerListStructList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
  public putServerList(value: SystemDnsRecursiveNameserverServerListStruct[] | cdktf.IResolvable) {
    this._serverList.internalValue = value;
  }
  public resetServerList() {
    this._serverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList.internalValue;
  }
}
export interface SystemDnsSamplingEnable {
  /**
  * 'all': all; 'slb_req': No. of requests; 'slb_resp': No. of responses; 'slb_no_resp': No. of requests with no response; 'slb_req_rexmit': No. of requests retransmit; 'slb_resp_no_match': No. of requests and responses with no match; 'slb_no_resource': No. of resource failures; 'nat_req': (NAT) No. of requests; 'nat_resp': (NAT) No. of responses; 'nat_no_resp': (NAT) No. of resource failures; 'nat_req_rexmit': (NAT) No. of request retransmits; 'nat_resp_no_match': (NAT) No. of requests with no response; 'nat_no_resource': (NAT) No. of resource failures; 'nat_xid_reused': (NAT) No. of requests reusing a transaction id; 'filter_type_drop': Total Query Type Drop; 'filter_class_drop': Total Query Class Drop; 'filter_type_any_drop': Total Query ANY Type Drop; 'slb_dns_client_ssl_succ': No. of client ssl success; 'slb_dns_server_ssl_succ': No. of server ssl success; 'slb_dns_udp_conn': No. of backend udp connections; 'slb_dns_udp_conn_succ': No. of backend udp conn established; 'slb_dns_padding_to_server_removed': slb_dns_padding_to_server_removed; 'slb_dns_padding_to_client_added': slb_dns_padding_to_client_added; 'slb_dns_edns_subnet_to_server_removed': slb_dns_edns_subnet_to_server_removed; 'slb_dns_udp_retransmit': slb_dns_udp_retransmit; 'slb_dns_udp_retransmit_fail': slb_dns_udp_retransmit_fail; 'rpz_action_drop': RPZ Action Drop; 'rpz_action_pass_thru': RPZ Action Pass Through; 'rpz_action_tcp_only': RPZ Action TCP Only; 'rpz_action_nxdomain': RPZ Action NXDOMAIN; 'rpz_action_nodata': RPZ Action NODATA; 'rpz_action_local_data': RPZ Action Local Data; 'slb_drop': DNS requests drop; 'nat_slb_drop': (NAT)DNS requests drop; 'invalid_q_len_to_udp': invalid query length to conver to UDP; 'slb_dns_edns_ecs_received': Number of ecs from client received; 'slb_dns_edns_ecs_inserted': Number of ecs inserted;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemDnsSamplingEnableToTerraform(struct?: SystemDnsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemDnsSamplingEnableToHclTerraform(struct?: SystemDnsSamplingEnable | cdktf.IResolvable): any {
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

export class SystemDnsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDnsSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemDnsSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemDnsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemDnsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsSamplingEnableOutputReference {
    return new SystemDnsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDns {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * recursive_nameserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#recursive_nameserver System#recursive_nameserver}
  */
  readonly recursiveNameserver?: SystemDnsRecursiveNameserver;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemDnsSamplingEnable[] | cdktf.IResolvable;
}

export function systemDnsToTerraform(struct?: SystemDnsOutputReference | SystemDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    recursive_nameserver: systemDnsRecursiveNameserverToTerraform(struct!.recursiveNameserver),
    sampling_enable: cdktf.listMapper(systemDnsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemDnsToHclTerraform(struct?: SystemDnsOutputReference | SystemDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recursive_nameserver: {
      value: systemDnsRecursiveNameserverToHclTerraform(struct!.recursiveNameserver),
      isBlock: true,
      type: "list",
      storageClassType: "SystemDnsRecursiveNameserverList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemDnsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemDnsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._recursiveNameserver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveNameserver = this._recursiveNameserver?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._recursiveNameserver.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._recursiveNameserver.internalValue = value.recursiveNameserver;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // recursive_nameserver - computed: false, optional: true, required: false
  private _recursiveNameserver = new SystemDnsRecursiveNameserverOutputReference(this, "recursive_nameserver");
  public get recursiveNameserver() {
    return this._recursiveNameserver;
  }
  public putRecursiveNameserver(value: SystemDnsRecursiveNameserver) {
    this._recursiveNameserver.internalValue = value;
  }
  public resetRecursiveNameserver() {
    this._recursiveNameserver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveNameserverInput() {
    return this._recursiveNameserver.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemDnsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemDnsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemDnsCacheSamplingEnable {
  /**
  * 'all': all; 'total_q': Total query; 'total_r': Total server response; 'hit': Total cache hit; 'bad_q': Query not passed; 'encode_q': Query encoded; 'multiple_q': Query with multiple questions; 'oversize_q': Query exceed cache size; 'bad_r': Response not passed; 'oversize_r': Response exceed cache size; 'encode_r': Response encoded; 'multiple_r': Response with multiple questions; 'answer_r': Response with multiple answers; 'ttl_r': Response with short TTL; 'ageout': Total aged out; 'bad_answer': Bad Answer; 'ageout_weight': Total aged for lower weight; 'total_log': Total stats log sent; 'total_alloc': Total allocated; 'total_freed': Total freed; 'current_allocate': Current allocate; 'current_data_allocate': Current data allocate; 'resolver_queue_full': Resolver task queue full; 'truncated_r': Response with Truncation bit set; 'qps': Cache Queries-per-second; 'hit_rate_per_sec': Cache hit rate per second;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemDnsCacheSamplingEnableToTerraform(struct?: SystemDnsCacheSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemDnsCacheSamplingEnableToHclTerraform(struct?: SystemDnsCacheSamplingEnable | cdktf.IResolvable): any {
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

export class SystemDnsCacheSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDnsCacheSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemDnsCacheSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemDnsCacheSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemDnsCacheSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsCacheSamplingEnableOutputReference {
    return new SystemDnsCacheSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDnsCache {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemDnsCacheSamplingEnable[] | cdktf.IResolvable;
}

export function systemDnsCacheToTerraform(struct?: SystemDnsCacheOutputReference | SystemDnsCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemDnsCacheSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemDnsCacheToHclTerraform(struct?: SystemDnsCacheOutputReference | SystemDnsCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemDnsCacheSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemDnsCacheSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDnsCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemDnsCacheSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemDnsCacheSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemDomainListInfo {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemDomainListInfoToTerraform(struct?: SystemDomainListInfoOutputReference | SystemDomainListInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemDomainListInfoToHclTerraform(struct?: SystemDomainListInfoOutputReference | SystemDomainListInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemDomainListInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDomainListInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDomainListInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemDomainListSettings {
  /**
  * Configure max concurrent AXFR task (Default 6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#concurrent_task System#concurrent_task}
  */
  readonly concurrentTask?: number;
  /**
  * '16': Allow 16 domain-list per group (Default); '32': Allow 32 domain-list per group;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#domain_list_per_group System#domain_list_per_group}
  */
  readonly domainListPerGroup?: string;
  /**
  * '1-second': Set interval to 1 second; '5-second': Set interval to 5 seconds; '10-second': Set interval to 10 seconds (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#polling_interval System#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemDomainListSettingsToTerraform(struct?: SystemDomainListSettingsOutputReference | SystemDomainListSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_task: cdktf.numberToTerraform(struct!.concurrentTask),
    domain_list_per_group: cdktf.stringToTerraform(struct!.domainListPerGroup),
    polling_interval: cdktf.stringToTerraform(struct!.pollingInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemDomainListSettingsToHclTerraform(struct?: SystemDomainListSettingsOutputReference | SystemDomainListSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_task: {
      value: cdktf.numberToHclTerraform(struct!.concurrentTask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_list_per_group: {
      value: cdktf.stringToHclTerraform(struct!.domainListPerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polling_interval: {
      value: cdktf.stringToHclTerraform(struct!.pollingInterval),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDomainListSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDomainListSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentTask !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentTask = this._concurrentTask;
    }
    if (this._domainListPerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainListPerGroup = this._domainListPerGroup;
    }
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDomainListSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrentTask = undefined;
      this._domainListPerGroup = undefined;
      this._pollingInterval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrentTask = value.concurrentTask;
      this._domainListPerGroup = value.domainListPerGroup;
      this._pollingInterval = value.pollingInterval;
      this._uuid = value.uuid;
    }
  }

  // concurrent_task - computed: false, optional: true, required: false
  private _concurrentTask?: number; 
  public get concurrentTask() {
    return this.getNumberAttribute('concurrent_task');
  }
  public set concurrentTask(value: number) {
    this._concurrentTask = value;
  }
  public resetConcurrentTask() {
    this._concurrentTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentTaskInput() {
    return this._concurrentTask;
  }

  // domain_list_per_group - computed: false, optional: true, required: false
  private _domainListPerGroup?: string; 
  public get domainListPerGroup() {
    return this.getStringAttribute('domain_list_per_group');
  }
  public set domainListPerGroup(value: string) {
    this._domainListPerGroup = value;
  }
  public resetDomainListPerGroup() {
    this._domainListPerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListPerGroupInput() {
    return this._domainListPerGroup;
  }

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
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
export interface SystemDpdkStatsSamplingEnable {
  /**
  * 'all': all; 'pkt-drop': Total packet drop; 'pkt-lnk-down-drop': Total packets link down drop; 'err-pkt-drop': Total error packet drop; 'rx-err': Total RX packet error; 'tx-err': Total TX packet error; 'tx-drop': Total TX packet drop; 'rx-len-err': Total RX packet length error; 'rx-over-err': Total RX packet over error; 'rx-crc-err': Total RX packet CRC error; 'rx-frame-err': Total RX packet frame error; 'rx-no-buff-err': Total RX packet no buffer error; 'rx-miss-err': Total RX packet miss error; 'tx-abort-err': Total TX packet abort error; 'tx-carrier-err': Total TX packert carrier error; 'tx-fifo-err': Total TX packet fifo error; 'tx-hbeat-err': Total TX packet HBEAT error; 'tx-windows-err': Total TX windows error; 'rx-long-len-err': Total RX packet long length error; 'rx-short-len-err': Total RX packet short length error; 'rx-align-err': Total RX packet align error; 'rx-csum-offload-err': Total Rx packet check-sum offload error; 'io-rx-que-drop': Total IO core Rx queue drop; 'io-tx-que-drop': Total IO core TX queue drop; 'io-ring-drop': Total IO core ring drop; 'w-tx-que-drop': Total worker core queue drop; 'w-link-down-drop': Total worker core link down drop; 'w-ring-drop': Total worker core ring drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemDpdkStatsSamplingEnableToTerraform(struct?: SystemDpdkStatsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemDpdkStatsSamplingEnableToHclTerraform(struct?: SystemDpdkStatsSamplingEnable | cdktf.IResolvable): any {
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

export class SystemDpdkStatsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDpdkStatsSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemDpdkStatsSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemDpdkStatsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemDpdkStatsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemDpdkStatsSamplingEnableOutputReference {
    return new SystemDpdkStatsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDpdkStats {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemDpdkStatsSamplingEnable[] | cdktf.IResolvable;
}

export function systemDpdkStatsToTerraform(struct?: SystemDpdkStatsOutputReference | SystemDpdkStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemDpdkStatsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemDpdkStatsToHclTerraform(struct?: SystemDpdkStatsOutputReference | SystemDpdkStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemDpdkStatsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemDpdkStatsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDpdkStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDpdkStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDpdkStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemDpdkStatsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemDpdkStatsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemEnableDiskEncryption {
  /**
  * 'aes': cipher aes; 'serpent': cipher serpent; 'twofish': cipher twofish;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#cipher System#cipher}
  */
  readonly cipher?: string;
  /**
  * Enter phassphrase in plain text format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#passphrase System#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Enter phassphrase in base64 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#passphrase_base64 System#passphrase_base64}
  */
  readonly passphraseBase64?: string;
}

export function systemEnableDiskEncryptionToTerraform(struct?: SystemEnableDiskEncryptionOutputReference | SystemEnableDiskEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    passphrase_base64: cdktf.stringToTerraform(struct!.passphraseBase64),
  }
}


export function systemEnableDiskEncryptionToHclTerraform(struct?: SystemEnableDiskEncryptionOutputReference | SystemEnableDiskEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: cdktf.stringToHclTerraform(struct!.cipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase_base64: {
      value: cdktf.stringToHclTerraform(struct!.passphraseBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemEnableDiskEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemEnableDiskEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._passphraseBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphraseBase64 = this._passphraseBase64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemEnableDiskEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipher = undefined;
      this._passphrase = undefined;
      this._passphraseBase64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipher = value.cipher;
      this._passphrase = value.passphrase;
      this._passphraseBase64 = value.passphraseBase64;
    }
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // passphrase_base64 - computed: false, optional: true, required: false
  private _passphraseBase64?: string; 
  public get passphraseBase64() {
    return this.getStringAttribute('passphrase_base64');
  }
  public set passphraseBase64(value: string) {
    this._passphraseBase64 = value;
  }
  public resetPassphraseBase64() {
    this._passphraseBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseBase64Input() {
    return this._passphraseBase64;
  }
}
export interface SystemEnablePassword {
  /**
  * enable-password will follow password policy complexity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#follow_password_policy System#follow_password_policy}
  */
  readonly followPasswordPolicy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemEnablePasswordToTerraform(struct?: SystemEnablePasswordOutputReference | SystemEnablePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_password_policy: cdktf.numberToTerraform(struct!.followPasswordPolicy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemEnablePasswordToHclTerraform(struct?: SystemEnablePasswordOutputReference | SystemEnablePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_password_policy: {
      value: cdktf.numberToHclTerraform(struct!.followPasswordPolicy),
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

export class SystemEnablePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemEnablePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followPasswordPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.followPasswordPolicy = this._followPasswordPolicy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemEnablePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followPasswordPolicy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followPasswordPolicy = value.followPasswordPolicy;
      this._uuid = value.uuid;
    }
  }

  // follow_password_policy - computed: false, optional: true, required: false
  private _followPasswordPolicy?: number; 
  public get followPasswordPolicy() {
    return this.getNumberAttribute('follow_password_policy');
  }
  public set followPasswordPolicy(value: number) {
    this._followPasswordPolicy = value;
  }
  public resetFollowPasswordPolicy() {
    this._followPasswordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followPasswordPolicyInput() {
    return this._followPasswordPolicy;
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
export interface SystemEnvironment {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemEnvironmentToTerraform(struct?: SystemEnvironmentOutputReference | SystemEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemEnvironmentToHclTerraform(struct?: SystemEnvironmentOutputReference | SystemEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemExtOnlyLogging {
  /**
  * enable external only logging for packet driven DDOS logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemExtOnlyLoggingToTerraform(struct?: SystemExtOnlyLoggingOutputReference | SystemExtOnlyLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemExtOnlyLoggingToHclTerraform(struct?: SystemExtOnlyLoggingOutputReference | SystemExtOnlyLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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

export class SystemExtOnlyLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemExtOnlyLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemExtOnlyLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemForcedGroupSpeedListStruct {
  /**
  * Set speed for interface ethernet  1 ~  4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#eth01_to_04 System#eth01_to_04}
  */
  readonly eth01To04: number;
  /**
  * Set speed for interface ethernet  5 ~  8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#eth05_to_08 System#eth05_to_08}
  */
  readonly eth05To08: number;
  /**
  * Set speed for interface ethernet  9 ~ 12
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#eth09_to_12 System#eth09_to_12}
  */
  readonly eth09To12: number;
  /**
  * Set speed for interface ethernet 13 ~ 16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#eth13_to_16 System#eth13_to_16}
  */
  readonly eth13To16: number;
  /**
  * Set speed for interface ethernet 17 ~ 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#eth17_to_20 System#eth17_to_20}
  */
  readonly eth17To20: number;
  /**
  * Set speed for interface ethernet 21 ~ 24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#eth21_to_24 System#eth21_to_24}
  */
  readonly eth21To24: number;
  /**
  * '1G': Speed 1G; '10G': Speed 10G (default); '25G': Speed 25G;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#speed System#speed}
  */
  readonly speed?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemForcedGroupSpeedListStructToTerraform(struct?: SystemForcedGroupSpeedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth01_to_04: cdktf.numberToTerraform(struct!.eth01To04),
    eth05_to_08: cdktf.numberToTerraform(struct!.eth05To08),
    eth09_to_12: cdktf.numberToTerraform(struct!.eth09To12),
    eth13_to_16: cdktf.numberToTerraform(struct!.eth13To16),
    eth17_to_20: cdktf.numberToTerraform(struct!.eth17To20),
    eth21_to_24: cdktf.numberToTerraform(struct!.eth21To24),
    speed: cdktf.stringToTerraform(struct!.speed),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemForcedGroupSpeedListStructToHclTerraform(struct?: SystemForcedGroupSpeedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth01_to_04: {
      value: cdktf.numberToHclTerraform(struct!.eth01To04),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth05_to_08: {
      value: cdktf.numberToHclTerraform(struct!.eth05To08),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth09_to_12: {
      value: cdktf.numberToHclTerraform(struct!.eth09To12),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth13_to_16: {
      value: cdktf.numberToHclTerraform(struct!.eth13To16),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth17_to_20: {
      value: cdktf.numberToHclTerraform(struct!.eth17To20),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eth21_to_24: {
      value: cdktf.numberToHclTerraform(struct!.eth21To24),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemForcedGroupSpeedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemForcedGroupSpeedListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eth01To04 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth01To04 = this._eth01To04;
    }
    if (this._eth05To08 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth05To08 = this._eth05To08;
    }
    if (this._eth09To12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth09To12 = this._eth09To12;
    }
    if (this._eth13To16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth13To16 = this._eth13To16;
    }
    if (this._eth17To20 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth17To20 = this._eth17To20;
    }
    if (this._eth21To24 !== undefined) {
      hasAnyValues = true;
      internalValueResult.eth21To24 = this._eth21To24;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemForcedGroupSpeedListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eth01To04 = undefined;
      this._eth05To08 = undefined;
      this._eth09To12 = undefined;
      this._eth13To16 = undefined;
      this._eth17To20 = undefined;
      this._eth21To24 = undefined;
      this._speed = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eth01To04 = value.eth01To04;
      this._eth05To08 = value.eth05To08;
      this._eth09To12 = value.eth09To12;
      this._eth13To16 = value.eth13To16;
      this._eth17To20 = value.eth17To20;
      this._eth21To24 = value.eth21To24;
      this._speed = value.speed;
      this._uuid = value.uuid;
    }
  }

  // eth01_to_04 - computed: false, optional: false, required: true
  private _eth01To04?: number; 
  public get eth01To04() {
    return this.getNumberAttribute('eth01_to_04');
  }
  public set eth01To04(value: number) {
    this._eth01To04 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth01To04Input() {
    return this._eth01To04;
  }

  // eth05_to_08 - computed: false, optional: false, required: true
  private _eth05To08?: number; 
  public get eth05To08() {
    return this.getNumberAttribute('eth05_to_08');
  }
  public set eth05To08(value: number) {
    this._eth05To08 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth05To08Input() {
    return this._eth05To08;
  }

  // eth09_to_12 - computed: false, optional: false, required: true
  private _eth09To12?: number; 
  public get eth09To12() {
    return this.getNumberAttribute('eth09_to_12');
  }
  public set eth09To12(value: number) {
    this._eth09To12 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth09To12Input() {
    return this._eth09To12;
  }

  // eth13_to_16 - computed: false, optional: false, required: true
  private _eth13To16?: number; 
  public get eth13To16() {
    return this.getNumberAttribute('eth13_to_16');
  }
  public set eth13To16(value: number) {
    this._eth13To16 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth13To16Input() {
    return this._eth13To16;
  }

  // eth17_to_20 - computed: false, optional: false, required: true
  private _eth17To20?: number; 
  public get eth17To20() {
    return this.getNumberAttribute('eth17_to_20');
  }
  public set eth17To20(value: number) {
    this._eth17To20 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth17To20Input() {
    return this._eth17To20;
  }

  // eth21_to_24 - computed: false, optional: false, required: true
  private _eth21To24?: number; 
  public get eth21To24() {
    return this.getNumberAttribute('eth21_to_24');
  }
  public set eth21To24(value: number) {
    this._eth21To24 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eth21To24Input() {
    return this._eth21To24;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
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

export class SystemForcedGroupSpeedListStructList extends cdktf.ComplexList {
  public internalValue? : SystemForcedGroupSpeedListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemForcedGroupSpeedListStructOutputReference {
    return new SystemForcedGroupSpeedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemFpgaCoreCrc {
  /**
  * Disable FPGA Core CRC error monitoring and act on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#monitor_disable System#monitor_disable}
  */
  readonly monitorDisable?: number;
  /**
  * Enable system reboot if system encounters FPGA Core CRC error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#reboot_enable System#reboot_enable}
  */
  readonly rebootEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemFpgaCoreCrcToTerraform(struct?: SystemFpgaCoreCrcOutputReference | SystemFpgaCoreCrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_disable: cdktf.numberToTerraform(struct!.monitorDisable),
    reboot_enable: cdktf.numberToTerraform(struct!.rebootEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemFpgaCoreCrcToHclTerraform(struct?: SystemFpgaCoreCrcOutputReference | SystemFpgaCoreCrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_disable: {
      value: cdktf.numberToHclTerraform(struct!.monitorDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reboot_enable: {
      value: cdktf.numberToHclTerraform(struct!.rebootEnable),
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

export class SystemFpgaCoreCrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemFpgaCoreCrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisable = this._monitorDisable;
    }
    if (this._rebootEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootEnable = this._rebootEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemFpgaCoreCrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitorDisable = undefined;
      this._rebootEnable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitorDisable = value.monitorDisable;
      this._rebootEnable = value.rebootEnable;
      this._uuid = value.uuid;
    }
  }

  // monitor_disable - computed: false, optional: true, required: false
  private _monitorDisable?: number; 
  public get monitorDisable() {
    return this.getNumberAttribute('monitor_disable');
  }
  public set monitorDisable(value: number) {
    this._monitorDisable = value;
  }
  public resetMonitorDisable() {
    this._monitorDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisableInput() {
    return this._monitorDisable;
  }

  // reboot_enable - computed: false, optional: true, required: false
  private _rebootEnable?: number; 
  public get rebootEnable() {
    return this.getNumberAttribute('reboot_enable');
  }
  public set rebootEnable(value: number) {
    this._rebootEnable = value;
  }
  public resetRebootEnable() {
    this._rebootEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootEnableInput() {
    return this._rebootEnable;
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
export interface SystemFpgaDropSamplingEnable {
  /**
  * 'all': all; 'mrx-drop': Total MRX Drop; 'hrx-drop': Total HRX Drop; 'siz-drop': Total Size Drop; 'fcs-drop': Total FCS Drop; 'land-drop': Total LAND Attack Drop; 'empty-frag-drop': Total Empty frag Drop; 'mic-frag-drop': Total Micro frag Drop; 'ipv4-opt-drop': Total IPv4 opt Drop; 'ipv4-frag': Total IP frag Drop; 'bad-ip-hdr-len': Total Bad IP hdr len Drop; 'bad-ip-flags-drop': Total Bad IP Flags Drop; 'bad-ip-ttl-drop': Total Bad IP TTL Drop; 'no-ip-payload-drop': Total No IP Payload Drop; 'oversize-ip-payload': Total Oversize IP PL Drop; 'bad-ip-payload-len': Total Bad IP PL len Drop; 'bad-ip-frag-offset': Total Bad IP frag off Drop; 'bad-ip-chksum-drop': Total Bad IP csum Drop; 'icmp-pod-drop': Total ICMP POD Drop; 'tcp-bad-urg-offet': Total TCP bad urg off Drop; 'tcp-short-hdr': Total TCP short hdr Drop; 'tcp-bad-ip-len': Total TCP Bad IP Len Drop; 'tcp-null-flags': Total TCP null flags Drop; 'tcp-null-scan': Total TCP null scan Drop; 'tcp-fin-sin': Total TCP SYN&FIN Drop; 'tcp-xmas-flags': Total TCP XMAS FLAGS Drop; 'tcp-xmas-scan': Total TCP XMAS scan Drop; 'tcp-syn-frag': Total TCP SYN frag Drop; 'tcp-frag-hdr': Total TCP frag header Drop; 'tcp-bad-chksum': Total TCP bad csum Drop; 'udp-short-hdr': Total UDP short hdr Drop; 'udp-bad-ip-len': Total UDP bad leng Drop; 'udp-kb-frags': Total UDP KB frag Drop; 'udp-port-lb': Total UDP port LB Drop; 'udp-bad-chksum': Total UDP bad csum Drop; 'runt-ip-hdr': Total Runt IP hdr Drop; 'runt-tcpudp-hdr': Total Runt TCPUDP hdr Drop; 'tun-mismatch': Total Tun mismatch Drop; 'qdr-drop': Total QDR Drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemFpgaDropSamplingEnableToTerraform(struct?: SystemFpgaDropSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemFpgaDropSamplingEnableToHclTerraform(struct?: SystemFpgaDropSamplingEnable | cdktf.IResolvable): any {
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

export class SystemFpgaDropSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemFpgaDropSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemFpgaDropSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemFpgaDropSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemFpgaDropSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemFpgaDropSamplingEnableOutputReference {
    return new SystemFpgaDropSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemFpgaDrop {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemFpgaDropSamplingEnable[] | cdktf.IResolvable;
}

export function systemFpgaDropToTerraform(struct?: SystemFpgaDropOutputReference | SystemFpgaDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemFpgaDropSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemFpgaDropToHclTerraform(struct?: SystemFpgaDropOutputReference | SystemFpgaDrop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemFpgaDropSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemFpgaDropSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemFpgaDropOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemFpgaDrop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemFpgaDrop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemFpgaDropSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemFpgaDropSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemFw {
  /**
  * Number of flows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#application_flow System#application_flow}
  */
  readonly applicationFlow?: number;
  /**
  * Enable application memory pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#application_mempool System#application_mempool}
  */
  readonly applicationMempool?: number;
  /**
  * Enable basic dpi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#basic_dpi_enable System#basic_dpi_enable}
  */
  readonly basicDpiEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemFwToTerraform(struct?: SystemFwOutputReference | SystemFw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_flow: cdktf.numberToTerraform(struct!.applicationFlow),
    application_mempool: cdktf.numberToTerraform(struct!.applicationMempool),
    basic_dpi_enable: cdktf.numberToTerraform(struct!.basicDpiEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemFwToHclTerraform(struct?: SystemFwOutputReference | SystemFw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_flow: {
      value: cdktf.numberToHclTerraform(struct!.applicationFlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    application_mempool: {
      value: cdktf.numberToHclTerraform(struct!.applicationMempool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    basic_dpi_enable: {
      value: cdktf.numberToHclTerraform(struct!.basicDpiEnable),
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

export class SystemFwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemFw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFlow = this._applicationFlow;
    }
    if (this._applicationMempool !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationMempool = this._applicationMempool;
    }
    if (this._basicDpiEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicDpiEnable = this._basicDpiEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemFw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationFlow = undefined;
      this._applicationMempool = undefined;
      this._basicDpiEnable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationFlow = value.applicationFlow;
      this._applicationMempool = value.applicationMempool;
      this._basicDpiEnable = value.basicDpiEnable;
      this._uuid = value.uuid;
    }
  }

  // application_flow - computed: false, optional: true, required: false
  private _applicationFlow?: number; 
  public get applicationFlow() {
    return this.getNumberAttribute('application_flow');
  }
  public set applicationFlow(value: number) {
    this._applicationFlow = value;
  }
  public resetApplicationFlow() {
    this._applicationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFlowInput() {
    return this._applicationFlow;
  }

  // application_mempool - computed: false, optional: true, required: false
  private _applicationMempool?: number; 
  public get applicationMempool() {
    return this.getNumberAttribute('application_mempool');
  }
  public set applicationMempool(value: number) {
    this._applicationMempool = value;
  }
  public resetApplicationMempool() {
    this._applicationMempool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMempoolInput() {
    return this._applicationMempool;
  }

  // basic_dpi_enable - computed: false, optional: true, required: false
  private _basicDpiEnable?: number; 
  public get basicDpiEnable() {
    return this.getNumberAttribute('basic_dpi_enable');
  }
  public set basicDpiEnable(value: number) {
    this._basicDpiEnable = value;
  }
  public resetBasicDpiEnable() {
    this._basicDpiEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicDpiEnableInput() {
    return this._basicDpiEnable;
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
export interface SystemGeoLocationEntryListGeoLocnMultipleAddresses {
  /**
  * Specify IP information (Specify IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#first_ip_address System#first_ip_address}
  */
  readonly firstIpAddress?: string;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#first_ipv6_address System#first_ipv6_address}
  */
  readonly firstIpv6Address?: string;
  /**
  * Specify IPv4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geol_ipv4_mask System#geol_ipv4_mask}
  */
  readonly geolIpv4Mask?: string;
  /**
  * Specify IPv6 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geol_ipv6_mask System#geol_ipv6_mask}
  */
  readonly geolIpv6Mask?: number;
  /**
  * Specify IP address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip_addr2 System#ip_addr2}
  */
  readonly ipAddr2?: string;
  /**
  * Specify IPv6 address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv6_addr2 System#ipv6_addr2}
  */
  readonly ipv6Addr2?: string;
}

export function systemGeoLocationEntryListGeoLocnMultipleAddressesToTerraform(struct?: SystemGeoLocationEntryListGeoLocnMultipleAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_ip_address: cdktf.stringToTerraform(struct!.firstIpAddress),
    first_ipv6_address: cdktf.stringToTerraform(struct!.firstIpv6Address),
    geol_ipv4_mask: cdktf.stringToTerraform(struct!.geolIpv4Mask),
    geol_ipv6_mask: cdktf.numberToTerraform(struct!.geolIpv6Mask),
    ip_addr2: cdktf.stringToTerraform(struct!.ipAddr2),
    ipv6_addr2: cdktf.stringToTerraform(struct!.ipv6Addr2),
  }
}


export function systemGeoLocationEntryListGeoLocnMultipleAddressesToHclTerraform(struct?: SystemGeoLocationEntryListGeoLocnMultipleAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.firstIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.firstIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geol_ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.geolIpv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geol_ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.geolIpv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_addr2: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr2: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeoLocationEntryListGeoLocnMultipleAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeoLocationEntryListGeoLocnMultipleAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIpAddress = this._firstIpAddress;
    }
    if (this._firstIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIpv6Address = this._firstIpv6Address;
    }
    if (this._geolIpv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolIpv4Mask = this._geolIpv4Mask;
    }
    if (this._geolIpv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolIpv6Mask = this._geolIpv6Mask;
    }
    if (this._ipAddr2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr2 = this._ipAddr2;
    }
    if (this._ipv6Addr2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr2 = this._ipv6Addr2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoLocationEntryListGeoLocnMultipleAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstIpAddress = undefined;
      this._firstIpv6Address = undefined;
      this._geolIpv4Mask = undefined;
      this._geolIpv6Mask = undefined;
      this._ipAddr2 = undefined;
      this._ipv6Addr2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstIpAddress = value.firstIpAddress;
      this._firstIpv6Address = value.firstIpv6Address;
      this._geolIpv4Mask = value.geolIpv4Mask;
      this._geolIpv6Mask = value.geolIpv6Mask;
      this._ipAddr2 = value.ipAddr2;
      this._ipv6Addr2 = value.ipv6Addr2;
    }
  }

  // first_ip_address - computed: false, optional: true, required: false
  private _firstIpAddress?: string; 
  public get firstIpAddress() {
    return this.getStringAttribute('first_ip_address');
  }
  public set firstIpAddress(value: string) {
    this._firstIpAddress = value;
  }
  public resetFirstIpAddress() {
    this._firstIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpAddressInput() {
    return this._firstIpAddress;
  }

  // first_ipv6_address - computed: false, optional: true, required: false
  private _firstIpv6Address?: string; 
  public get firstIpv6Address() {
    return this.getStringAttribute('first_ipv6_address');
  }
  public set firstIpv6Address(value: string) {
    this._firstIpv6Address = value;
  }
  public resetFirstIpv6Address() {
    this._firstIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpv6AddressInput() {
    return this._firstIpv6Address;
  }

  // geol_ipv4_mask - computed: false, optional: true, required: false
  private _geolIpv4Mask?: string; 
  public get geolIpv4Mask() {
    return this.getStringAttribute('geol_ipv4_mask');
  }
  public set geolIpv4Mask(value: string) {
    this._geolIpv4Mask = value;
  }
  public resetGeolIpv4Mask() {
    this._geolIpv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolIpv4MaskInput() {
    return this._geolIpv4Mask;
  }

  // geol_ipv6_mask - computed: false, optional: true, required: false
  private _geolIpv6Mask?: number; 
  public get geolIpv6Mask() {
    return this.getNumberAttribute('geol_ipv6_mask');
  }
  public set geolIpv6Mask(value: number) {
    this._geolIpv6Mask = value;
  }
  public resetGeolIpv6Mask() {
    this._geolIpv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolIpv6MaskInput() {
    return this._geolIpv6Mask;
  }

  // ip_addr2 - computed: false, optional: true, required: false
  private _ipAddr2?: string; 
  public get ipAddr2() {
    return this.getStringAttribute('ip_addr2');
  }
  public set ipAddr2(value: string) {
    this._ipAddr2 = value;
  }
  public resetIpAddr2() {
    this._ipAddr2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddr2Input() {
    return this._ipAddr2;
  }

  // ipv6_addr2 - computed: false, optional: true, required: false
  private _ipv6Addr2?: string; 
  public get ipv6Addr2() {
    return this.getStringAttribute('ipv6_addr2');
  }
  public set ipv6Addr2(value: string) {
    this._ipv6Addr2 = value;
  }
  public resetIpv6Addr2() {
    this._ipv6Addr2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Addr2Input() {
    return this._ipv6Addr2;
  }
}

export class SystemGeoLocationEntryListGeoLocnMultipleAddressesList extends cdktf.ComplexList {
  public internalValue? : SystemGeoLocationEntryListGeoLocnMultipleAddresses[] | cdktf.IResolvable

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
  public get(index: number): SystemGeoLocationEntryListGeoLocnMultipleAddressesOutputReference {
    return new SystemGeoLocationEntryListGeoLocnMultipleAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeoLocationEntryListStruct {
  /**
  * Specify geo-location name, section range is (1-15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_locn_obj_name System#geo_locn_obj_name}
  */
  readonly geoLocnObjName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#user_tag System#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * geo_locn_multiple_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_locn_multiple_addresses System#geo_locn_multiple_addresses}
  */
  readonly geoLocnMultipleAddresses?: SystemGeoLocationEntryListGeoLocnMultipleAddresses[] | cdktf.IResolvable;
}

export function systemGeoLocationEntryListStructToTerraform(struct?: SystemGeoLocationEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_locn_obj_name: cdktf.stringToTerraform(struct!.geoLocnObjName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    geo_locn_multiple_addresses: cdktf.listMapper(systemGeoLocationEntryListGeoLocnMultipleAddressesToTerraform, true)(struct!.geoLocnMultipleAddresses),
  }
}


export function systemGeoLocationEntryListStructToHclTerraform(struct?: SystemGeoLocationEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_locn_obj_name: {
      value: cdktf.stringToHclTerraform(struct!.geoLocnObjName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    geo_locn_multiple_addresses: {
      value: cdktf.listMapperHcl(systemGeoLocationEntryListGeoLocnMultipleAddressesToHclTerraform, true)(struct!.geoLocnMultipleAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeoLocationEntryListGeoLocnMultipleAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeoLocationEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeoLocationEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocnObjName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocnObjName = this._geoLocnObjName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._geoLocnMultipleAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocnMultipleAddresses = this._geoLocnMultipleAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoLocationEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocnObjName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._geoLocnMultipleAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocnObjName = value.geoLocnObjName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._geoLocnMultipleAddresses.internalValue = value.geoLocnMultipleAddresses;
    }
  }

  // geo_locn_obj_name - computed: false, optional: false, required: true
  private _geoLocnObjName?: string; 
  public get geoLocnObjName() {
    return this.getStringAttribute('geo_locn_obj_name');
  }
  public set geoLocnObjName(value: string) {
    this._geoLocnObjName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocnObjNameInput() {
    return this._geoLocnObjName;
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

  // geo_locn_multiple_addresses - computed: false, optional: true, required: false
  private _geoLocnMultipleAddresses = new SystemGeoLocationEntryListGeoLocnMultipleAddressesList(this, "geo_locn_multiple_addresses", false);
  public get geoLocnMultipleAddresses() {
    return this._geoLocnMultipleAddresses;
  }
  public putGeoLocnMultipleAddresses(value: SystemGeoLocationEntryListGeoLocnMultipleAddresses[] | cdktf.IResolvable) {
    this._geoLocnMultipleAddresses.internalValue = value;
  }
  public resetGeoLocnMultipleAddresses() {
    this._geoLocnMultipleAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocnMultipleAddressesInput() {
    return this._geoLocnMultipleAddresses.internalValue;
  }
}

export class SystemGeoLocationEntryListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGeoLocationEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGeoLocationEntryListStructOutputReference {
    return new SystemGeoLocationEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeoLocationGeolocLoadFileListStruct {
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_load_file_include_ipv6 System#geo_location_load_file_include_ipv6}
  */
  readonly geoLocationLoadFileIncludeIpv6?: number;
  /**
  * Specify file to be loaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_load_filename System#geo_location_load_filename}
  */
  readonly geoLocationLoadFilename?: string;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_load_temp_include_ipv6 System#geo_location_load_temp_include_ipv6}
  */
  readonly geoLocationLoadTempIncludeIpv6?: number;
  /**
  * Use CSV template to load this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#template_name System#template_name}
  */
  readonly templateName?: string;
}

export function systemGeoLocationGeolocLoadFileListStructToTerraform(struct?: SystemGeoLocationGeolocLoadFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location_load_file_include_ipv6: cdktf.numberToTerraform(struct!.geoLocationLoadFileIncludeIpv6),
    geo_location_load_filename: cdktf.stringToTerraform(struct!.geoLocationLoadFilename),
    geo_location_load_temp_include_ipv6: cdktf.numberToTerraform(struct!.geoLocationLoadTempIncludeIpv6),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function systemGeoLocationGeolocLoadFileListStructToHclTerraform(struct?: SystemGeoLocationGeolocLoadFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location_load_file_include_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationLoadFileIncludeIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_load_filename: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationLoadFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location_load_temp_include_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationLoadTempIncludeIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeoLocationGeolocLoadFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeoLocationGeolocLoadFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocationLoadFileIncludeIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLoadFileIncludeIpv6 = this._geoLocationLoadFileIncludeIpv6;
    }
    if (this._geoLocationLoadFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLoadFilename = this._geoLocationLoadFilename;
    }
    if (this._geoLocationLoadTempIncludeIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLoadTempIncludeIpv6 = this._geoLocationLoadTempIncludeIpv6;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoLocationGeolocLoadFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocationLoadFileIncludeIpv6 = undefined;
      this._geoLocationLoadFilename = undefined;
      this._geoLocationLoadTempIncludeIpv6 = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocationLoadFileIncludeIpv6 = value.geoLocationLoadFileIncludeIpv6;
      this._geoLocationLoadFilename = value.geoLocationLoadFilename;
      this._geoLocationLoadTempIncludeIpv6 = value.geoLocationLoadTempIncludeIpv6;
      this._templateName = value.templateName;
    }
  }

  // geo_location_load_file_include_ipv6 - computed: false, optional: true, required: false
  private _geoLocationLoadFileIncludeIpv6?: number; 
  public get geoLocationLoadFileIncludeIpv6() {
    return this.getNumberAttribute('geo_location_load_file_include_ipv6');
  }
  public set geoLocationLoadFileIncludeIpv6(value: number) {
    this._geoLocationLoadFileIncludeIpv6 = value;
  }
  public resetGeoLocationLoadFileIncludeIpv6() {
    this._geoLocationLoadFileIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLoadFileIncludeIpv6Input() {
    return this._geoLocationLoadFileIncludeIpv6;
  }

  // geo_location_load_filename - computed: false, optional: true, required: false
  private _geoLocationLoadFilename?: string; 
  public get geoLocationLoadFilename() {
    return this.getStringAttribute('geo_location_load_filename');
  }
  public set geoLocationLoadFilename(value: string) {
    this._geoLocationLoadFilename = value;
  }
  public resetGeoLocationLoadFilename() {
    this._geoLocationLoadFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLoadFilenameInput() {
    return this._geoLocationLoadFilename;
  }

  // geo_location_load_temp_include_ipv6 - computed: false, optional: true, required: false
  private _geoLocationLoadTempIncludeIpv6?: number; 
  public get geoLocationLoadTempIncludeIpv6() {
    return this.getNumberAttribute('geo_location_load_temp_include_ipv6');
  }
  public set geoLocationLoadTempIncludeIpv6(value: number) {
    this._geoLocationLoadTempIncludeIpv6 = value;
  }
  public resetGeoLocationLoadTempIncludeIpv6() {
    this._geoLocationLoadTempIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLoadTempIncludeIpv6Input() {
    return this._geoLocationLoadTempIncludeIpv6;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class SystemGeoLocationGeolocLoadFileListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGeoLocationGeolocLoadFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGeoLocationGeolocLoadFileListStructOutputReference {
    return new SystemGeoLocationGeolocLoadFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeoLocation {
  /**
  * Load built-in Maxmind GeoLite2-ASN database. Database available from http://www.maxmind.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_geolite2_asn System#geo_location_geolite2_asn}
  */
  readonly geoLocationGeolite2Asn?: number;
  /**
  * Load built-in Maxmind GeoLite2-City database. Database available from http://www.maxmind.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_geolite2_city System#geo_location_geolite2_city}
  */
  readonly geoLocationGeolite2City?: number;
  /**
  * Load built-in Maxmind GeoLite2-Country database. Database available from http://www.maxmind.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_geolite2_country System#geo_location_geolite2_country}
  */
  readonly geoLocationGeolite2Country?: number;
  /**
  * Load built-in IANA Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_iana System#geo_location_iana}
  */
  readonly geoLocationIana?: number;
  /**
  * Load built-in IANA Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geo_location_iana_system System#geo_location_iana_system}
  */
  readonly geoLocationIanaSystem?: number;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geolite2_asn_include_ipv6 System#geolite2_asn_include_ipv6}
  */
  readonly geolite2AsnIncludeIpv6?: number;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geolite2_city_include_ipv6 System#geolite2_city_include_ipv6}
  */
  readonly geolite2CityIncludeIpv6?: number;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geolite2_country_include_ipv6 System#geolite2_country_include_ipv6}
  */
  readonly geolite2CountryIncludeIpv6?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#entry_list System#entry_list}
  */
  readonly entryList?: SystemGeoLocationEntryListStruct[] | cdktf.IResolvable;
  /**
  * geoloc_load_file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#geoloc_load_file_list System#geoloc_load_file_list}
  */
  readonly geolocLoadFileList?: SystemGeoLocationGeolocLoadFileListStruct[] | cdktf.IResolvable;
}

export function systemGeoLocationToTerraform(struct?: SystemGeoLocationOutputReference | SystemGeoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location_geolite2_asn: cdktf.numberToTerraform(struct!.geoLocationGeolite2Asn),
    geo_location_geolite2_city: cdktf.numberToTerraform(struct!.geoLocationGeolite2City),
    geo_location_geolite2_country: cdktf.numberToTerraform(struct!.geoLocationGeolite2Country),
    geo_location_iana: cdktf.numberToTerraform(struct!.geoLocationIana),
    geo_location_iana_system: cdktf.numberToTerraform(struct!.geoLocationIanaSystem),
    geolite2_asn_include_ipv6: cdktf.numberToTerraform(struct!.geolite2AsnIncludeIpv6),
    geolite2_city_include_ipv6: cdktf.numberToTerraform(struct!.geolite2CityIncludeIpv6),
    geolite2_country_include_ipv6: cdktf.numberToTerraform(struct!.geolite2CountryIncludeIpv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    entry_list: cdktf.listMapper(systemGeoLocationEntryListStructToTerraform, true)(struct!.entryList),
    geoloc_load_file_list: cdktf.listMapper(systemGeoLocationGeolocLoadFileListStructToTerraform, true)(struct!.geolocLoadFileList),
  }
}


export function systemGeoLocationToHclTerraform(struct?: SystemGeoLocationOutputReference | SystemGeoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location_geolite2_asn: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationGeolite2Asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_geolite2_city: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationGeolite2City),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_geolite2_country: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationGeolite2Country),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_iana: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationIana),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_iana_system: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationIanaSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geolite2_asn_include_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.geolite2AsnIncludeIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geolite2_city_include_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.geolite2CityIncludeIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geolite2_country_include_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.geolite2CountryIncludeIpv6),
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
    entry_list: {
      value: cdktf.listMapperHcl(systemGeoLocationEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeoLocationEntryListStructList",
    },
    geoloc_load_file_list: {
      value: cdktf.listMapperHcl(systemGeoLocationGeolocLoadFileListStructToHclTerraform, true)(struct!.geolocLoadFileList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeoLocationGeolocLoadFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGeoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocationGeolite2Asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationGeolite2Asn = this._geoLocationGeolite2Asn;
    }
    if (this._geoLocationGeolite2City !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationGeolite2City = this._geoLocationGeolite2City;
    }
    if (this._geoLocationGeolite2Country !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationGeolite2Country = this._geoLocationGeolite2Country;
    }
    if (this._geoLocationIana !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationIana = this._geoLocationIana;
    }
    if (this._geoLocationIanaSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationIanaSystem = this._geoLocationIanaSystem;
    }
    if (this._geolite2AsnIncludeIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolite2AsnIncludeIpv6 = this._geolite2AsnIncludeIpv6;
    }
    if (this._geolite2CityIncludeIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolite2CityIncludeIpv6 = this._geolite2CityIncludeIpv6;
    }
    if (this._geolite2CountryIncludeIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolite2CountryIncludeIpv6 = this._geolite2CountryIncludeIpv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    if (this._geolocLoadFileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocLoadFileList = this._geolocLoadFileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoLocationGeolite2Asn = undefined;
      this._geoLocationGeolite2City = undefined;
      this._geoLocationGeolite2Country = undefined;
      this._geoLocationIana = undefined;
      this._geoLocationIanaSystem = undefined;
      this._geolite2AsnIncludeIpv6 = undefined;
      this._geolite2CityIncludeIpv6 = undefined;
      this._geolite2CountryIncludeIpv6 = undefined;
      this._uuid = undefined;
      this._entryList.internalValue = undefined;
      this._geolocLoadFileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoLocationGeolite2Asn = value.geoLocationGeolite2Asn;
      this._geoLocationGeolite2City = value.geoLocationGeolite2City;
      this._geoLocationGeolite2Country = value.geoLocationGeolite2Country;
      this._geoLocationIana = value.geoLocationIana;
      this._geoLocationIanaSystem = value.geoLocationIanaSystem;
      this._geolite2AsnIncludeIpv6 = value.geolite2AsnIncludeIpv6;
      this._geolite2CityIncludeIpv6 = value.geolite2CityIncludeIpv6;
      this._geolite2CountryIncludeIpv6 = value.geolite2CountryIncludeIpv6;
      this._uuid = value.uuid;
      this._entryList.internalValue = value.entryList;
      this._geolocLoadFileList.internalValue = value.geolocLoadFileList;
    }
  }

  // geo_location_geolite2_asn - computed: false, optional: true, required: false
  private _geoLocationGeolite2Asn?: number; 
  public get geoLocationGeolite2Asn() {
    return this.getNumberAttribute('geo_location_geolite2_asn');
  }
  public set geoLocationGeolite2Asn(value: number) {
    this._geoLocationGeolite2Asn = value;
  }
  public resetGeoLocationGeolite2Asn() {
    this._geoLocationGeolite2Asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationGeolite2AsnInput() {
    return this._geoLocationGeolite2Asn;
  }

  // geo_location_geolite2_city - computed: false, optional: true, required: false
  private _geoLocationGeolite2City?: number; 
  public get geoLocationGeolite2City() {
    return this.getNumberAttribute('geo_location_geolite2_city');
  }
  public set geoLocationGeolite2City(value: number) {
    this._geoLocationGeolite2City = value;
  }
  public resetGeoLocationGeolite2City() {
    this._geoLocationGeolite2City = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationGeolite2CityInput() {
    return this._geoLocationGeolite2City;
  }

  // geo_location_geolite2_country - computed: false, optional: true, required: false
  private _geoLocationGeolite2Country?: number; 
  public get geoLocationGeolite2Country() {
    return this.getNumberAttribute('geo_location_geolite2_country');
  }
  public set geoLocationGeolite2Country(value: number) {
    this._geoLocationGeolite2Country = value;
  }
  public resetGeoLocationGeolite2Country() {
    this._geoLocationGeolite2Country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationGeolite2CountryInput() {
    return this._geoLocationGeolite2Country;
  }

  // geo_location_iana - computed: false, optional: true, required: false
  private _geoLocationIana?: number; 
  public get geoLocationIana() {
    return this.getNumberAttribute('geo_location_iana');
  }
  public set geoLocationIana(value: number) {
    this._geoLocationIana = value;
  }
  public resetGeoLocationIana() {
    this._geoLocationIana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationIanaInput() {
    return this._geoLocationIana;
  }

  // geo_location_iana_system - computed: false, optional: true, required: false
  private _geoLocationIanaSystem?: number; 
  public get geoLocationIanaSystem() {
    return this.getNumberAttribute('geo_location_iana_system');
  }
  public set geoLocationIanaSystem(value: number) {
    this._geoLocationIanaSystem = value;
  }
  public resetGeoLocationIanaSystem() {
    this._geoLocationIanaSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationIanaSystemInput() {
    return this._geoLocationIanaSystem;
  }

  // geolite2_asn_include_ipv6 - computed: false, optional: true, required: false
  private _geolite2AsnIncludeIpv6?: number; 
  public get geolite2AsnIncludeIpv6() {
    return this.getNumberAttribute('geolite2_asn_include_ipv6');
  }
  public set geolite2AsnIncludeIpv6(value: number) {
    this._geolite2AsnIncludeIpv6 = value;
  }
  public resetGeolite2AsnIncludeIpv6() {
    this._geolite2AsnIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolite2AsnIncludeIpv6Input() {
    return this._geolite2AsnIncludeIpv6;
  }

  // geolite2_city_include_ipv6 - computed: false, optional: true, required: false
  private _geolite2CityIncludeIpv6?: number; 
  public get geolite2CityIncludeIpv6() {
    return this.getNumberAttribute('geolite2_city_include_ipv6');
  }
  public set geolite2CityIncludeIpv6(value: number) {
    this._geolite2CityIncludeIpv6 = value;
  }
  public resetGeolite2CityIncludeIpv6() {
    this._geolite2CityIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolite2CityIncludeIpv6Input() {
    return this._geolite2CityIncludeIpv6;
  }

  // geolite2_country_include_ipv6 - computed: false, optional: true, required: false
  private _geolite2CountryIncludeIpv6?: number; 
  public get geolite2CountryIncludeIpv6() {
    return this.getNumberAttribute('geolite2_country_include_ipv6');
  }
  public set geolite2CountryIncludeIpv6(value: number) {
    this._geolite2CountryIncludeIpv6 = value;
  }
  public resetGeolite2CountryIncludeIpv6() {
    this._geolite2CountryIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolite2CountryIncludeIpv6Input() {
    return this._geolite2CountryIncludeIpv6;
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

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new SystemGeoLocationEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: SystemGeoLocationEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }

  // geoloc_load_file_list - computed: false, optional: true, required: false
  private _geolocLoadFileList = new SystemGeoLocationGeolocLoadFileListStructList(this, "geoloc_load_file_list", false);
  public get geolocLoadFileList() {
    return this._geolocLoadFileList;
  }
  public putGeolocLoadFileList(value: SystemGeoLocationGeolocLoadFileListStruct[] | cdktf.IResolvable) {
    this._geolocLoadFileList.internalValue = value;
  }
  public resetGeolocLoadFileList() {
    this._geolocLoadFileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocLoadFileListInput() {
    return this._geolocLoadFileList.internalValue;
  }
}
export interface SystemGeolocSamplingEnable {
  /**
  * 'all': all; 'place-holder': place-holder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemGeolocSamplingEnableToTerraform(struct?: SystemGeolocSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemGeolocSamplingEnableToHclTerraform(struct?: SystemGeolocSamplingEnable | cdktf.IResolvable): any {
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

export class SystemGeolocSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemGeolocSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemGeolocSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocSamplingEnableOutputReference {
    return new SystemGeolocSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeoloc {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemGeolocSamplingEnable[] | cdktf.IResolvable;
}

export function systemGeolocToTerraform(struct?: SystemGeolocOutputReference | SystemGeoloc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemGeolocSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemGeolocToHclTerraform(struct?: SystemGeolocOutputReference | SystemGeoloc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemGeolocSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeolocSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGeoloc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoloc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemGeolocSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemGeolocSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemGeolocListListExcludeGeolocNameListStruct {
  /**
  * Geolocation name to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#exclude_geoloc_name_val System#exclude_geoloc_name_val}
  */
  readonly excludeGeolocNameVal?: string;
}

export function systemGeolocListListExcludeGeolocNameListStructToTerraform(struct?: SystemGeolocListListExcludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_geoloc_name_val: cdktf.stringToTerraform(struct!.excludeGeolocNameVal),
  }
}


export function systemGeolocListListExcludeGeolocNameListStructToHclTerraform(struct?: SystemGeolocListListExcludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_geoloc_name_val: {
      value: cdktf.stringToHclTerraform(struct!.excludeGeolocNameVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocListListExcludeGeolocNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocListListExcludeGeolocNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeGeolocNameVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeGeolocNameVal = this._excludeGeolocNameVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocListListExcludeGeolocNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeGeolocNameVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeGeolocNameVal = value.excludeGeolocNameVal;
    }
  }

  // exclude_geoloc_name_val - computed: false, optional: true, required: false
  private _excludeGeolocNameVal?: string; 
  public get excludeGeolocNameVal() {
    return this.getStringAttribute('exclude_geoloc_name_val');
  }
  public set excludeGeolocNameVal(value: string) {
    this._excludeGeolocNameVal = value;
  }
  public resetExcludeGeolocNameVal() {
    this._excludeGeolocNameVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGeolocNameValInput() {
    return this._excludeGeolocNameVal;
  }
}

export class SystemGeolocListListExcludeGeolocNameListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocListListExcludeGeolocNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocListListExcludeGeolocNameListStructOutputReference {
    return new SystemGeolocListListExcludeGeolocNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeolocListListIncludeGeolocNameListStruct {
  /**
  * Geolocation name to add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#include_geoloc_name_val System#include_geoloc_name_val}
  */
  readonly includeGeolocNameVal?: string;
}

export function systemGeolocListListIncludeGeolocNameListStructToTerraform(struct?: SystemGeolocListListIncludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_geoloc_name_val: cdktf.stringToTerraform(struct!.includeGeolocNameVal),
  }
}


export function systemGeolocListListIncludeGeolocNameListStructToHclTerraform(struct?: SystemGeolocListListIncludeGeolocNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_geoloc_name_val: {
      value: cdktf.stringToHclTerraform(struct!.includeGeolocNameVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocListListIncludeGeolocNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocListListIncludeGeolocNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeGeolocNameVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGeolocNameVal = this._includeGeolocNameVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocListListIncludeGeolocNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeGeolocNameVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeGeolocNameVal = value.includeGeolocNameVal;
    }
  }

  // include_geoloc_name_val - computed: false, optional: true, required: false
  private _includeGeolocNameVal?: string; 
  public get includeGeolocNameVal() {
    return this.getStringAttribute('include_geoloc_name_val');
  }
  public set includeGeolocNameVal(value: string) {
    this._includeGeolocNameVal = value;
  }
  public resetIncludeGeolocNameVal() {
    this._includeGeolocNameVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGeolocNameValInput() {
    return this._includeGeolocNameVal;
  }
}

export class SystemGeolocListListIncludeGeolocNameListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocListListIncludeGeolocNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocListListIncludeGeolocNameListStructOutputReference {
    return new SystemGeolocListListIncludeGeolocNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeolocListListSamplingEnable {
  /**
  * 'all': all; 'hit-count': hit-count; 'total-geoloc': total-geoloc; 'total-active': total-active;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemGeolocListListSamplingEnableToTerraform(struct?: SystemGeolocListListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemGeolocListListSamplingEnableToHclTerraform(struct?: SystemGeolocListListSamplingEnable | cdktf.IResolvable): any {
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

export class SystemGeolocListListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocListListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemGeolocListListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemGeolocListListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocListListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocListListSamplingEnableOutputReference {
    return new SystemGeolocListListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeolocListListStruct {
  /**
  * Specify name of Geolocation list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#name System#name}
  */
  readonly name: string;
  /**
  * Enable sharing with other partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#shared System#shared}
  */
  readonly shared?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#user_tag System#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * exclude_geoloc_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#exclude_geoloc_name_list System#exclude_geoloc_name_list}
  */
  readonly excludeGeolocNameList?: SystemGeolocListListExcludeGeolocNameListStruct[] | cdktf.IResolvable;
  /**
  * include_geoloc_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#include_geoloc_name_list System#include_geoloc_name_list}
  */
  readonly includeGeolocNameList?: SystemGeolocListListIncludeGeolocNameListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemGeolocListListSamplingEnable[] | cdktf.IResolvable;
}

export function systemGeolocListListStructToTerraform(struct?: SystemGeolocListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    shared: cdktf.numberToTerraform(struct!.shared),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    exclude_geoloc_name_list: cdktf.listMapper(systemGeolocListListExcludeGeolocNameListStructToTerraform, true)(struct!.excludeGeolocNameList),
    include_geoloc_name_list: cdktf.listMapper(systemGeolocListListIncludeGeolocNameListStructToTerraform, true)(struct!.includeGeolocNameList),
    sampling_enable: cdktf.listMapper(systemGeolocListListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemGeolocListListStructToHclTerraform(struct?: SystemGeolocListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
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
    exclude_geoloc_name_list: {
      value: cdktf.listMapperHcl(systemGeolocListListExcludeGeolocNameListStructToHclTerraform, true)(struct!.excludeGeolocNameList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeolocListListExcludeGeolocNameListStructList",
    },
    include_geoloc_name_list: {
      value: cdktf.listMapperHcl(systemGeolocListListIncludeGeolocNameListStructToHclTerraform, true)(struct!.includeGeolocNameList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeolocListListIncludeGeolocNameListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemGeolocListListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeolocListListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._excludeGeolocNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeGeolocNameList = this._excludeGeolocNameList?.internalValue;
    }
    if (this._includeGeolocNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGeolocNameList = this._includeGeolocNameList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._shared = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._excludeGeolocNameList.internalValue = undefined;
      this._includeGeolocNameList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._shared = value.shared;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._excludeGeolocNameList.internalValue = value.excludeGeolocNameList;
      this._includeGeolocNameList.internalValue = value.includeGeolocNameList;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
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

  // exclude_geoloc_name_list - computed: false, optional: true, required: false
  private _excludeGeolocNameList = new SystemGeolocListListExcludeGeolocNameListStructList(this, "exclude_geoloc_name_list", false);
  public get excludeGeolocNameList() {
    return this._excludeGeolocNameList;
  }
  public putExcludeGeolocNameList(value: SystemGeolocListListExcludeGeolocNameListStruct[] | cdktf.IResolvable) {
    this._excludeGeolocNameList.internalValue = value;
  }
  public resetExcludeGeolocNameList() {
    this._excludeGeolocNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeGeolocNameListInput() {
    return this._excludeGeolocNameList.internalValue;
  }

  // include_geoloc_name_list - computed: false, optional: true, required: false
  private _includeGeolocNameList = new SystemGeolocListListIncludeGeolocNameListStructList(this, "include_geoloc_name_list", false);
  public get includeGeolocNameList() {
    return this._includeGeolocNameList;
  }
  public putIncludeGeolocNameList(value: SystemGeolocListListIncludeGeolocNameListStruct[] | cdktf.IResolvable) {
    this._includeGeolocNameList.internalValue = value;
  }
  public resetIncludeGeolocNameList() {
    this._includeGeolocNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGeolocNameListInput() {
    return this._includeGeolocNameList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemGeolocListListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemGeolocListListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SystemGeolocListListStructList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocListListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocListListStructOutputReference {
    return new SystemGeolocListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeolocNameHelperSamplingEnable {
  /**
  * 'all': all; 'place-holder': place-holder;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemGeolocNameHelperSamplingEnableToTerraform(struct?: SystemGeolocNameHelperSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemGeolocNameHelperSamplingEnableToHclTerraform(struct?: SystemGeolocNameHelperSamplingEnable | cdktf.IResolvable): any {
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

export class SystemGeolocNameHelperSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeolocNameHelperSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemGeolocNameHelperSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemGeolocNameHelperSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemGeolocNameHelperSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemGeolocNameHelperSamplingEnableOutputReference {
    return new SystemGeolocNameHelperSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeolocNameHelper {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemGeolocNameHelperSamplingEnable[] | cdktf.IResolvable;
}

export function systemGeolocNameHelperToTerraform(struct?: SystemGeolocNameHelperOutputReference | SystemGeolocNameHelper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemGeolocNameHelperSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemGeolocNameHelperToHclTerraform(struct?: SystemGeolocNameHelperOutputReference | SystemGeolocNameHelper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemGeolocNameHelperSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeolocNameHelperSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocNameHelperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGeolocNameHelper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocNameHelper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemGeolocNameHelperSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemGeolocNameHelperSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemGeolocationFileErrorInfo {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemGeolocationFileErrorInfoToTerraform(struct?: SystemGeolocationFileErrorInfoOutputReference | SystemGeolocationFileErrorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemGeolocationFileErrorInfoToHclTerraform(struct?: SystemGeolocationFileErrorInfoOutputReference | SystemGeolocationFileErrorInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemGeolocationFileErrorInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGeolocationFileErrorInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocationFileErrorInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemGeolocationFile {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * error_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#error_info System#error_info}
  */
  readonly errorInfo?: SystemGeolocationFileErrorInfo;
}

export function systemGeolocationFileToTerraform(struct?: SystemGeolocationFileOutputReference | SystemGeolocationFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    error_info: systemGeolocationFileErrorInfoToTerraform(struct!.errorInfo),
  }
}


export function systemGeolocationFileToHclTerraform(struct?: SystemGeolocationFileOutputReference | SystemGeolocationFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_info: {
      value: systemGeolocationFileErrorInfoToHclTerraform(struct!.errorInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeolocationFileErrorInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeolocationFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGeolocationFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._errorInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorInfo = this._errorInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeolocationFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._errorInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._errorInfo.internalValue = value.errorInfo;
    }
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

  // error_info - computed: false, optional: true, required: false
  private _errorInfo = new SystemGeolocationFileErrorInfoOutputReference(this, "error_info");
  public get errorInfo() {
    return this._errorInfo;
  }
  public putErrorInfo(value: SystemGeolocationFileErrorInfo) {
    this._errorInfo.internalValue = value;
  }
  public resetErrorInfo() {
    this._errorInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInfoInput() {
    return this._errorInfo.internalValue;
  }
}
export interface SystemGlid {
  /**
  * Apply limits to the whole system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#glid_id System#glid_id}
  */
  readonly glidId?: string;
  /**
  * Apply global limit ID to the whole system at per data cpu level (default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#non_shared System#non_shared}
  */
  readonly nonShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemGlidToTerraform(struct?: SystemGlidOutputReference | SystemGlid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glid_id: cdktf.stringToTerraform(struct!.glidId),
    non_shared: cdktf.numberToTerraform(struct!.nonShared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemGlidToHclTerraform(struct?: SystemGlidOutputReference | SystemGlid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glid_id: {
      value: cdktf.stringToHclTerraform(struct!.glidId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_shared: {
      value: cdktf.numberToHclTerraform(struct!.nonShared),
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

export class SystemGlidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGlid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glidId !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidId = this._glidId;
    }
    if (this._nonShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonShared = this._nonShared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGlid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glidId = undefined;
      this._nonShared = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glidId = value.glidId;
      this._nonShared = value.nonShared;
      this._uuid = value.uuid;
    }
  }

  // glid_id - computed: false, optional: true, required: false
  private _glidId?: string; 
  public get glidId() {
    return this.getStringAttribute('glid_id');
  }
  public set glidId(value: string) {
    this._glidId = value;
  }
  public resetGlidId() {
    this._glidId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidIdInput() {
    return this._glidId;
  }

  // non_shared - computed: false, optional: true, required: false
  private _nonShared?: number; 
  public get nonShared() {
    return this.getNumberAttribute('non_shared');
  }
  public set nonShared(value: number) {
    this._nonShared = value;
  }
  public resetNonShared() {
    this._nonShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSharedInput() {
    return this._nonShared;
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
export interface SystemGuestFile {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemGuestFileToTerraform(struct?: SystemGuestFileOutputReference | SystemGuestFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemGuestFileToHclTerraform(struct?: SystemGuestFileOutputReference | SystemGuestFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemGuestFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGuestFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGuestFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemGuiImageListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemGuiImageListStructToTerraform(struct?: SystemGuiImageListStructOutputReference | SystemGuiImageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemGuiImageListStructToHclTerraform(struct?: SystemGuiImageListStructOutputReference | SystemGuiImageListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemGuiImageListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemGuiImageListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGuiImageListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemHardware {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemHardwareToTerraform(struct?: SystemHardwareOutputReference | SystemHardware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemHardwareToHclTerraform(struct?: SystemHardwareOutputReference | SystemHardware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemHardwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemHardware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHardware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemHardwareAccelerateSamplingEnable {
  /**
  * 'all': all; 'hit-counts': Total packets hit counts; 'hit-index': HW Fwd hit index; 'ipv4-forward-counts': Total IPv4 hardware forwarded packets; 'ipv6-forward-counts': Total IPv6 hardware forwarded packets; 'hw-fwd-module-status': Hardware forwarder status flags; 'hw-fwd-prog-reqs': Hardware forward programming requests; 'hw-fwd-prog-errors': Hardware forward programming Errors; 'hw-fwd-flow-singlebit-errors': Hardware forward singlebit Errors; 'hw-fwd-flow-tag-mismatch': Hardware forward tag mismatch errors; 'hw-fwd-flow-seq-mismatch': Hardware forward sequence mismatch errors; 'hw-fwd-ageout-drop-count': Hardware forward ageout drop count; 'hw-fwd-invalidation-drop': Hardware forward invalid drop count; 'hw-fwd-flow-hit-index': Hardware forward flow hit index; 'hw-fwd-flow-reason-flags': Hardware forward flow reason flags; 'hw-fwd-flow-drop-count': Hardware forward flow drop count; 'hw-fwd-flow-error-count': Hardware forward flow error count; 'hw-fwd-flow-unalign-count': Hardware forward flow unalign count; 'hw-fwd-flow-underflow-count': Hardware forward flow underflow count; 'hw-fwd-flow-tx-full-drop': Hardware forward flow tx full drop count; 'hw-fwd-flow-qdr-full-drop': Hardware forward flow qdr full drop count; 'hw-fwd-phyport-mismatch-drop': Hardware forward phyport mismatch count; 'hw-fwd-vlanid-mismatch-drop': Hardware forward vlanid mismatch count; 'hw-fwd-vmid-drop': Hardware forward vmid mismatch count; 'hw-fwd-protocol-mismatch-drop': Hardware forward protocol mismatch count; 'hw-fwd-avail-ipv4-entry': Hardware forward available ipv4 entries count; 'hw-fwd-avail-ipv6-entry': Hardware forward available ipv6 entries count; 'hw-fwd-rate-drop-count': Hardware forward rate drop count; 'hw-fwd-normal-ageout-rcvd': Hardware forward normal ageout received count; 'hw-fwd-tcp-fin-ageout-rcvd': Hardware forward tcp FIN ageout received count; 'hw-fwd-tcp-rst-ageout-rcvd': Hardware forward tcp RST ageout received count; 'hw-fwd-lookup-fail-rcvd': Hardware forward entry lookup fail count; 'hw-fwd-stats-update-rcvd': Hardware forward entry stats update count; 'hw-fwd-flow-sflow-count': hardware forward rate drop count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemHardwareAccelerateSamplingEnableToTerraform(struct?: SystemHardwareAccelerateSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemHardwareAccelerateSamplingEnableToHclTerraform(struct?: SystemHardwareAccelerateSamplingEnable | cdktf.IResolvable): any {
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

export class SystemHardwareAccelerateSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHardwareAccelerateSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemHardwareAccelerateSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemHardwareAccelerateSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemHardwareAccelerateSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemHardwareAccelerateSamplingEnableOutputReference {
    return new SystemHardwareAccelerateSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHardwareAccelerateSlbSamplingEnable {
  /**
  * 'all': all; 'entry-create': Hardware Entries Created; 'entry-create-failure': Hardware Entries Created; 'entry-create-fail-server-down': Hardware Entries Created; 'entry-create-fail-max-entry': Hardware Entries Created; 'entry-free': Hardware Entries Freed; 'entry-free-opp-entry': Hardware Entries Free due to opposite tuple entry ageout event; 'entry-free-no-hw-prog': Hardware Entry Free no hw prog; 'entry-free-no-conn': Hardware Entry Free no matched conn; 'entry-free-no-sw-entry': Hardware Entry Free no software entry; 'entry-counter': Hardware Entry Count; 'entry-age-out': Hardware Entries Aged Out; 'entry-age-out-idle': Hardware Entries Aged Out Idle; 'entry-age-out-tcp-fin': Hardware Entries Aged Out TCP FIN; 'entry-age-out-tcp-rst': Hardware Entries Aged Out TCP RST; 'entry-age-out-invalid-dst': Hardware Entries Aged Out invalid dst; 'entry-force-hw-invalidate': Hardware Entries Force HW Invalidate; 'entry-invalidate-server-down': Hardware Entries Invalidate due to server down; 'tcam-create': TCAM Entries Created; 'tcam-free': TCAM Entries Freed; 'tcam-counter': TCAM Entry Count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemHardwareAccelerateSlbSamplingEnableToTerraform(struct?: SystemHardwareAccelerateSlbSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemHardwareAccelerateSlbSamplingEnableToHclTerraform(struct?: SystemHardwareAccelerateSlbSamplingEnable | cdktf.IResolvable): any {
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

export class SystemHardwareAccelerateSlbSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHardwareAccelerateSlbSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemHardwareAccelerateSlbSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemHardwareAccelerateSlbSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemHardwareAccelerateSlbSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemHardwareAccelerateSlbSamplingEnableOutputReference {
    return new SystemHardwareAccelerateSlbSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHardwareAccelerateSlb {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemHardwareAccelerateSlbSamplingEnable[] | cdktf.IResolvable;
}

export function systemHardwareAccelerateSlbToTerraform(struct?: SystemHardwareAccelerateSlbOutputReference | SystemHardwareAccelerateSlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemHardwareAccelerateSlbSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemHardwareAccelerateSlbToHclTerraform(struct?: SystemHardwareAccelerateSlbOutputReference | SystemHardwareAccelerateSlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemHardwareAccelerateSlbSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemHardwareAccelerateSlbSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHardwareAccelerateSlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemHardwareAccelerateSlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHardwareAccelerateSlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemHardwareAccelerateSlbSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemHardwareAccelerateSlbSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemHardwareAccelerate {
  /**
  * Configure session-forwarding in Hardware (default:off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#session_forwarding System#session_forwarding}
  */
  readonly sessionForwarding?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemHardwareAccelerateSamplingEnable[] | cdktf.IResolvable;
  /**
  * slb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#slb System#slb}
  */
  readonly slb?: SystemHardwareAccelerateSlb;
}

export function systemHardwareAccelerateToTerraform(struct?: SystemHardwareAccelerateOutputReference | SystemHardwareAccelerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_forwarding: cdktf.numberToTerraform(struct!.sessionForwarding),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemHardwareAccelerateSamplingEnableToTerraform, true)(struct!.samplingEnable),
    slb: systemHardwareAccelerateSlbToTerraform(struct!.slb),
  }
}


export function systemHardwareAccelerateToHclTerraform(struct?: SystemHardwareAccelerateOutputReference | SystemHardwareAccelerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_forwarding: {
      value: cdktf.numberToHclTerraform(struct!.sessionForwarding),
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
    sampling_enable: {
      value: cdktf.listMapperHcl(systemHardwareAccelerateSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemHardwareAccelerateSamplingEnableList",
    },
    slb: {
      value: systemHardwareAccelerateSlbToHclTerraform(struct!.slb),
      isBlock: true,
      type: "list",
      storageClassType: "SystemHardwareAccelerateSlbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHardwareAccelerateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemHardwareAccelerate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionForwarding = this._sessionForwarding;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._slb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slb = this._slb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHardwareAccelerate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionForwarding = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
      this._slb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sessionForwarding = value.sessionForwarding;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._slb.internalValue = value.slb;
    }
  }

  // session_forwarding - computed: false, optional: true, required: false
  private _sessionForwarding?: number; 
  public get sessionForwarding() {
    return this.getNumberAttribute('session_forwarding');
  }
  public set sessionForwarding(value: number) {
    this._sessionForwarding = value;
  }
  public resetSessionForwarding() {
    this._sessionForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionForwardingInput() {
    return this._sessionForwarding;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemHardwareAccelerateSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemHardwareAccelerateSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // slb - computed: false, optional: true, required: false
  private _slb = new SystemHardwareAccelerateSlbOutputReference(this, "slb");
  public get slb() {
    return this._slb;
  }
  public putSlb(value: SystemHardwareAccelerateSlb) {
    this._slb.internalValue = value;
  }
  public resetSlb() {
    this._slb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbInput() {
    return this._slb.internalValue;
  }
}
export interface SystemHealthCheckListStruct {
  /**
  * Multiplier value used to compute holddown (value used to multiply the interval (default: 4))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#l2bfd_multiplier System#l2bfd_multiplier}
  */
  readonly l2BfdMultiplier?: number;
  /**
  * Minimum receive interval capability (Milliseconds (default: 800))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#l2bfd_rx_interval System#l2bfd_rx_interval}
  */
  readonly l2BfdRxInterval?: number;
  /**
  * Transmit interval between BFD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#l2bfd_tx_interval System#l2bfd_tx_interval}
  */
  readonly l2BfdTxInterval?: number;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#l2hm_hc_name System#l2hm_hc_name}
  */
  readonly l2HmHcName: string;
  /**
  * Method is l2bfd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#method_l2bfd System#method_l2bfd}
  */
  readonly methodL2Bfd?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#user_tag System#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemHealthCheckListStructToTerraform(struct?: SystemHealthCheckListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l2bfd_multiplier: cdktf.numberToTerraform(struct!.l2BfdMultiplier),
    l2bfd_rx_interval: cdktf.numberToTerraform(struct!.l2BfdRxInterval),
    l2bfd_tx_interval: cdktf.numberToTerraform(struct!.l2BfdTxInterval),
    l2hm_hc_name: cdktf.stringToTerraform(struct!.l2HmHcName),
    method_l2bfd: cdktf.numberToTerraform(struct!.methodL2Bfd),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemHealthCheckListStructToHclTerraform(struct?: SystemHealthCheckListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l2bfd_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.l2BfdMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2bfd_rx_interval: {
      value: cdktf.numberToHclTerraform(struct!.l2BfdRxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2bfd_tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.l2BfdTxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2hm_hc_name: {
      value: cdktf.stringToHclTerraform(struct!.l2HmHcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_l2bfd: {
      value: cdktf.numberToHclTerraform(struct!.methodL2Bfd),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHealthCheckListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHealthCheckListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l2BfdMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2BfdMultiplier = this._l2BfdMultiplier;
    }
    if (this._l2BfdRxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2BfdRxInterval = this._l2BfdRxInterval;
    }
    if (this._l2BfdTxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2BfdTxInterval = this._l2BfdTxInterval;
    }
    if (this._l2HmHcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2HmHcName = this._l2HmHcName;
    }
    if (this._methodL2Bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodL2Bfd = this._methodL2Bfd;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHealthCheckListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._l2BfdMultiplier = undefined;
      this._l2BfdRxInterval = undefined;
      this._l2BfdTxInterval = undefined;
      this._l2HmHcName = undefined;
      this._methodL2Bfd = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._l2BfdMultiplier = value.l2BfdMultiplier;
      this._l2BfdRxInterval = value.l2BfdRxInterval;
      this._l2BfdTxInterval = value.l2BfdTxInterval;
      this._l2HmHcName = value.l2HmHcName;
      this._methodL2Bfd = value.methodL2Bfd;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // l2bfd_multiplier - computed: false, optional: true, required: false
  private _l2BfdMultiplier?: number; 
  public get l2BfdMultiplier() {
    return this.getNumberAttribute('l2bfd_multiplier');
  }
  public set l2BfdMultiplier(value: number) {
    this._l2BfdMultiplier = value;
  }
  public resetL2BfdMultiplier() {
    this._l2BfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2BfdMultiplierInput() {
    return this._l2BfdMultiplier;
  }

  // l2bfd_rx_interval - computed: false, optional: true, required: false
  private _l2BfdRxInterval?: number; 
  public get l2BfdRxInterval() {
    return this.getNumberAttribute('l2bfd_rx_interval');
  }
  public set l2BfdRxInterval(value: number) {
    this._l2BfdRxInterval = value;
  }
  public resetL2BfdRxInterval() {
    this._l2BfdRxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2BfdRxIntervalInput() {
    return this._l2BfdRxInterval;
  }

  // l2bfd_tx_interval - computed: false, optional: true, required: false
  private _l2BfdTxInterval?: number; 
  public get l2BfdTxInterval() {
    return this.getNumberAttribute('l2bfd_tx_interval');
  }
  public set l2BfdTxInterval(value: number) {
    this._l2BfdTxInterval = value;
  }
  public resetL2BfdTxInterval() {
    this._l2BfdTxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2BfdTxIntervalInput() {
    return this._l2BfdTxInterval;
  }

  // l2hm_hc_name - computed: false, optional: false, required: true
  private _l2HmHcName?: string; 
  public get l2HmHcName() {
    return this.getStringAttribute('l2hm_hc_name');
  }
  public set l2HmHcName(value: string) {
    this._l2HmHcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmHcNameInput() {
    return this._l2HmHcName;
  }

  // method_l2bfd - computed: false, optional: true, required: false
  private _methodL2Bfd?: number; 
  public get methodL2Bfd() {
    return this.getNumberAttribute('method_l2bfd');
  }
  public set methodL2Bfd(value: number) {
    this._methodL2Bfd = value;
  }
  public resetMethodL2Bfd() {
    this._methodL2Bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodL2BfdInput() {
    return this._methodL2Bfd;
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
}

export class SystemHealthCheckListStructList extends cdktf.ComplexList {
  public internalValue? : SystemHealthCheckListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemHealthCheckListStructOutputReference {
    return new SystemHealthCheckListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHighMemoryL4Session {
  /**
  * Enable/Disable high memory l4 session support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemHighMemoryL4SessionToTerraform(struct?: SystemHighMemoryL4SessionOutputReference | SystemHighMemoryL4Session): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemHighMemoryL4SessionToHclTerraform(struct?: SystemHighMemoryL4SessionOutputReference | SystemHighMemoryL4Session): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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

export class SystemHighMemoryL4SessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemHighMemoryL4Session | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHighMemoryL4Session | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemHrxqStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemHrxqStatusToTerraform(struct?: SystemHrxqStatusOutputReference | SystemHrxqStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemHrxqStatusToHclTerraform(struct?: SystemHrxqStatusOutputReference | SystemHrxqStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemHrxqStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemHrxqStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHrxqStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemIcmpSamplingEnable {
  /**
  * 'all': all; 'num': Total number; 'inmsgs': In Messages; 'inerrors': In Errors; 'indestunreachs': In Destination Unreachable; 'intimeexcds': In TTL Exceeds; 'inparmprobs': In Parameter Problem; 'insrcquenchs': In Source Quench Error; 'inredirects': In Redirects; 'inechos': In Echo requests; 'inechoreps': In Echo replies; 'intimestamps': In Timestamp; 'intimestampreps': In Timestamp Rep; 'inaddrmasks': In Address Masks; 'inaddrmaskreps': In Address Mask Rep; 'outmsgs': Out Message; 'outerrors': Out Errors; 'outdestunreachs': Out Destination Unreachable; 'outtimeexcds': Out TTL Exceeds; 'outparmprobs': Out Parameter Problem; 'outsrcquenchs': Out Source Quench Error; 'outredirects': Out Redirects; 'outechos': Out Echo Requests; 'outechoreps': Out Echo Replies; 'outtimestamps': Out Time Stamp; 'outtimestampreps': Out Time Stamp Rep; 'outaddrmasks': Out Address Mask; 'outaddrmaskreps': Out Address Mask Rep;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemIcmpSamplingEnableToTerraform(struct?: SystemIcmpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemIcmpSamplingEnableToHclTerraform(struct?: SystemIcmpSamplingEnable | cdktf.IResolvable): any {
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

export class SystemIcmpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIcmpSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemIcmpSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemIcmpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemIcmpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemIcmpSamplingEnableOutputReference {
    return new SystemIcmpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIcmp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemIcmpSamplingEnable[] | cdktf.IResolvable;
}

export function systemIcmpToTerraform(struct?: SystemIcmpOutputReference | SystemIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemIcmpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemIcmpToHclTerraform(struct?: SystemIcmpOutputReference | SystemIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemIcmpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIcmpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemIcmpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemIcmpSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemIcmp6SamplingEnable {
  /**
  * 'all': all; 'in_msgs': In messages; 'in_errors': In Errors; 'in_dest_un_reach': In Destunation Unreachable; 'in_pkt_too_big': In Packet too big; 'in_time_exceeds': In TTL Exceeds; 'in_param_prob': In Parameter Problem; 'in_echoes': In Echo requests; 'in_exho_reply': In Echo replies; 'in_grp_mem_query': In Group member query; 'in_grp_mem_resp': In Group member reply; 'in_grp_mem_reduction': In Group member reduction; 'in_router_sol': In Router solicitation; 'in_ra': In Router advertisement; 'in_ns': In neighbor solicitation; 'in_na': In neighbor advertisement; 'in_redirect': In Redirects; 'out_msg': Out Messages; 'out_dst_un_reach': Out Destination Unreachable; 'out_pkt_too_big': Out Packet too big; 'out_time_exceeds': Out TTL Exceeds; 'out_param_prob': Out Parameter Problem; 'out_echo_req': Out Echo requests; 'out_echo_replies': Out Echo replies; 'out_rs': Out Router solicitation; 'out_ra': Out Router advertisement; 'out_ns': Out neighbor solicitation; 'out_na': Out neighbor advertisement; 'out_redirects': Out Redirects; 'out_mem_resp': Out Group member reply; 'out_mem_reductions': Out Group member reduction; 'err_rs': Error Router solicitation; 'err_ra': Error Router advertisement; 'err_ns': Error Neighbor solicitation; 'err_na': Error Neighbor advertisement; 'err_redirects': Error Redirects; 'err_echoes': Error Echo requests; 'err_echo_replies': Error Echo replies;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemIcmp6SamplingEnableToTerraform(struct?: SystemIcmp6SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemIcmp6SamplingEnableToHclTerraform(struct?: SystemIcmp6SamplingEnable | cdktf.IResolvable): any {
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

export class SystemIcmp6SamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIcmp6SamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemIcmp6SamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemIcmp6SamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemIcmp6SamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemIcmp6SamplingEnableOutputReference {
    return new SystemIcmp6SamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIcmp6 {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemIcmp6SamplingEnable[] | cdktf.IResolvable;
}

export function systemIcmp6ToTerraform(struct?: SystemIcmp6OutputReference | SystemIcmp6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemIcmp6SamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemIcmp6ToHclTerraform(struct?: SystemIcmp6OutputReference | SystemIcmp6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemIcmp6SamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIcmp6SamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIcmp6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIcmp6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIcmp6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemIcmp6SamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemIcmp6SamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemIcmpRateSamplingEnable {
  /**
  * 'all': all; 'over_limit_drop': Over limit drops; 'limit_intf_drop': Interfaces rate limit drops; 'limit_vserver_drop': Virtual Server rate limit drops; 'limit_total_drop': Total rate limit drops; 'lockup_time_left': Lockup time left; 'curr_rate': Current rate; 'v6_over_limit_drop': Over limit drops (v6); 'v6_limit_intf_drop': Interfaces rate limit drops (v6); 'v6_limit_vserver_drop': Virtual Server rate limit drops (v6); 'v6_limit_total_drop': Total rate limit drops (v6); 'v6_lockup_time_left': Lockup time left (v6); 'v6_curr_rate': Current rate (v6);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemIcmpRateSamplingEnableToTerraform(struct?: SystemIcmpRateSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemIcmpRateSamplingEnableToHclTerraform(struct?: SystemIcmpRateSamplingEnable | cdktf.IResolvable): any {
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

export class SystemIcmpRateSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIcmpRateSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemIcmpRateSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemIcmpRateSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemIcmpRateSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemIcmpRateSamplingEnableOutputReference {
    return new SystemIcmpRateSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIcmpRate {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemIcmpRateSamplingEnable[] | cdktf.IResolvable;
}

export function systemIcmpRateToTerraform(struct?: SystemIcmpRateOutputReference | SystemIcmpRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemIcmpRateSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemIcmpRateToHclTerraform(struct?: SystemIcmpRateOutputReference | SystemIcmpRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemIcmpRateSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIcmpRateSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIcmpRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIcmpRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIcmpRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemIcmpRateSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemIcmpRateSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemInuseCpuListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemInuseCpuListStructToTerraform(struct?: SystemInuseCpuListStructOutputReference | SystemInuseCpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemInuseCpuListStructToHclTerraform(struct?: SystemInuseCpuListStructOutputReference | SystemInuseCpuListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemInuseCpuListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemInuseCpuListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemInuseCpuListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemInusePortListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemInusePortListStructToTerraform(struct?: SystemInusePortListStructOutputReference | SystemInusePortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemInusePortListStructToHclTerraform(struct?: SystemInusePortListStructOutputReference | SystemInusePortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemInusePortListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemInusePortListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemInusePortListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemIoCpu {
  /**
  * max number of IO cores (Specify number of cores)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#max_cores System#max_cores}
  */
  readonly maxCores?: number;
}

export function systemIoCpuToTerraform(struct?: SystemIoCpuOutputReference | SystemIoCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cores: cdktf.numberToTerraform(struct!.maxCores),
  }
}


export function systemIoCpuToHclTerraform(struct?: SystemIoCpuOutputReference | SystemIoCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cores: {
      value: cdktf.numberToHclTerraform(struct!.maxCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIoCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIoCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCores = this._maxCores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIoCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCores = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCores = value.maxCores;
    }
  }

  // max_cores - computed: false, optional: true, required: false
  private _maxCores?: number; 
  public get maxCores() {
    return this.getNumberAttribute('max_cores');
  }
  public set maxCores(value: number) {
    this._maxCores = value;
  }
  public resetMaxCores() {
    this._maxCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCoresInput() {
    return this._maxCores;
  }
}
export interface SystemIp {
  /**
  * Disable icmp redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#icmp_redirect_disable System#icmp_redirect_disable}
  */
  readonly icmpRedirectDisable?: number;
  /**
  * Disable icmp unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#icmp_unreachable_disable System#icmp_unreachable_disable}
  */
  readonly icmpUnreachableDisable?: number;
  /**
  * Enable reverse path filter (strict mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#rpf_check_enable System#rpf_check_enable}
  */
  readonly rpfCheckEnable?: number;
  /**
  * Enable IPv4 source routed packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#source_route_pkt_drop_enable System#source_route_pkt_drop_enable}
  */
  readonly sourceRoutePktDropEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemIpToTerraform(struct?: SystemIpOutputReference | SystemIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_redirect_disable: cdktf.numberToTerraform(struct!.icmpRedirectDisable),
    icmp_unreachable_disable: cdktf.numberToTerraform(struct!.icmpUnreachableDisable),
    rpf_check_enable: cdktf.numberToTerraform(struct!.rpfCheckEnable),
    source_route_pkt_drop_enable: cdktf.numberToTerraform(struct!.sourceRoutePktDropEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemIpToHclTerraform(struct?: SystemIpOutputReference | SystemIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_redirect_disable: {
      value: cdktf.numberToHclTerraform(struct!.icmpRedirectDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_unreachable_disable: {
      value: cdktf.numberToHclTerraform(struct!.icmpUnreachableDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpf_check_enable: {
      value: cdktf.numberToHclTerraform(struct!.rpfCheckEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_route_pkt_drop_enable: {
      value: cdktf.numberToHclTerraform(struct!.sourceRoutePktDropEnable),
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

export class SystemIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpRedirectDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRedirectDisable = this._icmpRedirectDisable;
    }
    if (this._icmpUnreachableDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpUnreachableDisable = this._icmpUnreachableDisable;
    }
    if (this._rpfCheckEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpfCheckEnable = this._rpfCheckEnable;
    }
    if (this._sourceRoutePktDropEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRoutePktDropEnable = this._sourceRoutePktDropEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpRedirectDisable = undefined;
      this._icmpUnreachableDisable = undefined;
      this._rpfCheckEnable = undefined;
      this._sourceRoutePktDropEnable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpRedirectDisable = value.icmpRedirectDisable;
      this._icmpUnreachableDisable = value.icmpUnreachableDisable;
      this._rpfCheckEnable = value.rpfCheckEnable;
      this._sourceRoutePktDropEnable = value.sourceRoutePktDropEnable;
      this._uuid = value.uuid;
    }
  }

  // icmp_redirect_disable - computed: false, optional: true, required: false
  private _icmpRedirectDisable?: number; 
  public get icmpRedirectDisable() {
    return this.getNumberAttribute('icmp_redirect_disable');
  }
  public set icmpRedirectDisable(value: number) {
    this._icmpRedirectDisable = value;
  }
  public resetIcmpRedirectDisable() {
    this._icmpRedirectDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRedirectDisableInput() {
    return this._icmpRedirectDisable;
  }

  // icmp_unreachable_disable - computed: false, optional: true, required: false
  private _icmpUnreachableDisable?: number; 
  public get icmpUnreachableDisable() {
    return this.getNumberAttribute('icmp_unreachable_disable');
  }
  public set icmpUnreachableDisable(value: number) {
    this._icmpUnreachableDisable = value;
  }
  public resetIcmpUnreachableDisable() {
    this._icmpUnreachableDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUnreachableDisableInput() {
    return this._icmpUnreachableDisable;
  }

  // rpf_check_enable - computed: false, optional: true, required: false
  private _rpfCheckEnable?: number; 
  public get rpfCheckEnable() {
    return this.getNumberAttribute('rpf_check_enable');
  }
  public set rpfCheckEnable(value: number) {
    this._rpfCheckEnable = value;
  }
  public resetRpfCheckEnable() {
    this._rpfCheckEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfCheckEnableInput() {
    return this._rpfCheckEnable;
  }

  // source_route_pkt_drop_enable - computed: false, optional: true, required: false
  private _sourceRoutePktDropEnable?: number; 
  public get sourceRoutePktDropEnable() {
    return this.getNumberAttribute('source_route_pkt_drop_enable');
  }
  public set sourceRoutePktDropEnable(value: number) {
    this._sourceRoutePktDropEnable = value;
  }
  public resetSourceRoutePktDropEnable() {
    this._sourceRoutePktDropEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoutePktDropEnableInput() {
    return this._sourceRoutePktDropEnable;
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
export interface SystemIp6StatsSamplingEnable {
  /**
  * 'all': all; 'inreceives': Incoming packets received; 'inhdrerrors': Incoming packet header errors; 'intoobigerrors': Incoming packet too big errors; 'innoroutes': Incoming no route packet drops; 'inaddrerrors': Incoming packet address errors; 'inunknownprotos': Incoming unkown protocol packet drops; 'intruncatedpkts': Incoming truncated packets; 'indiscards': Incoming packets discarded; 'indelivers': Incoming packets delivered; 'outforwdatagrams': Outgoing forwarded datagrams; 'outrequests': Outgoing packets; 'outdiscards': Outgoing packets discarded; 'outnoroutes': Outgoing no route packet drops; 'reasmtimeout': Reassembly timed out packet drops; 'reasmreqds': Incoming reassembly requests; 'reasmoks': Incoming reassembled packets; 'reasmfails': Incoming reassembly requests failed; 'fragoks': Outgoing packets fragmented; 'fragfails': Outgoing packets fragmentation failed; 'fragcreates': Outgoing fragmented packets; 'inmcastpkts': Incoming multicast packets; 'outmcastpkts': Outgoing multicast packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemIp6StatsSamplingEnableToTerraform(struct?: SystemIp6StatsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemIp6StatsSamplingEnableToHclTerraform(struct?: SystemIp6StatsSamplingEnable | cdktf.IResolvable): any {
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

export class SystemIp6StatsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIp6StatsSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemIp6StatsSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemIp6StatsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemIp6StatsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemIp6StatsSamplingEnableOutputReference {
    return new SystemIp6StatsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIp6Stats {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemIp6StatsSamplingEnable[] | cdktf.IResolvable;
}

export function systemIp6StatsToTerraform(struct?: SystemIp6StatsOutputReference | SystemIp6Stats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemIp6StatsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemIp6StatsToHclTerraform(struct?: SystemIp6StatsOutputReference | SystemIp6Stats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemIp6StatsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIp6StatsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIp6StatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIp6Stats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIp6Stats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemIp6StatsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemIp6StatsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemIpDnsCache {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemIpDnsCacheToTerraform(struct?: SystemIpDnsCacheOutputReference | SystemIpDnsCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemIpDnsCacheToHclTerraform(struct?: SystemIpDnsCacheOutputReference | SystemIpDnsCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemIpDnsCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpDnsCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpDnsCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemIpStatsSamplingEnable {
  /**
  * 'all': all; 'inreceives': Incoming packets received; 'inhdrerrors': Incoming packet header errors; 'intoobigerrors': Incoming packet too big errors; 'innoroutes': Incoming no route packet drops; 'inaddrerrors': Incoming packet address errors; 'inunknownprotos': Incoming unkown protocol packet drops; 'intruncatedpkts': Incoming truncated packets; 'indiscards': Incoming packets discarded; 'indelivers': Incoming packets delivered; 'outforwdatagrams': Outgoing forwarded datagrams; 'outrequests': Outgoing packets; 'outdiscards': Outgoing packets discarded; 'outnoroutes': Outgoing no route packet drops; 'reasmtimeout': Reassembly timed out packet drops; 'reasmreqds': Incoming reassembly requests; 'reasmoks': Incoming reassembled packets; 'reasmfails': Incoming reassembly requests failed; 'fragoks': Outgoing packets fragmented; 'fragfails': Outgoing packets fragmentation failed; 'fragcreates': Outgoing fragmented packets; 'inmcastpkts': Incoming multicast packets; 'outmcastpkts': Outgoing multicast packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemIpStatsSamplingEnableToTerraform(struct?: SystemIpStatsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemIpStatsSamplingEnableToHclTerraform(struct?: SystemIpStatsSamplingEnable | cdktf.IResolvable): any {
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

export class SystemIpStatsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpStatsSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemIpStatsSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemIpStatsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemIpStatsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemIpStatsSamplingEnableOutputReference {
    return new SystemIpStatsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpStats {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemIpStatsSamplingEnable[] | cdktf.IResolvable;
}

export function systemIpStatsToTerraform(struct?: SystemIpStatsOutputReference | SystemIpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemIpStatsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemIpStatsToHclTerraform(struct?: SystemIpStatsOutputReference | SystemIpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemIpStatsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpStatsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemIpStatsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemIpStatsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemIpThreatListIpv4DestListClassListCfg {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list System#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip_threat_action_tmpl System#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv4DestListClassListCfgToTerraform(struct?: SystemIpThreatListIpv4DestListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv4DestListClassListCfgToHclTerraform(struct?: SystemIpThreatListIpv4DestListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4DestListClassListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv4DestListClassListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4DestListClassListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv4DestListClassListCfgList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv4DestListClassListCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv4DestListClassListCfgOutputReference {
    return new SystemIpThreatListIpv4DestListClassListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv4DestListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list_cfg System#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv4DestListClassListCfg[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv4DestListStructToTerraform(struct?: SystemIpThreatListIpv4DestListStructOutputReference | SystemIpThreatListIpv4DestListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv4DestListClassListCfgToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv4DestListStructToHclTerraform(struct?: SystemIpThreatListIpv4DestListStructOutputReference | SystemIpThreatListIpv4DestListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv4DestListClassListCfgToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4DestListClassListCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4DestListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv4DestListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4DestListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
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

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv4DestListClassListCfgList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv4DestListClassListCfg[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv4InternetHostListClassListCfg {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list System#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip_threat_action_tmpl System#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv4InternetHostListClassListCfgToTerraform(struct?: SystemIpThreatListIpv4InternetHostListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv4InternetHostListClassListCfgToHclTerraform(struct?: SystemIpThreatListIpv4InternetHostListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4InternetHostListClassListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv4InternetHostListClassListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4InternetHostListClassListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv4InternetHostListClassListCfgList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv4InternetHostListClassListCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv4InternetHostListClassListCfgOutputReference {
    return new SystemIpThreatListIpv4InternetHostListClassListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv4InternetHostListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * Bind exception-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#white_list System#white_list}
  */
  readonly whiteList?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list_cfg System#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv4InternetHostListClassListCfg[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv4InternetHostListStructToTerraform(struct?: SystemIpThreatListIpv4InternetHostListStructOutputReference | SystemIpThreatListIpv4InternetHostListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    white_list: cdktf.stringToTerraform(struct!.whiteList),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv4InternetHostListClassListCfgToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv4InternetHostListStructToHclTerraform(struct?: SystemIpThreatListIpv4InternetHostListStructOutputReference | SystemIpThreatListIpv4InternetHostListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    white_list: {
      value: cdktf.stringToHclTerraform(struct!.whiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv4InternetHostListClassListCfgToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4InternetHostListClassListCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4InternetHostListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv4InternetHostListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._whiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4InternetHostListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._whiteList = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._whiteList = value.whiteList;
      this._classListCfg.internalValue = value.classListCfg;
    }
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

  // white_list - computed: false, optional: true, required: false
  private _whiteList?: string; 
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }
  public set whiteList(value: string) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv4InternetHostListClassListCfgList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv4InternetHostListClassListCfg[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv4SourceListClassListCfg {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list System#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip_threat_action_tmpl System#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv4SourceListClassListCfgToTerraform(struct?: SystemIpThreatListIpv4SourceListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv4SourceListClassListCfgToHclTerraform(struct?: SystemIpThreatListIpv4SourceListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4SourceListClassListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv4SourceListClassListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4SourceListClassListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv4SourceListClassListCfgList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv4SourceListClassListCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv4SourceListClassListCfgOutputReference {
    return new SystemIpThreatListIpv4SourceListClassListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv4SourceListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list_cfg System#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv4SourceListClassListCfg[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv4SourceListStructToTerraform(struct?: SystemIpThreatListIpv4SourceListStructOutputReference | SystemIpThreatListIpv4SourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv4SourceListClassListCfgToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv4SourceListStructToHclTerraform(struct?: SystemIpThreatListIpv4SourceListStructOutputReference | SystemIpThreatListIpv4SourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv4SourceListClassListCfgToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4SourceListClassListCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4SourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv4SourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4SourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
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

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv4SourceListClassListCfgList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv4SourceListClassListCfg[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv6DestListClassListCfg {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list System#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip_threat_action_tmpl System#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv6DestListClassListCfgToTerraform(struct?: SystemIpThreatListIpv6DestListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv6DestListClassListCfgToHclTerraform(struct?: SystemIpThreatListIpv6DestListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6DestListClassListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv6DestListClassListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6DestListClassListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv6DestListClassListCfgList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv6DestListClassListCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv6DestListClassListCfgOutputReference {
    return new SystemIpThreatListIpv6DestListClassListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv6DestListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list_cfg System#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv6DestListClassListCfg[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv6DestListStructToTerraform(struct?: SystemIpThreatListIpv6DestListStructOutputReference | SystemIpThreatListIpv6DestListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv6DestListClassListCfgToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv6DestListStructToHclTerraform(struct?: SystemIpThreatListIpv6DestListStructOutputReference | SystemIpThreatListIpv6DestListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv6DestListClassListCfgToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6DestListClassListCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6DestListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv6DestListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6DestListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
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

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv6DestListClassListCfgList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv6DestListClassListCfg[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv6InternetHostListClassListCfg {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list System#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip_threat_action_tmpl System#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv6InternetHostListClassListCfgToTerraform(struct?: SystemIpThreatListIpv6InternetHostListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv6InternetHostListClassListCfgToHclTerraform(struct?: SystemIpThreatListIpv6InternetHostListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6InternetHostListClassListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv6InternetHostListClassListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6InternetHostListClassListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv6InternetHostListClassListCfgList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv6InternetHostListClassListCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv6InternetHostListClassListCfgOutputReference {
    return new SystemIpThreatListIpv6InternetHostListClassListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv6InternetHostListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * Bind exception-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#white_list System#white_list}
  */
  readonly whiteList?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list_cfg System#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv6InternetHostListClassListCfg[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv6InternetHostListStructToTerraform(struct?: SystemIpThreatListIpv6InternetHostListStructOutputReference | SystemIpThreatListIpv6InternetHostListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    white_list: cdktf.stringToTerraform(struct!.whiteList),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv6InternetHostListClassListCfgToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv6InternetHostListStructToHclTerraform(struct?: SystemIpThreatListIpv6InternetHostListStructOutputReference | SystemIpThreatListIpv6InternetHostListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    white_list: {
      value: cdktf.stringToHclTerraform(struct!.whiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv6InternetHostListClassListCfgToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6InternetHostListClassListCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6InternetHostListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv6InternetHostListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._whiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6InternetHostListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._whiteList = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._whiteList = value.whiteList;
      this._classListCfg.internalValue = value.classListCfg;
    }
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

  // white_list - computed: false, optional: true, required: false
  private _whiteList?: string; 
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }
  public set whiteList(value: string) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv6InternetHostListClassListCfgList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv6InternetHostListClassListCfg[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv6SourceListClassListCfg {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list System#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip_threat_action_tmpl System#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv6SourceListClassListCfgToTerraform(struct?: SystemIpThreatListIpv6SourceListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv6SourceListClassListCfgToHclTerraform(struct?: SystemIpThreatListIpv6SourceListClassListCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6SourceListClassListCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv6SourceListClassListCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6SourceListClassListCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv6SourceListClassListCfgList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv6SourceListClassListCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv6SourceListClassListCfgOutputReference {
    return new SystemIpThreatListIpv6SourceListClassListCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv6SourceListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#class_list_cfg System#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv6SourceListClassListCfg[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv6SourceListStructToTerraform(struct?: SystemIpThreatListIpv6SourceListStructOutputReference | SystemIpThreatListIpv6SourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv6SourceListClassListCfgToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv6SourceListStructToHclTerraform(struct?: SystemIpThreatListIpv6SourceListStructOutputReference | SystemIpThreatListIpv6SourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv6SourceListClassListCfgToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6SourceListClassListCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6SourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv6SourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6SourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
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

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv6SourceListClassListCfgList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv6SourceListClassListCfg[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListSamplingEnable {
  /**
  * 'all': all; 'packet_hit_count_in_sw': Packet Hit Count in SW; 'packet_hit_count_in_spe': Packet Hit Count in SPE; 'entries_added_in_sw': Entries Added in SW; 'entries_removed_from_sw': Entries Removed from SW; 'entries_added_in_spe': Entries Added in SPE; 'entries_removed_from_spe': Entries Removed from SPE; 'error_out_of_memory': Out of memory Error; 'error_out_of_spe_entries': Out of SPE Entries Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemIpThreatListSamplingEnableToTerraform(struct?: SystemIpThreatListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemIpThreatListSamplingEnableToHclTerraform(struct?: SystemIpThreatListSamplingEnable | cdktf.IResolvable): any {
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

export class SystemIpThreatListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemIpThreatListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemIpThreatListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListSamplingEnableOutputReference {
    return new SystemIpThreatListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv4_dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv4_dest_list System#ipv4_dest_list}
  */
  readonly ipv4DestList?: SystemIpThreatListIpv4DestListStruct;
  /**
  * ipv4_internet_host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv4_internet_host_list System#ipv4_internet_host_list}
  */
  readonly ipv4InternetHostList?: SystemIpThreatListIpv4InternetHostListStruct;
  /**
  * ipv4_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv4_source_list System#ipv4_source_list}
  */
  readonly ipv4SourceList?: SystemIpThreatListIpv4SourceListStruct;
  /**
  * ipv6_dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv6_dest_list System#ipv6_dest_list}
  */
  readonly ipv6DestList?: SystemIpThreatListIpv6DestListStruct;
  /**
  * ipv6_internet_host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv6_internet_host_list System#ipv6_internet_host_list}
  */
  readonly ipv6InternetHostList?: SystemIpThreatListIpv6InternetHostListStruct;
  /**
  * ipv6_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv6_source_list System#ipv6_source_list}
  */
  readonly ipv6SourceList?: SystemIpThreatListIpv6SourceListStruct;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemIpThreatListSamplingEnable[] | cdktf.IResolvable;
}

export function systemIpThreatListStructToTerraform(struct?: SystemIpThreatListStructOutputReference | SystemIpThreatListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ipv4_dest_list: systemIpThreatListIpv4DestListStructToTerraform(struct!.ipv4DestList),
    ipv4_internet_host_list: systemIpThreatListIpv4InternetHostListStructToTerraform(struct!.ipv4InternetHostList),
    ipv4_source_list: systemIpThreatListIpv4SourceListStructToTerraform(struct!.ipv4SourceList),
    ipv6_dest_list: systemIpThreatListIpv6DestListStructToTerraform(struct!.ipv6DestList),
    ipv6_internet_host_list: systemIpThreatListIpv6InternetHostListStructToTerraform(struct!.ipv6InternetHostList),
    ipv6_source_list: systemIpThreatListIpv6SourceListStructToTerraform(struct!.ipv6SourceList),
    sampling_enable: cdktf.listMapper(systemIpThreatListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemIpThreatListStructToHclTerraform(struct?: SystemIpThreatListStructOutputReference | SystemIpThreatListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_dest_list: {
      value: systemIpThreatListIpv4DestListStructToHclTerraform(struct!.ipv4DestList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4DestListStructList",
    },
    ipv4_internet_host_list: {
      value: systemIpThreatListIpv4InternetHostListStructToHclTerraform(struct!.ipv4InternetHostList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4InternetHostListStructList",
    },
    ipv4_source_list: {
      value: systemIpThreatListIpv4SourceListStructToHclTerraform(struct!.ipv4SourceList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4SourceListStructList",
    },
    ipv6_dest_list: {
      value: systemIpThreatListIpv6DestListStructToHclTerraform(struct!.ipv6DestList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6DestListStructList",
    },
    ipv6_internet_host_list: {
      value: systemIpThreatListIpv6InternetHostListStructToHclTerraform(struct!.ipv6InternetHostList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6InternetHostListStructList",
    },
    ipv6_source_list: {
      value: systemIpThreatListIpv6SourceListStructToHclTerraform(struct!.ipv6SourceList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6SourceListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemIpThreatListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipv4DestList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4DestList = this._ipv4DestList?.internalValue;
    }
    if (this._ipv4InternetHostList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4InternetHostList = this._ipv4InternetHostList?.internalValue;
    }
    if (this._ipv4SourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4SourceList = this._ipv4SourceList?.internalValue;
    }
    if (this._ipv6DestList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DestList = this._ipv6DestList?.internalValue;
    }
    if (this._ipv6InternetHostList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6InternetHostList = this._ipv6InternetHostList?.internalValue;
    }
    if (this._ipv6SourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SourceList = this._ipv6SourceList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ipv4DestList.internalValue = undefined;
      this._ipv4InternetHostList.internalValue = undefined;
      this._ipv4SourceList.internalValue = undefined;
      this._ipv6DestList.internalValue = undefined;
      this._ipv6InternetHostList.internalValue = undefined;
      this._ipv6SourceList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ipv4DestList.internalValue = value.ipv4DestList;
      this._ipv4InternetHostList.internalValue = value.ipv4InternetHostList;
      this._ipv4SourceList.internalValue = value.ipv4SourceList;
      this._ipv6DestList.internalValue = value.ipv6DestList;
      this._ipv6InternetHostList.internalValue = value.ipv6InternetHostList;
      this._ipv6SourceList.internalValue = value.ipv6SourceList;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // ipv4_dest_list - computed: false, optional: true, required: false
  private _ipv4DestList = new SystemIpThreatListIpv4DestListStructOutputReference(this, "ipv4_dest_list");
  public get ipv4DestList() {
    return this._ipv4DestList;
  }
  public putIpv4DestList(value: SystemIpThreatListIpv4DestListStruct) {
    this._ipv4DestList.internalValue = value;
  }
  public resetIpv4DestList() {
    this._ipv4DestList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DestListInput() {
    return this._ipv4DestList.internalValue;
  }

  // ipv4_internet_host_list - computed: false, optional: true, required: false
  private _ipv4InternetHostList = new SystemIpThreatListIpv4InternetHostListStructOutputReference(this, "ipv4_internet_host_list");
  public get ipv4InternetHostList() {
    return this._ipv4InternetHostList;
  }
  public putIpv4InternetHostList(value: SystemIpThreatListIpv4InternetHostListStruct) {
    this._ipv4InternetHostList.internalValue = value;
  }
  public resetIpv4InternetHostList() {
    this._ipv4InternetHostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InternetHostListInput() {
    return this._ipv4InternetHostList.internalValue;
  }

  // ipv4_source_list - computed: false, optional: true, required: false
  private _ipv4SourceList = new SystemIpThreatListIpv4SourceListStructOutputReference(this, "ipv4_source_list");
  public get ipv4SourceList() {
    return this._ipv4SourceList;
  }
  public putIpv4SourceList(value: SystemIpThreatListIpv4SourceListStruct) {
    this._ipv4SourceList.internalValue = value;
  }
  public resetIpv4SourceList() {
    this._ipv4SourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SourceListInput() {
    return this._ipv4SourceList.internalValue;
  }

  // ipv6_dest_list - computed: false, optional: true, required: false
  private _ipv6DestList = new SystemIpThreatListIpv6DestListStructOutputReference(this, "ipv6_dest_list");
  public get ipv6DestList() {
    return this._ipv6DestList;
  }
  public putIpv6DestList(value: SystemIpThreatListIpv6DestListStruct) {
    this._ipv6DestList.internalValue = value;
  }
  public resetIpv6DestList() {
    this._ipv6DestList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DestListInput() {
    return this._ipv6DestList.internalValue;
  }

  // ipv6_internet_host_list - computed: false, optional: true, required: false
  private _ipv6InternetHostList = new SystemIpThreatListIpv6InternetHostListStructOutputReference(this, "ipv6_internet_host_list");
  public get ipv6InternetHostList() {
    return this._ipv6InternetHostList;
  }
  public putIpv6InternetHostList(value: SystemIpThreatListIpv6InternetHostListStruct) {
    this._ipv6InternetHostList.internalValue = value;
  }
  public resetIpv6InternetHostList() {
    this._ipv6InternetHostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InternetHostListInput() {
    return this._ipv6InternetHostList.internalValue;
  }

  // ipv6_source_list - computed: false, optional: true, required: false
  private _ipv6SourceList = new SystemIpThreatListIpv6SourceListStructOutputReference(this, "ipv6_source_list");
  public get ipv6SourceList() {
    return this._ipv6SourceList;
  }
  public putIpv6SourceList(value: SystemIpThreatListIpv6SourceListStruct) {
    this._ipv6SourceList.internalValue = value;
  }
  public resetIpv6SourceList() {
    this._ipv6SourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SourceListInput() {
    return this._ipv6SourceList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemIpThreatListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemIpThreatListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemIpmiIp {
  /**
  * Default gateway address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#default_gateway System#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv4_address System#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipv4_netmask System#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function systemIpmiIpToTerraform(struct?: SystemIpmiIpOutputReference | SystemIpmiIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function systemIpmiIpToHclTerraform(struct?: SystemIpmiIpOutputReference | SystemIpmiIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
    }
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }
}
export interface SystemIpmiIpsrc {
  /**
  * IP addr obtained by BMC running DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#dhcp System#dhcp}
  */
  readonly dhcp?: number;
  /**
  * Manually configured static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#static System#static}
  */
  readonly static?: number;
}

export function systemIpmiIpsrcToTerraform(struct?: SystemIpmiIpsrcOutputReference | SystemIpmiIpsrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.numberToTerraform(struct!.dhcp),
    static: cdktf.numberToTerraform(struct!.static),
  }
}


export function systemIpmiIpsrcToHclTerraform(struct?: SystemIpmiIpsrcOutputReference | SystemIpmiIpsrc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.numberToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiIpsrcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiIpsrc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiIpsrc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp = undefined;
      this._static = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp = value.dhcp;
      this._static = value.static;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }
}
export interface SystemIpmiTool {
  /**
  * Command to execute in double quotes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#cmd System#cmd}
  */
  readonly cmd?: string;
}

export function systemIpmiToolToTerraform(struct?: SystemIpmiToolOutputReference | SystemIpmiTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.stringToTerraform(struct!.cmd),
  }
}


export function systemIpmiToolToHclTerraform(struct?: SystemIpmiToolOutputReference | SystemIpmiTool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.stringToHclTerraform(struct!.cmd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiToolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiTool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiTool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmd = value.cmd;
    }
  }

  // cmd - computed: false, optional: true, required: false
  private _cmd?: string; 
  public get cmd() {
    return this.getStringAttribute('cmd');
  }
  public set cmd(value: string) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }
}
export interface SystemIpmiUser {
  /**
  * Add a new IPMI user (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#add System#add}
  */
  readonly add?: string;
  /**
  * Full control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#administrator System#administrator}
  */
  readonly administrator?: number;
  /**
  * Lowest privilege level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#callback System#callback}
  */
  readonly callback?: number;
  /**
  * Disable an existing IPMI user (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: string;
  /**
  * New IPMI User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#newname System#newname}
  */
  readonly newname?: string;
  /**
  * New Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#newpass System#newpass}
  */
  readonly newpass?: string;
  /**
  * Most BMC commands are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#operator System#operator}
  */
  readonly operator?: number;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#password System#password}
  */
  readonly password?: string;
  /**
  * Change an existing IPMI user privilege (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#privilege System#privilege}
  */
  readonly privilege?: string;
  /**
  * Change User Name (Current IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#setname System#setname}
  */
  readonly setname?: string;
  /**
  * Change Password (IPMI User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#setpass System#setpass}
  */
  readonly setpass?: string;
  /**
  * Only 'benign' commands are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#user System#user}
  */
  readonly user?: number;
}

export function systemIpmiUserToTerraform(struct?: SystemIpmiUserOutputReference | SystemIpmiUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.stringToTerraform(struct!.add),
    administrator: cdktf.numberToTerraform(struct!.administrator),
    callback: cdktf.numberToTerraform(struct!.callback),
    disable: cdktf.stringToTerraform(struct!.disable),
    newname: cdktf.stringToTerraform(struct!.newname),
    newpass: cdktf.stringToTerraform(struct!.newpass),
    operator: cdktf.numberToTerraform(struct!.operator),
    password: cdktf.stringToTerraform(struct!.password),
    privilege: cdktf.stringToTerraform(struct!.privilege),
    setname: cdktf.stringToTerraform(struct!.setname),
    setpass: cdktf.stringToTerraform(struct!.setpass),
    user: cdktf.numberToTerraform(struct!.user),
  }
}


export function systemIpmiUserToHclTerraform(struct?: SystemIpmiUserOutputReference | SystemIpmiUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.stringToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrator: {
      value: cdktf.numberToHclTerraform(struct!.administrator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    callback: {
      value: cdktf.numberToHclTerraform(struct!.callback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.stringToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newname: {
      value: cdktf.stringToHclTerraform(struct!.newname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    newpass: {
      value: cdktf.stringToHclTerraform(struct!.newpass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.numberToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privilege: {
      value: cdktf.stringToHclTerraform(struct!.privilege),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setname: {
      value: cdktf.stringToHclTerraform(struct!.setname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setpass: {
      value: cdktf.stringToHclTerraform(struct!.setpass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.numberToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._administrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrator = this._administrator;
    }
    if (this._callback !== undefined) {
      hasAnyValues = true;
      internalValueResult.callback = this._callback;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._newname !== undefined) {
      hasAnyValues = true;
      internalValueResult.newname = this._newname;
    }
    if (this._newpass !== undefined) {
      hasAnyValues = true;
      internalValueResult.newpass = this._newpass;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privilege !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilege = this._privilege;
    }
    if (this._setname !== undefined) {
      hasAnyValues = true;
      internalValueResult.setname = this._setname;
    }
    if (this._setpass !== undefined) {
      hasAnyValues = true;
      internalValueResult.setpass = this._setpass;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._administrator = undefined;
      this._callback = undefined;
      this._disable = undefined;
      this._newname = undefined;
      this._newpass = undefined;
      this._operator = undefined;
      this._password = undefined;
      this._privilege = undefined;
      this._setname = undefined;
      this._setpass = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._administrator = value.administrator;
      this._callback = value.callback;
      this._disable = value.disable;
      this._newname = value.newname;
      this._newpass = value.newpass;
      this._operator = value.operator;
      this._password = value.password;
      this._privilege = value.privilege;
      this._setname = value.setname;
      this._setpass = value.setpass;
      this._user = value.user;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string; 
  public get add() {
    return this.getStringAttribute('add');
  }
  public set add(value: string) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // administrator - computed: false, optional: true, required: false
  private _administrator?: number; 
  public get administrator() {
    return this.getNumberAttribute('administrator');
  }
  public set administrator(value: number) {
    this._administrator = value;
  }
  public resetAdministrator() {
    this._administrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorInput() {
    return this._administrator;
  }

  // callback - computed: false, optional: true, required: false
  private _callback?: number; 
  public get callback() {
    return this.getNumberAttribute('callback');
  }
  public set callback(value: number) {
    this._callback = value;
  }
  public resetCallback() {
    this._callback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackInput() {
    return this._callback;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // newname - computed: false, optional: true, required: false
  private _newname?: string; 
  public get newname() {
    return this.getStringAttribute('newname');
  }
  public set newname(value: string) {
    this._newname = value;
  }
  public resetNewname() {
    this._newname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newnameInput() {
    return this._newname;
  }

  // newpass - computed: false, optional: true, required: false
  private _newpass?: string; 
  public get newpass() {
    return this.getStringAttribute('newpass');
  }
  public set newpass(value: string) {
    this._newpass = value;
  }
  public resetNewpass() {
    this._newpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newpassInput() {
    return this._newpass;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: number; 
  public get operator() {
    return this.getNumberAttribute('operator');
  }
  public set operator(value: number) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // setname - computed: false, optional: true, required: false
  private _setname?: string; 
  public get setname() {
    return this.getStringAttribute('setname');
  }
  public set setname(value: string) {
    this._setname = value;
  }
  public resetSetname() {
    this._setname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setnameInput() {
    return this._setname;
  }

  // setpass - computed: false, optional: true, required: false
  private _setpass?: string; 
  public get setpass() {
    return this.getStringAttribute('setpass');
  }
  public set setpass(value: string) {
    this._setpass = value;
  }
  public resetSetpass() {
    this._setpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setpassInput() {
    return this._setpass;
  }

  // user - computed: false, optional: true, required: false
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface SystemIpmi {
  /**
  * Reset IPMI Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#reset System#reset}
  */
  readonly reset?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ip System#ip}
  */
  readonly ip?: SystemIpmiIp;
  /**
  * ipsrc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#ipsrc System#ipsrc}
  */
  readonly ipsrc?: SystemIpmiIpsrc;
  /**
  * tool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#tool System#tool}
  */
  readonly tool?: SystemIpmiTool;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#user System#user}
  */
  readonly user?: SystemIpmiUser;
}

export function systemIpmiToTerraform(struct?: SystemIpmiOutputReference | SystemIpmi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reset: cdktf.numberToTerraform(struct!.reset),
    ip: systemIpmiIpToTerraform(struct!.ip),
    ipsrc: systemIpmiIpsrcToTerraform(struct!.ipsrc),
    tool: systemIpmiToolToTerraform(struct!.tool),
    user: systemIpmiUserToTerraform(struct!.user),
  }
}


export function systemIpmiToHclTerraform(struct?: SystemIpmiOutputReference | SystemIpmi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reset: {
      value: cdktf.numberToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: systemIpmiIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpmiIpList",
    },
    ipsrc: {
      value: systemIpmiIpsrcToHclTerraform(struct!.ipsrc),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpmiIpsrcList",
    },
    tool: {
      value: systemIpmiToolToHclTerraform(struct!.tool),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpmiToolList",
    },
    user: {
      value: systemIpmiUserToHclTerraform(struct!.user),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpmiUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpmiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipsrc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsrc = this._ipsrc?.internalValue;
    }
    if (this._tool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tool = this._tool?.internalValue;
    }
    if (this._user?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reset = undefined;
      this._ip.internalValue = undefined;
      this._ipsrc.internalValue = undefined;
      this._tool.internalValue = undefined;
      this._user.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reset = value.reset;
      this._ip.internalValue = value.ip;
      this._ipsrc.internalValue = value.ipsrc;
      this._tool.internalValue = value.tool;
      this._user.internalValue = value.user;
    }
  }

  // reset - computed: false, optional: true, required: false
  private _reset?: number; 
  public get reset() {
    return this.getNumberAttribute('reset');
  }
  public set reset(value: number) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new SystemIpmiIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: SystemIpmiIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipsrc - computed: false, optional: true, required: false
  private _ipsrc = new SystemIpmiIpsrcOutputReference(this, "ipsrc");
  public get ipsrc() {
    return this._ipsrc;
  }
  public putIpsrc(value: SystemIpmiIpsrc) {
    this._ipsrc.internalValue = value;
  }
  public resetIpsrc() {
    this._ipsrc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsrcInput() {
    return this._ipsrc.internalValue;
  }

  // tool - computed: false, optional: true, required: false
  private _tool = new SystemIpmiToolOutputReference(this, "tool");
  public get tool() {
    return this._tool;
  }
  public putTool(value: SystemIpmiTool) {
    this._tool.internalValue = value;
  }
  public resetTool() {
    this._tool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInput() {
    return this._tool.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new SystemIpmiUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: SystemIpmiUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }
}
export interface SystemIpmiService {
  /**
  * Disable IPMI on platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemIpmiServiceToTerraform(struct?: SystemIpmiServiceOutputReference | SystemIpmiService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemIpmiServiceToHclTerraform(struct?: SystemIpmiServiceOutputReference | SystemIpmiService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
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

export class SystemIpmiServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpmiService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpmiService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._uuid = value.uuid;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface SystemIpsecFpgaDecrypt {
  /**
  * 'enable': Enable FPGA decryption offload; 'disable': Disable FPGA decryption offload;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#action System#action}
  */
  readonly action?: string;
}

export function systemIpsecFpgaDecryptToTerraform(struct?: SystemIpsecFpgaDecryptOutputReference | SystemIpsecFpgaDecrypt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function systemIpsecFpgaDecryptToHclTerraform(struct?: SystemIpsecFpgaDecryptOutputReference | SystemIpsecFpgaDecrypt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpsecFpgaDecryptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpsecFpgaDecrypt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpsecFpgaDecrypt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface SystemIpsec {
  /**
  * Crypto cores assigned for IPsec processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#crypto_core System#crypto_core}
  */
  readonly cryptoCore?: number;
  /**
  * Crypto memory percentage assigned for IPsec processing (rounded to increments of 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#crypto_mem System#crypto_mem}
  */
  readonly cryptoMem?: number;
  /**
  * Enable packet round robin for IPsec packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#packet_round_robin System#packet_round_robin}
  */
  readonly packetRoundRobin?: number;
  /**
  * HW assisted QAT SSL module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#qat System#qat}
  */
  readonly qat?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * fpga_decrypt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#fpga_decrypt System#fpga_decrypt}
  */
  readonly fpgaDecrypt?: SystemIpsecFpgaDecrypt;
}

export function systemIpsecToTerraform(struct?: SystemIpsecOutputReference | SystemIpsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_core: cdktf.numberToTerraform(struct!.cryptoCore),
    crypto_mem: cdktf.numberToTerraform(struct!.cryptoMem),
    packet_round_robin: cdktf.numberToTerraform(struct!.packetRoundRobin),
    qat: cdktf.numberToTerraform(struct!.qat),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    fpga_decrypt: systemIpsecFpgaDecryptToTerraform(struct!.fpgaDecrypt),
  }
}


export function systemIpsecToHclTerraform(struct?: SystemIpsecOutputReference | SystemIpsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_core: {
      value: cdktf.numberToHclTerraform(struct!.cryptoCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_mem: {
      value: cdktf.numberToHclTerraform(struct!.cryptoMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_round_robin: {
      value: cdktf.numberToHclTerraform(struct!.packetRoundRobin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qat: {
      value: cdktf.numberToHclTerraform(struct!.qat),
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
    fpga_decrypt: {
      value: systemIpsecFpgaDecryptToHclTerraform(struct!.fpgaDecrypt),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpsecFpgaDecryptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpsec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoCore = this._cryptoCore;
    }
    if (this._cryptoMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoMem = this._cryptoMem;
    }
    if (this._packetRoundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRoundRobin = this._packetRoundRobin;
    }
    if (this._qat !== undefined) {
      hasAnyValues = true;
      internalValueResult.qat = this._qat;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._fpgaDecrypt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaDecrypt = this._fpgaDecrypt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpsec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoCore = undefined;
      this._cryptoMem = undefined;
      this._packetRoundRobin = undefined;
      this._qat = undefined;
      this._uuid = undefined;
      this._fpgaDecrypt.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoCore = value.cryptoCore;
      this._cryptoMem = value.cryptoMem;
      this._packetRoundRobin = value.packetRoundRobin;
      this._qat = value.qat;
      this._uuid = value.uuid;
      this._fpgaDecrypt.internalValue = value.fpgaDecrypt;
    }
  }

  // crypto_core - computed: false, optional: true, required: false
  private _cryptoCore?: number; 
  public get cryptoCore() {
    return this.getNumberAttribute('crypto_core');
  }
  public set cryptoCore(value: number) {
    this._cryptoCore = value;
  }
  public resetCryptoCore() {
    this._cryptoCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoCoreInput() {
    return this._cryptoCore;
  }

  // crypto_mem - computed: false, optional: true, required: false
  private _cryptoMem?: number; 
  public get cryptoMem() {
    return this.getNumberAttribute('crypto_mem');
  }
  public set cryptoMem(value: number) {
    this._cryptoMem = value;
  }
  public resetCryptoMem() {
    this._cryptoMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoMemInput() {
    return this._cryptoMem;
  }

  // packet_round_robin - computed: false, optional: true, required: false
  private _packetRoundRobin?: number; 
  public get packetRoundRobin() {
    return this.getNumberAttribute('packet_round_robin');
  }
  public set packetRoundRobin(value: number) {
    this._packetRoundRobin = value;
  }
  public resetPacketRoundRobin() {
    this._packetRoundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRoundRobinInput() {
    return this._packetRoundRobin;
  }

  // qat - computed: false, optional: true, required: false
  private _qat?: number; 
  public get qat() {
    return this.getNumberAttribute('qat');
  }
  public set qat(value: number) {
    this._qat = value;
  }
  public resetQat() {
    this._qat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qatInput() {
    return this._qat;
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

  // fpga_decrypt - computed: false, optional: true, required: false
  private _fpgaDecrypt = new SystemIpsecFpgaDecryptOutputReference(this, "fpga_decrypt");
  public get fpgaDecrypt() {
    return this._fpgaDecrypt;
  }
  public putFpgaDecrypt(value: SystemIpsecFpgaDecrypt) {
    this._fpgaDecrypt.internalValue = value;
  }
  public resetFpgaDecrypt() {
    this._fpgaDecrypt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaDecryptInput() {
    return this._fpgaDecrypt.internalValue;
  }
}
export interface SystemIpv6 {
  /**
  * Disable icmpv6 redirect messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#icmpv6_redirect_disable System#icmpv6_redirect_disable}
  */
  readonly icmpv6RedirectDisable?: number;
  /**
  * Disable icmpv6 unreachable messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#icmpv6_unreachable_disable System#icmpv6_unreachable_disable}
  */
  readonly icmpv6UnreachableDisable?: number;
  /**
  * Enable reverse path filter (strict mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#rpf_check_enable System#rpf_check_enable}
  */
  readonly rpfCheckEnable?: number;
  /**
  * Enable IPv6 source routed packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#source_route_pkt_drop_enable System#source_route_pkt_drop_enable}
  */
  readonly sourceRoutePktDropEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemIpv6ToTerraform(struct?: SystemIpv6OutputReference | SystemIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmpv6_redirect_disable: cdktf.numberToTerraform(struct!.icmpv6RedirectDisable),
    icmpv6_unreachable_disable: cdktf.numberToTerraform(struct!.icmpv6UnreachableDisable),
    rpf_check_enable: cdktf.numberToTerraform(struct!.rpfCheckEnable),
    source_route_pkt_drop_enable: cdktf.numberToTerraform(struct!.sourceRoutePktDropEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemIpv6ToHclTerraform(struct?: SystemIpv6OutputReference | SystemIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmpv6_redirect_disable: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6RedirectDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_unreachable_disable: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6UnreachableDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpf_check_enable: {
      value: cdktf.numberToHclTerraform(struct!.rpfCheckEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_route_pkt_drop_enable: {
      value: cdktf.numberToHclTerraform(struct!.sourceRoutePktDropEnable),
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

export class SystemIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpv6RedirectDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6RedirectDisable = this._icmpv6RedirectDisable;
    }
    if (this._icmpv6UnreachableDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6UnreachableDisable = this._icmpv6UnreachableDisable;
    }
    if (this._rpfCheckEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpfCheckEnable = this._rpfCheckEnable;
    }
    if (this._sourceRoutePktDropEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRoutePktDropEnable = this._sourceRoutePktDropEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpv6RedirectDisable = undefined;
      this._icmpv6UnreachableDisable = undefined;
      this._rpfCheckEnable = undefined;
      this._sourceRoutePktDropEnable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpv6RedirectDisable = value.icmpv6RedirectDisable;
      this._icmpv6UnreachableDisable = value.icmpv6UnreachableDisable;
      this._rpfCheckEnable = value.rpfCheckEnable;
      this._sourceRoutePktDropEnable = value.sourceRoutePktDropEnable;
      this._uuid = value.uuid;
    }
  }

  // icmpv6_redirect_disable - computed: false, optional: true, required: false
  private _icmpv6RedirectDisable?: number; 
  public get icmpv6RedirectDisable() {
    return this.getNumberAttribute('icmpv6_redirect_disable');
  }
  public set icmpv6RedirectDisable(value: number) {
    this._icmpv6RedirectDisable = value;
  }
  public resetIcmpv6RedirectDisable() {
    this._icmpv6RedirectDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RedirectDisableInput() {
    return this._icmpv6RedirectDisable;
  }

  // icmpv6_unreachable_disable - computed: false, optional: true, required: false
  private _icmpv6UnreachableDisable?: number; 
  public get icmpv6UnreachableDisable() {
    return this.getNumberAttribute('icmpv6_unreachable_disable');
  }
  public set icmpv6UnreachableDisable(value: number) {
    this._icmpv6UnreachableDisable = value;
  }
  public resetIcmpv6UnreachableDisable() {
    this._icmpv6UnreachableDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6UnreachableDisableInput() {
    return this._icmpv6UnreachableDisable;
  }

  // rpf_check_enable - computed: false, optional: true, required: false
  private _rpfCheckEnable?: number; 
  public get rpfCheckEnable() {
    return this.getNumberAttribute('rpf_check_enable');
  }
  public set rpfCheckEnable(value: number) {
    this._rpfCheckEnable = value;
  }
  public resetRpfCheckEnable() {
    this._rpfCheckEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfCheckEnableInput() {
    return this._rpfCheckEnable;
  }

  // source_route_pkt_drop_enable - computed: false, optional: true, required: false
  private _sourceRoutePktDropEnable?: number; 
  public get sourceRoutePktDropEnable() {
    return this.getNumberAttribute('source_route_pkt_drop_enable');
  }
  public set sourceRoutePktDropEnable(value: number) {
    this._sourceRoutePktDropEnable = value;
  }
  public resetSourceRoutePktDropEnable() {
    this._sourceRoutePktDropEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRoutePktDropEnableInput() {
    return this._sourceRoutePktDropEnable;
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
export interface SystemJobOffloadSamplingEnable {
  /**
  * 'all': all; 'jobs': Current Jobs; 'submit': Jobs Submitted; 'receive': Jobs Received; 'execute': Jobs Executed; 'snt_home': Jobs Sent Back Home; 'rcv_home': Jobs Received Home; 'complete': Jobs Completed; 'fail_submit': Jobs Failed to Submit; 'q_no_space': No More Space in Q; 'fail_execute': Failed to Execute Job; 'fail_complete': Failed to Complete Job;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemJobOffloadSamplingEnableToTerraform(struct?: SystemJobOffloadSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemJobOffloadSamplingEnableToHclTerraform(struct?: SystemJobOffloadSamplingEnable | cdktf.IResolvable): any {
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

export class SystemJobOffloadSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemJobOffloadSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemJobOffloadSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemJobOffloadSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemJobOffloadSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemJobOffloadSamplingEnableOutputReference {
    return new SystemJobOffloadSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemJobOffload {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemJobOffloadSamplingEnable[] | cdktf.IResolvable;
}

export function systemJobOffloadToTerraform(struct?: SystemJobOffloadOutputReference | SystemJobOffload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemJobOffloadSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemJobOffloadToHclTerraform(struct?: SystemJobOffloadOutputReference | SystemJobOffload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemJobOffloadSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemJobOffloadSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemJobOffloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemJobOffload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemJobOffload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemJobOffloadSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemJobOffloadSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemLinkCapability {
  /**
  * Enable/Disable link capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemLinkCapabilityToTerraform(struct?: SystemLinkCapabilityOutputReference | SystemLinkCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemLinkCapabilityToHclTerraform(struct?: SystemLinkCapabilityOutputReference | SystemLinkCapability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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

export class SystemLinkCapabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemLinkCapability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLinkCapability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemLinkMonitor {
  /**
  * Disable Link Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Enable Link Monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemLinkMonitorToTerraform(struct?: SystemLinkMonitorOutputReference | SystemLinkMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemLinkMonitorToHclTerraform(struct?: SystemLinkMonitorOutputReference | SystemLinkMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLinkMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemLinkMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLinkMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface SystemLro {
  /**
  * Disable Large Receive Offload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Enable Large Receive Offload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemLroToTerraform(struct?: SystemLroOutputReference | SystemLro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemLroToHclTerraform(struct?: SystemLroOutputReference | SystemLro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemLroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemLro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemLro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface SystemManagementInterfaceMode {
  /**
  * Set management interface in dedicated mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#dedicated System#dedicated}
  */
  readonly dedicated?: number;
  /**
  * Set management interface in non-dedicated mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system#non_dedicated System#non_dedicated}
  */
  readonly nonDedicated?: number;
}

export function systemManagementInterfaceModeToTerraform(struct?: SystemManagementInterfaceModeOutputReference | SystemManagementInterfaceMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated: cdktf.numberToTerraform(struct!.dedicated),
    non_dedicated: cdktf.numberToTerraform(struct!.nonDedicated),
  }
}


export function systemManagementInterfaceModeToHclTerraform(struct?: SystemManagementInterfaceModeOutputReference | SystemManagementInterfaceMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated: {
      value: cdktf.numberToHclTerraform(struct!.dedicated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_dedicated: {
      value: cdktf.numberToHclTerraform(struct!.nonDedicated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemManagementInterfaceModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemManagementInterfaceMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicated = this._dedicated;
    }
    if (this._nonDedicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonDedicated = this._nonDedicated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemManagementInterfaceMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicated = undefined;
      this._nonDedicated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicated = value.dedicated;
      this._nonDedicated = value.nonDedicated;
    }
  }

  // dedicated - computed: false, optional: true, required: false
  private _dedicated?: number; 
  public get dedicated() {
    return this.getNumberAttribute('dedicated');
  }
  public set dedicated(value: number) {
    this._dedicated = value;
  }
  public resetDedicated() {
    this._dedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated;
  }

  // non_dedicated - computed: false, optional: true, required: false
  private _nonDedicated?: number; 
  public get nonDedicated() {
    return this.getNumberAttribute('non_dedicated');
  }
  public set nonDedicated(value: number) {
    this._nonDedicated = value;
  }
  public resetNonDedicated() {
    this._nonDedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonDedicatedInput() {
    return this._nonDedicated;
  }
}
