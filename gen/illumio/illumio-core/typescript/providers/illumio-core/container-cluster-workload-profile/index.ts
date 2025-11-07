// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerClusterWorkloadProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * URI of Container Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#container_cluster_href ContainerClusterWorkloadProfile#container_cluster_href}
  */
  readonly containerClusterHref: string;
  /**
  * Description of the container workload profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#description ContainerClusterWorkloadProfile#description}
  */
  readonly description?: string;
  /**
  * Enforcement mode of container workload profiles to return. Allowed values for enforcement modes are "idle", "visibility_only", "full", and "selective". Default value: "idle"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#enforcement_mode ContainerClusterWorkloadProfile#enforcement_mode}
  */
  readonly enforcementMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#id ContainerClusterWorkloadProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If the namespace is managed or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#managed ContainerClusterWorkloadProfile#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * A friendly name given to a profile if the namespace is not user-friendly. The name should be up to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#name ContainerClusterWorkloadProfile#name}
  */
  readonly name: string;
  /**
  * assign_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#assign_labels ContainerClusterWorkloadProfile#assign_labels}
  */
  readonly assignLabels?: ContainerClusterWorkloadProfileAssignLabels[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#labels ContainerClusterWorkloadProfile#labels}
  */
  readonly labels?: ContainerClusterWorkloadProfileLabels[] | cdktf.IResolvable;
}
export interface ContainerClusterWorkloadProfileAssignLabels {
  /**
  * URI of the assigned label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#href ContainerClusterWorkloadProfile#href}
  */
  readonly href: string;
}

export function containerClusterWorkloadProfileAssignLabelsToTerraform(struct?: ContainerClusterWorkloadProfileAssignLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function containerClusterWorkloadProfileAssignLabelsToHclTerraform(struct?: ContainerClusterWorkloadProfileAssignLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterWorkloadProfileAssignLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterWorkloadProfileAssignLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterWorkloadProfileAssignLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class ContainerClusterWorkloadProfileAssignLabelsList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterWorkloadProfileAssignLabels[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterWorkloadProfileAssignLabelsOutputReference {
    return new ContainerClusterWorkloadProfileAssignLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterWorkloadProfileLabelsAssignment {
  /**
  * URI of label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#href ContainerClusterWorkloadProfile#href}
  */
  readonly href: string;
}

export function containerClusterWorkloadProfileLabelsAssignmentToTerraform(struct?: ContainerClusterWorkloadProfileLabelsAssignmentOutputReference | ContainerClusterWorkloadProfileLabelsAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function containerClusterWorkloadProfileLabelsAssignmentToHclTerraform(struct?: ContainerClusterWorkloadProfileLabelsAssignmentOutputReference | ContainerClusterWorkloadProfileLabelsAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterWorkloadProfileLabelsAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterWorkloadProfileLabelsAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterWorkloadProfileLabelsAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface ContainerClusterWorkloadProfileLabelsRestriction {
  /**
  * URI of label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#href ContainerClusterWorkloadProfile#href}
  */
  readonly href: string;
}

export function containerClusterWorkloadProfileLabelsRestrictionToTerraform(struct?: ContainerClusterWorkloadProfileLabelsRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function containerClusterWorkloadProfileLabelsRestrictionToHclTerraform(struct?: ContainerClusterWorkloadProfileLabelsRestriction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterWorkloadProfileLabelsRestrictionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterWorkloadProfileLabelsRestriction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterWorkloadProfileLabelsRestriction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ContainerClusterWorkloadProfileLabelsRestrictionList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterWorkloadProfileLabelsRestriction[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterWorkloadProfileLabelsRestrictionOutputReference {
    return new ContainerClusterWorkloadProfileLabelsRestrictionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterWorkloadProfileLabels {
  /**
  * Key of the Label. The value must be a string between 1 and 64 characters long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#key ContainerClusterWorkloadProfile#key}
  */
  readonly key: string;
  /**
  * assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#assignment ContainerClusterWorkloadProfile#assignment}
  */
  readonly assignment?: ContainerClusterWorkloadProfileLabelsAssignment;
  /**
  * restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#restriction ContainerClusterWorkloadProfile#restriction}
  */
  readonly restriction?: ContainerClusterWorkloadProfileLabelsRestriction[] | cdktf.IResolvable;
}

export function containerClusterWorkloadProfileLabelsToTerraform(struct?: ContainerClusterWorkloadProfileLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    assignment: containerClusterWorkloadProfileLabelsAssignmentToTerraform(struct!.assignment),
    restriction: cdktf.listMapper(containerClusterWorkloadProfileLabelsRestrictionToTerraform, true)(struct!.restriction),
  }
}


export function containerClusterWorkloadProfileLabelsToHclTerraform(struct?: ContainerClusterWorkloadProfileLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assignment: {
      value: containerClusterWorkloadProfileLabelsAssignmentToHclTerraform(struct!.assignment),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerClusterWorkloadProfileLabelsAssignmentList",
    },
    restriction: {
      value: cdktf.listMapperHcl(containerClusterWorkloadProfileLabelsRestrictionToHclTerraform, true)(struct!.restriction),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerClusterWorkloadProfileLabelsRestrictionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterWorkloadProfileLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterWorkloadProfileLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._assignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignment = this._assignment?.internalValue;
    }
    if (this._restriction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restriction = this._restriction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterWorkloadProfileLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._assignment.internalValue = undefined;
      this._restriction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._assignment.internalValue = value.assignment;
      this._restriction.internalValue = value.restriction;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // assignment - computed: false, optional: true, required: false
  private _assignment = new ContainerClusterWorkloadProfileLabelsAssignmentOutputReference(this, "assignment");
  public get assignment() {
    return this._assignment;
  }
  public putAssignment(value: ContainerClusterWorkloadProfileLabelsAssignment) {
    this._assignment.internalValue = value;
  }
  public resetAssignment() {
    this._assignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment.internalValue;
  }

  // restriction - computed: false, optional: true, required: false
  private _restriction = new ContainerClusterWorkloadProfileLabelsRestrictionList(this, "restriction", true);
  public get restriction() {
    return this._restriction;
  }
  public putRestriction(value: ContainerClusterWorkloadProfileLabelsRestriction[] | cdktf.IResolvable) {
    this._restriction.internalValue = value;
  }
  public resetRestriction() {
    this._restriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionInput() {
    return this._restriction.internalValue;
  }
}

export class ContainerClusterWorkloadProfileLabelsList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterWorkloadProfileLabels[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterWorkloadProfileLabelsOutputReference {
    return new ContainerClusterWorkloadProfileLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile illumio-core_container_cluster_workload_profile}
*/
export class ContainerClusterWorkloadProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_container_cluster_workload_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerClusterWorkloadProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerClusterWorkloadProfile to import
  * @param importFromId The id of the existing ContainerClusterWorkloadProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerClusterWorkloadProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_container_cluster_workload_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/container_cluster_workload_profile illumio-core_container_cluster_workload_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerClusterWorkloadProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerClusterWorkloadProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_container_cluster_workload_profile',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerClusterHref = config.containerClusterHref;
    this._description = config.description;
    this._enforcementMode = config.enforcementMode;
    this._id = config.id;
    this._managed = config.managed;
    this._name = config.name;
    this._assignLabels.internalValue = config.assignLabels;
    this._labels.internalValue = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_cluster_href - computed: false, optional: false, required: true
  private _containerClusterHref?: string; 
  public get containerClusterHref() {
    return this.getStringAttribute('container_cluster_href');
  }
  public set containerClusterHref(value: string) {
    this._containerClusterHref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerClusterHrefInput() {
    return this._containerClusterHref;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
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

  // enforcement_mode - computed: false, optional: true, required: false
  private _enforcementMode?: string; 
  public get enforcementMode() {
    return this.getStringAttribute('enforcement_mode');
  }
  public set enforcementMode(value: string) {
    this._enforcementMode = value;
  }
  public resetEnforcementMode() {
    this._enforcementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementModeInput() {
    return this._enforcementMode;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // visibility_level - computed: true, optional: false, required: false
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }

  // assign_labels - computed: false, optional: true, required: false
  private _assignLabels = new ContainerClusterWorkloadProfileAssignLabelsList(this, "assign_labels", true);
  public get assignLabels() {
    return this._assignLabels;
  }
  public putAssignLabels(value: ContainerClusterWorkloadProfileAssignLabels[] | cdktf.IResolvable) {
    this._assignLabels.internalValue = value;
  }
  public resetAssignLabels() {
    this._assignLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignLabelsInput() {
    return this._assignLabels.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new ContainerClusterWorkloadProfileLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ContainerClusterWorkloadProfileLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_cluster_href: cdktf.stringToTerraform(this._containerClusterHref),
      description: cdktf.stringToTerraform(this._description),
      enforcement_mode: cdktf.stringToTerraform(this._enforcementMode),
      id: cdktf.stringToTerraform(this._id),
      managed: cdktf.booleanToTerraform(this._managed),
      name: cdktf.stringToTerraform(this._name),
      assign_labels: cdktf.listMapper(containerClusterWorkloadProfileAssignLabelsToTerraform, true)(this._assignLabels.internalValue),
      labels: cdktf.listMapper(containerClusterWorkloadProfileLabelsToTerraform, true)(this._labels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_cluster_href: {
        value: cdktf.stringToHclTerraform(this._containerClusterHref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_mode: {
        value: cdktf.stringToHclTerraform(this._enforcementMode),
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
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_labels: {
        value: cdktf.listMapperHcl(containerClusterWorkloadProfileAssignLabelsToHclTerraform, true)(this._assignLabels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerClusterWorkloadProfileAssignLabelsList",
      },
      labels: {
        value: cdktf.listMapperHcl(containerClusterWorkloadProfileLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerClusterWorkloadProfileLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
