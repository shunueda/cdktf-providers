// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderHealthSourceNatStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#id DataThunderHealthSourceNatStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#stats DataThunderHealthSourceNatStats#stats}
  */
  readonly stats?: DataThunderHealthSourceNatStatsStats;
}
export interface DataThunderHealthSourceNatStatsStats {
  /**
  * Packets received from standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#act_recv_from_sby DataThunderHealthSourceNatStats#act_recv_from_sby}
  */
  readonly actRecvFromSby?: number;
  /**
  * Packets sent to standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#act_send_to_sby DataThunderHealthSourceNatStats#act_send_to_sby}
  */
  readonly actSendToSby?: number;
  /**
  * DCMSG error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#dcmsg_err DataThunderHealthSourceNatStats#dcmsg_err}
  */
  readonly dcmsgErr?: number;
  /**
  * Fragmentation error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#frag_err DataThunderHealthSourceNatStats#frag_err}
  */
  readonly fragErr?: number;
  /**
  * NAT resource error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#nat_resource_err DataThunderHealthSourceNatStats#nat_resource_err}
  */
  readonly natResourceErr?: number;
  /**
  * SLB object not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#no_slb_object DataThunderHealthSourceNatStats#no_slb_object}
  */
  readonly noSlbObject?: number;
  /**
  * Packets received from kernel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#recv_from_kernel DataThunderHealthSourceNatStats#recv_from_kernel}
  */
  readonly recvFromKernel?: number;
  /**
  * Peer not found on standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#sby_no_peer DataThunderHealthSourceNatStats#sby_no_peer}
  */
  readonly sbyNoPeer?: number;
  /**
  * Packets received from active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#sby_recv_from_act DataThunderHealthSourceNatStats#sby_recv_from_act}
  */
  readonly sbyRecvFromAct?: number;
  /**
  * Packets received from active error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#sby_recv_from_act_err DataThunderHealthSourceNatStats#sby_recv_from_act_err}
  */
  readonly sbyRecvFromActErr?: number;
  /**
  * Packets sent to active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#sby_send_to_act DataThunderHealthSourceNatStats#sby_send_to_act}
  */
  readonly sbySendToAct?: number;
  /**
  * Packets sent to kernel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#send_to_kernel DataThunderHealthSourceNatStats#send_to_kernel}
  */
  readonly sendToKernel?: number;
  /**
  * Packets sent to kernel error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#send_to_kernel_err DataThunderHealthSourceNatStats#send_to_kernel_err}
  */
  readonly sendToKernelErr?: number;
  /**
  * Smart NAT instance initialization error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#smart_nat_init_inst_err DataThunderHealthSourceNatStats#smart_nat_init_inst_err}
  */
  readonly smartNatInitInstErr?: number;
  /**
  * Smart NAT port initialization error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#smart_nat_init_port_err DataThunderHealthSourceNatStats#smart_nat_init_port_err}
  */
  readonly smartNatInitPortErr?: number;
  /**
  * Smart NAT rserver ip update error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#smart_nat_rserver_ip_err DataThunderHealthSourceNatStats#smart_nat_rserver_ip_err}
  */
  readonly smartNatRserverIpErr?: number;
  /**
  * Smart NAT rserver route update error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#smart_nat_rserver_route_err DataThunderHealthSourceNatStats#smart_nat_rserver_route_err}
  */
  readonly smartNatRserverRouteErr?: number;
}

export function dataThunderHealthSourceNatStatsStatsToTerraform(struct?: DataThunderHealthSourceNatStatsStatsOutputReference | DataThunderHealthSourceNatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    act_recv_from_sby: cdktf.numberToTerraform(struct!.actRecvFromSby),
    act_send_to_sby: cdktf.numberToTerraform(struct!.actSendToSby),
    dcmsg_err: cdktf.numberToTerraform(struct!.dcmsgErr),
    frag_err: cdktf.numberToTerraform(struct!.fragErr),
    nat_resource_err: cdktf.numberToTerraform(struct!.natResourceErr),
    no_slb_object: cdktf.numberToTerraform(struct!.noSlbObject),
    recv_from_kernel: cdktf.numberToTerraform(struct!.recvFromKernel),
    sby_no_peer: cdktf.numberToTerraform(struct!.sbyNoPeer),
    sby_recv_from_act: cdktf.numberToTerraform(struct!.sbyRecvFromAct),
    sby_recv_from_act_err: cdktf.numberToTerraform(struct!.sbyRecvFromActErr),
    sby_send_to_act: cdktf.numberToTerraform(struct!.sbySendToAct),
    send_to_kernel: cdktf.numberToTerraform(struct!.sendToKernel),
    send_to_kernel_err: cdktf.numberToTerraform(struct!.sendToKernelErr),
    smart_nat_init_inst_err: cdktf.numberToTerraform(struct!.smartNatInitInstErr),
    smart_nat_init_port_err: cdktf.numberToTerraform(struct!.smartNatInitPortErr),
    smart_nat_rserver_ip_err: cdktf.numberToTerraform(struct!.smartNatRserverIpErr),
    smart_nat_rserver_route_err: cdktf.numberToTerraform(struct!.smartNatRserverRouteErr),
  }
}


export function dataThunderHealthSourceNatStatsStatsToHclTerraform(struct?: DataThunderHealthSourceNatStatsStatsOutputReference | DataThunderHealthSourceNatStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    act_recv_from_sby: {
      value: cdktf.numberToHclTerraform(struct!.actRecvFromSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    act_send_to_sby: {
      value: cdktf.numberToHclTerraform(struct!.actSendToSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_err: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_err: {
      value: cdktf.numberToHclTerraform(struct!.fragErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_resource_err: {
      value: cdktf.numberToHclTerraform(struct!.natResourceErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_slb_object: {
      value: cdktf.numberToHclTerraform(struct!.noSlbObject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_from_kernel: {
      value: cdktf.numberToHclTerraform(struct!.recvFromKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_no_peer: {
      value: cdktf.numberToHclTerraform(struct!.sbyNoPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_recv_from_act: {
      value: cdktf.numberToHclTerraform(struct!.sbyRecvFromAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_recv_from_act_err: {
      value: cdktf.numberToHclTerraform(struct!.sbyRecvFromActErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_send_to_act: {
      value: cdktf.numberToHclTerraform(struct!.sbySendToAct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_to_kernel: {
      value: cdktf.numberToHclTerraform(struct!.sendToKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_to_kernel_err: {
      value: cdktf.numberToHclTerraform(struct!.sendToKernelErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_init_inst_err: {
      value: cdktf.numberToHclTerraform(struct!.smartNatInitInstErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_init_port_err: {
      value: cdktf.numberToHclTerraform(struct!.smartNatInitPortErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_rserver_ip_err: {
      value: cdktf.numberToHclTerraform(struct!.smartNatRserverIpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_rserver_route_err: {
      value: cdktf.numberToHclTerraform(struct!.smartNatRserverRouteErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderHealthSourceNatStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderHealthSourceNatStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actRecvFromSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.actRecvFromSby = this._actRecvFromSby;
    }
    if (this._actSendToSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.actSendToSby = this._actSendToSby;
    }
    if (this._dcmsgErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgErr = this._dcmsgErr;
    }
    if (this._fragErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragErr = this._fragErr;
    }
    if (this._natResourceErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.natResourceErr = this._natResourceErr;
    }
    if (this._noSlbObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSlbObject = this._noSlbObject;
    }
    if (this._recvFromKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvFromKernel = this._recvFromKernel;
    }
    if (this._sbyNoPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbyNoPeer = this._sbyNoPeer;
    }
    if (this._sbyRecvFromAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbyRecvFromAct = this._sbyRecvFromAct;
    }
    if (this._sbyRecvFromActErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbyRecvFromActErr = this._sbyRecvFromActErr;
    }
    if (this._sbySendToAct !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbySendToAct = this._sbySendToAct;
    }
    if (this._sendToKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToKernel = this._sendToKernel;
    }
    if (this._sendToKernelErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToKernelErr = this._sendToKernelErr;
    }
    if (this._smartNatInitInstErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatInitInstErr = this._smartNatInitInstErr;
    }
    if (this._smartNatInitPortErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatInitPortErr = this._smartNatInitPortErr;
    }
    if (this._smartNatRserverIpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatRserverIpErr = this._smartNatRserverIpErr;
    }
    if (this._smartNatRserverRouteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatRserverRouteErr = this._smartNatRserverRouteErr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderHealthSourceNatStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actRecvFromSby = undefined;
      this._actSendToSby = undefined;
      this._dcmsgErr = undefined;
      this._fragErr = undefined;
      this._natResourceErr = undefined;
      this._noSlbObject = undefined;
      this._recvFromKernel = undefined;
      this._sbyNoPeer = undefined;
      this._sbyRecvFromAct = undefined;
      this._sbyRecvFromActErr = undefined;
      this._sbySendToAct = undefined;
      this._sendToKernel = undefined;
      this._sendToKernelErr = undefined;
      this._smartNatInitInstErr = undefined;
      this._smartNatInitPortErr = undefined;
      this._smartNatRserverIpErr = undefined;
      this._smartNatRserverRouteErr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actRecvFromSby = value.actRecvFromSby;
      this._actSendToSby = value.actSendToSby;
      this._dcmsgErr = value.dcmsgErr;
      this._fragErr = value.fragErr;
      this._natResourceErr = value.natResourceErr;
      this._noSlbObject = value.noSlbObject;
      this._recvFromKernel = value.recvFromKernel;
      this._sbyNoPeer = value.sbyNoPeer;
      this._sbyRecvFromAct = value.sbyRecvFromAct;
      this._sbyRecvFromActErr = value.sbyRecvFromActErr;
      this._sbySendToAct = value.sbySendToAct;
      this._sendToKernel = value.sendToKernel;
      this._sendToKernelErr = value.sendToKernelErr;
      this._smartNatInitInstErr = value.smartNatInitInstErr;
      this._smartNatInitPortErr = value.smartNatInitPortErr;
      this._smartNatRserverIpErr = value.smartNatRserverIpErr;
      this._smartNatRserverRouteErr = value.smartNatRserverRouteErr;
    }
  }

  // act_recv_from_sby - computed: false, optional: true, required: false
  private _actRecvFromSby?: number; 
  public get actRecvFromSby() {
    return this.getNumberAttribute('act_recv_from_sby');
  }
  public set actRecvFromSby(value: number) {
    this._actRecvFromSby = value;
  }
  public resetActRecvFromSby() {
    this._actRecvFromSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actRecvFromSbyInput() {
    return this._actRecvFromSby;
  }

  // act_send_to_sby - computed: false, optional: true, required: false
  private _actSendToSby?: number; 
  public get actSendToSby() {
    return this.getNumberAttribute('act_send_to_sby');
  }
  public set actSendToSby(value: number) {
    this._actSendToSby = value;
  }
  public resetActSendToSby() {
    this._actSendToSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actSendToSbyInput() {
    return this._actSendToSby;
  }

  // dcmsg_err - computed: false, optional: true, required: false
  private _dcmsgErr?: number; 
  public get dcmsgErr() {
    return this.getNumberAttribute('dcmsg_err');
  }
  public set dcmsgErr(value: number) {
    this._dcmsgErr = value;
  }
  public resetDcmsgErr() {
    this._dcmsgErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgErrInput() {
    return this._dcmsgErr;
  }

  // frag_err - computed: false, optional: true, required: false
  private _fragErr?: number; 
  public get fragErr() {
    return this.getNumberAttribute('frag_err');
  }
  public set fragErr(value: number) {
    this._fragErr = value;
  }
  public resetFragErr() {
    this._fragErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragErrInput() {
    return this._fragErr;
  }

  // nat_resource_err - computed: false, optional: true, required: false
  private _natResourceErr?: number; 
  public get natResourceErr() {
    return this.getNumberAttribute('nat_resource_err');
  }
  public set natResourceErr(value: number) {
    this._natResourceErr = value;
  }
  public resetNatResourceErr() {
    this._natResourceErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natResourceErrInput() {
    return this._natResourceErr;
  }

  // no_slb_object - computed: false, optional: true, required: false
  private _noSlbObject?: number; 
  public get noSlbObject() {
    return this.getNumberAttribute('no_slb_object');
  }
  public set noSlbObject(value: number) {
    this._noSlbObject = value;
  }
  public resetNoSlbObject() {
    this._noSlbObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSlbObjectInput() {
    return this._noSlbObject;
  }

  // recv_from_kernel - computed: false, optional: true, required: false
  private _recvFromKernel?: number; 
  public get recvFromKernel() {
    return this.getNumberAttribute('recv_from_kernel');
  }
  public set recvFromKernel(value: number) {
    this._recvFromKernel = value;
  }
  public resetRecvFromKernel() {
    this._recvFromKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvFromKernelInput() {
    return this._recvFromKernel;
  }

  // sby_no_peer - computed: false, optional: true, required: false
  private _sbyNoPeer?: number; 
  public get sbyNoPeer() {
    return this.getNumberAttribute('sby_no_peer');
  }
  public set sbyNoPeer(value: number) {
    this._sbyNoPeer = value;
  }
  public resetSbyNoPeer() {
    this._sbyNoPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbyNoPeerInput() {
    return this._sbyNoPeer;
  }

  // sby_recv_from_act - computed: false, optional: true, required: false
  private _sbyRecvFromAct?: number; 
  public get sbyRecvFromAct() {
    return this.getNumberAttribute('sby_recv_from_act');
  }
  public set sbyRecvFromAct(value: number) {
    this._sbyRecvFromAct = value;
  }
  public resetSbyRecvFromAct() {
    this._sbyRecvFromAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbyRecvFromActInput() {
    return this._sbyRecvFromAct;
  }

  // sby_recv_from_act_err - computed: false, optional: true, required: false
  private _sbyRecvFromActErr?: number; 
  public get sbyRecvFromActErr() {
    return this.getNumberAttribute('sby_recv_from_act_err');
  }
  public set sbyRecvFromActErr(value: number) {
    this._sbyRecvFromActErr = value;
  }
  public resetSbyRecvFromActErr() {
    this._sbyRecvFromActErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbyRecvFromActErrInput() {
    return this._sbyRecvFromActErr;
  }

  // sby_send_to_act - computed: false, optional: true, required: false
  private _sbySendToAct?: number; 
  public get sbySendToAct() {
    return this.getNumberAttribute('sby_send_to_act');
  }
  public set sbySendToAct(value: number) {
    this._sbySendToAct = value;
  }
  public resetSbySendToAct() {
    this._sbySendToAct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbySendToActInput() {
    return this._sbySendToAct;
  }

  // send_to_kernel - computed: false, optional: true, required: false
  private _sendToKernel?: number; 
  public get sendToKernel() {
    return this.getNumberAttribute('send_to_kernel');
  }
  public set sendToKernel(value: number) {
    this._sendToKernel = value;
  }
  public resetSendToKernel() {
    this._sendToKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToKernelInput() {
    return this._sendToKernel;
  }

  // send_to_kernel_err - computed: false, optional: true, required: false
  private _sendToKernelErr?: number; 
  public get sendToKernelErr() {
    return this.getNumberAttribute('send_to_kernel_err');
  }
  public set sendToKernelErr(value: number) {
    this._sendToKernelErr = value;
  }
  public resetSendToKernelErr() {
    this._sendToKernelErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToKernelErrInput() {
    return this._sendToKernelErr;
  }

  // smart_nat_init_inst_err - computed: false, optional: true, required: false
  private _smartNatInitInstErr?: number; 
  public get smartNatInitInstErr() {
    return this.getNumberAttribute('smart_nat_init_inst_err');
  }
  public set smartNatInitInstErr(value: number) {
    this._smartNatInitInstErr = value;
  }
  public resetSmartNatInitInstErr() {
    this._smartNatInitInstErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatInitInstErrInput() {
    return this._smartNatInitInstErr;
  }

  // smart_nat_init_port_err - computed: false, optional: true, required: false
  private _smartNatInitPortErr?: number; 
  public get smartNatInitPortErr() {
    return this.getNumberAttribute('smart_nat_init_port_err');
  }
  public set smartNatInitPortErr(value: number) {
    this._smartNatInitPortErr = value;
  }
  public resetSmartNatInitPortErr() {
    this._smartNatInitPortErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatInitPortErrInput() {
    return this._smartNatInitPortErr;
  }

  // smart_nat_rserver_ip_err - computed: false, optional: true, required: false
  private _smartNatRserverIpErr?: number; 
  public get smartNatRserverIpErr() {
    return this.getNumberAttribute('smart_nat_rserver_ip_err');
  }
  public set smartNatRserverIpErr(value: number) {
    this._smartNatRserverIpErr = value;
  }
  public resetSmartNatRserverIpErr() {
    this._smartNatRserverIpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatRserverIpErrInput() {
    return this._smartNatRserverIpErr;
  }

  // smart_nat_rserver_route_err - computed: false, optional: true, required: false
  private _smartNatRserverRouteErr?: number; 
  public get smartNatRserverRouteErr() {
    return this.getNumberAttribute('smart_nat_rserver_route_err');
  }
  public set smartNatRserverRouteErr(value: number) {
    this._smartNatRserverRouteErr = value;
  }
  public resetSmartNatRserverRouteErr() {
    this._smartNatRserverRouteErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatRserverRouteErrInput() {
    return this._smartNatRserverRouteErr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats thunder_health_source_nat_stats}
*/
export class DataThunderHealthSourceNatStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_source_nat_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderHealthSourceNatStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderHealthSourceNatStats to import
  * @param importFromId The id of the existing DataThunderHealthSourceNatStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderHealthSourceNatStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_source_nat_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/health_source_nat_stats thunder_health_source_nat_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderHealthSourceNatStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderHealthSourceNatStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_source_nat_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderHealthSourceNatStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderHealthSourceNatStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderHealthSourceNatStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderHealthSourceNatStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderHealthSourceNatStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
