// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudGaBasicAccelerateIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#accelerate_ip_address DataAlicloudGaBasicAccelerateIps#accelerate_ip_address}
  */
  readonly accelerateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#accelerate_ip_id DataAlicloudGaBasicAccelerateIps#accelerate_ip_id}
  */
  readonly accelerateIpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#id DataAlicloudGaBasicAccelerateIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#ids DataAlicloudGaBasicAccelerateIps#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#ip_set_id DataAlicloudGaBasicAccelerateIps#ip_set_id}
  */
  readonly ipSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#output_file DataAlicloudGaBasicAccelerateIps#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#status DataAlicloudGaBasicAccelerateIps#status}
  */
  readonly status?: string;
}
export interface DataAlicloudGaBasicAccelerateIpsIps {
}

export function dataAlicloudGaBasicAccelerateIpsIpsToTerraform(struct?: DataAlicloudGaBasicAccelerateIpsIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaBasicAccelerateIpsIpsToHclTerraform(struct?: DataAlicloudGaBasicAccelerateIpsIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaBasicAccelerateIpsIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaBasicAccelerateIpsIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaBasicAccelerateIpsIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerate_ip_address - computed: true, optional: false, required: false
  public get accelerateIpAddress() {
    return this.getStringAttribute('accelerate_ip_address');
  }

  // accelerate_ip_id - computed: true, optional: false, required: false
  public get accelerateIpId() {
    return this.getStringAttribute('accelerate_ip_id');
  }

  // accelerator_id - computed: true, optional: false, required: false
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_set_id - computed: true, optional: false, required: false
  public get ipSetId() {
    return this.getStringAttribute('ip_set_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudGaBasicAccelerateIpsIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaBasicAccelerateIpsIpsOutputReference {
    return new DataAlicloudGaBasicAccelerateIpsIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips alicloud_ga_basic_accelerate_ips}
*/
export class DataAlicloudGaBasicAccelerateIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_basic_accelerate_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudGaBasicAccelerateIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudGaBasicAccelerateIps to import
  * @param importFromId The id of the existing DataAlicloudGaBasicAccelerateIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudGaBasicAccelerateIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_basic_accelerate_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_basic_accelerate_ips alicloud_ga_basic_accelerate_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudGaBasicAccelerateIpsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudGaBasicAccelerateIpsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_basic_accelerate_ips',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accelerateIpAddress = config.accelerateIpAddress;
    this._accelerateIpId = config.accelerateIpId;
    this._id = config.id;
    this._ids = config.ids;
    this._ipSetId = config.ipSetId;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerate_ip_address - computed: false, optional: true, required: false
  private _accelerateIpAddress?: string; 
  public get accelerateIpAddress() {
    return this.getStringAttribute('accelerate_ip_address');
  }
  public set accelerateIpAddress(value: string) {
    this._accelerateIpAddress = value;
  }
  public resetAccelerateIpAddress() {
    this._accelerateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateIpAddressInput() {
    return this._accelerateIpAddress;
  }

  // accelerate_ip_id - computed: false, optional: true, required: false
  private _accelerateIpId?: string; 
  public get accelerateIpId() {
    return this.getStringAttribute('accelerate_ip_id');
  }
  public set accelerateIpId(value: string) {
    this._accelerateIpId = value;
  }
  public resetAccelerateIpId() {
    this._accelerateIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerateIpIdInput() {
    return this._accelerateIpId;
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

  // ip_set_id - computed: false, optional: false, required: true
  private _ipSetId?: string; 
  public get ipSetId() {
    return this.getStringAttribute('ip_set_id');
  }
  public set ipSetId(value: string) {
    this._ipSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetIdInput() {
    return this._ipSetId;
  }

  // ips - computed: true, optional: false, required: false
  private _ips = new DataAlicloudGaBasicAccelerateIpsIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
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
      accelerate_ip_address: cdktf.stringToTerraform(this._accelerateIpAddress),
      accelerate_ip_id: cdktf.stringToTerraform(this._accelerateIpId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      ip_set_id: cdktf.stringToTerraform(this._ipSetId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerate_ip_address: {
        value: cdktf.stringToHclTerraform(this._accelerateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accelerate_ip_id: {
        value: cdktf.stringToHclTerraform(this._accelerateIpId),
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
      ip_set_id: {
        value: cdktf.stringToHclTerraform(this._ipSetId),
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
