// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalReservedIpBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * the size of the network to reserve from an existing vrf ip_range. `cidr` can only be specified with `vrf_id`. Minimum range is 22-29, with 30-31 supported and necessary for virtual-circuits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#cidr MetalReservedIpBlock#cidr}
  */
  readonly cidr?: number;
  /**
  * Custom Data is an arbitrary object (submitted in Terraform as serialized JSON) to assign to the IP Reservation. This may be helpful for self-managed IPAM. The object must be valid JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#custom_data MetalReservedIpBlock#custom_data}
  */
  readonly customData?: string;
  /**
  * Arbitrary description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#description MetalReservedIpBlock#description}
  */
  readonly description?: string;
  /**
  * Facility where to allocate the public IP address block, makes sense only for type==public_ipv4, must be empty for type==global_ipv4, conflicts with metro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#facility MetalReservedIpBlock#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#id MetalReservedIpBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metro where to allocate the public IP address block, makes sense only for type==public_ipv4, must be empty for type==global_ipv4, conflicts with facility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#metro MetalReservedIpBlock#metro}
  */
  readonly metro?: string;
  /**
  * an unreserved network address from an existing vrf ip_range. `network` can only be specified with vrf_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#network MetalReservedIpBlock#network}
  */
  readonly network?: string;
  /**
  * The metal project ID where to allocate the address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#project_id MetalReservedIpBlock#project_id}
  */
  readonly projectId: string;
  /**
  * The number of allocated /32 addresses, a power of 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#quantity MetalReservedIpBlock#quantity}
  */
  readonly quantity?: number;
  /**
  * Tags attached to the reserved block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#tags MetalReservedIpBlock#tags}
  */
  readonly tags?: string[];
  /**
  * Either global_ipv4, public_ipv4, or vrf. Defaults to public_ipv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#type MetalReservedIpBlock#type}
  */
  readonly type?: string;
  /**
  * VRF ID for type=vrf reservations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#vrf_id MetalReservedIpBlock#vrf_id}
  */
  readonly vrfId?: string;
  /**
  * Wait for the IP reservation block to reach a desired state on resource creation. One of: `pending`, `created`. The `created` state is default and recommended if the addresses are needed within the configuration. An error will be returned if a timeout or the `denied` state is encountered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#wait_for_state MetalReservedIpBlock#wait_for_state}
  */
  readonly waitForState?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#timeouts MetalReservedIpBlock#timeouts}
  */
  readonly timeouts?: MetalReservedIpBlockTimeouts;
}
export interface MetalReservedIpBlockTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#create MetalReservedIpBlock#create}
  */
  readonly create?: string;
}

export function metalReservedIpBlockTimeoutsToTerraform(struct?: MetalReservedIpBlockTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function metalReservedIpBlockTimeoutsToHclTerraform(struct?: MetalReservedIpBlockTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetalReservedIpBlockTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetalReservedIpBlockTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetalReservedIpBlockTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block equinix_metal_reserved_ip_block}
*/
export class MetalReservedIpBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_reserved_ip_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalReservedIpBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalReservedIpBlock to import
  * @param importFromId The id of the existing MetalReservedIpBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalReservedIpBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_reserved_ip_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_reserved_ip_block equinix_metal_reserved_ip_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalReservedIpBlockConfig
  */
  public constructor(scope: Construct, id: string, config: MetalReservedIpBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_reserved_ip_block',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._customData = config.customData;
    this._description = config.description;
    this._facility = config.facility;
    this._id = config.id;
    this._metro = config.metro;
    this._network = config.network;
    this._projectId = config.projectId;
    this._quantity = config.quantity;
    this._tags = config.tags;
    this._type = config.type;
    this._vrfId = config.vrfId;
    this._waitForState = config.waitForState;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getNumberAttribute('address_family');
  }

  // cidr - computed: true, optional: true, required: false
  private _cidr?: number; 
  public get cidr() {
    return this.getNumberAttribute('cidr');
  }
  public set cidr(value: number) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_notation - computed: true, optional: false, required: false
  public get cidrNotation() {
    return this.getStringAttribute('cidr_notation');
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
  }

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

  // facility - computed: false, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // global - computed: true, optional: false, required: false
  public get global() {
    return this.getBooleanAttribute('global');
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

  // manageable - computed: true, optional: false, required: false
  public get manageable() {
    return this.getBooleanAttribute('manageable');
  }

  // management - computed: true, optional: false, required: false
  public get management() {
    return this.getBooleanAttribute('management');
  }

  // metro - computed: false, optional: true, required: false
  private _metro?: string; 
  public get metro() {
    return this.getStringAttribute('metro');
  }
  public set metro(value: string) {
    this._metro = value;
  }
  public resetMetro() {
    this._metro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metroInput() {
    return this._metro;
  }

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // quantity - computed: true, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: string; 
  public get vrfId() {
    return this.getStringAttribute('vrf_id');
  }
  public set vrfId(value: string) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // wait_for_state - computed: false, optional: true, required: false
  private _waitForState?: string; 
  public get waitForState() {
    return this.getStringAttribute('wait_for_state');
  }
  public set waitForState(value: string) {
    this._waitForState = value;
  }
  public resetWaitForState() {
    this._waitForState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForStateInput() {
    return this._waitForState;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MetalReservedIpBlockTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MetalReservedIpBlockTimeouts) {
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
      cidr: cdktf.numberToTerraform(this._cidr),
      custom_data: cdktf.stringToTerraform(this._customData),
      description: cdktf.stringToTerraform(this._description),
      facility: cdktf.stringToTerraform(this._facility),
      id: cdktf.stringToTerraform(this._id),
      metro: cdktf.stringToTerraform(this._metro),
      network: cdktf.stringToTerraform(this._network),
      project_id: cdktf.stringToTerraform(this._projectId),
      quantity: cdktf.numberToTerraform(this._quantity),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      vrf_id: cdktf.stringToTerraform(this._vrfId),
      wait_for_state: cdktf.stringToTerraform(this._waitForState),
      timeouts: metalReservedIpBlockTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.numberToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_data: {
        value: cdktf.stringToHclTerraform(this._customData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facility: {
        value: cdktf.stringToHclTerraform(this._facility),
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
      metro: {
        value: cdktf.stringToHclTerraform(this._metro),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quantity: {
        value: cdktf.numberToHclTerraform(this._quantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_id: {
        value: cdktf.stringToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_state: {
        value: cdktf.stringToHclTerraform(this._waitForState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: metalReservedIpBlockTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetalReservedIpBlockTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
