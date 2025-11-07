// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatacenterInterconnectDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain#blueprint_id DatacenterInterconnectDomain#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Each site requires a unique site id iESI at the MAC-VRF level. This can be auto-derived or manually set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain#esi_mac DatacenterInterconnectDomain#esi_mac}
  */
  readonly esiMac?: string;
  /**
  * Name displayed in the Apstra web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain#name DatacenterInterconnectDomain#name}
  */
  readonly name: string;
  /**
  * All interconnect gateways MUST use the same Interconnect Route Target (iRT).  The iRT is an additional unique RT for the interconnect domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain#route_target DatacenterInterconnectDomain#route_target}
  */
  readonly routeTarget: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain apstra_datacenter_interconnect_domain}
*/
export class DatacenterInterconnectDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_interconnect_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatacenterInterconnectDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatacenterInterconnectDomain to import
  * @param importFromId The id of the existing DatacenterInterconnectDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatacenterInterconnectDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_interconnect_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/resources/datacenter_interconnect_domain apstra_datacenter_interconnect_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatacenterInterconnectDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DatacenterInterconnectDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_interconnect_domain',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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
    this._esiMac = config.esiMac;
    this._name = config.name;
    this._routeTarget = config.routeTarget;
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

  // esi_mac - computed: true, optional: true, required: false
  private _esiMac?: string; 
  public get esiMac() {
    return this.getStringAttribute('esi_mac');
  }
  public set esiMac(value: string) {
    this._esiMac = value;
  }
  public resetEsiMac() {
    this._esiMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esiMacInput() {
    return this._esiMac;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // route_target - computed: false, optional: false, required: true
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      esi_mac: cdktf.stringToTerraform(this._esiMac),
      name: cdktf.stringToTerraform(this._name),
      route_target: cdktf.stringToTerraform(this._routeTarget),
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
      esi_mac: {
        value: cdktf.stringToHclTerraform(this._esiMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_target: {
        value: cdktf.stringToHclTerraform(this._routeTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
