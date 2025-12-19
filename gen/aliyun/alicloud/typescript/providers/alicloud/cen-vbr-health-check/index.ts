// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenVbrHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#cen_id CenVbrHealthCheck#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#health_check_interval CenVbrHealthCheck#health_check_interval}
  */
  readonly healthCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#health_check_source_ip CenVbrHealthCheck#health_check_source_ip}
  */
  readonly healthCheckSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#health_check_target_ip CenVbrHealthCheck#health_check_target_ip}
  */
  readonly healthCheckTargetIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#healthy_threshold CenVbrHealthCheck#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#id CenVbrHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#vbr_instance_id CenVbrHealthCheck#vbr_instance_id}
  */
  readonly vbrInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#vbr_instance_owner_id CenVbrHealthCheck#vbr_instance_owner_id}
  */
  readonly vbrInstanceOwnerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#vbr_instance_region_id CenVbrHealthCheck#vbr_instance_region_id}
  */
  readonly vbrInstanceRegionId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#timeouts CenVbrHealthCheck#timeouts}
  */
  readonly timeouts?: CenVbrHealthCheckTimeouts;
}
export interface CenVbrHealthCheckTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#create CenVbrHealthCheck#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#delete CenVbrHealthCheck#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#update CenVbrHealthCheck#update}
  */
  readonly update?: string;
}

export function cenVbrHealthCheckTimeoutsToTerraform(struct?: CenVbrHealthCheckTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cenVbrHealthCheckTimeoutsToHclTerraform(struct?: CenVbrHealthCheckTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenVbrHealthCheckTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenVbrHealthCheckTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenVbrHealthCheckTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check alicloud_cen_vbr_health_check}
*/
export class CenVbrHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_vbr_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenVbrHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenVbrHealthCheck to import
  * @param importFromId The id of the existing CenVbrHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenVbrHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_vbr_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cen_vbr_health_check alicloud_cen_vbr_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenVbrHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: CenVbrHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_vbr_health_check',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._healthCheckSourceIp = config.healthCheckSourceIp;
    this._healthCheckTargetIp = config.healthCheckTargetIp;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._vbrInstanceId = config.vbrInstanceId;
    this._vbrInstanceOwnerId = config.vbrInstanceOwnerId;
    this._vbrInstanceRegionId = config.vbrInstanceRegionId;
    this._timeouts.internalValue = config.timeouts;
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

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: number; 
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: number) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // health_check_source_ip - computed: true, optional: true, required: false
  private _healthCheckSourceIp?: string; 
  public get healthCheckSourceIp() {
    return this.getStringAttribute('health_check_source_ip');
  }
  public set healthCheckSourceIp(value: string) {
    this._healthCheckSourceIp = value;
  }
  public resetHealthCheckSourceIp() {
    this._healthCheckSourceIp = undefined;
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

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
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

  // vbr_instance_owner_id - computed: false, optional: true, required: false
  private _vbrInstanceOwnerId?: number; 
  public get vbrInstanceOwnerId() {
    return this.getNumberAttribute('vbr_instance_owner_id');
  }
  public set vbrInstanceOwnerId(value: number) {
    this._vbrInstanceOwnerId = value;
  }
  public resetVbrInstanceOwnerId() {
    this._vbrInstanceOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrInstanceOwnerIdInput() {
    return this._vbrInstanceOwnerId;
  }

  // vbr_instance_region_id - computed: false, optional: false, required: true
  private _vbrInstanceRegionId?: string; 
  public get vbrInstanceRegionId() {
    return this.getStringAttribute('vbr_instance_region_id');
  }
  public set vbrInstanceRegionId(value: string) {
    this._vbrInstanceRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrInstanceRegionIdInput() {
    return this._vbrInstanceRegionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenVbrHealthCheckTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenVbrHealthCheckTimeouts) {
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
      cen_id: cdktf.stringToTerraform(this._cenId),
      health_check_interval: cdktf.numberToTerraform(this._healthCheckInterval),
      health_check_source_ip: cdktf.stringToTerraform(this._healthCheckSourceIp),
      health_check_target_ip: cdktf.stringToTerraform(this._healthCheckTargetIp),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      vbr_instance_id: cdktf.stringToTerraform(this._vbrInstanceId),
      vbr_instance_owner_id: cdktf.numberToTerraform(this._vbrInstanceOwnerId),
      vbr_instance_region_id: cdktf.stringToTerraform(this._vbrInstanceRegionId),
      timeouts: cenVbrHealthCheckTimeoutsToTerraform(this._timeouts.internalValue),
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
      vbr_instance_owner_id: {
        value: cdktf.numberToHclTerraform(this._vbrInstanceOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vbr_instance_region_id: {
        value: cdktf.stringToHclTerraform(this._vbrInstanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenVbrHealthCheckTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenVbrHealthCheckTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
