// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuaggaBgpRoutemapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set permit for match or deny to negate the rule. Defaults to `"permit"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#action QuaggaBgpRoutemap#action}
  */
  readonly action?: string;
  /**
  * Set the AS Path list IDs to use. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#aspaths QuaggaBgpRoutemap#aspaths}
  */
  readonly aspaths?: string[];
  /**
  * Set the community list IDs to use. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#community_lists QuaggaBgpRoutemap#community_lists}
  */
  readonly communityLists?: string[];
  /**
  * An optional description for this route map. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#description QuaggaBgpRoutemap#description}
  */
  readonly description?: string;
  /**
  * Enable this route map. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#enabled QuaggaBgpRoutemap#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of this route map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#name QuaggaBgpRoutemap#name}
  */
  readonly name: string;
  /**
  * Set the prefix list IDs to use. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#prefix_lists QuaggaBgpRoutemap#prefix_lists}
  */
  readonly prefixLists?: string[];
  /**
  * The Route-map ID between 1 and 65535. Be aware that the sorting will be done under the hood, so when you add an entry between it gets to the right position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#route_map_id QuaggaBgpRoutemap#route_map_id}
  */
  readonly routeMapId: number;
  /**
  * Free text field for your set, please be careful! You can set e.g. `local-preference 300` or `community 1:1` (http://www.nongnu.org/quagga/docs/docs-multi/Route-Map-Set-Command.html#Route-Map-Set-Command). Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#set QuaggaBgpRoutemap#set}
  */
  readonly set?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap opnsense_quagga_bgp_routemap}
*/
export class QuaggaBgpRoutemap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_quagga_bgp_routemap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuaggaBgpRoutemap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuaggaBgpRoutemap to import
  * @param importFromId The id of the existing QuaggaBgpRoutemap that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuaggaBgpRoutemap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_quagga_bgp_routemap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_routemap opnsense_quagga_bgp_routemap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuaggaBgpRoutemapConfig
  */
  public constructor(scope: Construct, id: string, config: QuaggaBgpRoutemapConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_quagga_bgp_routemap',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._aspaths = config.aspaths;
    this._communityLists = config.communityLists;
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._prefixLists = config.prefixLists;
    this._routeMapId = config.routeMapId;
    this._set = config.set;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // aspaths - computed: true, optional: true, required: false
  private _aspaths?: string[]; 
  public get aspaths() {
    return cdktf.Fn.tolist(this.getListAttribute('aspaths'));
  }
  public set aspaths(value: string[]) {
    this._aspaths = value;
  }
  public resetAspaths() {
    this._aspaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspathsInput() {
    return this._aspaths;
  }

  // community_lists - computed: true, optional: true, required: false
  private _communityLists?: string[]; 
  public get communityLists() {
    return cdktf.Fn.tolist(this.getListAttribute('community_lists'));
  }
  public set communityLists(value: string[]) {
    this._communityLists = value;
  }
  public resetCommunityLists() {
    this._communityLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityListsInput() {
    return this._communityLists;
  }

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // prefix_lists - computed: true, optional: true, required: false
  private _prefixLists?: string[]; 
  public get prefixLists() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_lists'));
  }
  public set prefixLists(value: string[]) {
    this._prefixLists = value;
  }
  public resetPrefixLists() {
    this._prefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListsInput() {
    return this._prefixLists;
  }

  // route_map_id - computed: false, optional: false, required: true
  private _routeMapId?: number; 
  public get routeMapId() {
    return this.getNumberAttribute('route_map_id');
  }
  public set routeMapId(value: number) {
    this._routeMapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIdInput() {
    return this._routeMapId;
  }

  // set - computed: true, optional: true, required: false
  private _set?: string; 
  public get set() {
    return this.getStringAttribute('set');
  }
  public set set(value: string) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      aspaths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aspaths),
      community_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._communityLists),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      prefix_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixLists),
      route_map_id: cdktf.numberToTerraform(this._routeMapId),
      set: cdktf.stringToTerraform(this._set),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aspaths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aspaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      community_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._communityLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route_map_id: {
        value: cdktf.numberToHclTerraform(this._routeMapId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set: {
        value: cdktf.stringToHclTerraform(this._set),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
