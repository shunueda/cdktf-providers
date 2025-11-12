// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_assign_global_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAssignGlobalAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_assign_global_assignment#dependent_domains ManagementAssignGlobalAssignment#dependent_domains}
  */
  readonly dependentDomains?: string[];
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_assign_global_assignment#global_domains ManagementAssignGlobalAssignment#global_domains}
  */
  readonly globalDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_assign_global_assignment#id ManagementAssignGlobalAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_assign_global_assignment checkpoint_management_assign_global_assignment}
*/
export class ManagementAssignGlobalAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_assign_global_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAssignGlobalAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAssignGlobalAssignment to import
  * @param importFromId The id of the existing ManagementAssignGlobalAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_assign_global_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAssignGlobalAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_assign_global_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_assign_global_assignment checkpoint_management_assign_global_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAssignGlobalAssignmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementAssignGlobalAssignmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_assign_global_assignment',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dependentDomains = config.dependentDomains;
    this._globalDomains = config.globalDomains;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dependent_domains - computed: false, optional: true, required: false
  private _dependentDomains?: string[]; 
  public get dependentDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('dependent_domains'));
  }
  public set dependentDomains(value: string[]) {
    this._dependentDomains = value;
  }
  public resetDependentDomains() {
    this._dependentDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependentDomainsInput() {
    return this._dependentDomains;
  }

  // global_domains - computed: false, optional: true, required: false
  private _globalDomains?: string[]; 
  public get globalDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('global_domains'));
  }
  public set globalDomains(value: string[]) {
    this._globalDomains = value;
  }
  public resetGlobalDomains() {
    this._globalDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDomainsInput() {
    return this._globalDomains;
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

  // tasks - computed: true, optional: false, required: false
  public get tasks() {
    return cdktf.Fn.tolist(this.getListAttribute('tasks'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependent_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependentDomains),
      global_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalDomains),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependent_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependentDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      global_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalDomains),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
