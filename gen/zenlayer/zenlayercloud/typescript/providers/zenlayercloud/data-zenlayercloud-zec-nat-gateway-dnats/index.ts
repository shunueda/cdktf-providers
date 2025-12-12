// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZecNatGatewayDnatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the public EIP to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats#eip_id DataZenlayercloudZecNatGatewayDnats#eip_id}
  */
  readonly eipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats#id DataZenlayercloudZecNatGatewayDnats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the NAT gateway to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats#nat_gateway_id DataZenlayercloudZecNatGatewayDnats#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * The IP protocol type of the DNAT entry. Valid values: `TCP`, `UDP`, `Any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats#protocol DataZenlayercloudZecNatGatewayDnats#protocol}
  */
  readonly protocol?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats#result_output_file DataZenlayercloudZecNatGatewayDnats#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudZecNatGatewayDnatsDnats {
}

export function dataZenlayercloudZecNatGatewayDnatsDnatsToTerraform(struct?: DataZenlayercloudZecNatGatewayDnatsDnats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZecNatGatewayDnatsDnatsToHclTerraform(struct?: DataZenlayercloudZecNatGatewayDnatsDnats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZecNatGatewayDnatsDnatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZecNatGatewayDnatsDnats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZecNatGatewayDnatsDnats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dnat_id - computed: true, optional: false, required: false
  public get dnatId() {
    return this.getStringAttribute('dnat_id');
  }

  // eip_id - computed: true, optional: false, required: false
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // private_port - computed: true, optional: false, required: false
  public get privatePort() {
    return this.getStringAttribute('private_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // public_port - computed: true, optional: false, required: false
  public get publicPort() {
    return this.getStringAttribute('public_port');
  }
}

export class DataZenlayercloudZecNatGatewayDnatsDnatsList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZecNatGatewayDnatsDnatsOutputReference {
    return new DataZenlayercloudZecNatGatewayDnatsDnatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats zenlayercloud_zec_nat_gateway_dnats}
*/
export class DataZenlayercloudZecNatGatewayDnats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_nat_gateway_dnats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZecNatGatewayDnats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZecNatGatewayDnats to import
  * @param importFromId The id of the existing DataZenlayercloudZecNatGatewayDnats that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZecNatGatewayDnats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_nat_gateway_dnats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_nat_gateway_dnats zenlayercloud_zec_nat_gateway_dnats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZecNatGatewayDnatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZecNatGatewayDnatsConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_nat_gateway_dnats',
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
    this._protocol = config.protocol;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnats - computed: true, optional: false, required: false
  private _dnats = new DataZenlayercloudZecNatGatewayDnatsDnatsList(this, "dnats", false);
  public get dnats() {
    return this._dnats;
  }

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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eip_id: cdktf.stringToTerraform(this._eipId),
      id: cdktf.stringToTerraform(this._id),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      protocol: cdktf.stringToTerraform(this._protocol),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
