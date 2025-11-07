// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/rosa_operator_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRhcsRosaOperatorRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account role prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/rosa_operator_roles#account_role_prefix DataRhcsRosaOperatorRoles#account_role_prefix}
  */
  readonly accountRolePrefix?: string;
  /**
  * Operator role prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/rosa_operator_roles#operator_role_prefix DataRhcsRosaOperatorRoles#operator_role_prefix}
  */
  readonly operatorRolePrefix: string;
}
export interface DataRhcsRosaOperatorRolesOperatorIamRoles {
}

export function dataRhcsRosaOperatorRolesOperatorIamRolesToTerraform(struct?: DataRhcsRosaOperatorRolesOperatorIamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsRosaOperatorRolesOperatorIamRolesToHclTerraform(struct?: DataRhcsRosaOperatorRolesOperatorIamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsRosaOperatorRolesOperatorIamRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRhcsRosaOperatorRolesOperatorIamRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsRosaOperatorRolesOperatorIamRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator_name - computed: true, optional: false, required: false
  public get operatorName() {
    return this.getStringAttribute('operator_name');
  }

  // operator_namespace - computed: true, optional: false, required: false
  public get operatorNamespace() {
    return this.getStringAttribute('operator_namespace');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // service_accounts - computed: true, optional: false, required: false
  public get serviceAccounts() {
    return this.getListAttribute('service_accounts');
  }
}

export class DataRhcsRosaOperatorRolesOperatorIamRolesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataRhcsRosaOperatorRolesOperatorIamRolesOutputReference {
    return new DataRhcsRosaOperatorRolesOperatorIamRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/rosa_operator_roles rhcs_rosa_operator_roles}
*/
export class DataRhcsRosaOperatorRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_rosa_operator_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRhcsRosaOperatorRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRhcsRosaOperatorRoles to import
  * @param importFromId The id of the existing DataRhcsRosaOperatorRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/rosa_operator_roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRhcsRosaOperatorRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_rosa_operator_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/rosa_operator_roles rhcs_rosa_operator_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRhcsRosaOperatorRolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataRhcsRosaOperatorRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'rhcs_rosa_operator_roles',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountRolePrefix = config.accountRolePrefix;
    this._operatorRolePrefix = config.operatorRolePrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_role_prefix - computed: false, optional: true, required: false
  private _accountRolePrefix?: string; 
  public get accountRolePrefix() {
    return this.getStringAttribute('account_role_prefix');
  }
  public set accountRolePrefix(value: string) {
    this._accountRolePrefix = value;
  }
  public resetAccountRolePrefix() {
    this._accountRolePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRolePrefixInput() {
    return this._accountRolePrefix;
  }

  // operator_iam_roles - computed: true, optional: false, required: false
  private _operatorIamRoles = new DataRhcsRosaOperatorRolesOperatorIamRolesList(this, "operator_iam_roles", false);
  public get operatorIamRoles() {
    return this._operatorIamRoles;
  }

  // operator_role_prefix - computed: false, optional: false, required: true
  private _operatorRolePrefix?: string; 
  public get operatorRolePrefix() {
    return this.getStringAttribute('operator_role_prefix');
  }
  public set operatorRolePrefix(value: string) {
    this._operatorRolePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorRolePrefixInput() {
    return this._operatorRolePrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_role_prefix: cdktf.stringToTerraform(this._accountRolePrefix),
      operator_role_prefix: cdktf.stringToTerraform(this._operatorRolePrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_role_prefix: {
        value: cdktf.stringToHclTerraform(this._accountRolePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operator_role_prefix: {
        value: cdktf.stringToHclTerraform(this._operatorRolePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
