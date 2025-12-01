// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GraphDatabaseDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_instance_category GraphDatabaseDbInstance#db_instance_category}
  */
  readonly dbInstanceCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_instance_description GraphDatabaseDbInstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_instance_network_type GraphDatabaseDbInstance#db_instance_network_type}
  */
  readonly dbInstanceNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_instance_storage_type GraphDatabaseDbInstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_node_class GraphDatabaseDbInstance#db_node_class}
  */
  readonly dbNodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_node_storage GraphDatabaseDbInstance#db_node_storage}
  */
  readonly dbNodeStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_version GraphDatabaseDbInstance#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#id GraphDatabaseDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#payment_type GraphDatabaseDbInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#vpc_id GraphDatabaseDbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#vswitch_id GraphDatabaseDbInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#zone_id GraphDatabaseDbInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * db_instance_ip_array block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_instance_ip_array GraphDatabaseDbInstance#db_instance_ip_array}
  */
  readonly dbInstanceIpArray?: GraphDatabaseDbInstanceDbInstanceIpArray[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#timeouts GraphDatabaseDbInstance#timeouts}
  */
  readonly timeouts?: GraphDatabaseDbInstanceTimeouts;
}
export interface GraphDatabaseDbInstanceDbInstanceIpArray {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_instance_ip_array_attribute GraphDatabaseDbInstance#db_instance_ip_array_attribute}
  */
  readonly dbInstanceIpArrayAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#db_instance_ip_array_name GraphDatabaseDbInstance#db_instance_ip_array_name}
  */
  readonly dbInstanceIpArrayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#security_ips GraphDatabaseDbInstance#security_ips}
  */
  readonly securityIps?: string;
}

export function graphDatabaseDbInstanceDbInstanceIpArrayToTerraform(struct?: GraphDatabaseDbInstanceDbInstanceIpArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_instance_ip_array_attribute: cdktf.stringToTerraform(struct!.dbInstanceIpArrayAttribute),
    db_instance_ip_array_name: cdktf.stringToTerraform(struct!.dbInstanceIpArrayName),
    security_ips: cdktf.stringToTerraform(struct!.securityIps),
  }
}


export function graphDatabaseDbInstanceDbInstanceIpArrayToHclTerraform(struct?: GraphDatabaseDbInstanceDbInstanceIpArray | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_instance_ip_array_attribute: {
      value: cdktf.stringToHclTerraform(struct!.dbInstanceIpArrayAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_instance_ip_array_name: {
      value: cdktf.stringToHclTerraform(struct!.dbInstanceIpArrayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_ips: {
      value: cdktf.stringToHclTerraform(struct!.securityIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GraphDatabaseDbInstanceDbInstanceIpArrayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GraphDatabaseDbInstanceDbInstanceIpArray | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbInstanceIpArrayAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceIpArrayAttribute = this._dbInstanceIpArrayAttribute;
    }
    if (this._dbInstanceIpArrayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceIpArrayName = this._dbInstanceIpArrayName;
    }
    if (this._securityIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIps = this._securityIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GraphDatabaseDbInstanceDbInstanceIpArray | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbInstanceIpArrayAttribute = undefined;
      this._dbInstanceIpArrayName = undefined;
      this._securityIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbInstanceIpArrayAttribute = value.dbInstanceIpArrayAttribute;
      this._dbInstanceIpArrayName = value.dbInstanceIpArrayName;
      this._securityIps = value.securityIps;
    }
  }

  // db_instance_ip_array_attribute - computed: false, optional: true, required: false
  private _dbInstanceIpArrayAttribute?: string; 
  public get dbInstanceIpArrayAttribute() {
    return this.getStringAttribute('db_instance_ip_array_attribute');
  }
  public set dbInstanceIpArrayAttribute(value: string) {
    this._dbInstanceIpArrayAttribute = value;
  }
  public resetDbInstanceIpArrayAttribute() {
    this._dbInstanceIpArrayAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayAttributeInput() {
    return this._dbInstanceIpArrayAttribute;
  }

  // db_instance_ip_array_name - computed: false, optional: true, required: false
  private _dbInstanceIpArrayName?: string; 
  public get dbInstanceIpArrayName() {
    return this.getStringAttribute('db_instance_ip_array_name');
  }
  public set dbInstanceIpArrayName(value: string) {
    this._dbInstanceIpArrayName = value;
  }
  public resetDbInstanceIpArrayName() {
    this._dbInstanceIpArrayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayNameInput() {
    return this._dbInstanceIpArrayName;
  }

  // security_ips - computed: false, optional: true, required: false
  private _securityIps?: string; 
  public get securityIps() {
    return this.getStringAttribute('security_ips');
  }
  public set securityIps(value: string) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }
}

export class GraphDatabaseDbInstanceDbInstanceIpArrayList extends cdktf.ComplexList {
  public internalValue? : GraphDatabaseDbInstanceDbInstanceIpArray[] | cdktf.IResolvable

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
  public get(index: number): GraphDatabaseDbInstanceDbInstanceIpArrayOutputReference {
    return new GraphDatabaseDbInstanceDbInstanceIpArrayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GraphDatabaseDbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#create GraphDatabaseDbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#delete GraphDatabaseDbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#update GraphDatabaseDbInstance#update}
  */
  readonly update?: string;
}

export function graphDatabaseDbInstanceTimeoutsToTerraform(struct?: GraphDatabaseDbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function graphDatabaseDbInstanceTimeoutsToHclTerraform(struct?: GraphDatabaseDbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GraphDatabaseDbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GraphDatabaseDbInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GraphDatabaseDbInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance alicloud_graph_database_db_instance}
*/
export class GraphDatabaseDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_graph_database_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GraphDatabaseDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GraphDatabaseDbInstance to import
  * @param importFromId The id of the existing GraphDatabaseDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GraphDatabaseDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_graph_database_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/graph_database_db_instance alicloud_graph_database_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GraphDatabaseDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GraphDatabaseDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_graph_database_db_instance',
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
    this._dbInstanceCategory = config.dbInstanceCategory;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._dbInstanceNetworkType = config.dbInstanceNetworkType;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._dbNodeClass = config.dbNodeClass;
    this._dbNodeStorage = config.dbNodeStorage;
    this._dbVersion = config.dbVersion;
    this._id = config.id;
    this._paymentType = config.paymentType;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._dbInstanceIpArray.internalValue = config.dbInstanceIpArray;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // db_instance_category - computed: false, optional: false, required: true
  private _dbInstanceCategory?: string; 
  public get dbInstanceCategory() {
    return this.getStringAttribute('db_instance_category');
  }
  public set dbInstanceCategory(value: string) {
    this._dbInstanceCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceCategoryInput() {
    return this._dbInstanceCategory;
  }

  // db_instance_description - computed: false, optional: true, required: false
  private _dbInstanceDescription?: string; 
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }
  public set dbInstanceDescription(value: string) {
    this._dbInstanceDescription = value;
  }
  public resetDbInstanceDescription() {
    this._dbInstanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceDescriptionInput() {
    return this._dbInstanceDescription;
  }

  // db_instance_network_type - computed: false, optional: false, required: true
  private _dbInstanceNetworkType?: string; 
  public get dbInstanceNetworkType() {
    return this.getStringAttribute('db_instance_network_type');
  }
  public set dbInstanceNetworkType(value: string) {
    this._dbInstanceNetworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceNetworkTypeInput() {
    return this._dbInstanceNetworkType;
  }

  // db_instance_storage_type - computed: false, optional: false, required: true
  private _dbInstanceStorageType?: string; 
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }
  public set dbInstanceStorageType(value: string) {
    this._dbInstanceStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageTypeInput() {
    return this._dbInstanceStorageType;
  }

  // db_node_class - computed: false, optional: false, required: true
  private _dbNodeClass?: string; 
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }
  public set dbNodeClass(value: string) {
    this._dbNodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeClassInput() {
    return this._dbNodeClass;
  }

  // db_node_storage - computed: false, optional: false, required: true
  private _dbNodeStorage?: number; 
  public get dbNodeStorage() {
    return this.getNumberAttribute('db_node_storage');
  }
  public set dbNodeStorage(value: number) {
    this._dbNodeStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeStorageInput() {
    return this._dbNodeStorage;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
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

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: true, optional: true, required: false
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

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // db_instance_ip_array - computed: false, optional: true, required: false
  private _dbInstanceIpArray = new GraphDatabaseDbInstanceDbInstanceIpArrayList(this, "db_instance_ip_array", true);
  public get dbInstanceIpArray() {
    return this._dbInstanceIpArray;
  }
  public putDbInstanceIpArray(value: GraphDatabaseDbInstanceDbInstanceIpArray[] | cdktf.IResolvable) {
    this._dbInstanceIpArray.internalValue = value;
  }
  public resetDbInstanceIpArray() {
    this._dbInstanceIpArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayInput() {
    return this._dbInstanceIpArray.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GraphDatabaseDbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GraphDatabaseDbInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_instance_category: cdktf.stringToTerraform(this._dbInstanceCategory),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      db_instance_network_type: cdktf.stringToTerraform(this._dbInstanceNetworkType),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      db_node_class: cdktf.stringToTerraform(this._dbNodeClass),
      db_node_storage: cdktf.numberToTerraform(this._dbNodeStorage),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      id: cdktf.stringToTerraform(this._id),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      db_instance_ip_array: cdktf.listMapper(graphDatabaseDbInstanceDbInstanceIpArrayToTerraform, true)(this._dbInstanceIpArray.internalValue),
      timeouts: graphDatabaseDbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_instance_category: {
        value: cdktf.stringToHclTerraform(this._dbInstanceCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_description: {
        value: cdktf.stringToHclTerraform(this._dbInstanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_network_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_class: {
        value: cdktf.stringToHclTerraform(this._dbNodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_storage: {
        value: cdktf.numberToHclTerraform(this._dbNodeStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
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
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_ip_array: {
        value: cdktf.listMapperHcl(graphDatabaseDbInstanceDbInstanceIpArrayToHclTerraform, true)(this._dbInstanceIpArray.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GraphDatabaseDbInstanceDbInstanceIpArrayList",
      },
      timeouts: {
        value: graphDatabaseDbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GraphDatabaseDbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
