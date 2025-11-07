// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CteResourcegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) ResourceGroup description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#description CteResourcegroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#id CteResourcegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of ResourceGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#name CteResourcegroup#name}
  */
  readonly name: string;
  /**
  * ResourceGroup type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#type CteResourcegroup#type}
  */
  readonly type?: string;
  /**
  * classification_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#classification_tags CteResourcegroup#classification_tags}
  */
  readonly classificationTags?: CteResourcegroupClassificationTags[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#resources CteResourcegroup#resources}
  */
  readonly resources?: CteResourcegroupResources[] | cdktf.IResolvable;
}
export interface CteResourcegroupClassificationTagsAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#data_type CteResourcegroup#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#name CteResourcegroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#operator CteResourcegroup#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#value CteResourcegroup#value}
  */
  readonly value?: string;
}

export function cteResourcegroupClassificationTagsAttributesToTerraform(struct?: CteResourcegroupClassificationTagsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cteResourcegroupClassificationTagsAttributesToHclTerraform(struct?: CteResourcegroupClassificationTagsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class CteResourcegroupClassificationTagsAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteResourcegroupClassificationTagsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteResourcegroupClassificationTagsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CteResourcegroupClassificationTagsAttributesList extends cdktf.ComplexList {
  public internalValue? : CteResourcegroupClassificationTagsAttributes[] | cdktf.IResolvable

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
  public get(index: number): CteResourcegroupClassificationTagsAttributesOutputReference {
    return new CteResourcegroupClassificationTagsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteResourcegroupClassificationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#description CteResourcegroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#name CteResourcegroup#name}
  */
  readonly name?: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#attributes CteResourcegroup#attributes}
  */
  readonly attributes?: CteResourcegroupClassificationTagsAttributes[] | cdktf.IResolvable;
}

export function cteResourcegroupClassificationTagsToTerraform(struct?: CteResourcegroupClassificationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    attributes: cdktf.listMapper(cteResourcegroupClassificationTagsAttributesToTerraform, true)(struct!.attributes),
  }
}


export function cteResourcegroupClassificationTagsToHclTerraform(struct?: CteResourcegroupClassificationTags | cdktf.IResolvable): any {
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
    attributes: {
      value: cdktf.listMapperHcl(cteResourcegroupClassificationTagsAttributesToHclTerraform, true)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "CteResourcegroupClassificationTagsAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteResourcegroupClassificationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteResourcegroupClassificationTags | cdktf.IResolvable | undefined {
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
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteResourcegroupClassificationTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._attributes.internalValue = undefined;
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
      this._attributes.internalValue = value.attributes;
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

  // attributes - computed: false, optional: true, required: false
  private _attributes = new CteResourcegroupClassificationTagsAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: CteResourcegroupClassificationTagsAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }
}

export class CteResourcegroupClassificationTagsList extends cdktf.ComplexList {
  public internalValue? : CteResourcegroupClassificationTags[] | cdktf.IResolvable

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
  public get(index: number): CteResourcegroupClassificationTagsOutputReference {
    return new CteResourcegroupClassificationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CteResourcegroupResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#directory CteResourcegroup#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#file CteResourcegroup#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#hdfs CteResourcegroup#hdfs}
  */
  readonly hdfs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#include_subfolders CteResourcegroup#include_subfolders}
  */
  readonly includeSubfolders?: boolean | cdktf.IResolvable;
}

export function cteResourcegroupResourcesToTerraform(struct?: CteResourcegroupResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    file: cdktf.stringToTerraform(struct!.file),
    hdfs: cdktf.booleanToTerraform(struct!.hdfs),
    include_subfolders: cdktf.booleanToTerraform(struct!.includeSubfolders),
  }
}


export function cteResourcegroupResourcesToHclTerraform(struct?: CteResourcegroupResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdfs: {
      value: cdktf.booleanToHclTerraform(struct!.hdfs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_subfolders: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubfolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CteResourcegroupResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CteResourcegroupResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._hdfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfs = this._hdfs;
    }
    if (this._includeSubfolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubfolders = this._includeSubfolders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CteResourcegroupResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._file = undefined;
      this._hdfs = undefined;
      this._includeSubfolders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._file = value.file;
      this._hdfs = value.hdfs;
      this._includeSubfolders = value.includeSubfolders;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // hdfs - computed: false, optional: true, required: false
  private _hdfs?: boolean | cdktf.IResolvable; 
  public get hdfs() {
    return this.getBooleanAttribute('hdfs');
  }
  public set hdfs(value: boolean | cdktf.IResolvable) {
    this._hdfs = value;
  }
  public resetHdfs() {
    this._hdfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsInput() {
    return this._hdfs;
  }

  // include_subfolders - computed: false, optional: true, required: false
  private _includeSubfolders?: boolean | cdktf.IResolvable; 
  public get includeSubfolders() {
    return this.getBooleanAttribute('include_subfolders');
  }
  public set includeSubfolders(value: boolean | cdktf.IResolvable) {
    this._includeSubfolders = value;
  }
  public resetIncludeSubfolders() {
    this._includeSubfolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubfoldersInput() {
    return this._includeSubfolders;
  }
}

export class CteResourcegroupResourcesList extends cdktf.ComplexList {
  public internalValue? : CteResourcegroupResources[] | cdktf.IResolvable

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
  public get(index: number): CteResourcegroupResourcesOutputReference {
    return new CteResourcegroupResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup ciphertrust_cte_resourcegroup}
*/
export class CteResourcegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_cte_resourcegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CteResourcegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CteResourcegroup to import
  * @param importFromId The id of the existing CteResourcegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CteResourcegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_cte_resourcegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/cte_resourcegroup ciphertrust_cte_resourcegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CteResourcegroupConfig
  */
  public constructor(scope: Construct, id: string, config: CteResourcegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_cte_resourcegroup',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
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
    this._name = config.name;
    this._type = config.type;
    this._classificationTags.internalValue = config.classificationTags;
    this._resources.internalValue = config.resources;
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

  // classification_tags - computed: false, optional: true, required: false
  private _classificationTags = new CteResourcegroupClassificationTagsList(this, "classification_tags", false);
  public get classificationTags() {
    return this._classificationTags;
  }
  public putClassificationTags(value: CteResourcegroupClassificationTags[] | cdktf.IResolvable) {
    this._classificationTags.internalValue = value;
  }
  public resetClassificationTags() {
    this._classificationTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationTagsInput() {
    return this._classificationTags.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new CteResourcegroupResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: CteResourcegroupResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      classification_tags: cdktf.listMapper(cteResourcegroupClassificationTagsToTerraform, true)(this._classificationTags.internalValue),
      resources: cdktf.listMapper(cteResourcegroupResourcesToTerraform, true)(this._resources.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      classification_tags: {
        value: cdktf.listMapperHcl(cteResourcegroupClassificationTagsToHclTerraform, true)(this._classificationTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteResourcegroupClassificationTagsList",
      },
      resources: {
        value: cdktf.listMapperHcl(cteResourcegroupResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CteResourcegroupResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
