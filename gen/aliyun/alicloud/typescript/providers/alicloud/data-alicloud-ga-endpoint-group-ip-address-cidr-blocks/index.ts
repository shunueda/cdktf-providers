// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudGaEndpointGroupIpAddressCidrBlocksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks#accelerator_id DataAlicloudGaEndpointGroupIpAddressCidrBlocks#accelerator_id}
  */
  readonly acceleratorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks#endpoint_group_region DataAlicloudGaEndpointGroupIpAddressCidrBlocks#endpoint_group_region}
  */
  readonly endpointGroupRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks#id DataAlicloudGaEndpointGroupIpAddressCidrBlocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks#output_file DataAlicloudGaEndpointGroupIpAddressCidrBlocks#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocks {
}

export function dataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocksToTerraform(struct?: DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocksToHclTerraform(struct?: DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_group_region - computed: true, optional: false, required: false
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }

  // ip_address_cidr_blocks - computed: true, optional: false, required: false
  public get ipAddressCidrBlocks() {
    return this.getListAttribute('ip_address_cidr_blocks');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocksOutputReference {
    return new DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks alicloud_ga_endpoint_group_ip_address_cidr_blocks}
*/
export class DataAlicloudGaEndpointGroupIpAddressCidrBlocks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_endpoint_group_ip_address_cidr_blocks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudGaEndpointGroupIpAddressCidrBlocks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudGaEndpointGroupIpAddressCidrBlocks to import
  * @param importFromId The id of the existing DataAlicloudGaEndpointGroupIpAddressCidrBlocks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudGaEndpointGroupIpAddressCidrBlocks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_endpoint_group_ip_address_cidr_blocks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/ga_endpoint_group_ip_address_cidr_blocks alicloud_ga_endpoint_group_ip_address_cidr_blocks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudGaEndpointGroupIpAddressCidrBlocksConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudGaEndpointGroupIpAddressCidrBlocksConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_endpoint_group_ip_address_cidr_blocks',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratorId = config.acceleratorId;
    this._endpointGroupRegion = config.endpointGroupRegion;
    this._id = config.id;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_id - computed: false, optional: true, required: false
  private _acceleratorId?: string; 
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }
  public set acceleratorId(value: string) {
    this._acceleratorId = value;
  }
  public resetAcceleratorId() {
    this._acceleratorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorIdInput() {
    return this._acceleratorId;
  }

  // endpoint_group_ip_address_cidr_blocks - computed: true, optional: false, required: false
  private _endpointGroupIpAddressCidrBlocks = new DataAlicloudGaEndpointGroupIpAddressCidrBlocksEndpointGroupIpAddressCidrBlocksList(this, "endpoint_group_ip_address_cidr_blocks", false);
  public get endpointGroupIpAddressCidrBlocks() {
    return this._endpointGroupIpAddressCidrBlocks;
  }

  // endpoint_group_region - computed: false, optional: false, required: true
  private _endpointGroupRegion?: string; 
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string) {
    this._endpointGroupRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupRegionInput() {
    return this._endpointGroupRegion;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_id: cdktf.stringToTerraform(this._acceleratorId),
      endpoint_group_region: cdktf.stringToTerraform(this._endpointGroupRegion),
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_id: {
        value: cdktf.stringToHclTerraform(this._acceleratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_group_region: {
        value: cdktf.stringToHclTerraform(this._endpointGroupRegion),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
