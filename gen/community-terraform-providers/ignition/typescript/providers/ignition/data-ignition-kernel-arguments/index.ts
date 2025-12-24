// https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/kernel_arguments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionKernelArgumentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/kernel_arguments#id DataIgnitionKernelArguments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/kernel_arguments#shouldexist DataIgnitionKernelArguments#shouldexist}
  */
  readonly shouldexist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/kernel_arguments#shouldnotexist DataIgnitionKernelArguments#shouldnotexist}
  */
  readonly shouldnotexist?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/kernel_arguments ignition_kernel_arguments}
*/
export class DataIgnitionKernelArguments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_kernel_arguments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionKernelArguments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionKernelArguments to import
  * @param importFromId The id of the existing DataIgnitionKernelArguments that should be imported. Refer to the {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/kernel_arguments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionKernelArguments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_kernel_arguments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/kernel_arguments ignition_kernel_arguments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionKernelArgumentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionKernelArgumentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ignition_kernel_arguments',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._shouldexist = config.shouldexist;
    this._shouldnotexist = config.shouldnotexist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // shouldexist - computed: false, optional: true, required: false
  private _shouldexist?: string[]; 
  public get shouldexist() {
    return this.getListAttribute('shouldexist');
  }
  public set shouldexist(value: string[]) {
    this._shouldexist = value;
  }
  public resetShouldexist() {
    this._shouldexist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldexistInput() {
    return this._shouldexist;
  }

  // shouldnotexist - computed: false, optional: true, required: false
  private _shouldnotexist?: string[]; 
  public get shouldnotexist() {
    return this.getListAttribute('shouldnotexist');
  }
  public set shouldnotexist(value: string[]) {
    this._shouldnotexist = value;
  }
  public resetShouldnotexist() {
    this._shouldnotexist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldnotexistInput() {
    return this._shouldnotexist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      shouldexist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shouldexist),
      shouldnotexist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shouldnotexist),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shouldexist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shouldexist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shouldnotexist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shouldnotexist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
