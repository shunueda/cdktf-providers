// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationOrgIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identity description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#description OrganizationOrgIdentity#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#id OrganizationOrgIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identity name.Supports English letters and numbers, the length cannot exceed 40 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#identity_alias_name OrganizationOrgIdentity#identity_alias_name}
  */
  readonly identityAliasName: string;
  /**
  * identity_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#identity_policy OrganizationOrgIdentity#identity_policy}
  */
  readonly identityPolicy: OrganizationOrgIdentityIdentityPolicy[] | cdktf.IResolvable;
}
export interface OrganizationOrgIdentityIdentityPolicy {
  /**
  * Customize policy content and follow CAM policy syntax. Valid and required when PolicyType is the 1-custom policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#policy_document OrganizationOrgIdentity#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * CAM default policy ID. Valid and required when PolicyType is the 2-preset policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#policy_id OrganizationOrgIdentity#policy_id}
  */
  readonly policyId?: number;
  /**
  * CAM default policy name. Valid and required when PolicyType is the 2-preset policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#policy_name OrganizationOrgIdentity#policy_name}
  */
  readonly policyName?: string;
  /**
  * Policy type. Value 1-custom policy 2-preset policy; default value 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#policy_type OrganizationOrgIdentity#policy_type}
  */
  readonly policyType?: number;
}

export function organizationOrgIdentityIdentityPolicyToTerraform(struct?: OrganizationOrgIdentityIdentityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_document: cdktf.stringToTerraform(struct!.policyDocument),
    policy_id: cdktf.numberToTerraform(struct!.policyId),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    policy_type: cdktf.numberToTerraform(struct!.policyType),
  }
}


export function organizationOrgIdentityIdentityPolicyToHclTerraform(struct?: OrganizationOrgIdentityIdentityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_document: {
      value: cdktf.stringToHclTerraform(struct!.policyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_id: {
      value: cdktf.numberToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.numberToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationOrgIdentityIdentityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationOrgIdentityIdentityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDocument = this._policyDocument;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationOrgIdentityIdentityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyDocument = undefined;
      this._policyId = undefined;
      this._policyName = undefined;
      this._policyType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyDocument = value.policyDocument;
      this._policyId = value.policyId;
      this._policyName = value.policyName;
      this._policyType = value.policyType;
    }
  }

  // policy_document - computed: false, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: number; 
  public get policyType() {
    return this.getNumberAttribute('policy_type');
  }
  public set policyType(value: number) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }
}

export class OrganizationOrgIdentityIdentityPolicyList extends cdktf.ComplexList {
  public internalValue? : OrganizationOrgIdentityIdentityPolicy[] | cdktf.IResolvable

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
  public get(index: number): OrganizationOrgIdentityIdentityPolicyOutputReference {
    return new OrganizationOrgIdentityIdentityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity tencentcloud_organization_org_identity}
*/
export class OrganizationOrgIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationOrgIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationOrgIdentity to import
  * @param importFromId The id of the existing OrganizationOrgIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationOrgIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/organization_org_identity tencentcloud_organization_org_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationOrgIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationOrgIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_identity',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._identityAliasName = config.identityAliasName;
    this._identityPolicy.internalValue = config.identityPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_alias_name - computed: false, optional: false, required: true
  private _identityAliasName?: string; 
  public get identityAliasName() {
    return this.getStringAttribute('identity_alias_name');
  }
  public set identityAliasName(value: string) {
    this._identityAliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAliasNameInput() {
    return this._identityAliasName;
  }

  // identity_policy - computed: false, optional: false, required: true
  private _identityPolicy = new OrganizationOrgIdentityIdentityPolicyList(this, "identity_policy", false);
  public get identityPolicy() {
    return this._identityPolicy;
  }
  public putIdentityPolicy(value: OrganizationOrgIdentityIdentityPolicy[] | cdktf.IResolvable) {
    this._identityPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPolicyInput() {
    return this._identityPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identity_alias_name: cdktf.stringToTerraform(this._identityAliasName),
      identity_policy: cdktf.listMapper(organizationOrgIdentityIdentityPolicyToTerraform, true)(this._identityPolicy.internalValue),
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
      identity_alias_name: {
        value: cdktf.stringToHclTerraform(this._identityAliasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_policy: {
        value: cdktf.listMapperHcl(organizationOrgIdentityIdentityPolicyToHclTerraform, true)(this._identityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationOrgIdentityIdentityPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
