// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoScalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#access_control_group_no_list AutoScalingGroup#access_control_group_no_list}
  */
  readonly accessControlGroupNoList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#default_cooldown AutoScalingGroup#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#desired_capacity AutoScalingGroup#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#health_check_grace_period AutoScalingGroup#health_check_grace_period}
  */
  readonly healthCheckGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#health_check_type_code AutoScalingGroup#health_check_type_code}
  */
  readonly healthCheckTypeCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#id AutoScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#ignore_capacity_changes AutoScalingGroup#ignore_capacity_changes}
  */
  readonly ignoreCapacityChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#launch_configuration_no AutoScalingGroup#launch_configuration_no}
  */
  readonly launchConfigurationNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#max_size AutoScalingGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#min_size AutoScalingGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#name AutoScalingGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#server_name_prefix AutoScalingGroup#server_name_prefix}
  */
  readonly serverNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#subnet_no AutoScalingGroup#subnet_no}
  */
  readonly subnetNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#target_group_list AutoScalingGroup#target_group_list}
  */
  readonly targetGroupList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#wait_for_capacity_timeout AutoScalingGroup#wait_for_capacity_timeout}
  */
  readonly waitForCapacityTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group ncloud_auto_scaling_group}
*/
export class AutoScalingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_auto_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoScalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoScalingGroup to import
  * @param importFromId The id of the existing AutoScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_auto_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/auto_scaling_group ncloud_auto_scaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AutoScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_auto_scaling_group',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlGroupNoList = config.accessControlGroupNoList;
    this._defaultCooldown = config.defaultCooldown;
    this._desiredCapacity = config.desiredCapacity;
    this._healthCheckGracePeriod = config.healthCheckGracePeriod;
    this._healthCheckTypeCode = config.healthCheckTypeCode;
    this._id = config.id;
    this._ignoreCapacityChanges = config.ignoreCapacityChanges;
    this._launchConfigurationNo = config.launchConfigurationNo;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._serverNamePrefix = config.serverNamePrefix;
    this._subnetNo = config.subnetNo;
    this._targetGroupList = config.targetGroupList;
    this._waitForCapacityTimeout = config.waitForCapacityTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_no_list - computed: false, optional: true, required: false
  private _accessControlGroupNoList?: string[]; 
  public get accessControlGroupNoList() {
    return this.getListAttribute('access_control_group_no_list');
  }
  public set accessControlGroupNoList(value: string[]) {
    this._accessControlGroupNoList = value;
  }
  public resetAccessControlGroupNoList() {
    this._accessControlGroupNoList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlGroupNoListInput() {
    return this._accessControlGroupNoList;
  }

  // auto_scaling_group_no - computed: true, optional: false, required: false
  public get autoScalingGroupNo() {
    return this.getStringAttribute('auto_scaling_group_no');
  }

  // default_cooldown - computed: false, optional: true, required: false
  private _defaultCooldown?: number; 
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // health_check_grace_period - computed: false, optional: true, required: false
  private _healthCheckGracePeriod?: number; 
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }
  public set healthCheckGracePeriod(value: number) {
    this._healthCheckGracePeriod = value;
  }
  public resetHealthCheckGracePeriod() {
    this._healthCheckGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodInput() {
    return this._healthCheckGracePeriod;
  }

  // health_check_type_code - computed: true, optional: true, required: false
  private _healthCheckTypeCode?: string; 
  public get healthCheckTypeCode() {
    return this.getStringAttribute('health_check_type_code');
  }
  public set healthCheckTypeCode(value: string) {
    this._healthCheckTypeCode = value;
  }
  public resetHealthCheckTypeCode() {
    this._healthCheckTypeCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeCodeInput() {
    return this._healthCheckTypeCode;
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

  // ignore_capacity_changes - computed: false, optional: true, required: false
  private _ignoreCapacityChanges?: boolean | cdktf.IResolvable; 
  public get ignoreCapacityChanges() {
    return this.getBooleanAttribute('ignore_capacity_changes');
  }
  public set ignoreCapacityChanges(value: boolean | cdktf.IResolvable) {
    this._ignoreCapacityChanges = value;
  }
  public resetIgnoreCapacityChanges() {
    this._ignoreCapacityChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCapacityChangesInput() {
    return this._ignoreCapacityChanges;
  }

  // launch_configuration_no - computed: false, optional: false, required: true
  private _launchConfigurationNo?: string; 
  public get launchConfigurationNo() {
    return this.getStringAttribute('launch_configuration_no');
  }
  public set launchConfigurationNo(value: string) {
    this._launchConfigurationNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchConfigurationNoInput() {
    return this._launchConfigurationNo;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // name - computed: true, optional: true, required: false
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

  // server_instance_no_list - computed: true, optional: false, required: false
  public get serverInstanceNoList() {
    return this.getListAttribute('server_instance_no_list');
  }

  // server_name_prefix - computed: true, optional: true, required: false
  private _serverNamePrefix?: string; 
  public get serverNamePrefix() {
    return this.getStringAttribute('server_name_prefix');
  }
  public set serverNamePrefix(value: string) {
    this._serverNamePrefix = value;
  }
  public resetServerNamePrefix() {
    this._serverNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamePrefixInput() {
    return this._serverNamePrefix;
  }

  // subnet_no - computed: false, optional: true, required: false
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  public resetSubnetNo() {
    this._subnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }

  // target_group_list - computed: false, optional: true, required: false
  private _targetGroupList?: string[]; 
  public get targetGroupList() {
    return this.getListAttribute('target_group_list');
  }
  public set targetGroupList(value: string[]) {
    this._targetGroupList = value;
  }
  public resetTargetGroupList() {
    this._targetGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupListInput() {
    return this._targetGroupList;
  }

  // vpc_no - computed: true, optional: false, required: false
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }

  // wait_for_capacity_timeout - computed: false, optional: true, required: false
  private _waitForCapacityTimeout?: string; 
  public get waitForCapacityTimeout() {
    return this.getStringAttribute('wait_for_capacity_timeout');
  }
  public set waitForCapacityTimeout(value: string) {
    this._waitForCapacityTimeout = value;
  }
  public resetWaitForCapacityTimeout() {
    this._waitForCapacityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityTimeoutInput() {
    return this._waitForCapacityTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_group_no_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessControlGroupNoList),
      default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
      health_check_type_code: cdktf.stringToTerraform(this._healthCheckTypeCode),
      id: cdktf.stringToTerraform(this._id),
      ignore_capacity_changes: cdktf.booleanToTerraform(this._ignoreCapacityChanges),
      launch_configuration_no: cdktf.stringToTerraform(this._launchConfigurationNo),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      server_name_prefix: cdktf.stringToTerraform(this._serverNamePrefix),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
      target_group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetGroupList),
      wait_for_capacity_timeout: cdktf.stringToTerraform(this._waitForCapacityTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_group_no_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessControlGroupNoList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_cooldown: {
        value: cdktf.numberToHclTerraform(this._defaultCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_grace_period: {
        value: cdktf.numberToHclTerraform(this._healthCheckGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_type_code: {
        value: cdktf.stringToHclTerraform(this._healthCheckTypeCode),
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
      ignore_capacity_changes: {
        value: cdktf.booleanToHclTerraform(this._ignoreCapacityChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      launch_configuration_no: {
        value: cdktf.stringToHclTerraform(this._launchConfigurationNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
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
      server_name_prefix: {
        value: cdktf.stringToHclTerraform(this._serverNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_no: {
        value: cdktf.stringToHclTerraform(this._subnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetGroupList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wait_for_capacity_timeout: {
        value: cdktf.stringToHclTerraform(this._waitForCapacityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
