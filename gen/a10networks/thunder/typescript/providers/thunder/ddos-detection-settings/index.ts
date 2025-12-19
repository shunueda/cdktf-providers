// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionSettingsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Control cpu usage threshold for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#ctrl_cpu_usage DdosDetectionSettingsA#ctrl_cpu_usage}
  */
  readonly ctrlCpuUsage?: number;
  /**
  * Configure de-escalation needed time in minutes from level 1 to 0.(default 1 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#de_escalation_quiet_time DdosDetectionSettingsA#de_escalation_quiet_time}
  */
  readonly deEscalationQuietTime?: number;
  /**
  * Configure the number of dedicated cores for detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#dedicated_cpus DdosDetectionSettingsA#dedicated_cpus}
  */
  readonly dedicatedCpus?: number;
  /**
  * Configure detection window size in seconds (DDoS detection window size in seconds(default: 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#detection_window_size DdosDetectionSettingsA#detection_window_size}
  */
  readonly detectionWindowSize?: number;
  /**
  * 'standalone': Standalone detector; 'on-box': Mitigator and Detector on the same box; 'auto-svc-discovery': Auto Service discovery using Visibility module (Deprecatd);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#detector_mode DdosDetectionSettingsA#detector_mode}
  */
  readonly detectorMode?: string;
  /**
  * Configure Baselining and export interval in seconds (DDoS Baselining and export interval in seconds(default: 20))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#export_interval DdosDetectionSettingsA#export_interval}
  */
  readonly exportInterval?: number;
  /**
  * Enable full core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#full_core_enable DdosDetectionSettingsA#full_core_enable}
  */
  readonly fullCoreEnable?: number;
  /**
  * histogram de-escalate sensitivity for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#histogram_de_escalate_percentage DdosDetectionSettingsA#histogram_de_escalate_percentage}
  */
  readonly histogramDeEscalatePercentage?: number;
  /**
  * histogram escalate sensitivity for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#histogram_escalate_percentage DdosDetectionSettingsA#histogram_escalate_percentage}
  */
  readonly histogramEscalatePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#id DdosDetectionSettingsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial learning interval (in hours) before processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#initial_learning_interval DdosDetectionSettingsA#initial_learning_interval}
  */
  readonly initialLearningInterval?: number;
  /**
  * multiplier for flooding detection threshold in network objects (default 2x threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#network_object_flooding_multiple DdosDetectionSettingsA#network_object_flooding_multiple}
  */
  readonly networkObjectFloodingMultiple?: number;
  /**
  * Send subnet notification when anomaly children subnet entries over configured percentage.(default 50%)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#network_object_subnet_notify_percent DdosDetectionSettingsA#network_object_subnet_notify_percent}
  */
  readonly networkObjectSubnetNotifyPercent?: number;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '30': 30 seconds;  (DDoS detection window size in seconds(default: 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#network_object_window_size DdosDetectionSettingsA#network_object_window_size}
  */
  readonly networkObjectWindowSize?: string;
  /**
  * 'enable': Enable detection notification debug log (default: disabled);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#notification_debug_log DdosDetectionSettingsA#notification_debug_log}
  */
  readonly notificationDebugLog?: string;
  /**
  * Configure top-k reset interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#top_k_reset_interval DdosDetectionSettingsA#top_k_reset_interval}
  */
  readonly topKResetInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
  /**
  * entry_saving block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#entry_saving DdosDetectionSettingsA#entry_saving}
  */
  readonly entrySaving?: DdosDetectionSettingsEntrySavingA;
  /**
  * pkt_sampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#pkt_sampling DdosDetectionSettingsA#pkt_sampling}
  */
  readonly pktSampling?: DdosDetectionSettingsPktSamplingA[] | cdktf.IResolvable;
  /**
  * standalone_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#standalone_settings DdosDetectionSettingsA#standalone_settings}
  */
  readonly standaloneSettings?: DdosDetectionSettingsStandaloneSettingsA;
  /**
  * zone_notifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#zone_notifications DdosDetectionSettingsA#zone_notifications}
  */
  readonly zoneNotifications?: DdosDetectionSettingsZoneNotificationsA;
}
export interface DdosDetectionSettingsEntrySavingA {
  /**
  * Disable auto-restoring when system boots up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#disable_bootup_restore DdosDetectionSettingsA#disable_bootup_restore}
  */
  readonly disableBootupRestore?: number;
  /**
  * Configure periodical auto-saving interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#interval DdosDetectionSettingsA#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsEntrySavingAToTerraform(struct?: DdosDetectionSettingsEntrySavingAOutputReference | DdosDetectionSettingsEntrySavingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_bootup_restore: cdktf.numberToTerraform(struct!.disableBootupRestore),
    interval: cdktf.numberToTerraform(struct!.interval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsEntrySavingAToHclTerraform(struct?: DdosDetectionSettingsEntrySavingAOutputReference | DdosDetectionSettingsEntrySavingA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_bootup_restore: {
      value: cdktf.numberToHclTerraform(struct!.disableBootupRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    if (this._disableBootupRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBootupRestore = this._disableBootupRestore;
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

  public set internalValue(value: DdosDetectionSettingsEntrySavingA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableBootupRestore = undefined;
      this._interval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableBootupRestore = value.disableBootupRestore;
      this._interval = value.interval;
      this._uuid = value.uuid;
    }
  }

  // disable_bootup_restore - computed: false, optional: true, required: false
  private _disableBootupRestore?: number; 
  public get disableBootupRestore() {
    return this.getNumberAttribute('disable_bootup_restore');
  }
  public set disableBootupRestore(value: number) {
    this._disableBootupRestore = value;
  }
  public resetDisableBootupRestore() {
    this._disableBootupRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBootupRestoreInput() {
    return this._disableBootupRestore;
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
export interface DdosDetectionSettingsPktSamplingA {
  /**
  * Sample 1 in X packets (default: X=1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#override_rate DdosDetectionSettingsA#override_rate}
  */
  readonly overrideRate?: number;
  /**
  * Configure the start level for dynamic sampling adjustment (Sample 1 in N packets, the larger level the larger value of N (default: 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#start_level DdosDetectionSettingsA#start_level}
  */
  readonly startLevel?: number;
}

export function ddosDetectionSettingsPktSamplingAToTerraform(struct?: DdosDetectionSettingsPktSamplingA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_rate: cdktf.numberToTerraform(struct!.overrideRate),
    start_level: cdktf.numberToTerraform(struct!.startLevel),
  }
}


export function ddosDetectionSettingsPktSamplingAToHclTerraform(struct?: DdosDetectionSettingsPktSamplingA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_rate: {
      value: cdktf.numberToHclTerraform(struct!.overrideRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_level: {
      value: cdktf.numberToHclTerraform(struct!.startLevel),
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

  public get internalValue(): DdosDetectionSettingsPktSamplingA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideRate = this._overrideRate;
    }
    if (this._startLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.startLevel = this._startLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsPktSamplingA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideRate = undefined;
      this._startLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideRate = value.overrideRate;
      this._startLevel = value.startLevel;
    }
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

  // start_level - computed: false, optional: true, required: false
  private _startLevel?: number; 
  public get startLevel() {
    return this.getNumberAttribute('start_level');
  }
  public set startLevel(value: number) {
    this._startLevel = value;
  }
  public resetStartLevel() {
    this._startLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startLevelInput() {
    return this._startLevel;
  }
}

export class DdosDetectionSettingsPktSamplingAList extends cdktf.ComplexList {
  public internalValue? : DdosDetectionSettingsPktSamplingA[] | cdktf.IResolvable

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
  public get(index: number): DdosDetectionSettingsPktSamplingAOutputReference {
    return new DdosDetectionSettingsPktSamplingAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDetectionSettingsStandaloneSettingsNetflowA {
  /**
  * 'enable': Enable data distribution by flow duration(default); 'disable': Disable data distribution by flow duration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#distribute_by_duration DdosDetectionSettingsA#distribute_by_duration}
  */
  readonly distributeByDuration?: string;
  /**
  * Netflow port to receive packets (Netflow port number(default 9996))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#listening_port DdosDetectionSettingsA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * Configure active timeout of the netflow templates received in mins (Template active timeout(mins)(default 30mins))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#template_active_timeout DdosDetectionSettingsA#template_active_timeout}
  */
  readonly templateActiveTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsStandaloneSettingsNetflowAToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference | DdosDetectionSettingsStandaloneSettingsNetflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_by_duration: cdktf.stringToTerraform(struct!.distributeByDuration),
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
    distribute_by_duration: {
      value: cdktf.stringToHclTerraform(struct!.distributeByDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    if (this._distributeByDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeByDuration = this._distributeByDuration;
    }
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
      this._distributeByDuration = undefined;
      this._listeningPort = undefined;
      this._templateActiveTimeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributeByDuration = value.distributeByDuration;
      this._listeningPort = value.listeningPort;
      this._templateActiveTimeout = value.templateActiveTimeout;
      this._uuid = value.uuid;
    }
  }

  // distribute_by_duration - computed: false, optional: true, required: false
  private _distributeByDuration?: string; 
  public get distributeByDuration() {
    return this.getStringAttribute('distribute_by_duration');
  }
  public set distributeByDuration(value: string) {
    this._distributeByDuration = value;
  }
  public resetDistributeByDuration() {
    this._distributeByDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeByDurationInput() {
    return this._distributeByDuration;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#listening_port DdosDetectionSettingsA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#action DdosDetectionSettingsA#action}
  */
  readonly action?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
  /**
  * netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#netflow DdosDetectionSettingsA#netflow}
  */
  readonly netflow?: DdosDetectionSettingsStandaloneSettingsNetflowA;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#sflow DdosDetectionSettingsA#sflow}
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
      this._uuid = undefined;
      this._netflow.internalValue = undefined;
      this._sflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
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
export interface DdosDetectionSettingsZoneNotificationsA {
  /**
  * 'enable': Enable source entry detection notification; 'disable': Disable source entry detection notification(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#source_entry DdosDetectionSettingsA#source_entry}
  */
  readonly sourceEntry?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#uuid DdosDetectionSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsZoneNotificationsAToTerraform(struct?: DdosDetectionSettingsZoneNotificationsAOutputReference | DdosDetectionSettingsZoneNotificationsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_entry: cdktf.stringToTerraform(struct!.sourceEntry),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsZoneNotificationsAToHclTerraform(struct?: DdosDetectionSettingsZoneNotificationsAOutputReference | DdosDetectionSettingsZoneNotificationsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_entry: {
      value: cdktf.stringToHclTerraform(struct!.sourceEntry),
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

export class DdosDetectionSettingsZoneNotificationsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsZoneNotificationsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEntry = this._sourceEntry;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsZoneNotificationsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceEntry = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceEntry = value.sourceEntry;
      this._uuid = value.uuid;
    }
  }

  // source_entry - computed: false, optional: true, required: false
  private _sourceEntry?: string; 
  public get sourceEntry() {
    return this.getStringAttribute('source_entry');
  }
  public set sourceEntry(value: string) {
    this._sourceEntry = value;
  }
  public resetSourceEntry() {
    this._sourceEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryInput() {
    return this._sourceEntry;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings thunder_ddos_detection_settings}
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
  * @param importFromId The id of the existing DdosDetectionSettingsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionSettingsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings thunder_ddos_detection_settings} Resource
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
    this._networkObjectSubnetNotifyPercent = config.networkObjectSubnetNotifyPercent;
    this._networkObjectWindowSize = config.networkObjectWindowSize;
    this._notificationDebugLog = config.notificationDebugLog;
    this._topKResetInterval = config.topKResetInterval;
    this._uuid = config.uuid;
    this._entrySaving.internalValue = config.entrySaving;
    this._pktSampling.internalValue = config.pktSampling;
    this._standaloneSettings.internalValue = config.standaloneSettings;
    this._zoneNotifications.internalValue = config.zoneNotifications;
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

  // network_object_subnet_notify_percent - computed: false, optional: true, required: false
  private _networkObjectSubnetNotifyPercent?: number; 
  public get networkObjectSubnetNotifyPercent() {
    return this.getNumberAttribute('network_object_subnet_notify_percent');
  }
  public set networkObjectSubnetNotifyPercent(value: number) {
    this._networkObjectSubnetNotifyPercent = value;
  }
  public resetNetworkObjectSubnetNotifyPercent() {
    this._networkObjectSubnetNotifyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectSubnetNotifyPercentInput() {
    return this._networkObjectSubnetNotifyPercent;
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
  private _pktSampling = new DdosDetectionSettingsPktSamplingAList(this, "pkt_sampling", false);
  public get pktSampling() {
    return this._pktSampling;
  }
  public putPktSampling(value: DdosDetectionSettingsPktSamplingA[] | cdktf.IResolvable) {
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

  // zone_notifications - computed: false, optional: true, required: false
  private _zoneNotifications = new DdosDetectionSettingsZoneNotificationsAOutputReference(this, "zone_notifications");
  public get zoneNotifications() {
    return this._zoneNotifications;
  }
  public putZoneNotifications(value: DdosDetectionSettingsZoneNotificationsA) {
    this._zoneNotifications.internalValue = value;
  }
  public resetZoneNotifications() {
    this._zoneNotifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNotificationsInput() {
    return this._zoneNotifications.internalValue;
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
      network_object_subnet_notify_percent: cdktf.numberToTerraform(this._networkObjectSubnetNotifyPercent),
      network_object_window_size: cdktf.stringToTerraform(this._networkObjectWindowSize),
      notification_debug_log: cdktf.stringToTerraform(this._notificationDebugLog),
      top_k_reset_interval: cdktf.numberToTerraform(this._topKResetInterval),
      uuid: cdktf.stringToTerraform(this._uuid),
      entry_saving: ddosDetectionSettingsEntrySavingAToTerraform(this._entrySaving.internalValue),
      pkt_sampling: cdktf.listMapper(ddosDetectionSettingsPktSamplingAToTerraform, true)(this._pktSampling.internalValue),
      standalone_settings: ddosDetectionSettingsStandaloneSettingsAToTerraform(this._standaloneSettings.internalValue),
      zone_notifications: ddosDetectionSettingsZoneNotificationsAToTerraform(this._zoneNotifications.internalValue),
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
      network_object_subnet_notify_percent: {
        value: cdktf.numberToHclTerraform(this._networkObjectSubnetNotifyPercent),
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
        value: cdktf.listMapperHcl(ddosDetectionSettingsPktSamplingAToHclTerraform, true)(this._pktSampling.internalValue),
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
      zone_notifications: {
        value: ddosDetectionSettingsZoneNotificationsAToHclTerraform(this._zoneNotifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionSettingsZoneNotificationsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
