// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping_saas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleMappingSaasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping_saas#csp_role RoleMappingSaas#csp_role}
  */
  readonly cspRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping_saas#id RoleMappingSaas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping_saas#saml_groups RoleMappingSaas#saml_groups}
  */
  readonly samlGroups: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping_saas aquasec_role_mapping_saas}
*/
export class RoleMappingSaas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_role_mapping_saas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleMappingSaas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleMappingSaas to import
  * @param importFromId The id of the existing RoleMappingSaas that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping_saas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleMappingSaas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_role_mapping_saas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping_saas aquasec_role_mapping_saas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleMappingSaasConfig
  */
  public constructor(scope: Construct, id: string, config: RoleMappingSaasConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_role_mapping_saas',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cspRole = config.cspRole;
    this._id = config.id;
    this._samlGroups = config.samlGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // csp_role - computed: false, optional: false, required: true
  private _cspRole?: string; 
  public get cspRole() {
    return this.getStringAttribute('csp_role');
  }
  public set cspRole(value: string) {
    this._cspRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspRoleInput() {
    return this._cspRole;
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

  // role_mapping_id - computed: true, optional: false, required: false
  public get roleMappingId() {
    return this.getNumberAttribute('role_mapping_id');
  }

  // saml_groups - computed: false, optional: false, required: true
  private _samlGroups?: string[]; 
  public get samlGroups() {
    return this.getListAttribute('saml_groups');
  }
  public set samlGroups(value: string[]) {
    this._samlGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlGroupsInput() {
    return this._samlGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csp_role: cdktf.stringToTerraform(this._cspRole),
      id: cdktf.stringToTerraform(this._id),
      saml_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._samlGroups),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csp_role: {
        value: cdktf.stringToHclTerraform(this._cspRole),
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
      saml_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._samlGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
