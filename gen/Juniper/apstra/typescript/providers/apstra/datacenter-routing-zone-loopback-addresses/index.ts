// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterRoutingZoneLoopbackAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses#blueprint_id DatacenterRoutingZoneLoopbackAddresses#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Map of Loopback IPv4 and IPv6 addresses, keyed by System (switch) Node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses#loopbacks DatacenterRoutingZoneLoopbackAddresses#loopbacks}
  */
  readonly loopbacks: { [key: string]: DatacenterRoutingZoneLoopbackAddressesLoopbacks } | cdktf.IResolvable;
  /**
  * Routing Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses#routing_zone_id DatacenterRoutingZoneLoopbackAddresses#routing_zone_id}
  */
  readonly routingZoneId: string;
}
export interface DatacenterRoutingZoneLoopbackAddressesLoopbacks {
  /**
  * The IPv4 address to be assigned within the Routing Zone, in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses#ipv4_addr DatacenterRoutingZoneLoopbackAddresses#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 address to be assigned within the Routing Zone, in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses#ipv6_addr DatacenterRoutingZoneLoopbackAddresses#ipv6_addr}
  */
  readonly ipv6Addr?: string;
}

export function datacenterRoutingZoneLoopbackAddressesLoopbacksToTerraform(struct?: DatacenterRoutingZoneLoopbackAddressesLoopbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
  }
}


export function datacenterRoutingZoneLoopbackAddressesLoopbacksToHclTerraform(struct?: DatacenterRoutingZoneLoopbackAddressesLoopbacks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatacenterRoutingZoneLoopbackAddressesLoopbacksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DatacenterRoutingZoneLoopbackAddressesLoopbacks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatacenterRoutingZoneLoopbackAddressesLoopbacks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }
}

export class DatacenterRoutingZoneLoopbackAddressesLoopbacksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DatacenterRoutingZoneLoopbackAddressesLoopbacks } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DatacenterRoutingZoneLoopbackAddressesLoopbacksOutputReference {
    return new DatacenterRoutingZoneLoopbackAddressesLoopbacksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses apstra_datacenter_routing_zone_loopback_addresses}
*/
export class DatacenterRoutingZoneLoopbackAddresses extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_routing_zone_loopback_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterRoutingZoneLoopbackAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterRoutingZoneLoopbackAddresses to import
  * @param importFromId The id of the existing DatacenterRoutingZoneLoopbackAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterRoutingZoneLoopbackAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_routing_zone_loopback_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/datacenter_routing_zone_loopback_addresses apstra_datacenter_routing_zone_loopback_addresses} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterRoutingZoneLoopbackAddressesConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterRoutingZoneLoopbackAddressesConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_routing_zone_loopback_addresses',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._loopbacks.internalValue = config.loopbacks;
    this._routingZoneId = config.routingZoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // loopback_ids - computed: true, optional: false, required: false
  private _loopbackIds = new cdktf.StringMap(this, "loopback_ids");
  public get loopbackIds() {
    return this._loopbackIds;
  }

  // loopbacks - computed: false, optional: false, required: true
  private _loopbacks = new DatacenterRoutingZoneLoopbackAddressesLoopbacksMap(this, "loopbacks");
  public get loopbacks() {
    return this._loopbacks;
  }
  public putLoopbacks(value: { [key: string]: DatacenterRoutingZoneLoopbackAddressesLoopbacks } | cdktf.IResolvable) {
    this._loopbacks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbacksInput() {
    return this._loopbacks.internalValue;
  }

  // routing_zone_id - computed: false, optional: false, required: true
  private _routingZoneId?: string; 
  public get routingZoneId() {
    return this.getStringAttribute('routing_zone_id');
  }
  public set routingZoneId(value: string) {
    this._routingZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingZoneIdInput() {
    return this._routingZoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      loopbacks: cdktf.hashMapper(datacenterRoutingZoneLoopbackAddressesLoopbacksToTerraform)(this._loopbacks.internalValue),
      routing_zone_id: cdktf.stringToTerraform(this._routingZoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopbacks: {
        value: cdktf.hashMapperHcl(datacenterRoutingZoneLoopbackAddressesLoopbacksToHclTerraform)(this._loopbacks.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "DatacenterRoutingZoneLoopbackAddressesLoopbacksMap",
      },
      routing_zone_id: {
        value: cdktf.stringToHclTerraform(this._routingZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
