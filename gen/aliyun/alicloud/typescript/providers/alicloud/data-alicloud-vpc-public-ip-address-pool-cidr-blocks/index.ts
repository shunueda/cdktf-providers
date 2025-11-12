// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpcPublicIpAddressPoolCidrBlocksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks#cidr_block DataAlicloudVpcPublicIpAddressPoolCidrBlocks#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks#id DataAlicloudVpcPublicIpAddressPoolCidrBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks#ids DataAlicloudVpcPublicIpAddressPoolCidrBlocks#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks#output_file DataAlicloudVpcPublicIpAddressPoolCidrBlocks#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks#public_ip_address_pool_id DataAlicloudVpcPublicIpAddressPoolCidrBlocks#public_ip_address_pool_id}
  */
  readonly publicIpAddressPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks#status DataAlicloudVpcPublicIpAddressPoolCidrBlocks#status}
  */
  readonly status?: string;
}
export interface DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocks {
}

export function dataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocksToTerraform(struct?: DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocksToHclTerraform(struct?: DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // public_ip_address_pool_id - computed: true, optional: false, required: false
  public get publicIpAddressPoolId() {
    return this.getStringAttribute('public_ip_address_pool_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_ip_num - computed: true, optional: false, required: false
  public get totalIpNum() {
    return this.getNumberAttribute('total_ip_num');
  }

  // used_ip_num - computed: true, optional: false, required: false
  public get usedIpNum() {
    return this.getNumberAttribute('used_ip_num');
  }
}

export class DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocksOutputReference {
    return new DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks alicloud_vpc_public_ip_address_pool_cidr_blocks}
*/
export class DataAlicloudVpcPublicIpAddressPoolCidrBlocks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_public_ip_address_pool_cidr_blocks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpcPublicIpAddressPoolCidrBlocks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpcPublicIpAddressPoolCidrBlocks to import
  * @param importFromId The id of the existing DataAlicloudVpcPublicIpAddressPoolCidrBlocks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpcPublicIpAddressPoolCidrBlocks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_public_ip_address_pool_cidr_blocks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/vpc_public_ip_address_pool_cidr_blocks alicloud_vpc_public_ip_address_pool_cidr_blocks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpcPublicIpAddressPoolCidrBlocksConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpcPublicIpAddressPoolCidrBlocksConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_public_ip_address_pool_cidr_blocks',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrBlock = config.cidrBlock;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._publicIpAddressPoolId = config.publicIpAddressPoolId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocks - computed: true, optional: false, required: false
  private _blocks = new DataAlicloudVpcPublicIpAddressPoolCidrBlocksBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }

  // cidr_block - computed: false, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // public_ip_address_pool_id - computed: false, optional: false, required: true
  private _publicIpAddressPoolId?: string; 
  public get publicIpAddressPoolId() {
    return this.getStringAttribute('public_ip_address_pool_id');
  }
  public set publicIpAddressPoolId(value: string) {
    this._publicIpAddressPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressPoolIdInput() {
    return this._publicIpAddressPoolId;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      public_ip_address_pool_id: cdktf.stringToTerraform(this._publicIpAddressPoolId),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._publicIpAddressPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
