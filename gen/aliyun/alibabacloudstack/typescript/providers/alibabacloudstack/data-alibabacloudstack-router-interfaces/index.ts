// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackRouterInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#id DataAlibabacloudstackRouterInterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#ids DataAlibabacloudstackRouterInterfaces#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#name_regex DataAlibabacloudstackRouterInterfaces#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#opposite_interface_id DataAlibabacloudstackRouterInterfaces#opposite_interface_id}
  */
  readonly oppositeInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#opposite_interface_owner_id DataAlibabacloudstackRouterInterfaces#opposite_interface_owner_id}
  */
  readonly oppositeInterfaceOwnerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#output_file DataAlibabacloudstackRouterInterfaces#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#role DataAlibabacloudstackRouterInterfaces#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#router_id DataAlibabacloudstackRouterInterfaces#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#router_type DataAlibabacloudstackRouterInterfaces#router_type}
  */
  readonly routerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#specification DataAlibabacloudstackRouterInterfaces#specification}
  */
  readonly specification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#status DataAlibabacloudstackRouterInterfaces#status}
  */
  readonly status?: string;
}
export interface DataAlibabacloudstackRouterInterfacesInterfaces {
}

export function dataAlibabacloudstackRouterInterfacesInterfacesToTerraform(struct?: DataAlibabacloudstackRouterInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackRouterInterfacesInterfacesToHclTerraform(struct?: DataAlibabacloudstackRouterInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackRouterInterfacesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackRouterInterfacesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackRouterInterfacesInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // health_check_source_ip - computed: true, optional: false, required: false
  public get healthCheckSourceIp() {
    return this.getStringAttribute('health_check_source_ip');
  }

  // health_check_target_ip - computed: true, optional: false, required: false
  public get healthCheckTargetIp() {
    return this.getStringAttribute('health_check_target_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opposite_interface_id - computed: true, optional: false, required: false
  public get oppositeInterfaceId() {
    return this.getStringAttribute('opposite_interface_id');
  }

  // opposite_interface_owner_id - computed: true, optional: false, required: false
  public get oppositeInterfaceOwnerId() {
    return this.getStringAttribute('opposite_interface_owner_id');
  }

  // opposite_region_id - computed: true, optional: false, required: false
  public get oppositeRegionId() {
    return this.getStringAttribute('opposite_region_id');
  }

  // opposite_router_id - computed: true, optional: false, required: false
  public get oppositeRouterId() {
    return this.getStringAttribute('opposite_router_id');
  }

  // opposite_router_type - computed: true, optional: false, required: false
  public get oppositeRouterType() {
    return this.getStringAttribute('opposite_router_type');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // router_type - computed: true, optional: false, required: false
  public get routerType() {
    return this.getStringAttribute('router_type');
  }

  // specification - computed: true, optional: false, required: false
  public get specification() {
    return this.getStringAttribute('specification');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataAlibabacloudstackRouterInterfacesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackRouterInterfacesInterfacesOutputReference {
    return new DataAlibabacloudstackRouterInterfacesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces alibabacloudstack_router_interfaces}
*/
export class DataAlibabacloudstackRouterInterfaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_router_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackRouterInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackRouterInterfaces to import
  * @param importFromId The id of the existing DataAlibabacloudstackRouterInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackRouterInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_router_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/router_interfaces alibabacloudstack_router_interfaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackRouterInterfacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackRouterInterfacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_router_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._oppositeInterfaceId = config.oppositeInterfaceId;
    this._oppositeInterfaceOwnerId = config.oppositeInterfaceOwnerId;
    this._outputFile = config.outputFile;
    this._role = config.role;
    this._routerId = config.routerId;
    this._routerType = config.routerType;
    this._specification = config.specification;
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

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataAlibabacloudstackRouterInterfacesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
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

  // opposite_interface_id - computed: false, optional: true, required: false
  private _oppositeInterfaceId?: string; 
  public get oppositeInterfaceId() {
    return this.getStringAttribute('opposite_interface_id');
  }
  public set oppositeInterfaceId(value: string) {
    this._oppositeInterfaceId = value;
  }
  public resetOppositeInterfaceId() {
    this._oppositeInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceIdInput() {
    return this._oppositeInterfaceId;
  }

  // opposite_interface_owner_id - computed: false, optional: true, required: false
  private _oppositeInterfaceOwnerId?: string; 
  public get oppositeInterfaceOwnerId() {
    return this.getStringAttribute('opposite_interface_owner_id');
  }
  public set oppositeInterfaceOwnerId(value: string) {
    this._oppositeInterfaceOwnerId = value;
  }
  public resetOppositeInterfaceOwnerId() {
    this._oppositeInterfaceOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oppositeInterfaceOwnerIdInput() {
    return this._oppositeInterfaceOwnerId;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // router_type - computed: false, optional: true, required: false
  private _routerType?: string; 
  public get routerType() {
    return this.getStringAttribute('router_type');
  }
  public set routerType(value: string) {
    this._routerType = value;
  }
  public resetRouterType() {
    this._routerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTypeInput() {
    return this._routerType;
  }

  // specification - computed: false, optional: true, required: false
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  public resetSpecification() {
    this._specification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
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
      opposite_interface_id: cdktf.stringToTerraform(this._oppositeInterfaceId),
      opposite_interface_owner_id: cdktf.stringToTerraform(this._oppositeInterfaceOwnerId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      role: cdktf.stringToTerraform(this._role),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_type: cdktf.stringToTerraform(this._routerType),
      specification: cdktf.stringToTerraform(this._specification),
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
      opposite_interface_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opposite_interface_owner_id: {
        value: cdktf.stringToHclTerraform(this._oppositeInterfaceOwnerId),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_type: {
        value: cdktf.stringToHclTerraform(this._routerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specification: {
        value: cdktf.stringToHclTerraform(this._specification),
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
