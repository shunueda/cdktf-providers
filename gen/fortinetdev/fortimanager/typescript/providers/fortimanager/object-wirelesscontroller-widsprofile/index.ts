// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerWidsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#adom ObjectWirelesscontrollerWidsprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_auto_suppress ObjectWirelesscontrollerWidsprofile#ap_auto_suppress}
  */
  readonly apAutoSuppress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_disable_day ObjectWirelesscontrollerWidsprofile#ap_bgscan_disable_day}
  */
  readonly apBgscanDisableDay?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_disable_end ObjectWirelesscontrollerWidsprofile#ap_bgscan_disable_end}
  */
  readonly apBgscanDisableEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_disable_schedules ObjectWirelesscontrollerWidsprofile#ap_bgscan_disable_schedules}
  */
  readonly apBgscanDisableSchedules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_disable_start ObjectWirelesscontrollerWidsprofile#ap_bgscan_disable_start}
  */
  readonly apBgscanDisableStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_duration ObjectWirelesscontrollerWidsprofile#ap_bgscan_duration}
  */
  readonly apBgscanDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_idle ObjectWirelesscontrollerWidsprofile#ap_bgscan_idle}
  */
  readonly apBgscanIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_intv ObjectWirelesscontrollerWidsprofile#ap_bgscan_intv}
  */
  readonly apBgscanIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_period ObjectWirelesscontrollerWidsprofile#ap_bgscan_period}
  */
  readonly apBgscanPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_bgscan_report_intv ObjectWirelesscontrollerWidsprofile#ap_bgscan_report_intv}
  */
  readonly apBgscanReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_fgscan_report_intv ObjectWirelesscontrollerWidsprofile#ap_fgscan_report_intv}
  */
  readonly apFgscanReportIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_scan ObjectWirelesscontrollerWidsprofile#ap_scan}
  */
  readonly apScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_scan_channel_list_2g_5g ObjectWirelesscontrollerWidsprofile#ap_scan_channel_list_2g_5g}
  */
  readonly apScanChannelList2G5G?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_scan_channel_list_6g ObjectWirelesscontrollerWidsprofile#ap_scan_channel_list_6g}
  */
  readonly apScanChannelList6G?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_scan_passive ObjectWirelesscontrollerWidsprofile#ap_scan_passive}
  */
  readonly apScanPassive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#ap_scan_threshold ObjectWirelesscontrollerWidsprofile#ap_scan_threshold}
  */
  readonly apScanThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#asleap_attack ObjectWirelesscontrollerWidsprofile#asleap_attack}
  */
  readonly asleapAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#assoc_flood_thresh ObjectWirelesscontrollerWidsprofile#assoc_flood_thresh}
  */
  readonly assocFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#assoc_flood_time ObjectWirelesscontrollerWidsprofile#assoc_flood_time}
  */
  readonly assocFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#assoc_frame_flood ObjectWirelesscontrollerWidsprofile#assoc_frame_flood}
  */
  readonly assocFrameFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#auth_flood_thresh ObjectWirelesscontrollerWidsprofile#auth_flood_thresh}
  */
  readonly authFloodThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#auth_flood_time ObjectWirelesscontrollerWidsprofile#auth_flood_time}
  */
  readonly authFloodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#auth_frame_flood ObjectWirelesscontrollerWidsprofile#auth_frame_flood}
  */
  readonly authFrameFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#comment ObjectWirelesscontrollerWidsprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#deauth_broadcast ObjectWirelesscontrollerWidsprofile#deauth_broadcast}
  */
  readonly deauthBroadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#deauth_unknown_src_thresh ObjectWirelesscontrollerWidsprofile#deauth_unknown_src_thresh}
  */
  readonly deauthUnknownSrcThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_fail_flood ObjectWirelesscontrollerWidsprofile#eapol_fail_flood}
  */
  readonly eapolFailFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_fail_intv ObjectWirelesscontrollerWidsprofile#eapol_fail_intv}
  */
  readonly eapolFailIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_fail_thresh ObjectWirelesscontrollerWidsprofile#eapol_fail_thresh}
  */
  readonly eapolFailThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_logoff_flood ObjectWirelesscontrollerWidsprofile#eapol_logoff_flood}
  */
  readonly eapolLogoffFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_logoff_intv ObjectWirelesscontrollerWidsprofile#eapol_logoff_intv}
  */
  readonly eapolLogoffIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_logoff_thresh ObjectWirelesscontrollerWidsprofile#eapol_logoff_thresh}
  */
  readonly eapolLogoffThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_pre_fail_flood ObjectWirelesscontrollerWidsprofile#eapol_pre_fail_flood}
  */
  readonly eapolPreFailFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_pre_fail_intv ObjectWirelesscontrollerWidsprofile#eapol_pre_fail_intv}
  */
  readonly eapolPreFailIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_pre_fail_thresh ObjectWirelesscontrollerWidsprofile#eapol_pre_fail_thresh}
  */
  readonly eapolPreFailThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_pre_succ_flood ObjectWirelesscontrollerWidsprofile#eapol_pre_succ_flood}
  */
  readonly eapolPreSuccFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_pre_succ_intv ObjectWirelesscontrollerWidsprofile#eapol_pre_succ_intv}
  */
  readonly eapolPreSuccIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_pre_succ_thresh ObjectWirelesscontrollerWidsprofile#eapol_pre_succ_thresh}
  */
  readonly eapolPreSuccThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_start_flood ObjectWirelesscontrollerWidsprofile#eapol_start_flood}
  */
  readonly eapolStartFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_start_intv ObjectWirelesscontrollerWidsprofile#eapol_start_intv}
  */
  readonly eapolStartIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_start_thresh ObjectWirelesscontrollerWidsprofile#eapol_start_thresh}
  */
  readonly eapolStartThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_succ_flood ObjectWirelesscontrollerWidsprofile#eapol_succ_flood}
  */
  readonly eapolSuccFlood?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_succ_intv ObjectWirelesscontrollerWidsprofile#eapol_succ_intv}
  */
  readonly eapolSuccIntv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#eapol_succ_thresh ObjectWirelesscontrollerWidsprofile#eapol_succ_thresh}
  */
  readonly eapolSuccThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#id ObjectWirelesscontrollerWidsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#invalid_mac_oui ObjectWirelesscontrollerWidsprofile#invalid_mac_oui}
  */
  readonly invalidMacOui?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#long_duration_attack ObjectWirelesscontrollerWidsprofile#long_duration_attack}
  */
  readonly longDurationAttack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#long_duration_thresh ObjectWirelesscontrollerWidsprofile#long_duration_thresh}
  */
  readonly longDurationThresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#name ObjectWirelesscontrollerWidsprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#null_ssid_probe_resp ObjectWirelesscontrollerWidsprofile#null_ssid_probe_resp}
  */
  readonly nullSsidProbeResp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#scopetype ObjectWirelesscontrollerWidsprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#sensor_mode ObjectWirelesscontrollerWidsprofile#sensor_mode}
  */
  readonly sensorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#spoofed_deauth ObjectWirelesscontrollerWidsprofile#spoofed_deauth}
  */
  readonly spoofedDeauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#weak_wep_iv ObjectWirelesscontrollerWidsprofile#weak_wep_iv}
  */
  readonly weakWepIv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#wireless_bridge ObjectWirelesscontrollerWidsprofile#wireless_bridge}
  */
  readonly wirelessBridge?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile fortimanager_object_wirelesscontroller_widsprofile}
*/
export class ObjectWirelesscontrollerWidsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_widsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerWidsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerWidsprofile to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerWidsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerWidsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_widsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_widsprofile fortimanager_object_wirelesscontroller_widsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerWidsprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerWidsprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_widsprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._apAutoSuppress = config.apAutoSuppress;
    this._apBgscanDisableDay = config.apBgscanDisableDay;
    this._apBgscanDisableEnd = config.apBgscanDisableEnd;
    this._apBgscanDisableSchedules = config.apBgscanDisableSchedules;
    this._apBgscanDisableStart = config.apBgscanDisableStart;
    this._apBgscanDuration = config.apBgscanDuration;
    this._apBgscanIdle = config.apBgscanIdle;
    this._apBgscanIntv = config.apBgscanIntv;
    this._apBgscanPeriod = config.apBgscanPeriod;
    this._apBgscanReportIntv = config.apBgscanReportIntv;
    this._apFgscanReportIntv = config.apFgscanReportIntv;
    this._apScan = config.apScan;
    this._apScanChannelList2G5G = config.apScanChannelList2G5G;
    this._apScanChannelList6G = config.apScanChannelList6G;
    this._apScanPassive = config.apScanPassive;
    this._apScanThreshold = config.apScanThreshold;
    this._asleapAttack = config.asleapAttack;
    this._assocFloodThresh = config.assocFloodThresh;
    this._assocFloodTime = config.assocFloodTime;
    this._assocFrameFlood = config.assocFrameFlood;
    this._authFloodThresh = config.authFloodThresh;
    this._authFloodTime = config.authFloodTime;
    this._authFrameFlood = config.authFrameFlood;
    this._comment = config.comment;
    this._deauthBroadcast = config.deauthBroadcast;
    this._deauthUnknownSrcThresh = config.deauthUnknownSrcThresh;
    this._eapolFailFlood = config.eapolFailFlood;
    this._eapolFailIntv = config.eapolFailIntv;
    this._eapolFailThresh = config.eapolFailThresh;
    this._eapolLogoffFlood = config.eapolLogoffFlood;
    this._eapolLogoffIntv = config.eapolLogoffIntv;
    this._eapolLogoffThresh = config.eapolLogoffThresh;
    this._eapolPreFailFlood = config.eapolPreFailFlood;
    this._eapolPreFailIntv = config.eapolPreFailIntv;
    this._eapolPreFailThresh = config.eapolPreFailThresh;
    this._eapolPreSuccFlood = config.eapolPreSuccFlood;
    this._eapolPreSuccIntv = config.eapolPreSuccIntv;
    this._eapolPreSuccThresh = config.eapolPreSuccThresh;
    this._eapolStartFlood = config.eapolStartFlood;
    this._eapolStartIntv = config.eapolStartIntv;
    this._eapolStartThresh = config.eapolStartThresh;
    this._eapolSuccFlood = config.eapolSuccFlood;
    this._eapolSuccIntv = config.eapolSuccIntv;
    this._eapolSuccThresh = config.eapolSuccThresh;
    this._id = config.id;
    this._invalidMacOui = config.invalidMacOui;
    this._longDurationAttack = config.longDurationAttack;
    this._longDurationThresh = config.longDurationThresh;
    this._name = config.name;
    this._nullSsidProbeResp = config.nullSsidProbeResp;
    this._scopetype = config.scopetype;
    this._sensorMode = config.sensorMode;
    this._spoofedDeauth = config.spoofedDeauth;
    this._weakWepIv = config.weakWepIv;
    this._wirelessBridge = config.wirelessBridge;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // ap_auto_suppress - computed: false, optional: true, required: false
  private _apAutoSuppress?: string; 
  public get apAutoSuppress() {
    return this.getStringAttribute('ap_auto_suppress');
  }
  public set apAutoSuppress(value: string) {
    this._apAutoSuppress = value;
  }
  public resetApAutoSuppress() {
    this._apAutoSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apAutoSuppressInput() {
    return this._apAutoSuppress;
  }

  // ap_bgscan_disable_day - computed: true, optional: true, required: false
  private _apBgscanDisableDay?: string[]; 
  public get apBgscanDisableDay() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_bgscan_disable_day'));
  }
  public set apBgscanDisableDay(value: string[]) {
    this._apBgscanDisableDay = value;
  }
  public resetApBgscanDisableDay() {
    this._apBgscanDisableDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableDayInput() {
    return this._apBgscanDisableDay;
  }

  // ap_bgscan_disable_end - computed: false, optional: true, required: false
  private _apBgscanDisableEnd?: string; 
  public get apBgscanDisableEnd() {
    return this.getStringAttribute('ap_bgscan_disable_end');
  }
  public set apBgscanDisableEnd(value: string) {
    this._apBgscanDisableEnd = value;
  }
  public resetApBgscanDisableEnd() {
    this._apBgscanDisableEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableEndInput() {
    return this._apBgscanDisableEnd;
  }

  // ap_bgscan_disable_schedules - computed: true, optional: true, required: false
  private _apBgscanDisableSchedules?: string[]; 
  public get apBgscanDisableSchedules() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_bgscan_disable_schedules'));
  }
  public set apBgscanDisableSchedules(value: string[]) {
    this._apBgscanDisableSchedules = value;
  }
  public resetApBgscanDisableSchedules() {
    this._apBgscanDisableSchedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableSchedulesInput() {
    return this._apBgscanDisableSchedules;
  }

  // ap_bgscan_disable_start - computed: false, optional: true, required: false
  private _apBgscanDisableStart?: string; 
  public get apBgscanDisableStart() {
    return this.getStringAttribute('ap_bgscan_disable_start');
  }
  public set apBgscanDisableStart(value: string) {
    this._apBgscanDisableStart = value;
  }
  public resetApBgscanDisableStart() {
    this._apBgscanDisableStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDisableStartInput() {
    return this._apBgscanDisableStart;
  }

  // ap_bgscan_duration - computed: false, optional: true, required: false
  private _apBgscanDuration?: number; 
  public get apBgscanDuration() {
    return this.getNumberAttribute('ap_bgscan_duration');
  }
  public set apBgscanDuration(value: number) {
    this._apBgscanDuration = value;
  }
  public resetApBgscanDuration() {
    this._apBgscanDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanDurationInput() {
    return this._apBgscanDuration;
  }

  // ap_bgscan_idle - computed: false, optional: true, required: false
  private _apBgscanIdle?: number; 
  public get apBgscanIdle() {
    return this.getNumberAttribute('ap_bgscan_idle');
  }
  public set apBgscanIdle(value: number) {
    this._apBgscanIdle = value;
  }
  public resetApBgscanIdle() {
    this._apBgscanIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanIdleInput() {
    return this._apBgscanIdle;
  }

  // ap_bgscan_intv - computed: false, optional: true, required: false
  private _apBgscanIntv?: number; 
  public get apBgscanIntv() {
    return this.getNumberAttribute('ap_bgscan_intv');
  }
  public set apBgscanIntv(value: number) {
    this._apBgscanIntv = value;
  }
  public resetApBgscanIntv() {
    this._apBgscanIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanIntvInput() {
    return this._apBgscanIntv;
  }

  // ap_bgscan_period - computed: false, optional: true, required: false
  private _apBgscanPeriod?: number; 
  public get apBgscanPeriod() {
    return this.getNumberAttribute('ap_bgscan_period');
  }
  public set apBgscanPeriod(value: number) {
    this._apBgscanPeriod = value;
  }
  public resetApBgscanPeriod() {
    this._apBgscanPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanPeriodInput() {
    return this._apBgscanPeriod;
  }

  // ap_bgscan_report_intv - computed: false, optional: true, required: false
  private _apBgscanReportIntv?: number; 
  public get apBgscanReportIntv() {
    return this.getNumberAttribute('ap_bgscan_report_intv');
  }
  public set apBgscanReportIntv(value: number) {
    this._apBgscanReportIntv = value;
  }
  public resetApBgscanReportIntv() {
    this._apBgscanReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apBgscanReportIntvInput() {
    return this._apBgscanReportIntv;
  }

  // ap_fgscan_report_intv - computed: false, optional: true, required: false
  private _apFgscanReportIntv?: number; 
  public get apFgscanReportIntv() {
    return this.getNumberAttribute('ap_fgscan_report_intv');
  }
  public set apFgscanReportIntv(value: number) {
    this._apFgscanReportIntv = value;
  }
  public resetApFgscanReportIntv() {
    this._apFgscanReportIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apFgscanReportIntvInput() {
    return this._apFgscanReportIntv;
  }

  // ap_scan - computed: true, optional: true, required: false
  private _apScan?: string; 
  public get apScan() {
    return this.getStringAttribute('ap_scan');
  }
  public set apScan(value: string) {
    this._apScan = value;
  }
  public resetApScan() {
    this._apScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanInput() {
    return this._apScan;
  }

  // ap_scan_channel_list_2g_5g - computed: true, optional: true, required: false
  private _apScanChannelList2G5G?: string[]; 
  public get apScanChannelList2G5G() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_scan_channel_list_2g_5g'));
  }
  public set apScanChannelList2G5G(value: string[]) {
    this._apScanChannelList2G5G = value;
  }
  public resetApScanChannelList2G5G() {
    this._apScanChannelList2G5G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanChannelList2G5GInput() {
    return this._apScanChannelList2G5G;
  }

  // ap_scan_channel_list_6g - computed: true, optional: true, required: false
  private _apScanChannelList6G?: string[]; 
  public get apScanChannelList6G() {
    return cdktf.Fn.tolist(this.getListAttribute('ap_scan_channel_list_6g'));
  }
  public set apScanChannelList6G(value: string[]) {
    this._apScanChannelList6G = value;
  }
  public resetApScanChannelList6G() {
    this._apScanChannelList6G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanChannelList6GInput() {
    return this._apScanChannelList6G;
  }

  // ap_scan_passive - computed: false, optional: true, required: false
  private _apScanPassive?: string; 
  public get apScanPassive() {
    return this.getStringAttribute('ap_scan_passive');
  }
  public set apScanPassive(value: string) {
    this._apScanPassive = value;
  }
  public resetApScanPassive() {
    this._apScanPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanPassiveInput() {
    return this._apScanPassive;
  }

  // ap_scan_threshold - computed: false, optional: true, required: false
  private _apScanThreshold?: string; 
  public get apScanThreshold() {
    return this.getStringAttribute('ap_scan_threshold');
  }
  public set apScanThreshold(value: string) {
    this._apScanThreshold = value;
  }
  public resetApScanThreshold() {
    this._apScanThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apScanThresholdInput() {
    return this._apScanThreshold;
  }

  // asleap_attack - computed: true, optional: true, required: false
  private _asleapAttack?: string; 
  public get asleapAttack() {
    return this.getStringAttribute('asleap_attack');
  }
  public set asleapAttack(value: string) {
    this._asleapAttack = value;
  }
  public resetAsleapAttack() {
    this._asleapAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asleapAttackInput() {
    return this._asleapAttack;
  }

  // assoc_flood_thresh - computed: true, optional: true, required: false
  private _assocFloodThresh?: number; 
  public get assocFloodThresh() {
    return this.getNumberAttribute('assoc_flood_thresh');
  }
  public set assocFloodThresh(value: number) {
    this._assocFloodThresh = value;
  }
  public resetAssocFloodThresh() {
    this._assocFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assocFloodThreshInput() {
    return this._assocFloodThresh;
  }

  // assoc_flood_time - computed: true, optional: true, required: false
  private _assocFloodTime?: number; 
  public get assocFloodTime() {
    return this.getNumberAttribute('assoc_flood_time');
  }
  public set assocFloodTime(value: number) {
    this._assocFloodTime = value;
  }
  public resetAssocFloodTime() {
    this._assocFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assocFloodTimeInput() {
    return this._assocFloodTime;
  }

  // assoc_frame_flood - computed: true, optional: true, required: false
  private _assocFrameFlood?: string; 
  public get assocFrameFlood() {
    return this.getStringAttribute('assoc_frame_flood');
  }
  public set assocFrameFlood(value: string) {
    this._assocFrameFlood = value;
  }
  public resetAssocFrameFlood() {
    this._assocFrameFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assocFrameFloodInput() {
    return this._assocFrameFlood;
  }

  // auth_flood_thresh - computed: true, optional: true, required: false
  private _authFloodThresh?: number; 
  public get authFloodThresh() {
    return this.getNumberAttribute('auth_flood_thresh');
  }
  public set authFloodThresh(value: number) {
    this._authFloodThresh = value;
  }
  public resetAuthFloodThresh() {
    this._authFloodThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFloodThreshInput() {
    return this._authFloodThresh;
  }

  // auth_flood_time - computed: true, optional: true, required: false
  private _authFloodTime?: number; 
  public get authFloodTime() {
    return this.getNumberAttribute('auth_flood_time');
  }
  public set authFloodTime(value: number) {
    this._authFloodTime = value;
  }
  public resetAuthFloodTime() {
    this._authFloodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFloodTimeInput() {
    return this._authFloodTime;
  }

  // auth_frame_flood - computed: true, optional: true, required: false
  private _authFrameFlood?: string; 
  public get authFrameFlood() {
    return this.getStringAttribute('auth_frame_flood');
  }
  public set authFrameFlood(value: string) {
    this._authFrameFlood = value;
  }
  public resetAuthFrameFlood() {
    this._authFrameFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFrameFloodInput() {
    return this._authFrameFlood;
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

  // deauth_broadcast - computed: true, optional: true, required: false
  private _deauthBroadcast?: string; 
  public get deauthBroadcast() {
    return this.getStringAttribute('deauth_broadcast');
  }
  public set deauthBroadcast(value: string) {
    this._deauthBroadcast = value;
  }
  public resetDeauthBroadcast() {
    this._deauthBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deauthBroadcastInput() {
    return this._deauthBroadcast;
  }

  // deauth_unknown_src_thresh - computed: true, optional: true, required: false
  private _deauthUnknownSrcThresh?: number; 
  public get deauthUnknownSrcThresh() {
    return this.getNumberAttribute('deauth_unknown_src_thresh');
  }
  public set deauthUnknownSrcThresh(value: number) {
    this._deauthUnknownSrcThresh = value;
  }
  public resetDeauthUnknownSrcThresh() {
    this._deauthUnknownSrcThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deauthUnknownSrcThreshInput() {
    return this._deauthUnknownSrcThresh;
  }

  // eapol_fail_flood - computed: true, optional: true, required: false
  private _eapolFailFlood?: string; 
  public get eapolFailFlood() {
    return this.getStringAttribute('eapol_fail_flood');
  }
  public set eapolFailFlood(value: string) {
    this._eapolFailFlood = value;
  }
  public resetEapolFailFlood() {
    this._eapolFailFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolFailFloodInput() {
    return this._eapolFailFlood;
  }

  // eapol_fail_intv - computed: true, optional: true, required: false
  private _eapolFailIntv?: number; 
  public get eapolFailIntv() {
    return this.getNumberAttribute('eapol_fail_intv');
  }
  public set eapolFailIntv(value: number) {
    this._eapolFailIntv = value;
  }
  public resetEapolFailIntv() {
    this._eapolFailIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolFailIntvInput() {
    return this._eapolFailIntv;
  }

  // eapol_fail_thresh - computed: true, optional: true, required: false
  private _eapolFailThresh?: number; 
  public get eapolFailThresh() {
    return this.getNumberAttribute('eapol_fail_thresh');
  }
  public set eapolFailThresh(value: number) {
    this._eapolFailThresh = value;
  }
  public resetEapolFailThresh() {
    this._eapolFailThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolFailThreshInput() {
    return this._eapolFailThresh;
  }

  // eapol_logoff_flood - computed: true, optional: true, required: false
  private _eapolLogoffFlood?: string; 
  public get eapolLogoffFlood() {
    return this.getStringAttribute('eapol_logoff_flood');
  }
  public set eapolLogoffFlood(value: string) {
    this._eapolLogoffFlood = value;
  }
  public resetEapolLogoffFlood() {
    this._eapolLogoffFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolLogoffFloodInput() {
    return this._eapolLogoffFlood;
  }

  // eapol_logoff_intv - computed: true, optional: true, required: false
  private _eapolLogoffIntv?: number; 
  public get eapolLogoffIntv() {
    return this.getNumberAttribute('eapol_logoff_intv');
  }
  public set eapolLogoffIntv(value: number) {
    this._eapolLogoffIntv = value;
  }
  public resetEapolLogoffIntv() {
    this._eapolLogoffIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolLogoffIntvInput() {
    return this._eapolLogoffIntv;
  }

  // eapol_logoff_thresh - computed: true, optional: true, required: false
  private _eapolLogoffThresh?: number; 
  public get eapolLogoffThresh() {
    return this.getNumberAttribute('eapol_logoff_thresh');
  }
  public set eapolLogoffThresh(value: number) {
    this._eapolLogoffThresh = value;
  }
  public resetEapolLogoffThresh() {
    this._eapolLogoffThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolLogoffThreshInput() {
    return this._eapolLogoffThresh;
  }

  // eapol_pre_fail_flood - computed: true, optional: true, required: false
  private _eapolPreFailFlood?: string; 
  public get eapolPreFailFlood() {
    return this.getStringAttribute('eapol_pre_fail_flood');
  }
  public set eapolPreFailFlood(value: string) {
    this._eapolPreFailFlood = value;
  }
  public resetEapolPreFailFlood() {
    this._eapolPreFailFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreFailFloodInput() {
    return this._eapolPreFailFlood;
  }

  // eapol_pre_fail_intv - computed: true, optional: true, required: false
  private _eapolPreFailIntv?: number; 
  public get eapolPreFailIntv() {
    return this.getNumberAttribute('eapol_pre_fail_intv');
  }
  public set eapolPreFailIntv(value: number) {
    this._eapolPreFailIntv = value;
  }
  public resetEapolPreFailIntv() {
    this._eapolPreFailIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreFailIntvInput() {
    return this._eapolPreFailIntv;
  }

  // eapol_pre_fail_thresh - computed: true, optional: true, required: false
  private _eapolPreFailThresh?: number; 
  public get eapolPreFailThresh() {
    return this.getNumberAttribute('eapol_pre_fail_thresh');
  }
  public set eapolPreFailThresh(value: number) {
    this._eapolPreFailThresh = value;
  }
  public resetEapolPreFailThresh() {
    this._eapolPreFailThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreFailThreshInput() {
    return this._eapolPreFailThresh;
  }

  // eapol_pre_succ_flood - computed: true, optional: true, required: false
  private _eapolPreSuccFlood?: string; 
  public get eapolPreSuccFlood() {
    return this.getStringAttribute('eapol_pre_succ_flood');
  }
  public set eapolPreSuccFlood(value: string) {
    this._eapolPreSuccFlood = value;
  }
  public resetEapolPreSuccFlood() {
    this._eapolPreSuccFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreSuccFloodInput() {
    return this._eapolPreSuccFlood;
  }

  // eapol_pre_succ_intv - computed: true, optional: true, required: false
  private _eapolPreSuccIntv?: number; 
  public get eapolPreSuccIntv() {
    return this.getNumberAttribute('eapol_pre_succ_intv');
  }
  public set eapolPreSuccIntv(value: number) {
    this._eapolPreSuccIntv = value;
  }
  public resetEapolPreSuccIntv() {
    this._eapolPreSuccIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreSuccIntvInput() {
    return this._eapolPreSuccIntv;
  }

  // eapol_pre_succ_thresh - computed: true, optional: true, required: false
  private _eapolPreSuccThresh?: number; 
  public get eapolPreSuccThresh() {
    return this.getNumberAttribute('eapol_pre_succ_thresh');
  }
  public set eapolPreSuccThresh(value: number) {
    this._eapolPreSuccThresh = value;
  }
  public resetEapolPreSuccThresh() {
    this._eapolPreSuccThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolPreSuccThreshInput() {
    return this._eapolPreSuccThresh;
  }

  // eapol_start_flood - computed: true, optional: true, required: false
  private _eapolStartFlood?: string; 
  public get eapolStartFlood() {
    return this.getStringAttribute('eapol_start_flood');
  }
  public set eapolStartFlood(value: string) {
    this._eapolStartFlood = value;
  }
  public resetEapolStartFlood() {
    this._eapolStartFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolStartFloodInput() {
    return this._eapolStartFlood;
  }

  // eapol_start_intv - computed: true, optional: true, required: false
  private _eapolStartIntv?: number; 
  public get eapolStartIntv() {
    return this.getNumberAttribute('eapol_start_intv');
  }
  public set eapolStartIntv(value: number) {
    this._eapolStartIntv = value;
  }
  public resetEapolStartIntv() {
    this._eapolStartIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolStartIntvInput() {
    return this._eapolStartIntv;
  }

  // eapol_start_thresh - computed: true, optional: true, required: false
  private _eapolStartThresh?: number; 
  public get eapolStartThresh() {
    return this.getNumberAttribute('eapol_start_thresh');
  }
  public set eapolStartThresh(value: number) {
    this._eapolStartThresh = value;
  }
  public resetEapolStartThresh() {
    this._eapolStartThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolStartThreshInput() {
    return this._eapolStartThresh;
  }

  // eapol_succ_flood - computed: true, optional: true, required: false
  private _eapolSuccFlood?: string; 
  public get eapolSuccFlood() {
    return this.getStringAttribute('eapol_succ_flood');
  }
  public set eapolSuccFlood(value: string) {
    this._eapolSuccFlood = value;
  }
  public resetEapolSuccFlood() {
    this._eapolSuccFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolSuccFloodInput() {
    return this._eapolSuccFlood;
  }

  // eapol_succ_intv - computed: true, optional: true, required: false
  private _eapolSuccIntv?: number; 
  public get eapolSuccIntv() {
    return this.getNumberAttribute('eapol_succ_intv');
  }
  public set eapolSuccIntv(value: number) {
    this._eapolSuccIntv = value;
  }
  public resetEapolSuccIntv() {
    this._eapolSuccIntv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolSuccIntvInput() {
    return this._eapolSuccIntv;
  }

  // eapol_succ_thresh - computed: true, optional: true, required: false
  private _eapolSuccThresh?: number; 
  public get eapolSuccThresh() {
    return this.getNumberAttribute('eapol_succ_thresh');
  }
  public set eapolSuccThresh(value: number) {
    this._eapolSuccThresh = value;
  }
  public resetEapolSuccThresh() {
    this._eapolSuccThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolSuccThreshInput() {
    return this._eapolSuccThresh;
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

  // invalid_mac_oui - computed: true, optional: true, required: false
  private _invalidMacOui?: string; 
  public get invalidMacOui() {
    return this.getStringAttribute('invalid_mac_oui');
  }
  public set invalidMacOui(value: string) {
    this._invalidMacOui = value;
  }
  public resetInvalidMacOui() {
    this._invalidMacOui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidMacOuiInput() {
    return this._invalidMacOui;
  }

  // long_duration_attack - computed: true, optional: true, required: false
  private _longDurationAttack?: string; 
  public get longDurationAttack() {
    return this.getStringAttribute('long_duration_attack');
  }
  public set longDurationAttack(value: string) {
    this._longDurationAttack = value;
  }
  public resetLongDurationAttack() {
    this._longDurationAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDurationAttackInput() {
    return this._longDurationAttack;
  }

  // long_duration_thresh - computed: true, optional: true, required: false
  private _longDurationThresh?: number; 
  public get longDurationThresh() {
    return this.getNumberAttribute('long_duration_thresh');
  }
  public set longDurationThresh(value: number) {
    this._longDurationThresh = value;
  }
  public resetLongDurationThresh() {
    this._longDurationThresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDurationThreshInput() {
    return this._longDurationThresh;
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

  // null_ssid_probe_resp - computed: true, optional: true, required: false
  private _nullSsidProbeResp?: string; 
  public get nullSsidProbeResp() {
    return this.getStringAttribute('null_ssid_probe_resp');
  }
  public set nullSsidProbeResp(value: string) {
    this._nullSsidProbeResp = value;
  }
  public resetNullSsidProbeResp() {
    this._nullSsidProbeResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullSsidProbeRespInput() {
    return this._nullSsidProbeResp;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sensor_mode - computed: true, optional: true, required: false
  private _sensorMode?: string; 
  public get sensorMode() {
    return this.getStringAttribute('sensor_mode');
  }
  public set sensorMode(value: string) {
    this._sensorMode = value;
  }
  public resetSensorMode() {
    this._sensorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorModeInput() {
    return this._sensorMode;
  }

  // spoofed_deauth - computed: true, optional: true, required: false
  private _spoofedDeauth?: string; 
  public get spoofedDeauth() {
    return this.getStringAttribute('spoofed_deauth');
  }
  public set spoofedDeauth(value: string) {
    this._spoofedDeauth = value;
  }
  public resetSpoofedDeauth() {
    this._spoofedDeauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofedDeauthInput() {
    return this._spoofedDeauth;
  }

  // weak_wep_iv - computed: true, optional: true, required: false
  private _weakWepIv?: string; 
  public get weakWepIv() {
    return this.getStringAttribute('weak_wep_iv');
  }
  public set weakWepIv(value: string) {
    this._weakWepIv = value;
  }
  public resetWeakWepIv() {
    this._weakWepIv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakWepIvInput() {
    return this._weakWepIv;
  }

  // wireless_bridge - computed: true, optional: true, required: false
  private _wirelessBridge?: string; 
  public get wirelessBridge() {
    return this.getStringAttribute('wireless_bridge');
  }
  public set wirelessBridge(value: string) {
    this._wirelessBridge = value;
  }
  public resetWirelessBridge() {
    this._wirelessBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessBridgeInput() {
    return this._wirelessBridge;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      ap_auto_suppress: cdktf.stringToTerraform(this._apAutoSuppress),
      ap_bgscan_disable_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apBgscanDisableDay),
      ap_bgscan_disable_end: cdktf.stringToTerraform(this._apBgscanDisableEnd),
      ap_bgscan_disable_schedules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apBgscanDisableSchedules),
      ap_bgscan_disable_start: cdktf.stringToTerraform(this._apBgscanDisableStart),
      ap_bgscan_duration: cdktf.numberToTerraform(this._apBgscanDuration),
      ap_bgscan_idle: cdktf.numberToTerraform(this._apBgscanIdle),
      ap_bgscan_intv: cdktf.numberToTerraform(this._apBgscanIntv),
      ap_bgscan_period: cdktf.numberToTerraform(this._apBgscanPeriod),
      ap_bgscan_report_intv: cdktf.numberToTerraform(this._apBgscanReportIntv),
      ap_fgscan_report_intv: cdktf.numberToTerraform(this._apFgscanReportIntv),
      ap_scan: cdktf.stringToTerraform(this._apScan),
      ap_scan_channel_list_2g_5g: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apScanChannelList2G5G),
      ap_scan_channel_list_6g: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apScanChannelList6G),
      ap_scan_passive: cdktf.stringToTerraform(this._apScanPassive),
      ap_scan_threshold: cdktf.stringToTerraform(this._apScanThreshold),
      asleap_attack: cdktf.stringToTerraform(this._asleapAttack),
      assoc_flood_thresh: cdktf.numberToTerraform(this._assocFloodThresh),
      assoc_flood_time: cdktf.numberToTerraform(this._assocFloodTime),
      assoc_frame_flood: cdktf.stringToTerraform(this._assocFrameFlood),
      auth_flood_thresh: cdktf.numberToTerraform(this._authFloodThresh),
      auth_flood_time: cdktf.numberToTerraform(this._authFloodTime),
      auth_frame_flood: cdktf.stringToTerraform(this._authFrameFlood),
      comment: cdktf.stringToTerraform(this._comment),
      deauth_broadcast: cdktf.stringToTerraform(this._deauthBroadcast),
      deauth_unknown_src_thresh: cdktf.numberToTerraform(this._deauthUnknownSrcThresh),
      eapol_fail_flood: cdktf.stringToTerraform(this._eapolFailFlood),
      eapol_fail_intv: cdktf.numberToTerraform(this._eapolFailIntv),
      eapol_fail_thresh: cdktf.numberToTerraform(this._eapolFailThresh),
      eapol_logoff_flood: cdktf.stringToTerraform(this._eapolLogoffFlood),
      eapol_logoff_intv: cdktf.numberToTerraform(this._eapolLogoffIntv),
      eapol_logoff_thresh: cdktf.numberToTerraform(this._eapolLogoffThresh),
      eapol_pre_fail_flood: cdktf.stringToTerraform(this._eapolPreFailFlood),
      eapol_pre_fail_intv: cdktf.numberToTerraform(this._eapolPreFailIntv),
      eapol_pre_fail_thresh: cdktf.numberToTerraform(this._eapolPreFailThresh),
      eapol_pre_succ_flood: cdktf.stringToTerraform(this._eapolPreSuccFlood),
      eapol_pre_succ_intv: cdktf.numberToTerraform(this._eapolPreSuccIntv),
      eapol_pre_succ_thresh: cdktf.numberToTerraform(this._eapolPreSuccThresh),
      eapol_start_flood: cdktf.stringToTerraform(this._eapolStartFlood),
      eapol_start_intv: cdktf.numberToTerraform(this._eapolStartIntv),
      eapol_start_thresh: cdktf.numberToTerraform(this._eapolStartThresh),
      eapol_succ_flood: cdktf.stringToTerraform(this._eapolSuccFlood),
      eapol_succ_intv: cdktf.numberToTerraform(this._eapolSuccIntv),
      eapol_succ_thresh: cdktf.numberToTerraform(this._eapolSuccThresh),
      id: cdktf.stringToTerraform(this._id),
      invalid_mac_oui: cdktf.stringToTerraform(this._invalidMacOui),
      long_duration_attack: cdktf.stringToTerraform(this._longDurationAttack),
      long_duration_thresh: cdktf.numberToTerraform(this._longDurationThresh),
      name: cdktf.stringToTerraform(this._name),
      null_ssid_probe_resp: cdktf.stringToTerraform(this._nullSsidProbeResp),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sensor_mode: cdktf.stringToTerraform(this._sensorMode),
      spoofed_deauth: cdktf.stringToTerraform(this._spoofedDeauth),
      weak_wep_iv: cdktf.stringToTerraform(this._weakWepIv),
      wireless_bridge: cdktf.stringToTerraform(this._wirelessBridge),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_auto_suppress: {
        value: cdktf.stringToHclTerraform(this._apAutoSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_disable_day: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apBgscanDisableDay),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ap_bgscan_disable_end: {
        value: cdktf.stringToHclTerraform(this._apBgscanDisableEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_disable_schedules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apBgscanDisableSchedules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ap_bgscan_disable_start: {
        value: cdktf.stringToHclTerraform(this._apBgscanDisableStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_bgscan_duration: {
        value: cdktf.numberToHclTerraform(this._apBgscanDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_idle: {
        value: cdktf.numberToHclTerraform(this._apBgscanIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_intv: {
        value: cdktf.numberToHclTerraform(this._apBgscanIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_period: {
        value: cdktf.numberToHclTerraform(this._apBgscanPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_bgscan_report_intv: {
        value: cdktf.numberToHclTerraform(this._apBgscanReportIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_fgscan_report_intv: {
        value: cdktf.numberToHclTerraform(this._apFgscanReportIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ap_scan: {
        value: cdktf.stringToHclTerraform(this._apScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_scan_channel_list_2g_5g: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apScanChannelList2G5G),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ap_scan_channel_list_6g: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apScanChannelList6G),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ap_scan_passive: {
        value: cdktf.stringToHclTerraform(this._apScanPassive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_scan_threshold: {
        value: cdktf.stringToHclTerraform(this._apScanThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asleap_attack: {
        value: cdktf.stringToHclTerraform(this._asleapAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assoc_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._assocFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assoc_flood_time: {
        value: cdktf.numberToHclTerraform(this._assocFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assoc_frame_flood: {
        value: cdktf.stringToHclTerraform(this._assocFrameFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_flood_thresh: {
        value: cdktf.numberToHclTerraform(this._authFloodThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_flood_time: {
        value: cdktf.numberToHclTerraform(this._authFloodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_frame_flood: {
        value: cdktf.stringToHclTerraform(this._authFrameFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deauth_broadcast: {
        value: cdktf.stringToHclTerraform(this._deauthBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deauth_unknown_src_thresh: {
        value: cdktf.numberToHclTerraform(this._deauthUnknownSrcThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_fail_flood: {
        value: cdktf.stringToHclTerraform(this._eapolFailFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_fail_intv: {
        value: cdktf.numberToHclTerraform(this._eapolFailIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_fail_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolFailThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_logoff_flood: {
        value: cdktf.stringToHclTerraform(this._eapolLogoffFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_logoff_intv: {
        value: cdktf.numberToHclTerraform(this._eapolLogoffIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_logoff_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolLogoffThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_fail_flood: {
        value: cdktf.stringToHclTerraform(this._eapolPreFailFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_pre_fail_intv: {
        value: cdktf.numberToHclTerraform(this._eapolPreFailIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_fail_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolPreFailThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_succ_flood: {
        value: cdktf.stringToHclTerraform(this._eapolPreSuccFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_pre_succ_intv: {
        value: cdktf.numberToHclTerraform(this._eapolPreSuccIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_pre_succ_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolPreSuccThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_start_flood: {
        value: cdktf.stringToHclTerraform(this._eapolStartFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_start_intv: {
        value: cdktf.numberToHclTerraform(this._eapolStartIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_start_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolStartThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_succ_flood: {
        value: cdktf.stringToHclTerraform(this._eapolSuccFlood),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eapol_succ_intv: {
        value: cdktf.numberToHclTerraform(this._eapolSuccIntv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_succ_thresh: {
        value: cdktf.numberToHclTerraform(this._eapolSuccThresh),
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
      invalid_mac_oui: {
        value: cdktf.stringToHclTerraform(this._invalidMacOui),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_duration_attack: {
        value: cdktf.stringToHclTerraform(this._longDurationAttack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_duration_thresh: {
        value: cdktf.numberToHclTerraform(this._longDurationThresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      null_ssid_probe_resp: {
        value: cdktf.stringToHclTerraform(this._nullSsidProbeResp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensor_mode: {
        value: cdktf.stringToHclTerraform(this._sensorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoofed_deauth: {
        value: cdktf.stringToHclTerraform(this._spoofedDeauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weak_wep_iv: {
        value: cdktf.stringToHclTerraform(this._weakWepIv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_bridge: {
        value: cdktf.stringToHclTerraform(this._wirelessBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
