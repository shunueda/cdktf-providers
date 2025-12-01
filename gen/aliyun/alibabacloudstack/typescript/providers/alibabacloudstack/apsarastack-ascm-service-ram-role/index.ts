// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_service_ram_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackAscmServiceRamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_service_ram_role#id ApsarastackAscmServiceRamRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_service_ram_role#organization_id ApsarastackAscmServiceRamRole#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_service_ram_role#product_name ApsarastackAscmServiceRamRole#product_name}
  */
  readonly productName: string;
}
export interface ApsarastackAscmServiceRamRoleRamRolesPolicies {
}

export function apsarastackAscmServiceRamRoleRamRolesPoliciesToTerraform(struct?: ApsarastackAscmServiceRamRoleRamRolesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apsarastackAscmServiceRamRoleRamRolesPoliciesToHclTerraform(struct?: ApsarastackAscmServiceRamRoleRamRolesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApsarastackAscmServiceRamRoleRamRolesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackAscmServiceRamRoleRamRolesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackAscmServiceRamRoleRamRolesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliyun_user_id - computed: true, optional: false, required: false
  public get aliyunUserId() {
    return this.getNumberAttribute('aliyun_user_id');
  }

  // ascm_ram_policy_id - computed: true, optional: false, required: false
  public get ascmRamPolicyId() {
    return this.getNumberAttribute('ascm_ram_policy_id');
  }

  // attach_date - computed: true, optional: false, required: false
  public get attachDate() {
    return this.getNumberAttribute('attach_date');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // policy_document - computed: true, optional: false, required: false
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // privilege_id - computed: true, optional: false, required: false
  public get privilegeId() {
    return this.getNumberAttribute('privilege_id');
  }

  // ram_group_id - computed: true, optional: false, required: false
  public get ramGroupId() {
    return this.getNumberAttribute('ram_group_id');
  }

  // ram_role_id - computed: true, optional: false, required: false
  public get ramRoleId() {
    return this.getNumberAttribute('ram_role_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_set_id - computed: true, optional: false, required: false
  public get resourceSetId() {
    return this.getNumberAttribute('resource_set_id');
  }
}

export class ApsarastackAscmServiceRamRoleRamRolesPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): ApsarastackAscmServiceRamRoleRamRolesPoliciesOutputReference {
    return new ApsarastackAscmServiceRamRoleRamRolesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackAscmServiceRamRoleRamRoles {
}

export function apsarastackAscmServiceRamRoleRamRolesToTerraform(struct?: ApsarastackAscmServiceRamRoleRamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apsarastackAscmServiceRamRoleRamRolesToHclTerraform(struct?: ApsarastackAscmServiceRamRoleRamRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApsarastackAscmServiceRamRoleRamRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackAscmServiceRamRoleRamRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackAscmServiceRamRoleRamRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aliyun_user_id - computed: true, optional: false, required: false
  public get aliyunUserId() {
    return this.getNumberAttribute('aliyun_user_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // assume_role_policy_document - computed: true, optional: false, required: false
  public get assumeRolePolicyDocument() {
    return this.getStringAttribute('assume_role_policy_document');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getNumberAttribute('organization_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new ApsarastackAscmServiceRamRoleRamRolesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
}

export class ApsarastackAscmServiceRamRoleRamRolesList extends cdktf.ComplexList {

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
  public get(index: number): ApsarastackAscmServiceRamRoleRamRolesOutputReference {
    return new ApsarastackAscmServiceRamRoleRamRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_service_ram_role apsarastack_ascm_service_ram_role}
*/
export class ApsarastackAscmServiceRamRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ascm_service_ram_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackAscmServiceRamRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackAscmServiceRamRole to import
  * @param importFromId The id of the existing ApsarastackAscmServiceRamRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_service_ram_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackAscmServiceRamRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ascm_service_ram_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_ascm_service_ram_role apsarastack_ascm_service_ram_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackAscmServiceRamRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackAscmServiceRamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ascm_service_ram_role',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._organizationId = config.organizationId;
    this._productName = config.productName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // ram_roles - computed: true, optional: false, required: false
  private _ramRoles = new ApsarastackAscmServiceRamRoleRamRolesList(this, "ram_roles", false);
  public get ramRoles() {
    return this._ramRoles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      product_name: cdktf.stringToTerraform(this._productName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
