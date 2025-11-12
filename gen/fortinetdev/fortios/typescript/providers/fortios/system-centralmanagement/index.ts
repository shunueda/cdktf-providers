// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCentralmanagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#allow_monitor SystemCentralmanagement#allow_monitor}
  */
  readonly allowMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#allow_push_configuration SystemCentralmanagement#allow_push_configuration}
  */
  readonly allowPushConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#allow_push_firmware SystemCentralmanagement#allow_push_firmware}
  */
  readonly allowPushFirmware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#allow_remote_firmware_upgrade SystemCentralmanagement#allow_remote_firmware_upgrade}
  */
  readonly allowRemoteFirmwareUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#ca_cert SystemCentralmanagement#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#dynamic_sort_subtable SystemCentralmanagement#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#enc_algorithm SystemCentralmanagement#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#fmg SystemCentralmanagement#fmg}
  */
  readonly fmg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#fmg_source_ip SystemCentralmanagement#fmg_source_ip}
  */
  readonly fmgSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#fmg_source_ip6 SystemCentralmanagement#fmg_source_ip6}
  */
  readonly fmgSourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#fmg_update_http_header SystemCentralmanagement#fmg_update_http_header}
  */
  readonly fmgUpdateHttpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#fmg_update_port SystemCentralmanagement#fmg_update_port}
  */
  readonly fmgUpdatePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#fortigate_cloud_sso_default_profile SystemCentralmanagement#fortigate_cloud_sso_default_profile}
  */
  readonly fortigateCloudSsoDefaultProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#get_all_tables SystemCentralmanagement#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#id SystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#include_default_servers SystemCentralmanagement#include_default_servers}
  */
  readonly includeDefaultServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#interface SystemCentralmanagement#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#interface_select_method SystemCentralmanagement#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#local_cert SystemCentralmanagement#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#mode SystemCentralmanagement#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#schedule_config_restore SystemCentralmanagement#schedule_config_restore}
  */
  readonly scheduleConfigRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#schedule_script_restore SystemCentralmanagement#schedule_script_restore}
  */
  readonly scheduleScriptRestore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#serial_number SystemCentralmanagement#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#type SystemCentralmanagement#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#vdom SystemCentralmanagement#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#vdomparam SystemCentralmanagement#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#vrf_select SystemCentralmanagement#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#server_list SystemCentralmanagement#server_list}
  */
  readonly serverList?: SystemCentralmanagementServerListStruct[] | cdktf.IResolvable;
}
export interface SystemCentralmanagementServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#addr_type SystemCentralmanagement#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#fqdn SystemCentralmanagement#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#id SystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#server_address SystemCentralmanagement#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#server_address6 SystemCentralmanagement#server_address6}
  */
  readonly serverAddress6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#server_type SystemCentralmanagement#server_type}
  */
  readonly serverType?: string;
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
    server_type: cdktf.stringToTerraform(struct!.serverType),
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
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

  // id - computed: true, optional: true, required: false
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

  // server_type - computed: false, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement fortios_system_centralmanagement}
*/
export class SystemCentralmanagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_centralmanagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCentralmanagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCentralmanagement to import
  * @param importFromId The id of the existing SystemCentralmanagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCentralmanagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_centralmanagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_centralmanagement fortios_system_centralmanagement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCentralmanagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCentralmanagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_centralmanagement',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._caCert = config.caCert;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encAlgorithm = config.encAlgorithm;
    this._fmg = config.fmg;
    this._fmgSourceIp = config.fmgSourceIp;
    this._fmgSourceIp6 = config.fmgSourceIp6;
    this._fmgUpdateHttpHeader = config.fmgUpdateHttpHeader;
    this._fmgUpdatePort = config.fmgUpdatePort;
    this._fortigateCloudSsoDefaultProfile = config.fortigateCloudSsoDefaultProfile;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._includeDefaultServers = config.includeDefaultServers;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._localCert = config.localCert;
    this._mode = config.mode;
    this._scheduleConfigRestore = config.scheduleConfigRestore;
    this._scheduleScriptRestore = config.scheduleScriptRestore;
    this._serialNumber = config.serialNumber;
    this._type = config.type;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
    this._serverList.internalValue = config.serverList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_monitor - computed: true, optional: true, required: false
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

  // fmg - computed: false, optional: true, required: false
  private _fmg?: string; 
  public get fmg() {
    return this.getStringAttribute('fmg');
  }
  public set fmg(value: string) {
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

  // fmg_update_http_header - computed: true, optional: true, required: false
  private _fmgUpdateHttpHeader?: string; 
  public get fmgUpdateHttpHeader() {
    return this.getStringAttribute('fmg_update_http_header');
  }
  public set fmgUpdateHttpHeader(value: string) {
    this._fmgUpdateHttpHeader = value;
  }
  public resetFmgUpdateHttpHeader() {
    this._fmgUpdateHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgUpdateHttpHeaderInput() {
    return this._fmgUpdateHttpHeader;
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

  // fortigate_cloud_sso_default_profile - computed: false, optional: true, required: false
  private _fortigateCloudSsoDefaultProfile?: string; 
  public get fortigateCloudSsoDefaultProfile() {
    return this.getStringAttribute('fortigate_cloud_sso_default_profile');
  }
  public set fortigateCloudSsoDefaultProfile(value: string) {
    this._fortigateCloudSsoDefaultProfile = value;
  }
  public resetFortigateCloudSsoDefaultProfile() {
    this._fortigateCloudSsoDefaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortigateCloudSsoDefaultProfileInput() {
    return this._fortigateCloudSsoDefaultProfile;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
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

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
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
      ca_cert: cdktf.stringToTerraform(this._caCert),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      fmg: cdktf.stringToTerraform(this._fmg),
      fmg_source_ip: cdktf.stringToTerraform(this._fmgSourceIp),
      fmg_source_ip6: cdktf.stringToTerraform(this._fmgSourceIp6),
      fmg_update_http_header: cdktf.stringToTerraform(this._fmgUpdateHttpHeader),
      fmg_update_port: cdktf.stringToTerraform(this._fmgUpdatePort),
      fortigate_cloud_sso_default_profile: cdktf.stringToTerraform(this._fortigateCloudSsoDefaultProfile),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      include_default_servers: cdktf.stringToTerraform(this._includeDefaultServers),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      local_cert: cdktf.stringToTerraform(this._localCert),
      mode: cdktf.stringToTerraform(this._mode),
      schedule_config_restore: cdktf.stringToTerraform(this._scheduleConfigRestore),
      schedule_script_restore: cdktf.stringToTerraform(this._scheduleScriptRestore),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
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
        value: cdktf.stringToHclTerraform(this._fmg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      fmg_update_http_header: {
        value: cdktf.stringToHclTerraform(this._fmgUpdateHttpHeader),
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
        value: cdktf.stringToHclTerraform(this._fortigateCloudSsoDefaultProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      include_default_servers: {
        value: cdktf.stringToHclTerraform(this._includeDefaultServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
