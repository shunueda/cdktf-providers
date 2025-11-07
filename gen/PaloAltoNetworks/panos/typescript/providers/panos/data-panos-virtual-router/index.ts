// generated from terraform resource schema

import { DataPanosVirtualRouterAdministrativeDistances, 
dataPanosVirtualRouterAdministrativeDistancesToTerraform, 
dataPanosVirtualRouterAdministrativeDistancesToHclTerraform, 
DataPanosVirtualRouterAdministrativeDistancesOutputReference, 
DataPanosVirtualRouterEcmp, 
dataPanosVirtualRouterEcmpToTerraform, 
dataPanosVirtualRouterEcmpToHclTerraform, 
DataPanosVirtualRouterEcmpOutputReference, 
DataPanosVirtualRouterLocation, 
dataPanosVirtualRouterLocationToTerraform, 
dataPanosVirtualRouterLocationToHclTerraform, 
DataPanosVirtualRouterLocationOutputReference, 
DataPanosVirtualRouterMulticast, 
dataPanosVirtualRouterMulticastToTerraform, 
dataPanosVirtualRouterMulticastToHclTerraform, 
DataPanosVirtualRouterMulticastOutputReference, 
DataPanosVirtualRouterProtocol, 
dataPanosVirtualRouterProtocolToTerraform, 
dataPanosVirtualRouterProtocolToHclTerraform, 
DataPanosVirtualRouterProtocolOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataPanosVirtualRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#administrative_distances DataPanosVirtualRouter#administrative_distances}
  */
  readonly administrativeDistances?: DataPanosVirtualRouterAdministrativeDistances;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#ecmp DataPanosVirtualRouter#ecmp}
  */
  readonly ecmp?: DataPanosVirtualRouterEcmp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#interfaces DataPanosVirtualRouter#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#location DataPanosVirtualRouter#location}
  */
  readonly location: DataPanosVirtualRouterLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#multicast DataPanosVirtualRouter#multicast}
  */
  readonly multicast?: DataPanosVirtualRouterMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#name DataPanosVirtualRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#protocol DataPanosVirtualRouter#protocol}
  */
  readonly protocol?: DataPanosVirtualRouterProtocol;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router panos_virtual_router}
*/
export class DataPanosVirtualRouter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_virtual_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosVirtualRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosVirtualRouter to import
  * @param importFromId The id of the existing DataPanosVirtualRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosVirtualRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_virtual_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/virtual_router panos_virtual_router} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosVirtualRouterConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosVirtualRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_virtual_router',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
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

  // administrative_distances - computed: true, optional: true, required: false
  private _administrativeDistances = new DataPanosVirtualRouterAdministrativeDistancesOutputReference(this, "administrative_distances");
  public get administrativeDistances() {
    return this._administrativeDistances;
  }
  public putAdministrativeDistances(value: DataPanosVirtualRouterAdministrativeDistances) {
    this._administrativeDistances.internalValue = value;
  }
  public resetAdministrativeDistances() {
    this._administrativeDistances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistancesInput() {
    return this._administrativeDistances.internalValue;
  }

  // ecmp - computed: true, optional: true, required: false
  private _ecmp = new DataPanosVirtualRouterEcmpOutputReference(this, "ecmp");
  public get ecmp() {
    return this._ecmp;
  }
  public putEcmp(value: DataPanosVirtualRouterEcmp) {
    this._ecmp.internalValue = value;
  }
  public resetEcmp() {
    this._ecmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpInput() {
    return this._ecmp.internalValue;
  }

  // interfaces - computed: true, optional: true, required: false
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
  private _location = new DataPanosVirtualRouterLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosVirtualRouterLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // multicast - computed: true, optional: true, required: false
  private _multicast = new DataPanosVirtualRouterMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: DataPanosVirtualRouterMulticast) {
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

  // protocol - computed: true, optional: true, required: false
  private _protocol = new DataPanosVirtualRouterProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DataPanosVirtualRouterProtocol) {
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
      administrative_distances: dataPanosVirtualRouterAdministrativeDistancesToTerraform(this._administrativeDistances.internalValue),
      ecmp: dataPanosVirtualRouterEcmpToTerraform(this._ecmp.internalValue),
      interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaces),
      location: dataPanosVirtualRouterLocationToTerraform(this._location.internalValue),
      multicast: dataPanosVirtualRouterMulticastToTerraform(this._multicast.internalValue),
      name: cdktf.stringToTerraform(this._name),
      protocol: dataPanosVirtualRouterProtocolToTerraform(this._protocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrative_distances: {
        value: dataPanosVirtualRouterAdministrativeDistancesToHclTerraform(this._administrativeDistances.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterAdministrativeDistances",
      },
      ecmp: {
        value: dataPanosVirtualRouterEcmpToHclTerraform(this._ecmp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterEcmp",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: dataPanosVirtualRouterLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterLocation",
      },
      multicast: {
        value: dataPanosVirtualRouterMulticastToHclTerraform(this._multicast.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterMulticast",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: dataPanosVirtualRouterProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterProtocol",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
