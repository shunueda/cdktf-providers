// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_sso_cam_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorGrafanaSsoCamConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable the CAM authorization: `true` for enabling; `false` for disabling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_sso_cam_config#enable_sso_cam_check MonitorGrafanaSsoCamConfig#enable_sso_cam_check}
  */
  readonly enableSsoCamCheck: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_sso_cam_config#id MonitorGrafanaSsoCamConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Grafana instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_sso_cam_config#instance_id MonitorGrafanaSsoCamConfig#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_sso_cam_config tencentcloud_monitor_grafana_sso_cam_config}
*/
export class MonitorGrafanaSsoCamConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_grafana_sso_cam_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorGrafanaSsoCamConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorGrafanaSsoCamConfig to import
  * @param importFromId The id of the existing MonitorGrafanaSsoCamConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_sso_cam_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorGrafanaSsoCamConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_grafana_sso_cam_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/monitor_grafana_sso_cam_config tencentcloud_monitor_grafana_sso_cam_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorGrafanaSsoCamConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorGrafanaSsoCamConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_grafana_sso_cam_config',
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
    this._enableSsoCamCheck = config.enableSsoCamCheck;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_sso_cam_check - computed: false, optional: false, required: true
  private _enableSsoCamCheck?: boolean | cdktf.IResolvable; 
  public get enableSsoCamCheck() {
    return this.getBooleanAttribute('enable_sso_cam_check');
  }
  public set enableSsoCamCheck(value: boolean | cdktf.IResolvable) {
    this._enableSsoCamCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsoCamCheckInput() {
    return this._enableSsoCamCheck;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_sso_cam_check: cdktf.booleanToTerraform(this._enableSsoCamCheck),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_sso_cam_check: {
        value: cdktf.booleanToHclTerraform(this._enableSsoCamCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
