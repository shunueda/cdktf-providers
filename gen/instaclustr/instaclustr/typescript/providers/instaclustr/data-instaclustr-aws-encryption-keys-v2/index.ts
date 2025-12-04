// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsEncryptionKeysV2Config extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Instaclustr Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#account_id DataInstaclustrAwsEncryptionKeysV2#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#id DataInstaclustrAwsEncryptionKeysV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * encryption_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#encryption_keys DataInstaclustrAwsEncryptionKeysV2#encryption_keys}
  */
  readonly encryptionKeys?: DataInstaclustrAwsEncryptionKeysV2EncryptionKeys[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#filter DataInstaclustrAwsEncryptionKeysV2#filter}
  */
  readonly filter?: DataInstaclustrAwsEncryptionKeysV2Filter[] | cdktf.IResolvable;
}
export interface DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions {
  /**
  * Name of the AWS Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#name DataInstaclustrAwsEncryptionKeysV2#name}
  */
  readonly name?: string;
}

export function dataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsToTerraform(struct?: DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsToHclTerraform(struct?: DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsOutputReference {
    return new DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrAwsEncryptionKeysV2EncryptionKeys {
  /**
  * Encryption key alias for display purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#alias DataInstaclustrAwsEncryptionKeysV2#alias}
  */
  readonly alias?: string;
  /**
  * AWS ARN for the encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#arn DataInstaclustrAwsEncryptionKeysV2#arn}
  */
  readonly arn?: string;
  /**
  * ID of the encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#id DataInstaclustrAwsEncryptionKeysV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the encryption key is used by a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#in_use DataInstaclustrAwsEncryptionKeysV2#in_use}
  */
  readonly inUse?: boolean | cdktf.IResolvable;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#provider_account_name DataInstaclustrAwsEncryptionKeysV2#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#regions DataInstaclustrAwsEncryptionKeysV2#regions}
  */
  readonly regions?: DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions[] | cdktf.IResolvable;
}

export function dataInstaclustrAwsEncryptionKeysV2EncryptionKeysToTerraform(struct?: DataInstaclustrAwsEncryptionKeysV2EncryptionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    arn: cdktf.stringToTerraform(struct!.arn),
    id: cdktf.stringToTerraform(struct!.id),
    in_use: cdktf.booleanToTerraform(struct!.inUse),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    regions: cdktf.listMapper(dataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsToTerraform, true)(struct!.regions),
  }
}


export function dataInstaclustrAwsEncryptionKeysV2EncryptionKeysToHclTerraform(struct?: DataInstaclustrAwsEncryptionKeysV2EncryptionKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
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
    in_use: {
      value: cdktf.booleanToHclTerraform(struct!.inUse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provider_account_name: {
      value: cdktf.stringToHclTerraform(struct!.providerAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(dataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsToHclTerraform, true)(struct!.regions),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAwsEncryptionKeysV2EncryptionKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsEncryptionKeysV2EncryptionKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inUse = this._inUse;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._regions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsEncryptionKeysV2EncryptionKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._arn = undefined;
      this._id = undefined;
      this._inUse = undefined;
      this._providerAccountName = undefined;
      this._regions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._arn = value.arn;
      this._id = value.id;
      this._inUse = value.inUse;
      this._providerAccountName = value.providerAccountName;
      this._regions.internalValue = value.regions;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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

  // in_use - computed: true, optional: true, required: false
  private _inUse?: boolean | cdktf.IResolvable; 
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }
  public set inUse(value: boolean | cdktf.IResolvable) {
    this._inUse = value;
  }
  public resetInUse() {
    this._inUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseInput() {
    return this._inUse;
  }

  // provider_account_name - computed: true, optional: true, required: false
  private _providerAccountName?: string; 
  public get providerAccountName() {
    return this.getStringAttribute('provider_account_name');
  }
  public set providerAccountName(value: string) {
    this._providerAccountName = value;
  }
  public resetProviderAccountName() {
    this._providerAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountNameInput() {
    return this._providerAccountName;
  }

  // regions - computed: false, optional: true, required: false
  private _regions = new DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: DataInstaclustrAwsEncryptionKeysV2EncryptionKeysRegions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  public resetRegions() {
    this._regions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }
}

export class DataInstaclustrAwsEncryptionKeysV2EncryptionKeysList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsEncryptionKeysV2EncryptionKeys[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsEncryptionKeysV2EncryptionKeysOutputReference {
    return new DataInstaclustrAwsEncryptionKeysV2EncryptionKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrAwsEncryptionKeysV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#name DataInstaclustrAwsEncryptionKeysV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#values DataInstaclustrAwsEncryptionKeysV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrAwsEncryptionKeysV2FilterToTerraform(struct?: DataInstaclustrAwsEncryptionKeysV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrAwsEncryptionKeysV2FilterToHclTerraform(struct?: DataInstaclustrAwsEncryptionKeysV2Filter | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAwsEncryptionKeysV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsEncryptionKeysV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsEncryptionKeysV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrAwsEncryptionKeysV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsEncryptionKeysV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsEncryptionKeysV2FilterOutputReference {
    return new DataInstaclustrAwsEncryptionKeysV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2 instaclustr_aws_encryption_keys_v2}
*/
export class DataInstaclustrAwsEncryptionKeysV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_encryption_keys_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsEncryptionKeysV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsEncryptionKeysV2 to import
  * @param importFromId The id of the existing DataInstaclustrAwsEncryptionKeysV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsEncryptionKeysV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_encryption_keys_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.32/docs/data-sources/aws_encryption_keys_v2 instaclustr_aws_encryption_keys_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsEncryptionKeysV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsEncryptionKeysV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_encryption_keys_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.32',
        providerVersionConstraint: '2.1.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._encryptionKeys.internalValue = config.encryptionKeys;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // encryption_keys - computed: false, optional: true, required: false
  private _encryptionKeys = new DataInstaclustrAwsEncryptionKeysV2EncryptionKeysList(this, "encryption_keys", false);
  public get encryptionKeys() {
    return this._encryptionKeys;
  }
  public putEncryptionKeys(value: DataInstaclustrAwsEncryptionKeysV2EncryptionKeys[] | cdktf.IResolvable) {
    this._encryptionKeys.internalValue = value;
  }
  public resetEncryptionKeys() {
    this._encryptionKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeysInput() {
    return this._encryptionKeys.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrAwsEncryptionKeysV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrAwsEncryptionKeysV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      encryption_keys: cdktf.listMapper(dataInstaclustrAwsEncryptionKeysV2EncryptionKeysToTerraform, true)(this._encryptionKeys.internalValue),
      filter: cdktf.listMapper(dataInstaclustrAwsEncryptionKeysV2FilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      encryption_keys: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsEncryptionKeysV2EncryptionKeysToHclTerraform, true)(this._encryptionKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrAwsEncryptionKeysV2EncryptionKeysList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsEncryptionKeysV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrAwsEncryptionKeysV2FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
