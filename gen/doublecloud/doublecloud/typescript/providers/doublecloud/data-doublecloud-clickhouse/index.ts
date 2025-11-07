// https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/clickhouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDoublecloudClickhouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/clickhouse#id DataDoublecloudClickhouse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/clickhouse#name DataDoublecloudClickhouse#name}
  */
  readonly name?: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/clickhouse#project_id DataDoublecloudClickhouse#project_id}
  */
  readonly projectId: string;
}
export interface DataDoublecloudClickhouseConnectionInfo {
}

export function dataDoublecloudClickhouseConnectionInfoToTerraform(struct?: DataDoublecloudClickhouseConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDoublecloudClickhouseConnectionInfoToHclTerraform(struct?: DataDoublecloudClickhouseConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDoublecloudClickhouseConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDoublecloudClickhouseConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDoublecloudClickhouseConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // https_uri - computed: true, optional: false, required: false
  public get httpsUri() {
    return this.getStringAttribute('https_uri');
  }

  // jdbc_uri - computed: true, optional: false, required: false
  public get jdbcUri() {
    return this.getStringAttribute('jdbc_uri');
  }

  // native_protocol - computed: true, optional: false, required: false
  public get nativeProtocol() {
    return this.getStringAttribute('native_protocol');
  }

  // odbc_uri - computed: true, optional: false, required: false
  public get odbcUri() {
    return this.getStringAttribute('odbc_uri');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // tcp_port_secure - computed: true, optional: false, required: false
  public get tcpPortSecure() {
    return this.getNumberAttribute('tcp_port_secure');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataDoublecloudClickhousePrivateConnectionInfo {
}

export function dataDoublecloudClickhousePrivateConnectionInfoToTerraform(struct?: DataDoublecloudClickhousePrivateConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDoublecloudClickhousePrivateConnectionInfoToHclTerraform(struct?: DataDoublecloudClickhousePrivateConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDoublecloudClickhousePrivateConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDoublecloudClickhousePrivateConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDoublecloudClickhousePrivateConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // https_uri - computed: true, optional: false, required: false
  public get httpsUri() {
    return this.getStringAttribute('https_uri');
  }

  // jdbc_uri - computed: true, optional: false, required: false
  public get jdbcUri() {
    return this.getStringAttribute('jdbc_uri');
  }

  // native_protocol - computed: true, optional: false, required: false
  public get nativeProtocol() {
    return this.getStringAttribute('native_protocol');
  }

  // odbc_uri - computed: true, optional: false, required: false
  public get odbcUri() {
    return this.getStringAttribute('odbc_uri');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // tcp_port_secure - computed: true, optional: false, required: false
  public get tcpPortSecure() {
    return this.getNumberAttribute('tcp_port_secure');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/clickhouse doublecloud_clickhouse}
*/
export class DataDoublecloudClickhouse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doublecloud_clickhouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDoublecloudClickhouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDoublecloudClickhouse to import
  * @param importFromId The id of the existing DataDoublecloudClickhouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/clickhouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDoublecloudClickhouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doublecloud_clickhouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doublecloud/doublecloud/0.1.26/docs/data-sources/clickhouse doublecloud_clickhouse} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDoublecloudClickhouseConfig
  */
  public constructor(scope: Construct, id: string, config: DataDoublecloudClickhouseConfig) {
    super(scope, id, {
      terraformResourceType: 'doublecloud_clickhouse',
      terraformGeneratorMetadata: {
        providerName: 'doublecloud',
        providerVersion: '0.1.26'
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
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new DataDoublecloudClickhouseConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_connection_info - computed: true, optional: false, required: false
  private _privateConnectionInfo = new DataDoublecloudClickhousePrivateConnectionInfoOutputReference(this, "private_connection_info");
  public get privateConnectionInfo() {
    return this._privateConnectionInfo;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
