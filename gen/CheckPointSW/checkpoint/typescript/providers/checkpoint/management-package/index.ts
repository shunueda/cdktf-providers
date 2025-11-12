// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * True - enables, False - disables access & NAT policies, empty - nothing is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#access ManagementPackage#access}
  */
  readonly access?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#color ManagementPackage#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#comments ManagementPackage#comments}
  */
  readonly comments?: string;
  /**
  * True - enables, False - disables Desktop security policy, empty - nothing is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#desktop_security ManagementPackage#desktop_security}
  */
  readonly desktopSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#id ManagementPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#ignore_errors ManagementPackage#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#ignore_warnings ManagementPackage#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Which Gateways identified by the name or UID to install the policy on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#installation_targets ManagementPackage#installation_targets}
  */
  readonly installationTargets?: string[];
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#name ManagementPackage#name}
  */
  readonly name: string;
  /**
  * True - enables, False - disables QoS policy, empty - nothing is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#qos ManagementPackage#qos}
  */
  readonly qos?: boolean | cdktf.IResolvable;
  /**
  * QoS policy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#qos_policy_type ManagementPackage#qos_policy_type}
  */
  readonly qosPolicyType?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#tags ManagementPackage#tags}
  */
  readonly tags?: string[];
  /**
  * True - enables, False - disables Threat policy, empty - nothing is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#threat_prevention ManagementPackage#threat_prevention}
  */
  readonly threatPrevention?: boolean | cdktf.IResolvable;
  /**
  * True - enables, False - disables VPN traditional mode, empty - nothing is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#vpn_traditional_mode ManagementPackage#vpn_traditional_mode}
  */
  readonly vpnTraditionalMode?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package checkpoint_management_package}
*/
export class ManagementPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementPackage to import
  * @param importFromId The id of the existing ManagementPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_package checkpoint_management_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementPackageConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_package',
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
    this._access = config.access;
    this._color = config.color;
    this._comments = config.comments;
    this._desktopSecurity = config.desktopSecurity;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._installationTargets = config.installationTargets;
    this._name = config.name;
    this._qos = config.qos;
    this._qosPolicyType = config.qosPolicyType;
    this._tags = config.tags;
    this._threatPrevention = config.threatPrevention;
    this._vpnTraditionalMode = config.vpnTraditionalMode;
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

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // installation_targets - computed: false, optional: true, required: false
  private _installationTargets?: string[]; 
  public get installationTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('installation_targets'));
  }
  public set installationTargets(value: string[]) {
    this._installationTargets = value;
  }
  public resetInstallationTargets() {
    this._installationTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationTargetsInput() {
    return this._installationTargets;
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

  // qos_policy_type - computed: false, optional: true, required: false
  private _qosPolicyType?: string; 
  public get qosPolicyType() {
    return this.getStringAttribute('qos_policy_type');
  }
  public set qosPolicyType(value: string) {
    this._qosPolicyType = value;
  }
  public resetQosPolicyType() {
    this._qosPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyTypeInput() {
    return this._qosPolicyType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // vpn_traditional_mode - computed: false, optional: true, required: false
  private _vpnTraditionalMode?: boolean | cdktf.IResolvable; 
  public get vpnTraditionalMode() {
    return this.getBooleanAttribute('vpn_traditional_mode');
  }
  public set vpnTraditionalMode(value: boolean | cdktf.IResolvable) {
    this._vpnTraditionalMode = value;
  }
  public resetVpnTraditionalMode() {
    this._vpnTraditionalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTraditionalModeInput() {
    return this._vpnTraditionalMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.booleanToTerraform(this._access),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      desktop_security: cdktf.booleanToTerraform(this._desktopSecurity),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      installation_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._installationTargets),
      name: cdktf.stringToTerraform(this._name),
      qos: cdktf.booleanToTerraform(this._qos),
      qos_policy_type: cdktf.stringToTerraform(this._qosPolicyType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      threat_prevention: cdktf.booleanToTerraform(this._threatPrevention),
      vpn_traditional_mode: cdktf.booleanToTerraform(this._vpnTraditionalMode),
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
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      installation_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._installationTargets),
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
      qos: {
        value: cdktf.booleanToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qos_policy_type: {
        value: cdktf.stringToHclTerraform(this._qosPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
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
      vpn_traditional_mode: {
        value: cdktf.booleanToHclTerraform(this._vpnTraditionalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
