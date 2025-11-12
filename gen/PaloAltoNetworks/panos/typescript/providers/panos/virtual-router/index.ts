// generated from terraform resource schema

import { VirtualRouterAdministrativeDistances, 
virtualRouterAdministrativeDistancesToTerraform, 
virtualRouterAdministrativeDistancesToHclTerraform, 
VirtualRouterAdministrativeDistancesOutputReference, 
VirtualRouterEcmp, 
virtualRouterEcmpToTerraform, 
virtualRouterEcmpToHclTerraform, 
VirtualRouterEcmpOutputReference, 
VirtualRouterLocation, 
virtualRouterLocationToTerraform, 
virtualRouterLocationToHclTerraform, 
VirtualRouterLocationOutputReference, 
VirtualRouterMulticast, 
virtualRouterMulticastToTerraform, 
virtualRouterMulticastToHclTerraform, 
VirtualRouterMulticastOutputReference, 
VirtualRouterProtocol, 
virtualRouterProtocolToTerraform, 
virtualRouterProtocolToHclTerraform, 
VirtualRouterProtocolOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VirtualRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#administrative_distances VirtualRouter#administrative_distances}
  */
  readonly administrativeDistances?: VirtualRouterAdministrativeDistances;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#ecmp VirtualRouter#ecmp}
  */
  readonly ecmp?: VirtualRouterEcmp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#interfaces VirtualRouter#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#location VirtualRouter#location}
  */
  readonly location: VirtualRouterLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#multicast VirtualRouter#multicast}
  */
  readonly multicast?: VirtualRouterMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#name VirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#protocol VirtualRouter#protocol}
  */
  readonly protocol?: VirtualRouterProtocol;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router panos_virtual_router}
*/
export class VirtualRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_virtual_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualRouter to import
  * @param importFromId The id of the existing VirtualRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_virtual_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router panos_virtual_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualRouterConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_virtual_router',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5',
        providerVersionConstraint: '2.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrativeDistances.internalValue = config.administrativeDistances;
    this._ecmp.internalValue = config.ecmp;
    this._interfaces = config.interfaces;
    this._location.internalValue = config.location;
    this._multicast.internalValue = config.multicast;
    this._name = config.name;
    this._protocol.internalValue = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrative_distances - computed: false, optional: true, required: false
  private _administrativeDistances = new VirtualRouterAdministrativeDistancesOutputReference(this, "administrative_distances");
  public get administrativeDistances() {
    return this._administrativeDistances;
  }
  public putAdministrativeDistances(value: VirtualRouterAdministrativeDistances) {
    this._administrativeDistances.internalValue = value;
  }
  public resetAdministrativeDistances() {
    this._administrativeDistances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistancesInput() {
    return this._administrativeDistances.internalValue;
  }

  // ecmp - computed: false, optional: true, required: false
  private _ecmp = new VirtualRouterEcmpOutputReference(this, "ecmp");
  public get ecmp() {
    return this._ecmp;
  }
  public putEcmp(value: VirtualRouterEcmp) {
    this._ecmp.internalValue = value;
  }
  public resetEcmp() {
    this._ecmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpInput() {
    return this._ecmp.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return this.getListAttribute('interfaces');
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // location - computed: false, optional: false, required: true
  private _location = new VirtualRouterLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: VirtualRouterLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new VirtualRouterMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: VirtualRouterMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new VirtualRouterProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: VirtualRouterProtocol) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrative_distances: virtualRouterAdministrativeDistancesToTerraform(this._administrativeDistances.internalValue),
      ecmp: virtualRouterEcmpToTerraform(this._ecmp.internalValue),
      interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaces),
      location: virtualRouterLocationToTerraform(this._location.internalValue),
      multicast: virtualRouterMulticastToTerraform(this._multicast.internalValue),
      name: cdktf.stringToTerraform(this._name),
      protocol: virtualRouterProtocolToTerraform(this._protocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrative_distances: {
        value: virtualRouterAdministrativeDistancesToHclTerraform(this._administrativeDistances.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterAdministrativeDistances",
      },
      ecmp: {
        value: virtualRouterEcmpToHclTerraform(this._ecmp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterEcmp",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: virtualRouterLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterLocation",
      },
      multicast: {
        value: virtualRouterMulticastToHclTerraform(this._multicast.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterMulticast",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: virtualRouterProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterProtocol",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
