// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdwanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#app_perf_log_period SystemSdwan#app_perf_log_period}
  */
  readonly appPerfLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#device_name SystemSdwan#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#device_vdom SystemSdwan#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#duplication_max_discrepancy SystemSdwan#duplication_max_discrepancy}
  */
  readonly duplicationMaxDiscrepancy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#duplication_max_num SystemSdwan#duplication_max_num}
  */
  readonly duplicationMaxNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dynamic_sort_subtable SystemSdwan#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#fail_alert_interfaces SystemSdwan#fail_alert_interfaces}
  */
  readonly failAlertInterfaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#fail_detect SystemSdwan#fail_detect}
  */
  readonly failDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#id SystemSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#load_balance_mode SystemSdwan#load_balance_mode}
  */
  readonly loadBalanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#neighbor_hold_boot_time SystemSdwan#neighbor_hold_boot_time}
  */
  readonly neighborHoldBootTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#neighbor_hold_down SystemSdwan#neighbor_hold_down}
  */
  readonly neighborHoldDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#neighbor_hold_down_time SystemSdwan#neighbor_hold_down_time}
  */
  readonly neighborHoldDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#option SystemSdwan#option}
  */
  readonly option?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#speedtest_bypass_routing SystemSdwan#speedtest_bypass_routing}
  */
  readonly speedtestBypassRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#status SystemSdwan#status}
  */
  readonly status?: string;
  /**
  * duplication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#duplication SystemSdwan#duplication}
  */
  readonly duplication?: SystemSdwanDuplication[] | cdktf.IResolvable;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#health_check SystemSdwan#health_check}
  */
  readonly healthCheck?: SystemSdwanHealthCheck[] | cdktf.IResolvable;
  /**
  * health_check_fortiguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#health_check_fortiguard SystemSdwan#health_check_fortiguard}
  */
  readonly healthCheckFortiguard?: SystemSdwanHealthCheckFortiguard[] | cdktf.IResolvable;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#members SystemSdwan#members}
  */
  readonly members?: SystemSdwanMembers[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#neighbor SystemSdwan#neighbor}
  */
  readonly neighbor?: SystemSdwanNeighbor[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#service SystemSdwan#service}
  */
  readonly service?: SystemSdwanService[] | cdktf.IResolvable;
  /**
  * zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#zone SystemSdwan#zone}
  */
  readonly zone?: SystemSdwanZone[] | cdktf.IResolvable;
}
export interface SystemSdwanDuplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dstaddr SystemSdwan#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dstaddr6 SystemSdwan#dstaddr6}
  */
  readonly dstaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dstintf SystemSdwan#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#id SystemSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#packet_de_duplication SystemSdwan#packet_de_duplication}
  */
  readonly packetDeDuplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#packet_duplication SystemSdwan#packet_duplication}
  */
  readonly packetDuplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#service SystemSdwan#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#service_id SystemSdwan#service_id}
  */
  readonly serviceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_match_service SystemSdwan#sla_match_service}
  */
  readonly slaMatchService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#srcaddr SystemSdwan#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#srcaddr6 SystemSdwan#srcaddr6}
  */
  readonly srcaddr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#srcintf SystemSdwan#srcintf}
  */
  readonly srcintf?: string[];
}

export function systemSdwanDuplicationToTerraform(struct?: SystemSdwanDuplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstaddr),
    dstaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstaddr6),
    dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstintf),
    id: cdktf.numberToTerraform(struct!.id),
    packet_de_duplication: cdktf.stringToTerraform(struct!.packetDeDuplication),
    packet_duplication: cdktf.stringToTerraform(struct!.packetDuplication),
    service: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.service),
    service_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceId),
    sla_match_service: cdktf.stringToTerraform(struct!.slaMatchService),
    srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcaddr),
    srcaddr6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcaddr6),
    srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcintf),
  }
}


export function systemSdwanDuplicationToHclTerraform(struct?: SystemSdwanDuplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dstaddr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstaddr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dstaddr6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstaddr6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dstintf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstintf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_de_duplication: {
      value: cdktf.stringToHclTerraform(struct!.packetDeDuplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_duplication: {
      value: cdktf.stringToHclTerraform(struct!.packetDuplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.service),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sla_match_service: {
      value: cdktf.stringToHclTerraform(struct!.slaMatchService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcaddr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcaddr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    srcaddr6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcaddr6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    srcintf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcintf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanDuplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanDuplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr = this._dstaddr;
    }
    if (this._dstaddr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstaddr6 = this._dstaddr6;
    }
    if (this._dstintf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstintf = this._dstintf;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._packetDeDuplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDeDuplication = this._packetDeDuplication;
    }
    if (this._packetDuplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetDuplication = this._packetDuplication;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._slaMatchService !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaMatchService = this._slaMatchService;
    }
    if (this._srcaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr;
    }
    if (this._srcaddr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr6 = this._srcaddr6;
    }
    if (this._srcintf !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcintf = this._srcintf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanDuplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstaddr = undefined;
      this._dstaddr6 = undefined;
      this._dstintf = undefined;
      this._id = undefined;
      this._packetDeDuplication = undefined;
      this._packetDuplication = undefined;
      this._service = undefined;
      this._serviceId = undefined;
      this._slaMatchService = undefined;
      this._srcaddr = undefined;
      this._srcaddr6 = undefined;
      this._srcintf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstaddr = value.dstaddr;
      this._dstaddr6 = value.dstaddr6;
      this._dstintf = value.dstintf;
      this._id = value.id;
      this._packetDeDuplication = value.packetDeDuplication;
      this._packetDuplication = value.packetDuplication;
      this._service = value.service;
      this._serviceId = value.serviceId;
      this._slaMatchService = value.slaMatchService;
      this._srcaddr = value.srcaddr;
      this._srcaddr6 = value.srcaddr6;
      this._srcintf = value.srcintf;
    }
  }

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstaddr6 - computed: true, optional: true, required: false
  private _dstaddr6?: string[]; 
  public get dstaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr6'));
  }
  public set dstaddr6(value: string[]) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
  }

  // dstintf - computed: true, optional: true, required: false
  private _dstintf?: string[]; 
  public get dstintf() {
    return cdktf.Fn.tolist(this.getListAttribute('dstintf'));
  }
  public set dstintf(value: string[]) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
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

  // packet_de_duplication - computed: true, optional: true, required: false
  private _packetDeDuplication?: string; 
  public get packetDeDuplication() {
    return this.getStringAttribute('packet_de_duplication');
  }
  public set packetDeDuplication(value: string) {
    this._packetDeDuplication = value;
  }
  public resetPacketDeDuplication() {
    this._packetDeDuplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDeDuplicationInput() {
    return this._packetDeDuplication;
  }

  // packet_duplication - computed: true, optional: true, required: false
  private _packetDuplication?: string; 
  public get packetDuplication() {
    return this.getStringAttribute('packet_duplication');
  }
  public set packetDuplication(value: string) {
    this._packetDuplication = value;
  }
  public resetPacketDuplication() {
    this._packetDuplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetDuplicationInput() {
    return this._packetDuplication;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string[]; 
  public get serviceId() {
    return cdktf.Fn.tolist(this.getListAttribute('service_id'));
  }
  public set serviceId(value: string[]) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // sla_match_service - computed: true, optional: true, required: false
  private _slaMatchService?: string; 
  public get slaMatchService() {
    return this.getStringAttribute('sla_match_service');
  }
  public set slaMatchService(value: string) {
    this._slaMatchService = value;
  }
  public resetSlaMatchService() {
    this._slaMatchService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaMatchServiceInput() {
    return this._slaMatchService;
  }

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: true, optional: true, required: false
  private _srcaddr6?: string[]; 
  public get srcaddr6() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr6'));
  }
  public set srcaddr6(value: string[]) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string[]; 
  public get srcintf() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf'));
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }
}

export class SystemSdwanDuplicationList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanDuplication[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanDuplicationOutputReference {
    return new SystemSdwanDuplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanHealthCheckSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#id SystemSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#jitter_threshold SystemSdwan#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#latency_threshold SystemSdwan#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#link_cost_factor SystemSdwan#link_cost_factor}
  */
  readonly linkCostFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#mos_threshold SystemSdwan#mos_threshold}
  */
  readonly mosThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#packetloss_threshold SystemSdwan#packetloss_threshold}
  */
  readonly packetlossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_in_sla SystemSdwan#priority_in_sla}
  */
  readonly priorityInSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_out_sla SystemSdwan#priority_out_sla}
  */
  readonly priorityOutSla?: number;
}

export function systemSdwanHealthCheckSlaToTerraform(struct?: SystemSdwanHealthCheckSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    jitter_threshold: cdktf.numberToTerraform(struct!.jitterThreshold),
    latency_threshold: cdktf.numberToTerraform(struct!.latencyThreshold),
    link_cost_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.linkCostFactor),
    mos_threshold: cdktf.stringToTerraform(struct!.mosThreshold),
    packetloss_threshold: cdktf.numberToTerraform(struct!.packetlossThreshold),
    priority_in_sla: cdktf.numberToTerraform(struct!.priorityInSla),
    priority_out_sla: cdktf.numberToTerraform(struct!.priorityOutSla),
  }
}


export function systemSdwanHealthCheckSlaToHclTerraform(struct?: SystemSdwanHealthCheckSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.jitterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_threshold: {
      value: cdktf.numberToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_factor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.linkCostFactor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mos_threshold: {
      value: cdktf.stringToHclTerraform(struct!.mosThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packetloss_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packetlossThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_in_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityInSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_out_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityOutSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanHealthCheckSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanHealthCheckSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._jitterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterThreshold = this._jitterThreshold;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    if (this._linkCostFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostFactor = this._linkCostFactor;
    }
    if (this._mosThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.mosThreshold = this._mosThreshold;
    }
    if (this._packetlossThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetlossThreshold = this._packetlossThreshold;
    }
    if (this._priorityInSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityInSla = this._priorityInSla;
    }
    if (this._priorityOutSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOutSla = this._priorityOutSla;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanHealthCheckSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._jitterThreshold = undefined;
      this._latencyThreshold = undefined;
      this._linkCostFactor = undefined;
      this._mosThreshold = undefined;
      this._packetlossThreshold = undefined;
      this._priorityInSla = undefined;
      this._priorityOutSla = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._jitterThreshold = value.jitterThreshold;
      this._latencyThreshold = value.latencyThreshold;
      this._linkCostFactor = value.linkCostFactor;
      this._mosThreshold = value.mosThreshold;
      this._packetlossThreshold = value.packetlossThreshold;
      this._priorityInSla = value.priorityInSla;
      this._priorityOutSla = value.priorityOutSla;
    }
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

  // jitter_threshold - computed: true, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: true, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // link_cost_factor - computed: true, optional: true, required: false
  private _linkCostFactor?: string[]; 
  public get linkCostFactor() {
    return cdktf.Fn.tolist(this.getListAttribute('link_cost_factor'));
  }
  public set linkCostFactor(value: string[]) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // mos_threshold - computed: true, optional: true, required: false
  private _mosThreshold?: string; 
  public get mosThreshold() {
    return this.getStringAttribute('mos_threshold');
  }
  public set mosThreshold(value: string) {
    this._mosThreshold = value;
  }
  public resetMosThreshold() {
    this._mosThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosThresholdInput() {
    return this._mosThreshold;
  }

  // packetloss_threshold - computed: false, optional: true, required: false
  private _packetlossThreshold?: number; 
  public get packetlossThreshold() {
    return this.getNumberAttribute('packetloss_threshold');
  }
  public set packetlossThreshold(value: number) {
    this._packetlossThreshold = value;
  }
  public resetPacketlossThreshold() {
    this._packetlossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetlossThresholdInput() {
    return this._packetlossThreshold;
  }

  // priority_in_sla - computed: false, optional: true, required: false
  private _priorityInSla?: number; 
  public get priorityInSla() {
    return this.getNumberAttribute('priority_in_sla');
  }
  public set priorityInSla(value: number) {
    this._priorityInSla = value;
  }
  public resetPriorityInSla() {
    this._priorityInSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInSlaInput() {
    return this._priorityInSla;
  }

  // priority_out_sla - computed: false, optional: true, required: false
  private _priorityOutSla?: number; 
  public get priorityOutSla() {
    return this.getNumberAttribute('priority_out_sla');
  }
  public set priorityOutSla(value: number) {
    this._priorityOutSla = value;
  }
  public resetPriorityOutSla() {
    this._priorityOutSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOutSlaInput() {
    return this._priorityOutSla;
  }
}

export class SystemSdwanHealthCheckSlaList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanHealthCheckSla[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanHealthCheckSlaOutputReference {
    return new SystemSdwanHealthCheckSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#addr_mode SystemSdwan#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#class_id SystemSdwan#class_id}
  */
  readonly classId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#detect_mode SystemSdwan#detect_mode}
  */
  readonly detectMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#diffservcode SystemSdwan#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dns_match_ip SystemSdwan#dns_match_ip}
  */
  readonly dnsMatchIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dns_request_domain SystemSdwan#dns_request_domain}
  */
  readonly dnsRequestDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#embed_measured_health SystemSdwan#embed_measured_health}
  */
  readonly embedMeasuredHealth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#failtime SystemSdwan#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#fortiguard SystemSdwan#fortiguard}
  */
  readonly fortiguard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#fortiguard_name SystemSdwan#fortiguard_name}
  */
  readonly fortiguardName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ftp_file SystemSdwan#ftp_file}
  */
  readonly ftpFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ftp_mode SystemSdwan#ftp_mode}
  */
  readonly ftpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ha_priority SystemSdwan#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#http_agent SystemSdwan#http_agent}
  */
  readonly httpAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#http_get SystemSdwan#http_get}
  */
  readonly httpGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#http_match SystemSdwan#http_match}
  */
  readonly httpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#interval SystemSdwan#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#members SystemSdwan#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#mos_codec SystemSdwan#mos_codec}
  */
  readonly mosCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#name SystemSdwan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#packet_size SystemSdwan#packet_size}
  */
  readonly packetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#password SystemSdwan#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#port SystemSdwan#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#probe_count SystemSdwan#probe_count}
  */
  readonly probeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#probe_packets SystemSdwan#probe_packets}
  */
  readonly probePackets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#probe_timeout SystemSdwan#probe_timeout}
  */
  readonly probeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#protocol SystemSdwan#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#quality_measured_method SystemSdwan#quality_measured_method}
  */
  readonly qualityMeasuredMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#recoverytime SystemSdwan#recoverytime}
  */
  readonly recoverytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#security_mode SystemSdwan#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#server SystemSdwan#server}
  */
  readonly server?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_fail_log_period SystemSdwan#sla_fail_log_period}
  */
  readonly slaFailLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_id_redistribute SystemSdwan#sla_id_redistribute}
  */
  readonly slaIdRedistribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_pass_log_period SystemSdwan#sla_pass_log_period}
  */
  readonly slaPassLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#source SystemSdwan#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#source6 SystemSdwan#source6}
  */
  readonly source6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#system_dns SystemSdwan#system_dns}
  */
  readonly systemDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_alert_jitter SystemSdwan#threshold_alert_jitter}
  */
  readonly thresholdAlertJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_alert_latency SystemSdwan#threshold_alert_latency}
  */
  readonly thresholdAlertLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_alert_packetloss SystemSdwan#threshold_alert_packetloss}
  */
  readonly thresholdAlertPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_warning_jitter SystemSdwan#threshold_warning_jitter}
  */
  readonly thresholdWarningJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_warning_latency SystemSdwan#threshold_warning_latency}
  */
  readonly thresholdWarningLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_warning_packetloss SystemSdwan#threshold_warning_packetloss}
  */
  readonly thresholdWarningPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#update_cascade_interface SystemSdwan#update_cascade_interface}
  */
  readonly updateCascadeInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#update_static_route SystemSdwan#update_static_route}
  */
  readonly updateStaticRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#user SystemSdwan#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#vrf SystemSdwan#vrf}
  */
  readonly vrf?: number;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla SystemSdwan#sla}
  */
  readonly sla?: SystemSdwanHealthCheckSla[] | cdktf.IResolvable;
}

export function systemSdwanHealthCheckToTerraform(struct?: SystemSdwanHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    class_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classId),
    detect_mode: cdktf.stringToTerraform(struct!.detectMode),
    diffservcode: cdktf.stringToTerraform(struct!.diffservcode),
    dns_match_ip: cdktf.stringToTerraform(struct!.dnsMatchIp),
    dns_request_domain: cdktf.stringToTerraform(struct!.dnsRequestDomain),
    embed_measured_health: cdktf.stringToTerraform(struct!.embedMeasuredHealth),
    failtime: cdktf.numberToTerraform(struct!.failtime),
    fortiguard: cdktf.stringToTerraform(struct!.fortiguard),
    fortiguard_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fortiguardName),
    ftp_file: cdktf.stringToTerraform(struct!.ftpFile),
    ftp_mode: cdktf.stringToTerraform(struct!.ftpMode),
    ha_priority: cdktf.numberToTerraform(struct!.haPriority),
    http_agent: cdktf.stringToTerraform(struct!.httpAgent),
    http_get: cdktf.stringToTerraform(struct!.httpGet),
    http_match: cdktf.stringToTerraform(struct!.httpMatch),
    interval: cdktf.numberToTerraform(struct!.interval),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    mos_codec: cdktf.stringToTerraform(struct!.mosCodec),
    name: cdktf.stringToTerraform(struct!.name),
    packet_size: cdktf.numberToTerraform(struct!.packetSize),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    probe_count: cdktf.numberToTerraform(struct!.probeCount),
    probe_packets: cdktf.stringToTerraform(struct!.probePackets),
    probe_timeout: cdktf.numberToTerraform(struct!.probeTimeout),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    quality_measured_method: cdktf.stringToTerraform(struct!.qualityMeasuredMethod),
    recoverytime: cdktf.numberToTerraform(struct!.recoverytime),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.server),
    sla_fail_log_period: cdktf.numberToTerraform(struct!.slaFailLogPeriod),
    sla_id_redistribute: cdktf.numberToTerraform(struct!.slaIdRedistribute),
    sla_pass_log_period: cdktf.numberToTerraform(struct!.slaPassLogPeriod),
    source: cdktf.stringToTerraform(struct!.source),
    source6: cdktf.stringToTerraform(struct!.source6),
    system_dns: cdktf.stringToTerraform(struct!.systemDns),
    threshold_alert_jitter: cdktf.numberToTerraform(struct!.thresholdAlertJitter),
    threshold_alert_latency: cdktf.numberToTerraform(struct!.thresholdAlertLatency),
    threshold_alert_packetloss: cdktf.numberToTerraform(struct!.thresholdAlertPacketloss),
    threshold_warning_jitter: cdktf.numberToTerraform(struct!.thresholdWarningJitter),
    threshold_warning_latency: cdktf.numberToTerraform(struct!.thresholdWarningLatency),
    threshold_warning_packetloss: cdktf.numberToTerraform(struct!.thresholdWarningPacketloss),
    update_cascade_interface: cdktf.stringToTerraform(struct!.updateCascadeInterface),
    update_static_route: cdktf.stringToTerraform(struct!.updateStaticRoute),
    user: cdktf.stringToTerraform(struct!.user),
    vrf: cdktf.numberToTerraform(struct!.vrf),
    sla: cdktf.listMapper(systemSdwanHealthCheckSlaToTerraform, true)(struct!.sla),
  }
}


export function systemSdwanHealthCheckToHclTerraform(struct?: SystemSdwanHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detect_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diffservcode: {
      value: cdktf.stringToHclTerraform(struct!.diffservcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_match_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsMatchIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_request_domain: {
      value: cdktf.stringToHclTerraform(struct!.dnsRequestDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embed_measured_health: {
      value: cdktf.stringToHclTerraform(struct!.embedMeasuredHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failtime: {
      value: cdktf.numberToHclTerraform(struct!.failtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fortiguard: {
      value: cdktf.stringToHclTerraform(struct!.fortiguard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiguard_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fortiguardName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ftp_file: {
      value: cdktf.stringToHclTerraform(struct!.ftpFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_mode: {
      value: cdktf.stringToHclTerraform(struct!.ftpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_priority: {
      value: cdktf.numberToHclTerraform(struct!.haPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_agent: {
      value: cdktf.stringToHclTerraform(struct!.httpAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get: {
      value: cdktf.stringToHclTerraform(struct!.httpGet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_match: {
      value: cdktf.stringToHclTerraform(struct!.httpMatch),
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
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mos_codec: {
      value: cdktf.stringToHclTerraform(struct!.mosCodec),
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
    packet_size: {
      value: cdktf.numberToHclTerraform(struct!.packetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_count: {
      value: cdktf.numberToHclTerraform(struct!.probeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_packets: {
      value: cdktf.stringToHclTerraform(struct!.probePackets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_timeout: {
      value: cdktf.numberToHclTerraform(struct!.probeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quality_measured_method: {
      value: cdktf.stringToHclTerraform(struct!.qualityMeasuredMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recoverytime: {
      value: cdktf.numberToHclTerraform(struct!.recoverytime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.server),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sla_fail_log_period: {
      value: cdktf.numberToHclTerraform(struct!.slaFailLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_id_redistribute: {
      value: cdktf.numberToHclTerraform(struct!.slaIdRedistribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_pass_log_period: {
      value: cdktf.numberToHclTerraform(struct!.slaPassLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source6: {
      value: cdktf.stringToHclTerraform(struct!.source6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_dns: {
      value: cdktf.stringToHclTerraform(struct!.systemDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_alert_jitter: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_alert_latency: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_alert_packetloss: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertPacketloss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_jitter: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_latency: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_packetloss: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningPacketloss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_cascade_interface: {
      value: cdktf.stringToHclTerraform(struct!.updateCascadeInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_static_route: {
      value: cdktf.stringToHclTerraform(struct!.updateStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.numberToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla: {
      value: cdktf.listMapperHcl(systemSdwanHealthCheckSlaToHclTerraform, true)(struct!.sla),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSdwanHealthCheckSlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._detectMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectMode = this._detectMode;
    }
    if (this._diffservcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffservcode = this._diffservcode;
    }
    if (this._dnsMatchIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMatchIp = this._dnsMatchIp;
    }
    if (this._dnsRequestDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestDomain = this._dnsRequestDomain;
    }
    if (this._embedMeasuredHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.embedMeasuredHealth = this._embedMeasuredHealth;
    }
    if (this._failtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.failtime = this._failtime;
    }
    if (this._fortiguard !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiguard = this._fortiguard;
    }
    if (this._fortiguardName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiguardName = this._fortiguardName;
    }
    if (this._ftpFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpFile = this._ftpFile;
    }
    if (this._ftpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpMode = this._ftpMode;
    }
    if (this._haPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.haPriority = this._haPriority;
    }
    if (this._httpAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAgent = this._httpAgent;
    }
    if (this._httpGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet;
    }
    if (this._httpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMatch = this._httpMatch;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._mosCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.mosCodec = this._mosCodec;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSize = this._packetSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._probeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeCount = this._probeCount;
    }
    if (this._probePackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.probePackets = this._probePackets;
    }
    if (this._probeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTimeout = this._probeTimeout;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._qualityMeasuredMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualityMeasuredMethod = this._qualityMeasuredMethod;
    }
    if (this._recoverytime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverytime = this._recoverytime;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._slaFailLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaFailLogPeriod = this._slaFailLogPeriod;
    }
    if (this._slaIdRedistribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaIdRedistribute = this._slaIdRedistribute;
    }
    if (this._slaPassLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaPassLogPeriod = this._slaPassLogPeriod;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._source6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.source6 = this._source6;
    }
    if (this._systemDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDns = this._systemDns;
    }
    if (this._thresholdAlertJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertJitter = this._thresholdAlertJitter;
    }
    if (this._thresholdAlertLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertLatency = this._thresholdAlertLatency;
    }
    if (this._thresholdAlertPacketloss !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertPacketloss = this._thresholdAlertPacketloss;
    }
    if (this._thresholdWarningJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningJitter = this._thresholdWarningJitter;
    }
    if (this._thresholdWarningLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningLatency = this._thresholdWarningLatency;
    }
    if (this._thresholdWarningPacketloss !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningPacketloss = this._thresholdWarningPacketloss;
    }
    if (this._updateCascadeInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateCascadeInterface = this._updateCascadeInterface;
    }
    if (this._updateStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStaticRoute = this._updateStaticRoute;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._sla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrMode = undefined;
      this._classId = undefined;
      this._detectMode = undefined;
      this._diffservcode = undefined;
      this._dnsMatchIp = undefined;
      this._dnsRequestDomain = undefined;
      this._embedMeasuredHealth = undefined;
      this._failtime = undefined;
      this._fortiguard = undefined;
      this._fortiguardName = undefined;
      this._ftpFile = undefined;
      this._ftpMode = undefined;
      this._haPriority = undefined;
      this._httpAgent = undefined;
      this._httpGet = undefined;
      this._httpMatch = undefined;
      this._interval = undefined;
      this._members = undefined;
      this._mosCodec = undefined;
      this._name = undefined;
      this._packetSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._probeCount = undefined;
      this._probePackets = undefined;
      this._probeTimeout = undefined;
      this._protocol = undefined;
      this._qualityMeasuredMethod = undefined;
      this._recoverytime = undefined;
      this._securityMode = undefined;
      this._server = undefined;
      this._slaFailLogPeriod = undefined;
      this._slaIdRedistribute = undefined;
      this._slaPassLogPeriod = undefined;
      this._source = undefined;
      this._source6 = undefined;
      this._systemDns = undefined;
      this._thresholdAlertJitter = undefined;
      this._thresholdAlertLatency = undefined;
      this._thresholdAlertPacketloss = undefined;
      this._thresholdWarningJitter = undefined;
      this._thresholdWarningLatency = undefined;
      this._thresholdWarningPacketloss = undefined;
      this._updateCascadeInterface = undefined;
      this._updateStaticRoute = undefined;
      this._user = undefined;
      this._vrf = undefined;
      this._sla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrMode = value.addrMode;
      this._classId = value.classId;
      this._detectMode = value.detectMode;
      this._diffservcode = value.diffservcode;
      this._dnsMatchIp = value.dnsMatchIp;
      this._dnsRequestDomain = value.dnsRequestDomain;
      this._embedMeasuredHealth = value.embedMeasuredHealth;
      this._failtime = value.failtime;
      this._fortiguard = value.fortiguard;
      this._fortiguardName = value.fortiguardName;
      this._ftpFile = value.ftpFile;
      this._ftpMode = value.ftpMode;
      this._haPriority = value.haPriority;
      this._httpAgent = value.httpAgent;
      this._httpGet = value.httpGet;
      this._httpMatch = value.httpMatch;
      this._interval = value.interval;
      this._members = value.members;
      this._mosCodec = value.mosCodec;
      this._name = value.name;
      this._packetSize = value.packetSize;
      this._password = value.password;
      this._port = value.port;
      this._probeCount = value.probeCount;
      this._probePackets = value.probePackets;
      this._probeTimeout = value.probeTimeout;
      this._protocol = value.protocol;
      this._qualityMeasuredMethod = value.qualityMeasuredMethod;
      this._recoverytime = value.recoverytime;
      this._securityMode = value.securityMode;
      this._server = value.server;
      this._slaFailLogPeriod = value.slaFailLogPeriod;
      this._slaIdRedistribute = value.slaIdRedistribute;
      this._slaPassLogPeriod = value.slaPassLogPeriod;
      this._source = value.source;
      this._source6 = value.source6;
      this._systemDns = value.systemDns;
      this._thresholdAlertJitter = value.thresholdAlertJitter;
      this._thresholdAlertLatency = value.thresholdAlertLatency;
      this._thresholdAlertPacketloss = value.thresholdAlertPacketloss;
      this._thresholdWarningJitter = value.thresholdWarningJitter;
      this._thresholdWarningLatency = value.thresholdWarningLatency;
      this._thresholdWarningPacketloss = value.thresholdWarningPacketloss;
      this._updateCascadeInterface = value.updateCascadeInterface;
      this._updateStaticRoute = value.updateStaticRoute;
      this._user = value.user;
      this._vrf = value.vrf;
      this._sla.internalValue = value.sla;
    }
  }

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string[]; 
  public get classId() {
    return cdktf.Fn.tolist(this.getListAttribute('class_id'));
  }
  public set classId(value: string[]) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // detect_mode - computed: true, optional: true, required: false
  private _detectMode?: string; 
  public get detectMode() {
    return this.getStringAttribute('detect_mode');
  }
  public set detectMode(value: string) {
    this._detectMode = value;
  }
  public resetDetectMode() {
    this._detectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectModeInput() {
    return this._detectMode;
  }

  // diffservcode - computed: true, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // dns_match_ip - computed: true, optional: true, required: false
  private _dnsMatchIp?: string; 
  public get dnsMatchIp() {
    return this.getStringAttribute('dns_match_ip');
  }
  public set dnsMatchIp(value: string) {
    this._dnsMatchIp = value;
  }
  public resetDnsMatchIp() {
    this._dnsMatchIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMatchIpInput() {
    return this._dnsMatchIp;
  }

  // dns_request_domain - computed: true, optional: true, required: false
  private _dnsRequestDomain?: string; 
  public get dnsRequestDomain() {
    return this.getStringAttribute('dns_request_domain');
  }
  public set dnsRequestDomain(value: string) {
    this._dnsRequestDomain = value;
  }
  public resetDnsRequestDomain() {
    this._dnsRequestDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestDomainInput() {
    return this._dnsRequestDomain;
  }

  // embed_measured_health - computed: true, optional: true, required: false
  private _embedMeasuredHealth?: string; 
  public get embedMeasuredHealth() {
    return this.getStringAttribute('embed_measured_health');
  }
  public set embedMeasuredHealth(value: string) {
    this._embedMeasuredHealth = value;
  }
  public resetEmbedMeasuredHealth() {
    this._embedMeasuredHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedMeasuredHealthInput() {
    return this._embedMeasuredHealth;
  }

  // failtime - computed: true, optional: true, required: false
  private _failtime?: number; 
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }
  public set failtime(value: number) {
    this._failtime = value;
  }
  public resetFailtime() {
    this._failtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failtimeInput() {
    return this._failtime;
  }

  // fortiguard - computed: true, optional: true, required: false
  private _fortiguard?: string; 
  public get fortiguard() {
    return this.getStringAttribute('fortiguard');
  }
  public set fortiguard(value: string) {
    this._fortiguard = value;
  }
  public resetFortiguard() {
    this._fortiguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardInput() {
    return this._fortiguard;
  }

  // fortiguard_name - computed: true, optional: true, required: false
  private _fortiguardName?: string[]; 
  public get fortiguardName() {
    return cdktf.Fn.tolist(this.getListAttribute('fortiguard_name'));
  }
  public set fortiguardName(value: string[]) {
    this._fortiguardName = value;
  }
  public resetFortiguardName() {
    this._fortiguardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardNameInput() {
    return this._fortiguardName;
  }

  // ftp_file - computed: false, optional: true, required: false
  private _ftpFile?: string; 
  public get ftpFile() {
    return this.getStringAttribute('ftp_file');
  }
  public set ftpFile(value: string) {
    this._ftpFile = value;
  }
  public resetFtpFile() {
    this._ftpFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpFileInput() {
    return this._ftpFile;
  }

  // ftp_mode - computed: true, optional: true, required: false
  private _ftpMode?: string; 
  public get ftpMode() {
    return this.getStringAttribute('ftp_mode');
  }
  public set ftpMode(value: string) {
    this._ftpMode = value;
  }
  public resetFtpMode() {
    this._ftpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpModeInput() {
    return this._ftpMode;
  }

  // ha_priority - computed: true, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
  }

  // http_agent - computed: true, optional: true, required: false
  private _httpAgent?: string; 
  public get httpAgent() {
    return this.getStringAttribute('http_agent');
  }
  public set httpAgent(value: string) {
    this._httpAgent = value;
  }
  public resetHttpAgent() {
    this._httpAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAgentInput() {
    return this._httpAgent;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: string; 
  public get httpGet() {
    return this.getStringAttribute('http_get');
  }
  public set httpGet(value: string) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch?: string; 
  public get httpMatch() {
    return this.getStringAttribute('http_match');
  }
  public set httpMatch(value: string) {
    this._httpMatch = value;
  }
  public resetHttpMatch() {
    this._httpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch;
  }

  // interval - computed: true, optional: true, required: false
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

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // mos_codec - computed: true, optional: true, required: false
  private _mosCodec?: string; 
  public get mosCodec() {
    return this.getStringAttribute('mos_codec');
  }
  public set mosCodec(value: string) {
    this._mosCodec = value;
  }
  public resetMosCodec() {
    this._mosCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosCodecInput() {
    return this._mosCodec;
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

  // packet_size - computed: false, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // probe_count - computed: true, optional: true, required: false
  private _probeCount?: number; 
  public get probeCount() {
    return this.getNumberAttribute('probe_count');
  }
  public set probeCount(value: number) {
    this._probeCount = value;
  }
  public resetProbeCount() {
    this._probeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeCountInput() {
    return this._probeCount;
  }

  // probe_packets - computed: true, optional: true, required: false
  private _probePackets?: string; 
  public get probePackets() {
    return this.getStringAttribute('probe_packets');
  }
  public set probePackets(value: string) {
    this._probePackets = value;
  }
  public resetProbePackets() {
    this._probePackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePacketsInput() {
    return this._probePackets;
  }

  // probe_timeout - computed: true, optional: true, required: false
  private _probeTimeout?: number; 
  public get probeTimeout() {
    return this.getNumberAttribute('probe_timeout');
  }
  public set probeTimeout(value: number) {
    this._probeTimeout = value;
  }
  public resetProbeTimeout() {
    this._probeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // quality_measured_method - computed: true, optional: true, required: false
  private _qualityMeasuredMethod?: string; 
  public get qualityMeasuredMethod() {
    return this.getStringAttribute('quality_measured_method');
  }
  public set qualityMeasuredMethod(value: string) {
    this._qualityMeasuredMethod = value;
  }
  public resetQualityMeasuredMethod() {
    this._qualityMeasuredMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityMeasuredMethodInput() {
    return this._qualityMeasuredMethod;
  }

  // recoverytime - computed: true, optional: true, required: false
  private _recoverytime?: number; 
  public get recoverytime() {
    return this.getNumberAttribute('recoverytime');
  }
  public set recoverytime(value: number) {
    this._recoverytime = value;
  }
  public resetRecoverytime() {
    this._recoverytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverytimeInput() {
    return this._recoverytime;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string[]; 
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }
  public set server(value: string[]) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // sla_fail_log_period - computed: false, optional: true, required: false
  private _slaFailLogPeriod?: number; 
  public get slaFailLogPeriod() {
    return this.getNumberAttribute('sla_fail_log_period');
  }
  public set slaFailLogPeriod(value: number) {
    this._slaFailLogPeriod = value;
  }
  public resetSlaFailLogPeriod() {
    this._slaFailLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaFailLogPeriodInput() {
    return this._slaFailLogPeriod;
  }

  // sla_id_redistribute - computed: false, optional: true, required: false
  private _slaIdRedistribute?: number; 
  public get slaIdRedistribute() {
    return this.getNumberAttribute('sla_id_redistribute');
  }
  public set slaIdRedistribute(value: number) {
    this._slaIdRedistribute = value;
  }
  public resetSlaIdRedistribute() {
    this._slaIdRedistribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdRedistributeInput() {
    return this._slaIdRedistribute;
  }

  // sla_pass_log_period - computed: false, optional: true, required: false
  private _slaPassLogPeriod?: number; 
  public get slaPassLogPeriod() {
    return this.getNumberAttribute('sla_pass_log_period');
  }
  public set slaPassLogPeriod(value: number) {
    this._slaPassLogPeriod = value;
  }
  public resetSlaPassLogPeriod() {
    this._slaPassLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaPassLogPeriodInput() {
    return this._slaPassLogPeriod;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source6 - computed: false, optional: true, required: false
  private _source6?: string; 
  public get source6() {
    return this.getStringAttribute('source6');
  }
  public set source6(value: string) {
    this._source6 = value;
  }
  public resetSource6() {
    this._source6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source6Input() {
    return this._source6;
  }

  // system_dns - computed: true, optional: true, required: false
  private _systemDns?: string; 
  public get systemDns() {
    return this.getStringAttribute('system_dns');
  }
  public set systemDns(value: string) {
    this._systemDns = value;
  }
  public resetSystemDns() {
    this._systemDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDnsInput() {
    return this._systemDns;
  }

  // threshold_alert_jitter - computed: false, optional: true, required: false
  private _thresholdAlertJitter?: number; 
  public get thresholdAlertJitter() {
    return this.getNumberAttribute('threshold_alert_jitter');
  }
  public set thresholdAlertJitter(value: number) {
    this._thresholdAlertJitter = value;
  }
  public resetThresholdAlertJitter() {
    this._thresholdAlertJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertJitterInput() {
    return this._thresholdAlertJitter;
  }

  // threshold_alert_latency - computed: false, optional: true, required: false
  private _thresholdAlertLatency?: number; 
  public get thresholdAlertLatency() {
    return this.getNumberAttribute('threshold_alert_latency');
  }
  public set thresholdAlertLatency(value: number) {
    this._thresholdAlertLatency = value;
  }
  public resetThresholdAlertLatency() {
    this._thresholdAlertLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertLatencyInput() {
    return this._thresholdAlertLatency;
  }

  // threshold_alert_packetloss - computed: false, optional: true, required: false
  private _thresholdAlertPacketloss?: number; 
  public get thresholdAlertPacketloss() {
    return this.getNumberAttribute('threshold_alert_packetloss');
  }
  public set thresholdAlertPacketloss(value: number) {
    this._thresholdAlertPacketloss = value;
  }
  public resetThresholdAlertPacketloss() {
    this._thresholdAlertPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertPacketlossInput() {
    return this._thresholdAlertPacketloss;
  }

  // threshold_warning_jitter - computed: false, optional: true, required: false
  private _thresholdWarningJitter?: number; 
  public get thresholdWarningJitter() {
    return this.getNumberAttribute('threshold_warning_jitter');
  }
  public set thresholdWarningJitter(value: number) {
    this._thresholdWarningJitter = value;
  }
  public resetThresholdWarningJitter() {
    this._thresholdWarningJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningJitterInput() {
    return this._thresholdWarningJitter;
  }

  // threshold_warning_latency - computed: false, optional: true, required: false
  private _thresholdWarningLatency?: number; 
  public get thresholdWarningLatency() {
    return this.getNumberAttribute('threshold_warning_latency');
  }
  public set thresholdWarningLatency(value: number) {
    this._thresholdWarningLatency = value;
  }
  public resetThresholdWarningLatency() {
    this._thresholdWarningLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningLatencyInput() {
    return this._thresholdWarningLatency;
  }

  // threshold_warning_packetloss - computed: false, optional: true, required: false
  private _thresholdWarningPacketloss?: number; 
  public get thresholdWarningPacketloss() {
    return this.getNumberAttribute('threshold_warning_packetloss');
  }
  public set thresholdWarningPacketloss(value: number) {
    this._thresholdWarningPacketloss = value;
  }
  public resetThresholdWarningPacketloss() {
    this._thresholdWarningPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningPacketlossInput() {
    return this._thresholdWarningPacketloss;
  }

  // update_cascade_interface - computed: true, optional: true, required: false
  private _updateCascadeInterface?: string; 
  public get updateCascadeInterface() {
    return this.getStringAttribute('update_cascade_interface');
  }
  public set updateCascadeInterface(value: string) {
    this._updateCascadeInterface = value;
  }
  public resetUpdateCascadeInterface() {
    this._updateCascadeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCascadeInterfaceInput() {
    return this._updateCascadeInterface;
  }

  // update_static_route - computed: true, optional: true, required: false
  private _updateStaticRoute?: string; 
  public get updateStaticRoute() {
    return this.getStringAttribute('update_static_route');
  }
  public set updateStaticRoute(value: string) {
    this._updateStaticRoute = value;
  }
  public resetUpdateStaticRoute() {
    this._updateStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStaticRouteInput() {
    return this._updateStaticRoute;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new SystemSdwanHealthCheckSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: SystemSdwanHealthCheckSla[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }
}

export class SystemSdwanHealthCheckList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanHealthCheck[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanHealthCheckOutputReference {
    return new SystemSdwanHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanHealthCheckFortiguardSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#id SystemSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#jitter_threshold SystemSdwan#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#latency_threshold SystemSdwan#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#link_cost_factor SystemSdwan#link_cost_factor}
  */
  readonly linkCostFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#mos_threshold SystemSdwan#mos_threshold}
  */
  readonly mosThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#packetloss_threshold SystemSdwan#packetloss_threshold}
  */
  readonly packetlossThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_in_sla SystemSdwan#priority_in_sla}
  */
  readonly priorityInSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_out_sla SystemSdwan#priority_out_sla}
  */
  readonly priorityOutSla?: number;
}

export function systemSdwanHealthCheckFortiguardSlaToTerraform(struct?: SystemSdwanHealthCheckFortiguardSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    jitter_threshold: cdktf.numberToTerraform(struct!.jitterThreshold),
    latency_threshold: cdktf.numberToTerraform(struct!.latencyThreshold),
    link_cost_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.linkCostFactor),
    mos_threshold: cdktf.stringToTerraform(struct!.mosThreshold),
    packetloss_threshold: cdktf.numberToTerraform(struct!.packetlossThreshold),
    priority_in_sla: cdktf.numberToTerraform(struct!.priorityInSla),
    priority_out_sla: cdktf.numberToTerraform(struct!.priorityOutSla),
  }
}


export function systemSdwanHealthCheckFortiguardSlaToHclTerraform(struct?: SystemSdwanHealthCheckFortiguardSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.jitterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_threshold: {
      value: cdktf.numberToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_factor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.linkCostFactor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mos_threshold: {
      value: cdktf.stringToHclTerraform(struct!.mosThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packetloss_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packetlossThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_in_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityInSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_out_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityOutSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanHealthCheckFortiguardSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanHealthCheckFortiguardSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._jitterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterThreshold = this._jitterThreshold;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    if (this._linkCostFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostFactor = this._linkCostFactor;
    }
    if (this._mosThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.mosThreshold = this._mosThreshold;
    }
    if (this._packetlossThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetlossThreshold = this._packetlossThreshold;
    }
    if (this._priorityInSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityInSla = this._priorityInSla;
    }
    if (this._priorityOutSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOutSla = this._priorityOutSla;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanHealthCheckFortiguardSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._jitterThreshold = undefined;
      this._latencyThreshold = undefined;
      this._linkCostFactor = undefined;
      this._mosThreshold = undefined;
      this._packetlossThreshold = undefined;
      this._priorityInSla = undefined;
      this._priorityOutSla = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._jitterThreshold = value.jitterThreshold;
      this._latencyThreshold = value.latencyThreshold;
      this._linkCostFactor = value.linkCostFactor;
      this._mosThreshold = value.mosThreshold;
      this._packetlossThreshold = value.packetlossThreshold;
      this._priorityInSla = value.priorityInSla;
      this._priorityOutSla = value.priorityOutSla;
    }
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

  // jitter_threshold - computed: true, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: true, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // link_cost_factor - computed: true, optional: true, required: false
  private _linkCostFactor?: string[]; 
  public get linkCostFactor() {
    return cdktf.Fn.tolist(this.getListAttribute('link_cost_factor'));
  }
  public set linkCostFactor(value: string[]) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // mos_threshold - computed: true, optional: true, required: false
  private _mosThreshold?: string; 
  public get mosThreshold() {
    return this.getStringAttribute('mos_threshold');
  }
  public set mosThreshold(value: string) {
    this._mosThreshold = value;
  }
  public resetMosThreshold() {
    this._mosThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosThresholdInput() {
    return this._mosThreshold;
  }

  // packetloss_threshold - computed: false, optional: true, required: false
  private _packetlossThreshold?: number; 
  public get packetlossThreshold() {
    return this.getNumberAttribute('packetloss_threshold');
  }
  public set packetlossThreshold(value: number) {
    this._packetlossThreshold = value;
  }
  public resetPacketlossThreshold() {
    this._packetlossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetlossThresholdInput() {
    return this._packetlossThreshold;
  }

  // priority_in_sla - computed: false, optional: true, required: false
  private _priorityInSla?: number; 
  public get priorityInSla() {
    return this.getNumberAttribute('priority_in_sla');
  }
  public set priorityInSla(value: number) {
    this._priorityInSla = value;
  }
  public resetPriorityInSla() {
    this._priorityInSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInSlaInput() {
    return this._priorityInSla;
  }

  // priority_out_sla - computed: false, optional: true, required: false
  private _priorityOutSla?: number; 
  public get priorityOutSla() {
    return this.getNumberAttribute('priority_out_sla');
  }
  public set priorityOutSla(value: number) {
    this._priorityOutSla = value;
  }
  public resetPriorityOutSla() {
    this._priorityOutSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOutSlaInput() {
    return this._priorityOutSla;
  }
}

export class SystemSdwanHealthCheckFortiguardSlaList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanHealthCheckFortiguardSla[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanHealthCheckFortiguardSlaOutputReference {
    return new SystemSdwanHealthCheckFortiguardSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanHealthCheckFortiguard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#addr_mode SystemSdwan#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#class_id SystemSdwan#class_id}
  */
  readonly classId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#detect_mode SystemSdwan#detect_mode}
  */
  readonly detectMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#diffservcode SystemSdwan#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dns_match_ip SystemSdwan#dns_match_ip}
  */
  readonly dnsMatchIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dns_request_domain SystemSdwan#dns_request_domain}
  */
  readonly dnsRequestDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#embed_measured_health SystemSdwan#embed_measured_health}
  */
  readonly embedMeasuredHealth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#failtime SystemSdwan#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ftp_file SystemSdwan#ftp_file}
  */
  readonly ftpFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ftp_mode SystemSdwan#ftp_mode}
  */
  readonly ftpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ha_priority SystemSdwan#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#http_agent SystemSdwan#http_agent}
  */
  readonly httpAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#http_get SystemSdwan#http_get}
  */
  readonly httpGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#http_match SystemSdwan#http_match}
  */
  readonly httpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#interval SystemSdwan#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#members SystemSdwan#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#mos_codec SystemSdwan#mos_codec}
  */
  readonly mosCodec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#packet_size SystemSdwan#packet_size}
  */
  readonly packetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#password SystemSdwan#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#port SystemSdwan#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#probe_count SystemSdwan#probe_count}
  */
  readonly probeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#probe_packets SystemSdwan#probe_packets}
  */
  readonly probePackets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#probe_timeout SystemSdwan#probe_timeout}
  */
  readonly probeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#protocol SystemSdwan#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#quality_measured_method SystemSdwan#quality_measured_method}
  */
  readonly qualityMeasuredMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#recoverytime SystemSdwan#recoverytime}
  */
  readonly recoverytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#security_mode SystemSdwan#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#server SystemSdwan#server}
  */
  readonly server?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_fail_log_period SystemSdwan#sla_fail_log_period}
  */
  readonly slaFailLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_id_redistribute SystemSdwan#sla_id_redistribute}
  */
  readonly slaIdRedistribute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_pass_log_period SystemSdwan#sla_pass_log_period}
  */
  readonly slaPassLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#source SystemSdwan#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#source6 SystemSdwan#source6}
  */
  readonly source6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#system_dns SystemSdwan#system_dns}
  */
  readonly systemDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#target_name SystemSdwan#target_name}
  */
  readonly targetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_alert_jitter SystemSdwan#threshold_alert_jitter}
  */
  readonly thresholdAlertJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_alert_latency SystemSdwan#threshold_alert_latency}
  */
  readonly thresholdAlertLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_alert_packetloss SystemSdwan#threshold_alert_packetloss}
  */
  readonly thresholdAlertPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_warning_jitter SystemSdwan#threshold_warning_jitter}
  */
  readonly thresholdWarningJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_warning_latency SystemSdwan#threshold_warning_latency}
  */
  readonly thresholdWarningLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#threshold_warning_packetloss SystemSdwan#threshold_warning_packetloss}
  */
  readonly thresholdWarningPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#update_cascade_interface SystemSdwan#update_cascade_interface}
  */
  readonly updateCascadeInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#update_static_route SystemSdwan#update_static_route}
  */
  readonly updateStaticRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#user SystemSdwan#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#vrf SystemSdwan#vrf}
  */
  readonly vrf?: number;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla SystemSdwan#sla}
  */
  readonly sla?: SystemSdwanHealthCheckFortiguardSla[] | cdktf.IResolvable;
}

export function systemSdwanHealthCheckFortiguardToTerraform(struct?: SystemSdwanHealthCheckFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    class_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classId),
    detect_mode: cdktf.stringToTerraform(struct!.detectMode),
    diffservcode: cdktf.stringToTerraform(struct!.diffservcode),
    dns_match_ip: cdktf.stringToTerraform(struct!.dnsMatchIp),
    dns_request_domain: cdktf.stringToTerraform(struct!.dnsRequestDomain),
    embed_measured_health: cdktf.stringToTerraform(struct!.embedMeasuredHealth),
    failtime: cdktf.numberToTerraform(struct!.failtime),
    ftp_file: cdktf.stringToTerraform(struct!.ftpFile),
    ftp_mode: cdktf.stringToTerraform(struct!.ftpMode),
    ha_priority: cdktf.numberToTerraform(struct!.haPriority),
    http_agent: cdktf.stringToTerraform(struct!.httpAgent),
    http_get: cdktf.stringToTerraform(struct!.httpGet),
    http_match: cdktf.stringToTerraform(struct!.httpMatch),
    interval: cdktf.numberToTerraform(struct!.interval),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    mos_codec: cdktf.stringToTerraform(struct!.mosCodec),
    packet_size: cdktf.numberToTerraform(struct!.packetSize),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    probe_count: cdktf.numberToTerraform(struct!.probeCount),
    probe_packets: cdktf.stringToTerraform(struct!.probePackets),
    probe_timeout: cdktf.numberToTerraform(struct!.probeTimeout),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    quality_measured_method: cdktf.stringToTerraform(struct!.qualityMeasuredMethod),
    recoverytime: cdktf.numberToTerraform(struct!.recoverytime),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.server),
    sla_fail_log_period: cdktf.numberToTerraform(struct!.slaFailLogPeriod),
    sla_id_redistribute: cdktf.numberToTerraform(struct!.slaIdRedistribute),
    sla_pass_log_period: cdktf.numberToTerraform(struct!.slaPassLogPeriod),
    source: cdktf.stringToTerraform(struct!.source),
    source6: cdktf.stringToTerraform(struct!.source6),
    system_dns: cdktf.stringToTerraform(struct!.systemDns),
    target_name: cdktf.stringToTerraform(struct!.targetName),
    threshold_alert_jitter: cdktf.numberToTerraform(struct!.thresholdAlertJitter),
    threshold_alert_latency: cdktf.numberToTerraform(struct!.thresholdAlertLatency),
    threshold_alert_packetloss: cdktf.numberToTerraform(struct!.thresholdAlertPacketloss),
    threshold_warning_jitter: cdktf.numberToTerraform(struct!.thresholdWarningJitter),
    threshold_warning_latency: cdktf.numberToTerraform(struct!.thresholdWarningLatency),
    threshold_warning_packetloss: cdktf.numberToTerraform(struct!.thresholdWarningPacketloss),
    update_cascade_interface: cdktf.stringToTerraform(struct!.updateCascadeInterface),
    update_static_route: cdktf.stringToTerraform(struct!.updateStaticRoute),
    user: cdktf.stringToTerraform(struct!.user),
    vrf: cdktf.numberToTerraform(struct!.vrf),
    sla: cdktf.listMapper(systemSdwanHealthCheckFortiguardSlaToTerraform, true)(struct!.sla),
  }
}


export function systemSdwanHealthCheckFortiguardToHclTerraform(struct?: SystemSdwanHealthCheckFortiguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detect_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diffservcode: {
      value: cdktf.stringToHclTerraform(struct!.diffservcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_match_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsMatchIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_request_domain: {
      value: cdktf.stringToHclTerraform(struct!.dnsRequestDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embed_measured_health: {
      value: cdktf.stringToHclTerraform(struct!.embedMeasuredHealth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failtime: {
      value: cdktf.numberToHclTerraform(struct!.failtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ftp_file: {
      value: cdktf.stringToHclTerraform(struct!.ftpFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_mode: {
      value: cdktf.stringToHclTerraform(struct!.ftpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_priority: {
      value: cdktf.numberToHclTerraform(struct!.haPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_agent: {
      value: cdktf.stringToHclTerraform(struct!.httpAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get: {
      value: cdktf.stringToHclTerraform(struct!.httpGet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_match: {
      value: cdktf.stringToHclTerraform(struct!.httpMatch),
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
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mos_codec: {
      value: cdktf.stringToHclTerraform(struct!.mosCodec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_size: {
      value: cdktf.numberToHclTerraform(struct!.packetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_count: {
      value: cdktf.numberToHclTerraform(struct!.probeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_packets: {
      value: cdktf.stringToHclTerraform(struct!.probePackets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_timeout: {
      value: cdktf.numberToHclTerraform(struct!.probeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quality_measured_method: {
      value: cdktf.stringToHclTerraform(struct!.qualityMeasuredMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recoverytime: {
      value: cdktf.numberToHclTerraform(struct!.recoverytime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.server),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sla_fail_log_period: {
      value: cdktf.numberToHclTerraform(struct!.slaFailLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_id_redistribute: {
      value: cdktf.numberToHclTerraform(struct!.slaIdRedistribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_pass_log_period: {
      value: cdktf.numberToHclTerraform(struct!.slaPassLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source6: {
      value: cdktf.stringToHclTerraform(struct!.source6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_dns: {
      value: cdktf.stringToHclTerraform(struct!.systemDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_alert_jitter: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_alert_latency: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_alert_packetloss: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertPacketloss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_jitter: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_latency: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_packetloss: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningPacketloss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_cascade_interface: {
      value: cdktf.stringToHclTerraform(struct!.updateCascadeInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_static_route: {
      value: cdktf.stringToHclTerraform(struct!.updateStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.numberToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla: {
      value: cdktf.listMapperHcl(systemSdwanHealthCheckFortiguardSlaToHclTerraform, true)(struct!.sla),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSdwanHealthCheckFortiguardSlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanHealthCheckFortiguardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanHealthCheckFortiguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._detectMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectMode = this._detectMode;
    }
    if (this._diffservcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffservcode = this._diffservcode;
    }
    if (this._dnsMatchIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMatchIp = this._dnsMatchIp;
    }
    if (this._dnsRequestDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRequestDomain = this._dnsRequestDomain;
    }
    if (this._embedMeasuredHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.embedMeasuredHealth = this._embedMeasuredHealth;
    }
    if (this._failtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.failtime = this._failtime;
    }
    if (this._ftpFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpFile = this._ftpFile;
    }
    if (this._ftpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpMode = this._ftpMode;
    }
    if (this._haPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.haPriority = this._haPriority;
    }
    if (this._httpAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAgent = this._httpAgent;
    }
    if (this._httpGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet;
    }
    if (this._httpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMatch = this._httpMatch;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._mosCodec !== undefined) {
      hasAnyValues = true;
      internalValueResult.mosCodec = this._mosCodec;
    }
    if (this._packetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSize = this._packetSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._probeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeCount = this._probeCount;
    }
    if (this._probePackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.probePackets = this._probePackets;
    }
    if (this._probeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTimeout = this._probeTimeout;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._qualityMeasuredMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualityMeasuredMethod = this._qualityMeasuredMethod;
    }
    if (this._recoverytime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverytime = this._recoverytime;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._slaFailLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaFailLogPeriod = this._slaFailLogPeriod;
    }
    if (this._slaIdRedistribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaIdRedistribute = this._slaIdRedistribute;
    }
    if (this._slaPassLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaPassLogPeriod = this._slaPassLogPeriod;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._source6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.source6 = this._source6;
    }
    if (this._systemDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDns = this._systemDns;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._thresholdAlertJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertJitter = this._thresholdAlertJitter;
    }
    if (this._thresholdAlertLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertLatency = this._thresholdAlertLatency;
    }
    if (this._thresholdAlertPacketloss !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertPacketloss = this._thresholdAlertPacketloss;
    }
    if (this._thresholdWarningJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningJitter = this._thresholdWarningJitter;
    }
    if (this._thresholdWarningLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningLatency = this._thresholdWarningLatency;
    }
    if (this._thresholdWarningPacketloss !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningPacketloss = this._thresholdWarningPacketloss;
    }
    if (this._updateCascadeInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateCascadeInterface = this._updateCascadeInterface;
    }
    if (this._updateStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStaticRoute = this._updateStaticRoute;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._sla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanHealthCheckFortiguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrMode = undefined;
      this._classId = undefined;
      this._detectMode = undefined;
      this._diffservcode = undefined;
      this._dnsMatchIp = undefined;
      this._dnsRequestDomain = undefined;
      this._embedMeasuredHealth = undefined;
      this._failtime = undefined;
      this._ftpFile = undefined;
      this._ftpMode = undefined;
      this._haPriority = undefined;
      this._httpAgent = undefined;
      this._httpGet = undefined;
      this._httpMatch = undefined;
      this._interval = undefined;
      this._members = undefined;
      this._mosCodec = undefined;
      this._packetSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._probeCount = undefined;
      this._probePackets = undefined;
      this._probeTimeout = undefined;
      this._protocol = undefined;
      this._qualityMeasuredMethod = undefined;
      this._recoverytime = undefined;
      this._securityMode = undefined;
      this._server = undefined;
      this._slaFailLogPeriod = undefined;
      this._slaIdRedistribute = undefined;
      this._slaPassLogPeriod = undefined;
      this._source = undefined;
      this._source6 = undefined;
      this._systemDns = undefined;
      this._targetName = undefined;
      this._thresholdAlertJitter = undefined;
      this._thresholdAlertLatency = undefined;
      this._thresholdAlertPacketloss = undefined;
      this._thresholdWarningJitter = undefined;
      this._thresholdWarningLatency = undefined;
      this._thresholdWarningPacketloss = undefined;
      this._updateCascadeInterface = undefined;
      this._updateStaticRoute = undefined;
      this._user = undefined;
      this._vrf = undefined;
      this._sla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrMode = value.addrMode;
      this._classId = value.classId;
      this._detectMode = value.detectMode;
      this._diffservcode = value.diffservcode;
      this._dnsMatchIp = value.dnsMatchIp;
      this._dnsRequestDomain = value.dnsRequestDomain;
      this._embedMeasuredHealth = value.embedMeasuredHealth;
      this._failtime = value.failtime;
      this._ftpFile = value.ftpFile;
      this._ftpMode = value.ftpMode;
      this._haPriority = value.haPriority;
      this._httpAgent = value.httpAgent;
      this._httpGet = value.httpGet;
      this._httpMatch = value.httpMatch;
      this._interval = value.interval;
      this._members = value.members;
      this._mosCodec = value.mosCodec;
      this._packetSize = value.packetSize;
      this._password = value.password;
      this._port = value.port;
      this._probeCount = value.probeCount;
      this._probePackets = value.probePackets;
      this._probeTimeout = value.probeTimeout;
      this._protocol = value.protocol;
      this._qualityMeasuredMethod = value.qualityMeasuredMethod;
      this._recoverytime = value.recoverytime;
      this._securityMode = value.securityMode;
      this._server = value.server;
      this._slaFailLogPeriod = value.slaFailLogPeriod;
      this._slaIdRedistribute = value.slaIdRedistribute;
      this._slaPassLogPeriod = value.slaPassLogPeriod;
      this._source = value.source;
      this._source6 = value.source6;
      this._systemDns = value.systemDns;
      this._targetName = value.targetName;
      this._thresholdAlertJitter = value.thresholdAlertJitter;
      this._thresholdAlertLatency = value.thresholdAlertLatency;
      this._thresholdAlertPacketloss = value.thresholdAlertPacketloss;
      this._thresholdWarningJitter = value.thresholdWarningJitter;
      this._thresholdWarningLatency = value.thresholdWarningLatency;
      this._thresholdWarningPacketloss = value.thresholdWarningPacketloss;
      this._updateCascadeInterface = value.updateCascadeInterface;
      this._updateStaticRoute = value.updateStaticRoute;
      this._user = value.user;
      this._vrf = value.vrf;
      this._sla.internalValue = value.sla;
    }
  }

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string[]; 
  public get classId() {
    return cdktf.Fn.tolist(this.getListAttribute('class_id'));
  }
  public set classId(value: string[]) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // detect_mode - computed: true, optional: true, required: false
  private _detectMode?: string; 
  public get detectMode() {
    return this.getStringAttribute('detect_mode');
  }
  public set detectMode(value: string) {
    this._detectMode = value;
  }
  public resetDetectMode() {
    this._detectMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectModeInput() {
    return this._detectMode;
  }

  // diffservcode - computed: true, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // dns_match_ip - computed: true, optional: true, required: false
  private _dnsMatchIp?: string; 
  public get dnsMatchIp() {
    return this.getStringAttribute('dns_match_ip');
  }
  public set dnsMatchIp(value: string) {
    this._dnsMatchIp = value;
  }
  public resetDnsMatchIp() {
    this._dnsMatchIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMatchIpInput() {
    return this._dnsMatchIp;
  }

  // dns_request_domain - computed: true, optional: true, required: false
  private _dnsRequestDomain?: string; 
  public get dnsRequestDomain() {
    return this.getStringAttribute('dns_request_domain');
  }
  public set dnsRequestDomain(value: string) {
    this._dnsRequestDomain = value;
  }
  public resetDnsRequestDomain() {
    this._dnsRequestDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRequestDomainInput() {
    return this._dnsRequestDomain;
  }

  // embed_measured_health - computed: true, optional: true, required: false
  private _embedMeasuredHealth?: string; 
  public get embedMeasuredHealth() {
    return this.getStringAttribute('embed_measured_health');
  }
  public set embedMeasuredHealth(value: string) {
    this._embedMeasuredHealth = value;
  }
  public resetEmbedMeasuredHealth() {
    this._embedMeasuredHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedMeasuredHealthInput() {
    return this._embedMeasuredHealth;
  }

  // failtime - computed: true, optional: true, required: false
  private _failtime?: number; 
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }
  public set failtime(value: number) {
    this._failtime = value;
  }
  public resetFailtime() {
    this._failtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failtimeInput() {
    return this._failtime;
  }

  // ftp_file - computed: false, optional: true, required: false
  private _ftpFile?: string; 
  public get ftpFile() {
    return this.getStringAttribute('ftp_file');
  }
  public set ftpFile(value: string) {
    this._ftpFile = value;
  }
  public resetFtpFile() {
    this._ftpFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpFileInput() {
    return this._ftpFile;
  }

  // ftp_mode - computed: true, optional: true, required: false
  private _ftpMode?: string; 
  public get ftpMode() {
    return this.getStringAttribute('ftp_mode');
  }
  public set ftpMode(value: string) {
    this._ftpMode = value;
  }
  public resetFtpMode() {
    this._ftpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpModeInput() {
    return this._ftpMode;
  }

  // ha_priority - computed: true, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
  }

  // http_agent - computed: true, optional: true, required: false
  private _httpAgent?: string; 
  public get httpAgent() {
    return this.getStringAttribute('http_agent');
  }
  public set httpAgent(value: string) {
    this._httpAgent = value;
  }
  public resetHttpAgent() {
    this._httpAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAgentInput() {
    return this._httpAgent;
  }

  // http_get - computed: true, optional: true, required: false
  private _httpGet?: string; 
  public get httpGet() {
    return this.getStringAttribute('http_get');
  }
  public set httpGet(value: string) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch?: string; 
  public get httpMatch() {
    return this.getStringAttribute('http_match');
  }
  public set httpMatch(value: string) {
    this._httpMatch = value;
  }
  public resetHttpMatch() {
    this._httpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch;
  }

  // interval - computed: true, optional: true, required: false
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

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // mos_codec - computed: true, optional: true, required: false
  private _mosCodec?: string; 
  public get mosCodec() {
    return this.getStringAttribute('mos_codec');
  }
  public set mosCodec(value: string) {
    this._mosCodec = value;
  }
  public resetMosCodec() {
    this._mosCodec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mosCodecInput() {
    return this._mosCodec;
  }

  // packet_size - computed: true, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // probe_count - computed: true, optional: true, required: false
  private _probeCount?: number; 
  public get probeCount() {
    return this.getNumberAttribute('probe_count');
  }
  public set probeCount(value: number) {
    this._probeCount = value;
  }
  public resetProbeCount() {
    this._probeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeCountInput() {
    return this._probeCount;
  }

  // probe_packets - computed: true, optional: true, required: false
  private _probePackets?: string; 
  public get probePackets() {
    return this.getStringAttribute('probe_packets');
  }
  public set probePackets(value: string) {
    this._probePackets = value;
  }
  public resetProbePackets() {
    this._probePackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePacketsInput() {
    return this._probePackets;
  }

  // probe_timeout - computed: true, optional: true, required: false
  private _probeTimeout?: number; 
  public get probeTimeout() {
    return this.getNumberAttribute('probe_timeout');
  }
  public set probeTimeout(value: number) {
    this._probeTimeout = value;
  }
  public resetProbeTimeout() {
    this._probeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // quality_measured_method - computed: true, optional: true, required: false
  private _qualityMeasuredMethod?: string; 
  public get qualityMeasuredMethod() {
    return this.getStringAttribute('quality_measured_method');
  }
  public set qualityMeasuredMethod(value: string) {
    this._qualityMeasuredMethod = value;
  }
  public resetQualityMeasuredMethod() {
    this._qualityMeasuredMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityMeasuredMethodInput() {
    return this._qualityMeasuredMethod;
  }

  // recoverytime - computed: true, optional: true, required: false
  private _recoverytime?: number; 
  public get recoverytime() {
    return this.getNumberAttribute('recoverytime');
  }
  public set recoverytime(value: number) {
    this._recoverytime = value;
  }
  public resetRecoverytime() {
    this._recoverytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverytimeInput() {
    return this._recoverytime;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string[]; 
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }
  public set server(value: string[]) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // sla_fail_log_period - computed: false, optional: true, required: false
  private _slaFailLogPeriod?: number; 
  public get slaFailLogPeriod() {
    return this.getNumberAttribute('sla_fail_log_period');
  }
  public set slaFailLogPeriod(value: number) {
    this._slaFailLogPeriod = value;
  }
  public resetSlaFailLogPeriod() {
    this._slaFailLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaFailLogPeriodInput() {
    return this._slaFailLogPeriod;
  }

  // sla_id_redistribute - computed: false, optional: true, required: false
  private _slaIdRedistribute?: number; 
  public get slaIdRedistribute() {
    return this.getNumberAttribute('sla_id_redistribute');
  }
  public set slaIdRedistribute(value: number) {
    this._slaIdRedistribute = value;
  }
  public resetSlaIdRedistribute() {
    this._slaIdRedistribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdRedistributeInput() {
    return this._slaIdRedistribute;
  }

  // sla_pass_log_period - computed: false, optional: true, required: false
  private _slaPassLogPeriod?: number; 
  public get slaPassLogPeriod() {
    return this.getNumberAttribute('sla_pass_log_period');
  }
  public set slaPassLogPeriod(value: number) {
    this._slaPassLogPeriod = value;
  }
  public resetSlaPassLogPeriod() {
    this._slaPassLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaPassLogPeriodInput() {
    return this._slaPassLogPeriod;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source6 - computed: true, optional: true, required: false
  private _source6?: string; 
  public get source6() {
    return this.getStringAttribute('source6');
  }
  public set source6(value: string) {
    this._source6 = value;
  }
  public resetSource6() {
    this._source6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source6Input() {
    return this._source6;
  }

  // system_dns - computed: true, optional: true, required: false
  private _systemDns?: string; 
  public get systemDns() {
    return this.getStringAttribute('system_dns');
  }
  public set systemDns(value: string) {
    this._systemDns = value;
  }
  public resetSystemDns() {
    this._systemDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDnsInput() {
    return this._systemDns;
  }

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // threshold_alert_jitter - computed: false, optional: true, required: false
  private _thresholdAlertJitter?: number; 
  public get thresholdAlertJitter() {
    return this.getNumberAttribute('threshold_alert_jitter');
  }
  public set thresholdAlertJitter(value: number) {
    this._thresholdAlertJitter = value;
  }
  public resetThresholdAlertJitter() {
    this._thresholdAlertJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertJitterInput() {
    return this._thresholdAlertJitter;
  }

  // threshold_alert_latency - computed: false, optional: true, required: false
  private _thresholdAlertLatency?: number; 
  public get thresholdAlertLatency() {
    return this.getNumberAttribute('threshold_alert_latency');
  }
  public set thresholdAlertLatency(value: number) {
    this._thresholdAlertLatency = value;
  }
  public resetThresholdAlertLatency() {
    this._thresholdAlertLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertLatencyInput() {
    return this._thresholdAlertLatency;
  }

  // threshold_alert_packetloss - computed: false, optional: true, required: false
  private _thresholdAlertPacketloss?: number; 
  public get thresholdAlertPacketloss() {
    return this.getNumberAttribute('threshold_alert_packetloss');
  }
  public set thresholdAlertPacketloss(value: number) {
    this._thresholdAlertPacketloss = value;
  }
  public resetThresholdAlertPacketloss() {
    this._thresholdAlertPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertPacketlossInput() {
    return this._thresholdAlertPacketloss;
  }

  // threshold_warning_jitter - computed: false, optional: true, required: false
  private _thresholdWarningJitter?: number; 
  public get thresholdWarningJitter() {
    return this.getNumberAttribute('threshold_warning_jitter');
  }
  public set thresholdWarningJitter(value: number) {
    this._thresholdWarningJitter = value;
  }
  public resetThresholdWarningJitter() {
    this._thresholdWarningJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningJitterInput() {
    return this._thresholdWarningJitter;
  }

  // threshold_warning_latency - computed: false, optional: true, required: false
  private _thresholdWarningLatency?: number; 
  public get thresholdWarningLatency() {
    return this.getNumberAttribute('threshold_warning_latency');
  }
  public set thresholdWarningLatency(value: number) {
    this._thresholdWarningLatency = value;
  }
  public resetThresholdWarningLatency() {
    this._thresholdWarningLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningLatencyInput() {
    return this._thresholdWarningLatency;
  }

  // threshold_warning_packetloss - computed: false, optional: true, required: false
  private _thresholdWarningPacketloss?: number; 
  public get thresholdWarningPacketloss() {
    return this.getNumberAttribute('threshold_warning_packetloss');
  }
  public set thresholdWarningPacketloss(value: number) {
    this._thresholdWarningPacketloss = value;
  }
  public resetThresholdWarningPacketloss() {
    this._thresholdWarningPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningPacketlossInput() {
    return this._thresholdWarningPacketloss;
  }

  // update_cascade_interface - computed: true, optional: true, required: false
  private _updateCascadeInterface?: string; 
  public get updateCascadeInterface() {
    return this.getStringAttribute('update_cascade_interface');
  }
  public set updateCascadeInterface(value: string) {
    this._updateCascadeInterface = value;
  }
  public resetUpdateCascadeInterface() {
    this._updateCascadeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCascadeInterfaceInput() {
    return this._updateCascadeInterface;
  }

  // update_static_route - computed: true, optional: true, required: false
  private _updateStaticRoute?: string; 
  public get updateStaticRoute() {
    return this.getStringAttribute('update_static_route');
  }
  public set updateStaticRoute(value: string) {
    this._updateStaticRoute = value;
  }
  public resetUpdateStaticRoute() {
    this._updateStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStaticRouteInput() {
    return this._updateStaticRoute;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new SystemSdwanHealthCheckFortiguardSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: SystemSdwanHealthCheckFortiguardSla[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }
}

export class SystemSdwanHealthCheckFortiguardList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanHealthCheckFortiguard[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanHealthCheckFortiguardOutputReference {
    return new SystemSdwanHealthCheckFortiguardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#comment SystemSdwan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#cost SystemSdwan#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#gateway SystemSdwan#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#gateway6 SystemSdwan#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ingress_spillover_threshold SystemSdwan#ingress_spillover_threshold}
  */
  readonly ingressSpilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#interface SystemSdwan#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#preferred_source SystemSdwan#preferred_source}
  */
  readonly preferredSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority SystemSdwan#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority6 SystemSdwan#priority6}
  */
  readonly priority6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_in_sla SystemSdwan#priority_in_sla}
  */
  readonly priorityInSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_out_sla SystemSdwan#priority_out_sla}
  */
  readonly priorityOutSla?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#seq_num SystemSdwan#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#source SystemSdwan#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#source6 SystemSdwan#source6}
  */
  readonly source6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#spillover_threshold SystemSdwan#spillover_threshold}
  */
  readonly spilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#status SystemSdwan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#transport_group SystemSdwan#transport_group}
  */
  readonly transportGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#volume_ratio SystemSdwan#volume_ratio}
  */
  readonly volumeRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#weight SystemSdwan#weight}
  */
  readonly weight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#zone SystemSdwan#zone}
  */
  readonly zone?: string[];
}

export function systemSdwanMembersToTerraform(struct?: SystemSdwanMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    cost: cdktf.numberToTerraform(struct!.cost),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    ingress_spillover_threshold: cdktf.numberToTerraform(struct!.ingressSpilloverThreshold),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    preferred_source: cdktf.stringToTerraform(struct!.preferredSource),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority6: cdktf.numberToTerraform(struct!.priority6),
    priority_in_sla: cdktf.numberToTerraform(struct!.priorityInSla),
    priority_out_sla: cdktf.numberToTerraform(struct!.priorityOutSla),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    source: cdktf.stringToTerraform(struct!.source),
    source6: cdktf.stringToTerraform(struct!.source6),
    spillover_threshold: cdktf.numberToTerraform(struct!.spilloverThreshold),
    status: cdktf.stringToTerraform(struct!.status),
    transport_group: cdktf.numberToTerraform(struct!.transportGroup),
    volume_ratio: cdktf.numberToTerraform(struct!.volumeRatio),
    weight: cdktf.numberToTerraform(struct!.weight),
    zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zone),
  }
}


export function systemSdwanMembersToHclTerraform(struct?: SystemSdwanMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_spillover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ingressSpilloverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preferred_source: {
      value: cdktf.stringToHclTerraform(struct!.preferredSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority6: {
      value: cdktf.numberToHclTerraform(struct!.priority6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_in_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityInSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_out_sla: {
      value: cdktf.numberToHclTerraform(struct!.priorityOutSla),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source6: {
      value: cdktf.stringToHclTerraform(struct!.source6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spillover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.spilloverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_group: {
      value: cdktf.numberToHclTerraform(struct!.transportGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_ratio: {
      value: cdktf.numberToHclTerraform(struct!.volumeRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.zone),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._ingressSpilloverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSpilloverThreshold = this._ingressSpilloverThreshold;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._preferredSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredSource = this._preferredSource;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priority6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority6 = this._priority6;
    }
    if (this._priorityInSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityInSla = this._priorityInSla;
    }
    if (this._priorityOutSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOutSla = this._priorityOutSla;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._source6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.source6 = this._source6;
    }
    if (this._spilloverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.spilloverThreshold = this._spilloverThreshold;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._transportGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportGroup = this._transportGroup;
    }
    if (this._volumeRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeRatio = this._volumeRatio;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._cost = undefined;
      this._gateway = undefined;
      this._gateway6 = undefined;
      this._ingressSpilloverThreshold = undefined;
      this._interface = undefined;
      this._preferredSource = undefined;
      this._priority = undefined;
      this._priority6 = undefined;
      this._priorityInSla = undefined;
      this._priorityOutSla = undefined;
      this._seqNum = undefined;
      this._source = undefined;
      this._source6 = undefined;
      this._spilloverThreshold = undefined;
      this._status = undefined;
      this._transportGroup = undefined;
      this._volumeRatio = undefined;
      this._weight = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._cost = value.cost;
      this._gateway = value.gateway;
      this._gateway6 = value.gateway6;
      this._ingressSpilloverThreshold = value.ingressSpilloverThreshold;
      this._interface = value.interface;
      this._preferredSource = value.preferredSource;
      this._priority = value.priority;
      this._priority6 = value.priority6;
      this._priorityInSla = value.priorityInSla;
      this._priorityOutSla = value.priorityOutSla;
      this._seqNum = value.seqNum;
      this._source = value.source;
      this._source6 = value.source6;
      this._spilloverThreshold = value.spilloverThreshold;
      this._status = value.status;
      this._transportGroup = value.transportGroup;
      this._volumeRatio = value.volumeRatio;
      this._weight = value.weight;
      this._zone = value.zone;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: true, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // ingress_spillover_threshold - computed: false, optional: true, required: false
  private _ingressSpilloverThreshold?: number; 
  public get ingressSpilloverThreshold() {
    return this.getNumberAttribute('ingress_spillover_threshold');
  }
  public set ingressSpilloverThreshold(value: number) {
    this._ingressSpilloverThreshold = value;
  }
  public resetIngressSpilloverThreshold() {
    this._ingressSpilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSpilloverThresholdInput() {
    return this._ingressSpilloverThreshold;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // preferred_source - computed: true, optional: true, required: false
  private _preferredSource?: string; 
  public get preferredSource() {
    return this.getStringAttribute('preferred_source');
  }
  public set preferredSource(value: string) {
    this._preferredSource = value;
  }
  public resetPreferredSource() {
    this._preferredSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSourceInput() {
    return this._preferredSource;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority6 - computed: true, optional: true, required: false
  private _priority6?: number; 
  public get priority6() {
    return this.getNumberAttribute('priority6');
  }
  public set priority6(value: number) {
    this._priority6 = value;
  }
  public resetPriority6() {
    this._priority6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority6Input() {
    return this._priority6;
  }

  // priority_in_sla - computed: false, optional: true, required: false
  private _priorityInSla?: number; 
  public get priorityInSla() {
    return this.getNumberAttribute('priority_in_sla');
  }
  public set priorityInSla(value: number) {
    this._priorityInSla = value;
  }
  public resetPriorityInSla() {
    this._priorityInSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInSlaInput() {
    return this._priorityInSla;
  }

  // priority_out_sla - computed: false, optional: true, required: false
  private _priorityOutSla?: number; 
  public get priorityOutSla() {
    return this.getNumberAttribute('priority_out_sla');
  }
  public set priorityOutSla(value: number) {
    this._priorityOutSla = value;
  }
  public resetPriorityOutSla() {
    this._priorityOutSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOutSlaInput() {
    return this._priorityOutSla;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source6 - computed: true, optional: true, required: false
  private _source6?: string; 
  public get source6() {
    return this.getStringAttribute('source6');
  }
  public set source6(value: string) {
    this._source6 = value;
  }
  public resetSource6() {
    this._source6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source6Input() {
    return this._source6;
  }

  // spillover_threshold - computed: false, optional: true, required: false
  private _spilloverThreshold?: number; 
  public get spilloverThreshold() {
    return this.getNumberAttribute('spillover_threshold');
  }
  public set spilloverThreshold(value: number) {
    this._spilloverThreshold = value;
  }
  public resetSpilloverThreshold() {
    this._spilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spilloverThresholdInput() {
    return this._spilloverThreshold;
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

  // transport_group - computed: false, optional: true, required: false
  private _transportGroup?: number; 
  public get transportGroup() {
    return this.getNumberAttribute('transport_group');
  }
  public set transportGroup(value: number) {
    this._transportGroup = value;
  }
  public resetTransportGroup() {
    this._transportGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGroupInput() {
    return this._transportGroup;
  }

  // volume_ratio - computed: false, optional: true, required: false
  private _volumeRatio?: number; 
  public get volumeRatio() {
    return this.getNumberAttribute('volume_ratio');
  }
  public set volumeRatio(value: number) {
    this._volumeRatio = value;
  }
  public resetVolumeRatio() {
    this._volumeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeRatioInput() {
    return this._volumeRatio;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string[]; 
  public get zone() {
    return cdktf.Fn.tolist(this.getListAttribute('zone'));
  }
  public set zone(value: string[]) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class SystemSdwanMembersList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanMembers[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanMembersOutputReference {
    return new SystemSdwanMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#health_check SystemSdwan#health_check}
  */
  readonly healthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#ip SystemSdwan#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#member SystemSdwan#member}
  */
  readonly member?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#minimum_sla_meet_members SystemSdwan#minimum_sla_meet_members}
  */
  readonly minimumSlaMeetMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#mode SystemSdwan#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#role SystemSdwan#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#route_metric SystemSdwan#route_metric}
  */
  readonly routeMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#service_id SystemSdwan#service_id}
  */
  readonly serviceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_id SystemSdwan#sla_id}
  */
  readonly slaId?: number;
}

export function systemSdwanNeighborToTerraform(struct?: SystemSdwanNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheck),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    member: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.member),
    minimum_sla_meet_members: cdktf.numberToTerraform(struct!.minimumSlaMeetMembers),
    mode: cdktf.stringToTerraform(struct!.mode),
    role: cdktf.stringToTerraform(struct!.role),
    route_metric: cdktf.stringToTerraform(struct!.routeMetric),
    service_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceId),
    sla_id: cdktf.numberToTerraform(struct!.slaId),
  }
}


export function systemSdwanNeighborToHclTerraform(struct?: SystemSdwanNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheck),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    member: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.member),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    minimum_sla_meet_members: {
      value: cdktf.numberToHclTerraform(struct!.minimumSlaMeetMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_metric: {
      value: cdktf.stringToHclTerraform(struct!.routeMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sla_id: {
      value: cdktf.numberToHclTerraform(struct!.slaId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._minimumSlaMeetMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSlaMeetMembers = this._minimumSlaMeetMembers;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._routeMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMetric = this._routeMetric;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._slaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaId = this._slaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._ip = undefined;
      this._member = undefined;
      this._minimumSlaMeetMembers = undefined;
      this._mode = undefined;
      this._role = undefined;
      this._routeMetric = undefined;
      this._serviceId = undefined;
      this._slaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._ip = value.ip;
      this._member = value.member;
      this._minimumSlaMeetMembers = value.minimumSlaMeetMembers;
      this._mode = value.mode;
      this._role = value.role;
      this._routeMetric = value.routeMetric;
      this._serviceId = value.serviceId;
      this._slaId = value.slaId;
    }
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string[]; 
  public get healthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('health_check'));
  }
  public set healthCheck(value: string[]) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // member - computed: true, optional: true, required: false
  private _member?: string[]; 
  public get member() {
    return cdktf.Fn.tolist(this.getListAttribute('member'));
  }
  public set member(value: string[]) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // minimum_sla_meet_members - computed: false, optional: true, required: false
  private _minimumSlaMeetMembers?: number; 
  public get minimumSlaMeetMembers() {
    return this.getNumberAttribute('minimum_sla_meet_members');
  }
  public set minimumSlaMeetMembers(value: number) {
    this._minimumSlaMeetMembers = value;
  }
  public resetMinimumSlaMeetMembers() {
    this._minimumSlaMeetMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSlaMeetMembersInput() {
    return this._minimumSlaMeetMembers;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // route_metric - computed: false, optional: true, required: false
  private _routeMetric?: string; 
  public get routeMetric() {
    return this.getStringAttribute('route_metric');
  }
  public set routeMetric(value: string) {
    this._routeMetric = value;
  }
  public resetRouteMetric() {
    this._routeMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMetricInput() {
    return this._routeMetric;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string[]; 
  public get serviceId() {
    return cdktf.Fn.tolist(this.getListAttribute('service_id'));
  }
  public set serviceId(value: string[]) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // sla_id - computed: false, optional: true, required: false
  private _slaId?: number; 
  public get slaId() {
    return this.getNumberAttribute('sla_id');
  }
  public set slaId(value: number) {
    this._slaId = value;
  }
  public resetSlaId() {
    this._slaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdInput() {
    return this._slaId;
  }
}

export class SystemSdwanNeighborList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanNeighbor[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanNeighborOutputReference {
    return new SystemSdwanNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanServiceSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#health_check SystemSdwan#health_check}
  */
  readonly healthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#id SystemSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systemSdwanServiceSlaToTerraform(struct?: SystemSdwanServiceSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheck),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systemSdwanServiceSlaToHclTerraform(struct?: SystemSdwanServiceSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheck),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanServiceSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanServiceSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanServiceSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._id = value.id;
    }
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string[]; 
  public get healthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('health_check'));
  }
  public set healthCheck(value: string[]) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
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
}

export class SystemSdwanServiceSlaList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanServiceSla[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanServiceSlaOutputReference {
    return new SystemSdwanServiceSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#addr_mode SystemSdwan#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#agent_exclusive SystemSdwan#agent_exclusive}
  */
  readonly agentExclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#bandwidth_weight SystemSdwan#bandwidth_weight}
  */
  readonly bandwidthWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#comment SystemSdwan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#default SystemSdwan#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dscp_forward SystemSdwan#dscp_forward}
  */
  readonly dscpForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dscp_forward_tag SystemSdwan#dscp_forward_tag}
  */
  readonly dscpForwardTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dscp_reverse SystemSdwan#dscp_reverse}
  */
  readonly dscpReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dscp_reverse_tag SystemSdwan#dscp_reverse_tag}
  */
  readonly dscpReverseTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dst SystemSdwan#dst}
  */
  readonly dst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dst6 SystemSdwan#dst6}
  */
  readonly dst6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#dst_negate SystemSdwan#dst_negate}
  */
  readonly dstNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#end_port SystemSdwan#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#end_src_port SystemSdwan#end_src_port}
  */
  readonly endSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#gateway SystemSdwan#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#groups SystemSdwan#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#hash_mode SystemSdwan#hash_mode}
  */
  readonly hashMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#health_check SystemSdwan#health_check}
  */
  readonly healthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#hold_down_time SystemSdwan#hold_down_time}
  */
  readonly holdDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#id SystemSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#input_device SystemSdwan#input_device}
  */
  readonly inputDevice?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#input_device_negate SystemSdwan#input_device_negate}
  */
  readonly inputDeviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#input_zone SystemSdwan#input_zone}
  */
  readonly inputZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service SystemSdwan#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service_app_ctrl SystemSdwan#internet_service_app_ctrl}
  */
  readonly internetServiceAppCtrl?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service_app_ctrl_category SystemSdwan#internet_service_app_ctrl_category}
  */
  readonly internetServiceAppCtrlCategory?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service_app_ctrl_group SystemSdwan#internet_service_app_ctrl_group}
  */
  readonly internetServiceAppCtrlGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service_custom SystemSdwan#internet_service_custom}
  */
  readonly internetServiceCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service_custom_group SystemSdwan#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service_group SystemSdwan#internet_service_group}
  */
  readonly internetServiceGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#internet_service_name SystemSdwan#internet_service_name}
  */
  readonly internetServiceName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#jitter_weight SystemSdwan#jitter_weight}
  */
  readonly jitterWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#latency_weight SystemSdwan#latency_weight}
  */
  readonly latencyWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#link_cost_factor SystemSdwan#link_cost_factor}
  */
  readonly linkCostFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#link_cost_threshold SystemSdwan#link_cost_threshold}
  */
  readonly linkCostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#load_balance SystemSdwan#load_balance}
  */
  readonly loadBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#minimum_sla_meet_members SystemSdwan#minimum_sla_meet_members}
  */
  readonly minimumSlaMeetMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#mode SystemSdwan#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#name SystemSdwan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#packet_loss_weight SystemSdwan#packet_loss_weight}
  */
  readonly packetLossWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#passive_measurement SystemSdwan#passive_measurement}
  */
  readonly passiveMeasurement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_members SystemSdwan#priority_members}
  */
  readonly priorityMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#priority_zone SystemSdwan#priority_zone}
  */
  readonly priorityZone?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#protocol SystemSdwan#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#quality_link SystemSdwan#quality_link}
  */
  readonly qualityLink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#role SystemSdwan#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#route_tag SystemSdwan#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#shortcut SystemSdwan#shortcut}
  */
  readonly shortcut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#shortcut_priority SystemSdwan#shortcut_priority}
  */
  readonly shortcutPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_compare_method SystemSdwan#sla_compare_method}
  */
  readonly slaCompareMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla_stickiness SystemSdwan#sla_stickiness}
  */
  readonly slaStickiness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#src SystemSdwan#src}
  */
  readonly src?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#src6 SystemSdwan#src6}
  */
  readonly src6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#src_negate SystemSdwan#src_negate}
  */
  readonly srcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#standalone_action SystemSdwan#standalone_action}
  */
  readonly standaloneAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#start_port SystemSdwan#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#start_src_port SystemSdwan#start_src_port}
  */
  readonly startSrcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#status SystemSdwan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#tie_break SystemSdwan#tie_break}
  */
  readonly tieBreak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#tos SystemSdwan#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#tos_mask SystemSdwan#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#use_shortcut_sla SystemSdwan#use_shortcut_sla}
  */
  readonly useShortcutSla?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#users SystemSdwan#users}
  */
  readonly users?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#zone_mode SystemSdwan#zone_mode}
  */
  readonly zoneMode?: string;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#sla SystemSdwan#sla}
  */
  readonly sla?: SystemSdwanServiceSla[] | cdktf.IResolvable;
}

export function systemSdwanServiceToTerraform(struct?: SystemSdwanService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    agent_exclusive: cdktf.stringToTerraform(struct!.agentExclusive),
    bandwidth_weight: cdktf.numberToTerraform(struct!.bandwidthWeight),
    comment: cdktf.stringToTerraform(struct!.comment),
    default: cdktf.stringToTerraform(struct!.default),
    dscp_forward: cdktf.stringToTerraform(struct!.dscpForward),
    dscp_forward_tag: cdktf.stringToTerraform(struct!.dscpForwardTag),
    dscp_reverse: cdktf.stringToTerraform(struct!.dscpReverse),
    dscp_reverse_tag: cdktf.stringToTerraform(struct!.dscpReverseTag),
    dst: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dst),
    dst6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dst6),
    dst_negate: cdktf.stringToTerraform(struct!.dstNegate),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    end_src_port: cdktf.numberToTerraform(struct!.endSrcPort),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    hash_mode: cdktf.stringToTerraform(struct!.hashMode),
    health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthCheck),
    hold_down_time: cdktf.numberToTerraform(struct!.holdDownTime),
    id: cdktf.numberToTerraform(struct!.id),
    input_device: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputDevice),
    input_device_negate: cdktf.stringToTerraform(struct!.inputDeviceNegate),
    input_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputZone),
    internet_service: cdktf.stringToTerraform(struct!.internetService),
    internet_service_app_ctrl: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.internetServiceAppCtrl),
    internet_service_app_ctrl_category: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.internetServiceAppCtrlCategory),
    internet_service_app_ctrl_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internetServiceAppCtrlGroup),
    internet_service_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internetServiceCustom),
    internet_service_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internetServiceCustomGroup),
    internet_service_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internetServiceGroup),
    internet_service_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internetServiceName),
    jitter_weight: cdktf.numberToTerraform(struct!.jitterWeight),
    latency_weight: cdktf.numberToTerraform(struct!.latencyWeight),
    link_cost_factor: cdktf.stringToTerraform(struct!.linkCostFactor),
    link_cost_threshold: cdktf.numberToTerraform(struct!.linkCostThreshold),
    load_balance: cdktf.stringToTerraform(struct!.loadBalance),
    minimum_sla_meet_members: cdktf.numberToTerraform(struct!.minimumSlaMeetMembers),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    packet_loss_weight: cdktf.numberToTerraform(struct!.packetLossWeight),
    passive_measurement: cdktf.stringToTerraform(struct!.passiveMeasurement),
    priority_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.priorityMembers),
    priority_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.priorityZone),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    quality_link: cdktf.numberToTerraform(struct!.qualityLink),
    role: cdktf.stringToTerraform(struct!.role),
    route_tag: cdktf.numberToTerraform(struct!.routeTag),
    shortcut: cdktf.stringToTerraform(struct!.shortcut),
    shortcut_priority: cdktf.stringToTerraform(struct!.shortcutPriority),
    sla_compare_method: cdktf.stringToTerraform(struct!.slaCompareMethod),
    sla_stickiness: cdktf.stringToTerraform(struct!.slaStickiness),
    src: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.src),
    src6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.src6),
    src_negate: cdktf.stringToTerraform(struct!.srcNegate),
    standalone_action: cdktf.stringToTerraform(struct!.standaloneAction),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    start_src_port: cdktf.numberToTerraform(struct!.startSrcPort),
    status: cdktf.stringToTerraform(struct!.status),
    tie_break: cdktf.stringToTerraform(struct!.tieBreak),
    tos: cdktf.stringToTerraform(struct!.tos),
    tos_mask: cdktf.stringToTerraform(struct!.tosMask),
    use_shortcut_sla: cdktf.stringToTerraform(struct!.useShortcutSla),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
    zone_mode: cdktf.stringToTerraform(struct!.zoneMode),
    sla: cdktf.listMapper(systemSdwanServiceSlaToTerraform, true)(struct!.sla),
  }
}


export function systemSdwanServiceToHclTerraform(struct?: SystemSdwanService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_exclusive: {
      value: cdktf.stringToHclTerraform(struct!.agentExclusive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_weight: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_forward: {
      value: cdktf.stringToHclTerraform(struct!.dscpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_forward_tag: {
      value: cdktf.stringToHclTerraform(struct!.dscpForwardTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_reverse: {
      value: cdktf.stringToHclTerraform(struct!.dscpReverse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_reverse_tag: {
      value: cdktf.stringToHclTerraform(struct!.dscpReverseTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dst),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dst6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dst6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dst_negate: {
      value: cdktf.stringToHclTerraform(struct!.dstNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_src_port: {
      value: cdktf.numberToHclTerraform(struct!.endSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hash_mode: {
      value: cdktf.stringToHclTerraform(struct!.hashMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthCheck),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hold_down_time: {
      value: cdktf.numberToHclTerraform(struct!.holdDownTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_device: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputDevice),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    input_device_negate: {
      value: cdktf.stringToHclTerraform(struct!.inputDeviceNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_zone: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputZone),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    internet_service: {
      value: cdktf.stringToHclTerraform(struct!.internetService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_app_ctrl: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.internetServiceAppCtrl),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    internet_service_app_ctrl_category: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.internetServiceAppCtrlCategory),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    internet_service_app_ctrl_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internetServiceAppCtrlGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    internet_service_custom: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internetServiceCustom),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    internet_service_custom_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internetServiceCustomGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    internet_service_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internetServiceGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    internet_service_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internetServiceName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    jitter_weight: {
      value: cdktf.numberToHclTerraform(struct!.jitterWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_weight: {
      value: cdktf.numberToHclTerraform(struct!.latencyWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_factor: {
      value: cdktf.stringToHclTerraform(struct!.linkCostFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_cost_threshold: {
      value: cdktf.numberToHclTerraform(struct!.linkCostThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    load_balance: {
      value: cdktf.stringToHclTerraform(struct!.loadBalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_sla_meet_members: {
      value: cdktf.numberToHclTerraform(struct!.minimumSlaMeetMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    packet_loss_weight: {
      value: cdktf.numberToHclTerraform(struct!.packetLossWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passive_measurement: {
      value: cdktf.stringToHclTerraform(struct!.passiveMeasurement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.priorityMembers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    priority_zone: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.priorityZone),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quality_link: {
      value: cdktf.numberToHclTerraform(struct!.qualityLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_tag: {
      value: cdktf.numberToHclTerraform(struct!.routeTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shortcut: {
      value: cdktf.stringToHclTerraform(struct!.shortcut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shortcut_priority: {
      value: cdktf.stringToHclTerraform(struct!.shortcutPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla_compare_method: {
      value: cdktf.stringToHclTerraform(struct!.slaCompareMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla_stickiness: {
      value: cdktf.stringToHclTerraform(struct!.slaStickiness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.src),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    src6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.src6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    src_negate: {
      value: cdktf.stringToHclTerraform(struct!.srcNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standalone_action: {
      value: cdktf.stringToHclTerraform(struct!.standaloneAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_src_port: {
      value: cdktf.numberToHclTerraform(struct!.startSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tie_break: {
      value: cdktf.stringToHclTerraform(struct!.tieBreak),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.stringToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_mask: {
      value: cdktf.stringToHclTerraform(struct!.tosMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_shortcut_sla: {
      value: cdktf.stringToHclTerraform(struct!.useShortcutSla),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    zone_mode: {
      value: cdktf.stringToHclTerraform(struct!.zoneMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla: {
      value: cdktf.listMapperHcl(systemSdwanServiceSlaToHclTerraform, true)(struct!.sla),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSdwanServiceSlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._agentExclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentExclusive = this._agentExclusive;
    }
    if (this._bandwidthWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthWeight = this._bandwidthWeight;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._dscpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpForward = this._dscpForward;
    }
    if (this._dscpForwardTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpForwardTag = this._dscpForwardTag;
    }
    if (this._dscpReverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpReverse = this._dscpReverse;
    }
    if (this._dscpReverseTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpReverseTag = this._dscpReverseTag;
    }
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._dst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst6 = this._dst6;
    }
    if (this._dstNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstNegate = this._dstNegate;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._endSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endSrcPort = this._endSrcPort;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._hashMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashMode = this._hashMode;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._holdDownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdDownTime = this._holdDownTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDevice = this._inputDevice;
    }
    if (this._inputDeviceNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDeviceNegate = this._inputDeviceNegate;
    }
    if (this._inputZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputZone = this._inputZone;
    }
    if (this._internetService !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetService = this._internetService;
    }
    if (this._internetServiceAppCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceAppCtrl = this._internetServiceAppCtrl;
    }
    if (this._internetServiceAppCtrlCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceAppCtrlCategory = this._internetServiceAppCtrlCategory;
    }
    if (this._internetServiceAppCtrlGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceAppCtrlGroup = this._internetServiceAppCtrlGroup;
    }
    if (this._internetServiceCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceCustom = this._internetServiceCustom;
    }
    if (this._internetServiceCustomGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceCustomGroup = this._internetServiceCustomGroup;
    }
    if (this._internetServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceGroup = this._internetServiceGroup;
    }
    if (this._internetServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceName = this._internetServiceName;
    }
    if (this._jitterWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterWeight = this._jitterWeight;
    }
    if (this._latencyWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyWeight = this._latencyWeight;
    }
    if (this._linkCostFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostFactor = this._linkCostFactor;
    }
    if (this._linkCostThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostThreshold = this._linkCostThreshold;
    }
    if (this._loadBalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalance = this._loadBalance;
    }
    if (this._minimumSlaMeetMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSlaMeetMembers = this._minimumSlaMeetMembers;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetLossWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLossWeight = this._packetLossWeight;
    }
    if (this._passiveMeasurement !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveMeasurement = this._passiveMeasurement;
    }
    if (this._priorityMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityMembers = this._priorityMembers;
    }
    if (this._priorityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityZone = this._priorityZone;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._qualityLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualityLink = this._qualityLink;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._routeTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTag = this._routeTag;
    }
    if (this._shortcut !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortcut = this._shortcut;
    }
    if (this._shortcutPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortcutPriority = this._shortcutPriority;
    }
    if (this._slaCompareMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaCompareMethod = this._slaCompareMethod;
    }
    if (this._slaStickiness !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaStickiness = this._slaStickiness;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    if (this._src6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.src6 = this._src6;
    }
    if (this._srcNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNegate = this._srcNegate;
    }
    if (this._standaloneAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneAction = this._standaloneAction;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._startSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSrcPort = this._startSrcPort;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tieBreak !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieBreak = this._tieBreak;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._tosMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosMask = this._tosMask;
    }
    if (this._useShortcutSla !== undefined) {
      hasAnyValues = true;
      internalValueResult.useShortcutSla = this._useShortcutSla;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._zoneMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMode = this._zoneMode;
    }
    if (this._sla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrMode = undefined;
      this._agentExclusive = undefined;
      this._bandwidthWeight = undefined;
      this._comment = undefined;
      this._default = undefined;
      this._dscpForward = undefined;
      this._dscpForwardTag = undefined;
      this._dscpReverse = undefined;
      this._dscpReverseTag = undefined;
      this._dst = undefined;
      this._dst6 = undefined;
      this._dstNegate = undefined;
      this._endPort = undefined;
      this._endSrcPort = undefined;
      this._gateway = undefined;
      this._groups = undefined;
      this._hashMode = undefined;
      this._healthCheck = undefined;
      this._holdDownTime = undefined;
      this._id = undefined;
      this._inputDevice = undefined;
      this._inputDeviceNegate = undefined;
      this._inputZone = undefined;
      this._internetService = undefined;
      this._internetServiceAppCtrl = undefined;
      this._internetServiceAppCtrlCategory = undefined;
      this._internetServiceAppCtrlGroup = undefined;
      this._internetServiceCustom = undefined;
      this._internetServiceCustomGroup = undefined;
      this._internetServiceGroup = undefined;
      this._internetServiceName = undefined;
      this._jitterWeight = undefined;
      this._latencyWeight = undefined;
      this._linkCostFactor = undefined;
      this._linkCostThreshold = undefined;
      this._loadBalance = undefined;
      this._minimumSlaMeetMembers = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._packetLossWeight = undefined;
      this._passiveMeasurement = undefined;
      this._priorityMembers = undefined;
      this._priorityZone = undefined;
      this._protocol = undefined;
      this._qualityLink = undefined;
      this._role = undefined;
      this._routeTag = undefined;
      this._shortcut = undefined;
      this._shortcutPriority = undefined;
      this._slaCompareMethod = undefined;
      this._slaStickiness = undefined;
      this._src = undefined;
      this._src6 = undefined;
      this._srcNegate = undefined;
      this._standaloneAction = undefined;
      this._startPort = undefined;
      this._startSrcPort = undefined;
      this._status = undefined;
      this._tieBreak = undefined;
      this._tos = undefined;
      this._tosMask = undefined;
      this._useShortcutSla = undefined;
      this._users = undefined;
      this._zoneMode = undefined;
      this._sla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrMode = value.addrMode;
      this._agentExclusive = value.agentExclusive;
      this._bandwidthWeight = value.bandwidthWeight;
      this._comment = value.comment;
      this._default = value.default;
      this._dscpForward = value.dscpForward;
      this._dscpForwardTag = value.dscpForwardTag;
      this._dscpReverse = value.dscpReverse;
      this._dscpReverseTag = value.dscpReverseTag;
      this._dst = value.dst;
      this._dst6 = value.dst6;
      this._dstNegate = value.dstNegate;
      this._endPort = value.endPort;
      this._endSrcPort = value.endSrcPort;
      this._gateway = value.gateway;
      this._groups = value.groups;
      this._hashMode = value.hashMode;
      this._healthCheck = value.healthCheck;
      this._holdDownTime = value.holdDownTime;
      this._id = value.id;
      this._inputDevice = value.inputDevice;
      this._inputDeviceNegate = value.inputDeviceNegate;
      this._inputZone = value.inputZone;
      this._internetService = value.internetService;
      this._internetServiceAppCtrl = value.internetServiceAppCtrl;
      this._internetServiceAppCtrlCategory = value.internetServiceAppCtrlCategory;
      this._internetServiceAppCtrlGroup = value.internetServiceAppCtrlGroup;
      this._internetServiceCustom = value.internetServiceCustom;
      this._internetServiceCustomGroup = value.internetServiceCustomGroup;
      this._internetServiceGroup = value.internetServiceGroup;
      this._internetServiceName = value.internetServiceName;
      this._jitterWeight = value.jitterWeight;
      this._latencyWeight = value.latencyWeight;
      this._linkCostFactor = value.linkCostFactor;
      this._linkCostThreshold = value.linkCostThreshold;
      this._loadBalance = value.loadBalance;
      this._minimumSlaMeetMembers = value.minimumSlaMeetMembers;
      this._mode = value.mode;
      this._name = value.name;
      this._packetLossWeight = value.packetLossWeight;
      this._passiveMeasurement = value.passiveMeasurement;
      this._priorityMembers = value.priorityMembers;
      this._priorityZone = value.priorityZone;
      this._protocol = value.protocol;
      this._qualityLink = value.qualityLink;
      this._role = value.role;
      this._routeTag = value.routeTag;
      this._shortcut = value.shortcut;
      this._shortcutPriority = value.shortcutPriority;
      this._slaCompareMethod = value.slaCompareMethod;
      this._slaStickiness = value.slaStickiness;
      this._src = value.src;
      this._src6 = value.src6;
      this._srcNegate = value.srcNegate;
      this._standaloneAction = value.standaloneAction;
      this._startPort = value.startPort;
      this._startSrcPort = value.startSrcPort;
      this._status = value.status;
      this._tieBreak = value.tieBreak;
      this._tos = value.tos;
      this._tosMask = value.tosMask;
      this._useShortcutSla = value.useShortcutSla;
      this._users = value.users;
      this._zoneMode = value.zoneMode;
      this._sla.internalValue = value.sla;
    }
  }

  // addr_mode - computed: true, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // agent_exclusive - computed: true, optional: true, required: false
  private _agentExclusive?: string; 
  public get agentExclusive() {
    return this.getStringAttribute('agent_exclusive');
  }
  public set agentExclusive(value: string) {
    this._agentExclusive = value;
  }
  public resetAgentExclusive() {
    this._agentExclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentExclusiveInput() {
    return this._agentExclusive;
  }

  // bandwidth_weight - computed: false, optional: true, required: false
  private _bandwidthWeight?: number; 
  public get bandwidthWeight() {
    return this.getNumberAttribute('bandwidth_weight');
  }
  public set bandwidthWeight(value: number) {
    this._bandwidthWeight = value;
  }
  public resetBandwidthWeight() {
    this._bandwidthWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthWeightInput() {
    return this._bandwidthWeight;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // default - computed: true, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // dscp_forward - computed: true, optional: true, required: false
  private _dscpForward?: string; 
  public get dscpForward() {
    return this.getStringAttribute('dscp_forward');
  }
  public set dscpForward(value: string) {
    this._dscpForward = value;
  }
  public resetDscpForward() {
    this._dscpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpForwardInput() {
    return this._dscpForward;
  }

  // dscp_forward_tag - computed: false, optional: true, required: false
  private _dscpForwardTag?: string; 
  public get dscpForwardTag() {
    return this.getStringAttribute('dscp_forward_tag');
  }
  public set dscpForwardTag(value: string) {
    this._dscpForwardTag = value;
  }
  public resetDscpForwardTag() {
    this._dscpForwardTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpForwardTagInput() {
    return this._dscpForwardTag;
  }

  // dscp_reverse - computed: true, optional: true, required: false
  private _dscpReverse?: string; 
  public get dscpReverse() {
    return this.getStringAttribute('dscp_reverse');
  }
  public set dscpReverse(value: string) {
    this._dscpReverse = value;
  }
  public resetDscpReverse() {
    this._dscpReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpReverseInput() {
    return this._dscpReverse;
  }

  // dscp_reverse_tag - computed: false, optional: true, required: false
  private _dscpReverseTag?: string; 
  public get dscpReverseTag() {
    return this.getStringAttribute('dscp_reverse_tag');
  }
  public set dscpReverseTag(value: string) {
    this._dscpReverseTag = value;
  }
  public resetDscpReverseTag() {
    this._dscpReverseTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpReverseTagInput() {
    return this._dscpReverseTag;
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string[]; 
  public get dst() {
    return cdktf.Fn.tolist(this.getListAttribute('dst'));
  }
  public set dst(value: string[]) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst6 - computed: true, optional: true, required: false
  private _dst6?: string[]; 
  public get dst6() {
    return cdktf.Fn.tolist(this.getListAttribute('dst6'));
  }
  public set dst6(value: string[]) {
    this._dst6 = value;
  }
  public resetDst6() {
    this._dst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6;
  }

  // dst_negate - computed: true, optional: true, required: false
  private _dstNegate?: string; 
  public get dstNegate() {
    return this.getStringAttribute('dst_negate');
  }
  public set dstNegate(value: string) {
    this._dstNegate = value;
  }
  public resetDstNegate() {
    this._dstNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNegateInput() {
    return this._dstNegate;
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // end_src_port - computed: true, optional: true, required: false
  private _endSrcPort?: number; 
  public get endSrcPort() {
    return this.getNumberAttribute('end_src_port');
  }
  public set endSrcPort(value: number) {
    this._endSrcPort = value;
  }
  public resetEndSrcPort() {
    this._endSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endSrcPortInput() {
    return this._endSrcPort;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // hash_mode - computed: false, optional: true, required: false
  private _hashMode?: string; 
  public get hashMode() {
    return this.getStringAttribute('hash_mode');
  }
  public set hashMode(value: string) {
    this._hashMode = value;
  }
  public resetHashMode() {
    this._hashMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashModeInput() {
    return this._hashMode;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string[]; 
  public get healthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('health_check'));
  }
  public set healthCheck(value: string[]) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // hold_down_time - computed: false, optional: true, required: false
  private _holdDownTime?: number; 
  public get holdDownTime() {
    return this.getNumberAttribute('hold_down_time');
  }
  public set holdDownTime(value: number) {
    this._holdDownTime = value;
  }
  public resetHoldDownTime() {
    this._holdDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownTimeInput() {
    return this._holdDownTime;
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

  // input_device - computed: true, optional: true, required: false
  private _inputDevice?: string[]; 
  public get inputDevice() {
    return cdktf.Fn.tolist(this.getListAttribute('input_device'));
  }
  public set inputDevice(value: string[]) {
    this._inputDevice = value;
  }
  public resetInputDevice() {
    this._inputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceInput() {
    return this._inputDevice;
  }

  // input_device_negate - computed: true, optional: true, required: false
  private _inputDeviceNegate?: string; 
  public get inputDeviceNegate() {
    return this.getStringAttribute('input_device_negate');
  }
  public set inputDeviceNegate(value: string) {
    this._inputDeviceNegate = value;
  }
  public resetInputDeviceNegate() {
    this._inputDeviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceNegateInput() {
    return this._inputDeviceNegate;
  }

  // input_zone - computed: true, optional: true, required: false
  private _inputZone?: string[]; 
  public get inputZone() {
    return cdktf.Fn.tolist(this.getListAttribute('input_zone'));
  }
  public set inputZone(value: string[]) {
    this._inputZone = value;
  }
  public resetInputZone() {
    this._inputZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputZoneInput() {
    return this._inputZone;
  }

  // internet_service - computed: true, optional: true, required: false
  private _internetService?: string; 
  public get internetService() {
    return this.getStringAttribute('internet_service');
  }
  public set internetService(value: string) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // internet_service_app_ctrl - computed: true, optional: true, required: false
  private _internetServiceAppCtrl?: number[]; 
  public get internetServiceAppCtrl() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('internet_service_app_ctrl')));
  }
  public set internetServiceAppCtrl(value: number[]) {
    this._internetServiceAppCtrl = value;
  }
  public resetInternetServiceAppCtrl() {
    this._internetServiceAppCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlInput() {
    return this._internetServiceAppCtrl;
  }

  // internet_service_app_ctrl_category - computed: true, optional: true, required: false
  private _internetServiceAppCtrlCategory?: number[]; 
  public get internetServiceAppCtrlCategory() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('internet_service_app_ctrl_category')));
  }
  public set internetServiceAppCtrlCategory(value: number[]) {
    this._internetServiceAppCtrlCategory = value;
  }
  public resetInternetServiceAppCtrlCategory() {
    this._internetServiceAppCtrlCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlCategoryInput() {
    return this._internetServiceAppCtrlCategory;
  }

  // internet_service_app_ctrl_group - computed: true, optional: true, required: false
  private _internetServiceAppCtrlGroup?: string[]; 
  public get internetServiceAppCtrlGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_app_ctrl_group'));
  }
  public set internetServiceAppCtrlGroup(value: string[]) {
    this._internetServiceAppCtrlGroup = value;
  }
  public resetInternetServiceAppCtrlGroup() {
    this._internetServiceAppCtrlGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlGroupInput() {
    return this._internetServiceAppCtrlGroup;
  }

  // internet_service_custom - computed: true, optional: true, required: false
  private _internetServiceCustom?: string[]; 
  public get internetServiceCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom'));
  }
  public set internetServiceCustom(value: string[]) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
  }

  // internet_service_custom_group - computed: true, optional: true, required: false
  private _internetServiceCustomGroup?: string[]; 
  public get internetServiceCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_custom_group'));
  }
  public set internetServiceCustomGroup(value: string[]) {
    this._internetServiceCustomGroup = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup;
  }

  // internet_service_group - computed: true, optional: true, required: false
  private _internetServiceGroup?: string[]; 
  public get internetServiceGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_group'));
  }
  public set internetServiceGroup(value: string[]) {
    this._internetServiceGroup = value;
  }
  public resetInternetServiceGroup() {
    this._internetServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceGroupInput() {
    return this._internetServiceGroup;
  }

  // internet_service_name - computed: true, optional: true, required: false
  private _internetServiceName?: string[]; 
  public get internetServiceName() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_name'));
  }
  public set internetServiceName(value: string[]) {
    this._internetServiceName = value;
  }
  public resetInternetServiceName() {
    this._internetServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceNameInput() {
    return this._internetServiceName;
  }

  // jitter_weight - computed: false, optional: true, required: false
  private _jitterWeight?: number; 
  public get jitterWeight() {
    return this.getNumberAttribute('jitter_weight');
  }
  public set jitterWeight(value: number) {
    this._jitterWeight = value;
  }
  public resetJitterWeight() {
    this._jitterWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterWeightInput() {
    return this._jitterWeight;
  }

  // latency_weight - computed: false, optional: true, required: false
  private _latencyWeight?: number; 
  public get latencyWeight() {
    return this.getNumberAttribute('latency_weight');
  }
  public set latencyWeight(value: number) {
    this._latencyWeight = value;
  }
  public resetLatencyWeight() {
    this._latencyWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyWeightInput() {
    return this._latencyWeight;
  }

  // link_cost_factor - computed: false, optional: true, required: false
  private _linkCostFactor?: string; 
  public get linkCostFactor() {
    return this.getStringAttribute('link_cost_factor');
  }
  public set linkCostFactor(value: string) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // link_cost_threshold - computed: true, optional: true, required: false
  private _linkCostThreshold?: number; 
  public get linkCostThreshold() {
    return this.getNumberAttribute('link_cost_threshold');
  }
  public set linkCostThreshold(value: number) {
    this._linkCostThreshold = value;
  }
  public resetLinkCostThreshold() {
    this._linkCostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostThresholdInput() {
    return this._linkCostThreshold;
  }

  // load_balance - computed: true, optional: true, required: false
  private _loadBalance?: string; 
  public get loadBalance() {
    return this.getStringAttribute('load_balance');
  }
  public set loadBalance(value: string) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // minimum_sla_meet_members - computed: false, optional: true, required: false
  private _minimumSlaMeetMembers?: number; 
  public get minimumSlaMeetMembers() {
    return this.getNumberAttribute('minimum_sla_meet_members');
  }
  public set minimumSlaMeetMembers(value: number) {
    this._minimumSlaMeetMembers = value;
  }
  public resetMinimumSlaMeetMembers() {
    this._minimumSlaMeetMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSlaMeetMembersInput() {
    return this._minimumSlaMeetMembers;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // packet_loss_weight - computed: false, optional: true, required: false
  private _packetLossWeight?: number; 
  public get packetLossWeight() {
    return this.getNumberAttribute('packet_loss_weight');
  }
  public set packetLossWeight(value: number) {
    this._packetLossWeight = value;
  }
  public resetPacketLossWeight() {
    this._packetLossWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossWeightInput() {
    return this._packetLossWeight;
  }

  // passive_measurement - computed: true, optional: true, required: false
  private _passiveMeasurement?: string; 
  public get passiveMeasurement() {
    return this.getStringAttribute('passive_measurement');
  }
  public set passiveMeasurement(value: string) {
    this._passiveMeasurement = value;
  }
  public resetPassiveMeasurement() {
    this._passiveMeasurement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveMeasurementInput() {
    return this._passiveMeasurement;
  }

  // priority_members - computed: true, optional: true, required: false
  private _priorityMembers?: string[]; 
  public get priorityMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('priority_members'));
  }
  public set priorityMembers(value: string[]) {
    this._priorityMembers = value;
  }
  public resetPriorityMembers() {
    this._priorityMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityMembersInput() {
    return this._priorityMembers;
  }

  // priority_zone - computed: true, optional: true, required: false
  private _priorityZone?: string[]; 
  public get priorityZone() {
    return cdktf.Fn.tolist(this.getListAttribute('priority_zone'));
  }
  public set priorityZone(value: string[]) {
    this._priorityZone = value;
  }
  public resetPriorityZone() {
    this._priorityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityZoneInput() {
    return this._priorityZone;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // quality_link - computed: false, optional: true, required: false
  private _qualityLink?: number; 
  public get qualityLink() {
    return this.getNumberAttribute('quality_link');
  }
  public set qualityLink(value: number) {
    this._qualityLink = value;
  }
  public resetQualityLink() {
    this._qualityLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityLinkInput() {
    return this._qualityLink;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }

  // shortcut - computed: true, optional: true, required: false
  private _shortcut?: string; 
  public get shortcut() {
    return this.getStringAttribute('shortcut');
  }
  public set shortcut(value: string) {
    this._shortcut = value;
  }
  public resetShortcut() {
    this._shortcut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutInput() {
    return this._shortcut;
  }

  // shortcut_priority - computed: true, optional: true, required: false
  private _shortcutPriority?: string; 
  public get shortcutPriority() {
    return this.getStringAttribute('shortcut_priority');
  }
  public set shortcutPriority(value: string) {
    this._shortcutPriority = value;
  }
  public resetShortcutPriority() {
    this._shortcutPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutPriorityInput() {
    return this._shortcutPriority;
  }

  // sla_compare_method - computed: false, optional: true, required: false
  private _slaCompareMethod?: string; 
  public get slaCompareMethod() {
    return this.getStringAttribute('sla_compare_method');
  }
  public set slaCompareMethod(value: string) {
    this._slaCompareMethod = value;
  }
  public resetSlaCompareMethod() {
    this._slaCompareMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaCompareMethodInput() {
    return this._slaCompareMethod;
  }

  // sla_stickiness - computed: false, optional: true, required: false
  private _slaStickiness?: string; 
  public get slaStickiness() {
    return this.getStringAttribute('sla_stickiness');
  }
  public set slaStickiness(value: string) {
    this._slaStickiness = value;
  }
  public resetSlaStickiness() {
    this._slaStickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaStickinessInput() {
    return this._slaStickiness;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string[]; 
  public get src() {
    return cdktf.Fn.tolist(this.getListAttribute('src'));
  }
  public set src(value: string[]) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src6 - computed: true, optional: true, required: false
  private _src6?: string[]; 
  public get src6() {
    return cdktf.Fn.tolist(this.getListAttribute('src6'));
  }
  public set src6(value: string[]) {
    this._src6 = value;
  }
  public resetSrc6() {
    this._src6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get src6Input() {
    return this._src6;
  }

  // src_negate - computed: true, optional: true, required: false
  private _srcNegate?: string; 
  public get srcNegate() {
    return this.getStringAttribute('src_negate');
  }
  public set srcNegate(value: string) {
    this._srcNegate = value;
  }
  public resetSrcNegate() {
    this._srcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNegateInput() {
    return this._srcNegate;
  }

  // standalone_action - computed: true, optional: true, required: false
  private _standaloneAction?: string; 
  public get standaloneAction() {
    return this.getStringAttribute('standalone_action');
  }
  public set standaloneAction(value: string) {
    this._standaloneAction = value;
  }
  public resetStandaloneAction() {
    this._standaloneAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneActionInput() {
    return this._standaloneAction;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // start_src_port - computed: true, optional: true, required: false
  private _startSrcPort?: number; 
  public get startSrcPort() {
    return this.getNumberAttribute('start_src_port');
  }
  public set startSrcPort(value: number) {
    this._startSrcPort = value;
  }
  public resetStartSrcPort() {
    this._startSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSrcPortInput() {
    return this._startSrcPort;
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

  // tie_break - computed: true, optional: true, required: false
  private _tieBreak?: string; 
  public get tieBreak() {
    return this.getStringAttribute('tie_break');
  }
  public set tieBreak(value: string) {
    this._tieBreak = value;
  }
  public resetTieBreak() {
    this._tieBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieBreakInput() {
    return this._tieBreak;
  }

  // tos - computed: true, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_mask - computed: true, optional: true, required: false
  private _tosMask?: string; 
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }
  public set tosMask(value: string) {
    this._tosMask = value;
  }
  public resetTosMask() {
    this._tosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMaskInput() {
    return this._tosMask;
  }

  // use_shortcut_sla - computed: true, optional: true, required: false
  private _useShortcutSla?: string; 
  public get useShortcutSla() {
    return this.getStringAttribute('use_shortcut_sla');
  }
  public set useShortcutSla(value: string) {
    this._useShortcutSla = value;
  }
  public resetUseShortcutSla() {
    this._useShortcutSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useShortcutSlaInput() {
    return this._useShortcutSla;
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // zone_mode - computed: true, optional: true, required: false
  private _zoneMode?: string; 
  public get zoneMode() {
    return this.getStringAttribute('zone_mode');
  }
  public set zoneMode(value: string) {
    this._zoneMode = value;
  }
  public resetZoneMode() {
    this._zoneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneModeInput() {
    return this._zoneMode;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new SystemSdwanServiceSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: SystemSdwanServiceSla[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }
}

export class SystemSdwanServiceList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanService[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanServiceOutputReference {
    return new SystemSdwanServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSdwanZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#advpn_health_check SystemSdwan#advpn_health_check}
  */
  readonly advpnHealthCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#advpn_select SystemSdwan#advpn_select}
  */
  readonly advpnSelect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#minimum_sla_meet_members SystemSdwan#minimum_sla_meet_members}
  */
  readonly minimumSlaMeetMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#name SystemSdwan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#service_sla_tie_break SystemSdwan#service_sla_tie_break}
  */
  readonly serviceSlaTieBreak?: string;
}

export function systemSdwanZoneToTerraform(struct?: SystemSdwanZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advpn_health_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advpnHealthCheck),
    advpn_select: cdktf.stringToTerraform(struct!.advpnSelect),
    minimum_sla_meet_members: cdktf.numberToTerraform(struct!.minimumSlaMeetMembers),
    name: cdktf.stringToTerraform(struct!.name),
    service_sla_tie_break: cdktf.stringToTerraform(struct!.serviceSlaTieBreak),
  }
}


export function systemSdwanZoneToHclTerraform(struct?: SystemSdwanZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advpn_health_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advpnHealthCheck),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    advpn_select: {
      value: cdktf.stringToHclTerraform(struct!.advpnSelect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_sla_meet_members: {
      value: cdktf.numberToHclTerraform(struct!.minimumSlaMeetMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_sla_tie_break: {
      value: cdktf.stringToHclTerraform(struct!.serviceSlaTieBreak),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSdwanZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSdwanZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advpnHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.advpnHealthCheck = this._advpnHealthCheck;
    }
    if (this._advpnSelect !== undefined) {
      hasAnyValues = true;
      internalValueResult.advpnSelect = this._advpnSelect;
    }
    if (this._minimumSlaMeetMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSlaMeetMembers = this._minimumSlaMeetMembers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceSlaTieBreak !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSlaTieBreak = this._serviceSlaTieBreak;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSdwanZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advpnHealthCheck = undefined;
      this._advpnSelect = undefined;
      this._minimumSlaMeetMembers = undefined;
      this._name = undefined;
      this._serviceSlaTieBreak = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advpnHealthCheck = value.advpnHealthCheck;
      this._advpnSelect = value.advpnSelect;
      this._minimumSlaMeetMembers = value.minimumSlaMeetMembers;
      this._name = value.name;
      this._serviceSlaTieBreak = value.serviceSlaTieBreak;
    }
  }

  // advpn_health_check - computed: true, optional: true, required: false
  private _advpnHealthCheck?: string[]; 
  public get advpnHealthCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('advpn_health_check'));
  }
  public set advpnHealthCheck(value: string[]) {
    this._advpnHealthCheck = value;
  }
  public resetAdvpnHealthCheck() {
    this._advpnHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advpnHealthCheckInput() {
    return this._advpnHealthCheck;
  }

  // advpn_select - computed: true, optional: true, required: false
  private _advpnSelect?: string; 
  public get advpnSelect() {
    return this.getStringAttribute('advpn_select');
  }
  public set advpnSelect(value: string) {
    this._advpnSelect = value;
  }
  public resetAdvpnSelect() {
    this._advpnSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advpnSelectInput() {
    return this._advpnSelect;
  }

  // minimum_sla_meet_members - computed: true, optional: true, required: false
  private _minimumSlaMeetMembers?: number; 
  public get minimumSlaMeetMembers() {
    return this.getNumberAttribute('minimum_sla_meet_members');
  }
  public set minimumSlaMeetMembers(value: number) {
    this._minimumSlaMeetMembers = value;
  }
  public resetMinimumSlaMeetMembers() {
    this._minimumSlaMeetMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSlaMeetMembersInput() {
    return this._minimumSlaMeetMembers;
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

  // service_sla_tie_break - computed: true, optional: true, required: false
  private _serviceSlaTieBreak?: string; 
  public get serviceSlaTieBreak() {
    return this.getStringAttribute('service_sla_tie_break');
  }
  public set serviceSlaTieBreak(value: string) {
    this._serviceSlaTieBreak = value;
  }
  public resetServiceSlaTieBreak() {
    this._serviceSlaTieBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSlaTieBreakInput() {
    return this._serviceSlaTieBreak;
  }
}

export class SystemSdwanZoneList extends cdktf.ComplexList {
  public internalValue? : SystemSdwanZone[] | cdktf.IResolvable

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
  public get(index: number): SystemSdwanZoneOutputReference {
    return new SystemSdwanZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan fmgdevice_system_sdwan}
*/
export class SystemSdwan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sdwan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdwan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdwan to import
  * @param importFromId The id of the existing SystemSdwan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdwan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sdwan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdwan fmgdevice_system_sdwan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdwanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSdwanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sdwan',
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
    this._appPerfLogPeriod = config.appPerfLogPeriod;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._duplicationMaxDiscrepancy = config.duplicationMaxDiscrepancy;
    this._duplicationMaxNum = config.duplicationMaxNum;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failAlertInterfaces = config.failAlertInterfaces;
    this._failDetect = config.failDetect;
    this._id = config.id;
    this._loadBalanceMode = config.loadBalanceMode;
    this._neighborHoldBootTime = config.neighborHoldBootTime;
    this._neighborHoldDown = config.neighborHoldDown;
    this._neighborHoldDownTime = config.neighborHoldDownTime;
    this._option = config.option;
    this._speedtestBypassRouting = config.speedtestBypassRouting;
    this._status = config.status;
    this._duplication.internalValue = config.duplication;
    this._healthCheck.internalValue = config.healthCheck;
    this._healthCheckFortiguard.internalValue = config.healthCheckFortiguard;
    this._members.internalValue = config.members;
    this._neighbor.internalValue = config.neighbor;
    this._service.internalValue = config.service;
    this._zone.internalValue = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_perf_log_period - computed: false, optional: true, required: false
  private _appPerfLogPeriod?: number; 
  public get appPerfLogPeriod() {
    return this.getNumberAttribute('app_perf_log_period');
  }
  public set appPerfLogPeriod(value: number) {
    this._appPerfLogPeriod = value;
  }
  public resetAppPerfLogPeriod() {
    this._appPerfLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPerfLogPeriodInput() {
    return this._appPerfLogPeriod;
  }

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

  // duplication_max_discrepancy - computed: true, optional: true, required: false
  private _duplicationMaxDiscrepancy?: number; 
  public get duplicationMaxDiscrepancy() {
    return this.getNumberAttribute('duplication_max_discrepancy');
  }
  public set duplicationMaxDiscrepancy(value: number) {
    this._duplicationMaxDiscrepancy = value;
  }
  public resetDuplicationMaxDiscrepancy() {
    this._duplicationMaxDiscrepancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationMaxDiscrepancyInput() {
    return this._duplicationMaxDiscrepancy;
  }

  // duplication_max_num - computed: true, optional: true, required: false
  private _duplicationMaxNum?: number; 
  public get duplicationMaxNum() {
    return this.getNumberAttribute('duplication_max_num');
  }
  public set duplicationMaxNum(value: number) {
    this._duplicationMaxNum = value;
  }
  public resetDuplicationMaxNum() {
    this._duplicationMaxNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationMaxNumInput() {
    return this._duplicationMaxNum;
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

  // fail_alert_interfaces - computed: true, optional: true, required: false
  private _failAlertInterfaces?: string[]; 
  public get failAlertInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_alert_interfaces'));
  }
  public set failAlertInterfaces(value: string[]) {
    this._failAlertInterfaces = value;
  }
  public resetFailAlertInterfaces() {
    this._failAlertInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAlertInterfacesInput() {
    return this._failAlertInterfaces;
  }

  // fail_detect - computed: true, optional: true, required: false
  private _failDetect?: string; 
  public get failDetect() {
    return this.getStringAttribute('fail_detect');
  }
  public set failDetect(value: string) {
    this._failDetect = value;
  }
  public resetFailDetect() {
    this._failDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failDetectInput() {
    return this._failDetect;
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

  // load_balance_mode - computed: true, optional: true, required: false
  private _loadBalanceMode?: string; 
  public get loadBalanceMode() {
    return this.getStringAttribute('load_balance_mode');
  }
  public set loadBalanceMode(value: string) {
    this._loadBalanceMode = value;
  }
  public resetLoadBalanceMode() {
    this._loadBalanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceModeInput() {
    return this._loadBalanceMode;
  }

  // neighbor_hold_boot_time - computed: false, optional: true, required: false
  private _neighborHoldBootTime?: number; 
  public get neighborHoldBootTime() {
    return this.getNumberAttribute('neighbor_hold_boot_time');
  }
  public set neighborHoldBootTime(value: number) {
    this._neighborHoldBootTime = value;
  }
  public resetNeighborHoldBootTime() {
    this._neighborHoldBootTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborHoldBootTimeInput() {
    return this._neighborHoldBootTime;
  }

  // neighbor_hold_down - computed: true, optional: true, required: false
  private _neighborHoldDown?: string; 
  public get neighborHoldDown() {
    return this.getStringAttribute('neighbor_hold_down');
  }
  public set neighborHoldDown(value: string) {
    this._neighborHoldDown = value;
  }
  public resetNeighborHoldDown() {
    this._neighborHoldDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborHoldDownInput() {
    return this._neighborHoldDown;
  }

  // neighbor_hold_down_time - computed: false, optional: true, required: false
  private _neighborHoldDownTime?: number; 
  public get neighborHoldDownTime() {
    return this.getNumberAttribute('neighbor_hold_down_time');
  }
  public set neighborHoldDownTime(value: number) {
    this._neighborHoldDownTime = value;
  }
  public resetNeighborHoldDownTime() {
    this._neighborHoldDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborHoldDownTimeInput() {
    return this._neighborHoldDownTime;
  }

  // option - computed: true, optional: true, required: false
  private _option?: string[]; 
  public get option() {
    return cdktf.Fn.tolist(this.getListAttribute('option'));
  }
  public set option(value: string[]) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // speedtest_bypass_routing - computed: true, optional: true, required: false
  private _speedtestBypassRouting?: string; 
  public get speedtestBypassRouting() {
    return this.getStringAttribute('speedtest_bypass_routing');
  }
  public set speedtestBypassRouting(value: string) {
    this._speedtestBypassRouting = value;
  }
  public resetSpeedtestBypassRouting() {
    this._speedtestBypassRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedtestBypassRoutingInput() {
    return this._speedtestBypassRouting;
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

  // duplication - computed: false, optional: true, required: false
  private _duplication = new SystemSdwanDuplicationList(this, "duplication", false);
  public get duplication() {
    return this._duplication;
  }
  public putDuplication(value: SystemSdwanDuplication[] | cdktf.IResolvable) {
    this._duplication.internalValue = value;
  }
  public resetDuplication() {
    this._duplication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicationInput() {
    return this._duplication.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new SystemSdwanHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: SystemSdwanHealthCheck[] | cdktf.IResolvable) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // health_check_fortiguard - computed: false, optional: true, required: false
  private _healthCheckFortiguard = new SystemSdwanHealthCheckFortiguardList(this, "health_check_fortiguard", false);
  public get healthCheckFortiguard() {
    return this._healthCheckFortiguard;
  }
  public putHealthCheckFortiguard(value: SystemSdwanHealthCheckFortiguard[] | cdktf.IResolvable) {
    this._healthCheckFortiguard.internalValue = value;
  }
  public resetHealthCheckFortiguard() {
    this._healthCheckFortiguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckFortiguardInput() {
    return this._healthCheckFortiguard.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new SystemSdwanMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: SystemSdwanMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new SystemSdwanNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: SystemSdwanNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new SystemSdwanServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: SystemSdwanService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // zone - computed: false, optional: true, required: false
  private _zone = new SystemSdwanZoneList(this, "zone", false);
  public get zone() {
    return this._zone;
  }
  public putZone(value: SystemSdwanZone[] | cdktf.IResolvable) {
    this._zone.internalValue = value;
  }
  public resetZone() {
    this._zone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_perf_log_period: cdktf.numberToTerraform(this._appPerfLogPeriod),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      duplication_max_discrepancy: cdktf.numberToTerraform(this._duplicationMaxDiscrepancy),
      duplication_max_num: cdktf.numberToTerraform(this._duplicationMaxNum),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fail_alert_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._failAlertInterfaces),
      fail_detect: cdktf.stringToTerraform(this._failDetect),
      id: cdktf.stringToTerraform(this._id),
      load_balance_mode: cdktf.stringToTerraform(this._loadBalanceMode),
      neighbor_hold_boot_time: cdktf.numberToTerraform(this._neighborHoldBootTime),
      neighbor_hold_down: cdktf.stringToTerraform(this._neighborHoldDown),
      neighbor_hold_down_time: cdktf.numberToTerraform(this._neighborHoldDownTime),
      option: cdktf.listMapper(cdktf.stringToTerraform, false)(this._option),
      speedtest_bypass_routing: cdktf.stringToTerraform(this._speedtestBypassRouting),
      status: cdktf.stringToTerraform(this._status),
      duplication: cdktf.listMapper(systemSdwanDuplicationToTerraform, true)(this._duplication.internalValue),
      health_check: cdktf.listMapper(systemSdwanHealthCheckToTerraform, true)(this._healthCheck.internalValue),
      health_check_fortiguard: cdktf.listMapper(systemSdwanHealthCheckFortiguardToTerraform, true)(this._healthCheckFortiguard.internalValue),
      members: cdktf.listMapper(systemSdwanMembersToTerraform, true)(this._members.internalValue),
      neighbor: cdktf.listMapper(systemSdwanNeighborToTerraform, true)(this._neighbor.internalValue),
      service: cdktf.listMapper(systemSdwanServiceToTerraform, true)(this._service.internalValue),
      zone: cdktf.listMapper(systemSdwanZoneToTerraform, true)(this._zone.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_perf_log_period: {
        value: cdktf.numberToHclTerraform(this._appPerfLogPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      duplication_max_discrepancy: {
        value: cdktf.numberToHclTerraform(this._duplicationMaxDiscrepancy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duplication_max_num: {
        value: cdktf.numberToHclTerraform(this._duplicationMaxNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_alert_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._failAlertInterfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fail_detect: {
        value: cdktf.stringToHclTerraform(this._failDetect),
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
      load_balance_mode: {
        value: cdktf.stringToHclTerraform(this._loadBalanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_hold_boot_time: {
        value: cdktf.numberToHclTerraform(this._neighborHoldBootTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neighbor_hold_down: {
        value: cdktf.stringToHclTerraform(this._neighborHoldDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_hold_down_time: {
        value: cdktf.numberToHclTerraform(this._neighborHoldDownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      option: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._option),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      speedtest_bypass_routing: {
        value: cdktf.stringToHclTerraform(this._speedtestBypassRouting),
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
      duplication: {
        value: cdktf.listMapperHcl(systemSdwanDuplicationToHclTerraform, true)(this._duplication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanDuplicationList",
      },
      health_check: {
        value: cdktf.listMapperHcl(systemSdwanHealthCheckToHclTerraform, true)(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanHealthCheckList",
      },
      health_check_fortiguard: {
        value: cdktf.listMapperHcl(systemSdwanHealthCheckFortiguardToHclTerraform, true)(this._healthCheckFortiguard.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanHealthCheckFortiguardList",
      },
      members: {
        value: cdktf.listMapperHcl(systemSdwanMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanMembersList",
      },
      neighbor: {
        value: cdktf.listMapperHcl(systemSdwanNeighborToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanNeighborList",
      },
      service: {
        value: cdktf.listMapperHcl(systemSdwanServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanServiceList",
      },
      zone: {
        value: cdktf.listMapperHcl(systemSdwanZoneToHclTerraform, true)(this._zone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSdwanZoneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
