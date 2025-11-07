// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users#auditors OrgUsers#auditors}
  */
  readonly auditors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users#billing_managers OrgUsers#billing_managers}
  */
  readonly billingManagers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users#force OrgUsers#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users#id OrgUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users#managers OrgUsers#managers}
  */
  readonly managers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users#org OrgUsers#org}
  */
  readonly org: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users cloudfoundry_org_users}
*/
export class OrgUsers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_org_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgUsers to import
  * @param importFromId The id of the existing OrgUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_org_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/org_users cloudfoundry_org_users} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgUsersConfig
  */
  public constructor(scope: Construct, id: string, config: OrgUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_org_users',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditors = config.auditors;
    this._billingManagers = config.billingManagers;
    this._force = config.force;
    this._id = config.id;
    this._managers = config.managers;
    this._org = config.org;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auditors - computed: true, optional: true, required: false
  private _auditors?: string[]; 
  public get auditors() {
    return cdktf.Fn.tolist(this.getListAttribute('auditors'));
  }
  public set auditors(value: string[]) {
    this._auditors = value;
  }
  public resetAuditors() {
    this._auditors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditorsInput() {
    return this._auditors;
  }

  // billing_managers - computed: true, optional: true, required: false
  private _billingManagers?: string[]; 
  public get billingManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_managers'));
  }
  public set billingManagers(value: string[]) {
    this._billingManagers = value;
  }
  public resetBillingManagers() {
    this._billingManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingManagersInput() {
    return this._billingManagers;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // managers - computed: true, optional: true, required: false
  private _managers?: string[]; 
  public get managers() {
    return cdktf.Fn.tolist(this.getListAttribute('managers'));
  }
  public set managers(value: string[]) {
    this._managers = value;
  }
  public resetManagers() {
    this._managers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managersInput() {
    return this._managers;
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auditors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditors),
      billing_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingManagers),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      managers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managers),
      org: cdktf.stringToTerraform(this._org),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auditors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      billing_managers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingManagers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
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
      managers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
