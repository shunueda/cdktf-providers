// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformRoleAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#disabled PlatformRoleAssignments#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#id PlatformRoleAssignments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for role assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#identifier PlatformRoleAssignments#identifier}
  */
  readonly identifier?: string;
  /**
  * Managed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#managed PlatformRoleAssignments#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * Org identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#org_id PlatformRoleAssignments#org_id}
  */
  readonly orgId?: string;
  /**
  * Project Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#project_id PlatformRoleAssignments#project_id}
  */
  readonly projectId?: string;
  /**
  * Resource group identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#resource_group_identifier PlatformRoleAssignments#resource_group_identifier}
  */
  readonly resourceGroupIdentifier: string;
  /**
  * Role identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#role_identifier PlatformRoleAssignments#role_identifier}
  */
  readonly roleIdentifier: string;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#principal PlatformRoleAssignments#principal}
  */
  readonly principal: PlatformRoleAssignmentsPrincipal[] | cdktf.IResolvable;
}
export interface PlatformRoleAssignmentsPrincipal {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#identifier PlatformRoleAssignments#identifier}
  */
  readonly identifier?: string;
  /**
  * Scope level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#scope_level PlatformRoleAssignments#scope_level}
  */
  readonly scopeLevel?: string;
  /**
  * Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#type PlatformRoleAssignments#type}
  */
  readonly type: string;
}

export function platformRoleAssignmentsPrincipalToTerraform(struct?: PlatformRoleAssignmentsPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    scope_level: cdktf.stringToTerraform(struct!.scopeLevel),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformRoleAssignmentsPrincipalToHclTerraform(struct?: PlatformRoleAssignmentsPrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_level: {
      value: cdktf.stringToHclTerraform(struct!.scopeLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformRoleAssignmentsPrincipalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformRoleAssignmentsPrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._scopeLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeLevel = this._scopeLevel;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformRoleAssignmentsPrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifier = undefined;
      this._scopeLevel = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifier = value.identifier;
      this._scopeLevel = value.scopeLevel;
      this._type = value.type;
    }
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // scope_level - computed: true, optional: true, required: false
  private _scopeLevel?: string; 
  public get scopeLevel() {
    return this.getStringAttribute('scope_level');
  }
  public set scopeLevel(value: string) {
    this._scopeLevel = value;
  }
  public resetScopeLevel() {
    this._scopeLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeLevelInput() {
    return this._scopeLevel;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PlatformRoleAssignmentsPrincipalList extends cdktf.ComplexList {
  public internalValue? : PlatformRoleAssignmentsPrincipal[] | cdktf.IResolvable

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
  public get(index: number): PlatformRoleAssignmentsPrincipalOutputReference {
    return new PlatformRoleAssignmentsPrincipalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments harness_platform_role_assignments}
*/
export class PlatformRoleAssignments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_role_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformRoleAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformRoleAssignments to import
  * @param importFromId The id of the existing PlatformRoleAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformRoleAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_role_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_role_assignments harness_platform_role_assignments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformRoleAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformRoleAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_role_assignments',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._id = config.id;
    this._identifier = config.identifier;
    this._managed = config.managed;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._resourceGroupIdentifier = config.resourceGroupIdentifier;
    this._roleIdentifier = config.roleIdentifier;
    this._principal.internalValue = config.principal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // resource_group_identifier - computed: false, optional: false, required: true
  private _resourceGroupIdentifier?: string; 
  public get resourceGroupIdentifier() {
    return this.getStringAttribute('resource_group_identifier');
  }
  public set resourceGroupIdentifier(value: string) {
    this._resourceGroupIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdentifierInput() {
    return this._resourceGroupIdentifier;
  }

  // role_identifier - computed: false, optional: false, required: true
  private _roleIdentifier?: string; 
  public get roleIdentifier() {
    return this.getStringAttribute('role_identifier');
  }
  public set roleIdentifier(value: string) {
    this._roleIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdentifierInput() {
    return this._roleIdentifier;
  }

  // principal - computed: false, optional: false, required: true
  private _principal = new PlatformRoleAssignmentsPrincipalList(this, "principal", false);
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: PlatformRoleAssignmentsPrincipal[] | cdktf.IResolvable) {
    this._principal.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      managed: cdktf.booleanToTerraform(this._managed),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_group_identifier: cdktf.stringToTerraform(this._resourceGroupIdentifier),
      role_identifier: cdktf.stringToTerraform(this._roleIdentifier),
      principal: cdktf.listMapper(platformRoleAssignmentsPrincipalToTerraform, true)(this._principal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_identifier: {
        value: cdktf.stringToHclTerraform(this._resourceGroupIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_identifier: {
        value: cdktf.stringToHclTerraform(this._roleIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.listMapperHcl(platformRoleAssignmentsPrincipalToHclTerraform, true)(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformRoleAssignmentsPrincipalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
