// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensitiveDataPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#annotations SensitiveDataPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#compliances SensitiveDataPolicy#compliances}
  */
  readonly compliances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#description SensitiveDataPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#disable SensitiveDataPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#disabled_predefined_data_types SensitiveDataPolicy#disabled_predefined_data_types}
  */
  readonly disabledPredefinedDataTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#id SensitiveDataPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#labels SensitiveDataPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#name SensitiveDataPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#namespace SensitiveDataPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * custom_data_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#custom_data_types SensitiveDataPolicy#custom_data_types}
  */
  readonly customDataTypes?: SensitiveDataPolicyCustomDataTypes[] | cdktf.IResolvable;
}
export interface SensitiveDataPolicyCustomDataTypesCustomDataTypeRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#name SensitiveDataPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#namespace SensitiveDataPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#tenant SensitiveDataPolicy#tenant}
  */
  readonly tenant?: string;
}

export function sensitiveDataPolicyCustomDataTypesCustomDataTypeRefToTerraform(struct?: SensitiveDataPolicyCustomDataTypesCustomDataTypeRefOutputReference | SensitiveDataPolicyCustomDataTypesCustomDataTypeRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function sensitiveDataPolicyCustomDataTypesCustomDataTypeRefToHclTerraform(struct?: SensitiveDataPolicyCustomDataTypesCustomDataTypeRefOutputReference | SensitiveDataPolicyCustomDataTypesCustomDataTypeRef): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensitiveDataPolicyCustomDataTypesCustomDataTypeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SensitiveDataPolicyCustomDataTypesCustomDataTypeRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensitiveDataPolicyCustomDataTypesCustomDataTypeRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface SensitiveDataPolicyCustomDataTypes {
  /**
  * custom_data_type_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#custom_data_type_ref SensitiveDataPolicy#custom_data_type_ref}
  */
  readonly customDataTypeRef?: SensitiveDataPolicyCustomDataTypesCustomDataTypeRef;
}

export function sensitiveDataPolicyCustomDataTypesToTerraform(struct?: SensitiveDataPolicyCustomDataTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_data_type_ref: sensitiveDataPolicyCustomDataTypesCustomDataTypeRefToTerraform(struct!.customDataTypeRef),
  }
}


export function sensitiveDataPolicyCustomDataTypesToHclTerraform(struct?: SensitiveDataPolicyCustomDataTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_data_type_ref: {
      value: sensitiveDataPolicyCustomDataTypesCustomDataTypeRefToHclTerraform(struct!.customDataTypeRef),
      isBlock: true,
      type: "list",
      storageClassType: "SensitiveDataPolicyCustomDataTypesCustomDataTypeRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SensitiveDataPolicyCustomDataTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SensitiveDataPolicyCustomDataTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDataTypeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDataTypeRef = this._customDataTypeRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SensitiveDataPolicyCustomDataTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDataTypeRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDataTypeRef.internalValue = value.customDataTypeRef;
    }
  }

  // custom_data_type_ref - computed: false, optional: true, required: false
  private _customDataTypeRef = new SensitiveDataPolicyCustomDataTypesCustomDataTypeRefOutputReference(this, "custom_data_type_ref");
  public get customDataTypeRef() {
    return this._customDataTypeRef;
  }
  public putCustomDataTypeRef(value: SensitiveDataPolicyCustomDataTypesCustomDataTypeRef) {
    this._customDataTypeRef.internalValue = value;
  }
  public resetCustomDataTypeRef() {
    this._customDataTypeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataTypeRefInput() {
    return this._customDataTypeRef.internalValue;
  }
}

export class SensitiveDataPolicyCustomDataTypesList extends cdktf.ComplexList {
  public internalValue? : SensitiveDataPolicyCustomDataTypes[] | cdktf.IResolvable

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
  public get(index: number): SensitiveDataPolicyCustomDataTypesOutputReference {
    return new SensitiveDataPolicyCustomDataTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy volterra_sensitive_data_policy}
*/
export class SensitiveDataPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_sensitive_data_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensitiveDataPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensitiveDataPolicy to import
  * @param importFromId The id of the existing SensitiveDataPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensitiveDataPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_sensitive_data_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/sensitive_data_policy volterra_sensitive_data_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensitiveDataPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SensitiveDataPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_sensitive_data_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._compliances = config.compliances;
    this._description = config.description;
    this._disable = config.disable;
    this._disabledPredefinedDataTypes = config.disabledPredefinedDataTypes;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._customDataTypes.internalValue = config.customDataTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // compliances - computed: false, optional: true, required: false
  private _compliances?: string[]; 
  public get compliances() {
    return this.getListAttribute('compliances');
  }
  public set compliances(value: string[]) {
    this._compliances = value;
  }
  public resetCompliances() {
    this._compliances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancesInput() {
    return this._compliances;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disabled_predefined_data_types - computed: false, optional: true, required: false
  private _disabledPredefinedDataTypes?: string[]; 
  public get disabledPredefinedDataTypes() {
    return this.getListAttribute('disabled_predefined_data_types');
  }
  public set disabledPredefinedDataTypes(value: string[]) {
    this._disabledPredefinedDataTypes = value;
  }
  public resetDisabledPredefinedDataTypes() {
    this._disabledPredefinedDataTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledPredefinedDataTypesInput() {
    return this._disabledPredefinedDataTypes;
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

  // labels - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // custom_data_types - computed: false, optional: true, required: false
  private _customDataTypes = new SensitiveDataPolicyCustomDataTypesList(this, "custom_data_types", false);
  public get customDataTypes() {
    return this._customDataTypes;
  }
  public putCustomDataTypes(value: SensitiveDataPolicyCustomDataTypes[] | cdktf.IResolvable) {
    this._customDataTypes.internalValue = value;
  }
  public resetCustomDataTypes() {
    this._customDataTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataTypesInput() {
    return this._customDataTypes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      compliances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compliances),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disabled_predefined_data_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledPredefinedDataTypes),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      custom_data_types: cdktf.listMapper(sensitiveDataPolicyCustomDataTypesToTerraform, true)(this._customDataTypes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      compliances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compliances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled_predefined_data_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledPredefinedDataTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_data_types: {
        value: cdktf.listMapperHcl(sensitiveDataPolicyCustomDataTypesToHclTerraform, true)(this._customDataTypes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SensitiveDataPolicyCustomDataTypesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
