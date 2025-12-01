// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MseGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#backup_vswitch_id MseGateway#backup_vswitch_id}
  */
  readonly backupVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#delete_slb MseGateway#delete_slb}
  */
  readonly deleteSlb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#enterprise_security_group MseGateway#enterprise_security_group}
  */
  readonly enterpriseSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#gateway_name MseGateway#gateway_name}
  */
  readonly gatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#id MseGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#internet_slb_spec MseGateway#internet_slb_spec}
  */
  readonly internetSlbSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#replica MseGateway#replica}
  */
  readonly replica: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#slb_spec MseGateway#slb_spec}
  */
  readonly slbSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#spec MseGateway#spec}
  */
  readonly spec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#vpc_id MseGateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#vswitch_id MseGateway#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#timeouts MseGateway#timeouts}
  */
  readonly timeouts?: MseGatewayTimeouts;
}
export interface MseGatewaySlbListStruct {
}

export function mseGatewaySlbListStructToTerraform(struct?: MseGatewaySlbListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mseGatewaySlbListStructToHclTerraform(struct?: MseGatewaySlbListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MseGatewaySlbListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MseGatewaySlbListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MseGatewaySlbListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associate_id - computed: true, optional: false, required: false
  public get associateId() {
    return this.getStringAttribute('associate_id');
  }

  // gateway_slb_mode - computed: true, optional: false, required: false
  public get gatewaySlbMode() {
    return this.getStringAttribute('gateway_slb_mode');
  }

  // gateway_slb_status - computed: true, optional: false, required: false
  public get gatewaySlbStatus() {
    return this.getStringAttribute('gateway_slb_status');
  }

  // gmt_create - computed: true, optional: false, required: false
  public get gmtCreate() {
    return this.getStringAttribute('gmt_create');
  }

  // slb_id - computed: true, optional: false, required: false
  public get slbId() {
    return this.getStringAttribute('slb_id');
  }

  // slb_ip - computed: true, optional: false, required: false
  public get slbIp() {
    return this.getStringAttribute('slb_ip');
  }

  // slb_port - computed: true, optional: false, required: false
  public get slbPort() {
    return this.getStringAttribute('slb_port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class MseGatewaySlbListStructList extends cdktf.ComplexList {

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
  public get(index: number): MseGatewaySlbListStructOutputReference {
    return new MseGatewaySlbListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MseGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#create MseGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#delete MseGateway#delete}
  */
  readonly delete?: string;
}

export function mseGatewayTimeoutsToTerraform(struct?: MseGatewayTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function mseGatewayTimeoutsToHclTerraform(struct?: MseGatewayTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MseGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MseGatewayTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MseGatewayTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway alicloud_mse_gateway}
*/
export class MseGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mse_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MseGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MseGateway to import
  * @param importFromId The id of the existing MseGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MseGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mse_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mse_gateway alicloud_mse_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MseGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: MseGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mse_gateway',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupVswitchId = config.backupVswitchId;
    this._deleteSlb = config.deleteSlb;
    this._enterpriseSecurityGroup = config.enterpriseSecurityGroup;
    this._gatewayName = config.gatewayName;
    this._id = config.id;
    this._internetSlbSpec = config.internetSlbSpec;
    this._replica = config.replica;
    this._slbSpec = config.slbSpec;
    this._spec = config.spec;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_vswitch_id - computed: false, optional: true, required: false
  private _backupVswitchId?: string; 
  public get backupVswitchId() {
    return this.getStringAttribute('backup_vswitch_id');
  }
  public set backupVswitchId(value: string) {
    this._backupVswitchId = value;
  }
  public resetBackupVswitchId() {
    this._backupVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVswitchIdInput() {
    return this._backupVswitchId;
  }

  // delete_slb - computed: false, optional: true, required: false
  private _deleteSlb?: boolean | cdktf.IResolvable; 
  public get deleteSlb() {
    return this.getBooleanAttribute('delete_slb');
  }
  public set deleteSlb(value: boolean | cdktf.IResolvable) {
    this._deleteSlb = value;
  }
  public resetDeleteSlb() {
    this._deleteSlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSlbInput() {
    return this._deleteSlb;
  }

  // enterprise_security_group - computed: false, optional: true, required: false
  private _enterpriseSecurityGroup?: boolean | cdktf.IResolvable; 
  public get enterpriseSecurityGroup() {
    return this.getBooleanAttribute('enterprise_security_group');
  }
  public set enterpriseSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._enterpriseSecurityGroup = value;
  }
  public resetEnterpriseSecurityGroup() {
    this._enterpriseSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseSecurityGroupInput() {
    return this._enterpriseSecurityGroup;
  }

  // gateway_name - computed: false, optional: true, required: false
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  public resetGatewayName() {
    this._gatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
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

  // internet_slb_spec - computed: false, optional: true, required: false
  private _internetSlbSpec?: string; 
  public get internetSlbSpec() {
    return this.getStringAttribute('internet_slb_spec');
  }
  public set internetSlbSpec(value: string) {
    this._internetSlbSpec = value;
  }
  public resetInternetSlbSpec() {
    this._internetSlbSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSlbSpecInput() {
    return this._internetSlbSpec;
  }

  // replica - computed: false, optional: false, required: true
  private _replica?: number; 
  public get replica() {
    return this.getNumberAttribute('replica');
  }
  public set replica(value: number) {
    this._replica = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica;
  }

  // slb_list - computed: true, optional: false, required: false
  private _slbList = new MseGatewaySlbListStructList(this, "slb_list", false);
  public get slbList() {
    return this._slbList;
  }

  // slb_spec - computed: false, optional: true, required: false
  private _slbSpec?: string; 
  public get slbSpec() {
    return this.getStringAttribute('slb_spec');
  }
  public set slbSpec(value: string) {
    this._slbSpec = value;
  }
  public resetSlbSpec() {
    this._slbSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbSpecInput() {
    return this._slbSpec;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MseGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MseGatewayTimeouts) {
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
      backup_vswitch_id: cdktf.stringToTerraform(this._backupVswitchId),
      delete_slb: cdktf.booleanToTerraform(this._deleteSlb),
      enterprise_security_group: cdktf.booleanToTerraform(this._enterpriseSecurityGroup),
      gateway_name: cdktf.stringToTerraform(this._gatewayName),
      id: cdktf.stringToTerraform(this._id),
      internet_slb_spec: cdktf.stringToTerraform(this._internetSlbSpec),
      replica: cdktf.numberToTerraform(this._replica),
      slb_spec: cdktf.stringToTerraform(this._slbSpec),
      spec: cdktf.stringToTerraform(this._spec),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      timeouts: mseGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._backupVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_slb: {
        value: cdktf.booleanToHclTerraform(this._deleteSlb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_security_group: {
        value: cdktf.booleanToHclTerraform(this._enterpriseSecurityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_name: {
        value: cdktf.stringToHclTerraform(this._gatewayName),
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
      internet_slb_spec: {
        value: cdktf.stringToHclTerraform(this._internetSlbSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica: {
        value: cdktf.numberToHclTerraform(this._replica),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_spec: {
        value: cdktf.stringToHclTerraform(this._slbSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: cdktf.stringToHclTerraform(this._spec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mseGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MseGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
