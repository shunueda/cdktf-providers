// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MeshControlPlaneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#description MeshControlPlane#description}
  */
  readonly description?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#features MeshControlPlane#features}
  */
  readonly features?: MeshControlPlaneFeatures[] | cdktf.IResolvable;
  /**
  * Labels to facilitate tagged search on control planes. Keys must be of length 1-63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#labels MeshControlPlane#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#name MeshControlPlane#name}
  */
  readonly name: string;
}
export interface MeshControlPlaneFeaturesHostnameGeneratorCreation {
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#enabled MeshControlPlane#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function meshControlPlaneFeaturesHostnameGeneratorCreationToTerraform(struct?: MeshControlPlaneFeaturesHostnameGeneratorCreation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function meshControlPlaneFeaturesHostnameGeneratorCreationToHclTerraform(struct?: MeshControlPlaneFeaturesHostnameGeneratorCreation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeshControlPlaneFeaturesHostnameGeneratorCreationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MeshControlPlaneFeaturesHostnameGeneratorCreation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeshControlPlaneFeaturesHostnameGeneratorCreation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MeshControlPlaneFeaturesMeshCreation {
  /**
  * Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#enabled MeshControlPlane#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function meshControlPlaneFeaturesMeshCreationToTerraform(struct?: MeshControlPlaneFeaturesMeshCreation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function meshControlPlaneFeaturesMeshCreationToHclTerraform(struct?: MeshControlPlaneFeaturesMeshCreation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MeshControlPlaneFeaturesMeshCreationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MeshControlPlaneFeaturesMeshCreation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeshControlPlaneFeaturesMeshCreation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface MeshControlPlaneFeatures {
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#hostname_generator_creation MeshControlPlane#hostname_generator_creation}
  */
  readonly hostnameGeneratorCreation?: MeshControlPlaneFeaturesHostnameGeneratorCreation;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#mesh_creation MeshControlPlane#mesh_creation}
  */
  readonly meshCreation?: MeshControlPlaneFeaturesMeshCreation;
  /**
  * Not Null; must be one of ["MeshCreation", "HostnameGeneratorCreation"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#type MeshControlPlane#type}
  */
  readonly type?: string;
}

export function meshControlPlaneFeaturesToTerraform(struct?: MeshControlPlaneFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname_generator_creation: meshControlPlaneFeaturesHostnameGeneratorCreationToTerraform(struct!.hostnameGeneratorCreation),
    mesh_creation: meshControlPlaneFeaturesMeshCreationToTerraform(struct!.meshCreation),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function meshControlPlaneFeaturesToHclTerraform(struct?: MeshControlPlaneFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname_generator_creation: {
      value: meshControlPlaneFeaturesHostnameGeneratorCreationToHclTerraform(struct!.hostnameGeneratorCreation),
      isBlock: true,
      type: "struct",
      storageClassType: "MeshControlPlaneFeaturesHostnameGeneratorCreation",
    },
    mesh_creation: {
      value: meshControlPlaneFeaturesMeshCreationToHclTerraform(struct!.meshCreation),
      isBlock: true,
      type: "struct",
      storageClassType: "MeshControlPlaneFeaturesMeshCreation",
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

export class MeshControlPlaneFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MeshControlPlaneFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnameGeneratorCreation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameGeneratorCreation = this._hostnameGeneratorCreation?.internalValue;
    }
    if (this._meshCreation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshCreation = this._meshCreation?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MeshControlPlaneFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnameGeneratorCreation.internalValue = undefined;
      this._meshCreation.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnameGeneratorCreation.internalValue = value.hostnameGeneratorCreation;
      this._meshCreation.internalValue = value.meshCreation;
      this._type = value.type;
    }
  }

  // hostname_generator_creation - computed: true, optional: true, required: false
  private _hostnameGeneratorCreation = new MeshControlPlaneFeaturesHostnameGeneratorCreationOutputReference(this, "hostname_generator_creation");
  public get hostnameGeneratorCreation() {
    return this._hostnameGeneratorCreation;
  }
  public putHostnameGeneratorCreation(value: MeshControlPlaneFeaturesHostnameGeneratorCreation) {
    this._hostnameGeneratorCreation.internalValue = value;
  }
  public resetHostnameGeneratorCreation() {
    this._hostnameGeneratorCreation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameGeneratorCreationInput() {
    return this._hostnameGeneratorCreation.internalValue;
  }

  // mesh_creation - computed: true, optional: true, required: false
  private _meshCreation = new MeshControlPlaneFeaturesMeshCreationOutputReference(this, "mesh_creation");
  public get meshCreation() {
    return this._meshCreation;
  }
  public putMeshCreation(value: MeshControlPlaneFeaturesMeshCreation) {
    this._meshCreation.internalValue = value;
  }
  public resetMeshCreation() {
    this._meshCreation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshCreationInput() {
    return this._meshCreation.internalValue;
  }

  // type - computed: true, optional: true, required: false
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

export class MeshControlPlaneFeaturesList extends cdktf.ComplexList {
  public internalValue? : MeshControlPlaneFeatures[] | cdktf.IResolvable

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
  public get(index: number): MeshControlPlaneFeaturesOutputReference {
    return new MeshControlPlaneFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane konnect_mesh_control_plane}
*/
export class MeshControlPlane extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_mesh_control_plane";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MeshControlPlane resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MeshControlPlane to import
  * @param importFromId The id of the existing MeshControlPlane that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MeshControlPlane to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_mesh_control_plane", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/mesh_control_plane konnect_mesh_control_plane} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MeshControlPlaneConfig
  */
  public constructor(scope: Construct, id: string, config: MeshControlPlaneConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_mesh_control_plane',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
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
    this._features.internalValue = config.features;
    this._labels = config.labels;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // features - computed: true, optional: true, required: false
  private _features = new MeshControlPlaneFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: MeshControlPlaneFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      features: cdktf.listMapper(meshControlPlaneFeaturesToTerraform, false)(this._features.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
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
      features: {
        value: cdktf.listMapperHcl(meshControlPlaneFeaturesToHclTerraform, false)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MeshControlPlaneFeaturesList",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
