// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetIdpToDomainAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Represents the Domain assigned by 'idp-to-domain-assignment', need to be domain name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment#assigned_domain ManagementSetIdpToDomainAssignment#assigned_domain}
  */
  readonly assignedDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment#id ManagementSetIdpToDomainAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Represents the Identity Provider to be used for Login by this assignment. Must be set when "using-default" was set to be false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment#identity_provider ManagementSetIdpToDomainAssignment#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment#ignore_errors ManagementSetIdpToDomainAssignment#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment#ignore_warnings ManagementSetIdpToDomainAssignment#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Is this assignment override by 'idp-default-assignment'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment#using_default ManagementSetIdpToDomainAssignment#using_default}
  */
  readonly usingDefault?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment checkpoint_management_set_idp_to_domain_assignment}
*/
export class ManagementSetIdpToDomainAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_idp_to_domain_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetIdpToDomainAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetIdpToDomainAssignment to import
  * @param importFromId The id of the existing ManagementSetIdpToDomainAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetIdpToDomainAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_idp_to_domain_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_idp_to_domain_assignment checkpoint_management_set_idp_to_domain_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetIdpToDomainAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementSetIdpToDomainAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_idp_to_domain_assignment',
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
    this._assignedDomain = config.assignedDomain;
    this._id = config.id;
    this._identityProvider = config.identityProvider;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._usingDefault = config.usingDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_domain - computed: false, optional: false, required: true
  private _assignedDomain?: string; 
  public get assignedDomain() {
    return this.getStringAttribute('assigned_domain');
  }
  public set assignedDomain(value: string) {
    this._assignedDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedDomainInput() {
    return this._assignedDomain;
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

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
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

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // using_default - computed: false, optional: true, required: false
  private _usingDefault?: boolean | cdktf.IResolvable; 
  public get usingDefault() {
    return this.getBooleanAttribute('using_default');
  }
  public set usingDefault(value: boolean | cdktf.IResolvable) {
    this._usingDefault = value;
  }
  public resetUsingDefault() {
    this._usingDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingDefaultInput() {
    return this._usingDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_domain: cdktf.stringToTerraform(this._assignedDomain),
      id: cdktf.stringToTerraform(this._id),
      identity_provider: cdktf.stringToTerraform(this._identityProvider),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      using_default: cdktf.booleanToTerraform(this._usingDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_domain: {
        value: cdktf.stringToHclTerraform(this._assignedDomain),
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
      identity_provider: {
        value: cdktf.stringToHclTerraform(this._identityProvider),
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
      using_default: {
        value: cdktf.booleanToHclTerraform(this._usingDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
