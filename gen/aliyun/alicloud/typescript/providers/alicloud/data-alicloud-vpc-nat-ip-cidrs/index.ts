// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpcNatIpCidrsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#id DataAlicloudVpcNatIpCidrs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#ids DataAlicloudVpcNatIpCidrs#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#name_regex DataAlicloudVpcNatIpCidrs#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#nat_gateway_id DataAlicloudVpcNatIpCidrs#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#nat_ip_cidr_name DataAlicloudVpcNatIpCidrs#nat_ip_cidr_name}
  */
  readonly natIpCidrName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#nat_ip_cidrs DataAlicloudVpcNatIpCidrs#nat_ip_cidrs}
  */
  readonly natIpCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#output_file DataAlicloudVpcNatIpCidrs#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#status DataAlicloudVpcNatIpCidrs#status}
  */
  readonly status?: string;
}
export interface DataAlicloudVpcNatIpCidrsCidrs {
}

export function dataAlicloudVpcNatIpCidrsCidrsToTerraform(struct?: DataAlicloudVpcNatIpCidrsCidrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpcNatIpCidrsCidrsToHclTerraform(struct?: DataAlicloudVpcNatIpCidrsCidrs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpcNatIpCidrsCidrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpcNatIpCidrsCidrs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpcNatIpCidrsCidrs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // nat_ip_cidr - computed: true, optional: false, required: false
  public get natIpCidr() {
    return this.getStringAttribute('nat_ip_cidr');
  }

  // nat_ip_cidr_description - computed: true, optional: false, required: false
  public get natIpCidrDescription() {
    return this.getStringAttribute('nat_ip_cidr_description');
  }

  // nat_ip_cidr_id - computed: true, optional: false, required: false
  public get natIpCidrId() {
    return this.getStringAttribute('nat_ip_cidr_id');
  }

  // nat_ip_cidr_name - computed: true, optional: false, required: false
  public get natIpCidrName() {
    return this.getStringAttribute('nat_ip_cidr_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudVpcNatIpCidrsCidrsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpcNatIpCidrsCidrsOutputReference {
    return new DataAlicloudVpcNatIpCidrsCidrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs alicloud_vpc_nat_ip_cidrs}
*/
export class DataAlicloudVpcNatIpCidrs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_nat_ip_cidrs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpcNatIpCidrs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpcNatIpCidrs to import
  * @param importFromId The id of the existing DataAlicloudVpcNatIpCidrs that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpcNatIpCidrs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_nat_ip_cidrs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpc_nat_ip_cidrs alicloud_vpc_nat_ip_cidrs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpcNatIpCidrsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpcNatIpCidrsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_nat_ip_cidrs',
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
    this._natIpCidrName = config.natIpCidrName;
    this._natIpCidrs = config.natIpCidrs;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidrs - computed: true, optional: false, required: false
  private _cidrs = new DataAlicloudVpcNatIpCidrsCidrsList(this, "cidrs", false);
  public get cidrs() {
    return this._cidrs;
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

  // nat_ip_cidr_name - computed: false, optional: true, required: false
  private _natIpCidrName?: string[]; 
  public get natIpCidrName() {
    return this.getListAttribute('nat_ip_cidr_name');
  }
  public set natIpCidrName(value: string[]) {
    this._natIpCidrName = value;
  }
  public resetNatIpCidrName() {
    this._natIpCidrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrNameInput() {
    return this._natIpCidrName;
  }

  // nat_ip_cidrs - computed: false, optional: true, required: false
  private _natIpCidrs?: string[]; 
  public get natIpCidrs() {
    return this.getListAttribute('nat_ip_cidrs');
  }
  public set natIpCidrs(value: string[]) {
    this._natIpCidrs = value;
  }
  public resetNatIpCidrs() {
    this._natIpCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpCidrsInput() {
    return this._natIpCidrs;
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
      nat_ip_cidr_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIpCidrName),
      nat_ip_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIpCidrs),
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
      nat_ip_cidr_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natIpCidrName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nat_ip_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natIpCidrs),
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
