// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionSettingsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Control cpu usage threshold for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#ctrl_cpu_usage DdosDetectionSettingsA#ctrl_cpu_usage}
  */
  readonly ctrlCpuUsage?: number;
  /**
  * Configure de-escalation needed time in minutes from level 1 to 0.(default 1 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#de_escalation_quiet_time DdosDetectionSettingsA#de_escalation_quiet_time}
  */
  readonly deEscalationQuietTime?: number;
  /**
  * Configure the number of dedicated cores for detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#dedicated_cpus DdosDetectionSettingsA#dedicated_cpus}
  */
  readonly dedicatedCpus?: number;
  /**
  * Configure detection window size in seconds (DDoS detection window size in seconds(default: 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#detection_window_size DdosDetectionSettingsA#detection_window_size}
  */
  readonly detectionWindowSize?: number;
  /**
  * 'standalone': Standalone detector; 'on-box': Mitigator and Detector on the same box; 'auto-svc-discovery': Auto Service discovery using Visibility module (Deprecatd);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#detector_mode DdosDetectionSettingsA#detector_mode}
  */
  readonly detectorMode?: string;
  /**
  * Configure Baselining and export interval in seconds (DDoS Baselining and export interval in seconds(default: 20))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#export_interval DdosDetectionSettingsA#export_interval}
  */
  readonly exportInterval?: number;
  /**
  * Enable full core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#full_core_enable DdosDetectionSettingsA#full_core_enable}
  */
  readonly fullCoreEnable?: number;
  /**
  * histogram de-escalate sensitivity for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#histogram_de_escalate_percentage DdosDetectionSettingsA#histogram_de_escalate_percentage}
  */
  readonly histogramDeEscalatePercentage?: number;
  /**
  * histogram escalate sensitivity for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#histogram_escalate_percentage DdosDetectionSettingsA#histogram_escalate_percentage}
  */
  readonly histogramEscalatePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#id DdosDetectionSettingsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial learning interval (in hours) before processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#initial_learning_interval DdosDetectionSettingsA#initial_learning_interval}
  */
  readonly initialLearningInterval?: number;
  /**
  * multiplier for flooding detection threshold in network objects (default 2x threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#network_object_flooding_multiple DdosDetectionSettingsA#network_object_flooding_multiple}
  */
  readonly networkObjectFloodingMultiple?: number;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '30': 30 seconds;  (DDoS detection window size in seconds(default: 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#network_object_window_size DdosDetectionSettingsA#network_object_window_size}
  */
  readonly networkObjectWindowSize?: string;
  /**
  * 'enable': Enable detection notification debug log (default: disabled);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#notification_debug_log DdosDetectionSettingsA#notification_debug_log}
  */
  readonly notificationDebugLog?: string;
  /**
  * Configure top-k reset interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#top_k_reset_interval DdosDetectionSettingsA#top_k_reset_interval}
  */
  readonly topKResetInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
  /**
  * entry_saving block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#entry_saving DdosDetectionSettingsA#entry_saving}
  */
  readonly entrySaving?: DdosDetectionSettingsEntrySavingA;
  /**
  * pkt_sampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#pkt_sampling DdosDetectionSettingsA#pkt_sampling}
  */
  readonly pktSampling?: DdosDetectionSettingsPktSamplingA;
  /**
  * standalone_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#standalone_settings DdosDetectionSettingsA#standalone_settings}
  */
  readonly standaloneSettings?: DdosDetectionSettingsStandaloneSettingsA;
}
export interface DdosDetectionSettingsEntrySavingA {
  /**
  * Configure periodical auto-saving interval in minutes(default: 0) and 0 to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#interval DdosDetectionSettingsA#interval}
  */
  readonly interval?: number;
  /**
  * Manually restore network-object-based detection entries and learned indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#manual_restore DdosDetectionSettingsA#manual_restore}
  */
  readonly manualRestore?: number;
  /**
  * Manually save network-object-based detection entries and learned indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#manual_save DdosDetectionSettingsA#manual_save}
  */
  readonly manualSave?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsEntrySavingAToTerraform(struct?: DdosDetectionSettingsEntrySavingAOutputReference | DdosDetectionSettingsEntrySavingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    manual_restore: cdktf.numberToTerraform(struct!.manualRestore),
    manual_save: cdktf.numberToTerraform(struct!.manualSave),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsEntrySavingAToHclTerraform(struct?: DdosDetectionSettingsEntrySavingAOutputReference | DdosDetectionSettingsEntrySavingA): any {
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
    manual_restore: {
      value: cdktf.numberToHclTerraform(struct!.manualRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manual_save: {
      value: cdktf.numberToHclTerraform(struct!.manualSave),
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

export class DdosDetectionSettingsEntrySavingAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsEntrySavingA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._manualRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualRestore = this._manualRestore;
    }
    if (this._manualSave !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSave = this._manualSave;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsEntrySavingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._manualRestore = undefined;
      this._manualSave = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._manualRestore = value.manualRestore;
      this._manualSave = value.manualSave;
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

  // manual_restore - computed: false, optional: true, required: false
  private _manualRestore?: number; 
  public get manualRestore() {
    return this.getNumberAttribute('manual_restore');
  }
  public set manualRestore(value: number) {
    this._manualRestore = value;
  }
  public resetManualRestore() {
    this._manualRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRestoreInput() {
    return this._manualRestore;
  }

  // manual_save - computed: false, optional: true, required: false
  private _manualSave?: number; 
  public get manualSave() {
    return this.getNumberAttribute('manual_save');
  }
  public set manualSave(value: number) {
    this._manualSave = value;
  }
  public resetManualSave() {
    this._manualSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSaveInput() {
    return this._manualSave;
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
export interface DdosDetectionSettingsPktSamplingA {
  /**
  * Lower index is more aggressive sampling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#assign_index DdosDetectionSettingsA#assign_index}
  */
  readonly assignIndex?: number;
  /**
  * Assign rate to given index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#assign_rate DdosDetectionSettingsA#assign_rate}
  */
  readonly assignRate?: number;
  /**
  * Sample 1 in X packets (default: X=1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#override_rate DdosDetectionSettingsA#override_rate}
  */
  readonly overrideRate?: number;
}

export function ddosDetectionSettingsPktSamplingAToTerraform(struct?: DdosDetectionSettingsPktSamplingAOutputReference | DdosDetectionSettingsPktSamplingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_index: cdktf.numberToTerraform(struct!.assignIndex),
    assign_rate: cdktf.numberToTerraform(struct!.assignRate),
    override_rate: cdktf.numberToTerraform(struct!.overrideRate),
  }
}


export function ddosDetectionSettingsPktSamplingAToHclTerraform(struct?: DdosDetectionSettingsPktSamplingAOutputReference | DdosDetectionSettingsPktSamplingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_index: {
      value: cdktf.numberToHclTerraform(struct!.assignIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assign_rate: {
      value: cdktf.numberToHclTerraform(struct!.assignRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_rate: {
      value: cdktf.numberToHclTerraform(struct!.overrideRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDetectionSettingsPktSamplingAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsPktSamplingA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIndex = this._assignIndex;
    }
    if (this._assignRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignRate = this._assignRate;
    }
    if (this._overrideRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideRate = this._overrideRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsPktSamplingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignIndex = undefined;
      this._assignRate = undefined;
      this._overrideRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignIndex = value.assignIndex;
      this._assignRate = value.assignRate;
      this._overrideRate = value.overrideRate;
    }
  }

  // assign_index - computed: false, optional: true, required: false
  private _assignIndex?: number; 
  public get assignIndex() {
    return this.getNumberAttribute('assign_index');
  }
  public set assignIndex(value: number) {
    this._assignIndex = value;
  }
  public resetAssignIndex() {
    this._assignIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIndexInput() {
    return this._assignIndex;
  }

  // assign_rate - computed: false, optional: true, required: false
  private _assignRate?: number; 
  public get assignRate() {
    return this.getNumberAttribute('assign_rate');
  }
  public set assignRate(value: number) {
    this._assignRate = value;
  }
  public resetAssignRate() {
    this._assignRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignRateInput() {
    return this._assignRate;
  }

  // override_rate - computed: false, optional: true, required: false
  private _overrideRate?: number; 
  public get overrideRate() {
    return this.getNumberAttribute('override_rate');
  }
  public set overrideRate(value: number) {
    this._overrideRate = value;
  }
  public resetOverrideRate() {
    this._overrideRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideRateInput() {
    return this._overrideRate;
  }
}
export interface DdosDetectionSettingsStandaloneSettingsNetflowA {
  /**
  * Netflow port to receive packets (Netflow port number(default 9996))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#listening_port DdosDetectionSettingsA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * Configure active timeout of the netflow templates received in mins (Template active timeout(mins)(default 30mins))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#template_active_timeout DdosDetectionSettingsA#template_active_timeout}
  */
  readonly templateActiveTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsStandaloneSettingsNetflowAToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference | DdosDetectionSettingsStandaloneSettingsNetflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    template_active_timeout: cdktf.numberToTerraform(struct!.templateActiveTimeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsStandaloneSettingsNetflowAToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference | DdosDetectionSettingsStandaloneSettingsNetflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listening_port: {
      value: cdktf.numberToHclTerraform(struct!.listeningPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.templateActiveTimeout),
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

export class DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettingsNetflowA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPort = this._listeningPort;
    }
    if (this._templateActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateActiveTimeout = this._templateActiveTimeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsStandaloneSettingsNetflowA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listeningPort = undefined;
      this._templateActiveTimeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listeningPort = value.listeningPort;
      this._templateActiveTimeout = value.templateActiveTimeout;
      this._uuid = value.uuid;
    }
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
  }

  // template_active_timeout - computed: false, optional: true, required: false
  private _templateActiveTimeout?: number; 
  public get templateActiveTimeout() {
    return this.getNumberAttribute('template_active_timeout');
  }
  public set templateActiveTimeout(value: number) {
    this._templateActiveTimeout = value;
  }
  public resetTemplateActiveTimeout() {
    this._templateActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateActiveTimeoutInput() {
    return this._templateActiveTimeout;
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
export interface DdosDetectionSettingsStandaloneSettingsSflowA {
  /**
  * sFlow port to receive packets (sFlow port number(default 6343))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#listening_port DdosDetectionSettingsA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsStandaloneSettingsSflowAToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsSflowAOutputReference | DdosDetectionSettingsStandaloneSettingsSflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsStandaloneSettingsSflowAToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsSflowAOutputReference | DdosDetectionSettingsStandaloneSettingsSflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listening_port: {
      value: cdktf.numberToHclTerraform(struct!.listeningPort),
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

export class DdosDetectionSettingsStandaloneSettingsSflowAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettingsSflowA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPort = this._listeningPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsStandaloneSettingsSflowA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listeningPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listeningPort = value.listeningPort;
      this._uuid = value.uuid;
    }
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
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
export interface DdosDetectionSettingsStandaloneSettingsA {
  /**
  * 'enable': Enable standalone detector; 'disable': Disable standalone detector (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#action DdosDetectionSettingsA#action}
  */
  readonly action?: string;
  /**
  * Configure de-escalation needed time in minutes from level 1 to 0.(legacy)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#de_escalation_quiet_time DdosDetectionSettingsA#de_escalation_quiet_time}
  */
  readonly deEscalationQuietTime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
  /**
  * netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#netflow DdosDetectionSettingsA#netflow}
  */
  readonly netflow?: DdosDetectionSettingsStandaloneSettingsNetflowA;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#sflow DdosDetectionSettingsA#sflow}
  */
  readonly sflow?: DdosDetectionSettingsStandaloneSettingsSflowA;
}

export function ddosDetectionSettingsStandaloneSettingsAToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsAOutputReference | DdosDetectionSettingsStandaloneSettingsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    de_escalation_quiet_time: cdktf.numberToTerraform(struct!.deEscalationQuietTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    netflow: ddosDetectionSettingsStandaloneSettingsNetflowAToTerraform(struct!.netflow),
    sflow: ddosDetectionSettingsStandaloneSettingsSflowAToTerraform(struct!.sflow),
  }
}


export function ddosDetectionSettingsStandaloneSettingsAToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsAOutputReference | DdosDetectionSettingsStandaloneSettingsA): any {
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
    de_escalation_quiet_time: {
      value: cdktf.numberToHclTerraform(struct!.deEscalationQuietTime),
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
    netflow: {
      value: ddosDetectionSettingsStandaloneSettingsNetflowAToHclTerraform(struct!.netflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionSettingsStandaloneSettingsNetflowAList",
    },
    sflow: {
      value: ddosDetectionSettingsStandaloneSettingsSflowAToHclTerraform(struct!.sflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionSettingsStandaloneSettingsSflowAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDetectionSettingsStandaloneSettingsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettingsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._deEscalationQuietTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deEscalationQuietTime = this._deEscalationQuietTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._netflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow?.internalValue;
    }
    if (this._sflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflow = this._sflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsStandaloneSettingsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._deEscalationQuietTime = undefined;
      this._uuid = undefined;
      this._netflow.internalValue = undefined;
      this._sflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._deEscalationQuietTime = value.deEscalationQuietTime;
      this._uuid = value.uuid;
      this._netflow.internalValue = value.netflow;
      this._sflow.internalValue = value.sflow;
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

  // de_escalation_quiet_time - computed: false, optional: true, required: false
  private _deEscalationQuietTime?: number; 
  public get deEscalationQuietTime() {
    return this.getNumberAttribute('de_escalation_quiet_time');
  }
  public set deEscalationQuietTime(value: number) {
    this._deEscalationQuietTime = value;
  }
  public resetDeEscalationQuietTime() {
    this._deEscalationQuietTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deEscalationQuietTimeInput() {
    return this._deEscalationQuietTime;
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

  // netflow - computed: false, optional: true, required: false
  private _netflow = new DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference(this, "netflow");
  public get netflow() {
    return this._netflow;
  }
  public putNetflow(value: DdosDetectionSettingsStandaloneSettingsNetflowA) {
    this._netflow.internalValue = value;
  }
  public resetNetflow() {
    this._netflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDetectionSettingsStandaloneSettingsSflowAOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDetectionSettingsStandaloneSettingsSflowA) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings thunder_ddos_detection_settings}
*/
export class DdosDetectionSettingsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionSettingsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionSettingsA to import
  * @param importFromId The id of the existing DdosDetectionSettingsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionSettingsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection_settings thunder_ddos_detection_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionSettingsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionSettingsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_settings',
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
    this._ctrlCpuUsage = config.ctrlCpuUsage;
    this._deEscalationQuietTime = config.deEscalationQuietTime;
    this._dedicatedCpus = config.dedicatedCpus;
    this._detectionWindowSize = config.detectionWindowSize;
    this._detectorMode = config.detectorMode;
    this._exportInterval = config.exportInterval;
    this._fullCoreEnable = config.fullCoreEnable;
    this._histogramDeEscalatePercentage = config.histogramDeEscalatePercentage;
    this._histogramEscalatePercentage = config.histogramEscalatePercentage;
    this._id = config.id;
    this._initialLearningInterval = config.initialLearningInterval;
    this._networkObjectFloodingMultiple = config.networkObjectFloodingMultiple;
    this._networkObjectWindowSize = config.networkObjectWindowSize;
    this._notificationDebugLog = config.notificationDebugLog;
    this._topKResetInterval = config.topKResetInterval;
    this._uuid = config.uuid;
    this._entrySaving.internalValue = config.entrySaving;
    this._pktSampling.internalValue = config.pktSampling;
    this._standaloneSettings.internalValue = config.standaloneSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ctrl_cpu_usage - computed: false, optional: true, required: false
  private _ctrlCpuUsage?: number; 
  public get ctrlCpuUsage() {
    return this.getNumberAttribute('ctrl_cpu_usage');
  }
  public set ctrlCpuUsage(value: number) {
    this._ctrlCpuUsage = value;
  }
  public resetCtrlCpuUsage() {
    this._ctrlCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlCpuUsageInput() {
    return this._ctrlCpuUsage;
  }

  // de_escalation_quiet_time - computed: false, optional: true, required: false
  private _deEscalationQuietTime?: number; 
  public get deEscalationQuietTime() {
    return this.getNumberAttribute('de_escalation_quiet_time');
  }
  public set deEscalationQuietTime(value: number) {
    this._deEscalationQuietTime = value;
  }
  public resetDeEscalationQuietTime() {
    this._deEscalationQuietTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deEscalationQuietTimeInput() {
    return this._deEscalationQuietTime;
  }

  // dedicated_cpus - computed: false, optional: true, required: false
  private _dedicatedCpus?: number; 
  public get dedicatedCpus() {
    return this.getNumberAttribute('dedicated_cpus');
  }
  public set dedicatedCpus(value: number) {
    this._dedicatedCpus = value;
  }
  public resetDedicatedCpus() {
    this._dedicatedCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedCpusInput() {
    return this._dedicatedCpus;
  }

  // detection_window_size - computed: false, optional: true, required: false
  private _detectionWindowSize?: number; 
  public get detectionWindowSize() {
    return this.getNumberAttribute('detection_window_size');
  }
  public set detectionWindowSize(value: number) {
    this._detectionWindowSize = value;
  }
  public resetDetectionWindowSize() {
    this._detectionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionWindowSizeInput() {
    return this._detectionWindowSize;
  }

  // detector_mode - computed: false, optional: true, required: false
  private _detectorMode?: string; 
  public get detectorMode() {
    return this.getStringAttribute('detector_mode');
  }
  public set detectorMode(value: string) {
    this._detectorMode = value;
  }
  public resetDetectorMode() {
    this._detectorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModeInput() {
    return this._detectorMode;
  }

  // export_interval - computed: false, optional: true, required: false
  private _exportInterval?: number; 
  public get exportInterval() {
    return this.getNumberAttribute('export_interval');
  }
  public set exportInterval(value: number) {
    this._exportInterval = value;
  }
  public resetExportInterval() {
    this._exportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportIntervalInput() {
    return this._exportInterval;
  }

  // full_core_enable - computed: false, optional: true, required: false
  private _fullCoreEnable?: number; 
  public get fullCoreEnable() {
    return this.getNumberAttribute('full_core_enable');
  }
  public set fullCoreEnable(value: number) {
    this._fullCoreEnable = value;
  }
  public resetFullCoreEnable() {
    this._fullCoreEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullCoreEnableInput() {
    return this._fullCoreEnable;
  }

  // histogram_de_escalate_percentage - computed: false, optional: true, required: false
  private _histogramDeEscalatePercentage?: number; 
  public get histogramDeEscalatePercentage() {
    return this.getNumberAttribute('histogram_de_escalate_percentage');
  }
  public set histogramDeEscalatePercentage(value: number) {
    this._histogramDeEscalatePercentage = value;
  }
  public resetHistogramDeEscalatePercentage() {
    this._histogramDeEscalatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramDeEscalatePercentageInput() {
    return this._histogramDeEscalatePercentage;
  }

  // histogram_escalate_percentage - computed: false, optional: true, required: false
  private _histogramEscalatePercentage?: number; 
  public get histogramEscalatePercentage() {
    return this.getNumberAttribute('histogram_escalate_percentage');
  }
  public set histogramEscalatePercentage(value: number) {
    this._histogramEscalatePercentage = value;
  }
  public resetHistogramEscalatePercentage() {
    this._histogramEscalatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramEscalatePercentageInput() {
    return this._histogramEscalatePercentage;
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

  // initial_learning_interval - computed: false, optional: true, required: false
  private _initialLearningInterval?: number; 
  public get initialLearningInterval() {
    return this.getNumberAttribute('initial_learning_interval');
  }
  public set initialLearningInterval(value: number) {
    this._initialLearningInterval = value;
  }
  public resetInitialLearningInterval() {
    this._initialLearningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLearningIntervalInput() {
    return this._initialLearningInterval;
  }

  // network_object_flooding_multiple - computed: false, optional: true, required: false
  private _networkObjectFloodingMultiple?: number; 
  public get networkObjectFloodingMultiple() {
    return this.getNumberAttribute('network_object_flooding_multiple');
  }
  public set networkObjectFloodingMultiple(value: number) {
    this._networkObjectFloodingMultiple = value;
  }
  public resetNetworkObjectFloodingMultiple() {
    this._networkObjectFloodingMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectFloodingMultipleInput() {
    return this._networkObjectFloodingMultiple;
  }

  // network_object_window_size - computed: false, optional: true, required: false
  private _networkObjectWindowSize?: string; 
  public get networkObjectWindowSize() {
    return this.getStringAttribute('network_object_window_size');
  }
  public set networkObjectWindowSize(value: string) {
    this._networkObjectWindowSize = value;
  }
  public resetNetworkObjectWindowSize() {
    this._networkObjectWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectWindowSizeInput() {
    return this._networkObjectWindowSize;
  }

  // notification_debug_log - computed: false, optional: true, required: false
  private _notificationDebugLog?: string; 
  public get notificationDebugLog() {
    return this.getStringAttribute('notification_debug_log');
  }
  public set notificationDebugLog(value: string) {
    this._notificationDebugLog = value;
  }
  public resetNotificationDebugLog() {
    this._notificationDebugLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDebugLogInput() {
    return this._notificationDebugLog;
  }

  // top_k_reset_interval - computed: false, optional: true, required: false
  private _topKResetInterval?: number; 
  public get topKResetInterval() {
    return this.getNumberAttribute('top_k_reset_interval');
  }
  public set topKResetInterval(value: number) {
    this._topKResetInterval = value;
  }
  public resetTopKResetInterval() {
    this._topKResetInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKResetIntervalInput() {
    return this._topKResetInterval;
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

  // entry_saving - computed: false, optional: true, required: false
  private _entrySaving = new DdosDetectionSettingsEntrySavingAOutputReference(this, "entry_saving");
  public get entrySaving() {
    return this._entrySaving;
  }
  public putEntrySaving(value: DdosDetectionSettingsEntrySavingA) {
    this._entrySaving.internalValue = value;
  }
  public resetEntrySaving() {
    this._entrySaving.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrySavingInput() {
    return this._entrySaving.internalValue;
  }

  // pkt_sampling - computed: false, optional: true, required: false
  private _pktSampling = new DdosDetectionSettingsPktSamplingAOutputReference(this, "pkt_sampling");
  public get pktSampling() {
    return this._pktSampling;
  }
  public putPktSampling(value: DdosDetectionSettingsPktSamplingA) {
    this._pktSampling.internalValue = value;
  }
  public resetPktSampling() {
    this._pktSampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktSamplingInput() {
    return this._pktSampling.internalValue;
  }

  // standalone_settings - computed: false, optional: true, required: false
  private _standaloneSettings = new DdosDetectionSettingsStandaloneSettingsAOutputReference(this, "standalone_settings");
  public get standaloneSettings() {
    return this._standaloneSettings;
  }
  public putStandaloneSettings(value: DdosDetectionSettingsStandaloneSettingsA) {
    this._standaloneSettings.internalValue = value;
  }
  public resetStandaloneSettings() {
    this._standaloneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneSettingsInput() {
    return this._standaloneSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ctrl_cpu_usage: cdktf.numberToTerraform(this._ctrlCpuUsage),
      de_escalation_quiet_time: cdktf.numberToTerraform(this._deEscalationQuietTime),
      dedicated_cpus: cdktf.numberToTerraform(this._dedicatedCpus),
      detection_window_size: cdktf.numberToTerraform(this._detectionWindowSize),
      detector_mode: cdktf.stringToTerraform(this._detectorMode),
      export_interval: cdktf.numberToTerraform(this._exportInterval),
      full_core_enable: cdktf.numberToTerraform(this._fullCoreEnable),
      histogram_de_escalate_percentage: cdktf.numberToTerraform(this._histogramDeEscalatePercentage),
      histogram_escalate_percentage: cdktf.numberToTerraform(this._histogramEscalatePercentage),
      id: cdktf.stringToTerraform(this._id),
      initial_learning_interval: cdktf.numberToTerraform(this._initialLearningInterval),
      network_object_flooding_multiple: cdktf.numberToTerraform(this._networkObjectFloodingMultiple),
      network_object_window_size: cdktf.stringToTerraform(this._networkObjectWindowSize),
      notification_debug_log: cdktf.stringToTerraform(this._notificationDebugLog),
      top_k_reset_interval: cdktf.numberToTerraform(this._topKResetInterval),
      uuid: cdktf.stringToTerraform(this._uuid),
      entry_saving: ddosDetectionSettingsEntrySavingAToTerraform(this._entrySaving.internalValue),
      pkt_sampling: ddosDetectionSettingsPktSamplingAToTerraform(this._pktSampling.internalValue),
      standalone_settings: ddosDetectionSettingsStandaloneSettingsAToTerraform(this._standaloneSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ctrl_cpu_usage: {
        value: cdktf.numberToHclTerraform(this._ctrlCpuUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      de_escalation_quiet_time: {
        value: cdktf.numberToHclTerraform(this._deEscalationQuietTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dedicated_cpus: {
        value: cdktf.numberToHclTerraform(this._dedicatedCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detection_window_size: {
        value: cdktf.numberToHclTerraform(this._detectionWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detector_mode: {
        value: cdktf.stringToHclTerraform(this._detectorMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_interval: {
        value: cdktf.numberToHclTerraform(this._exportInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      full_core_enable: {
        value: cdktf.numberToHclTerraform(this._fullCoreEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      histogram_de_escalate_percentage: {
        value: cdktf.numberToHclTerraform(this._histogramDeEscalatePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      histogram_escalate_percentage: {
        value: cdktf.numberToHclTerraform(this._histogramEscalatePercentage),
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
      initial_learning_interval: {
        value: cdktf.numberToHclTerraform(this._initialLearningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_object_flooding_multiple: {
        value: cdktf.numberToHclTerraform(this._networkObjectFloodingMultiple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_object_window_size: {
        value: cdktf.stringToHclTerraform(this._networkObjectWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_debug_log: {
        value: cdktf.stringToHclTerraform(this._notificationDebugLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      top_k_reset_interval: {
        value: cdktf.numberToHclTerraform(this._topKResetInterval),
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
      entry_saving: {
        value: ddosDetectionSettingsEntrySavingAToHclTerraform(this._entrySaving.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionSettingsEntrySavingAList",
      },
      pkt_sampling: {
        value: ddosDetectionSettingsPktSamplingAToHclTerraform(this._pktSampling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionSettingsPktSamplingAList",
      },
      standalone_settings: {
        value: ddosDetectionSettingsStandaloneSettingsAToHclTerraform(this._standaloneSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionSettingsStandaloneSettingsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
