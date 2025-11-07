// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementGlobalAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#dependent_domain ManagementGlobalAssignment#dependent_domain}
  */
  readonly dependentDomain?: string;
  /**
  * Global domain access policy that is assigned to a dependent domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#global_access_policy ManagementGlobalAssignment#global_access_policy}
  */
  readonly globalAccessPolicy?: string;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#global_domain ManagementGlobalAssignment#global_domain}
  */
  readonly globalDomain?: string;
  /**
  * Global domain threat prevention policy that is assigned to a dependent domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#global_threat_prevention_policy ManagementGlobalAssignment#global_threat_prevention_policy}
  */
  readonly globalThreatPreventionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#id ManagementGlobalAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#ignore_errors ManagementGlobalAssignment#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#ignore_warnings ManagementGlobalAssignment#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#manage_protection_actions ManagementGlobalAssignment#manage_protection_actions}
  */
  readonly manageProtectionActions?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment checkpoint_management_global_assignment}
*/
export class ManagementGlobalAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_global_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementGlobalAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementGlobalAssignment to import
  * @param importFromId The id of the existing ManagementGlobalAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementGlobalAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_global_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_global_assignment checkpoint_management_global_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementGlobalAssignmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementGlobalAssignmentConfig = {}) {
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
    this._globalAccessPolicy = config.globalAccessPolicy;
    this._globalDomain = config.globalDomain;
    this._globalThreatPreventionPolicy = config.globalThreatPreventionPolicy;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._manageProtectionActions = config.manageProtectionActions;
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

  // global_access_policy - computed: false, optional: true, required: false
  private _globalAccessPolicy?: string; 
  public get globalAccessPolicy() {
    return this.getStringAttribute('global_access_policy');
  }
  public set globalAccessPolicy(value: string) {
    this._globalAccessPolicy = value;
  }
  public resetGlobalAccessPolicy() {
    this._globalAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAccessPolicyInput() {
    return this._globalAccessPolicy;
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

  // global_threat_prevention_policy - computed: false, optional: true, required: false
  private _globalThreatPreventionPolicy?: string; 
  public get globalThreatPreventionPolicy() {
    return this.getStringAttribute('global_threat_prevention_policy');
  }
  public set globalThreatPreventionPolicy(value: string) {
    this._globalThreatPreventionPolicy = value;
  }
  public resetGlobalThreatPreventionPolicy() {
    this._globalThreatPreventionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThreatPreventionPolicyInput() {
    return this._globalThreatPreventionPolicy;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // manage_protection_actions - computed: false, optional: true, required: false
  private _manageProtectionActions?: boolean | cdktf.IResolvable; 
  public get manageProtectionActions() {
    return this.getBooleanAttribute('manage_protection_actions');
  }
  public set manageProtectionActions(value: boolean | cdktf.IResolvable) {
    this._manageProtectionActions = value;
  }
  public resetManageProtectionActions() {
    this._manageProtectionActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageProtectionActionsInput() {
    return this._manageProtectionActions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependent_domain: cdktf.stringToTerraform(this._dependentDomain),
      global_access_policy: cdktf.stringToTerraform(this._globalAccessPolicy),
      global_domain: cdktf.stringToTerraform(this._globalDomain),
      global_threat_prevention_policy: cdktf.stringToTerraform(this._globalThreatPreventionPolicy),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      manage_protection_actions: cdktf.booleanToTerraform(this._manageProtectionActions),
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
      global_access_policy: {
        value: cdktf.stringToHclTerraform(this._globalAccessPolicy),
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
      global_threat_prevention_policy: {
        value: cdktf.stringToHclTerraform(this._globalThreatPreventionPolicy),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_protection_actions: {
        value: cdktf.booleanToHclTerraform(this._manageProtectionActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
