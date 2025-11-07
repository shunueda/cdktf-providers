// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVersionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#id DataThunderVersionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#oper DataThunderVersionOper#oper}
  */
  readonly oper?: DataThunderVersionOperOper;
}
export interface DataThunderVersionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#aflex_version DataThunderVersionOper#aflex_version}
  */
  readonly aflexVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#alldynamic DataThunderVersionOper#alldynamic}
  */
  readonly alldynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#axapi_version DataThunderVersionOper#axapi_version}
  */
  readonly axapiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#boot_from DataThunderVersionOper#boot_from}
  */
  readonly bootFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#buff_size DataThunderVersionOper#buff_size}
  */
  readonly buffSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#build_type DataThunderVersionOper#build_type}
  */
  readonly buildType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#cf_pri DataThunderVersionOper#cf_pri}
  */
  readonly cfPri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#cf_sec DataThunderVersionOper#cf_sec}
  */
  readonly cfSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#copyright DataThunderVersionOper#copyright}
  */
  readonly copyright?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#cots_sys_mfg DataThunderVersionOper#cots_sys_mfg}
  */
  readonly cotsSysMfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#cots_sys_name DataThunderVersionOper#cots_sys_name}
  */
  readonly cotsSysName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#cots_sys_ver DataThunderVersionOper#cots_sys_ver}
  */
  readonly cotsSysVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#current_time DataThunderVersionOper#current_time}
  */
  readonly currentTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#firmware_version DataThunderVersionOper#firmware_version}
  */
  readonly firmwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#hd_pri DataThunderVersionOper#hd_pri}
  */
  readonly hdPri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#hd_sec DataThunderVersionOper#hd_sec}
  */
  readonly hdSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#hostname DataThunderVersionOper#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#hw_code DataThunderVersionOper#hw_code}
  */
  readonly hwCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#hw_platform DataThunderVersionOper#hw_platform}
  */
  readonly hwPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#io_buff_enabled DataThunderVersionOper#io_buff_enabled}
  */
  readonly ioBuffEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#last_config_saved_time DataThunderVersionOper#last_config_saved_time}
  */
  readonly lastConfigSavedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#nun_ctrl_cpus DataThunderVersionOper#nun_ctrl_cpus}
  */
  readonly nunCtrlCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#plat_features DataThunderVersionOper#plat_features}
  */
  readonly platFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#pri_gui_version DataThunderVersionOper#pri_gui_version}
  */
  readonly priGuiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#product DataThunderVersionOper#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#sec_gui_version DataThunderVersionOper#sec_gui_version}
  */
  readonly secGuiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#serial_number DataThunderVersionOper#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#series_name DataThunderVersionOper#series_name}
  */
  readonly seriesName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#sw_version DataThunderVersionOper#sw_version}
  */
  readonly swVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#sys_poll_mode DataThunderVersionOper#sys_poll_mode}
  */
  readonly sysPollMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#up_time DataThunderVersionOper#up_time}
  */
  readonly upTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#virtualization_type DataThunderVersionOper#virtualization_type}
  */
  readonly virtualizationType?: string;
}

export function dataThunderVersionOperOperToTerraform(struct?: DataThunderVersionOperOperOutputReference | DataThunderVersionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_version: cdktf.stringToTerraform(struct!.aflexVersion),
    alldynamic: cdktf.numberToTerraform(struct!.alldynamic),
    axapi_version: cdktf.stringToTerraform(struct!.axapiVersion),
    boot_from: cdktf.stringToTerraform(struct!.bootFrom),
    buff_size: cdktf.numberToTerraform(struct!.buffSize),
    build_type: cdktf.stringToTerraform(struct!.buildType),
    cf_pri: cdktf.stringToTerraform(struct!.cfPri),
    cf_sec: cdktf.stringToTerraform(struct!.cfSec),
    copyright: cdktf.stringToTerraform(struct!.copyright),
    cots_sys_mfg: cdktf.stringToTerraform(struct!.cotsSysMfg),
    cots_sys_name: cdktf.stringToTerraform(struct!.cotsSysName),
    cots_sys_ver: cdktf.stringToTerraform(struct!.cotsSysVer),
    current_time: cdktf.stringToTerraform(struct!.currentTime),
    firmware_version: cdktf.stringToTerraform(struct!.firmwareVersion),
    hd_pri: cdktf.stringToTerraform(struct!.hdPri),
    hd_sec: cdktf.stringToTerraform(struct!.hdSec),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    hw_code: cdktf.stringToTerraform(struct!.hwCode),
    hw_platform: cdktf.stringToTerraform(struct!.hwPlatform),
    io_buff_enabled: cdktf.stringToTerraform(struct!.ioBuffEnabled),
    last_config_saved_time: cdktf.stringToTerraform(struct!.lastConfigSavedTime),
    nun_ctrl_cpus: cdktf.numberToTerraform(struct!.nunCtrlCpus),
    plat_features: cdktf.stringToTerraform(struct!.platFeatures),
    pri_gui_version: cdktf.stringToTerraform(struct!.priGuiVersion),
    product: cdktf.stringToTerraform(struct!.product),
    sec_gui_version: cdktf.stringToTerraform(struct!.secGuiVersion),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    series_name: cdktf.stringToTerraform(struct!.seriesName),
    sw_version: cdktf.stringToTerraform(struct!.swVersion),
    sys_poll_mode: cdktf.stringToTerraform(struct!.sysPollMode),
    up_time: cdktf.stringToTerraform(struct!.upTime),
    virtualization_type: cdktf.stringToTerraform(struct!.virtualizationType),
  }
}


export function dataThunderVersionOperOperToHclTerraform(struct?: DataThunderVersionOperOperOutputReference | DataThunderVersionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_version: {
      value: cdktf.stringToHclTerraform(struct!.aflexVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alldynamic: {
      value: cdktf.numberToHclTerraform(struct!.alldynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    axapi_version: {
      value: cdktf.stringToHclTerraform(struct!.axapiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_from: {
      value: cdktf.stringToHclTerraform(struct!.bootFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buff_size: {
      value: cdktf.numberToHclTerraform(struct!.buffSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    build_type: {
      value: cdktf.stringToHclTerraform(struct!.buildType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cf_pri: {
      value: cdktf.stringToHclTerraform(struct!.cfPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cf_sec: {
      value: cdktf.stringToHclTerraform(struct!.cfSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copyright: {
      value: cdktf.stringToHclTerraform(struct!.copyright),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cots_sys_mfg: {
      value: cdktf.stringToHclTerraform(struct!.cotsSysMfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cots_sys_name: {
      value: cdktf.stringToHclTerraform(struct!.cotsSysName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cots_sys_ver: {
      value: cdktf.stringToHclTerraform(struct!.cotsSysVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    current_time: {
      value: cdktf.stringToHclTerraform(struct!.currentTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firmware_version: {
      value: cdktf.stringToHclTerraform(struct!.firmwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hd_pri: {
      value: cdktf.stringToHclTerraform(struct!.hdPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hd_sec: {
      value: cdktf.stringToHclTerraform(struct!.hdSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_code: {
      value: cdktf.stringToHclTerraform(struct!.hwCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_platform: {
      value: cdktf.stringToHclTerraform(struct!.hwPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    io_buff_enabled: {
      value: cdktf.stringToHclTerraform(struct!.ioBuffEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_config_saved_time: {
      value: cdktf.stringToHclTerraform(struct!.lastConfigSavedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nun_ctrl_cpus: {
      value: cdktf.numberToHclTerraform(struct!.nunCtrlCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plat_features: {
      value: cdktf.stringToHclTerraform(struct!.platFeatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pri_gui_version: {
      value: cdktf.stringToHclTerraform(struct!.priGuiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_gui_version: {
      value: cdktf.stringToHclTerraform(struct!.secGuiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    series_name: {
      value: cdktf.stringToHclTerraform(struct!.seriesName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sw_version: {
      value: cdktf.stringToHclTerraform(struct!.swVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_poll_mode: {
      value: cdktf.stringToHclTerraform(struct!.sysPollMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    up_time: {
      value: cdktf.stringToHclTerraform(struct!.upTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtualization_type: {
      value: cdktf.stringToHclTerraform(struct!.virtualizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVersionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVersionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexVersion = this._aflexVersion;
    }
    if (this._alldynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.alldynamic = this._alldynamic;
    }
    if (this._axapiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.axapiVersion = this._axapiVersion;
    }
    if (this._bootFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootFrom = this._bootFrom;
    }
    if (this._buffSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffSize = this._buffSize;
    }
    if (this._buildType !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildType = this._buildType;
    }
    if (this._cfPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfPri = this._cfPri;
    }
    if (this._cfSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfSec = this._cfSec;
    }
    if (this._copyright !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyright = this._copyright;
    }
    if (this._cotsSysMfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.cotsSysMfg = this._cotsSysMfg;
    }
    if (this._cotsSysName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cotsSysName = this._cotsSysName;
    }
    if (this._cotsSysVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.cotsSysVer = this._cotsSysVer;
    }
    if (this._currentTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentTime = this._currentTime;
    }
    if (this._firmwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwareVersion = this._firmwareVersion;
    }
    if (this._hdPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdPri = this._hdPri;
    }
    if (this._hdSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdSec = this._hdSec;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._hwCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwCode = this._hwCode;
    }
    if (this._hwPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwPlatform = this._hwPlatform;
    }
    if (this._ioBuffEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioBuffEnabled = this._ioBuffEnabled;
    }
    if (this._lastConfigSavedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastConfigSavedTime = this._lastConfigSavedTime;
    }
    if (this._nunCtrlCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.nunCtrlCpus = this._nunCtrlCpus;
    }
    if (this._platFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.platFeatures = this._platFeatures;
    }
    if (this._priGuiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.priGuiVersion = this._priGuiVersion;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._secGuiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secGuiVersion = this._secGuiVersion;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._seriesName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesName = this._seriesName;
    }
    if (this._swVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.swVersion = this._swVersion;
    }
    if (this._sysPollMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysPollMode = this._sysPollMode;
    }
    if (this._upTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.upTime = this._upTime;
    }
    if (this._virtualizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualizationType = this._virtualizationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVersionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexVersion = undefined;
      this._alldynamic = undefined;
      this._axapiVersion = undefined;
      this._bootFrom = undefined;
      this._buffSize = undefined;
      this._buildType = undefined;
      this._cfPri = undefined;
      this._cfSec = undefined;
      this._copyright = undefined;
      this._cotsSysMfg = undefined;
      this._cotsSysName = undefined;
      this._cotsSysVer = undefined;
      this._currentTime = undefined;
      this._firmwareVersion = undefined;
      this._hdPri = undefined;
      this._hdSec = undefined;
      this._hostname = undefined;
      this._hwCode = undefined;
      this._hwPlatform = undefined;
      this._ioBuffEnabled = undefined;
      this._lastConfigSavedTime = undefined;
      this._nunCtrlCpus = undefined;
      this._platFeatures = undefined;
      this._priGuiVersion = undefined;
      this._product = undefined;
      this._secGuiVersion = undefined;
      this._serialNumber = undefined;
      this._seriesName = undefined;
      this._swVersion = undefined;
      this._sysPollMode = undefined;
      this._upTime = undefined;
      this._virtualizationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexVersion = value.aflexVersion;
      this._alldynamic = value.alldynamic;
      this._axapiVersion = value.axapiVersion;
      this._bootFrom = value.bootFrom;
      this._buffSize = value.buffSize;
      this._buildType = value.buildType;
      this._cfPri = value.cfPri;
      this._cfSec = value.cfSec;
      this._copyright = value.copyright;
      this._cotsSysMfg = value.cotsSysMfg;
      this._cotsSysName = value.cotsSysName;
      this._cotsSysVer = value.cotsSysVer;
      this._currentTime = value.currentTime;
      this._firmwareVersion = value.firmwareVersion;
      this._hdPri = value.hdPri;
      this._hdSec = value.hdSec;
      this._hostname = value.hostname;
      this._hwCode = value.hwCode;
      this._hwPlatform = value.hwPlatform;
      this._ioBuffEnabled = value.ioBuffEnabled;
      this._lastConfigSavedTime = value.lastConfigSavedTime;
      this._nunCtrlCpus = value.nunCtrlCpus;
      this._platFeatures = value.platFeatures;
      this._priGuiVersion = value.priGuiVersion;
      this._product = value.product;
      this._secGuiVersion = value.secGuiVersion;
      this._serialNumber = value.serialNumber;
      this._seriesName = value.seriesName;
      this._swVersion = value.swVersion;
      this._sysPollMode = value.sysPollMode;
      this._upTime = value.upTime;
      this._virtualizationType = value.virtualizationType;
    }
  }

  // aflex_version - computed: false, optional: true, required: false
  private _aflexVersion?: string; 
  public get aflexVersion() {
    return this.getStringAttribute('aflex_version');
  }
  public set aflexVersion(value: string) {
    this._aflexVersion = value;
  }
  public resetAflexVersion() {
    this._aflexVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexVersionInput() {
    return this._aflexVersion;
  }

  // alldynamic - computed: false, optional: true, required: false
  private _alldynamic?: number; 
  public get alldynamic() {
    return this.getNumberAttribute('alldynamic');
  }
  public set alldynamic(value: number) {
    this._alldynamic = value;
  }
  public resetAlldynamic() {
    this._alldynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alldynamicInput() {
    return this._alldynamic;
  }

  // axapi_version - computed: false, optional: true, required: false
  private _axapiVersion?: string; 
  public get axapiVersion() {
    return this.getStringAttribute('axapi_version');
  }
  public set axapiVersion(value: string) {
    this._axapiVersion = value;
  }
  public resetAxapiVersion() {
    this._axapiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axapiVersionInput() {
    return this._axapiVersion;
  }

  // boot_from - computed: false, optional: true, required: false
  private _bootFrom?: string; 
  public get bootFrom() {
    return this.getStringAttribute('boot_from');
  }
  public set bootFrom(value: string) {
    this._bootFrom = value;
  }
  public resetBootFrom() {
    this._bootFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootFromInput() {
    return this._bootFrom;
  }

  // buff_size - computed: false, optional: true, required: false
  private _buffSize?: number; 
  public get buffSize() {
    return this.getNumberAttribute('buff_size');
  }
  public set buffSize(value: number) {
    this._buffSize = value;
  }
  public resetBuffSize() {
    this._buffSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffSizeInput() {
    return this._buffSize;
  }

  // build_type - computed: false, optional: true, required: false
  private _buildType?: string; 
  public get buildType() {
    return this.getStringAttribute('build_type');
  }
  public set buildType(value: string) {
    this._buildType = value;
  }
  public resetBuildType() {
    this._buildType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTypeInput() {
    return this._buildType;
  }

  // cf_pri - computed: false, optional: true, required: false
  private _cfPri?: string; 
  public get cfPri() {
    return this.getStringAttribute('cf_pri');
  }
  public set cfPri(value: string) {
    this._cfPri = value;
  }
  public resetCfPri() {
    this._cfPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfPriInput() {
    return this._cfPri;
  }

  // cf_sec - computed: false, optional: true, required: false
  private _cfSec?: string; 
  public get cfSec() {
    return this.getStringAttribute('cf_sec');
  }
  public set cfSec(value: string) {
    this._cfSec = value;
  }
  public resetCfSec() {
    this._cfSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfSecInput() {
    return this._cfSec;
  }

  // copyright - computed: false, optional: true, required: false
  private _copyright?: string; 
  public get copyright() {
    return this.getStringAttribute('copyright');
  }
  public set copyright(value: string) {
    this._copyright = value;
  }
  public resetCopyright() {
    this._copyright = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyrightInput() {
    return this._copyright;
  }

  // cots_sys_mfg - computed: false, optional: true, required: false
  private _cotsSysMfg?: string; 
  public get cotsSysMfg() {
    return this.getStringAttribute('cots_sys_mfg');
  }
  public set cotsSysMfg(value: string) {
    this._cotsSysMfg = value;
  }
  public resetCotsSysMfg() {
    this._cotsSysMfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cotsSysMfgInput() {
    return this._cotsSysMfg;
  }

  // cots_sys_name - computed: false, optional: true, required: false
  private _cotsSysName?: string; 
  public get cotsSysName() {
    return this.getStringAttribute('cots_sys_name');
  }
  public set cotsSysName(value: string) {
    this._cotsSysName = value;
  }
  public resetCotsSysName() {
    this._cotsSysName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cotsSysNameInput() {
    return this._cotsSysName;
  }

  // cots_sys_ver - computed: false, optional: true, required: false
  private _cotsSysVer?: string; 
  public get cotsSysVer() {
    return this.getStringAttribute('cots_sys_ver');
  }
  public set cotsSysVer(value: string) {
    this._cotsSysVer = value;
  }
  public resetCotsSysVer() {
    this._cotsSysVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cotsSysVerInput() {
    return this._cotsSysVer;
  }

  // current_time - computed: false, optional: true, required: false
  private _currentTime?: string; 
  public get currentTime() {
    return this.getStringAttribute('current_time');
  }
  public set currentTime(value: string) {
    this._currentTime = value;
  }
  public resetCurrentTime() {
    this._currentTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentTimeInput() {
    return this._currentTime;
  }

  // firmware_version - computed: false, optional: true, required: false
  private _firmwareVersion?: string; 
  public get firmwareVersion() {
    return this.getStringAttribute('firmware_version');
  }
  public set firmwareVersion(value: string) {
    this._firmwareVersion = value;
  }
  public resetFirmwareVersion() {
    this._firmwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareVersionInput() {
    return this._firmwareVersion;
  }

  // hd_pri - computed: false, optional: true, required: false
  private _hdPri?: string; 
  public get hdPri() {
    return this.getStringAttribute('hd_pri');
  }
  public set hdPri(value: string) {
    this._hdPri = value;
  }
  public resetHdPri() {
    this._hdPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdPriInput() {
    return this._hdPri;
  }

  // hd_sec - computed: false, optional: true, required: false
  private _hdSec?: string; 
  public get hdSec() {
    return this.getStringAttribute('hd_sec');
  }
  public set hdSec(value: string) {
    this._hdSec = value;
  }
  public resetHdSec() {
    this._hdSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdSecInput() {
    return this._hdSec;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // hw_code - computed: false, optional: true, required: false
  private _hwCode?: string; 
  public get hwCode() {
    return this.getStringAttribute('hw_code');
  }
  public set hwCode(value: string) {
    this._hwCode = value;
  }
  public resetHwCode() {
    this._hwCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwCodeInput() {
    return this._hwCode;
  }

  // hw_platform - computed: false, optional: true, required: false
  private _hwPlatform?: string; 
  public get hwPlatform() {
    return this.getStringAttribute('hw_platform');
  }
  public set hwPlatform(value: string) {
    this._hwPlatform = value;
  }
  public resetHwPlatform() {
    this._hwPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwPlatformInput() {
    return this._hwPlatform;
  }

  // io_buff_enabled - computed: false, optional: true, required: false
  private _ioBuffEnabled?: string; 
  public get ioBuffEnabled() {
    return this.getStringAttribute('io_buff_enabled');
  }
  public set ioBuffEnabled(value: string) {
    this._ioBuffEnabled = value;
  }
  public resetIoBuffEnabled() {
    this._ioBuffEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioBuffEnabledInput() {
    return this._ioBuffEnabled;
  }

  // last_config_saved_time - computed: false, optional: true, required: false
  private _lastConfigSavedTime?: string; 
  public get lastConfigSavedTime() {
    return this.getStringAttribute('last_config_saved_time');
  }
  public set lastConfigSavedTime(value: string) {
    this._lastConfigSavedTime = value;
  }
  public resetLastConfigSavedTime() {
    this._lastConfigSavedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastConfigSavedTimeInput() {
    return this._lastConfigSavedTime;
  }

  // nun_ctrl_cpus - computed: false, optional: true, required: false
  private _nunCtrlCpus?: number; 
  public get nunCtrlCpus() {
    return this.getNumberAttribute('nun_ctrl_cpus');
  }
  public set nunCtrlCpus(value: number) {
    this._nunCtrlCpus = value;
  }
  public resetNunCtrlCpus() {
    this._nunCtrlCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nunCtrlCpusInput() {
    return this._nunCtrlCpus;
  }

  // plat_features - computed: false, optional: true, required: false
  private _platFeatures?: string; 
  public get platFeatures() {
    return this.getStringAttribute('plat_features');
  }
  public set platFeatures(value: string) {
    this._platFeatures = value;
  }
  public resetPlatFeatures() {
    this._platFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platFeaturesInput() {
    return this._platFeatures;
  }

  // pri_gui_version - computed: false, optional: true, required: false
  private _priGuiVersion?: string; 
  public get priGuiVersion() {
    return this.getStringAttribute('pri_gui_version');
  }
  public set priGuiVersion(value: string) {
    this._priGuiVersion = value;
  }
  public resetPriGuiVersion() {
    this._priGuiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priGuiVersionInput() {
    return this._priGuiVersion;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // sec_gui_version - computed: false, optional: true, required: false
  private _secGuiVersion?: string; 
  public get secGuiVersion() {
    return this.getStringAttribute('sec_gui_version');
  }
  public set secGuiVersion(value: string) {
    this._secGuiVersion = value;
  }
  public resetSecGuiVersion() {
    this._secGuiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secGuiVersionInput() {
    return this._secGuiVersion;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // series_name - computed: false, optional: true, required: false
  private _seriesName?: string; 
  public get seriesName() {
    return this.getStringAttribute('series_name');
  }
  public set seriesName(value: string) {
    this._seriesName = value;
  }
  public resetSeriesName() {
    this._seriesName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesNameInput() {
    return this._seriesName;
  }

  // sw_version - computed: false, optional: true, required: false
  private _swVersion?: string; 
  public get swVersion() {
    return this.getStringAttribute('sw_version');
  }
  public set swVersion(value: string) {
    this._swVersion = value;
  }
  public resetSwVersion() {
    this._swVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swVersionInput() {
    return this._swVersion;
  }

  // sys_poll_mode - computed: false, optional: true, required: false
  private _sysPollMode?: string; 
  public get sysPollMode() {
    return this.getStringAttribute('sys_poll_mode');
  }
  public set sysPollMode(value: string) {
    this._sysPollMode = value;
  }
  public resetSysPollMode() {
    this._sysPollMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysPollModeInput() {
    return this._sysPollMode;
  }

  // up_time - computed: false, optional: true, required: false
  private _upTime?: string; 
  public get upTime() {
    return this.getStringAttribute('up_time');
  }
  public set upTime(value: string) {
    this._upTime = value;
  }
  public resetUpTime() {
    this._upTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upTimeInput() {
    return this._upTime;
  }

  // virtualization_type - computed: false, optional: true, required: false
  private _virtualizationType?: string; 
  public get virtualizationType() {
    return this.getStringAttribute('virtualization_type');
  }
  public set virtualizationType(value: string) {
    this._virtualizationType = value;
  }
  public resetVirtualizationType() {
    this._virtualizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualizationTypeInput() {
    return this._virtualizationType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper thunder_version_oper}
*/
export class DataThunderVersionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_version_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVersionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVersionOper to import
  * @param importFromId The id of the existing DataThunderVersionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVersionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_version_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/version_oper thunder_version_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVersionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVersionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_version_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVersionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVersionOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVersionOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVersionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVersionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
