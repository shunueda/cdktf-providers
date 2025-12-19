// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpcNatIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#id DataAlicloudVpcNatIps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#ids DataAlicloudVpcNatIps#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#name_regex DataAlicloudVpcNatIps#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#nat_gateway_id DataAlicloudVpcNatIps#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#nat_ip_cidr DataAlicloudVpcNatIps#nat_ip_cidr}
  */
  readonly natIpCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#nat_ip_ids DataAlicloudVpcNatIps#nat_ip_ids}
  */
  readonly natIpIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#nat_ip_name DataAlicloudVpcNatIps#nat_ip_name}
  */
  readonly natIpName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#output_file DataAlicloudVpcNatIps#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#status DataAlicloudVpcNatIps#status}
  */
  readonly status?: string;
}
export interface DataAlicloudVpcNatIpsIps {
}

export function dataAlicloudVpcNatIpsIpsToTerraform(struct?: DataAlicloudVpcNatIpsIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpcNatIpsIpsToHclTerraform(struct?: DataAlicloudVpcNatIpsIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpcNatIpsIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpcNatIpsIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpcNatIpsIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // nat_gateway_id - computed: true, optional: false, required: false
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }

  // nat_ip - computed: true, optional: false, required: false
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }

  // nat_ip_cidr - computed: true, optional: false, required: false
  public get natIpCidr() {
    return this.getStringAttribute('nat_ip_cidr');
  }

  // nat_ip_description - computed: true, optional: false, required: false
  public get natIpDescription() {
    return this.getStringAttribute('nat_ip_description');
  }

  // nat_ip_id - computed: true, optional: false, required: false
  public get natIpId() {
    return this.getStringAttribute('nat_ip_id');
  }

  // nat_ip_name - computed: true, optional: false, required: false
  public get natIpName() {
    return this.getStringAttribute('nat_ip_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudVpcNatIpsIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpcNatIpsIpsOutputReference {
    return new DataAlicloudVpcNatIpsIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips alicloud_vpc_nat_ips}
*/
export class DataAlicloudVpcNatIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_nat_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpcNatIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpcNatIps to import
  * @param importFromId The id of the existing DataAlicloudVpcNatIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpcNatIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_nat_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ips alicloud_vpc_nat_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpcNatIpsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpcNatIpsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_nat_ips',
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
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._natGatewayId = config.natGatewayId;
    this._natIpCidr = config.natIpCidr;
    this._natIpIds = config.natIpIds;
    this._natIpName = config.natIpName;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ips - computed: true, optional: false, required: false
  private _ips = new DataAlicloudVpcNatIpsIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // nat_ip_cidr - computed: false, optional: true, required: false
  private _natIpCidr?: string; 
  public get natIpCidr() {
    return this.getStringAttribute('nat_ip_cidr');
  }
  public set natIpCidr(value: string) {
    this._natIpCidr = value;
  }
  public resetNatIpCidr() {
    this._natIpCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrInput() {
    return this._natIpCidr;
  }

  // nat_ip_ids - computed: false, optional: true, required: false
  private _natIpIds?: string[]; 
  public get natIpIds() {
    return this.getListAttribute('nat_ip_ids');
  }
  public set natIpIds(value: string[]) {
    this._natIpIds = value;
  }
  public resetNatIpIds() {
    this._natIpIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpIdsInput() {
    return this._natIpIds;
  }

  // nat_ip_name - computed: false, optional: true, required: false
  private _natIpName?: string[]; 
  public get natIpName() {
    return this.getListAttribute('nat_ip_name');
  }
  public set natIpName(value: string[]) {
    this._natIpName = value;
  }
  public resetNatIpName() {
    this._natIpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpNameInput() {
    return this._natIpName;
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
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      nat_ip_cidr: cdktf.stringToTerraform(this._natIpCidr),
      nat_ip_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIpIds),
      nat_ip_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIpName),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      nat_ip_cidr: {
        value: cdktf.stringToHclTerraform(this._natIpCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ip_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natIpIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nat_ip_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natIpName),
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
