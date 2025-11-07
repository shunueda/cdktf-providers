// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/routing_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosRoutingInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/routing_instance#name DataJunosRoutingInstance#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/routing_instance junos_routing_instance}
*/
export class DataJunosRoutingInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_routing_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosRoutingInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosRoutingInstance to import
  * @param importFromId The id of the existing DataJunosRoutingInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/routing_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosRoutingInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_routing_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/routing_instance junos_routing_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosRoutingInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataJunosRoutingInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_routing_instance',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as - computed: true, optional: false, required: false
  public get as() {
    return this.getStringAttribute('as');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_export - computed: true, optional: false, required: false
  public get instanceExport() {
    return this.getListAttribute('instance_export');
  }

  // instance_import - computed: true, optional: false, required: false
  public get instanceImport() {
    return this.getListAttribute('instance_import');
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
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

  // remote_vtep_list - computed: true, optional: false, required: false
  public get remoteVtepList() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_vtep_list'));
  }

  // remote_vtep_v6_list - computed: true, optional: false, required: false
  public get remoteVtepV6List() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_vtep_v6_list'));
  }

  // route_distinguisher - computed: true, optional: false, required: false
  public get routeDistinguisher() {
    return this.getStringAttribute('route_distinguisher');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrf_export - computed: true, optional: false, required: false
  public get vrfExport() {
    return this.getListAttribute('vrf_export');
  }

  // vrf_import - computed: true, optional: false, required: false
  public get vrfImport() {
    return this.getListAttribute('vrf_import');
  }

  // vrf_target - computed: true, optional: false, required: false
  public get vrfTarget() {
    return this.getStringAttribute('vrf_target');
  }

  // vrf_target_auto - computed: true, optional: false, required: false
  public get vrfTargetAuto() {
    return this.getBooleanAttribute('vrf_target_auto');
  }

  // vrf_target_export - computed: true, optional: false, required: false
  public get vrfTargetExport() {
    return this.getStringAttribute('vrf_target_export');
  }

  // vrf_target_import - computed: true, optional: false, required: false
  public get vrfTargetImport() {
    return this.getStringAttribute('vrf_target_import');
  }

  // vtep_source_interface - computed: true, optional: false, required: false
  public get vtepSourceInterface() {
    return this.getStringAttribute('vtep_source_interface');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
