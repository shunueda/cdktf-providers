// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingPortforwardingV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#description NetworkingPortforwardingV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#external_port NetworkingPortforwardingV2#external_port}
  */
  readonly externalPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#floatingip_id NetworkingPortforwardingV2#floatingip_id}
  */
  readonly floatingipId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#id NetworkingPortforwardingV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#internal_ip_address NetworkingPortforwardingV2#internal_ip_address}
  */
  readonly internalIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#internal_port NetworkingPortforwardingV2#internal_port}
  */
  readonly internalPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#internal_port_id NetworkingPortforwardingV2#internal_port_id}
  */
  readonly internalPortId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#protocol NetworkingPortforwardingV2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#region NetworkingPortforwardingV2#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#timeouts NetworkingPortforwardingV2#timeouts}
  */
  readonly timeouts?: NetworkingPortforwardingV2Timeouts;
}
export interface NetworkingPortforwardingV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#create NetworkingPortforwardingV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#delete NetworkingPortforwardingV2#delete}
  */
  readonly delete?: string;
}

export function networkingPortforwardingV2TimeoutsToTerraform(struct?: NetworkingPortforwardingV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkingPortforwardingV2TimeoutsToHclTerraform(struct?: NetworkingPortforwardingV2Timeouts | cdktf.IResolvable): any {
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

export class NetworkingPortforwardingV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingPortforwardingV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkingPortforwardingV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2 openstack_networking_portforwarding_v2}
*/
export class NetworkingPortforwardingV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_networking_portforwarding_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingPortforwardingV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingPortforwardingV2 to import
  * @param importFromId The id of the existing NetworkingPortforwardingV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingPortforwardingV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_networking_portforwarding_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_portforwarding_v2 openstack_networking_portforwarding_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingPortforwardingV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingPortforwardingV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_networking_portforwarding_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._externalPort = config.externalPort;
    this._floatingipId = config.floatingipId;
    this._id = config.id;
    this._internalIpAddress = config.internalIpAddress;
    this._internalPort = config.internalPort;
    this._internalPortId = config.internalPortId;
    this._protocol = config.protocol;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_port - computed: false, optional: false, required: true
  private _externalPort?: number; 
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }
  public set externalPort(value: number) {
    this._externalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // floatingip_id - computed: false, optional: false, required: true
  private _floatingipId?: string; 
  public get floatingipId() {
    return this.getStringAttribute('floatingip_id');
  }
  public set floatingipId(value: string) {
    this._floatingipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingipIdInput() {
    return this._floatingipId;
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

  // internal_ip_address - computed: false, optional: false, required: true
  private _internalIpAddress?: string; 
  public get internalIpAddress() {
    return this.getStringAttribute('internal_ip_address');
  }
  public set internalIpAddress(value: string) {
    this._internalIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpAddressInput() {
    return this._internalIpAddress;
  }

  // internal_port - computed: false, optional: false, required: true
  private _internalPort?: number; 
  public get internalPort() {
    return this.getNumberAttribute('internal_port');
  }
  public set internalPort(value: number) {
    this._internalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
  }

  // internal_port_id - computed: false, optional: false, required: true
  private _internalPortId?: string; 
  public get internalPortId() {
    return this.getStringAttribute('internal_port_id');
  }
  public set internalPortId(value: string) {
    this._internalPortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortIdInput() {
    return this._internalPortId;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingPortforwardingV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingPortforwardingV2Timeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      external_port: cdktf.numberToTerraform(this._externalPort),
      floatingip_id: cdktf.stringToTerraform(this._floatingipId),
      id: cdktf.stringToTerraform(this._id),
      internal_ip_address: cdktf.stringToTerraform(this._internalIpAddress),
      internal_port: cdktf.numberToTerraform(this._internalPort),
      internal_port_id: cdktf.stringToTerraform(this._internalPortId),
      protocol: cdktf.stringToTerraform(this._protocol),
      region: cdktf.stringToTerraform(this._region),
      timeouts: networkingPortforwardingV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_port: {
        value: cdktf.numberToHclTerraform(this._externalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      floatingip_id: {
        value: cdktf.stringToHclTerraform(this._floatingipId),
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
      internal_ip_address: {
        value: cdktf.stringToHclTerraform(this._internalIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_port: {
        value: cdktf.numberToHclTerraform(this._internalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal_port_id: {
        value: cdktf.stringToHclTerraform(this._internalPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkingPortforwardingV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingPortforwardingV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
