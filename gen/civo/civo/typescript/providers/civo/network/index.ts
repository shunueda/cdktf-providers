// https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CIDR block for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#cidr_v4 Network#cidr_v4}
  */
  readonly cidrV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#id Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#label Network#label}
  */
  readonly label: string;
  /**
  * List of nameservers for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#nameservers_v4 Network#nameservers_v4}
  */
  readonly nameserversV4?: string[];
  /**
  * The region of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#region Network#region}
  */
  readonly region?: string;
  /**
  * End of the IPv4 allocation pool for VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#vlan_allocation_pool_v4_end Network#vlan_allocation_pool_v4_end}
  */
  readonly vlanAllocationPoolV4End?: string;
  /**
  * Start of the IPv4 allocation pool for VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#vlan_allocation_pool_v4_start Network#vlan_allocation_pool_v4_start}
  */
  readonly vlanAllocationPoolV4Start?: string;
  /**
  * CIDR for VLAN IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#vlan_cidr_v4 Network#vlan_cidr_v4}
  */
  readonly vlanCidrV4?: string;
  /**
  * Gateway IP for VLAN IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#vlan_gateway_ip_v4 Network#vlan_gateway_ip_v4}
  */
  readonly vlanGatewayIpV4?: string;
  /**
  * VLAN ID for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#vlan_id Network#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Physical interface for VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#vlan_physical_interface Network#vlan_physical_interface}
  */
  readonly vlanPhysicalInterface?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#timeouts Network#timeouts}
  */
  readonly timeouts?: NetworkTimeouts;
}
export interface NetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#create Network#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#delete Network#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#update Network#update}
  */
  readonly update?: string;
}

export function networkTimeoutsToTerraform(struct?: NetworkTimeouts | cdktf.IResolvable): any {
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


export function networkTimeoutsToHclTerraform(struct?: NetworkTimeouts | cdktf.IResolvable): any {
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

export class NetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network civo_network}
*/
export class Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "civo_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Network to import
  * @param importFromId The id of the existing Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "civo_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/resources/network civo_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'civo_network',
      terraformGeneratorMetadata: {
        providerName: 'civo',
        providerVersion: '1.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrV4 = config.cidrV4;
    this._id = config.id;
    this._label = config.label;
    this._nameserversV4 = config.nameserversV4;
    this._region = config.region;
    this._vlanAllocationPoolV4End = config.vlanAllocationPoolV4End;
    this._vlanAllocationPoolV4Start = config.vlanAllocationPoolV4Start;
    this._vlanCidrV4 = config.vlanCidrV4;
    this._vlanGatewayIpV4 = config.vlanGatewayIpV4;
    this._vlanId = config.vlanId;
    this._vlanPhysicalInterface = config.vlanPhysicalInterface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_v4 - computed: true, optional: true, required: false
  private _cidrV4?: string; 
  public get cidrV4() {
    return this.getStringAttribute('cidr_v4');
  }
  public set cidrV4(value: string) {
    this._cidrV4 = value;
  }
  public resetCidrV4() {
    this._cidrV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrV4Input() {
    return this._cidrV4;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nameservers_v4 - computed: true, optional: true, required: false
  private _nameserversV4?: string[]; 
  public get nameserversV4() {
    return this.getListAttribute('nameservers_v4');
  }
  public set nameserversV4(value: string[]) {
    this._nameserversV4 = value;
  }
  public resetNameserversV4() {
    this._nameserversV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversV4Input() {
    return this._nameserversV4;
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

  // vlan_allocation_pool_v4_end - computed: false, optional: true, required: false
  private _vlanAllocationPoolV4End?: string; 
  public get vlanAllocationPoolV4End() {
    return this.getStringAttribute('vlan_allocation_pool_v4_end');
  }
  public set vlanAllocationPoolV4End(value: string) {
    this._vlanAllocationPoolV4End = value;
  }
  public resetVlanAllocationPoolV4End() {
    this._vlanAllocationPoolV4End = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAllocationPoolV4EndInput() {
    return this._vlanAllocationPoolV4End;
  }

  // vlan_allocation_pool_v4_start - computed: false, optional: true, required: false
  private _vlanAllocationPoolV4Start?: string; 
  public get vlanAllocationPoolV4Start() {
    return this.getStringAttribute('vlan_allocation_pool_v4_start');
  }
  public set vlanAllocationPoolV4Start(value: string) {
    this._vlanAllocationPoolV4Start = value;
  }
  public resetVlanAllocationPoolV4Start() {
    this._vlanAllocationPoolV4Start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAllocationPoolV4StartInput() {
    return this._vlanAllocationPoolV4Start;
  }

  // vlan_cidr_v4 - computed: false, optional: true, required: false
  private _vlanCidrV4?: string; 
  public get vlanCidrV4() {
    return this.getStringAttribute('vlan_cidr_v4');
  }
  public set vlanCidrV4(value: string) {
    this._vlanCidrV4 = value;
  }
  public resetVlanCidrV4() {
    this._vlanCidrV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanCidrV4Input() {
    return this._vlanCidrV4;
  }

  // vlan_gateway_ip_v4 - computed: false, optional: true, required: false
  private _vlanGatewayIpV4?: string; 
  public get vlanGatewayIpV4() {
    return this.getStringAttribute('vlan_gateway_ip_v4');
  }
  public set vlanGatewayIpV4(value: string) {
    this._vlanGatewayIpV4 = value;
  }
  public resetVlanGatewayIpV4() {
    this._vlanGatewayIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanGatewayIpV4Input() {
    return this._vlanGatewayIpV4;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_physical_interface - computed: false, optional: true, required: false
  private _vlanPhysicalInterface?: string; 
  public get vlanPhysicalInterface() {
    return this.getStringAttribute('vlan_physical_interface');
  }
  public set vlanPhysicalInterface(value: string) {
    this._vlanPhysicalInterface = value;
  }
  public resetVlanPhysicalInterface() {
    this._vlanPhysicalInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPhysicalInterfaceInput() {
    return this._vlanPhysicalInterface;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkTimeouts) {
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
      cidr_v4: cdktf.stringToTerraform(this._cidrV4),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      nameservers_v4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameserversV4),
      region: cdktf.stringToTerraform(this._region),
      vlan_allocation_pool_v4_end: cdktf.stringToTerraform(this._vlanAllocationPoolV4End),
      vlan_allocation_pool_v4_start: cdktf.stringToTerraform(this._vlanAllocationPoolV4Start),
      vlan_cidr_v4: cdktf.stringToTerraform(this._vlanCidrV4),
      vlan_gateway_ip_v4: cdktf.stringToTerraform(this._vlanGatewayIpV4),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_physical_interface: cdktf.stringToTerraform(this._vlanPhysicalInterface),
      timeouts: networkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_v4: {
        value: cdktf.stringToHclTerraform(this._cidrV4),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameservers_v4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameserversV4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_allocation_pool_v4_end: {
        value: cdktf.stringToHclTerraform(this._vlanAllocationPoolV4End),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_allocation_pool_v4_start: {
        value: cdktf.stringToHclTerraform(this._vlanAllocationPoolV4Start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_cidr_v4: {
        value: cdktf.stringToHclTerraform(this._vlanCidrV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_gateway_ip_v4: {
        value: cdktf.stringToHclTerraform(this._vlanGatewayIpV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_physical_interface: {
        value: cdktf.stringToHclTerraform(this._vlanPhysicalInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
