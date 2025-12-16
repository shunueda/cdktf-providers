// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorGrafanaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically use vouchers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#auto_voucher MonitorGrafanaInstance#auto_voucher}
  */
  readonly autoVoucher?: boolean | cdktf.IResolvable;
  /**
  * Control whether grafana could be accessed by internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#enable_internet MonitorGrafanaInstance#enable_internet}
  */
  readonly enableInternet?: boolean | cdktf.IResolvable;
  /**
  * Grafana server admin password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#grafana_init_password MonitorGrafanaInstance#grafana_init_password}
  */
  readonly grafanaInitPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#id MonitorGrafanaInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#instance_name MonitorGrafanaInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Whether to clean up completely, the default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#is_destroy MonitorGrafanaInstance#is_destroy}
  */
  readonly isDestroy?: boolean | cdktf.IResolvable;
  /**
  * Whether to clean up completely, the default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#is_distroy MonitorGrafanaInstance#is_distroy}
  */
  readonly isDistroy?: boolean | cdktf.IResolvable;
  /**
  * Subnet Id array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#subnet_ids MonitorGrafanaInstance#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#tags MonitorGrafanaInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Vpc Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#vpc_id MonitorGrafanaInstance#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance tencentcloud_monitor_grafana_instance}
*/
export class MonitorGrafanaInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_grafana_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorGrafanaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorGrafanaInstance to import
  * @param importFromId The id of the existing MonitorGrafanaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorGrafanaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_grafana_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_instance tencentcloud_monitor_grafana_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorGrafanaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorGrafanaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_grafana_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoVoucher = config.autoVoucher;
    this._enableInternet = config.enableInternet;
    this._grafanaInitPassword = config.grafanaInitPassword;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._isDestroy = config.isDestroy;
    this._isDistroy = config.isDistroy;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_voucher - computed: false, optional: true, required: false
  private _autoVoucher?: boolean | cdktf.IResolvable; 
  public get autoVoucher() {
    return this.getBooleanAttribute('auto_voucher');
  }
  public set autoVoucher(value: boolean | cdktf.IResolvable) {
    this._autoVoucher = value;
  }
  public resetAutoVoucher() {
    this._autoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVoucherInput() {
    return this._autoVoucher;
  }

  // enable_internet - computed: true, optional: true, required: false
  private _enableInternet?: boolean | cdktf.IResolvable; 
  public get enableInternet() {
    return this.getBooleanAttribute('enable_internet');
  }
  public set enableInternet(value: boolean | cdktf.IResolvable) {
    this._enableInternet = value;
  }
  public resetEnableInternet() {
    this._enableInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetInput() {
    return this._enableInternet;
  }

  // grafana_init_password - computed: true, optional: true, required: false
  private _grafanaInitPassword?: string; 
  public get grafanaInitPassword() {
    return this.getStringAttribute('grafana_init_password');
  }
  public set grafanaInitPassword(value: string) {
    this._grafanaInitPassword = value;
  }
  public resetGrafanaInitPassword() {
    this._grafanaInitPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInitPasswordInput() {
    return this._grafanaInitPassword;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getNumberAttribute('instance_status');
  }

  // internal_url - computed: true, optional: false, required: false
  public get internalUrl() {
    return this.getStringAttribute('internal_url');
  }

  // internet_url - computed: true, optional: false, required: false
  public get internetUrl() {
    return this.getStringAttribute('internet_url');
  }

  // is_destroy - computed: false, optional: true, required: false
  private _isDestroy?: boolean | cdktf.IResolvable; 
  public get isDestroy() {
    return this.getBooleanAttribute('is_destroy');
  }
  public set isDestroy(value: boolean | cdktf.IResolvable) {
    this._isDestroy = value;
  }
  public resetIsDestroy() {
    this._isDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDestroyInput() {
    return this._isDestroy;
  }

  // is_distroy - computed: false, optional: true, required: false
  private _isDistroy?: boolean | cdktf.IResolvable; 
  public get isDistroy() {
    return this.getBooleanAttribute('is_distroy');
  }
  public set isDistroy(value: boolean | cdktf.IResolvable) {
    this._isDistroy = value;
  }
  public resetIsDistroy() {
    this._isDistroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDistroyInput() {
    return this._isDistroy;
  }

  // root_url - computed: true, optional: false, required: false
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_voucher: cdktf.booleanToTerraform(this._autoVoucher),
      enable_internet: cdktf.booleanToTerraform(this._enableInternet),
      grafana_init_password: cdktf.stringToTerraform(this._grafanaInitPassword),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      is_destroy: cdktf.booleanToTerraform(this._isDestroy),
      is_distroy: cdktf.booleanToTerraform(this._isDistroy),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_voucher: {
        value: cdktf.booleanToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_internet: {
        value: cdktf.booleanToHclTerraform(this._enableInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      grafana_init_password: {
        value: cdktf.stringToHclTerraform(this._grafanaInitPassword),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_destroy: {
        value: cdktf.booleanToHclTerraform(this._isDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_distroy: {
        value: cdktf.booleanToHclTerraform(this._isDistroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
