// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpvpnV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#export_targets BgpvpnV2#export_targets}
  */
  readonly exportTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#id BgpvpnV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#import_targets BgpvpnV2#import_targets}
  */
  readonly importTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#local_pref BgpvpnV2#local_pref}
  */
  readonly localPref?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#name BgpvpnV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#project_id BgpvpnV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#region BgpvpnV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#route_distinguishers BgpvpnV2#route_distinguishers}
  */
  readonly routeDistinguishers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#route_targets BgpvpnV2#route_targets}
  */
  readonly routeTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#type BgpvpnV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#vni BgpvpnV2#vni}
  */
  readonly vni?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#timeouts BgpvpnV2#timeouts}
  */
  readonly timeouts?: BgpvpnV2Timeouts;
}
export interface BgpvpnV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#create BgpvpnV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#delete BgpvpnV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#update BgpvpnV2#update}
  */
  readonly update?: string;
}

export function bgpvpnV2TimeoutsToTerraform(struct?: BgpvpnV2Timeouts | cdktf.IResolvable): any {
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


export function bgpvpnV2TimeoutsToHclTerraform(struct?: BgpvpnV2Timeouts | cdktf.IResolvable): any {
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

export class BgpvpnV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpvpnV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpvpnV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2 openstack_bgpvpn_v2}
*/
export class BgpvpnV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_bgpvpn_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpvpnV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpvpnV2 to import
  * @param importFromId The id of the existing BgpvpnV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpvpnV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_bgpvpn_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/bgpvpn_v2 openstack_bgpvpn_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpvpnV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: BgpvpnV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'openstack_bgpvpn_v2',
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
    this._exportTargets = config.exportTargets;
    this._id = config.id;
    this._importTargets = config.importTargets;
    this._localPref = config.localPref;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._routeDistinguishers = config.routeDistinguishers;
    this._routeTargets = config.routeTargets;
    this._type = config.type;
    this._vni = config.vni;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_targets - computed: true, optional: true, required: false
  private _exportTargets?: string[]; 
  public get exportTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('export_targets'));
  }
  public set exportTargets(value: string[]) {
    this._exportTargets = value;
  }
  public resetExportTargets() {
    this._exportTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportTargetsInput() {
    return this._exportTargets;
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

  // import_targets - computed: true, optional: true, required: false
  private _importTargets?: string[]; 
  public get importTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('import_targets'));
  }
  public set importTargets(value: string[]) {
    this._importTargets = value;
  }
  public resetImportTargets() {
    this._importTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTargetsInput() {
    return this._importTargets;
  }

  // local_pref - computed: false, optional: true, required: false
  private _localPref?: number; 
  public get localPref() {
    return this.getNumberAttribute('local_pref');
  }
  public set localPref(value: number) {
    this._localPref = value;
  }
  public resetLocalPref() {
    this._localPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPrefInput() {
    return this._localPref;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return cdktf.Fn.tolist(this.getListAttribute('networks'));
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // route_distinguishers - computed: true, optional: true, required: false
  private _routeDistinguishers?: string[]; 
  public get routeDistinguishers() {
    return cdktf.Fn.tolist(this.getListAttribute('route_distinguishers'));
  }
  public set routeDistinguishers(value: string[]) {
    this._routeDistinguishers = value;
  }
  public resetRouteDistinguishers() {
    this._routeDistinguishers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDistinguishersInput() {
    return this._routeDistinguishers;
  }

  // route_targets - computed: true, optional: true, required: false
  private _routeTargets?: string[]; 
  public get routeTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('route_targets'));
  }
  public set routeTargets(value: string[]) {
    this._routeTargets = value;
  }
  public resetRouteTargets() {
    this._routeTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetsInput() {
    return this._routeTargets;
  }

  // routers - computed: true, optional: false, required: false
  public get routers() {
    return cdktf.Fn.tolist(this.getListAttribute('routers'));
  }

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getBooleanAttribute('shared');
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

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BgpvpnV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BgpvpnV2Timeouts) {
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
      export_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exportTargets),
      id: cdktf.stringToTerraform(this._id),
      import_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._importTargets),
      local_pref: cdktf.numberToTerraform(this._localPref),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      route_distinguishers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeDistinguishers),
      route_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTargets),
      type: cdktf.stringToTerraform(this._type),
      vni: cdktf.numberToTerraform(this._vni),
      timeouts: bgpvpnV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exportTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._importTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_pref: {
        value: cdktf.numberToHclTerraform(this._localPref),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_distinguishers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeDistinguishers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTargets),
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
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: bgpvpnV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpvpnV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
