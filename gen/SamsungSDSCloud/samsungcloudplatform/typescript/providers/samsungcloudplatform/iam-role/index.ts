// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#description IamRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#id IamRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of policy IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#policy_ids IamRole#policy_ids}
  */
  readonly policyIds?: string[];
  /**
  * Role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#role_name IamRole#role_name}
  */
  readonly roleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#tags IamRole#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * trust_principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#trust_principals IamRole#trust_principals}
  */
  readonly trustPrincipals?: IamRoleTrustPrincipals[] | cdktf.IResolvable;
}
export interface IamRoleTrustPrincipals {
  /**
  * Project IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#project_ids IamRole#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * User SRNs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#user_srns IamRole#user_srns}
  */
  readonly userSrns?: string[];
}

export function iamRoleTrustPrincipalsToTerraform(struct?: IamRoleTrustPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    user_srns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userSrns),
  }
}


export function iamRoleTrustPrincipalsToHclTerraform(struct?: IamRoleTrustPrincipals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_srns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userSrns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamRoleTrustPrincipalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IamRoleTrustPrincipals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._userSrns !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSrns = this._userSrns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamRoleTrustPrincipals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectIds = undefined;
      this._userSrns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectIds = value.projectIds;
      this._userSrns = value.userSrns;
    }
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // user_srns - computed: false, optional: true, required: false
  private _userSrns?: string[]; 
  public get userSrns() {
    return this.getListAttribute('user_srns');
  }
  public set userSrns(value: string[]) {
    this._userSrns = value;
  }
  public resetUserSrns() {
    this._userSrns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSrnsInput() {
    return this._userSrns;
  }
}

export class IamRoleTrustPrincipalsList extends cdktf.ComplexList {
  public internalValue? : IamRoleTrustPrincipals[] | cdktf.IResolvable

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
  public get(index: number): IamRoleTrustPrincipalsOutputReference {
    return new IamRoleTrustPrincipalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role samsungcloudplatform_iam_role}
*/
export class IamRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_iam_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamRole to import
  * @param importFromId The id of the existing IamRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_iam_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/iam_role samsungcloudplatform_iam_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamRoleConfig
  */
  public constructor(scope: Construct, id: string, config: IamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_iam_role',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._policyIds = config.policyIds;
    this._roleName = config.roleName;
    this._tags = config.tags;
    this._trustPrincipals.internalValue = config.trustPrincipals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_by_email - computed: true, optional: false, required: false
  public get modifiedByEmail() {
    return this.getStringAttribute('modified_by_email');
  }

  // modified_by_name - computed: true, optional: false, required: false
  public get modifiedByName() {
    return this.getStringAttribute('modified_by_name');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: string[]; 
  public get policyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_ids'));
  }
  public set policyIds(value: string[]) {
    this._policyIds = value;
  }
  public resetPolicyIds() {
    this._policyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // role_policy_count - computed: true, optional: false, required: false
  public get rolePolicyCount() {
    return this.getNumberAttribute('role_policy_count');
  }

  // role_srn - computed: true, optional: false, required: false
  public get roleSrn() {
    return this.getStringAttribute('role_srn');
  }

  // session_time - computed: true, optional: false, required: false
  public get sessionTime() {
    return this.getNumberAttribute('session_time');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trust_principals - computed: false, optional: true, required: false
  private _trustPrincipals = new IamRoleTrustPrincipalsList(this, "trust_principals", true);
  public get trustPrincipals() {
    return this._trustPrincipals;
  }
  public putTrustPrincipals(value: IamRoleTrustPrincipals[] | cdktf.IResolvable) {
    this._trustPrincipals.internalValue = value;
  }
  public resetTrustPrincipals() {
    this._trustPrincipals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustPrincipalsInput() {
    return this._trustPrincipals.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyIds),
      role_name: cdktf.stringToTerraform(this._roleName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trust_principals: cdktf.listMapper(iamRoleTrustPrincipalsToTerraform, true)(this._trustPrincipals.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trust_principals: {
        value: cdktf.listMapperHcl(iamRoleTrustPrincipalsToHclTerraform, true)(this._trustPrincipals.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IamRoleTrustPrincipalsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
