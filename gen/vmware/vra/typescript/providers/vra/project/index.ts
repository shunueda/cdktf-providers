// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of administrator users associated with the project. Only administrators can manage project's configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#administrators Project#administrators}
  */
  readonly administrators?: string[];
  /**
  * The project custom properties which are added to all requests in this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#custom_properties Project#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * A human-friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The naming template to be used for resources provisioned in this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#machine_naming_template Project#machine_naming_template}
  */
  readonly machineNamingTemplate?: string;
  /**
  * List of member users associated with the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#members Project#members}
  */
  readonly members?: string[];
  /**
  * A human-friendly name used as an identifier in APIs that support this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * The timeout that should be used for Blueprint operations and Provisioning tasks. The timeout is in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#operation_timeout Project#operation_timeout}
  */
  readonly operationTimeout?: number;
  /**
  * The placement policy that will be applied when selecting a cloud zone for provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#placement_policy Project#placement_policy}
  */
  readonly placementPolicy?: string;
  /**
  * Specifies whether the resources in this projects are shared or not. If not set default will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#shared_resources Project#shared_resources}
  */
  readonly sharedResources?: boolean | cdktf.IResolvable;
  /**
  * List of viewer users associated with the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#viewers Project#viewers}
  */
  readonly viewers?: string[];
  /**
  * administrator_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#administrator_roles Project#administrator_roles}
  */
  readonly administratorRoles?: ProjectAdministratorRoles[] | cdktf.IResolvable;
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#constraints Project#constraints}
  */
  readonly constraints?: ProjectConstraints;
  /**
  * member_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#member_roles Project#member_roles}
  */
  readonly memberRoles?: ProjectMemberRoles[] | cdktf.IResolvable;
  /**
  * supervisor_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#supervisor_roles Project#supervisor_roles}
  */
  readonly supervisorRoles?: ProjectSupervisorRoles[] | cdktf.IResolvable;
  /**
  * viewer_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#viewer_roles Project#viewer_roles}
  */
  readonly viewerRoles?: ProjectViewerRoles[] | cdktf.IResolvable;
  /**
  * zone_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#zone_assignments Project#zone_assignments}
  */
  readonly zoneAssignments?: ProjectZoneAssignments[] | cdktf.IResolvable;
}
export interface ProjectAdministratorRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#email Project#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#type Project#type}
  */
  readonly type?: string;
}

export function projectAdministratorRolesToTerraform(struct?: ProjectAdministratorRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectAdministratorRolesToHclTerraform(struct?: ProjectAdministratorRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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

export class ProjectAdministratorRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectAdministratorRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectAdministratorRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._type = value.type;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ProjectAdministratorRolesList extends cdktf.ComplexList {
  public internalValue? : ProjectAdministratorRoles[] | cdktf.IResolvable

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
  public get(index: number): ProjectAdministratorRolesOutputReference {
    return new ProjectAdministratorRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectConstraintsExtensibility {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#expression Project#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#mandatory Project#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function projectConstraintsExtensibilityToTerraform(struct?: ProjectConstraintsExtensibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function projectConstraintsExtensibilityToHclTerraform(struct?: ProjectConstraintsExtensibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectConstraintsExtensibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectConstraintsExtensibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectConstraintsExtensibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._mandatory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._mandatory = value.mandatory;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // mandatory - computed: false, optional: false, required: true
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }
}

export class ProjectConstraintsExtensibilityList extends cdktf.ComplexList {
  public internalValue? : ProjectConstraintsExtensibility[] | cdktf.IResolvable

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
  public get(index: number): ProjectConstraintsExtensibilityOutputReference {
    return new ProjectConstraintsExtensibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectConstraintsNetwork {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#expression Project#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#mandatory Project#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function projectConstraintsNetworkToTerraform(struct?: ProjectConstraintsNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function projectConstraintsNetworkToHclTerraform(struct?: ProjectConstraintsNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectConstraintsNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectConstraintsNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectConstraintsNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._mandatory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._mandatory = value.mandatory;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // mandatory - computed: false, optional: false, required: true
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }
}

export class ProjectConstraintsNetworkList extends cdktf.ComplexList {
  public internalValue? : ProjectConstraintsNetwork[] | cdktf.IResolvable

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
  public get(index: number): ProjectConstraintsNetworkOutputReference {
    return new ProjectConstraintsNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectConstraintsStorage {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#expression Project#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#mandatory Project#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function projectConstraintsStorageToTerraform(struct?: ProjectConstraintsStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function projectConstraintsStorageToHclTerraform(struct?: ProjectConstraintsStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectConstraintsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectConstraintsStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectConstraintsStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._mandatory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._mandatory = value.mandatory;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // mandatory - computed: false, optional: false, required: true
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }
}

export class ProjectConstraintsStorageList extends cdktf.ComplexList {
  public internalValue? : ProjectConstraintsStorage[] | cdktf.IResolvable

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
  public get(index: number): ProjectConstraintsStorageOutputReference {
    return new ProjectConstraintsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectConstraints {
  /**
  * extensibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#extensibility Project#extensibility}
  */
  readonly extensibility?: ProjectConstraintsExtensibility[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#network Project#network}
  */
  readonly network?: ProjectConstraintsNetwork[] | cdktf.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#storage Project#storage}
  */
  readonly storage?: ProjectConstraintsStorage[] | cdktf.IResolvable;
}

export function projectConstraintsToTerraform(struct?: ProjectConstraintsOutputReference | ProjectConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extensibility: cdktf.listMapper(projectConstraintsExtensibilityToTerraform, true)(struct!.extensibility),
    network: cdktf.listMapper(projectConstraintsNetworkToTerraform, true)(struct!.network),
    storage: cdktf.listMapper(projectConstraintsStorageToTerraform, true)(struct!.storage),
  }
}


export function projectConstraintsToHclTerraform(struct?: ProjectConstraintsOutputReference | ProjectConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extensibility: {
      value: cdktf.listMapperHcl(projectConstraintsExtensibilityToHclTerraform, true)(struct!.extensibility),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectConstraintsExtensibilityList",
    },
    network: {
      value: cdktf.listMapperHcl(projectConstraintsNetworkToHclTerraform, true)(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectConstraintsNetworkList",
    },
    storage: {
      value: cdktf.listMapperHcl(projectConstraintsStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectConstraintsStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProjectConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensibility = this._extensibility?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extensibility.internalValue = undefined;
      this._network.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extensibility.internalValue = value.extensibility;
      this._network.internalValue = value.network;
      this._storage.internalValue = value.storage;
    }
  }

  // extensibility - computed: false, optional: true, required: false
  private _extensibility = new ProjectConstraintsExtensibilityList(this, "extensibility", true);
  public get extensibility() {
    return this._extensibility;
  }
  public putExtensibility(value: ProjectConstraintsExtensibility[] | cdktf.IResolvable) {
    this._extensibility.internalValue = value;
  }
  public resetExtensibility() {
    this._extensibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensibilityInput() {
    return this._extensibility.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ProjectConstraintsNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ProjectConstraintsNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new ProjectConstraintsStorageList(this, "storage", true);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ProjectConstraintsStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface ProjectMemberRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#email Project#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#type Project#type}
  */
  readonly type?: string;
}

export function projectMemberRolesToTerraform(struct?: ProjectMemberRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectMemberRolesToHclTerraform(struct?: ProjectMemberRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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

export class ProjectMemberRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectMemberRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectMemberRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._type = value.type;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ProjectMemberRolesList extends cdktf.ComplexList {
  public internalValue? : ProjectMemberRoles[] | cdktf.IResolvable

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
  public get(index: number): ProjectMemberRolesOutputReference {
    return new ProjectMemberRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSupervisorRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#email Project#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#type Project#type}
  */
  readonly type?: string;
}

export function projectSupervisorRolesToTerraform(struct?: ProjectSupervisorRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectSupervisorRolesToHclTerraform(struct?: ProjectSupervisorRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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

export class ProjectSupervisorRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSupervisorRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSupervisorRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._type = value.type;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ProjectSupervisorRolesList extends cdktf.ComplexList {
  public internalValue? : ProjectSupervisorRoles[] | cdktf.IResolvable

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
  public get(index: number): ProjectSupervisorRolesOutputReference {
    return new ProjectSupervisorRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectViewerRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#email Project#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#type Project#type}
  */
  readonly type?: string;
}

export function projectViewerRolesToTerraform(struct?: ProjectViewerRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function projectViewerRolesToHclTerraform(struct?: ProjectViewerRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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

export class ProjectViewerRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectViewerRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectViewerRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._type = value.type;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ProjectViewerRolesList extends cdktf.ComplexList {
  public internalValue? : ProjectViewerRoles[] | cdktf.IResolvable

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
  public get(index: number): ProjectViewerRolesOutputReference {
    return new ProjectViewerRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectZoneAssignments {
  /**
  * The maximum amount of cpus that can be used by this cloud zone. Default is 0 (unlimited cpu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#cpu_limit Project#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * The maximum number of instances that can be provisioned in this cloud zone. Default is 0 (unlimited instances)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#max_instances Project#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * The maximum amount of memory that can be used by this cloud zone. Default is 0 (unlimited memory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#memory_limit_mb Project#memory_limit_mb}
  */
  readonly memoryLimitMb?: number;
  /**
  * The priority of this zone in the current project. Lower numbers mean higher priority. Default is 0 (highest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#priority Project#priority}
  */
  readonly priority?: number;
  /**
  * Upper limit on storage that can be requested from a cloud zone which is part of this project. Default is 0 (unlimited storage). Supported only for vSphere cloud zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#storage_limit_gb Project#storage_limit_gb}
  */
  readonly storageLimitGb?: number;
  /**
  * The Cloud Zone Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#zone_id Project#zone_id}
  */
  readonly zoneId: string;
}

export function projectZoneAssignmentsToTerraform(struct?: ProjectZoneAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit: cdktf.numberToTerraform(struct!.cpuLimit),
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    memory_limit_mb: cdktf.numberToTerraform(struct!.memoryLimitMb),
    priority: cdktf.numberToTerraform(struct!.priority),
    storage_limit_gb: cdktf.numberToTerraform(struct!.storageLimitGb),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function projectZoneAssignmentsToHclTerraform(struct?: ProjectZoneAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit: {
      value: cdktf.numberToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_limit_gb: {
      value: cdktf.numberToHclTerraform(struct!.storageLimitGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectZoneAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectZoneAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._storageLimitGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLimitGb = this._storageLimitGb;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectZoneAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuLimit = undefined;
      this._maxInstances = undefined;
      this._memoryLimitMb = undefined;
      this._priority = undefined;
      this._storageLimitGb = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuLimit = value.cpuLimit;
      this._maxInstances = value.maxInstances;
      this._memoryLimitMb = value.memoryLimitMb;
      this._priority = value.priority;
      this._storageLimitGb = value.storageLimitGb;
      this._zoneId = value.zoneId;
    }
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: number; 
  public get memoryLimitMb() {
    return this.getNumberAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: number) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // storage_limit_gb - computed: false, optional: true, required: false
  private _storageLimitGb?: number; 
  public get storageLimitGb() {
    return this.getNumberAttribute('storage_limit_gb');
  }
  public set storageLimitGb(value: number) {
    this._storageLimitGb = value;
  }
  public resetStorageLimitGb() {
    this._storageLimitGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitGbInput() {
    return this._storageLimitGb;
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
}

export class ProjectZoneAssignmentsList extends cdktf.ComplexList {
  public internalValue? : ProjectZoneAssignments[] | cdktf.IResolvable

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
  public get(index: number): ProjectZoneAssignmentsOutputReference {
    return new ProjectZoneAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project vra_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/project vra_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_project',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrators = config.administrators;
    this._customProperties = config.customProperties;
    this._description = config.description;
    this._id = config.id;
    this._machineNamingTemplate = config.machineNamingTemplate;
    this._members = config.members;
    this._name = config.name;
    this._operationTimeout = config.operationTimeout;
    this._placementPolicy = config.placementPolicy;
    this._sharedResources = config.sharedResources;
    this._viewers = config.viewers;
    this._administratorRoles.internalValue = config.administratorRoles;
    this._constraints.internalValue = config.constraints;
    this._memberRoles.internalValue = config.memberRoles;
    this._supervisorRoles.internalValue = config.supervisorRoles;
    this._viewerRoles.internalValue = config.viewerRoles;
    this._zoneAssignments.internalValue = config.zoneAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrators - computed: false, optional: true, required: false
  private _administrators?: string[]; 
  public get administrators() {
    return cdktf.Fn.tolist(this.getListAttribute('administrators'));
  }
  public set administrators(value: string[]) {
    this._administrators = value;
  }
  public resetAdministrators() {
    this._administrators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorsInput() {
    return this._administrators;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
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

  // machine_naming_template - computed: false, optional: true, required: false
  private _machineNamingTemplate?: string; 
  public get machineNamingTemplate() {
    return this.getStringAttribute('machine_naming_template');
  }
  public set machineNamingTemplate(value: string) {
    this._machineNamingTemplate = value;
  }
  public resetMachineNamingTemplate() {
    this._machineNamingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineNamingTemplateInput() {
    return this._machineNamingTemplate;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // operation_timeout - computed: false, optional: true, required: false
  private _operationTimeout?: number; 
  public get operationTimeout() {
    return this.getNumberAttribute('operation_timeout');
  }
  public set operationTimeout(value: number) {
    this._operationTimeout = value;
  }
  public resetOperationTimeout() {
    this._operationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTimeoutInput() {
    return this._operationTimeout;
  }

  // placement_policy - computed: false, optional: true, required: false
  private _placementPolicy?: string; 
  public get placementPolicy() {
    return this.getStringAttribute('placement_policy');
  }
  public set placementPolicy(value: string) {
    this._placementPolicy = value;
  }
  public resetPlacementPolicy() {
    this._placementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementPolicyInput() {
    return this._placementPolicy;
  }

  // shared_resources - computed: false, optional: true, required: false
  private _sharedResources?: boolean | cdktf.IResolvable; 
  public get sharedResources() {
    return this.getBooleanAttribute('shared_resources');
  }
  public set sharedResources(value: boolean | cdktf.IResolvable) {
    this._sharedResources = value;
  }
  public resetSharedResources() {
    this._sharedResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedResourcesInput() {
    return this._sharedResources;
  }

  // viewers - computed: false, optional: true, required: false
  private _viewers?: string[]; 
  public get viewers() {
    return cdktf.Fn.tolist(this.getListAttribute('viewers'));
  }
  public set viewers(value: string[]) {
    this._viewers = value;
  }
  public resetViewers() {
    this._viewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewersInput() {
    return this._viewers;
  }

  // administrator_roles - computed: false, optional: true, required: false
  private _administratorRoles = new ProjectAdministratorRolesList(this, "administrator_roles", true);
  public get administratorRoles() {
    return this._administratorRoles;
  }
  public putAdministratorRoles(value: ProjectAdministratorRoles[] | cdktf.IResolvable) {
    this._administratorRoles.internalValue = value;
  }
  public resetAdministratorRoles() {
    this._administratorRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorRolesInput() {
    return this._administratorRoles.internalValue;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new ProjectConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: ProjectConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // member_roles - computed: false, optional: true, required: false
  private _memberRoles = new ProjectMemberRolesList(this, "member_roles", true);
  public get memberRoles() {
    return this._memberRoles;
  }
  public putMemberRoles(value: ProjectMemberRoles[] | cdktf.IResolvable) {
    this._memberRoles.internalValue = value;
  }
  public resetMemberRoles() {
    this._memberRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberRolesInput() {
    return this._memberRoles.internalValue;
  }

  // supervisor_roles - computed: false, optional: true, required: false
  private _supervisorRoles = new ProjectSupervisorRolesList(this, "supervisor_roles", true);
  public get supervisorRoles() {
    return this._supervisorRoles;
  }
  public putSupervisorRoles(value: ProjectSupervisorRoles[] | cdktf.IResolvable) {
    this._supervisorRoles.internalValue = value;
  }
  public resetSupervisorRoles() {
    this._supervisorRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supervisorRolesInput() {
    return this._supervisorRoles.internalValue;
  }

  // viewer_roles - computed: false, optional: true, required: false
  private _viewerRoles = new ProjectViewerRolesList(this, "viewer_roles", true);
  public get viewerRoles() {
    return this._viewerRoles;
  }
  public putViewerRoles(value: ProjectViewerRoles[] | cdktf.IResolvable) {
    this._viewerRoles.internalValue = value;
  }
  public resetViewerRoles() {
    this._viewerRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewerRolesInput() {
    return this._viewerRoles.internalValue;
  }

  // zone_assignments - computed: false, optional: true, required: false
  private _zoneAssignments = new ProjectZoneAssignmentsList(this, "zone_assignments", true);
  public get zoneAssignments() {
    return this._zoneAssignments;
  }
  public putZoneAssignments(value: ProjectZoneAssignments[] | cdktf.IResolvable) {
    this._zoneAssignments.internalValue = value;
  }
  public resetZoneAssignments() {
    this._zoneAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAssignmentsInput() {
    return this._zoneAssignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrators: cdktf.listMapper(cdktf.stringToTerraform, false)(this._administrators),
      custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._customProperties),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      machine_naming_template: cdktf.stringToTerraform(this._machineNamingTemplate),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      operation_timeout: cdktf.numberToTerraform(this._operationTimeout),
      placement_policy: cdktf.stringToTerraform(this._placementPolicy),
      shared_resources: cdktf.booleanToTerraform(this._sharedResources),
      viewers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._viewers),
      administrator_roles: cdktf.listMapper(projectAdministratorRolesToTerraform, true)(this._administratorRoles.internalValue),
      constraints: projectConstraintsToTerraform(this._constraints.internalValue),
      member_roles: cdktf.listMapper(projectMemberRolesToTerraform, true)(this._memberRoles.internalValue),
      supervisor_roles: cdktf.listMapper(projectSupervisorRolesToTerraform, true)(this._supervisorRoles.internalValue),
      viewer_roles: cdktf.listMapper(projectViewerRolesToTerraform, true)(this._viewerRoles.internalValue),
      zone_assignments: cdktf.listMapper(projectZoneAssignmentsToTerraform, true)(this._zoneAssignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrators: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._administrators),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      machine_naming_template: {
        value: cdktf.stringToHclTerraform(this._machineNamingTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_timeout: {
        value: cdktf.numberToHclTerraform(this._operationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      placement_policy: {
        value: cdktf.stringToHclTerraform(this._placementPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_resources: {
        value: cdktf.booleanToHclTerraform(this._sharedResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      viewers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._viewers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      administrator_roles: {
        value: cdktf.listMapperHcl(projectAdministratorRolesToHclTerraform, true)(this._administratorRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectAdministratorRolesList",
      },
      constraints: {
        value: projectConstraintsToHclTerraform(this._constraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectConstraintsList",
      },
      member_roles: {
        value: cdktf.listMapperHcl(projectMemberRolesToHclTerraform, true)(this._memberRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectMemberRolesList",
      },
      supervisor_roles: {
        value: cdktf.listMapperHcl(projectSupervisorRolesToHclTerraform, true)(this._supervisorRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectSupervisorRolesList",
      },
      viewer_roles: {
        value: cdktf.listMapperHcl(projectViewerRolesToHclTerraform, true)(this._viewerRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectViewerRolesList",
      },
      zone_assignments: {
        value: cdktf.listMapperHcl(projectZoneAssignmentsToHclTerraform, true)(this._zoneAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProjectZoneAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
