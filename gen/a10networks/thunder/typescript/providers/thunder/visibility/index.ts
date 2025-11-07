// generated from terraform resource schema

import { VisibilityAnomalyDetection, 
visibilityAnomalyDetectionToTerraform, 
visibilityAnomalyDetectionToHclTerraform, 
VisibilityAnomalyDetectionOutputReference, 
VisibilityDebugFiles, 
visibilityDebugFilesToTerraform, 
visibilityDebugFilesToHclTerraform, 
VisibilityDebugFilesOutputReference, 
VisibilityFile, 
visibilityFileToTerraform, 
visibilityFileToHclTerraform, 
VisibilityFileOutputReference, 
VisibilityFlowCollector, 
visibilityFlowCollectorToTerraform, 
visibilityFlowCollectorToHclTerraform, 
VisibilityFlowCollectorOutputReference, 
VisibilityMonEntityTelemetryData, 
visibilityMonEntityTelemetryDataToTerraform, 
visibilityMonEntityTelemetryDataToHclTerraform, 
VisibilityMonEntityTelemetryDataOutputReference, 
VisibilityMonTopk, 
visibilityMonTopkToTerraform, 
visibilityMonTopkToHclTerraform, 
VisibilityMonTopkOutputReference, 
VisibilityMonitor, 
visibilityMonitorToTerraform, 
visibilityMonitorToHclTerraform, 
VisibilityMonitorOutputReference, 
VisibilityMonitoredEntity, 
visibilityMonitoredEntityToTerraform, 
visibilityMonitoredEntityToHclTerraform, 
VisibilityMonitoredEntityOutputReference, 
VisibilityPacketCapture, 
visibilityPacketCaptureToTerraform, 
visibilityPacketCaptureToHclTerraform, 
VisibilityPacketCaptureOutputReference, 
VisibilityPingSweepDetection, 
visibilityPingSweepDetectionToTerraform, 
visibilityPingSweepDetectionToHclTerraform, 
VisibilityPingSweepDetectionOutputReference, 
VisibilityPortScanDetection, 
visibilityPortScanDetectionToTerraform, 
visibilityPortScanDetectionToHclTerraform, 
VisibilityPortScanDetectionOutputReference, 
VisibilityReporting, 
visibilityReportingToTerraform, 
visibilityReportingToHclTerraform, 
VisibilityReportingOutputReference, 
VisibilityResourceUsage, 
visibilityResourceUsageToTerraform, 
visibilityResourceUsageToHclTerraform, 
VisibilityResourceUsageOutputReference, 
VisibilitySamplingEnable, 
visibilitySamplingEnableToTerraform, 
visibilitySamplingEnableToHclTerraform, 
VisibilitySamplingEnableList, 
VisibilityTopn, 
visibilityTopnToTerraform, 
visibilityTopnToHclTerraform, 
VisibilityTopnOutputReference, 
VisibilityZbar, 
visibilityZbarToTerraform, 
visibilityZbarToHclTerraform, 
VisibilityZbarOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VisibilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Granularity for rate based calculations in seconds (default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#granularity Visibility#granularity}
  */
  readonly granularity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#id Visibility#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initial learning interval (in hours) before processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#initial_learning_interval Visibility#initial_learning_interval}
  */
  readonly initialLearningInterval?: number;
  /**
  * Enable monitoring entity topk for sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#source_entity_topk Visibility#source_entity_topk}
  */
  readonly sourceEntityTopk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#uuid Visibility#uuid}
  */
  readonly uuid?: string;
  /**
  * anomaly_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#anomaly_detection Visibility#anomaly_detection}
  */
  readonly anomalyDetection?: VisibilityAnomalyDetection;
  /**
  * debug_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#debug_files Visibility#debug_files}
  */
  readonly debugFiles?: VisibilityDebugFiles;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#file Visibility#file}
  */
  readonly file?: VisibilityFile;
  /**
  * flow_collector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#flow_collector Visibility#flow_collector}
  */
  readonly flowCollector?: VisibilityFlowCollector;
  /**
  * mon_entity_telemetry_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#mon_entity_telemetry_data Visibility#mon_entity_telemetry_data}
  */
  readonly monEntityTelemetryData?: VisibilityMonEntityTelemetryData;
  /**
  * mon_topk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#mon_topk Visibility#mon_topk}
  */
  readonly monTopk?: VisibilityMonTopk;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#monitor Visibility#monitor}
  */
  readonly monitor?: VisibilityMonitor;
  /**
  * monitored_entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#monitored_entity Visibility#monitored_entity}
  */
  readonly monitoredEntity?: VisibilityMonitoredEntity;
  /**
  * packet_capture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#packet_capture Visibility#packet_capture}
  */
  readonly packetCapture?: VisibilityPacketCapture;
  /**
  * ping_sweep_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#ping_sweep_detection Visibility#ping_sweep_detection}
  */
  readonly pingSweepDetection?: VisibilityPingSweepDetection;
  /**
  * port_scan_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#port_scan_detection Visibility#port_scan_detection}
  */
  readonly portScanDetection?: VisibilityPortScanDetection;
  /**
  * reporting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#reporting Visibility#reporting}
  */
  readonly reporting?: VisibilityReporting;
  /**
  * resource_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#resource_usage Visibility#resource_usage}
  */
  readonly resourceUsage?: VisibilityResourceUsage;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#sampling_enable Visibility#sampling_enable}
  */
  readonly samplingEnable?: VisibilitySamplingEnable[] | cdktf.IResolvable;
  /**
  * topn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#topn Visibility#topn}
  */
  readonly topn?: VisibilityTopn;
  /**
  * zbar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#zbar Visibility#zbar}
  */
  readonly zbar?: VisibilityZbar;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility thunder_visibility}
*/
export class Visibility extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Visibility resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Visibility to import
  * @param importFromId The id of the existing Visibility that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Visibility to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility thunder_visibility} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility',
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
    this._granularity = config.granularity;
    this._id = config.id;
    this._initialLearningInterval = config.initialLearningInterval;
    this._sourceEntityTopk = config.sourceEntityTopk;
    this._uuid = config.uuid;
    this._anomalyDetection.internalValue = config.anomalyDetection;
    this._debugFiles.internalValue = config.debugFiles;
    this._file.internalValue = config.file;
    this._flowCollector.internalValue = config.flowCollector;
    this._monEntityTelemetryData.internalValue = config.monEntityTelemetryData;
    this._monTopk.internalValue = config.monTopk;
    this._monitor.internalValue = config.monitor;
    this._monitoredEntity.internalValue = config.monitoredEntity;
    this._packetCapture.internalValue = config.packetCapture;
    this._pingSweepDetection.internalValue = config.pingSweepDetection;
    this._portScanDetection.internalValue = config.portScanDetection;
    this._reporting.internalValue = config.reporting;
    this._resourceUsage.internalValue = config.resourceUsage;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._topn.internalValue = config.topn;
    this._zbar.internalValue = config.zbar;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // granularity - computed: false, optional: true, required: false
  private _granularity?: number; 
  public get granularity() {
    return this.getNumberAttribute('granularity');
  }
  public set granularity(value: number) {
    this._granularity = value;
  }
  public resetGranularity() {
    this._granularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularityInput() {
    return this._granularity;
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

  // source_entity_topk - computed: false, optional: true, required: false
  private _sourceEntityTopk?: number; 
  public get sourceEntityTopk() {
    return this.getNumberAttribute('source_entity_topk');
  }
  public set sourceEntityTopk(value: number) {
    this._sourceEntityTopk = value;
  }
  public resetSourceEntityTopk() {
    this._sourceEntityTopk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityTopkInput() {
    return this._sourceEntityTopk;
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

  // anomaly_detection - computed: false, optional: true, required: false
  private _anomalyDetection = new VisibilityAnomalyDetectionOutputReference(this, "anomaly_detection");
  public get anomalyDetection() {
    return this._anomalyDetection;
  }
  public putAnomalyDetection(value: VisibilityAnomalyDetection) {
    this._anomalyDetection.internalValue = value;
  }
  public resetAnomalyDetection() {
    this._anomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionInput() {
    return this._anomalyDetection.internalValue;
  }

  // debug_files - computed: false, optional: true, required: false
  private _debugFiles = new VisibilityDebugFilesOutputReference(this, "debug_files");
  public get debugFiles() {
    return this._debugFiles;
  }
  public putDebugFiles(value: VisibilityDebugFiles) {
    this._debugFiles.internalValue = value;
  }
  public resetDebugFiles() {
    this._debugFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugFilesInput() {
    return this._debugFiles.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new VisibilityFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: VisibilityFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // flow_collector - computed: false, optional: true, required: false
  private _flowCollector = new VisibilityFlowCollectorOutputReference(this, "flow_collector");
  public get flowCollector() {
    return this._flowCollector;
  }
  public putFlowCollector(value: VisibilityFlowCollector) {
    this._flowCollector.internalValue = value;
  }
  public resetFlowCollector() {
    this._flowCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowCollectorInput() {
    return this._flowCollector.internalValue;
  }

  // mon_entity_telemetry_data - computed: false, optional: true, required: false
  private _monEntityTelemetryData = new VisibilityMonEntityTelemetryDataOutputReference(this, "mon_entity_telemetry_data");
  public get monEntityTelemetryData() {
    return this._monEntityTelemetryData;
  }
  public putMonEntityTelemetryData(value: VisibilityMonEntityTelemetryData) {
    this._monEntityTelemetryData.internalValue = value;
  }
  public resetMonEntityTelemetryData() {
    this._monEntityTelemetryData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityTelemetryDataInput() {
    return this._monEntityTelemetryData.internalValue;
  }

  // mon_topk - computed: false, optional: true, required: false
  private _monTopk = new VisibilityMonTopkOutputReference(this, "mon_topk");
  public get monTopk() {
    return this._monTopk;
  }
  public putMonTopk(value: VisibilityMonTopk) {
    this._monTopk.internalValue = value;
  }
  public resetMonTopk() {
    this._monTopk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monTopkInput() {
    return this._monTopk.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new VisibilityMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: VisibilityMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // monitored_entity - computed: false, optional: true, required: false
  private _monitoredEntity = new VisibilityMonitoredEntityOutputReference(this, "monitored_entity");
  public get monitoredEntity() {
    return this._monitoredEntity;
  }
  public putMonitoredEntity(value: VisibilityMonitoredEntity) {
    this._monitoredEntity.internalValue = value;
  }
  public resetMonitoredEntity() {
    this._monitoredEntity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredEntityInput() {
    return this._monitoredEntity.internalValue;
  }

  // packet_capture - computed: false, optional: true, required: false
  private _packetCapture = new VisibilityPacketCaptureOutputReference(this, "packet_capture");
  public get packetCapture() {
    return this._packetCapture;
  }
  public putPacketCapture(value: VisibilityPacketCapture) {
    this._packetCapture.internalValue = value;
  }
  public resetPacketCapture() {
    this._packetCapture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture.internalValue;
  }

  // ping_sweep_detection - computed: false, optional: true, required: false
  private _pingSweepDetection = new VisibilityPingSweepDetectionOutputReference(this, "ping_sweep_detection");
  public get pingSweepDetection() {
    return this._pingSweepDetection;
  }
  public putPingSweepDetection(value: VisibilityPingSweepDetection) {
    this._pingSweepDetection.internalValue = value;
  }
  public resetPingSweepDetection() {
    this._pingSweepDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingSweepDetectionInput() {
    return this._pingSweepDetection.internalValue;
  }

  // port_scan_detection - computed: false, optional: true, required: false
  private _portScanDetection = new VisibilityPortScanDetectionOutputReference(this, "port_scan_detection");
  public get portScanDetection() {
    return this._portScanDetection;
  }
  public putPortScanDetection(value: VisibilityPortScanDetection) {
    this._portScanDetection.internalValue = value;
  }
  public resetPortScanDetection() {
    this._portScanDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanDetectionInput() {
    return this._portScanDetection.internalValue;
  }

  // reporting - computed: false, optional: true, required: false
  private _reporting = new VisibilityReportingOutputReference(this, "reporting");
  public get reporting() {
    return this._reporting;
  }
  public putReporting(value: VisibilityReporting) {
    this._reporting.internalValue = value;
  }
  public resetReporting() {
    this._reporting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingInput() {
    return this._reporting.internalValue;
  }

  // resource_usage - computed: false, optional: true, required: false
  private _resourceUsage = new VisibilityResourceUsageOutputReference(this, "resource_usage");
  public get resourceUsage() {
    return this._resourceUsage;
  }
  public putResourceUsage(value: VisibilityResourceUsage) {
    this._resourceUsage.internalValue = value;
  }
  public resetResourceUsage() {
    this._resourceUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageInput() {
    return this._resourceUsage.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VisibilitySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VisibilitySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // topn - computed: false, optional: true, required: false
  private _topn = new VisibilityTopnOutputReference(this, "topn");
  public get topn() {
    return this._topn;
  }
  public putTopn(value: VisibilityTopn) {
    this._topn.internalValue = value;
  }
  public resetTopn() {
    this._topn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topnInput() {
    return this._topn.internalValue;
  }

  // zbar - computed: false, optional: true, required: false
  private _zbar = new VisibilityZbarOutputReference(this, "zbar");
  public get zbar() {
    return this._zbar;
  }
  public putZbar(value: VisibilityZbar) {
    this._zbar.internalValue = value;
  }
  public resetZbar() {
    this._zbar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarInput() {
    return this._zbar.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      granularity: cdktf.numberToTerraform(this._granularity),
      id: cdktf.stringToTerraform(this._id),
      initial_learning_interval: cdktf.numberToTerraform(this._initialLearningInterval),
      source_entity_topk: cdktf.numberToTerraform(this._sourceEntityTopk),
      uuid: cdktf.stringToTerraform(this._uuid),
      anomaly_detection: visibilityAnomalyDetectionToTerraform(this._anomalyDetection.internalValue),
      debug_files: visibilityDebugFilesToTerraform(this._debugFiles.internalValue),
      file: visibilityFileToTerraform(this._file.internalValue),
      flow_collector: visibilityFlowCollectorToTerraform(this._flowCollector.internalValue),
      mon_entity_telemetry_data: visibilityMonEntityTelemetryDataToTerraform(this._monEntityTelemetryData.internalValue),
      mon_topk: visibilityMonTopkToTerraform(this._monTopk.internalValue),
      monitor: visibilityMonitorToTerraform(this._monitor.internalValue),
      monitored_entity: visibilityMonitoredEntityToTerraform(this._monitoredEntity.internalValue),
      packet_capture: visibilityPacketCaptureToTerraform(this._packetCapture.internalValue),
      ping_sweep_detection: visibilityPingSweepDetectionToTerraform(this._pingSweepDetection.internalValue),
      port_scan_detection: visibilityPortScanDetectionToTerraform(this._portScanDetection.internalValue),
      reporting: visibilityReportingToTerraform(this._reporting.internalValue),
      resource_usage: visibilityResourceUsageToTerraform(this._resourceUsage.internalValue),
      sampling_enable: cdktf.listMapper(visibilitySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      topn: visibilityTopnToTerraform(this._topn.internalValue),
      zbar: visibilityZbarToTerraform(this._zbar.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      granularity: {
        value: cdktf.numberToHclTerraform(this._granularity),
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
      source_entity_topk: {
        value: cdktf.numberToHclTerraform(this._sourceEntityTopk),
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
      anomaly_detection: {
        value: visibilityAnomalyDetectionToHclTerraform(this._anomalyDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityAnomalyDetectionList",
      },
      debug_files: {
        value: visibilityDebugFilesToHclTerraform(this._debugFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityDebugFilesList",
      },
      file: {
        value: visibilityFileToHclTerraform(this._file.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityFileList",
      },
      flow_collector: {
        value: visibilityFlowCollectorToHclTerraform(this._flowCollector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityFlowCollectorList",
      },
      mon_entity_telemetry_data: {
        value: visibilityMonEntityTelemetryDataToHclTerraform(this._monEntityTelemetryData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonEntityTelemetryDataList",
      },
      mon_topk: {
        value: visibilityMonTopkToHclTerraform(this._monTopk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonTopkList",
      },
      monitor: {
        value: visibilityMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorList",
      },
      monitored_entity: {
        value: visibilityMonitoredEntityToHclTerraform(this._monitoredEntity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitoredEntityList",
      },
      packet_capture: {
        value: visibilityPacketCaptureToHclTerraform(this._packetCapture.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureList",
      },
      ping_sweep_detection: {
        value: visibilityPingSweepDetectionToHclTerraform(this._pingSweepDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPingSweepDetectionList",
      },
      port_scan_detection: {
        value: visibilityPortScanDetectionToHclTerraform(this._portScanDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPortScanDetectionList",
      },
      reporting: {
        value: visibilityReportingToHclTerraform(this._reporting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityReportingList",
      },
      resource_usage: {
        value: visibilityResourceUsageToHclTerraform(this._resourceUsage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityResourceUsageList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(visibilitySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilitySamplingEnableList",
      },
      topn: {
        value: visibilityTopnToHclTerraform(this._topn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityTopnList",
      },
      zbar: {
        value: visibilityZbarToHclTerraform(this._zbar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityZbarList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
