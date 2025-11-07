import * as cdktf from 'cdktf';
import { SystemTemplateBindMonitorListStruct,
systemTemplateBindMonitorListStructToTerraform,
systemTemplateBindMonitorListStructToHclTerraform,
SystemTemplateBindMonitorListStructList } from './structs400'
export interface SystemTemplateBind {
  /**
  * monitor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#monitor_list System#monitor_list}
  */
  readonly monitorList?: SystemTemplateBindMonitorListStruct[] | cdktf.IResolvable;
}

export function systemTemplateBindToTerraform(struct?: SystemTemplateBindOutputReference | SystemTemplateBind): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_list: cdktf.listMapper(systemTemplateBindMonitorListStructToTerraform, true)(struct!.monitorList),
  }
}


export function systemTemplateBindToHclTerraform(struct?: SystemTemplateBindOutputReference | SystemTemplateBind): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_list: {
      value: cdktf.listMapperHcl(systemTemplateBindMonitorListStructToHclTerraform, true)(struct!.monitorList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTemplateBindMonitorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTemplateBindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTemplateBind | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorList = this._monitorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTemplateBind | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitorList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitorList.internalValue = value.monitorList;
    }
  }

  // monitor_list - computed: false, optional: true, required: false
  private _monitorList = new SystemTemplateBindMonitorListStructList(this, "monitor_list", false);
  public get monitorList() {
    return this._monitorList;
  }
  public putMonitorList(value: SystemTemplateBindMonitorListStruct[] | cdktf.IResolvable) {
    this._monitorList.internalValue = value;
  }
  public resetMonitorList() {
    this._monitorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorListInput() {
    return this._monitorList.internalValue;
  }
}
export interface SystemThroughputSamplingEnable {
  /**
  * 'all': all; 'global-system-throughput-bits-per-sec': Global System throughput in bits/sec; 'per-part-throughput-bits-per-sec': Partition throughput in bits/sec;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemThroughputSamplingEnableToTerraform(struct?: SystemThroughputSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemThroughputSamplingEnableToHclTerraform(struct?: SystemThroughputSamplingEnable | cdktf.IResolvable): any {
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

export class SystemThroughputSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemThroughputSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemThroughputSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SystemThroughputSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemThroughputSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemThroughputSamplingEnableOutputReference {
    return new SystemThroughputSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemThroughput {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemThroughputSamplingEnable[] | cdktf.IResolvable;
}

export function systemThroughputToTerraform(struct?: SystemThroughputOutputReference | SystemThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemThroughputSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemThroughputToHclTerraform(struct?: SystemThroughputOutputReference | SystemThroughput): any {
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
      value: cdktf.listMapperHcl(systemThroughputSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemThroughputSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemThroughput | undefined {
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

  public set internalValue(value: SystemThroughput | undefined) {
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
  private _samplingEnable = new SystemThroughputSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemThroughputSamplingEnable[] | cdktf.IResolvable) {
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
export interface SystemTimeoutValue {
  /**
  * set timeout to stop ftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ftp System#ftp}
  */
  readonly ftp?: number;
  /**
  * set timeout to stop http transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#http System#http}
  */
  readonly http?: number;
  /**
  * set timeout to stop https transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#https System#https}
  */
  readonly https?: number;
  /**
  * set timeout to stop scp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#scp System#scp}
  */
  readonly scp?: number;
  /**
  * set timeout to stop sftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sftp System#sftp}
  */
  readonly sftp?: number;
  /**
  * set timeout to stop tftp transfer in seconds, 0 is no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#tftp System#tftp}
  */
  readonly tftp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTimeoutValueToTerraform(struct?: SystemTimeoutValueOutputReference | SystemTimeoutValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp: cdktf.numberToTerraform(struct!.ftp),
    http: cdktf.numberToTerraform(struct!.http),
    https: cdktf.numberToTerraform(struct!.https),
    scp: cdktf.numberToTerraform(struct!.scp),
    sftp: cdktf.numberToTerraform(struct!.sftp),
    tftp: cdktf.numberToTerraform(struct!.tftp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTimeoutValueToHclTerraform(struct?: SystemTimeoutValueOutputReference | SystemTimeoutValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp: {
      value: cdktf.numberToHclTerraform(struct!.ftp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http: {
      value: cdktf.numberToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https: {
      value: cdktf.numberToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scp: {
      value: cdktf.numberToHclTerraform(struct!.scp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sftp: {
      value: cdktf.numberToHclTerraform(struct!.sftp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tftp: {
      value: cdktf.numberToHclTerraform(struct!.tftp),
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

export class SystemTimeoutValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTimeoutValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftp = this._ftp;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._scp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scp = this._scp;
    }
    if (this._sftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sftp = this._sftp;
    }
    if (this._tftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftp = this._tftp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTimeoutValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ftp = undefined;
      this._http = undefined;
      this._https = undefined;
      this._scp = undefined;
      this._sftp = undefined;
      this._tftp = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ftp = value.ftp;
      this._http = value.http;
      this._https = value.https;
      this._scp = value.scp;
      this._sftp = value.sftp;
      this._tftp = value.tftp;
      this._uuid = value.uuid;
    }
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp?: number; 
  public get ftp() {
    return this.getNumberAttribute('ftp');
  }
  public set ftp(value: number) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // http - computed: false, optional: true, required: false
  private _http?: number; 
  public get http() {
    return this.getNumberAttribute('http');
  }
  public set http(value: number) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // https - computed: false, optional: true, required: false
  private _https?: number; 
  public get https() {
    return this.getNumberAttribute('https');
  }
  public set https(value: number) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // scp - computed: false, optional: true, required: false
  private _scp?: number; 
  public get scp() {
    return this.getNumberAttribute('scp');
  }
  public set scp(value: number) {
    this._scp = value;
  }
  public resetScp() {
    this._scp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpInput() {
    return this._scp;
  }

  // sftp - computed: false, optional: true, required: false
  private _sftp?: number; 
  public get sftp() {
    return this.getNumberAttribute('sftp');
  }
  public set sftp(value: number) {
    this._sftp = value;
  }
  public resetSftp() {
    this._sftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpInput() {
    return this._sftp;
  }

  // tftp - computed: false, optional: true, required: false
  private _tftp?: number; 
  public get tftp() {
    return this.getNumberAttribute('tftp');
  }
  public set tftp(value: number) {
    this._tftp = value;
  }
  public resetTftp() {
    this._tftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp;
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
export interface SystemTls13Mgmt {
  /**
  * Enable TLS 1.3 support on ACOS management plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTls13MgmtToTerraform(struct?: SystemTls13MgmtOutputReference | SystemTls13Mgmt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTls13MgmtToHclTerraform(struct?: SystemTls13MgmtOutputReference | SystemTls13Mgmt): any {
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

export class SystemTls13MgmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTls13Mgmt | undefined {
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

  public set internalValue(value: SystemTls13Mgmt | undefined) {
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
export interface SystemTrunkLoadBalance {
  /**
  * Layer-3 Header based load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#use_l3 System#use_l3}
  */
  readonly useL3?: number;
  /**
  * Layer-3/4 Header based load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#use_l4 System#use_l4}
  */
  readonly useL4?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTrunkLoadBalanceToTerraform(struct?: SystemTrunkLoadBalanceOutputReference | SystemTrunkLoadBalance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_l3: cdktf.numberToTerraform(struct!.useL3),
    use_l4: cdktf.numberToTerraform(struct!.useL4),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTrunkLoadBalanceToHclTerraform(struct?: SystemTrunkLoadBalanceOutputReference | SystemTrunkLoadBalance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_l3: {
      value: cdktf.numberToHclTerraform(struct!.useL3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_l4: {
      value: cdktf.numberToHclTerraform(struct!.useL4),
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

export class SystemTrunkLoadBalanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunkLoadBalance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useL3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useL3 = this._useL3;
    }
    if (this._useL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useL4 = this._useL4;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunkLoadBalance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useL3 = undefined;
      this._useL4 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useL3 = value.useL3;
      this._useL4 = value.useL4;
      this._uuid = value.uuid;
    }
  }

  // use_l3 - computed: false, optional: true, required: false
  private _useL3?: number; 
  public get useL3() {
    return this.getNumberAttribute('use_l3');
  }
  public set useL3(value: number) {
    this._useL3 = value;
  }
  public resetUseL3() {
    this._useL3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useL3Input() {
    return this._useL3;
  }

  // use_l4 - computed: false, optional: true, required: false
  private _useL4?: number; 
  public get useL4() {
    return this.getNumberAttribute('use_l4');
  }
  public set useL4(value: number) {
    this._useL4 = value;
  }
  public resetUseL4() {
    this._useL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useL4Input() {
    return this._useL4;
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
export interface SystemTrunk {
  /**
  * load_balance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#load_balance System#load_balance}
  */
  readonly loadBalance?: SystemTrunkLoadBalance;
}

export function systemTrunkToTerraform(struct?: SystemTrunkOutputReference | SystemTrunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balance: systemTrunkLoadBalanceToTerraform(struct!.loadBalance),
  }
}


export function systemTrunkToHclTerraform(struct?: SystemTrunkOutputReference | SystemTrunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balance: {
      value: systemTrunkLoadBalanceToHclTerraform(struct!.loadBalance),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTrunkLoadBalanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTrunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalance = this._loadBalance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalance.internalValue = value.loadBalance;
    }
  }

  // load_balance - computed: false, optional: true, required: false
  private _loadBalance = new SystemTrunkLoadBalanceOutputReference(this, "load_balance");
  public get loadBalance() {
    return this._loadBalance;
  }
  public putLoadBalance(value: SystemTrunkLoadBalance) {
    this._loadBalance.internalValue = value;
  }
  public resetLoadBalance() {
    this._loadBalance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance.internalValue;
  }
}
export interface SystemTrunkHwHash {
  /**
  * Set HW hash mode, default is 6 (1:dst-mac 2:src-mac 3:src-dst-mac 4:src-ip 5:dst-ip 6:rtag6 7:rtag7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#mode System#mode}
  */
  readonly mode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTrunkHwHashToTerraform(struct?: SystemTrunkHwHashOutputReference | SystemTrunkHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTrunkHwHashToHclTerraform(struct?: SystemTrunkHwHashOutputReference | SystemTrunkHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
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

export class SystemTrunkHwHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunkHwHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunkHwHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._uuid = value.uuid;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
export interface SystemTrunkXauiHwHash {
  /**
  * Set HW hash mode, default is 6 (1:dst-mac 2:src-mac 3:src-dst-mac 4:src-ip 5:dst-ip 6:rtag6 7:rtag7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#mode System#mode}
  */
  readonly mode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTrunkXauiHwHashToTerraform(struct?: SystemTrunkXauiHwHashOutputReference | SystemTrunkXauiHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTrunkXauiHwHashToHclTerraform(struct?: SystemTrunkXauiHwHashOutputReference | SystemTrunkXauiHwHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
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

export class SystemTrunkXauiHwHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTrunkXauiHwHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTrunkXauiHwHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._uuid = value.uuid;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
export interface SystemTso {
  /**
  * Disable TCP Segmentation Offload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Enable TCP Segmentation Offload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemTsoToTerraform(struct?: SystemTsoOutputReference | SystemTso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemTsoToHclTerraform(struct?: SystemTsoOutputReference | SystemTso): any {
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

export class SystemTsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTso | undefined {
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

  public set internalValue(value: SystemTso | undefined) {
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
export interface SystemUpgradeStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemUpgradeStatusToTerraform(struct?: SystemUpgradeStatusOutputReference | SystemUpgradeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemUpgradeStatusToHclTerraform(struct?: SystemUpgradeStatusOutputReference | SystemUpgradeStatus): any {
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

export class SystemUpgradeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemUpgradeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemUpgradeStatus | undefined) {
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
export interface SystemVeMacScheme {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * 'hash-based': Hash-based using the VE number; 'round-robin': Round Robin scheme; 'system-mac': Use system MAC address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ve_mac_scheme_val System#ve_mac_scheme_val}
  */
  readonly veMacSchemeVal?: string;
}

export function systemVeMacSchemeToTerraform(struct?: SystemVeMacSchemeOutputReference | SystemVeMacScheme): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve_mac_scheme_val: cdktf.stringToTerraform(struct!.veMacSchemeVal),
  }
}


export function systemVeMacSchemeToHclTerraform(struct?: SystemVeMacSchemeOutputReference | SystemVeMacScheme): any {
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
    ve_mac_scheme_val: {
      value: cdktf.stringToHclTerraform(struct!.veMacSchemeVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemVeMacSchemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemVeMacScheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._veMacSchemeVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.veMacSchemeVal = this._veMacSchemeVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemVeMacScheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._veMacSchemeVal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._veMacSchemeVal = value.veMacSchemeVal;
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

  // ve_mac_scheme_val - computed: false, optional: true, required: false
  private _veMacSchemeVal?: string; 
  public get veMacSchemeVal() {
    return this.getStringAttribute('ve_mac_scheme_val');
  }
  public set veMacSchemeVal(value: string) {
    this._veMacSchemeVal = value;
  }
  public resetVeMacSchemeVal() {
    this._veMacSchemeVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veMacSchemeValInput() {
    return this._veMacSchemeVal;
  }
}
export interface SystemXauiDlbMode {
  /**
  * Enable/Disable Dynamic Load Balancing traffic distribution support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemXauiDlbModeToTerraform(struct?: SystemXauiDlbModeOutputReference | SystemXauiDlbMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemXauiDlbModeToHclTerraform(struct?: SystemXauiDlbModeOutputReference | SystemXauiDlbMode): any {
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

export class SystemXauiDlbModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemXauiDlbMode | undefined {
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

  public set internalValue(value: SystemXauiDlbMode | undefined) {
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
