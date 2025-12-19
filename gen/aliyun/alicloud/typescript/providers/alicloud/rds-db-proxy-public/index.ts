// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsDbProxyPublicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#connection_string_prefix RdsDbProxyPublic#connection_string_prefix}
  */
  readonly connectionStringPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#db_instance_id RdsDbProxyPublic#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#db_proxy_connection_string_net_type RdsDbProxyPublic#db_proxy_connection_string_net_type}
  */
  readonly dbProxyConnectionStringNetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#db_proxy_endpoint_id RdsDbProxyPublic#db_proxy_endpoint_id}
  */
  readonly dbProxyEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#db_proxy_new_connect_string_port RdsDbProxyPublic#db_proxy_new_connect_string_port}
  */
  readonly dbProxyNewConnectStringPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#id RdsDbProxyPublic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#timeouts RdsDbProxyPublic#timeouts}
  */
  readonly timeouts?: RdsDbProxyPublicTimeouts;
}
export interface RdsDbProxyPublicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#create RdsDbProxyPublic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#delete RdsDbProxyPublic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#update RdsDbProxyPublic#update}
  */
  readonly update?: string;
}

export function rdsDbProxyPublicTimeoutsToTerraform(struct?: RdsDbProxyPublicTimeouts | cdktf.IResolvable): any {
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


export function rdsDbProxyPublicTimeoutsToHclTerraform(struct?: RdsDbProxyPublicTimeouts | cdktf.IResolvable): any {
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

export class RdsDbProxyPublicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsDbProxyPublicTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsDbProxyPublicTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public alicloud_rds_db_proxy_public}
*/
export class RdsDbProxyPublic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_db_proxy_public";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsDbProxyPublic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsDbProxyPublic to import
  * @param importFromId The id of the existing RdsDbProxyPublic that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsDbProxyPublic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_db_proxy_public", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/rds_db_proxy_public alicloud_rds_db_proxy_public} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsDbProxyPublicConfig
  */
  public constructor(scope: Construct, id: string, config: RdsDbProxyPublicConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_db_proxy_public',
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
    this._connectionStringPrefix = config.connectionStringPrefix;
    this._dbInstanceId = config.dbInstanceId;
    this._dbProxyConnectionStringNetType = config.dbProxyConnectionStringNetType;
    this._dbProxyEndpointId = config.dbProxyEndpointId;
    this._dbProxyNewConnectStringPort = config.dbProxyNewConnectStringPort;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string_prefix - computed: false, optional: false, required: true
  private _connectionStringPrefix?: string; 
  public get connectionStringPrefix() {
    return this.getStringAttribute('connection_string_prefix');
  }
  public set connectionStringPrefix(value: string) {
    this._connectionStringPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringPrefixInput() {
    return this._connectionStringPrefix;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // db_proxy_connection_string_net_type - computed: false, optional: false, required: true
  private _dbProxyConnectionStringNetType?: string; 
  public get dbProxyConnectionStringNetType() {
    return this.getStringAttribute('db_proxy_connection_string_net_type');
  }
  public set dbProxyConnectionStringNetType(value: string) {
    this._dbProxyConnectionStringNetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyConnectionStringNetTypeInput() {
    return this._dbProxyConnectionStringNetType;
  }

  // db_proxy_endpoint_id - computed: false, optional: false, required: true
  private _dbProxyEndpointId?: string; 
  public get dbProxyEndpointId() {
    return this.getStringAttribute('db_proxy_endpoint_id');
  }
  public set dbProxyEndpointId(value: string) {
    this._dbProxyEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyEndpointIdInput() {
    return this._dbProxyEndpointId;
  }

  // db_proxy_new_connect_string_port - computed: true, optional: true, required: false
  private _dbProxyNewConnectStringPort?: string; 
  public get dbProxyNewConnectStringPort() {
    return this.getStringAttribute('db_proxy_new_connect_string_port');
  }
  public set dbProxyNewConnectStringPort(value: string) {
    this._dbProxyNewConnectStringPort = value;
  }
  public resetDbProxyNewConnectStringPort() {
    this._dbProxyNewConnectStringPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyNewConnectStringPortInput() {
    return this._dbProxyNewConnectStringPort;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsDbProxyPublicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsDbProxyPublicTimeouts) {
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
      connection_string_prefix: cdktf.stringToTerraform(this._connectionStringPrefix),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      db_proxy_connection_string_net_type: cdktf.stringToTerraform(this._dbProxyConnectionStringNetType),
      db_proxy_endpoint_id: cdktf.stringToTerraform(this._dbProxyEndpointId),
      db_proxy_new_connect_string_port: cdktf.stringToTerraform(this._dbProxyNewConnectStringPort),
      id: cdktf.stringToTerraform(this._id),
      timeouts: rdsDbProxyPublicTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_string_prefix: {
        value: cdktf.stringToHclTerraform(this._connectionStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_connection_string_net_type: {
        value: cdktf.stringToHclTerraform(this._dbProxyConnectionStringNetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._dbProxyEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_new_connect_string_port: {
        value: cdktf.stringToHclTerraform(this._dbProxyNewConnectStringPort),
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
      timeouts: {
        value: rdsDbProxyPublicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsDbProxyPublicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
