// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerBleprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#advertising WirelesscontrollerBleprofile#advertising}
  */
  readonly advertising?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#beacon_interval WirelesscontrollerBleprofile#beacon_interval}
  */
  readonly beaconInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#ble_scanning WirelesscontrollerBleprofile#ble_scanning}
  */
  readonly bleScanning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#comment WirelesscontrollerBleprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#device_name WirelesscontrollerBleprofile#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#device_vdom WirelesscontrollerBleprofile#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#eddystone_instance WirelesscontrollerBleprofile#eddystone_instance}
  */
  readonly eddystoneInstance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#eddystone_namespace WirelesscontrollerBleprofile#eddystone_namespace}
  */
  readonly eddystoneNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#eddystone_url WirelesscontrollerBleprofile#eddystone_url}
  */
  readonly eddystoneUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#eddystone_url_encode_hex WirelesscontrollerBleprofile#eddystone_url_encode_hex}
  */
  readonly eddystoneUrlEncodeHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#ibeacon_uuid WirelesscontrollerBleprofile#ibeacon_uuid}
  */
  readonly ibeaconUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#id WirelesscontrollerBleprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#major_id WirelesscontrollerBleprofile#major_id}
  */
  readonly majorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#minor_id WirelesscontrollerBleprofile#minor_id}
  */
  readonly minorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#name WirelesscontrollerBleprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#scan_interval WirelesscontrollerBleprofile#scan_interval}
  */
  readonly scanInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#scan_period WirelesscontrollerBleprofile#scan_period}
  */
  readonly scanPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#scan_threshold WirelesscontrollerBleprofile#scan_threshold}
  */
  readonly scanThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#scan_time WirelesscontrollerBleprofile#scan_time}
  */
  readonly scanTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#scan_type WirelesscontrollerBleprofile#scan_type}
  */
  readonly scanType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#scan_window WirelesscontrollerBleprofile#scan_window}
  */
  readonly scanWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#txpower WirelesscontrollerBleprofile#txpower}
  */
  readonly txpower?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile fmgdevice_wirelesscontroller_bleprofile}
*/
export class WirelesscontrollerBleprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_wirelesscontroller_bleprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerBleprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerBleprofile to import
  * @param importFromId The id of the existing WirelesscontrollerBleprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerBleprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_wirelesscontroller_bleprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/wirelesscontroller_bleprofile fmgdevice_wirelesscontroller_bleprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerBleprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerBleprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_wirelesscontroller_bleprofile',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertising = config.advertising;
    this._beaconInterval = config.beaconInterval;
    this._bleScanning = config.bleScanning;
    this._comment = config.comment;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._eddystoneInstance = config.eddystoneInstance;
    this._eddystoneNamespace = config.eddystoneNamespace;
    this._eddystoneUrl = config.eddystoneUrl;
    this._eddystoneUrlEncodeHex = config.eddystoneUrlEncodeHex;
    this._ibeaconUuid = config.ibeaconUuid;
    this._id = config.id;
    this._majorId = config.majorId;
    this._minorId = config.minorId;
    this._name = config.name;
    this._scanInterval = config.scanInterval;
    this._scanPeriod = config.scanPeriod;
    this._scanThreshold = config.scanThreshold;
    this._scanTime = config.scanTime;
    this._scanType = config.scanType;
    this._scanWindow = config.scanWindow;
    this._txpower = config.txpower;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertising - computed: true, optional: true, required: false
  private _advertising?: string[]; 
  public get advertising() {
    return cdktf.Fn.tolist(this.getListAttribute('advertising'));
  }
  public set advertising(value: string[]) {
    this._advertising = value;
  }
  public resetAdvertising() {
    this._advertising = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisingInput() {
    return this._advertising;
  }

  // beacon_interval - computed: true, optional: true, required: false
  private _beaconInterval?: number; 
  public get beaconInterval() {
    return this.getNumberAttribute('beacon_interval');
  }
  public set beaconInterval(value: number) {
    this._beaconInterval = value;
  }
  public resetBeaconInterval() {
    this._beaconInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconIntervalInput() {
    return this._beaconInterval;
  }

  // ble_scanning - computed: true, optional: true, required: false
  private _bleScanning?: string; 
  public get bleScanning() {
    return this.getStringAttribute('ble_scanning');
  }
  public set bleScanning(value: string) {
    this._bleScanning = value;
  }
  public resetBleScanning() {
    this._bleScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bleScanningInput() {
    return this._bleScanning;
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

  // eddystone_instance - computed: true, optional: true, required: false
  private _eddystoneInstance?: string; 
  public get eddystoneInstance() {
    return this.getStringAttribute('eddystone_instance');
  }
  public set eddystoneInstance(value: string) {
    this._eddystoneInstance = value;
  }
  public resetEddystoneInstance() {
    this._eddystoneInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneInstanceInput() {
    return this._eddystoneInstance;
  }

  // eddystone_namespace - computed: true, optional: true, required: false
  private _eddystoneNamespace?: string; 
  public get eddystoneNamespace() {
    return this.getStringAttribute('eddystone_namespace');
  }
  public set eddystoneNamespace(value: string) {
    this._eddystoneNamespace = value;
  }
  public resetEddystoneNamespace() {
    this._eddystoneNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneNamespaceInput() {
    return this._eddystoneNamespace;
  }

  // eddystone_url - computed: true, optional: true, required: false
  private _eddystoneUrl?: string; 
  public get eddystoneUrl() {
    return this.getStringAttribute('eddystone_url');
  }
  public set eddystoneUrl(value: string) {
    this._eddystoneUrl = value;
  }
  public resetEddystoneUrl() {
    this._eddystoneUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlInput() {
    return this._eddystoneUrl;
  }

  // eddystone_url_encode_hex - computed: true, optional: true, required: false
  private _eddystoneUrlEncodeHex?: string; 
  public get eddystoneUrlEncodeHex() {
    return this.getStringAttribute('eddystone_url_encode_hex');
  }
  public set eddystoneUrlEncodeHex(value: string) {
    this._eddystoneUrlEncodeHex = value;
  }
  public resetEddystoneUrlEncodeHex() {
    this._eddystoneUrlEncodeHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eddystoneUrlEncodeHexInput() {
    return this._eddystoneUrlEncodeHex;
  }

  // ibeacon_uuid - computed: true, optional: true, required: false
  private _ibeaconUuid?: string; 
  public get ibeaconUuid() {
    return this.getStringAttribute('ibeacon_uuid');
  }
  public set ibeaconUuid(value: string) {
    this._ibeaconUuid = value;
  }
  public resetIbeaconUuid() {
    this._ibeaconUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibeaconUuidInput() {
    return this._ibeaconUuid;
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

  // major_id - computed: true, optional: true, required: false
  private _majorId?: number; 
  public get majorId() {
    return this.getNumberAttribute('major_id');
  }
  public set majorId(value: number) {
    this._majorId = value;
  }
  public resetMajorId() {
    this._majorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorIdInput() {
    return this._majorId;
  }

  // minor_id - computed: true, optional: true, required: false
  private _minorId?: number; 
  public get minorId() {
    return this.getNumberAttribute('minor_id');
  }
  public set minorId(value: number) {
    this._minorId = value;
  }
  public resetMinorId() {
    this._minorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minorIdInput() {
    return this._minorId;
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

  // scan_interval - computed: false, optional: true, required: false
  private _scanInterval?: number; 
  public get scanInterval() {
    return this.getNumberAttribute('scan_interval');
  }
  public set scanInterval(value: number) {
    this._scanInterval = value;
  }
  public resetScanInterval() {
    this._scanInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanIntervalInput() {
    return this._scanInterval;
  }

  // scan_period - computed: false, optional: true, required: false
  private _scanPeriod?: number; 
  public get scanPeriod() {
    return this.getNumberAttribute('scan_period');
  }
  public set scanPeriod(value: number) {
    this._scanPeriod = value;
  }
  public resetScanPeriod() {
    this._scanPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanPeriodInput() {
    return this._scanPeriod;
  }

  // scan_threshold - computed: true, optional: true, required: false
  private _scanThreshold?: string; 
  public get scanThreshold() {
    return this.getStringAttribute('scan_threshold');
  }
  public set scanThreshold(value: string) {
    this._scanThreshold = value;
  }
  public resetScanThreshold() {
    this._scanThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanThresholdInput() {
    return this._scanThreshold;
  }

  // scan_time - computed: false, optional: true, required: false
  private _scanTime?: number; 
  public get scanTime() {
    return this.getNumberAttribute('scan_time');
  }
  public set scanTime(value: number) {
    this._scanTime = value;
  }
  public resetScanTime() {
    this._scanTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTimeInput() {
    return this._scanTime;
  }

  // scan_type - computed: true, optional: true, required: false
  private _scanType?: string; 
  public get scanType() {
    return this.getStringAttribute('scan_type');
  }
  public set scanType(value: string) {
    this._scanType = value;
  }
  public resetScanType() {
    this._scanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTypeInput() {
    return this._scanType;
  }

  // scan_window - computed: false, optional: true, required: false
  private _scanWindow?: number; 
  public get scanWindow() {
    return this.getNumberAttribute('scan_window');
  }
  public set scanWindow(value: number) {
    this._scanWindow = value;
  }
  public resetScanWindow() {
    this._scanWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanWindowInput() {
    return this._scanWindow;
  }

  // txpower - computed: true, optional: true, required: false
  private _txpower?: string; 
  public get txpower() {
    return this.getStringAttribute('txpower');
  }
  public set txpower(value: string) {
    this._txpower = value;
  }
  public resetTxpower() {
    this._txpower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txpowerInput() {
    return this._txpower;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertising: cdktf.listMapper(cdktf.stringToTerraform, false)(this._advertising),
      beacon_interval: cdktf.numberToTerraform(this._beaconInterval),
      ble_scanning: cdktf.stringToTerraform(this._bleScanning),
      comment: cdktf.stringToTerraform(this._comment),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      eddystone_instance: cdktf.stringToTerraform(this._eddystoneInstance),
      eddystone_namespace: cdktf.stringToTerraform(this._eddystoneNamespace),
      eddystone_url: cdktf.stringToTerraform(this._eddystoneUrl),
      eddystone_url_encode_hex: cdktf.stringToTerraform(this._eddystoneUrlEncodeHex),
      ibeacon_uuid: cdktf.stringToTerraform(this._ibeaconUuid),
      id: cdktf.stringToTerraform(this._id),
      major_id: cdktf.numberToTerraform(this._majorId),
      minor_id: cdktf.numberToTerraform(this._minorId),
      name: cdktf.stringToTerraform(this._name),
      scan_interval: cdktf.numberToTerraform(this._scanInterval),
      scan_period: cdktf.numberToTerraform(this._scanPeriod),
      scan_threshold: cdktf.stringToTerraform(this._scanThreshold),
      scan_time: cdktf.numberToTerraform(this._scanTime),
      scan_type: cdktf.stringToTerraform(this._scanType),
      scan_window: cdktf.numberToTerraform(this._scanWindow),
      txpower: cdktf.stringToTerraform(this._txpower),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertising: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._advertising),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      beacon_interval: {
        value: cdktf.numberToHclTerraform(this._beaconInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ble_scanning: {
        value: cdktf.stringToHclTerraform(this._bleScanning),
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
      eddystone_instance: {
        value: cdktf.stringToHclTerraform(this._eddystoneInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eddystone_namespace: {
        value: cdktf.stringToHclTerraform(this._eddystoneNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eddystone_url: {
        value: cdktf.stringToHclTerraform(this._eddystoneUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eddystone_url_encode_hex: {
        value: cdktf.stringToHclTerraform(this._eddystoneUrlEncodeHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibeacon_uuid: {
        value: cdktf.stringToHclTerraform(this._ibeaconUuid),
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
      major_id: {
        value: cdktf.numberToHclTerraform(this._majorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minor_id: {
        value: cdktf.numberToHclTerraform(this._minorId),
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
      scan_interval: {
        value: cdktf.numberToHclTerraform(this._scanInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_period: {
        value: cdktf.numberToHclTerraform(this._scanPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_threshold: {
        value: cdktf.stringToHclTerraform(this._scanThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_time: {
        value: cdktf.numberToHclTerraform(this._scanTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scan_type: {
        value: cdktf.stringToHclTerraform(this._scanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_window: {
        value: cdktf.numberToHclTerraform(this._scanWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      txpower: {
        value: cdktf.stringToHclTerraform(this._txpower),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
