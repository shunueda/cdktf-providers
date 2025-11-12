// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autonomous system number in plain number or `higher 16bits`.`lower 16 bits` (asdot notation) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#as RoutingInstance#as}
  */
  readonly as?: string;
  /**
  * Configure `route-distinguisher` and `vrf-*` options in other resource (like `junos_evpn`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#configure_rd_vrfopts_singly RoutingInstance#configure_rd_vrfopts_singly}
  */
  readonly configureRdVrfoptsSingly?: boolean | cdktf.IResolvable;
  /**
  * Configure `instance-type` option in other resource (like `junos_evpn`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#configure_type_singly RoutingInstance#configure_type_singly}
  */
  readonly configureTypeSingly?: boolean | cdktf.IResolvable;
  /**
  * Text description of routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#description RoutingInstance#description}
  */
  readonly description?: string;
  /**
  * Export policy for instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#instance_export RoutingInstance#instance_export}
  */
  readonly instanceExport?: string[];
  /**
  * Import policy for instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#instance_import RoutingInstance#instance_import}
  */
  readonly instanceImport?: string[];
  /**
  * The name of routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#name RoutingInstance#name}
  */
  readonly name: string;
  /**
  * Configure static remote VXLAN tunnel endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#remote_vtep_list RoutingInstance#remote_vtep_list}
  */
  readonly remoteVtepList?: string[];
  /**
  * Configure static ipv6 remote VXLAN tunnel endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#remote_vtep_v6_list RoutingInstance#remote_vtep_v6_list}
  */
  readonly remoteVtepV6List?: string[];
  /**
  * Route distinguisher for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#route_distinguisher RoutingInstance#route_distinguisher}
  */
  readonly routeDistinguisher?: string;
  /**
  * Router identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#router_id RoutingInstance#router_id}
  */
  readonly routerId?: string;
  /**
  * Type of routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#type RoutingInstance#type}
  */
  readonly type?: string;
  /**
  * Export policy for VRF instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#vrf_export RoutingInstance#vrf_export}
  */
  readonly vrfExport?: string[];
  /**
  * Import policy for VRF instance RIBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#vrf_import RoutingInstance#vrf_import}
  */
  readonly vrfImport?: string[];
  /**
  * Target community to use in import and export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#vrf_target RoutingInstance#vrf_target}
  */
  readonly vrfTarget?: string;
  /**
  * Auto derive import and export target community from BGP AS & L2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#vrf_target_auto RoutingInstance#vrf_target_auto}
  */
  readonly vrfTargetAuto?: boolean | cdktf.IResolvable;
  /**
  * Target community to use when marking routes on export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#vrf_target_export RoutingInstance#vrf_target_export}
  */
  readonly vrfTargetExport?: string;
  /**
  * Target community to use when filtering on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#vrf_target_import RoutingInstance#vrf_target_import}
  */
  readonly vrfTargetImport?: string;
  /**
  * Source layer-3 IFL for VXLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#vtep_source_interface RoutingInstance#vtep_source_interface}
  */
  readonly vtepSourceInterface?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance junos_routing_instance}
*/
export class RoutingInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_routing_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingInstance to import
  * @param importFromId The id of the existing RoutingInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_routing_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/routing_instance junos_routing_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_routing_instance',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._as = config.as;
    this._configureRdVrfoptsSingly = config.configureRdVrfoptsSingly;
    this._configureTypeSingly = config.configureTypeSingly;
    this._description = config.description;
    this._instanceExport = config.instanceExport;
    this._instanceImport = config.instanceImport;
    this._name = config.name;
    this._remoteVtepList = config.remoteVtepList;
    this._remoteVtepV6List = config.remoteVtepV6List;
    this._routeDistinguisher = config.routeDistinguisher;
    this._routerId = config.routerId;
    this._type = config.type;
    this._vrfExport = config.vrfExport;
    this._vrfImport = config.vrfImport;
    this._vrfTarget = config.vrfTarget;
    this._vrfTargetAuto = config.vrfTargetAuto;
    this._vrfTargetExport = config.vrfTargetExport;
    this._vrfTargetImport = config.vrfTargetImport;
    this._vtepSourceInterface = config.vtepSourceInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as - computed: false, optional: true, required: false
  private _as?: string; 
  public get as() {
    return this.getStringAttribute('as');
  }
  public set as(value: string) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
  }

  // configure_rd_vrfopts_singly - computed: false, optional: true, required: false
  private _configureRdVrfoptsSingly?: boolean | cdktf.IResolvable; 
  public get configureRdVrfoptsSingly() {
    return this.getBooleanAttribute('configure_rd_vrfopts_singly');
  }
  public set configureRdVrfoptsSingly(value: boolean | cdktf.IResolvable) {
    this._configureRdVrfoptsSingly = value;
  }
  public resetConfigureRdVrfoptsSingly() {
    this._configureRdVrfoptsSingly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureRdVrfoptsSinglyInput() {
    return this._configureRdVrfoptsSingly;
  }

  // configure_type_singly - computed: false, optional: true, required: false
  private _configureTypeSingly?: boolean | cdktf.IResolvable; 
  public get configureTypeSingly() {
    return this.getBooleanAttribute('configure_type_singly');
  }
  public set configureTypeSingly(value: boolean | cdktf.IResolvable) {
    this._configureTypeSingly = value;
  }
  public resetConfigureTypeSingly() {
    this._configureTypeSingly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureTypeSinglyInput() {
    return this._configureTypeSingly;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_export - computed: false, optional: true, required: false
  private _instanceExport?: string[]; 
  public get instanceExport() {
    return this.getListAttribute('instance_export');
  }
  public set instanceExport(value: string[]) {
    this._instanceExport = value;
  }
  public resetInstanceExport() {
    this._instanceExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceExportInput() {
    return this._instanceExport;
  }

  // instance_import - computed: false, optional: true, required: false
  private _instanceImport?: string[]; 
  public get instanceImport() {
    return this.getListAttribute('instance_import');
  }
  public set instanceImport(value: string[]) {
    this._instanceImport = value;
  }
  public resetInstanceImport() {
    this._instanceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceImportInput() {
    return this._instanceImport;
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

  // remote_vtep_list - computed: false, optional: true, required: false
  private _remoteVtepList?: string[]; 
  public get remoteVtepList() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_vtep_list'));
  }
  public set remoteVtepList(value: string[]) {
    this._remoteVtepList = value;
  }
  public resetRemoteVtepList() {
    this._remoteVtepList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVtepListInput() {
    return this._remoteVtepList;
  }

  // remote_vtep_v6_list - computed: false, optional: true, required: false
  private _remoteVtepV6List?: string[]; 
  public get remoteVtepV6List() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_vtep_v6_list'));
  }
  public set remoteVtepV6List(value: string[]) {
    this._remoteVtepV6List = value;
  }
  public resetRemoteVtepV6List() {
    this._remoteVtepV6List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVtepV6ListInput() {
    return this._remoteVtepV6List;
  }

  // route_distinguisher - computed: false, optional: true, required: false
  private _routeDistinguisher?: string; 
  public get routeDistinguisher() {
    return this.getStringAttribute('route_distinguisher');
  }
  public set routeDistinguisher(value: string) {
    this._routeDistinguisher = value;
  }
  public resetRouteDistinguisher() {
    this._routeDistinguisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistinguisherInput() {
    return this._routeDistinguisher;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // type - computed: true, optional: true, required: false
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

  // vrf_export - computed: false, optional: true, required: false
  private _vrfExport?: string[]; 
  public get vrfExport() {
    return this.getListAttribute('vrf_export');
  }
  public set vrfExport(value: string[]) {
    this._vrfExport = value;
  }
  public resetVrfExport() {
    this._vrfExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfExportInput() {
    return this._vrfExport;
  }

  // vrf_import - computed: false, optional: true, required: false
  private _vrfImport?: string[]; 
  public get vrfImport() {
    return this.getListAttribute('vrf_import');
  }
  public set vrfImport(value: string[]) {
    this._vrfImport = value;
  }
  public resetVrfImport() {
    this._vrfImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfImportInput() {
    return this._vrfImport;
  }

  // vrf_target - computed: false, optional: true, required: false
  private _vrfTarget?: string; 
  public get vrfTarget() {
    return this.getStringAttribute('vrf_target');
  }
  public set vrfTarget(value: string) {
    this._vrfTarget = value;
  }
  public resetVrfTarget() {
    this._vrfTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetInput() {
    return this._vrfTarget;
  }

  // vrf_target_auto - computed: false, optional: true, required: false
  private _vrfTargetAuto?: boolean | cdktf.IResolvable; 
  public get vrfTargetAuto() {
    return this.getBooleanAttribute('vrf_target_auto');
  }
  public set vrfTargetAuto(value: boolean | cdktf.IResolvable) {
    this._vrfTargetAuto = value;
  }
  public resetVrfTargetAuto() {
    this._vrfTargetAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetAutoInput() {
    return this._vrfTargetAuto;
  }

  // vrf_target_export - computed: false, optional: true, required: false
  private _vrfTargetExport?: string; 
  public get vrfTargetExport() {
    return this.getStringAttribute('vrf_target_export');
  }
  public set vrfTargetExport(value: string) {
    this._vrfTargetExport = value;
  }
  public resetVrfTargetExport() {
    this._vrfTargetExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetExportInput() {
    return this._vrfTargetExport;
  }

  // vrf_target_import - computed: false, optional: true, required: false
  private _vrfTargetImport?: string; 
  public get vrfTargetImport() {
    return this.getStringAttribute('vrf_target_import');
  }
  public set vrfTargetImport(value: string) {
    this._vrfTargetImport = value;
  }
  public resetVrfTargetImport() {
    this._vrfTargetImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetImportInput() {
    return this._vrfTargetImport;
  }

  // vtep_source_interface - computed: false, optional: true, required: false
  private _vtepSourceInterface?: string; 
  public get vtepSourceInterface() {
    return this.getStringAttribute('vtep_source_interface');
  }
  public set vtepSourceInterface(value: string) {
    this._vtepSourceInterface = value;
  }
  public resetVtepSourceInterface() {
    this._vtepSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepSourceInterfaceInput() {
    return this._vtepSourceInterface;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as: cdktf.stringToTerraform(this._as),
      configure_rd_vrfopts_singly: cdktf.booleanToTerraform(this._configureRdVrfoptsSingly),
      configure_type_singly: cdktf.booleanToTerraform(this._configureTypeSingly),
      description: cdktf.stringToTerraform(this._description),
      instance_export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceExport),
      instance_import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceImport),
      name: cdktf.stringToTerraform(this._name),
      remote_vtep_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteVtepList),
      remote_vtep_v6_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteVtepV6List),
      route_distinguisher: cdktf.stringToTerraform(this._routeDistinguisher),
      router_id: cdktf.stringToTerraform(this._routerId),
      type: cdktf.stringToTerraform(this._type),
      vrf_export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vrfExport),
      vrf_import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vrfImport),
      vrf_target: cdktf.stringToTerraform(this._vrfTarget),
      vrf_target_auto: cdktf.booleanToTerraform(this._vrfTargetAuto),
      vrf_target_export: cdktf.stringToTerraform(this._vrfTargetExport),
      vrf_target_import: cdktf.stringToTerraform(this._vrfTargetImport),
      vtep_source_interface: cdktf.stringToTerraform(this._vtepSourceInterface),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as: {
        value: cdktf.stringToHclTerraform(this._as),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configure_rd_vrfopts_singly: {
        value: cdktf.booleanToHclTerraform(this._configureRdVrfoptsSingly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configure_type_singly: {
        value: cdktf.booleanToHclTerraform(this._configureTypeSingly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceExport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance_import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceImport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_vtep_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteVtepList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_vtep_v6_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteVtepV6List),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route_distinguisher: {
        value: cdktf.stringToHclTerraform(this._routeDistinguisher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vrfExport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vrf_import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vrfImport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vrf_target: {
        value: cdktf.stringToHclTerraform(this._vrfTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_target_auto: {
        value: cdktf.booleanToHclTerraform(this._vrfTargetAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf_target_export: {
        value: cdktf.stringToHclTerraform(this._vrfTargetExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_target_import: {
        value: cdktf.stringToHclTerraform(this._vrfTargetImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vtep_source_interface: {
        value: cdktf.stringToHclTerraform(this._vtepSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
