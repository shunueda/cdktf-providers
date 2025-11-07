// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementGlobalAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment#dependent_domain DataCheckpointManagementGlobalAssignment#dependent_domain}
  */
  readonly dependentDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment#global_domain DataCheckpointManagementGlobalAssignment#global_domain}
  */
  readonly globalDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment#id DataCheckpointManagementGlobalAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment#uid DataCheckpointManagementGlobalAssignment#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment checkpoint_management_global_assignment}
*/
export class DataCheckpointManagementGlobalAssignment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_global_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementGlobalAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementGlobalAssignment to import
  * @param importFromId The id of the existing DataCheckpointManagementGlobalAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementGlobalAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_global_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_global_assignment checkpoint_management_global_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementGlobalAssignmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementGlobalAssignmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_global_assignment',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dependentDomain = config.dependentDomain;
    this._globalDomain = config.globalDomain;
    this._id = config.id;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_status - computed: true, optional: false, required: false
  public get assignmentStatus() {
    return this.getStringAttribute('assignment_status');
  }

  // assignment_up_to_date - computed: true, optional: false, required: false
  private _assignmentUpToDate = new cdktf.StringMap(this, "assignment_up_to_date");
  public get assignmentUpToDate() {
    return this._assignmentUpToDate;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // dependent_domain - computed: false, optional: true, required: false
  private _dependentDomain?: string; 
  public get dependentDomain() {
    return this.getStringAttribute('dependent_domain');
  }
  public set dependentDomain(value: string) {
    this._dependentDomain = value;
  }
  public resetDependentDomain() {
    this._dependentDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependentDomainInput() {
    return this._dependentDomain;
  }

  // global_access_policy - computed: true, optional: false, required: false
  public get globalAccessPolicy() {
    return this.getStringAttribute('global_access_policy');
  }

  // global_domain - computed: false, optional: true, required: false
  private _globalDomain?: string; 
  public get globalDomain() {
    return this.getStringAttribute('global_domain');
  }
  public set globalDomain(value: string) {
    this._globalDomain = value;
  }
  public resetGlobalDomain() {
    this._globalDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalDomainInput() {
    return this._globalDomain;
  }

  // global_threat_prevention_policy - computed: true, optional: false, required: false
  public get globalThreatPreventionPolicy() {
    return this.getStringAttribute('global_threat_prevention_policy');
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

  // manage_protection_actions - computed: true, optional: false, required: false
  public get manageProtectionActions() {
    return this.getBooleanAttribute('manage_protection_actions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependent_domain: cdktf.stringToTerraform(this._dependentDomain),
      global_domain: cdktf.stringToTerraform(this._globalDomain),
      id: cdktf.stringToTerraform(this._id),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependent_domain: {
        value: cdktf.stringToHclTerraform(this._dependentDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_domain: {
        value: cdktf.stringToHclTerraform(this._globalDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
