// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServerPortStatsPortDiameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#id SlbServerPortStatsPortDiameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#port_number SlbServerPortStatsPortDiameter#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#protocol SlbServerPortStatsPortDiameter#protocol}
  */
  readonly protocol: string;
  /**
  * Server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#server_name SlbServerPortStatsPortDiameter#server_name}
  */
  readonly serverName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#stats SlbServerPortStatsPortDiameter#stats}
  */
  readonly stats?: SlbServerPortStatsPortDiameterStats;
}
export interface SlbServerPortStatsPortDiameterStatsPortDiameter {
  /**
  * Number of ACAs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#aca_in SlbServerPortStatsPortDiameter#aca_in}
  */
  readonly acaIn?: number;
  /**
  * Number of ACAs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#aca_out SlbServerPortStatsPortDiameter#aca_out}
  */
  readonly acaOut?: number;
  /**
  * Number of ACRs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#acr_in SlbServerPortStatsPortDiameter#acr_in}
  */
  readonly acrIn?: number;
  /**
  * Number of ACRs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#acr_out SlbServerPortStatsPortDiameter#acr_out}
  */
  readonly acrOut?: number;
  /**
  * Number of ASAs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#asa_in SlbServerPortStatsPortDiameter#asa_in}
  */
  readonly asaIn?: number;
  /**
  * Number of ASAs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#asa_out SlbServerPortStatsPortDiameter#asa_out}
  */
  readonly asaOut?: number;
  /**
  * Number of ASRs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#asr_in SlbServerPortStatsPortDiameter#asr_in}
  */
  readonly asrIn?: number;
  /**
  * Number of ASRs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#asr_out SlbServerPortStatsPortDiameter#asr_out}
  */
  readonly asrOut?: number;
  /**
  * Number of CCAs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#cca_in SlbServerPortStatsPortDiameter#cca_in}
  */
  readonly ccaIn?: number;
  /**
  * Number of CCAs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#cca_out SlbServerPortStatsPortDiameter#cca_out}
  */
  readonly ccaOut?: number;
  /**
  * Number of CCRs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#ccr_in SlbServerPortStatsPortDiameter#ccr_in}
  */
  readonly ccrIn?: number;
  /**
  * Number of CCRs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#ccr_out SlbServerPortStatsPortDiameter#ccr_out}
  */
  readonly ccrOut?: number;
  /**
  * Number of CEAs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#cea_in SlbServerPortStatsPortDiameter#cea_in}
  */
  readonly ceaIn?: number;
  /**
  * Number of CEAs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#cea_out SlbServerPortStatsPortDiameter#cea_out}
  */
  readonly ceaOut?: number;
  /**
  * Number of CERs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#cer_in SlbServerPortStatsPortDiameter#cer_in}
  */
  readonly cerIn?: number;
  /**
  * Number of CERs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#cer_out SlbServerPortStatsPortDiameter#cer_out}
  */
  readonly cerOut?: number;
  /**
  * Number of client failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#client_fail SlbServerPortStatsPortDiameter#client_fail}
  */
  readonly clientFail?: number;
  /**
  * Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#curr SlbServerPortStatsPortDiameter#curr}
  */
  readonly curr?: number;
  /**
  * Number of DPAs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dpa_in SlbServerPortStatsPortDiameter#dpa_in}
  */
  readonly dpaIn?: number;
  /**
  * Number of DPAs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dpa_out SlbServerPortStatsPortDiameter#dpa_out}
  */
  readonly dpaOut?: number;
  /**
  * Number of DPRs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dpr_in SlbServerPortStatsPortDiameter#dpr_in}
  */
  readonly dprIn?: number;
  /**
  * Number of DPRs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dpr_out SlbServerPortStatsPortDiameter#dpr_out}
  */
  readonly dprOut?: number;
  /**
  * Number of DWAs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dwa_in SlbServerPortStatsPortDiameter#dwa_in}
  */
  readonly dwaIn?: number;
  /**
  * Number of DWAs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dwa_out SlbServerPortStatsPortDiameter#dwa_out}
  */
  readonly dwaOut?: number;
  /**
  * Number of DWRs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dwr_in SlbServerPortStatsPortDiameter#dwr_in}
  */
  readonly dwrIn?: number;
  /**
  * Number of DWRs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#dwr_out SlbServerPortStatsPortDiameter#dwr_out}
  */
  readonly dwrOut?: number;
  /**
  * Number of no routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#no_route SlbServerPortStatsPortDiameter#no_route}
  */
  readonly noRoute?: number;
  /**
  * Number of no sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#no_sess SlbServerPortStatsPortDiameter#no_sess}
  */
  readonly noSess?: number;
  /**
  * Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#num SlbServerPortStatsPortDiameter#num}
  */
  readonly num?: number;
  /**
  * Number of other messages in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#other_in SlbServerPortStatsPortDiameter#other_in}
  */
  readonly otherIn?: number;
  /**
  * Number of other messages out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#other_out SlbServerPortStatsPortDiameter#other_out}
  */
  readonly otherOut?: number;
  /**
  * Number of server failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#server_fail SlbServerPortStatsPortDiameter#server_fail}
  */
  readonly serverFail?: number;
  /**
  * Number of snat failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#snat_fail SlbServerPortStatsPortDiameter#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Number of STAs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#sta_in SlbServerPortStatsPortDiameter#sta_in}
  */
  readonly staIn?: number;
  /**
  * Number of STAs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#sta_out SlbServerPortStatsPortDiameter#sta_out}
  */
  readonly staOut?: number;
  /**
  * Number of STRs in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#str_in SlbServerPortStatsPortDiameter#str_in}
  */
  readonly strIn?: number;
  /**
  * Number of STRs out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#str_out SlbServerPortStatsPortDiameter#str_out}
  */
  readonly strOut?: number;
  /**
  * Number of server selection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#svrsel_fail SlbServerPortStatsPortDiameter#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#total SlbServerPortStatsPortDiameter#total}
  */
  readonly total?: number;
  /**
  * Number of user sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#user_session SlbServerPortStatsPortDiameter#user_session}
  */
  readonly userSession?: number;
}

export function slbServerPortStatsPortDiameterStatsPortDiameterToTerraform(struct?: SlbServerPortStatsPortDiameterStatsPortDiameterOutputReference | SlbServerPortStatsPortDiameterStatsPortDiameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aca_in: cdktf.numberToTerraform(struct!.acaIn),
    aca_out: cdktf.numberToTerraform(struct!.acaOut),
    acr_in: cdktf.numberToTerraform(struct!.acrIn),
    acr_out: cdktf.numberToTerraform(struct!.acrOut),
    asa_in: cdktf.numberToTerraform(struct!.asaIn),
    asa_out: cdktf.numberToTerraform(struct!.asaOut),
    asr_in: cdktf.numberToTerraform(struct!.asrIn),
    asr_out: cdktf.numberToTerraform(struct!.asrOut),
    cca_in: cdktf.numberToTerraform(struct!.ccaIn),
    cca_out: cdktf.numberToTerraform(struct!.ccaOut),
    ccr_in: cdktf.numberToTerraform(struct!.ccrIn),
    ccr_out: cdktf.numberToTerraform(struct!.ccrOut),
    cea_in: cdktf.numberToTerraform(struct!.ceaIn),
    cea_out: cdktf.numberToTerraform(struct!.ceaOut),
    cer_in: cdktf.numberToTerraform(struct!.cerIn),
    cer_out: cdktf.numberToTerraform(struct!.cerOut),
    client_fail: cdktf.numberToTerraform(struct!.clientFail),
    curr: cdktf.numberToTerraform(struct!.curr),
    dpa_in: cdktf.numberToTerraform(struct!.dpaIn),
    dpa_out: cdktf.numberToTerraform(struct!.dpaOut),
    dpr_in: cdktf.numberToTerraform(struct!.dprIn),
    dpr_out: cdktf.numberToTerraform(struct!.dprOut),
    dwa_in: cdktf.numberToTerraform(struct!.dwaIn),
    dwa_out: cdktf.numberToTerraform(struct!.dwaOut),
    dwr_in: cdktf.numberToTerraform(struct!.dwrIn),
    dwr_out: cdktf.numberToTerraform(struct!.dwrOut),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    no_sess: cdktf.numberToTerraform(struct!.noSess),
    num: cdktf.numberToTerraform(struct!.num),
    other_in: cdktf.numberToTerraform(struct!.otherIn),
    other_out: cdktf.numberToTerraform(struct!.otherOut),
    server_fail: cdktf.numberToTerraform(struct!.serverFail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    sta_in: cdktf.numberToTerraform(struct!.staIn),
    sta_out: cdktf.numberToTerraform(struct!.staOut),
    str_in: cdktf.numberToTerraform(struct!.strIn),
    str_out: cdktf.numberToTerraform(struct!.strOut),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    total: cdktf.numberToTerraform(struct!.total),
    user_session: cdktf.numberToTerraform(struct!.userSession),
  }
}


export function slbServerPortStatsPortDiameterStatsPortDiameterToHclTerraform(struct?: SlbServerPortStatsPortDiameterStatsPortDiameterOutputReference | SlbServerPortStatsPortDiameterStatsPortDiameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aca_in: {
      value: cdktf.numberToHclTerraform(struct!.acaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aca_out: {
      value: cdktf.numberToHclTerraform(struct!.acaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acr_in: {
      value: cdktf.numberToHclTerraform(struct!.acrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acr_out: {
      value: cdktf.numberToHclTerraform(struct!.acrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asa_in: {
      value: cdktf.numberToHclTerraform(struct!.asaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asa_out: {
      value: cdktf.numberToHclTerraform(struct!.asaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asr_in: {
      value: cdktf.numberToHclTerraform(struct!.asrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asr_out: {
      value: cdktf.numberToHclTerraform(struct!.asrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cca_in: {
      value: cdktf.numberToHclTerraform(struct!.ccaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cca_out: {
      value: cdktf.numberToHclTerraform(struct!.ccaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccr_in: {
      value: cdktf.numberToHclTerraform(struct!.ccrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccr_out: {
      value: cdktf.numberToHclTerraform(struct!.ccrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cea_in: {
      value: cdktf.numberToHclTerraform(struct!.ceaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cea_out: {
      value: cdktf.numberToHclTerraform(struct!.ceaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cer_in: {
      value: cdktf.numberToHclTerraform(struct!.cerIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cer_out: {
      value: cdktf.numberToHclTerraform(struct!.cerOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr: {
      value: cdktf.numberToHclTerraform(struct!.curr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpa_in: {
      value: cdktf.numberToHclTerraform(struct!.dpaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpa_out: {
      value: cdktf.numberToHclTerraform(struct!.dpaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpr_in: {
      value: cdktf.numberToHclTerraform(struct!.dprIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpr_out: {
      value: cdktf.numberToHclTerraform(struct!.dprOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwa_in: {
      value: cdktf.numberToHclTerraform(struct!.dwaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwa_out: {
      value: cdktf.numberToHclTerraform(struct!.dwaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwr_in: {
      value: cdktf.numberToHclTerraform(struct!.dwrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwr_out: {
      value: cdktf.numberToHclTerraform(struct!.dwrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_route: {
      value: cdktf.numberToHclTerraform(struct!.noRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_sess: {
      value: cdktf.numberToHclTerraform(struct!.noSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_in: {
      value: cdktf.numberToHclTerraform(struct!.otherIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_out: {
      value: cdktf.numberToHclTerraform(struct!.otherOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sta_in: {
      value: cdktf.numberToHclTerraform(struct!.staIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sta_out: {
      value: cdktf.numberToHclTerraform(struct!.staOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_in: {
      value: cdktf.numberToHclTerraform(struct!.strIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_out: {
      value: cdktf.numberToHclTerraform(struct!.strOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_session: {
      value: cdktf.numberToHclTerraform(struct!.userSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerPortStatsPortDiameterStatsPortDiameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbServerPortStatsPortDiameterStatsPortDiameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acaIn = this._acaIn;
    }
    if (this._acaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.acaOut = this._acaOut;
    }
    if (this._acrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrIn = this._acrIn;
    }
    if (this._acrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrOut = this._acrOut;
    }
    if (this._asaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asaIn = this._asaIn;
    }
    if (this._asaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.asaOut = this._asaOut;
    }
    if (this._asrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrIn = this._asrIn;
    }
    if (this._asrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrOut = this._asrOut;
    }
    if (this._ccaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccaIn = this._ccaIn;
    }
    if (this._ccaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccaOut = this._ccaOut;
    }
    if (this._ccrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccrIn = this._ccrIn;
    }
    if (this._ccrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccrOut = this._ccrOut;
    }
    if (this._ceaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceaIn = this._ceaIn;
    }
    if (this._ceaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceaOut = this._ceaOut;
    }
    if (this._cerIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cerIn = this._cerIn;
    }
    if (this._cerOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.cerOut = this._cerOut;
    }
    if (this._clientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFail = this._clientFail;
    }
    if (this._curr !== undefined) {
      hasAnyValues = true;
      internalValueResult.curr = this._curr;
    }
    if (this._dpaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpaIn = this._dpaIn;
    }
    if (this._dpaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpaOut = this._dpaOut;
    }
    if (this._dprIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dprIn = this._dprIn;
    }
    if (this._dprOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dprOut = this._dprOut;
    }
    if (this._dwaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwaIn = this._dwaIn;
    }
    if (this._dwaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwaOut = this._dwaOut;
    }
    if (this._dwrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwrIn = this._dwrIn;
    }
    if (this._dwrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwrOut = this._dwrOut;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._noSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSess = this._noSess;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._otherIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherIn = this._otherIn;
    }
    if (this._otherOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherOut = this._otherOut;
    }
    if (this._serverFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFail = this._serverFail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._staIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.staIn = this._staIn;
    }
    if (this._staOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.staOut = this._staOut;
    }
    if (this._strIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.strIn = this._strIn;
    }
    if (this._strOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.strOut = this._strOut;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._userSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSession = this._userSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerPortStatsPortDiameterStatsPortDiameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acaIn = undefined;
      this._acaOut = undefined;
      this._acrIn = undefined;
      this._acrOut = undefined;
      this._asaIn = undefined;
      this._asaOut = undefined;
      this._asrIn = undefined;
      this._asrOut = undefined;
      this._ccaIn = undefined;
      this._ccaOut = undefined;
      this._ccrIn = undefined;
      this._ccrOut = undefined;
      this._ceaIn = undefined;
      this._ceaOut = undefined;
      this._cerIn = undefined;
      this._cerOut = undefined;
      this._clientFail = undefined;
      this._curr = undefined;
      this._dpaIn = undefined;
      this._dpaOut = undefined;
      this._dprIn = undefined;
      this._dprOut = undefined;
      this._dwaIn = undefined;
      this._dwaOut = undefined;
      this._dwrIn = undefined;
      this._dwrOut = undefined;
      this._noRoute = undefined;
      this._noSess = undefined;
      this._num = undefined;
      this._otherIn = undefined;
      this._otherOut = undefined;
      this._serverFail = undefined;
      this._snatFail = undefined;
      this._staIn = undefined;
      this._staOut = undefined;
      this._strIn = undefined;
      this._strOut = undefined;
      this._svrselFail = undefined;
      this._total = undefined;
      this._userSession = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acaIn = value.acaIn;
      this._acaOut = value.acaOut;
      this._acrIn = value.acrIn;
      this._acrOut = value.acrOut;
      this._asaIn = value.asaIn;
      this._asaOut = value.asaOut;
      this._asrIn = value.asrIn;
      this._asrOut = value.asrOut;
      this._ccaIn = value.ccaIn;
      this._ccaOut = value.ccaOut;
      this._ccrIn = value.ccrIn;
      this._ccrOut = value.ccrOut;
      this._ceaIn = value.ceaIn;
      this._ceaOut = value.ceaOut;
      this._cerIn = value.cerIn;
      this._cerOut = value.cerOut;
      this._clientFail = value.clientFail;
      this._curr = value.curr;
      this._dpaIn = value.dpaIn;
      this._dpaOut = value.dpaOut;
      this._dprIn = value.dprIn;
      this._dprOut = value.dprOut;
      this._dwaIn = value.dwaIn;
      this._dwaOut = value.dwaOut;
      this._dwrIn = value.dwrIn;
      this._dwrOut = value.dwrOut;
      this._noRoute = value.noRoute;
      this._noSess = value.noSess;
      this._num = value.num;
      this._otherIn = value.otherIn;
      this._otherOut = value.otherOut;
      this._serverFail = value.serverFail;
      this._snatFail = value.snatFail;
      this._staIn = value.staIn;
      this._staOut = value.staOut;
      this._strIn = value.strIn;
      this._strOut = value.strOut;
      this._svrselFail = value.svrselFail;
      this._total = value.total;
      this._userSession = value.userSession;
    }
  }

  // aca_in - computed: false, optional: true, required: false
  private _acaIn?: number; 
  public get acaIn() {
    return this.getNumberAttribute('aca_in');
  }
  public set acaIn(value: number) {
    this._acaIn = value;
  }
  public resetAcaIn() {
    this._acaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acaInInput() {
    return this._acaIn;
  }

  // aca_out - computed: false, optional: true, required: false
  private _acaOut?: number; 
  public get acaOut() {
    return this.getNumberAttribute('aca_out');
  }
  public set acaOut(value: number) {
    this._acaOut = value;
  }
  public resetAcaOut() {
    this._acaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acaOutInput() {
    return this._acaOut;
  }

  // acr_in - computed: false, optional: true, required: false
  private _acrIn?: number; 
  public get acrIn() {
    return this.getNumberAttribute('acr_in');
  }
  public set acrIn(value: number) {
    this._acrIn = value;
  }
  public resetAcrIn() {
    this._acrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrInInput() {
    return this._acrIn;
  }

  // acr_out - computed: false, optional: true, required: false
  private _acrOut?: number; 
  public get acrOut() {
    return this.getNumberAttribute('acr_out');
  }
  public set acrOut(value: number) {
    this._acrOut = value;
  }
  public resetAcrOut() {
    this._acrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrOutInput() {
    return this._acrOut;
  }

  // asa_in - computed: false, optional: true, required: false
  private _asaIn?: number; 
  public get asaIn() {
    return this.getNumberAttribute('asa_in');
  }
  public set asaIn(value: number) {
    this._asaIn = value;
  }
  public resetAsaIn() {
    this._asaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asaInInput() {
    return this._asaIn;
  }

  // asa_out - computed: false, optional: true, required: false
  private _asaOut?: number; 
  public get asaOut() {
    return this.getNumberAttribute('asa_out');
  }
  public set asaOut(value: number) {
    this._asaOut = value;
  }
  public resetAsaOut() {
    this._asaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asaOutInput() {
    return this._asaOut;
  }

  // asr_in - computed: false, optional: true, required: false
  private _asrIn?: number; 
  public get asrIn() {
    return this.getNumberAttribute('asr_in');
  }
  public set asrIn(value: number) {
    this._asrIn = value;
  }
  public resetAsrIn() {
    this._asrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrInInput() {
    return this._asrIn;
  }

  // asr_out - computed: false, optional: true, required: false
  private _asrOut?: number; 
  public get asrOut() {
    return this.getNumberAttribute('asr_out');
  }
  public set asrOut(value: number) {
    this._asrOut = value;
  }
  public resetAsrOut() {
    this._asrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrOutInput() {
    return this._asrOut;
  }

  // cca_in - computed: false, optional: true, required: false
  private _ccaIn?: number; 
  public get ccaIn() {
    return this.getNumberAttribute('cca_in');
  }
  public set ccaIn(value: number) {
    this._ccaIn = value;
  }
  public resetCcaIn() {
    this._ccaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccaInInput() {
    return this._ccaIn;
  }

  // cca_out - computed: false, optional: true, required: false
  private _ccaOut?: number; 
  public get ccaOut() {
    return this.getNumberAttribute('cca_out');
  }
  public set ccaOut(value: number) {
    this._ccaOut = value;
  }
  public resetCcaOut() {
    this._ccaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccaOutInput() {
    return this._ccaOut;
  }

  // ccr_in - computed: false, optional: true, required: false
  private _ccrIn?: number; 
  public get ccrIn() {
    return this.getNumberAttribute('ccr_in');
  }
  public set ccrIn(value: number) {
    this._ccrIn = value;
  }
  public resetCcrIn() {
    this._ccrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccrInInput() {
    return this._ccrIn;
  }

  // ccr_out - computed: false, optional: true, required: false
  private _ccrOut?: number; 
  public get ccrOut() {
    return this.getNumberAttribute('ccr_out');
  }
  public set ccrOut(value: number) {
    this._ccrOut = value;
  }
  public resetCcrOut() {
    this._ccrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccrOutInput() {
    return this._ccrOut;
  }

  // cea_in - computed: false, optional: true, required: false
  private _ceaIn?: number; 
  public get ceaIn() {
    return this.getNumberAttribute('cea_in');
  }
  public set ceaIn(value: number) {
    this._ceaIn = value;
  }
  public resetCeaIn() {
    this._ceaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceaInInput() {
    return this._ceaIn;
  }

  // cea_out - computed: false, optional: true, required: false
  private _ceaOut?: number; 
  public get ceaOut() {
    return this.getNumberAttribute('cea_out');
  }
  public set ceaOut(value: number) {
    this._ceaOut = value;
  }
  public resetCeaOut() {
    this._ceaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceaOutInput() {
    return this._ceaOut;
  }

  // cer_in - computed: false, optional: true, required: false
  private _cerIn?: number; 
  public get cerIn() {
    return this.getNumberAttribute('cer_in');
  }
  public set cerIn(value: number) {
    this._cerIn = value;
  }
  public resetCerIn() {
    this._cerIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cerInInput() {
    return this._cerIn;
  }

  // cer_out - computed: false, optional: true, required: false
  private _cerOut?: number; 
  public get cerOut() {
    return this.getNumberAttribute('cer_out');
  }
  public set cerOut(value: number) {
    this._cerOut = value;
  }
  public resetCerOut() {
    this._cerOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cerOutInput() {
    return this._cerOut;
  }

  // client_fail - computed: false, optional: true, required: false
  private _clientFail?: number; 
  public get clientFail() {
    return this.getNumberAttribute('client_fail');
  }
  public set clientFail(value: number) {
    this._clientFail = value;
  }
  public resetClientFail() {
    this._clientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFailInput() {
    return this._clientFail;
  }

  // curr - computed: false, optional: true, required: false
  private _curr?: number; 
  public get curr() {
    return this.getNumberAttribute('curr');
  }
  public set curr(value: number) {
    this._curr = value;
  }
  public resetCurr() {
    this._curr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currInput() {
    return this._curr;
  }

  // dpa_in - computed: false, optional: true, required: false
  private _dpaIn?: number; 
  public get dpaIn() {
    return this.getNumberAttribute('dpa_in');
  }
  public set dpaIn(value: number) {
    this._dpaIn = value;
  }
  public resetDpaIn() {
    this._dpaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpaInInput() {
    return this._dpaIn;
  }

  // dpa_out - computed: false, optional: true, required: false
  private _dpaOut?: number; 
  public get dpaOut() {
    return this.getNumberAttribute('dpa_out');
  }
  public set dpaOut(value: number) {
    this._dpaOut = value;
  }
  public resetDpaOut() {
    this._dpaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpaOutInput() {
    return this._dpaOut;
  }

  // dpr_in - computed: false, optional: true, required: false
  private _dprIn?: number; 
  public get dprIn() {
    return this.getNumberAttribute('dpr_in');
  }
  public set dprIn(value: number) {
    this._dprIn = value;
  }
  public resetDprIn() {
    this._dprIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dprInInput() {
    return this._dprIn;
  }

  // dpr_out - computed: false, optional: true, required: false
  private _dprOut?: number; 
  public get dprOut() {
    return this.getNumberAttribute('dpr_out');
  }
  public set dprOut(value: number) {
    this._dprOut = value;
  }
  public resetDprOut() {
    this._dprOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dprOutInput() {
    return this._dprOut;
  }

  // dwa_in - computed: false, optional: true, required: false
  private _dwaIn?: number; 
  public get dwaIn() {
    return this.getNumberAttribute('dwa_in');
  }
  public set dwaIn(value: number) {
    this._dwaIn = value;
  }
  public resetDwaIn() {
    this._dwaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwaInInput() {
    return this._dwaIn;
  }

  // dwa_out - computed: false, optional: true, required: false
  private _dwaOut?: number; 
  public get dwaOut() {
    return this.getNumberAttribute('dwa_out');
  }
  public set dwaOut(value: number) {
    this._dwaOut = value;
  }
  public resetDwaOut() {
    this._dwaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwaOutInput() {
    return this._dwaOut;
  }

  // dwr_in - computed: false, optional: true, required: false
  private _dwrIn?: number; 
  public get dwrIn() {
    return this.getNumberAttribute('dwr_in');
  }
  public set dwrIn(value: number) {
    this._dwrIn = value;
  }
  public resetDwrIn() {
    this._dwrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwrInInput() {
    return this._dwrIn;
  }

  // dwr_out - computed: false, optional: true, required: false
  private _dwrOut?: number; 
  public get dwrOut() {
    return this.getNumberAttribute('dwr_out');
  }
  public set dwrOut(value: number) {
    this._dwrOut = value;
  }
  public resetDwrOut() {
    this._dwrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwrOutInput() {
    return this._dwrOut;
  }

  // no_route - computed: false, optional: true, required: false
  private _noRoute?: number; 
  public get noRoute() {
    return this.getNumberAttribute('no_route');
  }
  public set noRoute(value: number) {
    this._noRoute = value;
  }
  public resetNoRoute() {
    this._noRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteInput() {
    return this._noRoute;
  }

  // no_sess - computed: false, optional: true, required: false
  private _noSess?: number; 
  public get noSess() {
    return this.getNumberAttribute('no_sess');
  }
  public set noSess(value: number) {
    this._noSess = value;
  }
  public resetNoSess() {
    this._noSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSessInput() {
    return this._noSess;
  }

  // num - computed: false, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // other_in - computed: false, optional: true, required: false
  private _otherIn?: number; 
  public get otherIn() {
    return this.getNumberAttribute('other_in');
  }
  public set otherIn(value: number) {
    this._otherIn = value;
  }
  public resetOtherIn() {
    this._otherIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInInput() {
    return this._otherIn;
  }

  // other_out - computed: false, optional: true, required: false
  private _otherOut?: number; 
  public get otherOut() {
    return this.getNumberAttribute('other_out');
  }
  public set otherOut(value: number) {
    this._otherOut = value;
  }
  public resetOtherOut() {
    this._otherOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherOutInput() {
    return this._otherOut;
  }

  // server_fail - computed: false, optional: true, required: false
  private _serverFail?: number; 
  public get serverFail() {
    return this.getNumberAttribute('server_fail');
  }
  public set serverFail(value: number) {
    this._serverFail = value;
  }
  public resetServerFail() {
    this._serverFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFailInput() {
    return this._serverFail;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // sta_in - computed: false, optional: true, required: false
  private _staIn?: number; 
  public get staIn() {
    return this.getNumberAttribute('sta_in');
  }
  public set staIn(value: number) {
    this._staIn = value;
  }
  public resetStaIn() {
    this._staIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staInInput() {
    return this._staIn;
  }

  // sta_out - computed: false, optional: true, required: false
  private _staOut?: number; 
  public get staOut() {
    return this.getNumberAttribute('sta_out');
  }
  public set staOut(value: number) {
    this._staOut = value;
  }
  public resetStaOut() {
    this._staOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staOutInput() {
    return this._staOut;
  }

  // str_in - computed: false, optional: true, required: false
  private _strIn?: number; 
  public get strIn() {
    return this.getNumberAttribute('str_in');
  }
  public set strIn(value: number) {
    this._strIn = value;
  }
  public resetStrIn() {
    this._strIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInInput() {
    return this._strIn;
  }

  // str_out - computed: false, optional: true, required: false
  private _strOut?: number; 
  public get strOut() {
    return this.getNumberAttribute('str_out');
  }
  public set strOut(value: number) {
    this._strOut = value;
  }
  public resetStrOut() {
    this._strOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strOutInput() {
    return this._strOut;
  }

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // user_session - computed: false, optional: true, required: false
  private _userSession?: number; 
  public get userSession() {
    return this.getNumberAttribute('user_session');
  }
  public set userSession(value: number) {
    this._userSession = value;
  }
  public resetUserSession() {
    this._userSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSessionInput() {
    return this._userSession;
  }
}
export interface SlbServerPortStatsPortDiameterStats {
  /**
  * port_diameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#port_diameter SlbServerPortStatsPortDiameter#port_diameter}
  */
  readonly portDiameter?: SlbServerPortStatsPortDiameterStatsPortDiameter;
}

export function slbServerPortStatsPortDiameterStatsToTerraform(struct?: SlbServerPortStatsPortDiameterStatsOutputReference | SlbServerPortStatsPortDiameterStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_diameter: slbServerPortStatsPortDiameterStatsPortDiameterToTerraform(struct!.portDiameter),
  }
}


export function slbServerPortStatsPortDiameterStatsToHclTerraform(struct?: SlbServerPortStatsPortDiameterStatsOutputReference | SlbServerPortStatsPortDiameterStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_diameter: {
      value: slbServerPortStatsPortDiameterStatsPortDiameterToHclTerraform(struct!.portDiameter),
      isBlock: true,
      type: "list",
      storageClassType: "SlbServerPortStatsPortDiameterStatsPortDiameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerPortStatsPortDiameterStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbServerPortStatsPortDiameterStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portDiameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDiameter = this._portDiameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerPortStatsPortDiameterStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portDiameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portDiameter.internalValue = value.portDiameter;
    }
  }

  // port_diameter - computed: false, optional: true, required: false
  private _portDiameter = new SlbServerPortStatsPortDiameterStatsPortDiameterOutputReference(this, "port_diameter");
  public get portDiameter() {
    return this._portDiameter;
  }
  public putPortDiameter(value: SlbServerPortStatsPortDiameterStatsPortDiameter) {
    this._portDiameter.internalValue = value;
  }
  public resetPortDiameter() {
    this._portDiameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDiameterInput() {
    return this._portDiameter.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter thunder_slb_server_port_stats_port_diameter}
*/
export class SlbServerPortStatsPortDiameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_server_port_stats_port_diameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServerPortStatsPortDiameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServerPortStatsPortDiameter to import
  * @param importFromId The id of the existing SlbServerPortStatsPortDiameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServerPortStatsPortDiameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_server_port_stats_port_diameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port_stats_port_diameter thunder_slb_server_port_stats_port_diameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServerPortStatsPortDiameterConfig
  */
  public constructor(scope: Construct, id: string, config: SlbServerPortStatsPortDiameterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_server_port_stats_port_diameter',
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
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._serverName = config.serverName;
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

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new SlbServerPortStatsPortDiameterStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: SlbServerPortStatsPortDiameterStats) {
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
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      server_name: cdktf.stringToTerraform(this._serverName),
      stats: slbServerPortStatsPortDiameterStatsToTerraform(this._stats.internalValue),
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
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: slbServerPortStatsPortDiameterStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerPortStatsPortDiameterStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
