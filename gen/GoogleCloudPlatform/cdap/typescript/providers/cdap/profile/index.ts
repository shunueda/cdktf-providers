// https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#description Profile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#id Profile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A user friendly label for the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#label Profile#label}
  */
  readonly label: string;
  /**
  * The name of the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#name Profile#name}
  */
  readonly name: string;
  /**
  * The name of the namespace in which this resource belongs. If not provided, the default namespace is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#namespace Profile#namespace}
  */
  readonly namespace?: string;
  /**
  * profile_provisioner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#profile_provisioner Profile#profile_provisioner}
  */
  readonly profileProvisioner: ProfileProfileProvisioner;
}
export interface ProfileProfileProvisionerProperties {
  /**
  * Whether the value can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#is_editable Profile#is_editable}
  */
  readonly isEditable: boolean | cdktf.IResolvable;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#name Profile#name}
  */
  readonly name: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#value Profile#value}
  */
  readonly value: string;
}

export function profileProfileProvisionerPropertiesToTerraform(struct?: ProfileProfileProvisionerProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_editable: cdktf.booleanToTerraform(struct!.isEditable),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function profileProfileProvisionerPropertiesToHclTerraform(struct?: ProfileProfileProvisionerProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_editable: {
      value: cdktf.booleanToHclTerraform(struct!.isEditable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileProfileProvisionerPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileProfileProvisionerProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEditable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEditable = this._isEditable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileProfileProvisionerProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEditable = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEditable = value.isEditable;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_editable - computed: false, optional: false, required: true
  private _isEditable?: boolean | cdktf.IResolvable; 
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }
  public set isEditable(value: boolean | cdktf.IResolvable) {
    this._isEditable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEditableInput() {
    return this._isEditable;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProfileProfileProvisionerPropertiesList extends cdktf.ComplexList {
  public internalValue? : ProfileProfileProvisionerProperties[] | cdktf.IResolvable

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
  public get(index: number): ProfileProfileProvisionerPropertiesOutputReference {
    return new ProfileProfileProvisionerPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileProfileProvisioner {
  /**
  * The name of the provisioner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#name Profile#name}
  */
  readonly name: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#properties Profile#properties}
  */
  readonly properties: ProfileProfileProvisionerProperties[] | cdktf.IResolvable;
}

export function profileProfileProvisionerToTerraform(struct?: ProfileProfileProvisionerOutputReference | ProfileProfileProvisioner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    properties: cdktf.listMapper(profileProfileProvisionerPropertiesToTerraform, true)(struct!.properties),
  }
}


export function profileProfileProvisionerToHclTerraform(struct?: ProfileProfileProvisionerOutputReference | ProfileProfileProvisioner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(profileProfileProvisionerPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "ProfileProfileProvisionerPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileProfileProvisionerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProfileProfileProvisioner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileProfileProvisioner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._properties.internalValue = value.properties;
    }
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

  // properties - computed: false, optional: false, required: true
  private _properties = new ProfileProfileProvisionerPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: ProfileProfileProvisionerProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile cdap_profile}
*/
export class Profile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdap_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Profile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Profile to import
  * @param importFromId The id of the existing Profile that should be imported. Refer to the {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Profile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdap_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/profile cdap_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'cdap_profile',
      terraformGeneratorMetadata: {
        providerName: 'cdap',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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
    this._label = config.label;
    this._name = config.name;
    this._namespace = config.namespace;
    this._profileProvisioner.internalValue = config.profileProvisioner;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // profile_provisioner - computed: false, optional: false, required: true
  private _profileProvisioner = new ProfileProfileProvisionerOutputReference(this, "profile_provisioner");
  public get profileProvisioner() {
    return this._profileProvisioner;
  }
  public putProfileProvisioner(value: ProfileProfileProvisioner) {
    this._profileProvisioner.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileProvisionerInput() {
    return this._profileProvisioner.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      profile_provisioner: profileProfileProvisionerToTerraform(this._profileProvisioner.internalValue),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_provisioner: {
        value: profileProfileProvisionerToHclTerraform(this._profileProvisioner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileProfileProvisionerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
