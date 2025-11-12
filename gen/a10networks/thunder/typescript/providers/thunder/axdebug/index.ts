// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AxdebugConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum packets to capture per cpu. Default is 3000. (Maximum packets to capture. For umlimited, specify 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#count1 Axdebug#count1}
  */
  readonly count1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#id Axdebug#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port Numbers separated by commas(,) and hyphens(-) without spaces. ex: 4,5,10-30, or separated by spaces and double-quoted(")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#inc_port_num Axdebug#inc_port_num}
  */
  readonly incPortNum?: string;
  /**
  * Incoming interface. (For all ports, don't specify port number.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#incoming Axdebug#incoming}
  */
  readonly incoming?: number;
  /**
  * Packet length to capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#length Axdebug#length}
  */
  readonly length?: number;
  /**
  * Maximum number of debug packet files. Default is 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#maxfile Axdebug#maxfile}
  */
  readonly maxfile?: number;
  /**
  * Port Numbers separated by commas(,) and hyphens(-) without spaces. ex: 4,5,10-30, or separated by spaces and double-quoted(")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#out_port_num Axdebug#out_port_num}
  */
  readonly outPortNum?: string;
  /**
  * Outgoing interface (For all ports, don't specify port number.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#outgoing Axdebug#outgoing}
  */
  readonly outgoing?: number;
  /**
  * Disable session based filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#sess_filter_dis Axdebug#sess_filter_dis}
  */
  readonly sessFilterDis?: number;
  /**
  * Maximum number of minutes for a capture. Default is 5 minutes. For unlimited, specify 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#timeout Axdebug#timeout}
  */
  readonly timeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#uuid Axdebug#uuid}
  */
  readonly uuid?: string;
  /**
  * apply_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#apply_config Axdebug#apply_config}
  */
  readonly applyConfig?: AxdebugApplyConfig;
  /**
  * capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#capture Axdebug#capture}
  */
  readonly capture?: AxdebugCapture;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#delete Axdebug#delete}
  */
  readonly delete?: AxdebugDelete;
  /**
  * exit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#exit Axdebug#exit}
  */
  readonly exit?: AxdebugExit;
  /**
  * filter_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#filter_config_list Axdebug#filter_config_list}
  */
  readonly filterConfigList?: AxdebugFilterConfigListStruct[] | cdktf.IResolvable;
  /**
  * pcapng_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#pcapng_config Axdebug#pcapng_config}
  */
  readonly pcapngConfig?: AxdebugPcapngConfig;
  /**
  * save_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#save_config Axdebug#save_config}
  */
  readonly saveConfig?: AxdebugSaveConfig;
}
export interface AxdebugApplyConfig {
  /**
  * config file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#config_file Axdebug#config_file}
  */
  readonly configFile?: string;
}

export function axdebugApplyConfigToTerraform(struct?: AxdebugApplyConfigOutputReference | AxdebugApplyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file: cdktf.stringToTerraform(struct!.configFile),
  }
}


export function axdebugApplyConfigToHclTerraform(struct?: AxdebugApplyConfigOutputReference | AxdebugApplyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AxdebugApplyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AxdebugApplyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AxdebugApplyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configFile = value.configFile;
    }
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }
}
export interface AxdebugCapture {
  /**
  * Print basic packet information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#brief Axdebug#brief}
  */
  readonly brief?: number;
  /**
  * Only for current-slot of chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#current_slot Axdebug#current_slot}
  */
  readonly currentSlot?: number;
  /**
  * Include packet payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#detail Axdebug#detail}
  */
  readonly detail?: number;
  /**
  * Non-stop execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#no_stop Axdebug#no_stop}
  */
  readonly noStop?: number;
  /**
  * Save packets into file (Specify filename to save packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#save Axdebug#save}
  */
  readonly save?: string;
}

export function axdebugCaptureToTerraform(struct?: AxdebugCaptureOutputReference | AxdebugCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brief: cdktf.numberToTerraform(struct!.brief),
    current_slot: cdktf.numberToTerraform(struct!.currentSlot),
    detail: cdktf.numberToTerraform(struct!.detail),
    no_stop: cdktf.numberToTerraform(struct!.noStop),
    save: cdktf.stringToTerraform(struct!.save),
  }
}


export function axdebugCaptureToHclTerraform(struct?: AxdebugCaptureOutputReference | AxdebugCapture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brief: {
      value: cdktf.numberToHclTerraform(struct!.brief),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_slot: {
      value: cdktf.numberToHclTerraform(struct!.currentSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detail: {
      value: cdktf.numberToHclTerraform(struct!.detail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_stop: {
      value: cdktf.numberToHclTerraform(struct!.noStop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    save: {
      value: cdktf.stringToHclTerraform(struct!.save),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AxdebugCaptureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AxdebugCapture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brief !== undefined) {
      hasAnyValues = true;
      internalValueResult.brief = this._brief;
    }
    if (this._currentSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentSlot = this._currentSlot;
    }
    if (this._detail !== undefined) {
      hasAnyValues = true;
      internalValueResult.detail = this._detail;
    }
    if (this._noStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStop = this._noStop;
    }
    if (this._save !== undefined) {
      hasAnyValues = true;
      internalValueResult.save = this._save;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AxdebugCapture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brief = undefined;
      this._currentSlot = undefined;
      this._detail = undefined;
      this._noStop = undefined;
      this._save = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brief = value.brief;
      this._currentSlot = value.currentSlot;
      this._detail = value.detail;
      this._noStop = value.noStop;
      this._save = value.save;
    }
  }

  // brief - computed: false, optional: true, required: false
  private _brief?: number; 
  public get brief() {
    return this.getNumberAttribute('brief');
  }
  public set brief(value: number) {
    this._brief = value;
  }
  public resetBrief() {
    this._brief = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefInput() {
    return this._brief;
  }

  // current_slot - computed: false, optional: true, required: false
  private _currentSlot?: number; 
  public get currentSlot() {
    return this.getNumberAttribute('current_slot');
  }
  public set currentSlot(value: number) {
    this._currentSlot = value;
  }
  public resetCurrentSlot() {
    this._currentSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentSlotInput() {
    return this._currentSlot;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: number; 
  public get detail() {
    return this.getNumberAttribute('detail');
  }
  public set detail(value: number) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // no_stop - computed: false, optional: true, required: false
  private _noStop?: number; 
  public get noStop() {
    return this.getNumberAttribute('no_stop');
  }
  public set noStop(value: number) {
    this._noStop = value;
  }
  public resetNoStop() {
    this._noStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStopInput() {
    return this._noStop;
  }

  // save - computed: false, optional: true, required: false
  private _save?: string; 
  public get save() {
    return this.getStringAttribute('save');
  }
  public set save(value: string) {
    this._save = value;
  }
  public resetSave() {
    this._save = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save;
  }
}
export interface AxdebugDelete {
  /**
  * Delete a capture file (Specify target filename to change)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#capture_file Axdebug#capture_file}
  */
  readonly captureFile?: string;
  /**
  * Delete AXDebug config file (Specify target filename to change)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#config_file Axdebug#config_file}
  */
  readonly configFile?: string;
}

export function axdebugDeleteToTerraform(struct?: AxdebugDeleteOutputReference | AxdebugDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_file: cdktf.stringToTerraform(struct!.captureFile),
    config_file: cdktf.stringToTerraform(struct!.configFile),
  }
}


export function axdebugDeleteToHclTerraform(struct?: AxdebugDeleteOutputReference | AxdebugDelete): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_file: {
      value: cdktf.stringToHclTerraform(struct!.captureFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AxdebugDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AxdebugDelete | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureFile = this._captureFile;
    }
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AxdebugDelete | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureFile = undefined;
      this._configFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureFile = value.captureFile;
      this._configFile = value.configFile;
    }
  }

  // capture_file - computed: false, optional: true, required: false
  private _captureFile?: string; 
  public get captureFile() {
    return this.getStringAttribute('capture_file');
  }
  public set captureFile(value: string) {
    this._captureFile = value;
  }
  public resetCaptureFile() {
    this._captureFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureFileInput() {
    return this._captureFile;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }
}
export interface AxdebugExit {
  /**
  * stop capture traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#stop_capture Axdebug#stop_capture}
  */
  readonly stopCapture?: number;
}

export function axdebugExitToTerraform(struct?: AxdebugExitOutputReference | AxdebugExit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stop_capture: cdktf.numberToTerraform(struct!.stopCapture),
  }
}


export function axdebugExitToHclTerraform(struct?: AxdebugExitOutputReference | AxdebugExit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stop_capture: {
      value: cdktf.numberToHclTerraform(struct!.stopCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AxdebugExitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AxdebugExit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stopCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopCapture = this._stopCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AxdebugExit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stopCapture = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stopCapture = value.stopCapture;
    }
  }

  // stop_capture - computed: false, optional: true, required: false
  private _stopCapture?: number; 
  public get stopCapture() {
    return this.getNumberAttribute('stop_capture');
  }
  public set stopCapture(value: number) {
    this._stopCapture = value;
  }
  public resetStopCapture() {
    this._stopCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopCaptureInput() {
    return this._stopCapture;
  }
}
export interface AxdebugFilterConfigListStruct {
  /**
  * value to compare
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#comp_hex Axdebug#comp_hex}
  */
  readonly compHex?: string;
  /**
  * Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#dst Axdebug#dst}
  */
  readonly dst?: number;
  /**
  * dest IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#dst_ip Axdebug#dst_ip}
  */
  readonly dstIp?: number;
  /**
  * dest ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#dst_ipv4_address Axdebug#dst_ipv4_address}
  */
  readonly dstIpv4Address?: string;
  /**
  * dest mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#dst_mac Axdebug#dst_mac}
  */
  readonly dstMac?: number;
  /**
  * dest mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#dst_mac_addr Axdebug#dst_mac_addr}
  */
  readonly dstMacAddr?: string;
  /**
  * dest port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#dst_port Axdebug#dst_port}
  */
  readonly dstPort?: number;
  /**
  * dest Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#dst_port_num Axdebug#dst_port_num}
  */
  readonly dstPortNum?: number;
  /**
  * Define hex value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#hex Axdebug#hex}
  */
  readonly hex?: number;
  /**
  * Define decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#integer Axdebug#integer}
  */
  readonly integer?: number;
  /**
  * value to compare
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#integer_comp Axdebug#integer_comp}
  */
  readonly integerComp?: number;
  /**
  * max value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#integer_max Axdebug#integer_max}
  */
  readonly integerMax?: number;
  /**
  * min value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#integer_min Axdebug#integer_min}
  */
  readonly integerMin?: number;
  /**
  * IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#ip Axdebug#ip}
  */
  readonly ip?: number;
  /**
  * ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#ipv4_address Axdebug#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#ipv4_netmask Axdebug#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * IPV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#ipv6 Axdebug#ipv6}
  */
  readonly ipv6?: number;
  /**
  * ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#ipv6_address Axdebug#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * 'arp': arp; 'neighbor': neighbor;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#l3_proto Axdebug#l3_proto}
  */
  readonly l3Proto?: string;
  /**
  * byte length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#length Axdebug#length}
  */
  readonly length?: number;
  /**
  * mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#mac Axdebug#mac}
  */
  readonly mac?: number;
  /**
  * mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#mac_addr Axdebug#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * max value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#max_hex Axdebug#max_hex}
  */
  readonly maxHex?: string;
  /**
  * min value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#min_hex Axdebug#min_hex}
  */
  readonly minHex?: string;
  /**
  * Specify filter id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#number Axdebug#number}
  */
  readonly number: number;
  /**
  * byte offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#offset Axdebug#offset}
  */
  readonly offset?: number;
  /**
  * 'gt': greater than; 'gte': greater than or equal to; 'se': smaller than or equal to; 'st': smaller than; 'eq': equal to; 'range': select a range;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#oper_range Axdebug#oper_range}
  */
  readonly operRange?: string;
  /**
  * port configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#port Axdebug#port}
  */
  readonly port?: number;
  /**
  * max port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#port_num_max Axdebug#port_num_max}
  */
  readonly portNumMax?: number;
  /**
  * min port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#port_num_min Axdebug#port_num_min}
  */
  readonly portNumMin?: number;
  /**
  * protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#prot_num Axdebug#prot_num}
  */
  readonly protNum?: number;
  /**
  * ip protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#proto Axdebug#proto}
  */
  readonly proto?: number;
  /**
  * 'icmp': icmp; 'icmpv6': icmpv6; 'tcp': tcp; 'udp': udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#proto_val Axdebug#proto_val}
  */
  readonly protoVal?: string;
  /**
  * Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#src Axdebug#src}
  */
  readonly src?: number;
  /**
  * src IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#src_ip Axdebug#src_ip}
  */
  readonly srcIp?: number;
  /**
  * src ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#src_ipv4_address Axdebug#src_ipv4_address}
  */
  readonly srcIpv4Address?: string;
  /**
  * src mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#src_mac Axdebug#src_mac}
  */
  readonly srcMac?: number;
  /**
  * src mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#src_mac_addr Axdebug#src_mac_addr}
  */
  readonly srcMacAddr?: string;
  /**
  * src port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#src_port Axdebug#src_port}
  */
  readonly srcPort?: number;
  /**
  * src Port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#src_port_num Axdebug#src_port_num}
  */
  readonly srcPortNum?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#user_tag Axdebug#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#uuid Axdebug#uuid}
  */
  readonly uuid?: string;
  /**
  * Define hex value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#word Axdebug#word}
  */
  readonly word?: number;
  /**
  * WORD0 to compare
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#word0 Axdebug#word0}
  */
  readonly word0?: string;
  /**
  * WORD min value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#word1 Axdebug#word1}
  */
  readonly word1?: string;
  /**
  * WORD max value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#word2 Axdebug#word2}
  */
  readonly word2?: string;
}

export function axdebugFilterConfigListStructToTerraform(struct?: AxdebugFilterConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comp_hex: cdktf.stringToTerraform(struct!.compHex),
    dst: cdktf.numberToTerraform(struct!.dst),
    dst_ip: cdktf.numberToTerraform(struct!.dstIp),
    dst_ipv4_address: cdktf.stringToTerraform(struct!.dstIpv4Address),
    dst_mac: cdktf.numberToTerraform(struct!.dstMac),
    dst_mac_addr: cdktf.stringToTerraform(struct!.dstMacAddr),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    dst_port_num: cdktf.numberToTerraform(struct!.dstPortNum),
    hex: cdktf.numberToTerraform(struct!.hex),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_comp: cdktf.numberToTerraform(struct!.integerComp),
    integer_max: cdktf.numberToTerraform(struct!.integerMax),
    integer_min: cdktf.numberToTerraform(struct!.integerMin),
    ip: cdktf.numberToTerraform(struct!.ip),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
    ipv6: cdktf.numberToTerraform(struct!.ipv6),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    l3_proto: cdktf.stringToTerraform(struct!.l3Proto),
    length: cdktf.numberToTerraform(struct!.length),
    mac: cdktf.numberToTerraform(struct!.mac),
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    max_hex: cdktf.stringToTerraform(struct!.maxHex),
    min_hex: cdktf.stringToTerraform(struct!.minHex),
    number: cdktf.numberToTerraform(struct!.number),
    offset: cdktf.numberToTerraform(struct!.offset),
    oper_range: cdktf.stringToTerraform(struct!.operRange),
    port: cdktf.numberToTerraform(struct!.port),
    port_num_max: cdktf.numberToTerraform(struct!.portNumMax),
    port_num_min: cdktf.numberToTerraform(struct!.portNumMin),
    prot_num: cdktf.numberToTerraform(struct!.protNum),
    proto: cdktf.numberToTerraform(struct!.proto),
    proto_val: cdktf.stringToTerraform(struct!.protoVal),
    src: cdktf.numberToTerraform(struct!.src),
    src_ip: cdktf.numberToTerraform(struct!.srcIp),
    src_ipv4_address: cdktf.stringToTerraform(struct!.srcIpv4Address),
    src_mac: cdktf.numberToTerraform(struct!.srcMac),
    src_mac_addr: cdktf.stringToTerraform(struct!.srcMacAddr),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    src_port_num: cdktf.numberToTerraform(struct!.srcPortNum),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    word: cdktf.numberToTerraform(struct!.word),
    word0: cdktf.stringToTerraform(struct!.word0),
    word1: cdktf.stringToTerraform(struct!.word1),
    word2: cdktf.stringToTerraform(struct!.word2),
  }
}


export function axdebugFilterConfigListStructToHclTerraform(struct?: AxdebugFilterConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comp_hex: {
      value: cdktf.stringToHclTerraform(struct!.compHex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst: {
      value: cdktf.numberToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip: {
      value: cdktf.numberToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.dstIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_mac: {
      value: cdktf.numberToHclTerraform(struct!.dstMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.dstMacAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_num: {
      value: cdktf.numberToHclTerraform(struct!.dstPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hex: {
      value: cdktf.numberToHclTerraform(struct!.hex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_comp: {
      value: cdktf.numberToHclTerraform(struct!.integerComp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_max: {
      value: cdktf.numberToHclTerraform(struct!.integerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_min: {
      value: cdktf.numberToHclTerraform(struct!.integerMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.numberToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    ipv6: {
      value: cdktf.numberToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3_proto: {
      value: cdktf.stringToHclTerraform(struct!.l3Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.numberToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_hex: {
      value: cdktf.stringToHclTerraform(struct!.maxHex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_hex: {
      value: cdktf.stringToHclTerraform(struct!.minHex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oper_range: {
      value: cdktf.stringToHclTerraform(struct!.operRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_max: {
      value: cdktf.numberToHclTerraform(struct!.portNumMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_num_min: {
      value: cdktf.numberToHclTerraform(struct!.portNumMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prot_num: {
      value: cdktf.numberToHclTerraform(struct!.protNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.numberToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_val: {
      value: cdktf.stringToHclTerraform(struct!.protoVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src: {
      value: cdktf.numberToHclTerraform(struct!.src),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.numberToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_mac: {
      value: cdktf.numberToHclTerraform(struct!.srcMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcMacAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_num: {
      value: cdktf.numberToHclTerraform(struct!.srcPortNum),
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
    word: {
      value: cdktf.numberToHclTerraform(struct!.word),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    word0: {
      value: cdktf.stringToHclTerraform(struct!.word0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    word1: {
      value: cdktf.stringToHclTerraform(struct!.word1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    word2: {
      value: cdktf.stringToHclTerraform(struct!.word2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AxdebugFilterConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AxdebugFilterConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compHex !== undefined) {
      hasAnyValues = true;
      internalValueResult.compHex = this._compHex;
    }
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._dstIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpv4Address = this._dstIpv4Address;
    }
    if (this._dstMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMac = this._dstMac;
    }
    if (this._dstMacAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMacAddr = this._dstMacAddr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._dstPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortNum = this._dstPortNum;
    }
    if (this._hex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hex = this._hex;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerComp !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerComp = this._integerComp;
    }
    if (this._integerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerMax = this._integerMax;
    }
    if (this._integerMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerMin = this._integerMin;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._l3Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Proto = this._l3Proto;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._maxHex !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHex = this._maxHex;
    }
    if (this._minHex !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHex = this._minHex;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._operRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.operRange = this._operRange;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portNumMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumMax = this._portNumMax;
    }
    if (this._portNumMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumMin = this._portNumMin;
    }
    if (this._protNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.protNum = this._protNum;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._protoVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoVal = this._protoVal;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv4Address = this._srcIpv4Address;
    }
    if (this._srcMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMac = this._srcMac;
    }
    if (this._srcMacAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMacAddr = this._srcMacAddr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._srcPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortNum = this._srcPortNum;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._word !== undefined) {
      hasAnyValues = true;
      internalValueResult.word = this._word;
    }
    if (this._word0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.word0 = this._word0;
    }
    if (this._word1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.word1 = this._word1;
    }
    if (this._word2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.word2 = this._word2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AxdebugFilterConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compHex = undefined;
      this._dst = undefined;
      this._dstIp = undefined;
      this._dstIpv4Address = undefined;
      this._dstMac = undefined;
      this._dstMacAddr = undefined;
      this._dstPort = undefined;
      this._dstPortNum = undefined;
      this._hex = undefined;
      this._integer = undefined;
      this._integerComp = undefined;
      this._integerMax = undefined;
      this._integerMin = undefined;
      this._ip = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
      this._ipv6 = undefined;
      this._ipv6Address = undefined;
      this._l3Proto = undefined;
      this._length = undefined;
      this._mac = undefined;
      this._macAddr = undefined;
      this._maxHex = undefined;
      this._minHex = undefined;
      this._number = undefined;
      this._offset = undefined;
      this._operRange = undefined;
      this._port = undefined;
      this._portNumMax = undefined;
      this._portNumMin = undefined;
      this._protNum = undefined;
      this._proto = undefined;
      this._protoVal = undefined;
      this._src = undefined;
      this._srcIp = undefined;
      this._srcIpv4Address = undefined;
      this._srcMac = undefined;
      this._srcMacAddr = undefined;
      this._srcPort = undefined;
      this._srcPortNum = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._word = undefined;
      this._word0 = undefined;
      this._word1 = undefined;
      this._word2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compHex = value.compHex;
      this._dst = value.dst;
      this._dstIp = value.dstIp;
      this._dstIpv4Address = value.dstIpv4Address;
      this._dstMac = value.dstMac;
      this._dstMacAddr = value.dstMacAddr;
      this._dstPort = value.dstPort;
      this._dstPortNum = value.dstPortNum;
      this._hex = value.hex;
      this._integer = value.integer;
      this._integerComp = value.integerComp;
      this._integerMax = value.integerMax;
      this._integerMin = value.integerMin;
      this._ip = value.ip;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
      this._ipv6 = value.ipv6;
      this._ipv6Address = value.ipv6Address;
      this._l3Proto = value.l3Proto;
      this._length = value.length;
      this._mac = value.mac;
      this._macAddr = value.macAddr;
      this._maxHex = value.maxHex;
      this._minHex = value.minHex;
      this._number = value.number;
      this._offset = value.offset;
      this._operRange = value.operRange;
      this._port = value.port;
      this._portNumMax = value.portNumMax;
      this._portNumMin = value.portNumMin;
      this._protNum = value.protNum;
      this._proto = value.proto;
      this._protoVal = value.protoVal;
      this._src = value.src;
      this._srcIp = value.srcIp;
      this._srcIpv4Address = value.srcIpv4Address;
      this._srcMac = value.srcMac;
      this._srcMacAddr = value.srcMacAddr;
      this._srcPort = value.srcPort;
      this._srcPortNum = value.srcPortNum;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._word = value.word;
      this._word0 = value.word0;
      this._word1 = value.word1;
      this._word2 = value.word2;
    }
  }

  // comp_hex - computed: false, optional: true, required: false
  private _compHex?: string; 
  public get compHex() {
    return this.getStringAttribute('comp_hex');
  }
  public set compHex(value: string) {
    this._compHex = value;
  }
  public resetCompHex() {
    this._compHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compHexInput() {
    return this._compHex;
  }

  // dst - computed: false, optional: true, required: false
  private _dst?: number; 
  public get dst() {
    return this.getNumberAttribute('dst');
  }
  public set dst(value: number) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst_ip - computed: false, optional: true, required: false
  private _dstIp?: number; 
  public get dstIp() {
    return this.getNumberAttribute('dst_ip');
  }
  public set dstIp(value: number) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_ipv4_address - computed: false, optional: true, required: false
  private _dstIpv4Address?: string; 
  public get dstIpv4Address() {
    return this.getStringAttribute('dst_ipv4_address');
  }
  public set dstIpv4Address(value: string) {
    this._dstIpv4Address = value;
  }
  public resetDstIpv4Address() {
    this._dstIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpv4AddressInput() {
    return this._dstIpv4Address;
  }

  // dst_mac - computed: false, optional: true, required: false
  private _dstMac?: number; 
  public get dstMac() {
    return this.getNumberAttribute('dst_mac');
  }
  public set dstMac(value: number) {
    this._dstMac = value;
  }
  public resetDstMac() {
    this._dstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacInput() {
    return this._dstMac;
  }

  // dst_mac_addr - computed: false, optional: true, required: false
  private _dstMacAddr?: string; 
  public get dstMacAddr() {
    return this.getStringAttribute('dst_mac_addr');
  }
  public set dstMacAddr(value: string) {
    this._dstMacAddr = value;
  }
  public resetDstMacAddr() {
    this._dstMacAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacAddrInput() {
    return this._dstMacAddr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // dst_port_num - computed: false, optional: true, required: false
  private _dstPortNum?: number; 
  public get dstPortNum() {
    return this.getNumberAttribute('dst_port_num');
  }
  public set dstPortNum(value: number) {
    this._dstPortNum = value;
  }
  public resetDstPortNum() {
    this._dstPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortNumInput() {
    return this._dstPortNum;
  }

  // hex - computed: false, optional: true, required: false
  private _hex?: number; 
  public get hex() {
    return this.getNumberAttribute('hex');
  }
  public set hex(value: number) {
    this._hex = value;
  }
  public resetHex() {
    this._hex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexInput() {
    return this._hex;
  }

  // integer - computed: false, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_comp - computed: false, optional: true, required: false
  private _integerComp?: number; 
  public get integerComp() {
    return this.getNumberAttribute('integer_comp');
  }
  public set integerComp(value: number) {
    this._integerComp = value;
  }
  public resetIntegerComp() {
    this._integerComp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerCompInput() {
    return this._integerComp;
  }

  // integer_max - computed: false, optional: true, required: false
  private _integerMax?: number; 
  public get integerMax() {
    return this.getNumberAttribute('integer_max');
  }
  public set integerMax(value: number) {
    this._integerMax = value;
  }
  public resetIntegerMax() {
    this._integerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerMaxInput() {
    return this._integerMax;
  }

  // integer_min - computed: false, optional: true, required: false
  private _integerMin?: number; 
  public get integerMin() {
    return this.getNumberAttribute('integer_min');
  }
  public set integerMin(value: number) {
    this._integerMin = value;
  }
  public resetIntegerMin() {
    this._integerMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerMinInput() {
    return this._integerMin;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: number; 
  public get ip() {
    return this.getNumberAttribute('ip');
  }
  public set ip(value: number) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: number; 
  public get ipv6() {
    return this.getNumberAttribute('ipv6');
  }
  public set ipv6(value: number) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // l3_proto - computed: false, optional: true, required: false
  private _l3Proto?: string; 
  public get l3Proto() {
    return this.getStringAttribute('l3_proto');
  }
  public set l3Proto(value: string) {
    this._l3Proto = value;
  }
  public resetL3Proto() {
    this._l3Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3ProtoInput() {
    return this._l3Proto;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: number; 
  public get mac() {
    return this.getNumberAttribute('mac');
  }
  public set mac(value: number) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // max_hex - computed: false, optional: true, required: false
  private _maxHex?: string; 
  public get maxHex() {
    return this.getStringAttribute('max_hex');
  }
  public set maxHex(value: string) {
    this._maxHex = value;
  }
  public resetMaxHex() {
    this._maxHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHexInput() {
    return this._maxHex;
  }

  // min_hex - computed: false, optional: true, required: false
  private _minHex?: string; 
  public get minHex() {
    return this.getStringAttribute('min_hex');
  }
  public set minHex(value: string) {
    this._minHex = value;
  }
  public resetMinHex() {
    this._minHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHexInput() {
    return this._minHex;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // oper_range - computed: false, optional: true, required: false
  private _operRange?: string; 
  public get operRange() {
    return this.getStringAttribute('oper_range');
  }
  public set operRange(value: string) {
    this._operRange = value;
  }
  public resetOperRange() {
    this._operRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operRangeInput() {
    return this._operRange;
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

  // port_num_max - computed: false, optional: true, required: false
  private _portNumMax?: number; 
  public get portNumMax() {
    return this.getNumberAttribute('port_num_max');
  }
  public set portNumMax(value: number) {
    this._portNumMax = value;
  }
  public resetPortNumMax() {
    this._portNumMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumMaxInput() {
    return this._portNumMax;
  }

  // port_num_min - computed: false, optional: true, required: false
  private _portNumMin?: number; 
  public get portNumMin() {
    return this.getNumberAttribute('port_num_min');
  }
  public set portNumMin(value: number) {
    this._portNumMin = value;
  }
  public resetPortNumMin() {
    this._portNumMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumMinInput() {
    return this._portNumMin;
  }

  // prot_num - computed: false, optional: true, required: false
  private _protNum?: number; 
  public get protNum() {
    return this.getNumberAttribute('prot_num');
  }
  public set protNum(value: number) {
    this._protNum = value;
  }
  public resetProtNum() {
    this._protNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protNumInput() {
    return this._protNum;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: number; 
  public get proto() {
    return this.getNumberAttribute('proto');
  }
  public set proto(value: number) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // proto_val - computed: false, optional: true, required: false
  private _protoVal?: string; 
  public get protoVal() {
    return this.getStringAttribute('proto_val');
  }
  public set protoVal(value: string) {
    this._protoVal = value;
  }
  public resetProtoVal() {
    this._protoVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoValInput() {
    return this._protoVal;
  }

  // src - computed: false, optional: true, required: false
  private _src?: number; 
  public get src() {
    return this.getNumberAttribute('src');
  }
  public set src(value: number) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src_ip - computed: false, optional: true, required: false
  private _srcIp?: number; 
  public get srcIp() {
    return this.getNumberAttribute('src_ip');
  }
  public set srcIp(value: number) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_ipv4_address - computed: false, optional: true, required: false
  private _srcIpv4Address?: string; 
  public get srcIpv4Address() {
    return this.getStringAttribute('src_ipv4_address');
  }
  public set srcIpv4Address(value: string) {
    this._srcIpv4Address = value;
  }
  public resetSrcIpv4Address() {
    this._srcIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv4AddressInput() {
    return this._srcIpv4Address;
  }

  // src_mac - computed: false, optional: true, required: false
  private _srcMac?: number; 
  public get srcMac() {
    return this.getNumberAttribute('src_mac');
  }
  public set srcMac(value: number) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
  }

  // src_mac_addr - computed: false, optional: true, required: false
  private _srcMacAddr?: string; 
  public get srcMacAddr() {
    return this.getStringAttribute('src_mac_addr');
  }
  public set srcMacAddr(value: string) {
    this._srcMacAddr = value;
  }
  public resetSrcMacAddr() {
    this._srcMacAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacAddrInput() {
    return this._srcMacAddr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // src_port_num - computed: false, optional: true, required: false
  private _srcPortNum?: number; 
  public get srcPortNum() {
    return this.getNumberAttribute('src_port_num');
  }
  public set srcPortNum(value: number) {
    this._srcPortNum = value;
  }
  public resetSrcPortNum() {
    this._srcPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortNumInput() {
    return this._srcPortNum;
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

  // word - computed: false, optional: true, required: false
  private _word?: number; 
  public get word() {
    return this.getNumberAttribute('word');
  }
  public set word(value: number) {
    this._word = value;
  }
  public resetWord() {
    this._word = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordInput() {
    return this._word;
  }

  // word0 - computed: false, optional: true, required: false
  private _word0?: string; 
  public get word0() {
    return this.getStringAttribute('word0');
  }
  public set word0(value: string) {
    this._word0 = value;
  }
  public resetWord0() {
    this._word0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get word0Input() {
    return this._word0;
  }

  // word1 - computed: false, optional: true, required: false
  private _word1?: string; 
  public get word1() {
    return this.getStringAttribute('word1');
  }
  public set word1(value: string) {
    this._word1 = value;
  }
  public resetWord1() {
    this._word1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get word1Input() {
    return this._word1;
  }

  // word2 - computed: false, optional: true, required: false
  private _word2?: string; 
  public get word2() {
    return this.getStringAttribute('word2');
  }
  public set word2(value: string) {
    this._word2 = value;
  }
  public resetWord2() {
    this._word2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get word2Input() {
    return this._word2;
  }
}

export class AxdebugFilterConfigListStructList extends cdktf.ComplexList {
  public internalValue? : AxdebugFilterConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): AxdebugFilterConfigListStructOutputReference {
    return new AxdebugFilterConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AxdebugPcapngConfig {
  /**
  * Exit from axdebug pcapng mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#exit Axdebug#exit}
  */
  readonly exit?: number;
  /**
  * Enable pcapng
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#pcapng_enable Axdebug#pcapng_enable}
  */
  readonly pcapngEnable?: number;
  /**
  * Enable ssl key tracking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#ssl_key_enable Axdebug#ssl_key_enable}
  */
  readonly sslKeyEnable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#uuid Axdebug#uuid}
  */
  readonly uuid?: string;
}

export function axdebugPcapngConfigToTerraform(struct?: AxdebugPcapngConfigOutputReference | AxdebugPcapngConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exit: cdktf.numberToTerraform(struct!.exit),
    pcapng_enable: cdktf.numberToTerraform(struct!.pcapngEnable),
    ssl_key_enable: cdktf.numberToTerraform(struct!.sslKeyEnable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function axdebugPcapngConfigToHclTerraform(struct?: AxdebugPcapngConfigOutputReference | AxdebugPcapngConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exit: {
      value: cdktf.numberToHclTerraform(struct!.exit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pcapng_enable: {
      value: cdktf.numberToHclTerraform(struct!.pcapngEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_key_enable: {
      value: cdktf.numberToHclTerraform(struct!.sslKeyEnable),
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

export class AxdebugPcapngConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AxdebugPcapngConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exit !== undefined) {
      hasAnyValues = true;
      internalValueResult.exit = this._exit;
    }
    if (this._pcapngEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcapngEnable = this._pcapngEnable;
    }
    if (this._sslKeyEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyEnable = this._sslKeyEnable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AxdebugPcapngConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exit = undefined;
      this._pcapngEnable = undefined;
      this._sslKeyEnable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exit = value.exit;
      this._pcapngEnable = value.pcapngEnable;
      this._sslKeyEnable = value.sslKeyEnable;
      this._uuid = value.uuid;
    }
  }

  // exit - computed: false, optional: true, required: false
  private _exit?: number; 
  public get exit() {
    return this.getNumberAttribute('exit');
  }
  public set exit(value: number) {
    this._exit = value;
  }
  public resetExit() {
    this._exit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitInput() {
    return this._exit;
  }

  // pcapng_enable - computed: false, optional: true, required: false
  private _pcapngEnable?: number; 
  public get pcapngEnable() {
    return this.getNumberAttribute('pcapng_enable');
  }
  public set pcapngEnable(value: number) {
    this._pcapngEnable = value;
  }
  public resetPcapngEnable() {
    this._pcapngEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapngEnableInput() {
    return this._pcapngEnable;
  }

  // ssl_key_enable - computed: false, optional: true, required: false
  private _sslKeyEnable?: number; 
  public get sslKeyEnable() {
    return this.getNumberAttribute('ssl_key_enable');
  }
  public set sslKeyEnable(value: number) {
    this._sslKeyEnable = value;
  }
  public resetSslKeyEnable() {
    this._sslKeyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyEnableInput() {
    return this._sslKeyEnable;
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
export interface AxdebugSaveConfig {
  /**
  * config file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#config_file Axdebug#config_file}
  */
  readonly configFile?: string;
  /**
  * save to default config file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#default Axdebug#default}
  */
  readonly default?: number;
}

export function axdebugSaveConfigToTerraform(struct?: AxdebugSaveConfigOutputReference | AxdebugSaveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_file: cdktf.stringToTerraform(struct!.configFile),
    default: cdktf.numberToTerraform(struct!.default),
  }
}


export function axdebugSaveConfigToHclTerraform(struct?: AxdebugSaveConfigOutputReference | AxdebugSaveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_file: {
      value: cdktf.stringToHclTerraform(struct!.configFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AxdebugSaveConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AxdebugSaveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFile = this._configFile;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AxdebugSaveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configFile = undefined;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configFile = value.configFile;
      this._default = value.default;
    }
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this.getStringAttribute('config_file');
  }
  public set configFile(value: string) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug thunder_axdebug}
*/
export class Axdebug extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_axdebug";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Axdebug resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Axdebug to import
  * @param importFromId The id of the existing Axdebug that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Axdebug to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_axdebug", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/axdebug thunder_axdebug} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AxdebugConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AxdebugConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_axdebug',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._count1 = config.count1;
    this._id = config.id;
    this._incPortNum = config.incPortNum;
    this._incoming = config.incoming;
    this._length = config.length;
    this._maxfile = config.maxfile;
    this._outPortNum = config.outPortNum;
    this._outgoing = config.outgoing;
    this._sessFilterDis = config.sessFilterDis;
    this._timeout = config.timeout;
    this._uuid = config.uuid;
    this._applyConfig.internalValue = config.applyConfig;
    this._capture.internalValue = config.capture;
    this._delete.internalValue = config.delete;
    this._exit.internalValue = config.exit;
    this._filterConfigList.internalValue = config.filterConfigList;
    this._pcapngConfig.internalValue = config.pcapngConfig;
    this._saveConfig.internalValue = config.saveConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // count1 - computed: false, optional: true, required: false
  private _count1?: number; 
  public get count1() {
    return this.getNumberAttribute('count1');
  }
  public set count1(value: number) {
    this._count1 = value;
  }
  public resetCount1() {
    this._count1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get count1Input() {
    return this._count1;
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

  // inc_port_num - computed: false, optional: true, required: false
  private _incPortNum?: string; 
  public get incPortNum() {
    return this.getStringAttribute('inc_port_num');
  }
  public set incPortNum(value: string) {
    this._incPortNum = value;
  }
  public resetIncPortNum() {
    this._incPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incPortNumInput() {
    return this._incPortNum;
  }

  // incoming - computed: false, optional: true, required: false
  private _incoming?: number; 
  public get incoming() {
    return this.getNumberAttribute('incoming');
  }
  public set incoming(value: number) {
    this._incoming = value;
  }
  public resetIncoming() {
    this._incoming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingInput() {
    return this._incoming;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // maxfile - computed: false, optional: true, required: false
  private _maxfile?: number; 
  public get maxfile() {
    return this.getNumberAttribute('maxfile');
  }
  public set maxfile(value: number) {
    this._maxfile = value;
  }
  public resetMaxfile() {
    this._maxfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxfileInput() {
    return this._maxfile;
  }

  // out_port_num - computed: false, optional: true, required: false
  private _outPortNum?: string; 
  public get outPortNum() {
    return this.getStringAttribute('out_port_num');
  }
  public set outPortNum(value: string) {
    this._outPortNum = value;
  }
  public resetOutPortNum() {
    this._outPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outPortNumInput() {
    return this._outPortNum;
  }

  // outgoing - computed: false, optional: true, required: false
  private _outgoing?: number; 
  public get outgoing() {
    return this.getNumberAttribute('outgoing');
  }
  public set outgoing(value: number) {
    this._outgoing = value;
  }
  public resetOutgoing() {
    this._outgoing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outgoingInput() {
    return this._outgoing;
  }

  // sess_filter_dis - computed: false, optional: true, required: false
  private _sessFilterDis?: number; 
  public get sessFilterDis() {
    return this.getNumberAttribute('sess_filter_dis');
  }
  public set sessFilterDis(value: number) {
    this._sessFilterDis = value;
  }
  public resetSessFilterDis() {
    this._sessFilterDis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessFilterDisInput() {
    return this._sessFilterDis;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // apply_config - computed: false, optional: true, required: false
  private _applyConfig = new AxdebugApplyConfigOutputReference(this, "apply_config");
  public get applyConfig() {
    return this._applyConfig;
  }
  public putApplyConfig(value: AxdebugApplyConfig) {
    this._applyConfig.internalValue = value;
  }
  public resetApplyConfig() {
    this._applyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyConfigInput() {
    return this._applyConfig.internalValue;
  }

  // capture - computed: false, optional: true, required: false
  private _capture = new AxdebugCaptureOutputReference(this, "capture");
  public get capture() {
    return this._capture;
  }
  public putCapture(value: AxdebugCapture) {
    this._capture.internalValue = value;
  }
  public resetCapture() {
    this._capture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture.internalValue;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new AxdebugDeleteOutputReference(this, "delete");
  public get delete() {
    return this._delete;
  }
  public putDelete(value: AxdebugDelete) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // exit - computed: false, optional: true, required: false
  private _exit = new AxdebugExitOutputReference(this, "exit");
  public get exit() {
    return this._exit;
  }
  public putExit(value: AxdebugExit) {
    this._exit.internalValue = value;
  }
  public resetExit() {
    this._exit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitInput() {
    return this._exit.internalValue;
  }

  // filter_config_list - computed: false, optional: true, required: false
  private _filterConfigList = new AxdebugFilterConfigListStructList(this, "filter_config_list", false);
  public get filterConfigList() {
    return this._filterConfigList;
  }
  public putFilterConfigList(value: AxdebugFilterConfigListStruct[] | cdktf.IResolvable) {
    this._filterConfigList.internalValue = value;
  }
  public resetFilterConfigList() {
    this._filterConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigListInput() {
    return this._filterConfigList.internalValue;
  }

  // pcapng_config - computed: false, optional: true, required: false
  private _pcapngConfig = new AxdebugPcapngConfigOutputReference(this, "pcapng_config");
  public get pcapngConfig() {
    return this._pcapngConfig;
  }
  public putPcapngConfig(value: AxdebugPcapngConfig) {
    this._pcapngConfig.internalValue = value;
  }
  public resetPcapngConfig() {
    this._pcapngConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapngConfigInput() {
    return this._pcapngConfig.internalValue;
  }

  // save_config - computed: false, optional: true, required: false
  private _saveConfig = new AxdebugSaveConfigOutputReference(this, "save_config");
  public get saveConfig() {
    return this._saveConfig;
  }
  public putSaveConfig(value: AxdebugSaveConfig) {
    this._saveConfig.internalValue = value;
  }
  public resetSaveConfig() {
    this._saveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveConfigInput() {
    return this._saveConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      count1: cdktf.numberToTerraform(this._count1),
      id: cdktf.stringToTerraform(this._id),
      inc_port_num: cdktf.stringToTerraform(this._incPortNum),
      incoming: cdktf.numberToTerraform(this._incoming),
      length: cdktf.numberToTerraform(this._length),
      maxfile: cdktf.numberToTerraform(this._maxfile),
      out_port_num: cdktf.stringToTerraform(this._outPortNum),
      outgoing: cdktf.numberToTerraform(this._outgoing),
      sess_filter_dis: cdktf.numberToTerraform(this._sessFilterDis),
      timeout: cdktf.numberToTerraform(this._timeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      apply_config: axdebugApplyConfigToTerraform(this._applyConfig.internalValue),
      capture: axdebugCaptureToTerraform(this._capture.internalValue),
      delete: axdebugDeleteToTerraform(this._delete.internalValue),
      exit: axdebugExitToTerraform(this._exit.internalValue),
      filter_config_list: cdktf.listMapper(axdebugFilterConfigListStructToTerraform, true)(this._filterConfigList.internalValue),
      pcapng_config: axdebugPcapngConfigToTerraform(this._pcapngConfig.internalValue),
      save_config: axdebugSaveConfigToTerraform(this._saveConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      count1: {
        value: cdktf.numberToHclTerraform(this._count1),
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
      inc_port_num: {
        value: cdktf.stringToHclTerraform(this._incPortNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incoming: {
        value: cdktf.numberToHclTerraform(this._incoming),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxfile: {
        value: cdktf.numberToHclTerraform(this._maxfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      out_port_num: {
        value: cdktf.stringToHclTerraform(this._outPortNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outgoing: {
        value: cdktf.numberToHclTerraform(this._outgoing),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sess_filter_dis: {
        value: cdktf.numberToHclTerraform(this._sessFilterDis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
      apply_config: {
        value: axdebugApplyConfigToHclTerraform(this._applyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AxdebugApplyConfigList",
      },
      capture: {
        value: axdebugCaptureToHclTerraform(this._capture.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AxdebugCaptureList",
      },
      delete: {
        value: axdebugDeleteToHclTerraform(this._delete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AxdebugDeleteList",
      },
      exit: {
        value: axdebugExitToHclTerraform(this._exit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AxdebugExitList",
      },
      filter_config_list: {
        value: cdktf.listMapperHcl(axdebugFilterConfigListStructToHclTerraform, true)(this._filterConfigList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AxdebugFilterConfigListStructList",
      },
      pcapng_config: {
        value: axdebugPcapngConfigToHclTerraform(this._pcapngConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AxdebugPcapngConfigList",
      },
      save_config: {
        value: axdebugSaveConfigToHclTerraform(this._saveConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AxdebugSaveConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
