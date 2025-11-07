// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDistributedFloodProtectionProfileBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#description PolicyDistributedFloodProtectionProfileBinding#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#display_name PolicyDistributedFloodProtectionProfileBinding#display_name}
  */
  readonly displayName: string;
  /**
  * The path of the group to bind with the flood protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#group_path PolicyDistributedFloodProtectionProfileBinding#group_path}
  */
  readonly groupPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#id PolicyDistributedFloodProtectionProfileBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#nsx_id PolicyDistributedFloodProtectionProfileBinding#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * The path of the flood protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#profile_path PolicyDistributedFloodProtectionProfileBinding#profile_path}
  */
  readonly profilePath: string;
  /**
  * Sequence number of this profile binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#sequence_number PolicyDistributedFloodProtectionProfileBinding#sequence_number}
  */
  readonly sequenceNumber: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#context PolicyDistributedFloodProtectionProfileBinding#context}
  */
  readonly context?: PolicyDistributedFloodProtectionProfileBindingContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#tag PolicyDistributedFloodProtectionProfileBinding#tag}
  */
  readonly tag?: PolicyDistributedFloodProtectionProfileBindingTag[] | cdktf.IResolvable;
}
export interface PolicyDistributedFloodProtectionProfileBindingContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#project_id PolicyDistributedFloodProtectionProfileBinding#project_id}
  */
  readonly projectId: string;
}

export function policyDistributedFloodProtectionProfileBindingContextToTerraform(struct?: PolicyDistributedFloodProtectionProfileBindingContextOutputReference | PolicyDistributedFloodProtectionProfileBindingContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyDistributedFloodProtectionProfileBindingContextToHclTerraform(struct?: PolicyDistributedFloodProtectionProfileBindingContextOutputReference | PolicyDistributedFloodProtectionProfileBindingContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDistributedFloodProtectionProfileBindingContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyDistributedFloodProtectionProfileBindingContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDistributedFloodProtectionProfileBindingContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyDistributedFloodProtectionProfileBindingTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#scope PolicyDistributedFloodProtectionProfileBinding#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#tag PolicyDistributedFloodProtectionProfileBinding#tag}
  */
  readonly tag?: string;
}

export function policyDistributedFloodProtectionProfileBindingTagToTerraform(struct?: PolicyDistributedFloodProtectionProfileBindingTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyDistributedFloodProtectionProfileBindingTagToHclTerraform(struct?: PolicyDistributedFloodProtectionProfileBindingTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyDistributedFloodProtectionProfileBindingTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyDistributedFloodProtectionProfileBindingTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyDistributedFloodProtectionProfileBindingTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyDistributedFloodProtectionProfileBindingTagList extends cdktf.ComplexList {
  public internalValue? : PolicyDistributedFloodProtectionProfileBindingTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyDistributedFloodProtectionProfileBindingTagOutputReference {
    return new PolicyDistributedFloodProtectionProfileBindingTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding nsxt_policy_distributed_flood_protection_profile_binding}
*/
export class PolicyDistributedFloodProtectionProfileBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_distributed_flood_protection_profile_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyDistributedFloodProtectionProfileBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyDistributedFloodProtectionProfileBinding to import
  * @param importFromId The id of the existing PolicyDistributedFloodProtectionProfileBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyDistributedFloodProtectionProfileBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_distributed_flood_protection_profile_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_distributed_flood_protection_profile_binding nsxt_policy_distributed_flood_protection_profile_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDistributedFloodProtectionProfileBindingConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDistributedFloodProtectionProfileBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_distributed_flood_protection_profile_binding',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._displayName = config.displayName;
    this._groupPath = config.groupPath;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._profilePath = config.profilePath;
    this._sequenceNumber = config.sequenceNumber;
    this._context.internalValue = config.context;
    this._tag.internalValue = config.tag;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // profile_path - computed: false, optional: false, required: true
  private _profilePath?: string; 
  public get profilePath() {
    return this.getStringAttribute('profile_path');
  }
  public set profilePath(value: string) {
    this._profilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePathInput() {
    return this._profilePath;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyDistributedFloodProtectionProfileBindingContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyDistributedFloodProtectionProfileBindingContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyDistributedFloodProtectionProfileBindingTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyDistributedFloodProtectionProfileBindingTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      group_path: cdktf.stringToTerraform(this._groupPath),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      profile_path: cdktf.stringToTerraform(this._profilePath),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
      context: policyDistributedFloodProtectionProfileBindingContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyDistributedFloodProtectionProfileBindingTagToTerraform, true)(this._tag.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_path: {
        value: cdktf.stringToHclTerraform(this._profilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_number: {
        value: cdktf.numberToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      context: {
        value: policyDistributedFloodProtectionProfileBindingContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyDistributedFloodProtectionProfileBindingContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyDistributedFloodProtectionProfileBindingTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyDistributedFloodProtectionProfileBindingTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
