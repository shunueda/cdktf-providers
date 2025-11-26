// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsEncryptionKeyV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Encryption key alias for display purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#alias DataInstaclustrAwsEncryptionKeyV2Instance#alias}
  */
  readonly alias?: string;
  /**
  * AWS ARN for the encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#arn DataInstaclustrAwsEncryptionKeyV2Instance#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#id DataInstaclustrAwsEncryptionKeyV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Whether the encryption key is used by a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#in_use DataInstaclustrAwsEncryptionKeyV2Instance#in_use}
  */
  readonly inUse?: boolean | cdktf.IResolvable;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#provider_account_name DataInstaclustrAwsEncryptionKeyV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#regions DataInstaclustrAwsEncryptionKeyV2Instance#regions}
  */
  readonly regions?: DataInstaclustrAwsEncryptionKeyV2InstanceRegions[] | cdktf.IResolvable;
}
export interface DataInstaclustrAwsEncryptionKeyV2InstanceRegions {
  /**
  * Name of the AWS Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#name DataInstaclustrAwsEncryptionKeyV2Instance#name}
  */
  readonly name?: string;
}

export function dataInstaclustrAwsEncryptionKeyV2InstanceRegionsToTerraform(struct?: DataInstaclustrAwsEncryptionKeyV2InstanceRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataInstaclustrAwsEncryptionKeyV2InstanceRegionsToHclTerraform(struct?: DataInstaclustrAwsEncryptionKeyV2InstanceRegions | cdktf.IResolvable): any {
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

export class DataInstaclustrAwsEncryptionKeyV2InstanceRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsEncryptionKeyV2InstanceRegions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataInstaclustrAwsEncryptionKeyV2InstanceRegions | cdktf.IResolvable | undefined) {
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

export class DataInstaclustrAwsEncryptionKeyV2InstanceRegionsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsEncryptionKeyV2InstanceRegions[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsEncryptionKeyV2InstanceRegionsOutputReference {
    return new DataInstaclustrAwsEncryptionKeyV2InstanceRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance instaclustr_aws_encryption_key_v2_instance}
*/
export class DataInstaclustrAwsEncryptionKeyV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_encryption_key_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsEncryptionKeyV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsEncryptionKeyV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAwsEncryptionKeyV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsEncryptionKeyV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_encryption_key_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.30/docs/data-sources/aws_encryption_key_v2_instance instaclustr_aws_encryption_key_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsEncryptionKeyV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsEncryptionKeyV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_encryption_key_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.30',
        providerVersionConstraint: '2.1.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._arn = config.arn;
    this._id = config.id;
    this._inUse = config.inUse;
    this._providerAccountName = config.providerAccountName;
    this._regions.internalValue = config.regions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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
  private _regions = new DataInstaclustrAwsEncryptionKeyV2InstanceRegionsList(this, "regions", false);
  public get regions() {
    return this._regions;
  }
  public putRegions(value: DataInstaclustrAwsEncryptionKeyV2InstanceRegions[] | cdktf.IResolvable) {
    this._regions.internalValue = value;
  }
  public resetRegions() {
    this._regions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      arn: cdktf.stringToTerraform(this._arn),
      id: cdktf.stringToTerraform(this._id),
      in_use: cdktf.booleanToTerraform(this._inUse),
      provider_account_name: cdktf.stringToTerraform(this._providerAccountName),
      regions: cdktf.listMapper(dataInstaclustrAwsEncryptionKeyV2InstanceRegionsToTerraform, true)(this._regions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
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
      in_use: {
        value: cdktf.booleanToHclTerraform(this._inUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provider_account_name: {
        value: cdktf.stringToHclTerraform(this._providerAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsEncryptionKeyV2InstanceRegionsToHclTerraform, true)(this._regions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrAwsEncryptionKeyV2InstanceRegionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
