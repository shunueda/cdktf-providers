// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackVpcIpv6InternetBandwidthsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths#id DataAlibabacloudstackVpcIpv6InternetBandwidths#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths#ids DataAlibabacloudstackVpcIpv6InternetBandwidths#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths#ipv6_address_id DataAlibabacloudstackVpcIpv6InternetBandwidths#ipv6_address_id}
  */
  readonly ipv6AddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths#ipv6_internet_bandwidth_id DataAlibabacloudstackVpcIpv6InternetBandwidths#ipv6_internet_bandwidth_id}
  */
  readonly ipv6InternetBandwidthId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths#output_file DataAlibabacloudstackVpcIpv6InternetBandwidths#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths#status DataAlibabacloudstackVpcIpv6InternetBandwidths#status}
  */
  readonly status?: string;
}
export interface DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidths {
}

export function dataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidthsToTerraform(struct?: DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidthsToHclTerraform(struct?: DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // ipv6_address_id - computed: true, optional: false, required: false
  public get ipv6AddressId() {
    return this.getStringAttribute('ipv6_address_id');
  }

  // ipv6_gateway_id - computed: true, optional: false, required: false
  public get ipv6GatewayId() {
    return this.getStringAttribute('ipv6_gateway_id');
  }

  // ipv6_internet_bandwidth_id - computed: true, optional: false, required: false
  public get ipv6InternetBandwidthId() {
    return this.getStringAttribute('ipv6_internet_bandwidth_id');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidthsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidthsOutputReference {
    return new DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths alibabacloudstack_vpc_ipv6_internet_bandwidths}
*/
export class DataAlibabacloudstackVpcIpv6InternetBandwidths extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpc_ipv6_internet_bandwidths";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackVpcIpv6InternetBandwidths resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackVpcIpv6InternetBandwidths to import
  * @param importFromId The id of the existing DataAlibabacloudstackVpcIpv6InternetBandwidths that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackVpcIpv6InternetBandwidths to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpc_ipv6_internet_bandwidths", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/vpc_ipv6_internet_bandwidths alibabacloudstack_vpc_ipv6_internet_bandwidths} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackVpcIpv6InternetBandwidthsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackVpcIpv6InternetBandwidthsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpc_ipv6_internet_bandwidths',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ids = config.ids;
    this._ipv6AddressId = config.ipv6AddressId;
    this._ipv6InternetBandwidthId = config.ipv6InternetBandwidthId;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidths - computed: true, optional: false, required: false
  private _bandwidths = new DataAlibabacloudstackVpcIpv6InternetBandwidthsBandwidthsList(this, "bandwidths", false);
  public get bandwidths() {
    return this._bandwidths;
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

  // ipv6_address_id - computed: false, optional: true, required: false
  private _ipv6AddressId?: string; 
  public get ipv6AddressId() {
    return this.getStringAttribute('ipv6_address_id');
  }
  public set ipv6AddressId(value: string) {
    this._ipv6AddressId = value;
  }
  public resetIpv6AddressId() {
    this._ipv6AddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIdInput() {
    return this._ipv6AddressId;
  }

  // ipv6_internet_bandwidth_id - computed: false, optional: true, required: false
  private _ipv6InternetBandwidthId?: string; 
  public get ipv6InternetBandwidthId() {
    return this.getStringAttribute('ipv6_internet_bandwidth_id');
  }
  public set ipv6InternetBandwidthId(value: string) {
    this._ipv6InternetBandwidthId = value;
  }
  public resetIpv6InternetBandwidthId() {
    this._ipv6InternetBandwidthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InternetBandwidthIdInput() {
    return this._ipv6InternetBandwidthId;
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
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      ipv6_address_id: cdktf.stringToTerraform(this._ipv6AddressId),
      ipv6_internet_bandwidth_id: cdktf.stringToTerraform(this._ipv6InternetBandwidthId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ipv6_address_id: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_internet_bandwidth_id: {
        value: cdktf.stringToHclTerraform(this._ipv6InternetBandwidthId),
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
