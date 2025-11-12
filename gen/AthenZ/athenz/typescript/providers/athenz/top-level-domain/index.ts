// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TopLevelDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Names of the standard admin users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain#admin_users TopLevelDomain#admin_users}
  */
  readonly adminUsers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain#audit_ref TopLevelDomain#audit_ref}
  */
  readonly auditRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain#id TopLevelDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the standard Top Level domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain#name TopLevelDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain#ypm_id TopLevelDomain#ypm_id}
  */
  readonly ypmId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain athenz_top_level_domain}
*/
export class TopLevelDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_top_level_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TopLevelDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TopLevelDomain to import
  * @param importFromId The id of the existing TopLevelDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TopLevelDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_top_level_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/top_level_domain athenz_top_level_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TopLevelDomainConfig
  */
  public constructor(scope: Construct, id: string, config: TopLevelDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_top_level_domain',
      terraformGeneratorMetadata: {
        providerName: 'athenz',
        providerVersion: '1.0.49',
        providerVersionConstraint: '1.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminUsers = config.adminUsers;
    this._auditRef = config.auditRef;
    this._id = config.id;
    this._name = config.name;
    this._ypmId = config.ypmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_users - computed: false, optional: false, required: true
  private _adminUsers?: string[]; 
  public get adminUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_users'));
  }
  public set adminUsers(value: string[]) {
    this._adminUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers;
  }

  // audit_ref - computed: false, optional: true, required: false
  private _auditRef?: string; 
  public get auditRef() {
    return this.getStringAttribute('audit_ref');
  }
  public set auditRef(value: string) {
    this._auditRef = value;
  }
  public resetAuditRef() {
    this._auditRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditRefInput() {
    return this._auditRef;
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

  // ypm_id - computed: false, optional: false, required: true
  private _ypmId?: number; 
  public get ypmId() {
    return this.getNumberAttribute('ypm_id');
  }
  public set ypmId(value: number) {
    this._ypmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ypmIdInput() {
    return this._ypmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminUsers),
      audit_ref: cdktf.stringToTerraform(this._auditRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ypm_id: cdktf.numberToTerraform(this._ypmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      audit_ref: {
        value: cdktf.stringToHclTerraform(this._auditRef),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ypm_id: {
        value: cdktf.numberToHclTerraform(this._ypmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
