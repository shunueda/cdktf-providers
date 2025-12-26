// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#id ClbTargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The default port of target group, add server after can use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#port ClbTargetGroup#port}
  */
  readonly port?: number;
  /**
  * Target group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#target_group_name ClbTargetGroup#target_group_name}
  */
  readonly targetGroupName?: string;
  /**
  * VPC ID, default is based on the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#vpc_id ClbTargetGroup#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * target_group_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#target_group_instances ClbTargetGroup#target_group_instances}
  */
  readonly targetGroupInstances?: ClbTargetGroupTargetGroupInstances[] | cdktf.IResolvable;
}
export interface ClbTargetGroupTargetGroupInstances {
  /**
  * The internal ip of target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#bind_ip ClbTargetGroup#bind_ip}
  */
  readonly bindIp: string;
  /**
  * The new port of target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#new_port ClbTargetGroup#new_port}
  */
  readonly newPort?: number;
  /**
  * The port of target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#port ClbTargetGroup#port}
  */
  readonly port: number;
  /**
  * The weight of target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#weight ClbTargetGroup#weight}
  */
  readonly weight?: number;
}

export function clbTargetGroupTargetGroupInstancesToTerraform(struct?: ClbTargetGroupTargetGroupInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_ip: cdktf.stringToTerraform(struct!.bindIp),
    new_port: cdktf.numberToTerraform(struct!.newPort),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function clbTargetGroupTargetGroupInstancesToHclTerraform(struct?: ClbTargetGroupTargetGroupInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_ip: {
      value: cdktf.stringToHclTerraform(struct!.bindIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_port: {
      value: cdktf.numberToHclTerraform(struct!.newPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClbTargetGroupTargetGroupInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClbTargetGroupTargetGroupInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindIp = this._bindIp;
    }
    if (this._newPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPort = this._newPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClbTargetGroupTargetGroupInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindIp = undefined;
      this._newPort = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindIp = value.bindIp;
      this._newPort = value.newPort;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // bind_ip - computed: false, optional: false, required: true
  private _bindIp?: string; 
  public get bindIp() {
    return this.getStringAttribute('bind_ip');
  }
  public set bindIp(value: string) {
    this._bindIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindIpInput() {
    return this._bindIp;
  }

  // new_port - computed: false, optional: true, required: false
  private _newPort?: number; 
  public get newPort() {
    return this.getNumberAttribute('new_port');
  }
  public set newPort(value: number) {
    this._newPort = value;
  }
  public resetNewPort() {
    this._newPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPortInput() {
    return this._newPort;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ClbTargetGroupTargetGroupInstancesList extends cdktf.ComplexList {
  public internalValue? : ClbTargetGroupTargetGroupInstances[] | cdktf.IResolvable

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
  public get(index: number): ClbTargetGroupTargetGroupInstancesOutputReference {
    return new ClbTargetGroupTargetGroupInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group tencentcloud_clb_target_group}
*/
export class ClbTargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_target_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbTargetGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbTargetGroup to import
  * @param importFromId The id of the existing ClbTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbTargetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_target_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_target_group tencentcloud_clb_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbTargetGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClbTargetGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_target_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._port = config.port;
    this._targetGroupName = config.targetGroupName;
    this._vpcId = config.vpcId;
    this._targetGroupInstances.internalValue = config.targetGroupInstances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_group_name - computed: false, optional: true, required: false
  private _targetGroupName?: string; 
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }
  public set targetGroupName(value: string) {
    this._targetGroupName = value;
  }
  public resetTargetGroupName() {
    this._targetGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupNameInput() {
    return this._targetGroupName;
  }

  // vpc_id - computed: false, optional: true, required: false
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

  // target_group_instances - computed: false, optional: true, required: false
  private _targetGroupInstances = new ClbTargetGroupTargetGroupInstancesList(this, "target_group_instances", false);
  public get targetGroupInstances() {
    return this._targetGroupInstances;
  }
  public putTargetGroupInstances(value: ClbTargetGroupTargetGroupInstances[] | cdktf.IResolvable) {
    this._targetGroupInstances.internalValue = value;
  }
  public resetTargetGroupInstances() {
    this._targetGroupInstances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInstancesInput() {
    return this._targetGroupInstances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      target_group_name: cdktf.stringToTerraform(this._targetGroupName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      target_group_instances: cdktf.listMapper(clbTargetGroupTargetGroupInstancesToTerraform, true)(this._targetGroupInstances.internalValue),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_group_name: {
        value: cdktf.stringToHclTerraform(this._targetGroupName),
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
      target_group_instances: {
        value: cdktf.listMapperHcl(clbTargetGroupTargetGroupInstancesToHclTerraform, true)(this._targetGroupInstances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClbTargetGroupTargetGroupInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
