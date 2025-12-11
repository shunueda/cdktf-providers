// https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CatalogLabelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of catalog labels to manage. At least one label is required. Maximum of 500 labels can be created in a single operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#labels CatalogLabels#labels}
  */
  readonly labels?: CatalogLabelsLabels[] | cdktf.IResolvable;
  /**
  * Set of package assignments. Assigns labels to packages. Note: Only one label per package is supported by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#package_assignments CatalogLabels#package_assignments}
  */
  readonly packageAssignments?: CatalogLabelsPackageAssignments[] | cdktf.IResolvable;
  /**
  * Set of package version assignments. Assigns labels to specific package versions. Note: Only one label per package version is supported by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#version_assignments CatalogLabels#version_assignments}
  */
  readonly versionAssignments?: CatalogLabelsVersionAssignments[] | cdktf.IResolvable;
}
export interface CatalogLabelsLabels {
  /**
  * Description of the catalog label. Must have at most 300 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#description CatalogLabels#description}
  */
  readonly description: string;
  /**
  * The name of the catalog label. Must be unique and have at most 15 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#name CatalogLabels#name}
  */
  readonly name: string;
}

export function catalogLabelsLabelsToTerraform(struct?: CatalogLabelsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function catalogLabelsLabelsToHclTerraform(struct?: CatalogLabelsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogLabelsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CatalogLabelsLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogLabelsLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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
}

export class CatalogLabelsLabelsList extends cdktf.ComplexList {
  public internalValue? : CatalogLabelsLabels[] | cdktf.IResolvable

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
  public get(index: number): CatalogLabelsLabelsOutputReference {
    return new CatalogLabelsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogLabelsPackageAssignments {
  /**
  * Label name to assign to the package. API supports only 1 label per assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#label_name CatalogLabels#label_name}
  */
  readonly labelName: string;
  /**
  * Name of the package to assign labels to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#package_name CatalogLabels#package_name}
  */
  readonly packageName: string;
  /**
  * Type of the package (e.g., npm, maven, docker, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#package_type CatalogLabels#package_type}
  */
  readonly packageType: string;
}

export function catalogLabelsPackageAssignmentsToTerraform(struct?: CatalogLabelsPackageAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    package_type: cdktf.stringToTerraform(struct!.packageType),
  }
}


export function catalogLabelsPackageAssignmentsToHclTerraform(struct?: CatalogLabelsPackageAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_name: {
      value: cdktf.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_type: {
      value: cdktf.stringToHclTerraform(struct!.packageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogLabelsPackageAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CatalogLabelsPackageAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._packageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageType = this._packageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogLabelsPackageAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName = undefined;
      this._packageName = undefined;
      this._packageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName = value.labelName;
      this._packageName = value.packageName;
      this._packageType = value.packageType;
    }
  }

  // label_name - computed: false, optional: false, required: true
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }

  // package_name - computed: false, optional: false, required: true
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }
}

export class CatalogLabelsPackageAssignmentsList extends cdktf.ComplexList {
  public internalValue? : CatalogLabelsPackageAssignments[] | cdktf.IResolvable

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
  public get(index: number): CatalogLabelsPackageAssignmentsOutputReference {
    return new CatalogLabelsPackageAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CatalogLabelsVersionAssignments {
  /**
  * Label name to assign to the package version. API supports only 1 label per assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#label_name CatalogLabels#label_name}
  */
  readonly labelName: string;
  /**
  * Name of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#package_name CatalogLabels#package_name}
  */
  readonly packageName: string;
  /**
  * Type of the package (e.g., npm, maven, docker, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#package_type CatalogLabels#package_type}
  */
  readonly packageType: string;
  /**
  * List of versions for bulk assignment with the same label. Must contain at least one non-empty version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#versions CatalogLabels#versions}
  */
  readonly versions: string[];
}

export function catalogLabelsVersionAssignmentsToTerraform(struct?: CatalogLabelsVersionAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_name: cdktf.stringToTerraform(struct!.labelName),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    package_type: cdktf.stringToTerraform(struct!.packageType),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function catalogLabelsVersionAssignmentsToHclTerraform(struct?: CatalogLabelsVersionAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_name: {
      value: cdktf.stringToHclTerraform(struct!.labelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_type: {
      value: cdktf.stringToHclTerraform(struct!.packageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CatalogLabelsVersionAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CatalogLabelsVersionAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelName = this._labelName;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._packageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageType = this._packageType;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CatalogLabelsVersionAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelName = undefined;
      this._packageName = undefined;
      this._packageType = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelName = value.labelName;
      this._packageName = value.packageName;
      this._packageType = value.packageType;
      this._versions = value.versions;
    }
  }

  // label_name - computed: false, optional: false, required: true
  private _labelName?: string; 
  public get labelName() {
    return this.getStringAttribute('label_name');
  }
  public set labelName(value: string) {
    this._labelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameInput() {
    return this._labelName;
  }

  // package_name - computed: false, optional: false, required: true
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // versions - computed: false, optional: false, required: true
  private _versions?: string[]; 
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class CatalogLabelsVersionAssignmentsList extends cdktf.ComplexList {
  public internalValue? : CatalogLabelsVersionAssignments[] | cdktf.IResolvable

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
  public get(index: number): CatalogLabelsVersionAssignmentsOutputReference {
    return new CatalogLabelsVersionAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels xray_catalog_labels}
*/
export class CatalogLabels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xray_catalog_labels";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CatalogLabels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CatalogLabels to import
  * @param importFromId The id of the existing CatalogLabels that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CatalogLabels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xray_catalog_labels", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/xray/3.1.5/docs/resources/catalog_labels xray_catalog_labels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CatalogLabelsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CatalogLabelsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'xray_catalog_labels',
      terraformGeneratorMetadata: {
        providerName: 'xray',
        providerVersion: '3.1.5',
        providerVersionConstraint: '3.1.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels.internalValue = config.labels;
    this._packageAssignments.internalValue = config.packageAssignments;
    this._versionAssignments.internalValue = config.versionAssignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // labels - computed: false, optional: true, required: false
  private _labels = new CatalogLabelsLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: CatalogLabelsLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // package_assignments - computed: false, optional: true, required: false
  private _packageAssignments = new CatalogLabelsPackageAssignmentsList(this, "package_assignments", true);
  public get packageAssignments() {
    return this._packageAssignments;
  }
  public putPackageAssignments(value: CatalogLabelsPackageAssignments[] | cdktf.IResolvable) {
    this._packageAssignments.internalValue = value;
  }
  public resetPackageAssignments() {
    this._packageAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageAssignmentsInput() {
    return this._packageAssignments.internalValue;
  }

  // version_assignments - computed: false, optional: true, required: false
  private _versionAssignments = new CatalogLabelsVersionAssignmentsList(this, "version_assignments", true);
  public get versionAssignments() {
    return this._versionAssignments;
  }
  public putVersionAssignments(value: CatalogLabelsVersionAssignments[] | cdktf.IResolvable) {
    this._versionAssignments.internalValue = value;
  }
  public resetVersionAssignments() {
    this._versionAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionAssignmentsInput() {
    return this._versionAssignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.listMapper(catalogLabelsLabelsToTerraform, false)(this._labels.internalValue),
      package_assignments: cdktf.listMapper(catalogLabelsPackageAssignmentsToTerraform, false)(this._packageAssignments.internalValue),
      version_assignments: cdktf.listMapper(catalogLabelsVersionAssignmentsToTerraform, false)(this._versionAssignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.listMapperHcl(catalogLabelsLabelsToHclTerraform, false)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CatalogLabelsLabelsList",
      },
      package_assignments: {
        value: cdktf.listMapperHcl(catalogLabelsPackageAssignmentsToHclTerraform, false)(this._packageAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CatalogLabelsPackageAssignmentsList",
      },
      version_assignments: {
        value: cdktf.listMapperHcl(catalogLabelsVersionAssignmentsToHclTerraform, false)(this._versionAssignments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CatalogLabelsVersionAssignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
