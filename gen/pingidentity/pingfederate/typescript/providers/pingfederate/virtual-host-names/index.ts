// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/virtual_host_names
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualHostNamesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of virtual host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/virtual_host_names#virtual_host_names VirtualHostNames#virtual_host_names}
  */
  readonly virtualHostNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/virtual_host_names pingfederate_virtual_host_names}
*/
export class VirtualHostNames extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_virtual_host_names";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualHostNames resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualHostNames to import
  * @param importFromId The id of the existing VirtualHostNames that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/virtual_host_names#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualHostNames to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_virtual_host_names", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/virtual_host_names pingfederate_virtual_host_names} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualHostNamesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualHostNamesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_virtual_host_names',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._virtualHostNames = config.virtualHostNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // virtual_host_names - computed: true, optional: true, required: false
  private _virtualHostNames?: string[]; 
  public get virtualHostNames() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_host_names'));
  }
  public set virtualHostNames(value: string[]) {
    this._virtualHostNames = value;
  }
  public resetVirtualHostNames() {
    this._virtualHostNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostNamesInput() {
    return this._virtualHostNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      virtual_host_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualHostNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      virtual_host_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualHostNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
