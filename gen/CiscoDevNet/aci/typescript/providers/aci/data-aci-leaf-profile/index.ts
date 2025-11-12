// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciLeafProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#annotation DataAciLeafProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#description DataAciLeafProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#id DataAciLeafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#leaf_selector_ids DataAciLeafProfile#leaf_selector_ids}
  */
  readonly leafSelectorIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#name DataAciLeafProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#name_alias DataAciLeafProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#node_block_ids DataAciLeafProfile#node_block_ids}
  */
  readonly nodeBlockIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#relation_infra_rs_acc_card_p DataAciLeafProfile#relation_infra_rs_acc_card_p}
  */
  readonly relationInfraRsAccCardP?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#relation_infra_rs_acc_port_p DataAciLeafProfile#relation_infra_rs_acc_port_p}
  */
  readonly relationInfraRsAccPortP?: string[];
  /**
  * leaf_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#leaf_selector DataAciLeafProfile#leaf_selector}
  */
  readonly leafSelector?: DataAciLeafProfileLeafSelector[] | cdktf.IResolvable;
}
export interface DataAciLeafProfileLeafSelectorNodeBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#description DataAciLeafProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#from_ DataAciLeafProfile#from_}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#id DataAciLeafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#name DataAciLeafProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#to_ DataAciLeafProfile#to_}
  */
  readonly to?: string;
}

export function dataAciLeafProfileLeafSelectorNodeBlockToTerraform(struct?: DataAciLeafProfileLeafSelectorNodeBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    from_: cdktf.stringToTerraform(struct!.from),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    to_: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataAciLeafProfileLeafSelectorNodeBlockToHclTerraform(struct?: DataAciLeafProfileLeafSelectorNodeBlock | cdktf.IResolvable): any {
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
    from_: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    to_: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciLeafProfileLeafSelectorNodeBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciLeafProfileLeafSelectorNodeBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciLeafProfileLeafSelectorNodeBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._from = undefined;
      this._id = undefined;
      this._name = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._from = value.from;
      this._id = value.id;
      this._name = value.name;
      this._to = value.to;
    }
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

  // from_ - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from_');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: false, optional: true, required: false
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

  // to_ - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to_');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataAciLeafProfileLeafSelectorNodeBlockList extends cdktf.ComplexList {
  public internalValue? : DataAciLeafProfileLeafSelectorNodeBlock[] | cdktf.IResolvable

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
  public get(index: number): DataAciLeafProfileLeafSelectorNodeBlockOutputReference {
    return new DataAciLeafProfileLeafSelectorNodeBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAciLeafProfileLeafSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#description DataAciLeafProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#id DataAciLeafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#name DataAciLeafProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#switch_association_type DataAciLeafProfile#switch_association_type}
  */
  readonly switchAssociationType?: string;
  /**
  * node_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#node_block DataAciLeafProfile#node_block}
  */
  readonly nodeBlock?: DataAciLeafProfileLeafSelectorNodeBlock[] | cdktf.IResolvable;
}

export function dataAciLeafProfileLeafSelectorToTerraform(struct?: DataAciLeafProfileLeafSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    switch_association_type: cdktf.stringToTerraform(struct!.switchAssociationType),
    node_block: cdktf.listMapper(dataAciLeafProfileLeafSelectorNodeBlockToTerraform, true)(struct!.nodeBlock),
  }
}


export function dataAciLeafProfileLeafSelectorToHclTerraform(struct?: DataAciLeafProfileLeafSelector | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    switch_association_type: {
      value: cdktf.stringToHclTerraform(struct!.switchAssociationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_block: {
      value: cdktf.listMapperHcl(dataAciLeafProfileLeafSelectorNodeBlockToHclTerraform, true)(struct!.nodeBlock),
      isBlock: true,
      type: "list",
      storageClassType: "DataAciLeafProfileLeafSelectorNodeBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciLeafProfileLeafSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciLeafProfileLeafSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._switchAssociationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchAssociationType = this._switchAssociationType;
    }
    if (this._nodeBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeBlock = this._nodeBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciLeafProfileLeafSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._switchAssociationType = undefined;
      this._nodeBlock.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._switchAssociationType = value.switchAssociationType;
      this._nodeBlock.internalValue = value.nodeBlock;
    }
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

  // id - computed: false, optional: true, required: false
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

  // switch_association_type - computed: false, optional: true, required: false
  private _switchAssociationType?: string; 
  public get switchAssociationType() {
    return this.getStringAttribute('switch_association_type');
  }
  public set switchAssociationType(value: string) {
    this._switchAssociationType = value;
  }
  public resetSwitchAssociationType() {
    this._switchAssociationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchAssociationTypeInput() {
    return this._switchAssociationType;
  }

  // node_block - computed: false, optional: true, required: false
  private _nodeBlock = new DataAciLeafProfileLeafSelectorNodeBlockList(this, "node_block", false);
  public get nodeBlock() {
    return this._nodeBlock;
  }
  public putNodeBlock(value: DataAciLeafProfileLeafSelectorNodeBlock[] | cdktf.IResolvable) {
    this._nodeBlock.internalValue = value;
  }
  public resetNodeBlock() {
    this._nodeBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBlockInput() {
    return this._nodeBlock.internalValue;
  }
}

export class DataAciLeafProfileLeafSelectorList extends cdktf.ComplexList {
  public internalValue? : DataAciLeafProfileLeafSelector[] | cdktf.IResolvable

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
  public get(index: number): DataAciLeafProfileLeafSelectorOutputReference {
    return new DataAciLeafProfileLeafSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile aci_leaf_profile}
*/
export class DataAciLeafProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_leaf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciLeafProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciLeafProfile to import
  * @param importFromId The id of the existing DataAciLeafProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciLeafProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_leaf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/leaf_profile aci_leaf_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciLeafProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciLeafProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_leaf_profile',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._leafSelectorIds = config.leafSelectorIds;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._nodeBlockIds = config.nodeBlockIds;
    this._relationInfraRsAccCardP = config.relationInfraRsAccCardP;
    this._relationInfraRsAccPortP = config.relationInfraRsAccPortP;
    this._leafSelector.internalValue = config.leafSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
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

  // leaf_selector_ids - computed: false, optional: true, required: false
  private _leafSelectorIds?: string[]; 
  public get leafSelectorIds() {
    return this.getListAttribute('leaf_selector_ids');
  }
  public set leafSelectorIds(value: string[]) {
    this._leafSelectorIds = value;
  }
  public resetLeafSelectorIds() {
    this._leafSelectorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafSelectorIdsInput() {
    return this._leafSelectorIds;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // node_block_ids - computed: false, optional: true, required: false
  private _nodeBlockIds?: string[]; 
  public get nodeBlockIds() {
    return this.getListAttribute('node_block_ids');
  }
  public set nodeBlockIds(value: string[]) {
    this._nodeBlockIds = value;
  }
  public resetNodeBlockIds() {
    this._nodeBlockIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBlockIdsInput() {
    return this._nodeBlockIds;
  }

  // relation_infra_rs_acc_card_p - computed: false, optional: true, required: false
  private _relationInfraRsAccCardP?: string[]; 
  public get relationInfraRsAccCardP() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_infra_rs_acc_card_p'));
  }
  public set relationInfraRsAccCardP(value: string[]) {
    this._relationInfraRsAccCardP = value;
  }
  public resetRelationInfraRsAccCardP() {
    this._relationInfraRsAccCardP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsAccCardPInput() {
    return this._relationInfraRsAccCardP;
  }

  // relation_infra_rs_acc_port_p - computed: false, optional: true, required: false
  private _relationInfraRsAccPortP?: string[]; 
  public get relationInfraRsAccPortP() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_infra_rs_acc_port_p'));
  }
  public set relationInfraRsAccPortP(value: string[]) {
    this._relationInfraRsAccPortP = value;
  }
  public resetRelationInfraRsAccPortP() {
    this._relationInfraRsAccPortP = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsAccPortPInput() {
    return this._relationInfraRsAccPortP;
  }

  // leaf_selector - computed: false, optional: true, required: false
  private _leafSelector = new DataAciLeafProfileLeafSelectorList(this, "leaf_selector", false);
  public get leafSelector() {
    return this._leafSelector;
  }
  public putLeafSelector(value: DataAciLeafProfileLeafSelector[] | cdktf.IResolvable) {
    this._leafSelector.internalValue = value;
  }
  public resetLeafSelector() {
    this._leafSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafSelectorInput() {
    return this._leafSelector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      leaf_selector_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._leafSelectorIds),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      node_block_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeBlockIds),
      relation_infra_rs_acc_card_p: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationInfraRsAccCardP),
      relation_infra_rs_acc_port_p: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationInfraRsAccPortP),
      leaf_selector: cdktf.listMapper(dataAciLeafProfileLeafSelectorToTerraform, true)(this._leafSelector.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leaf_selector_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._leafSelectorIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_block_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeBlockIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relation_infra_rs_acc_card_p: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationInfraRsAccCardP),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_infra_rs_acc_port_p: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationInfraRsAccPortP),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      leaf_selector: {
        value: cdktf.listMapperHcl(dataAciLeafProfileLeafSelectorToHclTerraform, true)(this._leafSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAciLeafProfileLeafSelectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
