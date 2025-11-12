// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/cloud_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdaCloudHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The service certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/cloud_health#service_cert DataVcdaCloudHealth#service_cert}
  */
  readonly serviceCert: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/cloud_health#timeouts DataVcdaCloudHealth#timeouts}
  */
  readonly timeouts?: DataVcdaCloudHealthTimeouts;
}
export interface DataVcdaCloudHealthTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/cloud_health#read DataVcdaCloudHealth#read}
  */
  readonly read?: string;
}

export function dataVcdaCloudHealthTimeoutsToTerraform(struct?: DataVcdaCloudHealthTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataVcdaCloudHealthTimeoutsToHclTerraform(struct?: DataVcdaCloudHealthTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVcdaCloudHealthTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVcdaCloudHealthTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdaCloudHealthTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/cloud_health vcda_cloud_health}
*/
export class DataVcdaCloudHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda_cloud_health";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdaCloudHealth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdaCloudHealth to import
  * @param importFromId The id of the existing DataVcdaCloudHealth that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/cloud_health#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdaCloudHealth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda_cloud_health", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/data-sources/cloud_health vcda_cloud_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdaCloudHealthConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdaCloudHealthConfig) {
    super(scope, id, {
      terraformResourceType: 'vcda_cloud_health',
      terraformGeneratorMetadata: {
        providerName: 'vcda',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serviceCert = config.serviceCert;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // appliance_boot_timestamp - computed: true, optional: false, required: false
  public get applianceBootTimestamp() {
    return this.getNumberAttribute('appliance_boot_timestamp');
  }

  // build_date - computed: true, optional: false, required: false
  public get buildDate() {
    return this.getNumberAttribute('build_date');
  }

  // build_version - computed: true, optional: false, required: false
  public get buildVersion() {
    return this.getStringAttribute('build_version');
  }

  // current_time - computed: true, optional: false, required: false
  public get currentTime() {
    return this.getNumberAttribute('current_time');
  }

  // db_error_args - computed: true, optional: false, required: false
  public get dbErrorArgs() {
    return this.getListAttribute('db_error_args');
  }

  // db_error_code - computed: true, optional: false, required: false
  public get dbErrorCode() {
    return this.getStringAttribute('db_error_code');
  }

  // db_error_msg - computed: true, optional: false, required: false
  public get dbErrorMsg() {
    return this.getStringAttribute('db_error_msg');
  }

  // db_error_stacktrace - computed: true, optional: false, required: false
  public get dbErrorStacktrace() {
    return this.getStringAttribute('db_error_stacktrace');
  }

  // disk_usage - computed: true, optional: false, required: false
  private _diskUsage = new cdktf.NumberMap(this, "disk_usage");
  public get diskUsage() {
    return this._diskUsage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // ls_error_args - computed: true, optional: false, required: false
  public get lsErrorArgs() {
    return this.getListAttribute('ls_error_args');
  }

  // ls_error_code - computed: true, optional: false, required: false
  public get lsErrorCode() {
    return this.getStringAttribute('ls_error_code');
  }

  // ls_error_msg - computed: true, optional: false, required: false
  public get lsErrorMsg() {
    return this.getStringAttribute('ls_error_msg');
  }

  // ls_error_stacktrace - computed: true, optional: false, required: false
  public get lsErrorStacktrace() {
    return this.getStringAttribute('ls_error_stacktrace');
  }

  // manager_error_args - computed: true, optional: false, required: false
  public get managerErrorArgs() {
    return this.getListAttribute('manager_error_args');
  }

  // manager_error_code - computed: true, optional: false, required: false
  public get managerErrorCode() {
    return this.getStringAttribute('manager_error_code');
  }

  // manager_error_msg - computed: true, optional: false, required: false
  public get managerErrorMsg() {
    return this.getStringAttribute('manager_error_msg');
  }

  // manager_error_stacktrace - computed: true, optional: false, required: false
  public get managerErrorStacktrace() {
    return this.getStringAttribute('manager_error_stacktrace');
  }

  // manager_id - computed: true, optional: false, required: false
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }

  // ntp_error_args - computed: true, optional: false, required: false
  public get ntpErrorArgs() {
    return this.getListAttribute('ntp_error_args');
  }

  // ntp_error_code - computed: true, optional: false, required: false
  public get ntpErrorCode() {
    return this.getStringAttribute('ntp_error_code');
  }

  // ntp_error_msg - computed: true, optional: false, required: false
  public get ntpErrorMsg() {
    return this.getStringAttribute('ntp_error_msg');
  }

  // ntp_error_stacktrace - computed: true, optional: false, required: false
  public get ntpErrorStacktrace() {
    return this.getStringAttribute('ntp_error_stacktrace');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // runtime_id - computed: true, optional: false, required: false
  public get runtimeId() {
    return this.getStringAttribute('runtime_id');
  }

  // service_boot_timestamp - computed: true, optional: false, required: false
  public get serviceBootTimestamp() {
    return this.getNumberAttribute('service_boot_timestamp');
  }

  // service_cert - computed: false, optional: false, required: true
  private _serviceCert?: string; 
  public get serviceCert() {
    return this.getStringAttribute('service_cert');
  }
  public set serviceCert(value: string) {
    this._serviceCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCertInput() {
    return this._serviceCert;
  }

  // tunnels_ids - computed: true, optional: false, required: false
  public get tunnelsIds() {
    return this.getListAttribute('tunnels_ids');
  }

  // vcd_error_args - computed: true, optional: false, required: false
  public get vcdErrorArgs() {
    return this.getListAttribute('vcd_error_args');
  }

  // vcd_error_code - computed: true, optional: false, required: false
  public get vcdErrorCode() {
    return this.getStringAttribute('vcd_error_code');
  }

  // vcd_error_msg - computed: true, optional: false, required: false
  public get vcdErrorMsg() {
    return this.getStringAttribute('vcd_error_msg');
  }

  // vcd_error_stacktrace - computed: true, optional: false, required: false
  public get vcdErrorStacktrace() {
    return this.getStringAttribute('vcd_error_stacktrace');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataVcdaCloudHealthTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataVcdaCloudHealthTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_cert: cdktf.stringToTerraform(this._serviceCert),
      timeouts: dataVcdaCloudHealthTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_cert: {
        value: cdktf.stringToHclTerraform(this._serviceCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataVcdaCloudHealthTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataVcdaCloudHealthTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
