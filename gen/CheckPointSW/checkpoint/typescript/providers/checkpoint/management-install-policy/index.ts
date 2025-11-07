// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementInstallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to be true in order to install the Access Control policy. By default, the value is true if Access Control policy is enabled on the input policy package, otherwise false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#access ManagementInstallPolicy#access}
  */
  readonly access?: boolean | cdktf.IResolvable;
  /**
  * Set to be true in order to install the Desktop Security policy. By default, the value is true if desktop security policy is enabled on the input policy package, otherwise false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#desktop_security ManagementInstallPolicy#desktop_security}
  */
  readonly desktopSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#id ManagementInstallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Install policy ignoring policy mismatch warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#ignore_warnings ManagementInstallPolicy#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Relevant for the gateway clusters. If true, the policy is installed on all the cluster members. If the installation on a cluster member fails, don't install on that cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#install_on_all_cluster_members_or_fail ManagementInstallPolicy#install_on_all_cluster_members_or_fail}
  */
  readonly installOnAllClusterMembersOrFail?: boolean | cdktf.IResolvable;
  /**
  * The name of the Policy Package to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#policy_package ManagementInstallPolicy#policy_package}
  */
  readonly policyPackage: string;
  /**
  * If true, prepares the policy for the installation, but doesn't install it on an installation target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#prepare_only ManagementInstallPolicy#prepare_only}
  */
  readonly prepareOnly?: boolean | cdktf.IResolvable;
  /**
  * Set to be true in order to install the QoS policy. By default, the value is true if Quality-of-Service policy is enabled on the input policy package, otherwise false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#qos ManagementInstallPolicy#qos}
  */
  readonly qos?: boolean | cdktf.IResolvable;
  /**
  * The UID of the revision of the policy to install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#revision ManagementInstallPolicy#revision}
  */
  readonly revision?: string;
  /**
  * On what targets to execute this command. Targets may be identified by their name, or object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#targets ManagementInstallPolicy#targets}
  */
  readonly targets?: string[];
  /**
  * Set to be true in order to install the Threat Prevention policy. By default, the value is true if Threat Prevention policy is enabled on the input policy package, otherwise false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#threat_prevention ManagementInstallPolicy#threat_prevention}
  */
  readonly threatPrevention?: boolean | cdktf.IResolvable;
  /**
  * Triggers a install-policy if there are any changes to objects in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#triggers ManagementInstallPolicy#triggers}
  */
  readonly triggers?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy checkpoint_management_install_policy}
*/
export class ManagementInstallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_install_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementInstallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementInstallPolicy to import
  * @param importFromId The id of the existing ManagementInstallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementInstallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_install_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_install_policy checkpoint_management_install_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementInstallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementInstallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_install_policy',
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
    this._access = config.access;
    this._desktopSecurity = config.desktopSecurity;
    this._id = config.id;
    this._ignoreWarnings = config.ignoreWarnings;
    this._installOnAllClusterMembersOrFail = config.installOnAllClusterMembersOrFail;
    this._policyPackage = config.policyPackage;
    this._prepareOnly = config.prepareOnly;
    this._qos = config.qos;
    this._revision = config.revision;
    this._targets = config.targets;
    this._threatPrevention = config.threatPrevention;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: true, required: false
  private _access?: boolean | cdktf.IResolvable; 
  public get access() {
    return this.getBooleanAttribute('access');
  }
  public set access(value: boolean | cdktf.IResolvable) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // desktop_security - computed: false, optional: true, required: false
  private _desktopSecurity?: boolean | cdktf.IResolvable; 
  public get desktopSecurity() {
    return this.getBooleanAttribute('desktop_security');
  }
  public set desktopSecurity(value: boolean | cdktf.IResolvable) {
    this._desktopSecurity = value;
  }
  public resetDesktopSecurity() {
    this._desktopSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopSecurityInput() {
    return this._desktopSecurity;
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

  // install_on_all_cluster_members_or_fail - computed: false, optional: true, required: false
  private _installOnAllClusterMembersOrFail?: boolean | cdktf.IResolvable; 
  public get installOnAllClusterMembersOrFail() {
    return this.getBooleanAttribute('install_on_all_cluster_members_or_fail');
  }
  public set installOnAllClusterMembersOrFail(value: boolean | cdktf.IResolvable) {
    this._installOnAllClusterMembersOrFail = value;
  }
  public resetInstallOnAllClusterMembersOrFail() {
    this._installOnAllClusterMembersOrFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installOnAllClusterMembersOrFailInput() {
    return this._installOnAllClusterMembersOrFail;
  }

  // policy_package - computed: false, optional: false, required: true
  private _policyPackage?: string; 
  public get policyPackage() {
    return this.getStringAttribute('policy_package');
  }
  public set policyPackage(value: string) {
    this._policyPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPackageInput() {
    return this._policyPackage;
  }

  // prepare_only - computed: false, optional: true, required: false
  private _prepareOnly?: boolean | cdktf.IResolvable; 
  public get prepareOnly() {
    return this.getBooleanAttribute('prepare_only');
  }
  public set prepareOnly(value: boolean | cdktf.IResolvable) {
    this._prepareOnly = value;
  }
  public resetPrepareOnly() {
    this._prepareOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareOnlyInput() {
    return this._prepareOnly;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: boolean | cdktf.IResolvable; 
  public get qos() {
    return this.getBooleanAttribute('qos');
  }
  public set qos(value: boolean | cdktf.IResolvable) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return cdktf.Fn.tolist(this.getListAttribute('targets'));
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // threat_prevention - computed: false, optional: true, required: false
  private _threatPrevention?: boolean | cdktf.IResolvable; 
  public get threatPrevention() {
    return this.getBooleanAttribute('threat_prevention');
  }
  public set threatPrevention(value: boolean | cdktf.IResolvable) {
    this._threatPrevention = value;
  }
  public resetThreatPrevention() {
    this._threatPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatPreventionInput() {
    return this._threatPrevention;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return cdktf.Fn.tolist(this.getListAttribute('triggers'));
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.booleanToTerraform(this._access),
      desktop_security: cdktf.booleanToTerraform(this._desktopSecurity),
      id: cdktf.stringToTerraform(this._id),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      install_on_all_cluster_members_or_fail: cdktf.booleanToTerraform(this._installOnAllClusterMembersOrFail),
      policy_package: cdktf.stringToTerraform(this._policyPackage),
      prepare_only: cdktf.booleanToTerraform(this._prepareOnly),
      qos: cdktf.booleanToTerraform(this._qos),
      revision: cdktf.stringToTerraform(this._revision),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
      threat_prevention: cdktf.booleanToTerraform(this._threatPrevention),
      triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.booleanToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      desktop_security: {
        value: cdktf.booleanToHclTerraform(this._desktopSecurity),
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
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      install_on_all_cluster_members_or_fail: {
        value: cdktf.booleanToHclTerraform(this._installOnAllClusterMembersOrFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_package: {
        value: cdktf.stringToHclTerraform(this._policyPackage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepare_only: {
        value: cdktf.booleanToHclTerraform(this._prepareOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qos: {
        value: cdktf.booleanToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      threat_prevention: {
        value: cdktf.booleanToHclTerraform(this._threatPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      triggers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
