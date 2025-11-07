// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_idp_to_domain_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementIdpToDomainAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Represents the Domain assigned by 'idp-to-domain-assignment', need to be domain name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_idp_to_domain_assignment#assigned_domain DataCheckpointManagementIdpToDomainAssignment#assigned_domain}
  */
  readonly assignedDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_idp_to_domain_assignment#id DataCheckpointManagementIdpToDomainAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_idp_to_domain_assignment#uid DataCheckpointManagementIdpToDomainAssignment#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_idp_to_domain_assignment checkpoint_management_idp_to_domain_assignment}
*/
export class DataCheckpointManagementIdpToDomainAssignment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_idp_to_domain_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementIdpToDomainAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementIdpToDomainAssignment to import
  * @param importFromId The id of the existing DataCheckpointManagementIdpToDomainAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_idp_to_domain_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementIdpToDomainAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_idp_to_domain_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_idp_to_domain_assignment checkpoint_management_idp_to_domain_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementIdpToDomainAssignmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementIdpToDomainAssignmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_idp_to_domain_assignment',
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
    this._assignedDomain = config.assignedDomain;
    this._id = config.id;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_domain - computed: false, optional: true, required: false
  private _assignedDomain?: string; 
  public get assignedDomain() {
    return this.getStringAttribute('assigned_domain');
  }
  public set assignedDomain(value: string) {
    this._assignedDomain = value;
  }
  public resetAssignedDomain() {
    this._assignedDomain = undefined;
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

  // identity_provider - computed: true, optional: false, required: false
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }

  // identity_provider_set - computed: true, optional: false, required: false
  public get identityProviderSet() {
    return this.getBooleanAttribute('identity_provider_set');
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

  // using_default - computed: true, optional: false, required: false
  public get usingDefault() {
    return this.getBooleanAttribute('using_default');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_domain: cdktf.stringToTerraform(this._assignedDomain),
      id: cdktf.stringToTerraform(this._id),
      uid: cdktf.stringToTerraform(this._uid),
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
