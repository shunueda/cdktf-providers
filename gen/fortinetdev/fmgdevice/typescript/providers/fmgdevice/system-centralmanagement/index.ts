// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCentralmanagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#allow_monitor SystemCentralmanagement#allow_monitor}
  */
  readonly allowMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#allow_push_configuration SystemCentralmanagement#allow_push_configuration}
  */
  readonly allowPushConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#allow_push_firmware SystemCentralmanagement#allow_push_firmware}
  */
  readonly allowPushFirmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#allow_remote_firmware_upgrade SystemCentralmanagement#allow_remote_firmware_upgrade}
  */
  readonly allowRemoteFirmwareUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#allow_remote_lte_firmware_upgrade SystemCentralmanagement#allow_remote_lte_firmware_upgrade}
  */
  readonly allowRemoteLteFirmwareUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#allow_remote_modem_firmware_upgrade SystemCentralmanagement#allow_remote_modem_firmware_upgrade}
  */
  readonly allowRemoteModemFirmwareUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#ca_cert SystemCentralmanagement#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#device_name SystemCentralmanagement#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#dynamic_sort_subtable SystemCentralmanagement#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#enc_algorithm SystemCentralmanagement#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#fmg SystemCentralmanagement#fmg}
  */
  readonly fmg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#fmg_source_ip SystemCentralmanagement#fmg_source_ip}
  */
  readonly fmgSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#fmg_source_ip6 SystemCentralmanagement#fmg_source_ip6}
  */
  readonly fmgSourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#fmg_update_port SystemCentralmanagement#fmg_update_port}
  */
  readonly fmgUpdatePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#fortigate_cloud_sso_default_profile SystemCentralmanagement#fortigate_cloud_sso_default_profile}
  */
  readonly fortigateCloudSsoDefaultProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#id SystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#include_default_servers SystemCentralmanagement#include_default_servers}
  */
  readonly includeDefaultServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#interface SystemCentralmanagement#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#interface_select_method SystemCentralmanagement#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#local_cert SystemCentralmanagement#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#ltefw_upgrade_frequency SystemCentralmanagement#ltefw_upgrade_frequency}
  */
  readonly ltefwUpgradeFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#ltefw_upgrade_time SystemCentralmanagement#ltefw_upgrade_time}
  */
  readonly ltefwUpgradeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#mode SystemCentralmanagement#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#modem_upgrade_frequency SystemCentralmanagement#modem_upgrade_frequency}
  */
  readonly modemUpgradeFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#modem_upgrade_time SystemCentralmanagement#modem_upgrade_time}
  */
  readonly modemUpgradeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#schedule_config_restore SystemCentralmanagement#schedule_config_restore}
  */
  readonly scheduleConfigRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#schedule_script_restore SystemCentralmanagement#schedule_script_restore}
  */
  readonly scheduleScriptRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#serial_number SystemCentralmanagement#serial_number}
  */
  readonly serialNumber?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#type SystemCentralmanagement#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#use_elbc_vdom SystemCentralmanagement#use_elbc_vdom}
  */
  readonly useElbcVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#vdom SystemCentralmanagement#vdom}
  */
  readonly vdom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#vrf_select SystemCentralmanagement#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#server_list SystemCentralmanagement#server_list}
  */
  readonly serverList?: SystemCentralmanagementServerListStruct[] | cdktf.IResolvable;
}
export interface SystemCentralmanagementServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#addr_type SystemCentralmanagement#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#fqdn SystemCentralmanagement#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#id SystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#server_address SystemCentralmanagement#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#server_address6 SystemCentralmanagement#server_address6}
  */
  readonly serverAddress6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#server_type SystemCentralmanagement#server_type}
  */
  readonly serverType?: string[];
}

export function systemCentralmanagementServerListStructToTerraform(struct?: SystemCentralmanagementServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_type: cdktf.stringToTerraform(struct!.addrType),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    id: cdktf.numberToTerraform(struct!.id),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    server_address6: cdktf.stringToTerraform(struct!.serverAddress6),
    server_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverType),
  }
}


export function systemCentralmanagementServerListStructToHclTerraform(struct?: SystemCentralmanagementServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_type: {
      value: cdktf.stringToHclTerraform(struct!.addrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address6: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCentralmanagementServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemCentralmanagementServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrType = this._addrType;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._serverAddress6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress6 = this._serverAddress6;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCentralmanagementServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrType = undefined;
      this._fqdn = undefined;
      this._id = undefined;
      this._serverAddress = undefined;
      this._serverAddress6 = undefined;
      this._serverType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrType = value.addrType;
      this._fqdn = value.fqdn;
      this._id = value.id;
      this._serverAddress = value.serverAddress;
      this._serverAddress6 = value.serverAddress6;
      this._serverType = value.serverType;
    }
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // server_address - computed: true, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // server_address6 - computed: true, optional: true, required: false
  private _serverAddress6?: string; 
  public get serverAddress6() {
    return this.getStringAttribute('server_address6');
  }
  public set serverAddress6(value: string) {
    this._serverAddress6 = value;
  }
  public resetServerAddress6() {
    this._serverAddress6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddress6Input() {
    return this._serverAddress6;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string[]; 
  public get serverType() {
    return cdktf.Fn.tolist(this.getListAttribute('server_type'));
  }
  public set serverType(value: string[]) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }
}

export class SystemCentralmanagementServerListStructList extends cdktf.ComplexList {
  public internalValue? : SystemCentralmanagementServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemCentralmanagementServerListStructOutputReference {
    return new SystemCentralmanagementServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement fmgdevice_system_centralmanagement}
*/
export class SystemCentralmanagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_centralmanagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCentralmanagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCentralmanagement to import
  * @param importFromId The id of the existing SystemCentralmanagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCentralmanagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_centralmanagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_centralmanagement fmgdevice_system_centralmanagement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCentralmanagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCentralmanagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_centralmanagement',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMonitor = config.allowMonitor;
    this._allowPushConfiguration = config.allowPushConfiguration;
    this._allowPushFirmware = config.allowPushFirmware;
    this._allowRemoteFirmwareUpgrade = config.allowRemoteFirmwareUpgrade;
    this._allowRemoteLteFirmwareUpgrade = config.allowRemoteLteFirmwareUpgrade;
    this._allowRemoteModemFirmwareUpgrade = config.allowRemoteModemFirmwareUpgrade;
    this._caCert = config.caCert;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encAlgorithm = config.encAlgorithm;
    this._fmg = config.fmg;
    this._fmgSourceIp = config.fmgSourceIp;
    this._fmgSourceIp6 = config.fmgSourceIp6;
    this._fmgUpdatePort = config.fmgUpdatePort;
    this._fortigateCloudSsoDefaultProfile = config.fortigateCloudSsoDefaultProfile;
    this._id = config.id;
    this._includeDefaultServers = config.includeDefaultServers;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._localCert = config.localCert;
    this._ltefwUpgradeFrequency = config.ltefwUpgradeFrequency;
    this._ltefwUpgradeTime = config.ltefwUpgradeTime;
    this._mode = config.mode;
    this._modemUpgradeFrequency = config.modemUpgradeFrequency;
    this._modemUpgradeTime = config.modemUpgradeTime;
    this._scheduleConfigRestore = config.scheduleConfigRestore;
    this._scheduleScriptRestore = config.scheduleScriptRestore;
    this._serialNumber = config.serialNumber;
    this._type = config.type;
    this._useElbcVdom = config.useElbcVdom;
    this._vdom = config.vdom;
    this._vrfSelect = config.vrfSelect;
    this._serverList.internalValue = config.serverList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_monitor - computed: false, optional: true, required: false
  private _allowMonitor?: string; 
  public get allowMonitor() {
    return this.getStringAttribute('allow_monitor');
  }
  public set allowMonitor(value: string) {
    this._allowMonitor = value;
  }
  public resetAllowMonitor() {
    this._allowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMonitorInput() {
    return this._allowMonitor;
  }

  // allow_push_configuration - computed: true, optional: true, required: false
  private _allowPushConfiguration?: string; 
  public get allowPushConfiguration() {
    return this.getStringAttribute('allow_push_configuration');
  }
  public set allowPushConfiguration(value: string) {
    this._allowPushConfiguration = value;
  }
  public resetAllowPushConfiguration() {
    this._allowPushConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushConfigurationInput() {
    return this._allowPushConfiguration;
  }

  // allow_push_firmware - computed: true, optional: true, required: false
  private _allowPushFirmware?: string; 
  public get allowPushFirmware() {
    return this.getStringAttribute('allow_push_firmware');
  }
  public set allowPushFirmware(value: string) {
    this._allowPushFirmware = value;
  }
  public resetAllowPushFirmware() {
    this._allowPushFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushFirmwareInput() {
    return this._allowPushFirmware;
  }

  // allow_remote_firmware_upgrade - computed: true, optional: true, required: false
  private _allowRemoteFirmwareUpgrade?: string; 
  public get allowRemoteFirmwareUpgrade() {
    return this.getStringAttribute('allow_remote_firmware_upgrade');
  }
  public set allowRemoteFirmwareUpgrade(value: string) {
    this._allowRemoteFirmwareUpgrade = value;
  }
  public resetAllowRemoteFirmwareUpgrade() {
    this._allowRemoteFirmwareUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteFirmwareUpgradeInput() {
    return this._allowRemoteFirmwareUpgrade;
  }

  // allow_remote_lte_firmware_upgrade - computed: false, optional: true, required: false
  private _allowRemoteLteFirmwareUpgrade?: string; 
  public get allowRemoteLteFirmwareUpgrade() {
    return this.getStringAttribute('allow_remote_lte_firmware_upgrade');
  }
  public set allowRemoteLteFirmwareUpgrade(value: string) {
    this._allowRemoteLteFirmwareUpgrade = value;
  }
  public resetAllowRemoteLteFirmwareUpgrade() {
    this._allowRemoteLteFirmwareUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteLteFirmwareUpgradeInput() {
    return this._allowRemoteLteFirmwareUpgrade;
  }

  // allow_remote_modem_firmware_upgrade - computed: false, optional: true, required: false
  private _allowRemoteModemFirmwareUpgrade?: string; 
  public get allowRemoteModemFirmwareUpgrade() {
    return this.getStringAttribute('allow_remote_modem_firmware_upgrade');
  }
  public set allowRemoteModemFirmwareUpgrade(value: string) {
    this._allowRemoteModemFirmwareUpgrade = value;
  }
  public resetAllowRemoteModemFirmwareUpgrade() {
    this._allowRemoteModemFirmwareUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteModemFirmwareUpgradeInput() {
    return this._allowRemoteModemFirmwareUpgrade;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // enc_algorithm - computed: true, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // fmg - computed: true, optional: true, required: false
  private _fmg?: string[]; 
  public get fmg() {
    return cdktf.Fn.tolist(this.getListAttribute('fmg'));
  }
  public set fmg(value: string[]) {
    this._fmg = value;
  }
  public resetFmg() {
    this._fmg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgInput() {
    return this._fmg;
  }

  // fmg_source_ip - computed: true, optional: true, required: false
  private _fmgSourceIp?: string; 
  public get fmgSourceIp() {
    return this.getStringAttribute('fmg_source_ip');
  }
  public set fmgSourceIp(value: string) {
    this._fmgSourceIp = value;
  }
  public resetFmgSourceIp() {
    this._fmgSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgSourceIpInput() {
    return this._fmgSourceIp;
  }

  // fmg_source_ip6 - computed: true, optional: true, required: false
  private _fmgSourceIp6?: string; 
  public get fmgSourceIp6() {
    return this.getStringAttribute('fmg_source_ip6');
  }
  public set fmgSourceIp6(value: string) {
    this._fmgSourceIp6 = value;
  }
  public resetFmgSourceIp6() {
    this._fmgSourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgSourceIp6Input() {
    return this._fmgSourceIp6;
  }

  // fmg_update_port - computed: true, optional: true, required: false
  private _fmgUpdatePort?: string; 
  public get fmgUpdatePort() {
    return this.getStringAttribute('fmg_update_port');
  }
  public set fmgUpdatePort(value: string) {
    this._fmgUpdatePort = value;
  }
  public resetFmgUpdatePort() {
    this._fmgUpdatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgUpdatePortInput() {
    return this._fmgUpdatePort;
  }

  // fortigate_cloud_sso_default_profile - computed: true, optional: true, required: false
  private _fortigateCloudSsoDefaultProfile?: string[]; 
  public get fortigateCloudSsoDefaultProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('fortigate_cloud_sso_default_profile'));
  }
  public set fortigateCloudSsoDefaultProfile(value: string[]) {
    this._fortigateCloudSsoDefaultProfile = value;
  }
  public resetFortigateCloudSsoDefaultProfile() {
    this._fortigateCloudSsoDefaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortigateCloudSsoDefaultProfileInput() {
    return this._fortigateCloudSsoDefaultProfile;
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

  // include_default_servers - computed: true, optional: true, required: false
  private _includeDefaultServers?: string; 
  public get includeDefaultServers() {
    return this.getStringAttribute('include_default_servers');
  }
  public set includeDefaultServers(value: string) {
    this._includeDefaultServers = value;
  }
  public resetIncludeDefaultServers() {
    this._includeDefaultServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDefaultServersInput() {
    return this._includeDefaultServers;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // local_cert - computed: false, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
  }

  // ltefw_upgrade_frequency - computed: false, optional: true, required: false
  private _ltefwUpgradeFrequency?: string; 
  public get ltefwUpgradeFrequency() {
    return this.getStringAttribute('ltefw_upgrade_frequency');
  }
  public set ltefwUpgradeFrequency(value: string) {
    this._ltefwUpgradeFrequency = value;
  }
  public resetLtefwUpgradeFrequency() {
    this._ltefwUpgradeFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltefwUpgradeFrequencyInput() {
    return this._ltefwUpgradeFrequency;
  }

  // ltefw_upgrade_time - computed: false, optional: true, required: false
  private _ltefwUpgradeTime?: string; 
  public get ltefwUpgradeTime() {
    return this.getStringAttribute('ltefw_upgrade_time');
  }
  public set ltefwUpgradeTime(value: string) {
    this._ltefwUpgradeTime = value;
  }
  public resetLtefwUpgradeTime() {
    this._ltefwUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltefwUpgradeTimeInput() {
    return this._ltefwUpgradeTime;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // modem_upgrade_frequency - computed: false, optional: true, required: false
  private _modemUpgradeFrequency?: string; 
  public get modemUpgradeFrequency() {
    return this.getStringAttribute('modem_upgrade_frequency');
  }
  public set modemUpgradeFrequency(value: string) {
    this._modemUpgradeFrequency = value;
  }
  public resetModemUpgradeFrequency() {
    this._modemUpgradeFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemUpgradeFrequencyInput() {
    return this._modemUpgradeFrequency;
  }

  // modem_upgrade_time - computed: false, optional: true, required: false
  private _modemUpgradeTime?: string; 
  public get modemUpgradeTime() {
    return this.getStringAttribute('modem_upgrade_time');
  }
  public set modemUpgradeTime(value: string) {
    this._modemUpgradeTime = value;
  }
  public resetModemUpgradeTime() {
    this._modemUpgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemUpgradeTimeInput() {
    return this._modemUpgradeTime;
  }

  // schedule_config_restore - computed: true, optional: true, required: false
  private _scheduleConfigRestore?: string; 
  public get scheduleConfigRestore() {
    return this.getStringAttribute('schedule_config_restore');
  }
  public set scheduleConfigRestore(value: string) {
    this._scheduleConfigRestore = value;
  }
  public resetScheduleConfigRestore() {
    this._scheduleConfigRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleConfigRestoreInput() {
    return this._scheduleConfigRestore;
  }

  // schedule_script_restore - computed: true, optional: true, required: false
  private _scheduleScriptRestore?: string; 
  public get scheduleScriptRestore() {
    return this.getStringAttribute('schedule_script_restore');
  }
  public set scheduleScriptRestore(value: string) {
    this._scheduleScriptRestore = value;
  }
  public resetScheduleScriptRestore() {
    this._scheduleScriptRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleScriptRestoreInput() {
    return this._scheduleScriptRestore;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string[]; 
  public get serialNumber() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_number'));
  }
  public set serialNumber(value: string[]) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_elbc_vdom - computed: false, optional: true, required: false
  private _useElbcVdom?: string; 
  public get useElbcVdom() {
    return this.getStringAttribute('use_elbc_vdom');
  }
  public set useElbcVdom(value: string) {
    this._useElbcVdom = value;
  }
  public resetUseElbcVdom() {
    this._useElbcVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useElbcVdomInput() {
    return this._useElbcVdom;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string[]; 
  public get vdom() {
    return cdktf.Fn.tolist(this.getListAttribute('vdom'));
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // server_list - computed: false, optional: true, required: false
  private _serverList = new SystemCentralmanagementServerListStructList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
  public putServerList(value: SystemCentralmanagementServerListStruct[] | cdktf.IResolvable) {
    this._serverList.internalValue = value;
  }
  public resetServerList() {
    this._serverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_monitor: cdktf.stringToTerraform(this._allowMonitor),
      allow_push_configuration: cdktf.stringToTerraform(this._allowPushConfiguration),
      allow_push_firmware: cdktf.stringToTerraform(this._allowPushFirmware),
      allow_remote_firmware_upgrade: cdktf.stringToTerraform(this._allowRemoteFirmwareUpgrade),
      allow_remote_lte_firmware_upgrade: cdktf.stringToTerraform(this._allowRemoteLteFirmwareUpgrade),
      allow_remote_modem_firmware_upgrade: cdktf.stringToTerraform(this._allowRemoteModemFirmwareUpgrade),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      fmg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fmg),
      fmg_source_ip: cdktf.stringToTerraform(this._fmgSourceIp),
      fmg_source_ip6: cdktf.stringToTerraform(this._fmgSourceIp6),
      fmg_update_port: cdktf.stringToTerraform(this._fmgUpdatePort),
      fortigate_cloud_sso_default_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortigateCloudSsoDefaultProfile),
      id: cdktf.stringToTerraform(this._id),
      include_default_servers: cdktf.stringToTerraform(this._includeDefaultServers),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      local_cert: cdktf.stringToTerraform(this._localCert),
      ltefw_upgrade_frequency: cdktf.stringToTerraform(this._ltefwUpgradeFrequency),
      ltefw_upgrade_time: cdktf.stringToTerraform(this._ltefwUpgradeTime),
      mode: cdktf.stringToTerraform(this._mode),
      modem_upgrade_frequency: cdktf.stringToTerraform(this._modemUpgradeFrequency),
      modem_upgrade_time: cdktf.stringToTerraform(this._modemUpgradeTime),
      schedule_config_restore: cdktf.stringToTerraform(this._scheduleConfigRestore),
      schedule_script_restore: cdktf.stringToTerraform(this._scheduleScriptRestore),
      serial_number: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumber),
      type: cdktf.stringToTerraform(this._type),
      use_elbc_vdom: cdktf.stringToTerraform(this._useElbcVdom),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      server_list: cdktf.listMapper(systemCentralmanagementServerListStructToTerraform, true)(this._serverList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_monitor: {
        value: cdktf.stringToHclTerraform(this._allowMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_push_configuration: {
        value: cdktf.stringToHclTerraform(this._allowPushConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_push_firmware: {
        value: cdktf.stringToHclTerraform(this._allowPushFirmware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remote_firmware_upgrade: {
        value: cdktf.stringToHclTerraform(this._allowRemoteFirmwareUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remote_lte_firmware_upgrade: {
        value: cdktf.stringToHclTerraform(this._allowRemoteLteFirmwareUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remote_modem_firmware_upgrade: {
        value: cdktf.stringToHclTerraform(this._allowRemoteModemFirmwareUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fmg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fmg_source_ip: {
        value: cdktf.stringToHclTerraform(this._fmgSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_source_ip6: {
        value: cdktf.stringToHclTerraform(this._fmgSourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmg_update_port: {
        value: cdktf.stringToHclTerraform(this._fmgUpdatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortigate_cloud_sso_default_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortigateCloudSsoDefaultProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_default_servers: {
        value: cdktf.stringToHclTerraform(this._includeDefaultServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ltefw_upgrade_frequency: {
        value: cdktf.stringToHclTerraform(this._ltefwUpgradeFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ltefw_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._ltefwUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem_upgrade_frequency: {
        value: cdktf.stringToHclTerraform(this._modemUpgradeFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem_upgrade_time: {
        value: cdktf.stringToHclTerraform(this._modemUpgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_config_restore: {
        value: cdktf.stringToHclTerraform(this._scheduleConfigRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_script_restore: {
        value: cdktf.stringToHclTerraform(this._scheduleScriptRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumber),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_elbc_vdom: {
        value: cdktf.stringToHclTerraform(this._useElbcVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_list: {
        value: cdktf.listMapperHcl(systemCentralmanagementServerListStructToHclTerraform, true)(this._serverList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCentralmanagementServerListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
