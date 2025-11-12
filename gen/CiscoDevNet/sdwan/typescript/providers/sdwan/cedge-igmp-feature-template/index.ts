// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CedgeIgmpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#description CedgeIgmpFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#device_types CedgeIgmpFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Set IGMP interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#interfaces CedgeIgmpFeatureTemplate#interfaces}
  */
  readonly interfaces?: CedgeIgmpFeatureTemplateInterfaces[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#name CedgeIgmpFeatureTemplate#name}
  */
  readonly name: string;
}
export interface CedgeIgmpFeatureTemplateInterfacesJoinGroups {
  /**
  * Set group address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#group_address CedgeIgmpFeatureTemplate#group_address}
  */
  readonly groupAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#group_address_variable CedgeIgmpFeatureTemplate#group_address_variable}
  */
  readonly groupAddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#optional CedgeIgmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#source CedgeIgmpFeatureTemplate#source}
  */
  readonly source?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#source_variable CedgeIgmpFeatureTemplate#source_variable}
  */
  readonly sourceVariable?: string;
}

export function cedgeIgmpFeatureTemplateInterfacesJoinGroupsToTerraform(struct?: CedgeIgmpFeatureTemplateInterfacesJoinGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_address: cdktf.stringToTerraform(struct!.groupAddress),
    group_address_variable: cdktf.stringToTerraform(struct!.groupAddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    source: cdktf.stringToTerraform(struct!.source),
    source_variable: cdktf.stringToTerraform(struct!.sourceVariable),
  }
}


export function cedgeIgmpFeatureTemplateInterfacesJoinGroupsToHclTerraform(struct?: CedgeIgmpFeatureTemplateInterfacesJoinGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_address: {
      value: cdktf.stringToHclTerraform(struct!.groupAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.groupAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeIgmpFeatureTemplateInterfacesJoinGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeIgmpFeatureTemplateInterfacesJoinGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAddress = this._groupAddress;
    }
    if (this._groupAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAddressVariable = this._groupAddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVariable = this._sourceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeIgmpFeatureTemplateInterfacesJoinGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAddress = undefined;
      this._groupAddressVariable = undefined;
      this._optional = undefined;
      this._source = undefined;
      this._sourceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAddress = value.groupAddress;
      this._groupAddressVariable = value.groupAddressVariable;
      this._optional = value.optional;
      this._source = value.source;
      this._sourceVariable = value.sourceVariable;
    }
  }

  // group_address - computed: false, optional: true, required: false
  private _groupAddress?: string; 
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }
  public set groupAddress(value: string) {
    this._groupAddress = value;
  }
  public resetGroupAddress() {
    this._groupAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddressInput() {
    return this._groupAddress;
  }

  // group_address_variable - computed: false, optional: true, required: false
  private _groupAddressVariable?: string; 
  public get groupAddressVariable() {
    return this.getStringAttribute('group_address_variable');
  }
  public set groupAddressVariable(value: string) {
    this._groupAddressVariable = value;
  }
  public resetGroupAddressVariable() {
    this._groupAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddressVariableInput() {
    return this._groupAddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_variable - computed: false, optional: true, required: false
  private _sourceVariable?: string; 
  public get sourceVariable() {
    return this.getStringAttribute('source_variable');
  }
  public set sourceVariable(value: string) {
    this._sourceVariable = value;
  }
  public resetSourceVariable() {
    this._sourceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVariableInput() {
    return this._sourceVariable;
  }
}

export class CedgeIgmpFeatureTemplateInterfacesJoinGroupsList extends cdktf.ComplexList {
  public internalValue? : CedgeIgmpFeatureTemplateInterfacesJoinGroups[] | cdktf.IResolvable

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
  public get(index: number): CedgeIgmpFeatureTemplateInterfacesJoinGroupsOutputReference {
    return new CedgeIgmpFeatureTemplateInterfacesJoinGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgeIgmpFeatureTemplateInterfaces {
  /**
  * Configure static joins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#join_groups CedgeIgmpFeatureTemplate#join_groups}
  */
  readonly joinGroups?: CedgeIgmpFeatureTemplateInterfacesJoinGroups[] | cdktf.IResolvable;
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#name CedgeIgmpFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#name_variable CedgeIgmpFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#optional CedgeIgmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function cedgeIgmpFeatureTemplateInterfacesToTerraform(struct?: CedgeIgmpFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    join_groups: cdktf.listMapper(cedgeIgmpFeatureTemplateInterfacesJoinGroupsToTerraform, false)(struct!.joinGroups),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function cedgeIgmpFeatureTemplateInterfacesToHclTerraform(struct?: CedgeIgmpFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    join_groups: {
      value: cdktf.listMapperHcl(cedgeIgmpFeatureTemplateInterfacesJoinGroupsToHclTerraform, false)(struct!.joinGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CedgeIgmpFeatureTemplateInterfacesJoinGroupsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgeIgmpFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgeIgmpFeatureTemplateInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._joinGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinGroups = this._joinGroups?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgeIgmpFeatureTemplateInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._joinGroups.internalValue = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._joinGroups.internalValue = value.joinGroups;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
    }
  }

  // join_groups - computed: false, optional: true, required: false
  private _joinGroups = new CedgeIgmpFeatureTemplateInterfacesJoinGroupsList(this, "join_groups", false);
  public get joinGroups() {
    return this._joinGroups;
  }
  public putJoinGroups(value: CedgeIgmpFeatureTemplateInterfacesJoinGroups[] | cdktf.IResolvable) {
    this._joinGroups.internalValue = value;
  }
  public resetJoinGroups() {
    this._joinGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinGroupsInput() {
    return this._joinGroups.internalValue;
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

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CedgeIgmpFeatureTemplateInterfacesList extends cdktf.ComplexList {
  public internalValue? : CedgeIgmpFeatureTemplateInterfaces[] | cdktf.IResolvable

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
  public get(index: number): CedgeIgmpFeatureTemplateInterfacesOutputReference {
    return new CedgeIgmpFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template sdwan_cedge_igmp_feature_template}
*/
export class CedgeIgmpFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cedge_igmp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CedgeIgmpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CedgeIgmpFeatureTemplate to import
  * @param importFromId The id of the existing CedgeIgmpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CedgeIgmpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cedge_igmp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_igmp_feature_template sdwan_cedge_igmp_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CedgeIgmpFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CedgeIgmpFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cedge_igmp_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._deviceTypes = config.deviceTypes;
    this._interfaces.internalValue = config.interfaces;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new CedgeIgmpFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: CedgeIgmpFeatureTemplateInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      interfaces: cdktf.listMapper(cedgeIgmpFeatureTemplateInterfacesToTerraform, false)(this._interfaces.internalValue),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cedgeIgmpFeatureTemplateInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgeIgmpFeatureTemplateInterfacesList",
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
