// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZecVpcRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination address block to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#destination_cidr_block DataZenlayercloudZecVpcRoutes#destination_cidr_block}
  */
  readonly destinationCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#id DataZenlayercloudZecVpcRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the route to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#ids DataZenlayercloudZecVpcRoutes#ids}
  */
  readonly ids?: string[];
  /**
  * IP stack type. Valid values: `IPv4`, `IPv6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#ip_version DataZenlayercloudZecVpcRoutes#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * A regex string to apply to the vNIC list returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#name_regex DataZenlayercloudZecVpcRoutes#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#result_output_file DataZenlayercloudZecVpcRoutes#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Route type to be queried. Valid values: `RouteTypeStatic`(for static route), `RouteTypePolicy`(for policy route), `RouteTypeSubnet`(for subnet route), `RouteTypeNatGw`(for NAT gateway route), `RouteTypeTransit`(for dynamic route).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#route_type DataZenlayercloudZecVpcRoutes#route_type}
  */
  readonly routeType?: string;
  /**
  * ID of the global VPC to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#vpc_id DataZenlayercloudZecVpcRoutes#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DataZenlayercloudZecVpcRoutesRoutes {
}

export function dataZenlayercloudZecVpcRoutesRoutesToTerraform(struct?: DataZenlayercloudZecVpcRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZecVpcRoutesRoutesToHclTerraform(struct?: DataZenlayercloudZecVpcRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZecVpcRoutesRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZecVpcRoutesRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZecVpcRoutesRoutes | undefined) {
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

  // destination_cidr_block - computed: true, optional: false, required: false
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_hop_id - computed: true, optional: false, required: false
  public get nextHopId() {
    return this.getStringAttribute('next_hop_id');
  }

  // next_hop_type - computed: true, optional: false, required: false
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // route_type - computed: true, optional: false, required: false
  public get routeType() {
    return this.getStringAttribute('route_type');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataZenlayercloudZecVpcRoutesRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZecVpcRoutesRoutesOutputReference {
    return new DataZenlayercloudZecVpcRoutesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes zenlayercloud_zec_vpc_routes}
*/
export class DataZenlayercloudZecVpcRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_vpc_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZecVpcRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZecVpcRoutes to import
  * @param importFromId The id of the existing DataZenlayercloudZecVpcRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZecVpcRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_vpc_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.17/docs/data-sources/zec_vpc_routes zenlayercloud_zec_vpc_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZecVpcRoutesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZecVpcRoutesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_vpc_routes',
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
    this._destinationCidrBlock = config.destinationCidrBlock;
    this._id = config.id;
    this._ids = config.ids;
    this._ipVersion = config.ipVersion;
    this._nameRegex = config.nameRegex;
    this._resultOutputFile = config.resultOutputFile;
    this._routeType = config.routeType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_cidr_block - computed: false, optional: true, required: false
  private _destinationCidrBlock?: string; 
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }
  public set destinationCidrBlock(value: string) {
    this._destinationCidrBlock = value;
  }
  public resetDestinationCidrBlock() {
    this._destinationCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrBlockInput() {
    return this._destinationCidrBlock;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // route_type - computed: false, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new DataZenlayercloudZecVpcRoutesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr_block: cdktf.stringToTerraform(this._destinationCidrBlock),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      route_type: cdktf.stringToTerraform(this._routeType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_cidr_block: {
        value: cdktf.stringToHclTerraform(this._destinationCidrBlock),
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
        type: "set",
        storageClassType: "stringList",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      route_type: {
        value: cdktf.stringToHclTerraform(this._routeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
