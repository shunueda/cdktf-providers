// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_vdc_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformBmVdcServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_vdc_server#id DataSamsungcloudplatformBmVdcServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Server Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_vdc_server#server_id DataSamsungcloudplatformBmVdcServer#server_id}
  */
  readonly serverId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_vdc_server samsungcloudplatform_bm_vdc_server}
*/
export class DataSamsungcloudplatformBmVdcServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_bm_vdc_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformBmVdcServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformBmVdcServer to import
  * @param importFromId The id of the existing DataSamsungcloudplatformBmVdcServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_vdc_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformBmVdcServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_bm_vdc_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/bm_vdc_server samsungcloudplatform_bm_vdc_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformBmVdcServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformBmVdcServerConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_bm_vdc_server',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_mounted_storage - computed: true, optional: false, required: false
  public get allMountedStorage() {
    return this.getBooleanAttribute('all_mounted_storage');
  }

  // bare_metal_block_storage_ids - computed: true, optional: false, required: false
  public get bareMetalBlockStorageIds() {
    return this.getListAttribute('bare_metal_block_storage_ids');
  }

  // bare_metal_server_id - computed: true, optional: false, required: false
  public get bareMetalServerId() {
    return this.getStringAttribute('bare_metal_server_id');
  }

  // bare_metal_server_name - computed: true, optional: false, required: false
  public get bareMetalServerName() {
    return this.getStringAttribute('bare_metal_server_name');
  }

  // bare_metal_server_state - computed: true, optional: false, required: false
  public get bareMetalServerState() {
    return this.getStringAttribute('bare_metal_server_state');
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // check_critical_error - computed: true, optional: false, required: false
  public get checkCriticalError() {
    return this.getBooleanAttribute('check_critical_error');
  }

  // contract - computed: true, optional: false, required: false
  public get contract() {
    return this.getStringAttribute('contract');
  }

  // contract_end_date - computed: true, optional: false, required: false
  public get contractEndDate() {
    return this.getStringAttribute('contract_end_date');
  }

  // contract_id - computed: true, optional: false, required: false
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }

  // contract_start_date - computed: true, optional: false, required: false
  public get contractStartDate() {
    return this.getStringAttribute('contract_start_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // deletion_protection_enabled - computed: true, optional: false, required: false
  public get deletionProtectionEnabled() {
    return this.getStringAttribute('deletion_protection_enabled');
  }

  // dns_enabled - computed: true, optional: false, required: false
  public get dnsEnabled() {
    return this.getStringAttribute('dns_enabled');
  }

  // error_check - computed: true, optional: false, required: false
  public get errorCheck() {
    return this.getBooleanAttribute('error_check');
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

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // initial_script_content - computed: true, optional: false, required: false
  public get initialScriptContent() {
    return this.getStringAttribute('initial_script_content');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // local_subnet_status - computed: true, optional: false, required: false
  public get localSubnetStatus() {
    return this.getStringAttribute('local_subnet_status');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // next_contract - computed: true, optional: false, required: false
  public get nextContract() {
    return this.getStringAttribute('next_contract');
  }

  // next_contract_end_date - computed: true, optional: false, required: false
  public get nextContractEndDate() {
    return this.getStringAttribute('next_contract_end_date');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // product_group_id - computed: true, optional: false, required: false
  public get productGroupId() {
    return this.getStringAttribute('product_group_id');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // server_type_id - computed: true, optional: false, required: false
  public get serverTypeId() {
    return this.getStringAttribute('server_type_id');
  }

  // service_level_id - computed: true, optional: false, required: false
  public get serviceLevelId() {
    return this.getStringAttribute('service_level_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // use_hyper_threading - computed: true, optional: false, required: false
  public get useHyperThreading() {
    return this.getStringAttribute('use_hyper_threading');
  }

  // vdc_id - computed: true, optional: false, required: false
  public get vdcId() {
    return this.getStringAttribute('vdc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      server_id: cdktf.stringToTerraform(this._serverId),
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
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
