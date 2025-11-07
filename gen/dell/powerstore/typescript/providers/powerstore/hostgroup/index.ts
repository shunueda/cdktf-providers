// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description for the host group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup#description Hostgroup#description}
  */
  readonly description?: string;
  /**
  * Connectivity type for hosts and host groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup#host_connectivity Hostgroup#host_connectivity}
  */
  readonly hostConnectivity?: string;
  /**
  * The list of host IDs to include in the host group. Conflicts with `host_names`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup#host_ids Hostgroup#host_ids}
  */
  readonly hostIds?: string[];
  /**
  * The list of host names to include in the host group. Conflicts with `host_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup#host_names Hostgroup#host_names}
  */
  readonly hostNames?: string[];
  /**
  * The host group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup#name Hostgroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup powerstore_hostgroup}
*/
export class Hostgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_hostgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hostgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hostgroup to import
  * @param importFromId The id of the existing Hostgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hostgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_hostgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/resources/hostgroup powerstore_hostgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostgroupConfig
  */
  public constructor(scope: Construct, id: string, config: HostgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powerstore_hostgroup',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._hostConnectivity = config.hostConnectivity;
    this._hostIds = config.hostIds;
    this._hostNames = config.hostNames;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host_connectivity - computed: true, optional: true, required: false
  private _hostConnectivity?: string; 
  public get hostConnectivity() {
    return this.getStringAttribute('host_connectivity');
  }
  public set hostConnectivity(value: string) {
    this._hostConnectivity = value;
  }
  public resetHostConnectivity() {
    this._hostConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConnectivityInput() {
    return this._hostConnectivity;
  }

  // host_ids - computed: true, optional: true, required: false
  private _hostIds?: string[]; 
  public get hostIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_ids'));
  }
  public set hostIds(value: string[]) {
    this._hostIds = value;
  }
  public resetHostIds() {
    this._hostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
  }

  // host_names - computed: true, optional: true, required: false
  private _hostNames?: string[]; 
  public get hostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_names'));
  }
  public set hostNames(value: string[]) {
    this._hostNames = value;
  }
  public resetHostNames() {
    this._hostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamesInput() {
    return this._hostNames;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      host_connectivity: cdktf.stringToTerraform(this._hostConnectivity),
      host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostIds),
      host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostNames),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_connectivity: {
        value: cdktf.stringToHclTerraform(this._hostConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostNames),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
