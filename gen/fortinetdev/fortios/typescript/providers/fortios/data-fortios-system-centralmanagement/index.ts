// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_centralmanagement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemCentralmanagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_centralmanagement#id DataFortiosSystemCentralmanagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_centralmanagement#vdomparam DataFortiosSystemCentralmanagement#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemCentralmanagementServerListStruct {
}

export function dataFortiosSystemCentralmanagementServerListStructToTerraform(struct?: DataFortiosSystemCentralmanagementServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemCentralmanagementServerListStructToHclTerraform(struct?: DataFortiosSystemCentralmanagementServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemCentralmanagementServerListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemCentralmanagementServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemCentralmanagementServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr_type - computed: true, optional: false, required: false
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // server_address6 - computed: true, optional: false, required: false
  public get serverAddress6() {
    return this.getStringAttribute('server_address6');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
}

export class DataFortiosSystemCentralmanagementServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemCentralmanagementServerListStructOutputReference {
    return new DataFortiosSystemCentralmanagementServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_centralmanagement fortios_system_centralmanagement}
*/
export class DataFortiosSystemCentralmanagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_centralmanagement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemCentralmanagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemCentralmanagement to import
  * @param importFromId The id of the existing DataFortiosSystemCentralmanagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_centralmanagement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemCentralmanagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_centralmanagement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_centralmanagement fortios_system_centralmanagement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemCentralmanagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemCentralmanagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_centralmanagement',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_monitor - computed: true, optional: false, required: false
  public get allowMonitor() {
    return this.getStringAttribute('allow_monitor');
  }

  // allow_push_configuration - computed: true, optional: false, required: false
  public get allowPushConfiguration() {
    return this.getStringAttribute('allow_push_configuration');
  }

  // allow_push_firmware - computed: true, optional: false, required: false
  public get allowPushFirmware() {
    return this.getStringAttribute('allow_push_firmware');
  }

  // allow_remote_firmware_upgrade - computed: true, optional: false, required: false
  public get allowRemoteFirmwareUpgrade() {
    return this.getStringAttribute('allow_remote_firmware_upgrade');
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // enc_algorithm - computed: true, optional: false, required: false
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }

  // fmg - computed: true, optional: false, required: false
  public get fmg() {
    return this.getStringAttribute('fmg');
  }

  // fmg_source_ip - computed: true, optional: false, required: false
  public get fmgSourceIp() {
    return this.getStringAttribute('fmg_source_ip');
  }

  // fmg_source_ip6 - computed: true, optional: false, required: false
  public get fmgSourceIp6() {
    return this.getStringAttribute('fmg_source_ip6');
  }

  // fmg_update_http_header - computed: true, optional: false, required: false
  public get fmgUpdateHttpHeader() {
    return this.getStringAttribute('fmg_update_http_header');
  }

  // fmg_update_port - computed: true, optional: false, required: false
  public get fmgUpdatePort() {
    return this.getStringAttribute('fmg_update_port');
  }

  // fortigate_cloud_sso_default_profile - computed: true, optional: false, required: false
  public get fortigateCloudSsoDefaultProfile() {
    return this.getStringAttribute('fortigate_cloud_sso_default_profile');
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

  // include_default_servers - computed: true, optional: false, required: false
  public get includeDefaultServers() {
    return this.getStringAttribute('include_default_servers');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_select_method - computed: true, optional: false, required: false
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }

  // local_cert - computed: true, optional: false, required: false
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // schedule_config_restore - computed: true, optional: false, required: false
  public get scheduleConfigRestore() {
    return this.getStringAttribute('schedule_config_restore');
  }

  // schedule_script_restore - computed: true, optional: false, required: false
  public get scheduleScriptRestore() {
    return this.getStringAttribute('schedule_script_restore');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // server_list - computed: true, optional: false, required: false
  private _serverList = new DataFortiosSystemCentralmanagementServerListStructList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vdom - computed: true, optional: false, required: false
  public get vdom() {
    return this.getStringAttribute('vdom');
  }

  // vdomparam - computed: false, optional: true, required: false
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

  // vrf_select - computed: true, optional: false, required: false
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
