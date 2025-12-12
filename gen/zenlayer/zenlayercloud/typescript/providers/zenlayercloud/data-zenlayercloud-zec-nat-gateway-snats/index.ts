// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZecNatGatewaySnatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the EIP to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats#eip_id DataZenlayercloudZecNatGatewaySnats#eip_id}
  */
  readonly eipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats#id DataZenlayercloudZecNatGatewaySnats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the NAT gateway to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats#nat_gateway_id DataZenlayercloudZecNatGatewaySnats#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats#result_output_file DataZenlayercloudZecNatGatewaySnats#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of the subnet to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats#subnet_id DataZenlayercloudZecNatGatewaySnats#subnet_id}
  */
  readonly subnetId?: string;
}
export interface DataZenlayercloudZecNatGatewaySnatsSnats {
}

export function dataZenlayercloudZecNatGatewaySnatsSnatsToTerraform(struct?: DataZenlayercloudZecNatGatewaySnatsSnats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZecNatGatewaySnatsSnatsToHclTerraform(struct?: DataZenlayercloudZecNatGatewaySnatsSnats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZecNatGatewaySnatsSnatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZecNatGatewaySnatsSnats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZecNatGatewaySnatsSnats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eip_ids - computed: true, optional: false, required: false
  public get eipIds() {
    return cdktf.Fn.tolist(this.getListAttribute('eip_ids'));
  }

  // is_all_eip - computed: true, optional: false, required: false
  public get isAllEip() {
    return this.getBooleanAttribute('is_all_eip');
  }

  // snat_id - computed: true, optional: false, required: false
  public get snatId() {
    return this.getStringAttribute('snat_id');
  }

  // source_cidr_blocks - computed: true, optional: false, required: false
  public get sourceCidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('source_cidr_blocks'));
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
}

export class DataZenlayercloudZecNatGatewaySnatsSnatsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZecNatGatewaySnatsSnatsOutputReference {
    return new DataZenlayercloudZecNatGatewaySnatsSnatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats zenlayercloud_zec_nat_gateway_snats}
*/
export class DataZenlayercloudZecNatGatewaySnats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_nat_gateway_snats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZecNatGatewaySnats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZecNatGatewaySnats to import
  * @param importFromId The id of the existing DataZenlayercloudZecNatGatewaySnats that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZecNatGatewaySnats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_nat_gateway_snats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_snats zenlayercloud_zec_nat_gateway_snats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZecNatGatewaySnatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZecNatGatewaySnatsConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_nat_gateway_snats',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.17',
        providerVersionConstraint: '0.2.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eipId = config.eipId;
    this._id = config.id;
    this._natGatewayId = config.natGatewayId;
    this._resultOutputFile = config.resultOutputFile;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eip_id - computed: false, optional: true, required: false
  private _eipId?: string; 
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }
  public set eipId(value: string) {
    this._eipId = value;
  }
  public resetEipId() {
    this._eipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipIdInput() {
    return this._eipId;
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

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // snats - computed: true, optional: false, required: false
  private _snats = new DataZenlayercloudZecNatGatewaySnatsSnatsList(this, "snats", false);
  public get snats() {
    return this._snats;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eip_id: cdktf.stringToTerraform(this._eipId),
      id: cdktf.stringToTerraform(this._id),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eip_id: {
        value: cdktf.stringToHclTerraform(this._eipId),
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
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
