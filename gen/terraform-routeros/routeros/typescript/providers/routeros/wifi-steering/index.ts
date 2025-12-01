// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiSteeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#___path___ WifiSteering#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#comment WifiSteering#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#disabled WifiSteering#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#id WifiSteering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the steering profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#name WifiSteering#name}
  */
  readonly name: string;
  /**
  * Neighbor group of potential roaming candidates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#neighbor_group WifiSteering#neighbor_group}
  */
  readonly neighborGroup?: string[];
  /**
  * An option to enable sending 802.11k neighbor reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#rrm WifiSteering#rrm}
  */
  readonly rrm?: boolean | cdktf.IResolvable;
  /**
  * An option to enable sending 802.11v BSS transition management requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#wnm WifiSteering#wnm}
  */
  readonly wnm?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering routeros_wifi_steering}
*/
export class WifiSteering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_steering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiSteering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiSteering to import
  * @param importFromId The id of the existing WifiSteering that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiSteering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_steering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/wifi_steering routeros_wifi_steering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiSteeringConfig
  */
  public constructor(scope: Construct, id: string, config: WifiSteeringConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_steering',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._name = config.name;
    this._neighborGroup = config.neighborGroup;
    this._rrm = config.rrm;
    this._wnm = config.wnm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // neighbor_group - computed: false, optional: true, required: false
  private _neighborGroup?: string[]; 
  public get neighborGroup() {
    return this.getListAttribute('neighbor_group');
  }
  public set neighborGroup(value: string[]) {
    this._neighborGroup = value;
  }
  public resetNeighborGroup() {
    this._neighborGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborGroupInput() {
    return this._neighborGroup;
  }

  // rrm - computed: false, optional: true, required: false
  private _rrm?: boolean | cdktf.IResolvable; 
  public get rrm() {
    return this.getBooleanAttribute('rrm');
  }
  public set rrm(value: boolean | cdktf.IResolvable) {
    this._rrm = value;
  }
  public resetRrm() {
    this._rrm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrmInput() {
    return this._rrm;
  }

  // wnm - computed: false, optional: true, required: false
  private _wnm?: boolean | cdktf.IResolvable; 
  public get wnm() {
    return this.getBooleanAttribute('wnm');
  }
  public set wnm(value: boolean | cdktf.IResolvable) {
    this._wnm = value;
  }
  public resetWnm() {
    this._wnm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wnmInput() {
    return this._wnm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      neighbor_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._neighborGroup),
      rrm: cdktf.booleanToTerraform(this._rrm),
      wnm: cdktf.booleanToTerraform(this._wnm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      neighbor_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._neighborGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rrm: {
        value: cdktf.booleanToHclTerraform(this._rrm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wnm: {
        value: cdktf.booleanToHclTerraform(this._wnm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
