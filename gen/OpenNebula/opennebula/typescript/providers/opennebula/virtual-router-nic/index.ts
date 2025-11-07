// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualRouterNicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#floating_ip VirtualRouterNic#floating_ip}
  */
  readonly floatingIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#floating_only VirtualRouterNic#floating_only}
  */
  readonly floatingOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#id VirtualRouterNic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#ip VirtualRouterNic#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#ip6 VirtualRouterNic#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#model VirtualRouterNic#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#network_id VirtualRouterNic#network_id}
  */
  readonly networkId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#physical_device VirtualRouterNic#physical_device}
  */
  readonly physicalDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#security_groups VirtualRouterNic#security_groups}
  */
  readonly securityGroups?: number[];
  /**
  * Only if model is virtio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#virtio_queues VirtualRouterNic#virtio_queues}
  */
  readonly virtioQueues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#virtual_router_id VirtualRouterNic#virtual_router_id}
  */
  readonly virtualRouterId: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#timeouts VirtualRouterNic#timeouts}
  */
  readonly timeouts?: VirtualRouterNicTimeouts;
}
export interface VirtualRouterNicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#create VirtualRouterNic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#delete VirtualRouterNic#delete}
  */
  readonly delete?: string;
}

export function virtualRouterNicTimeoutsToTerraform(struct?: VirtualRouterNicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function virtualRouterNicTimeoutsToHclTerraform(struct?: VirtualRouterNicTimeouts | cdktf.IResolvable): any {
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

export class VirtualRouterNicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterNicTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterNicTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic opennebula_virtual_router_nic}
*/
export class VirtualRouterNic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_virtual_router_nic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualRouterNic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualRouterNic to import
  * @param importFromId The id of the existing VirtualRouterNic that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualRouterNic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_virtual_router_nic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/virtual_router_nic opennebula_virtual_router_nic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualRouterNicConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualRouterNicConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_virtual_router_nic',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._floatingIp = config.floatingIp;
    this._floatingOnly = config.floatingOnly;
    this._id = config.id;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._model = config.model;
    this._networkId = config.networkId;
    this._physicalDevice = config.physicalDevice;
    this._securityGroups = config.securityGroups;
    this._virtioQueues = config.virtioQueues;
    this._virtualRouterId = config.virtualRouterId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: boolean | cdktf.IResolvable; 
  public get floatingIp() {
    return this.getBooleanAttribute('floating_ip');
  }
  public set floatingIp(value: boolean | cdktf.IResolvable) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // floating_only - computed: false, optional: true, required: false
  private _floatingOnly?: boolean | cdktf.IResolvable; 
  public get floatingOnly() {
    return this.getBooleanAttribute('floating_only');
  }
  public set floatingOnly(value: boolean | cdktf.IResolvable) {
    this._floatingOnly = value;
  }
  public resetFloatingOnly() {
    this._floatingOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingOnlyInput() {
    return this._floatingOnly;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // physical_device - computed: true, optional: true, required: false
  private _physicalDevice?: string; 
  public get physicalDevice() {
    return this.getStringAttribute('physical_device');
  }
  public set physicalDevice(value: string) {
    this._physicalDevice = value;
  }
  public resetPhysicalDevice() {
    this._physicalDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalDeviceInput() {
    return this._physicalDevice;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: number[]; 
  public get securityGroups() {
    return this.getNumberListAttribute('security_groups');
  }
  public set securityGroups(value: number[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // virtio_queues - computed: true, optional: true, required: false
  private _virtioQueues?: string; 
  public get virtioQueues() {
    return this.getStringAttribute('virtio_queues');
  }
  public set virtioQueues(value: string) {
    this._virtioQueues = value;
  }
  public resetVirtioQueues() {
    this._virtioQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtioQueuesInput() {
    return this._virtioQueues;
  }

  // virtual_router_id - computed: false, optional: false, required: true
  private _virtualRouterId?: number; 
  public get virtualRouterId() {
    return this.getNumberAttribute('virtual_router_id');
  }
  public set virtualRouterId(value: number) {
    this._virtualRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterIdInput() {
    return this._virtualRouterId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualRouterNicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualRouterNicTimeouts) {
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
      floating_ip: cdktf.booleanToTerraform(this._floatingIp),
      floating_only: cdktf.booleanToTerraform(this._floatingOnly),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      model: cdktf.stringToTerraform(this._model),
      network_id: cdktf.numberToTerraform(this._networkId),
      physical_device: cdktf.stringToTerraform(this._physicalDevice),
      security_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._securityGroups),
      virtio_queues: cdktf.stringToTerraform(this._virtioQueues),
      virtual_router_id: cdktf.numberToTerraform(this._virtualRouterId),
      timeouts: virtualRouterNicTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      floating_ip: {
        value: cdktf.booleanToHclTerraform(this._floatingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      floating_only: {
        value: cdktf.booleanToHclTerraform(this._floatingOnly),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.numberToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      physical_device: {
        value: cdktf.stringToHclTerraform(this._physicalDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      virtio_queues: {
        value: cdktf.stringToHclTerraform(this._virtioQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_router_id: {
        value: cdktf.numberToHclTerraform(this._virtualRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: virtualRouterNicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterNicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
