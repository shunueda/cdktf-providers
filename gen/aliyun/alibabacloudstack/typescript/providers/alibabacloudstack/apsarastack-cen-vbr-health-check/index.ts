// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCenVbrHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#cen_id ApsarastackCenVbrHealthCheck#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#health_check_interval ApsarastackCenVbrHealthCheck#health_check_interval}
  */
  readonly healthCheckInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#health_check_only ApsarastackCenVbrHealthCheck#health_check_only}
  */
  readonly healthCheckOnly: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#health_check_source_ip ApsarastackCenVbrHealthCheck#health_check_source_ip}
  */
  readonly healthCheckSourceIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#health_check_target_ip ApsarastackCenVbrHealthCheck#health_check_target_ip}
  */
  readonly healthCheckTargetIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#healthy_threshold ApsarastackCenVbrHealthCheck#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#id ApsarastackCenVbrHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#vbr_instance_id ApsarastackCenVbrHealthCheck#vbr_instance_id}
  */
  readonly vbrInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check apsarastack_cen_vbr_health_check}
*/
export class ApsarastackCenVbrHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cen_vbr_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCenVbrHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCenVbrHealthCheck to import
  * @param importFromId The id of the existing ApsarastackCenVbrHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCenVbrHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cen_vbr_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cen_vbr_health_check apsarastack_cen_vbr_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCenVbrHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCenVbrHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cen_vbr_health_check',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenId = config.cenId;
    this._healthCheckInterval = config.healthCheckInterval;
    this._healthCheckOnly = config.healthCheckOnly;
    this._healthCheckSourceIp = config.healthCheckSourceIp;
    this._healthCheckTargetIp = config.healthCheckTargetIp;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._vbrInstanceId = config.vbrInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // health_check_interval - computed: false, optional: false, required: true
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_only - computed: false, optional: false, required: true
  private _healthCheckOnly?: boolean | cdktf.IResolvable; 
  public get healthCheckOnly() {
    return this.getBooleanAttribute('health_check_only');
  }
  public set healthCheckOnly(value: boolean | cdktf.IResolvable) {
    this._healthCheckOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckOnlyInput() {
    return this._healthCheckOnly;
  }

  // health_check_source_ip - computed: false, optional: false, required: true
  private _healthCheckSourceIp?: string; 
  public get healthCheckSourceIp() {
    return this.getStringAttribute('health_check_source_ip');
  }
  public set healthCheckSourceIp(value: string) {
    this._healthCheckSourceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSourceIpInput() {
    return this._healthCheckSourceIp;
  }

  // health_check_target_ip - computed: false, optional: false, required: true
  private _healthCheckTargetIp?: string; 
  public get healthCheckTargetIp() {
    return this.getStringAttribute('health_check_target_ip');
  }
  public set healthCheckTargetIp(value: string) {
    this._healthCheckTargetIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTargetIpInput() {
    return this._healthCheckTargetIp;
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
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

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // packet_loss - computed: true, optional: false, required: false
  public get packetLoss() {
    return this.getNumberAttribute('packet_loss');
  }

  // vbr_instance_id - computed: false, optional: false, required: true
  private _vbrInstanceId?: string; 
  public get vbrInstanceId() {
    return this.getStringAttribute('vbr_instance_id');
  }
  public set vbrInstanceId(value: string) {
    this._vbrInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrInstanceIdInput() {
    return this._vbrInstanceId;
  }

  // vbr_instance_owner_id - computed: true, optional: false, required: false
  public get vbrInstanceOwnerId() {
    return this.getNumberAttribute('vbr_instance_owner_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_id: cdktf.stringToTerraform(this._cenId),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      health_check_only: cdktf.booleanToTerraform(this._healthCheckOnly),
      health_check_source_ip: cdktf.stringToTerraform(this._healthCheckSourceIp),
      health_check_target_ip: cdktf.stringToTerraform(this._healthCheckTargetIp),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      vbr_instance_id: cdktf.stringToTerraform(this._vbrInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_interval: {
        value: cdktf.numberToHclTerraform(this._healthCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_only: {
        value: cdktf.booleanToHclTerraform(this._healthCheckOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_source_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_target_ip: {
        value: cdktf.stringToHclTerraform(this._healthCheckTargetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthy_threshold: {
        value: cdktf.numberToHclTerraform(this._healthyThreshold),
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
      vbr_instance_id: {
        value: cdktf.stringToHclTerraform(this._vbrInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
