// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVraProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of administrator users associated with the project. Only administrators can manage project's configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#administrators DataVraProject#administrators}
  */
  readonly administrators?: string[];
  /**
  * The project custom properties which are added to all requests in this project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#custom_properties DataVraProject#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * A human-friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#description DataVraProject#description}
  */
  readonly description?: string;
  /**
  * The id of this project resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#id DataVraProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The naming template to be used for resources provisioned in this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#machine_naming_template DataVraProject#machine_naming_template}
  */
  readonly machineNamingTemplate?: string;
  /**
  * List of member users associated with the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#members DataVraProject#members}
  */
  readonly members?: string[];
  /**
  * A human-friendly name used as an identifier in APIs that support this option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#name DataVraProject#name}
  */
  readonly name?: string;
  /**
  * The timeout that should be used for Blueprint operations and Provisioning tasks. The timeout is in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#operation_timeout DataVraProject#operation_timeout}
  */
  readonly operationTimeout?: number;
  /**
  * The placement policy that will be applied when selecting a cloud zone for provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#placement_policy DataVraProject#placement_policy}
  */
  readonly placementPolicy?: string;
  /**
  * Specifies whether the resources in this projects are shared or not. If not set default will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#shared_resources DataVraProject#shared_resources}
  */
  readonly sharedResources?: boolean | cdktf.IResolvable;
  /**
  * List of viewer users associated with the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#viewers DataVraProject#viewers}
  */
  readonly viewers?: string[];
  /**
  * administrator_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#administrator_roles DataVraProject#administrator_roles}
  */
  readonly administratorRoles?: DataVraProjectAdministratorRoles[] | cdktf.IResolvable;
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#constraints DataVraProject#constraints}
  */
  readonly constraints?: DataVraProjectConstraints;
  /**
  * member_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#member_roles DataVraProject#member_roles}
  */
  readonly memberRoles?: DataVraProjectMemberRoles[] | cdktf.IResolvable;
  /**
  * supervisor_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#supervisor_roles DataVraProject#supervisor_roles}
  */
  readonly supervisorRoles?: DataVraProjectSupervisorRoles[] | cdktf.IResolvable;
  /**
  * viewer_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#viewer_roles DataVraProject#viewer_roles}
  */
  readonly viewerRoles?: DataVraProjectViewerRoles[] | cdktf.IResolvable;
  /**
  * zone_assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#zone_assignments DataVraProject#zone_assignments}
  */
  readonly zoneAssignments?: DataVraProjectZoneAssignments[] | cdktf.IResolvable;
}
export interface DataVraProjectAdministratorRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#email DataVraProject#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#type DataVraProject#type}
  */
  readonly type?: string;
}

export function dataVraProjectAdministratorRolesToTerraform(struct?: DataVraProjectAdministratorRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataVraProjectAdministratorRolesToHclTerraform(struct?: DataVraProjectAdministratorRoles | cdktf.IResolvable): any {
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

export class DataVraProjectAdministratorRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectAdministratorRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataVraProjectAdministratorRoles | cdktf.IResolvable | undefined) {
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

export class DataVraProjectAdministratorRolesList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectAdministratorRoles[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectAdministratorRolesOutputReference {
    return new DataVraProjectAdministratorRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraProjectConstraintsExtensibility {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#expression DataVraProject#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#mandatory DataVraProject#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function dataVraProjectConstraintsExtensibilityToTerraform(struct?: DataVraProjectConstraintsExtensibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function dataVraProjectConstraintsExtensibilityToHclTerraform(struct?: DataVraProjectConstraintsExtensibility | cdktf.IResolvable): any {
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

export class DataVraProjectConstraintsExtensibilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectConstraintsExtensibility | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataVraProjectConstraintsExtensibility | cdktf.IResolvable | undefined) {
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

export class DataVraProjectConstraintsExtensibilityList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectConstraintsExtensibility[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectConstraintsExtensibilityOutputReference {
    return new DataVraProjectConstraintsExtensibilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraProjectConstraintsNetwork {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#expression DataVraProject#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#mandatory DataVraProject#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function dataVraProjectConstraintsNetworkToTerraform(struct?: DataVraProjectConstraintsNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function dataVraProjectConstraintsNetworkToHclTerraform(struct?: DataVraProjectConstraintsNetwork | cdktf.IResolvable): any {
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

export class DataVraProjectConstraintsNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectConstraintsNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataVraProjectConstraintsNetwork | cdktf.IResolvable | undefined) {
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

export class DataVraProjectConstraintsNetworkList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectConstraintsNetwork[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectConstraintsNetworkOutputReference {
    return new DataVraProjectConstraintsNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraProjectConstraintsStorage {
  /**
  * An expression of the form "[!]tag-key[:[tag-value]]", used to indicate a constraint match on keys and values of tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#expression DataVraProject#expression}
  */
  readonly expression: string;
  /**
  * Indicates whether this constraint should be strictly enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#mandatory DataVraProject#mandatory}
  */
  readonly mandatory: boolean | cdktf.IResolvable;
}

export function dataVraProjectConstraintsStorageToTerraform(struct?: DataVraProjectConstraintsStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
  }
}


export function dataVraProjectConstraintsStorageToHclTerraform(struct?: DataVraProjectConstraintsStorage | cdktf.IResolvable): any {
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

export class DataVraProjectConstraintsStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectConstraintsStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataVraProjectConstraintsStorage | cdktf.IResolvable | undefined) {
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

export class DataVraProjectConstraintsStorageList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectConstraintsStorage[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectConstraintsStorageOutputReference {
    return new DataVraProjectConstraintsStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraProjectConstraints {
  /**
  * extensibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#extensibility DataVraProject#extensibility}
  */
  readonly extensibility?: DataVraProjectConstraintsExtensibility[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#network DataVraProject#network}
  */
  readonly network?: DataVraProjectConstraintsNetwork[] | cdktf.IResolvable;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#storage DataVraProject#storage}
  */
  readonly storage?: DataVraProjectConstraintsStorage[] | cdktf.IResolvable;
}

export function dataVraProjectConstraintsToTerraform(struct?: DataVraProjectConstraintsOutputReference | DataVraProjectConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extensibility: cdktf.listMapper(dataVraProjectConstraintsExtensibilityToTerraform, true)(struct!.extensibility),
    network: cdktf.listMapper(dataVraProjectConstraintsNetworkToTerraform, true)(struct!.network),
    storage: cdktf.listMapper(dataVraProjectConstraintsStorageToTerraform, true)(struct!.storage),
  }
}


export function dataVraProjectConstraintsToHclTerraform(struct?: DataVraProjectConstraintsOutputReference | DataVraProjectConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extensibility: {
      value: cdktf.listMapperHcl(dataVraProjectConstraintsExtensibilityToHclTerraform, true)(struct!.extensibility),
      isBlock: true,
      type: "set",
      storageClassType: "DataVraProjectConstraintsExtensibilityList",
    },
    network: {
      value: cdktf.listMapperHcl(dataVraProjectConstraintsNetworkToHclTerraform, true)(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "DataVraProjectConstraintsNetworkList",
    },
    storage: {
      value: cdktf.listMapperHcl(dataVraProjectConstraintsStorageToHclTerraform, true)(struct!.storage),
      isBlock: true,
      type: "set",
      storageClassType: "DataVraProjectConstraintsStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVraProjectConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataVraProjectConstraints | undefined {
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

  public set internalValue(value: DataVraProjectConstraints | undefined) {
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
  private _extensibility = new DataVraProjectConstraintsExtensibilityList(this, "extensibility", true);
  public get extensibility() {
    return this._extensibility;
  }
  public putExtensibility(value: DataVraProjectConstraintsExtensibility[] | cdktf.IResolvable) {
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
  private _network = new DataVraProjectConstraintsNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataVraProjectConstraintsNetwork[] | cdktf.IResolvable) {
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
  private _storage = new DataVraProjectConstraintsStorageList(this, "storage", true);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataVraProjectConstraintsStorage[] | cdktf.IResolvable) {
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
export interface DataVraProjectMemberRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#email DataVraProject#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#type DataVraProject#type}
  */
  readonly type?: string;
}

export function dataVraProjectMemberRolesToTerraform(struct?: DataVraProjectMemberRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataVraProjectMemberRolesToHclTerraform(struct?: DataVraProjectMemberRoles | cdktf.IResolvable): any {
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

export class DataVraProjectMemberRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectMemberRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataVraProjectMemberRoles | cdktf.IResolvable | undefined) {
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

export class DataVraProjectMemberRolesList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectMemberRoles[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectMemberRolesOutputReference {
    return new DataVraProjectMemberRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraProjectSupervisorRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#email DataVraProject#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#type DataVraProject#type}
  */
  readonly type?: string;
}

export function dataVraProjectSupervisorRolesToTerraform(struct?: DataVraProjectSupervisorRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataVraProjectSupervisorRolesToHclTerraform(struct?: DataVraProjectSupervisorRoles | cdktf.IResolvable): any {
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

export class DataVraProjectSupervisorRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectSupervisorRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataVraProjectSupervisorRoles | cdktf.IResolvable | undefined) {
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

export class DataVraProjectSupervisorRolesList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectSupervisorRoles[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectSupervisorRolesOutputReference {
    return new DataVraProjectSupervisorRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraProjectViewerRoles {
  /**
  * The email of the user or name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#email DataVraProject#email}
  */
  readonly email: string;
  /**
  * Type of the principal. Currently supported ‘user’ (default) and 'group’.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#type DataVraProject#type}
  */
  readonly type?: string;
}

export function dataVraProjectViewerRolesToTerraform(struct?: DataVraProjectViewerRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataVraProjectViewerRolesToHclTerraform(struct?: DataVraProjectViewerRoles | cdktf.IResolvable): any {
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

export class DataVraProjectViewerRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectViewerRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataVraProjectViewerRoles | cdktf.IResolvable | undefined) {
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

export class DataVraProjectViewerRolesList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectViewerRoles[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectViewerRolesOutputReference {
    return new DataVraProjectViewerRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVraProjectZoneAssignments {
  /**
  * The maximum amount of cpus that can be used by this cloud zone. Default is 0 (unlimited cpu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#cpu_limit DataVraProject#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * The maximum number of instances that can be provisioned in this cloud zone. Default is 0 (unlimited instances)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#max_instances DataVraProject#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * The maximum amount of memory that can be used by this cloud zone. Default is 0 (unlimited memory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#memory_limit_mb DataVraProject#memory_limit_mb}
  */
  readonly memoryLimitMb?: number;
  /**
  * The priority of this zone in the current project. Lower numbers mean higher priority. Default is 0 (highest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#priority DataVraProject#priority}
  */
  readonly priority?: number;
  /**
  * Upper limit on storage that can be requested from a cloud zone which is part of this project. Default is 0 (unlimited storage). Supported only for vSphere cloud zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#storage_limit_gb DataVraProject#storage_limit_gb}
  */
  readonly storageLimitGb?: number;
}

export function dataVraProjectZoneAssignmentsToTerraform(struct?: DataVraProjectZoneAssignments | cdktf.IResolvable): any {
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
  }
}


export function dataVraProjectZoneAssignmentsToHclTerraform(struct?: DataVraProjectZoneAssignments | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVraProjectZoneAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVraProjectZoneAssignments | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVraProjectZoneAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuLimit = undefined;
      this._maxInstances = undefined;
      this._memoryLimitMb = undefined;
      this._priority = undefined;
      this._storageLimitGb = undefined;
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
    }
  }

  // cpu_limit - computed: true, optional: true, required: false
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

  // max_instances - computed: true, optional: true, required: false
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

  // memory_limit_mb - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
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

  // storage_limit_gb - computed: true, optional: true, required: false
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

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataVraProjectZoneAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DataVraProjectZoneAssignments[] | cdktf.IResolvable

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
  public get(index: number): DataVraProjectZoneAssignmentsOutputReference {
    return new DataVraProjectZoneAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project vra_project}
*/
export class DataVraProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVraProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVraProject to import
  * @param importFromId The id of the existing DataVraProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVraProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/data-sources/project vra_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVraProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVraProjectConfig = {}) {
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

  // administrators - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // members - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // shared_resources - computed: true, optional: true, required: false
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

  // viewers - computed: true, optional: true, required: false
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
  private _administratorRoles = new DataVraProjectAdministratorRolesList(this, "administrator_roles", true);
  public get administratorRoles() {
    return this._administratorRoles;
  }
  public putAdministratorRoles(value: DataVraProjectAdministratorRoles[] | cdktf.IResolvable) {
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
  private _constraints = new DataVraProjectConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: DataVraProjectConstraints) {
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
  private _memberRoles = new DataVraProjectMemberRolesList(this, "member_roles", true);
  public get memberRoles() {
    return this._memberRoles;
  }
  public putMemberRoles(value: DataVraProjectMemberRoles[] | cdktf.IResolvable) {
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
  private _supervisorRoles = new DataVraProjectSupervisorRolesList(this, "supervisor_roles", true);
  public get supervisorRoles() {
    return this._supervisorRoles;
  }
  public putSupervisorRoles(value: DataVraProjectSupervisorRoles[] | cdktf.IResolvable) {
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
  private _viewerRoles = new DataVraProjectViewerRolesList(this, "viewer_roles", true);
  public get viewerRoles() {
    return this._viewerRoles;
  }
  public putViewerRoles(value: DataVraProjectViewerRoles[] | cdktf.IResolvable) {
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
  private _zoneAssignments = new DataVraProjectZoneAssignmentsList(this, "zone_assignments", true);
  public get zoneAssignments() {
    return this._zoneAssignments;
  }
  public putZoneAssignments(value: DataVraProjectZoneAssignments[] | cdktf.IResolvable) {
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
      administrator_roles: cdktf.listMapper(dataVraProjectAdministratorRolesToTerraform, true)(this._administratorRoles.internalValue),
      constraints: dataVraProjectConstraintsToTerraform(this._constraints.internalValue),
      member_roles: cdktf.listMapper(dataVraProjectMemberRolesToTerraform, true)(this._memberRoles.internalValue),
      supervisor_roles: cdktf.listMapper(dataVraProjectSupervisorRolesToTerraform, true)(this._supervisorRoles.internalValue),
      viewer_roles: cdktf.listMapper(dataVraProjectViewerRolesToTerraform, true)(this._viewerRoles.internalValue),
      zone_assignments: cdktf.listMapper(dataVraProjectZoneAssignmentsToTerraform, true)(this._zoneAssignments.internalValue),
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
        value: cdktf.listMapperHcl(dataVraProjectAdministratorRolesToHclTerraform, true)(this._administratorRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVraProjectAdministratorRolesList",
      },
      constraints: {
        value: dataVraProjectConstraintsToHclTerraform(this._constraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVraProjectConstraintsList",
      },
      member_roles: {
        value: cdktf.listMapperHcl(dataVraProjectMemberRolesToHclTerraform, true)(this._memberRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVraProjectMemberRolesList",
      },
      supervisor_roles: {
        value: cdktf.listMapperHcl(dataVraProjectSupervisorRolesToHclTerraform, true)(this._supervisorRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVraProjectSupervisorRolesList",
      },
      viewer_roles: {
        value: cdktf.listMapperHcl(dataVraProjectViewerRolesToHclTerraform, true)(this._viewerRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVraProjectViewerRolesList",
      },
      zone_assignments: {
        value: cdktf.listMapperHcl(dataVraProjectZoneAssignmentsToHclTerraform, true)(this._zoneAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVraProjectZoneAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
