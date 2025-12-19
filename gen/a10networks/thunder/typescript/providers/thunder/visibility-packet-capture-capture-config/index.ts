// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureCaptureConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable and specify maximum concurrent 3 tuple filter based captures in seperate pcaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#concurrent_captures VisibilityPacketCaptureCaptureConfig#concurrent_captures}
  */
  readonly concurrentCaptures?: number;
  /**
  * Specify the time in minutes upto which a 3 tuple filter based capture will be kept active(default 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#concurrent_captures_age VisibilityPacketCaptureCaptureConfig#concurrent_captures_age}
  */
  readonly concurrentCapturesAge?: number;
  /**
  * Specify maximum number of concurrent connnections(5 tuple matches) to be captured within in a 3 tuple based capture. (default 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#concurrent_conn_per_capture VisibilityPacketCaptureCaptureConfig#concurrent_conn_per_capture}
  */
  readonly concurrentConnPerCapture?: number;
  /**
  * Enable and specify maximum concurrent connnections(only 5 tuple based) to be captured in common pcaps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#concurrent_conn_tag VisibilityPacketCaptureCaptureConfig#concurrent_conn_tag}
  */
  readonly concurrentConnTag?: number;
  /**
  * Operational command to force create temporary pcapng files before completion (for global/non 3 tuple based captures)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#create_pcap_files_now VisibilityPacketCaptureCaptureConfig#create_pcap_files_now}
  */
  readonly createPcapFilesNow?: number;
  /**
  * Disable packet capture (default enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#disable VisibilityPacketCaptureCaptureConfig#disable}
  */
  readonly disable?: number;
  /**
  * Disable auto merging per CPU pcapng files(default enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#disable_auto_merge VisibilityPacketCaptureCaptureConfig#disable_auto_merge}
  */
  readonly disableAutoMerge?: number;
  /**
  * Enable continuous capture of packets for the global capture(non 3 tuple based capture) overriding size limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#enable_continuous_global_capture VisibilityPacketCaptureCaptureConfig#enable_continuous_global_capture}
  */
  readonly enableContinuousGlobalCapture?: number;
  /**
  * Specify the number of continuous pcapng files that can be created for capturing packets (default 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#file_count VisibilityPacketCaptureCaptureConfig#file_count}
  */
  readonly fileCount?: number;
  /**
  * Specify pcapng filesize in MB, Will be distributed per CPU (default 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#file_size VisibilityPacketCaptureCaptureConfig#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#id VisibilityPacketCaptureCaptureConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Keep original per CPU pcapng files after auto merging pcapng files(default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#keep_pcap_files_after_merge VisibilityPacketCaptureCaptureConfig#keep_pcap_files_after_merge}
  */
  readonly keepPcapFilesAfterMerge?: number;
  /**
  * Specify the name of the capture-config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#name VisibilityPacketCaptureCaptureConfig#name}
  */
  readonly name: string;
  /**
  * Specify Maximum number of packets per global or dynamic capture (default 0 unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#number_of_packets_per_capture VisibilityPacketCaptureCaptureConfig#number_of_packets_per_capture}
  */
  readonly numberOfPacketsPerCapture?: number;
  /**
  * Specify maximum number of packets to be captured in a 5 tuple based connection (default 0 unlimited).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#number_of_packets_per_conn VisibilityPacketCaptureCaptureConfig#number_of_packets_per_conn}
  */
  readonly numberOfPacketsPerConn?: number;
  /**
  * Specify Maximum number of packets for all captures (default 0 unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#number_of_packets_total VisibilityPacketCaptureCaptureConfig#number_of_packets_total}
  */
  readonly numberOfPacketsTotal?: number;
  /**
  * Packet length in Bytes to capture (Default 128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#packet_length VisibilityPacketCaptureCaptureConfig#packet_length}
  */
  readonly packetLength?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#user_tag VisibilityPacketCaptureCaptureConfig#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#uuid VisibilityPacketCaptureCaptureConfig#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config thunder_visibility_packet_capture_capture_config}
*/
export class VisibilityPacketCaptureCaptureConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_capture_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureCaptureConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureCaptureConfig to import
  * @param importFromId The id of the existing VisibilityPacketCaptureCaptureConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureCaptureConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_capture_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_capture_config thunder_visibility_packet_capture_capture_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureCaptureConfigConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureCaptureConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_capture_config',
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
    this._concurrentCaptures = config.concurrentCaptures;
    this._concurrentCapturesAge = config.concurrentCapturesAge;
    this._concurrentConnPerCapture = config.concurrentConnPerCapture;
    this._concurrentConnTag = config.concurrentConnTag;
    this._createPcapFilesNow = config.createPcapFilesNow;
    this._disable = config.disable;
    this._disableAutoMerge = config.disableAutoMerge;
    this._enableContinuousGlobalCapture = config.enableContinuousGlobalCapture;
    this._fileCount = config.fileCount;
    this._fileSize = config.fileSize;
    this._id = config.id;
    this._keepPcapFilesAfterMerge = config.keepPcapFilesAfterMerge;
    this._name = config.name;
    this._numberOfPacketsPerCapture = config.numberOfPacketsPerCapture;
    this._numberOfPacketsPerConn = config.numberOfPacketsPerConn;
    this._numberOfPacketsTotal = config.numberOfPacketsTotal;
    this._packetLength = config.packetLength;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrent_captures - computed: false, optional: true, required: false
  private _concurrentCaptures?: number; 
  public get concurrentCaptures() {
    return this.getNumberAttribute('concurrent_captures');
  }
  public set concurrentCaptures(value: number) {
    this._concurrentCaptures = value;
  }
  public resetConcurrentCaptures() {
    this._concurrentCaptures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCapturesInput() {
    return this._concurrentCaptures;
  }

  // concurrent_captures_age - computed: false, optional: true, required: false
  private _concurrentCapturesAge?: number; 
  public get concurrentCapturesAge() {
    return this.getNumberAttribute('concurrent_captures_age');
  }
  public set concurrentCapturesAge(value: number) {
    this._concurrentCapturesAge = value;
  }
  public resetConcurrentCapturesAge() {
    this._concurrentCapturesAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentCapturesAgeInput() {
    return this._concurrentCapturesAge;
  }

  // concurrent_conn_per_capture - computed: false, optional: true, required: false
  private _concurrentConnPerCapture?: number; 
  public get concurrentConnPerCapture() {
    return this.getNumberAttribute('concurrent_conn_per_capture');
  }
  public set concurrentConnPerCapture(value: number) {
    this._concurrentConnPerCapture = value;
  }
  public resetConcurrentConnPerCapture() {
    this._concurrentConnPerCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentConnPerCaptureInput() {
    return this._concurrentConnPerCapture;
  }

  // concurrent_conn_tag - computed: false, optional: true, required: false
  private _concurrentConnTag?: number; 
  public get concurrentConnTag() {
    return this.getNumberAttribute('concurrent_conn_tag');
  }
  public set concurrentConnTag(value: number) {
    this._concurrentConnTag = value;
  }
  public resetConcurrentConnTag() {
    this._concurrentConnTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentConnTagInput() {
    return this._concurrentConnTag;
  }

  // create_pcap_files_now - computed: false, optional: true, required: false
  private _createPcapFilesNow?: number; 
  public get createPcapFilesNow() {
    return this.getNumberAttribute('create_pcap_files_now');
  }
  public set createPcapFilesNow(value: number) {
    this._createPcapFilesNow = value;
  }
  public resetCreatePcapFilesNow() {
    this._createPcapFilesNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPcapFilesNowInput() {
    return this._createPcapFilesNow;
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

  // disable_auto_merge - computed: false, optional: true, required: false
  private _disableAutoMerge?: number; 
  public get disableAutoMerge() {
    return this.getNumberAttribute('disable_auto_merge');
  }
  public set disableAutoMerge(value: number) {
    this._disableAutoMerge = value;
  }
  public resetDisableAutoMerge() {
    this._disableAutoMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoMergeInput() {
    return this._disableAutoMerge;
  }

  // enable_continuous_global_capture - computed: false, optional: true, required: false
  private _enableContinuousGlobalCapture?: number; 
  public get enableContinuousGlobalCapture() {
    return this.getNumberAttribute('enable_continuous_global_capture');
  }
  public set enableContinuousGlobalCapture(value: number) {
    this._enableContinuousGlobalCapture = value;
  }
  public resetEnableContinuousGlobalCapture() {
    this._enableContinuousGlobalCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableContinuousGlobalCaptureInput() {
    return this._enableContinuousGlobalCapture;
  }

  // file_count - computed: false, optional: true, required: false
  private _fileCount?: number; 
  public get fileCount() {
    return this.getNumberAttribute('file_count');
  }
  public set fileCount(value: number) {
    this._fileCount = value;
  }
  public resetFileCount() {
    this._fileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileCountInput() {
    return this._fileCount;
  }

  // file_size - computed: false, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
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

  // keep_pcap_files_after_merge - computed: false, optional: true, required: false
  private _keepPcapFilesAfterMerge?: number; 
  public get keepPcapFilesAfterMerge() {
    return this.getNumberAttribute('keep_pcap_files_after_merge');
  }
  public set keepPcapFilesAfterMerge(value: number) {
    this._keepPcapFilesAfterMerge = value;
  }
  public resetKeepPcapFilesAfterMerge() {
    this._keepPcapFilesAfterMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepPcapFilesAfterMergeInput() {
    return this._keepPcapFilesAfterMerge;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number_of_packets_per_capture - computed: false, optional: true, required: false
  private _numberOfPacketsPerCapture?: number; 
  public get numberOfPacketsPerCapture() {
    return this.getNumberAttribute('number_of_packets_per_capture');
  }
  public set numberOfPacketsPerCapture(value: number) {
    this._numberOfPacketsPerCapture = value;
  }
  public resetNumberOfPacketsPerCapture() {
    this._numberOfPacketsPerCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPacketsPerCaptureInput() {
    return this._numberOfPacketsPerCapture;
  }

  // number_of_packets_per_conn - computed: false, optional: true, required: false
  private _numberOfPacketsPerConn?: number; 
  public get numberOfPacketsPerConn() {
    return this.getNumberAttribute('number_of_packets_per_conn');
  }
  public set numberOfPacketsPerConn(value: number) {
    this._numberOfPacketsPerConn = value;
  }
  public resetNumberOfPacketsPerConn() {
    this._numberOfPacketsPerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPacketsPerConnInput() {
    return this._numberOfPacketsPerConn;
  }

  // number_of_packets_total - computed: false, optional: true, required: false
  private _numberOfPacketsTotal?: number; 
  public get numberOfPacketsTotal() {
    return this.getNumberAttribute('number_of_packets_total');
  }
  public set numberOfPacketsTotal(value: number) {
    this._numberOfPacketsTotal = value;
  }
  public resetNumberOfPacketsTotal() {
    this._numberOfPacketsTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPacketsTotalInput() {
    return this._numberOfPacketsTotal;
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: number; 
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }
  public set packetLength(value: number) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrent_captures: cdktf.numberToTerraform(this._concurrentCaptures),
      concurrent_captures_age: cdktf.numberToTerraform(this._concurrentCapturesAge),
      concurrent_conn_per_capture: cdktf.numberToTerraform(this._concurrentConnPerCapture),
      concurrent_conn_tag: cdktf.numberToTerraform(this._concurrentConnTag),
      create_pcap_files_now: cdktf.numberToTerraform(this._createPcapFilesNow),
      disable: cdktf.numberToTerraform(this._disable),
      disable_auto_merge: cdktf.numberToTerraform(this._disableAutoMerge),
      enable_continuous_global_capture: cdktf.numberToTerraform(this._enableContinuousGlobalCapture),
      file_count: cdktf.numberToTerraform(this._fileCount),
      file_size: cdktf.numberToTerraform(this._fileSize),
      id: cdktf.stringToTerraform(this._id),
      keep_pcap_files_after_merge: cdktf.numberToTerraform(this._keepPcapFilesAfterMerge),
      name: cdktf.stringToTerraform(this._name),
      number_of_packets_per_capture: cdktf.numberToTerraform(this._numberOfPacketsPerCapture),
      number_of_packets_per_conn: cdktf.numberToTerraform(this._numberOfPacketsPerConn),
      number_of_packets_total: cdktf.numberToTerraform(this._numberOfPacketsTotal),
      packet_length: cdktf.numberToTerraform(this._packetLength),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrent_captures: {
        value: cdktf.numberToHclTerraform(this._concurrentCaptures),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_captures_age: {
        value: cdktf.numberToHclTerraform(this._concurrentCapturesAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_conn_per_capture: {
        value: cdktf.numberToHclTerraform(this._concurrentConnPerCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      concurrent_conn_tag: {
        value: cdktf.numberToHclTerraform(this._concurrentConnTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_pcap_files_now: {
        value: cdktf.numberToHclTerraform(this._createPcapFilesNow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_auto_merge: {
        value: cdktf.numberToHclTerraform(this._disableAutoMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_continuous_global_capture: {
        value: cdktf.numberToHclTerraform(this._enableContinuousGlobalCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_count: {
        value: cdktf.numberToHclTerraform(this._fileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_size: {
        value: cdktf.numberToHclTerraform(this._fileSize),
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
      keep_pcap_files_after_merge: {
        value: cdktf.numberToHclTerraform(this._keepPcapFilesAfterMerge),
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
      number_of_packets_per_capture: {
        value: cdktf.numberToHclTerraform(this._numberOfPacketsPerCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_packets_per_conn: {
        value: cdktf.numberToHclTerraform(this._numberOfPacketsPerConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_packets_total: {
        value: cdktf.numberToHclTerraform(this._numberOfPacketsTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_length: {
        value: cdktf.numberToHclTerraform(this._packetLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
