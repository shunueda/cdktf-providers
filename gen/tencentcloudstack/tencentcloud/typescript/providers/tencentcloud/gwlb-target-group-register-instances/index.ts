// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GwlbTargetGroupRegisterInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances#id GwlbTargetGroupRegisterInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances#target_group_id GwlbTargetGroupRegisterInstances#target_group_id}
  */
  readonly targetGroupId: string;
  /**
  * target_group_instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances#target_group_instances GwlbTargetGroupRegisterInstances#target_group_instances}
  */
  readonly targetGroupInstances: GwlbTargetGroupRegisterInstancesTargetGroupInstances[] | cdktf.IResolvable;
}
export interface GwlbTargetGroupRegisterInstancesTargetGroupInstances {
  /**
  * Private network IP of target group instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances#bind_ip GwlbTargetGroupRegisterInstances#bind_ip}
  */
  readonly bindIp: string;
  /**
  * Port of target group instance. Only 6081 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances#port GwlbTargetGroupRegisterInstances#port}
  */
  readonly port?: number;
  /**
  * Weight of target group instance. Only 0 or 16 is supported, and non-0 is uniformly treated as 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances#weight GwlbTargetGroupRegisterInstances#weight}
  */
  readonly weight?: number;
}

export function gwlbTargetGroupRegisterInstancesTargetGroupInstancesToTerraform(struct?: GwlbTargetGroupRegisterInstancesTargetGroupInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_ip: cdktf.stringToTerraform(struct!.bindIp),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function gwlbTargetGroupRegisterInstancesTargetGroupInstancesToHclTerraform(struct?: GwlbTargetGroupRegisterInstancesTargetGroupInstances | cdktf.IResolvable): any {
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

export class GwlbTargetGroupRegisterInstancesTargetGroupInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GwlbTargetGroupRegisterInstancesTargetGroupInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindIp = this._bindIp;
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

  public set internalValue(value: GwlbTargetGroupRegisterInstancesTargetGroupInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindIp = undefined;
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

export class GwlbTargetGroupRegisterInstancesTargetGroupInstancesList extends cdktf.ComplexList {
  public internalValue? : GwlbTargetGroupRegisterInstancesTargetGroupInstances[] | cdktf.IResolvable

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
  public get(index: number): GwlbTargetGroupRegisterInstancesTargetGroupInstancesOutputReference {
    return new GwlbTargetGroupRegisterInstancesTargetGroupInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances tencentcloud_gwlb_target_group_register_instances}
*/
export class GwlbTargetGroupRegisterInstances extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gwlb_target_group_register_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GwlbTargetGroupRegisterInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GwlbTargetGroupRegisterInstances to import
  * @param importFromId The id of the existing GwlbTargetGroupRegisterInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GwlbTargetGroupRegisterInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gwlb_target_group_register_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/gwlb_target_group_register_instances tencentcloud_gwlb_target_group_register_instances} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GwlbTargetGroupRegisterInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: GwlbTargetGroupRegisterInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gwlb_target_group_register_instances',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._targetGroupId = config.targetGroupId;
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

  // target_group_id - computed: false, optional: false, required: true
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }

  // target_group_instances - computed: false, optional: false, required: true
  private _targetGroupInstances = new GwlbTargetGroupRegisterInstancesTargetGroupInstancesList(this, "target_group_instances", true);
  public get targetGroupInstances() {
    return this._targetGroupInstances;
  }
  public putTargetGroupInstances(value: GwlbTargetGroupRegisterInstancesTargetGroupInstances[] | cdktf.IResolvable) {
    this._targetGroupInstances.internalValue = value;
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
      target_group_id: cdktf.stringToTerraform(this._targetGroupId),
      target_group_instances: cdktf.listMapper(gwlbTargetGroupRegisterInstancesTargetGroupInstancesToTerraform, true)(this._targetGroupInstances.internalValue),
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
      target_group_id: {
        value: cdktf.stringToHclTerraform(this._targetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_instances: {
        value: cdktf.listMapperHcl(gwlbTargetGroupRegisterInstancesTargetGroupInstancesToHclTerraform, true)(this._targetGroupInstances.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GwlbTargetGroupRegisterInstancesTargetGroupInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
