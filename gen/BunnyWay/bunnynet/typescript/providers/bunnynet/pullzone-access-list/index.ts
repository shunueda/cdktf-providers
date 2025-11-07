// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullzoneAccessListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Options: `Allow`, `Block`, `Challenge`, `Log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list#action PullzoneAccessList#action}
  */
  readonly action: string;
  /**
  * Indicated whether the Access List is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list#enabled PullzoneAccessList#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Access List entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list#entries PullzoneAccessList#entries}
  */
  readonly entries: string[];
  /**
  * The Access List name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list#name PullzoneAccessList#name}
  */
  readonly name: string;
  /**
  * The ID of the linked pullzone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list#pullzone PullzoneAccessList#pullzone}
  */
  readonly pullzone: number;
  /**
  * Options: `ASN`, `CIDR`, `Country`, `IP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list#type PullzoneAccessList#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list bunnynet_pullzone_access_list}
*/
export class PullzoneAccessList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone_access_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PullzoneAccessList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PullzoneAccessList to import
  * @param importFromId The id of the existing PullzoneAccessList that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PullzoneAccessList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone_access_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.0/docs/resources/pullzone_access_list bunnynet_pullzone_access_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullzoneAccessListConfig
  */
  public constructor(scope: Construct, id: string, config: PullzoneAccessListConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone_access_list',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.0'
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
    this._enabled = config.enabled;
    this._entries = config.entries;
    this._name = config.name;
    this._pullzone = config.pullzone;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // entries - computed: false, optional: false, required: true
  private _entries?: string[]; 
  public get entries() {
    return cdktf.Fn.tolist(this.getListAttribute('entries'));
  }
  public set entries(value: string[]) {
    this._entries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // pullzone - computed: false, optional: false, required: true
  private _pullzone?: number; 
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }
  public set pullzone(value: number) {
    this._pullzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneInput() {
    return this._pullzone;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entries),
      name: cdktf.stringToTerraform(this._name),
      pullzone: cdktf.numberToTerraform(this._pullzone),
      type: cdktf.stringToTerraform(this._type),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pullzone: {
        value: cdktf.numberToHclTerraform(this._pullzone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
