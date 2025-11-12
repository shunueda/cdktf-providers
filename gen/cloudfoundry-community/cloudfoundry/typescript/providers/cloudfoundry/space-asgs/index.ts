// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpaceAsgsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs#id SpaceAsgs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs#running_asgs SpaceAsgs#running_asgs}
  */
  readonly runningAsgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs#space SpaceAsgs#space}
  */
  readonly space: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs#staging_asgs SpaceAsgs#staging_asgs}
  */
  readonly stagingAsgs?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs cloudfoundry_space_asgs}
*/
export class SpaceAsgs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_space_asgs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpaceAsgs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpaceAsgs to import
  * @param importFromId The id of the existing SpaceAsgs that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpaceAsgs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_space_asgs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/space_asgs cloudfoundry_space_asgs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpaceAsgsConfig
  */
  public constructor(scope: Construct, id: string, config: SpaceAsgsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_space_asgs',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1',
        providerVersionConstraint: '0.53.1'
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
    this._runningAsgs = config.runningAsgs;
    this._space = config.space;
    this._stagingAsgs = config.stagingAsgs;
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

  // running_asgs - computed: true, optional: true, required: false
  private _runningAsgs?: string[]; 
  public get runningAsgs() {
    return cdktf.Fn.tolist(this.getListAttribute('running_asgs'));
  }
  public set runningAsgs(value: string[]) {
    this._runningAsgs = value;
  }
  public resetRunningAsgs() {
    this._runningAsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningAsgsInput() {
    return this._runningAsgs;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // staging_asgs - computed: true, optional: true, required: false
  private _stagingAsgs?: string[]; 
  public get stagingAsgs() {
    return cdktf.Fn.tolist(this.getListAttribute('staging_asgs'));
  }
  public set stagingAsgs(value: string[]) {
    this._stagingAsgs = value;
  }
  public resetStagingAsgs() {
    this._stagingAsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingAsgsInput() {
    return this._stagingAsgs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      running_asgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runningAsgs),
      space: cdktf.stringToTerraform(this._space),
      staging_asgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stagingAsgs),
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
      running_asgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runningAsgs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staging_asgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stagingAsgs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
