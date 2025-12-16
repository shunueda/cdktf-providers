// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment#id IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Permission configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment#role_configuration_id IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment#role_configuration_id}
  */
  readonly roleConfigurationId: string;
  /**
  * Space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment#zone_id IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment#zone_id}
  */
  readonly zoneId: string;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment#policies IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment#policies}
  */
  readonly policies: IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies[] | cdktf.IResolvable;
}
export interface IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies {
  /**
  * Role policy document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment#role_policy_document IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment#role_policy_document}
  */
  readonly rolePolicyDocument: string;
  /**
  * Role policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment#role_policy_name IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment#role_policy_name}
  */
  readonly rolePolicyName: string;
}

export function identityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesToTerraform(struct?: IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_policy_document: cdktf.stringToTerraform(struct!.rolePolicyDocument),
    role_policy_name: cdktf.stringToTerraform(struct!.rolePolicyName),
  }
}


export function identityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesToHclTerraform(struct?: IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_policy_document: {
      value: cdktf.stringToHclTerraform(struct!.rolePolicyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.rolePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rolePolicyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolePolicyDocument = this._rolePolicyDocument;
    }
    if (this._rolePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolePolicyName = this._rolePolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rolePolicyDocument = undefined;
      this._rolePolicyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rolePolicyDocument = value.rolePolicyDocument;
      this._rolePolicyName = value.rolePolicyName;
    }
  }

  // add_time - computed: true, optional: false, required: false
  public get addTime() {
    return this.getStringAttribute('add_time');
  }

  // role_policy_document - computed: false, optional: false, required: true
  private _rolePolicyDocument?: string; 
  public get rolePolicyDocument() {
    return this.getStringAttribute('role_policy_document');
  }
  public set rolePolicyDocument(value: string) {
    this._rolePolicyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolePolicyDocumentInput() {
    return this._rolePolicyDocument;
  }

  // role_policy_name - computed: false, optional: false, required: true
  private _rolePolicyName?: string; 
  public get rolePolicyName() {
    return this.getStringAttribute('role_policy_name');
  }
  public set rolePolicyName(value: string) {
    this._rolePolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolePolicyNameInput() {
    return this._rolePolicyName;
  }

  // role_policy_type - computed: true, optional: false, required: false
  public get rolePolicyType() {
    return this.getStringAttribute('role_policy_type');
  }
}

export class IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesList extends cdktf.ComplexList {
  public internalValue? : IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies[] | cdktf.IResolvable

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
  public get(index: number): IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesOutputReference {
    return new IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment tencentcloud_identity_center_role_configuration_permission_custom_policies_attachment}
*/
export class IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_role_configuration_permission_custom_policies_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment to import
  * @param importFromId The id of the existing IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_role_configuration_permission_custom_policies_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/identity_center_role_configuration_permission_custom_policies_attachment tencentcloud_identity_center_role_configuration_permission_custom_policies_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_role_configuration_permission_custom_policies_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._roleConfigurationId = config.roleConfigurationId;
    this._zoneId = config.zoneId;
    this._policies.internalValue = config.policies;
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

  // role_configuration_id - computed: false, optional: false, required: true
  private _roleConfigurationId?: string; 
  public get roleConfigurationId() {
    return this.getStringAttribute('role_configuration_id');
  }
  public set roleConfigurationId(value: string) {
    this._roleConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleConfigurationIdInput() {
    return this._roleConfigurationId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      role_configuration_id: cdktf.stringToTerraform(this._roleConfigurationId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      policies: cdktf.listMapper(identityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesToTerraform, true)(this._policies.internalValue),
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
      role_configuration_id: {
        value: cdktf.stringToHclTerraform(this._roleConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(identityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityCenterRoleConfigurationPermissionCustomPoliciesAttachmentPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
