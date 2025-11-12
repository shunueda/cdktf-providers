// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbPrimaryEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#connection_prefix PolardbPrimaryEndpoint#connection_prefix}
  */
  readonly connectionPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#db_cluster_id PolardbPrimaryEndpoint#db_cluster_id}
  */
  readonly dbClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#db_endpoint_description PolardbPrimaryEndpoint#db_endpoint_description}
  */
  readonly dbEndpointDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#id PolardbPrimaryEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#net_type PolardbPrimaryEndpoint#net_type}
  */
  readonly netType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#port PolardbPrimaryEndpoint#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#ssl_auto_rotate PolardbPrimaryEndpoint#ssl_auto_rotate}
  */
  readonly sslAutoRotate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#ssl_enabled PolardbPrimaryEndpoint#ssl_enabled}
  */
  readonly sslEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint alicloud_polardb_primary_endpoint}
*/
export class PolardbPrimaryEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_polardb_primary_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbPrimaryEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbPrimaryEndpoint to import
  * @param importFromId The id of the existing PolardbPrimaryEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbPrimaryEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_polardb_primary_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/polardb_primary_endpoint alicloud_polardb_primary_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbPrimaryEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbPrimaryEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_polardb_primary_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionPrefix = config.connectionPrefix;
    this._dbClusterId = config.dbClusterId;
    this._dbEndpointDescription = config.dbEndpointDescription;
    this._id = config.id;
    this._netType = config.netType;
    this._port = config.port;
    this._sslAutoRotate = config.sslAutoRotate;
    this._sslEnabled = config.sslEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_prefix - computed: true, optional: true, required: false
  private _connectionPrefix?: string; 
  public get connectionPrefix() {
    return this.getStringAttribute('connection_prefix');
  }
  public set connectionPrefix(value: string) {
    this._connectionPrefix = value;
  }
  public resetConnectionPrefix() {
    this._connectionPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPrefixInput() {
    return this._connectionPrefix;
  }

  // db_cluster_id - computed: false, optional: false, required: true
  private _dbClusterId?: string; 
  public get dbClusterId() {
    return this.getStringAttribute('db_cluster_id');
  }
  public set dbClusterId(value: string) {
    this._dbClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdInput() {
    return this._dbClusterId;
  }

  // db_endpoint_description - computed: false, optional: true, required: false
  private _dbEndpointDescription?: string; 
  public get dbEndpointDescription() {
    return this.getStringAttribute('db_endpoint_description');
  }
  public set dbEndpointDescription(value: string) {
    this._dbEndpointDescription = value;
  }
  public resetDbEndpointDescription() {
    this._dbEndpointDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbEndpointDescriptionInput() {
    return this._dbEndpointDescription;
  }

  // db_endpoint_id - computed: true, optional: false, required: false
  public get dbEndpointId() {
    return this.getStringAttribute('db_endpoint_id');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
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

  // net_type - computed: false, optional: true, required: false
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  public resetNetType() {
    this._netType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_auto_rotate - computed: false, optional: true, required: false
  private _sslAutoRotate?: string; 
  public get sslAutoRotate() {
    return this.getStringAttribute('ssl_auto_rotate');
  }
  public set sslAutoRotate(value: string) {
    this._sslAutoRotate = value;
  }
  public resetSslAutoRotate() {
    this._sslAutoRotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAutoRotateInput() {
    return this._sslAutoRotate;
  }

  // ssl_certificate_url - computed: true, optional: false, required: false
  public get sslCertificateUrl() {
    return this.getStringAttribute('ssl_certificate_url');
  }

  // ssl_connection_string - computed: true, optional: false, required: false
  public get sslConnectionString() {
    return this.getStringAttribute('ssl_connection_string');
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: string; 
  public get sslEnabled() {
    return this.getStringAttribute('ssl_enabled');
  }
  public set sslEnabled(value: string) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // ssl_expire_time - computed: true, optional: false, required: false
  public get sslExpireTime() {
    return this.getStringAttribute('ssl_expire_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_prefix: cdktf.stringToTerraform(this._connectionPrefix),
      db_cluster_id: cdktf.stringToTerraform(this._dbClusterId),
      db_endpoint_description: cdktf.stringToTerraform(this._dbEndpointDescription),
      id: cdktf.stringToTerraform(this._id),
      net_type: cdktf.stringToTerraform(this._netType),
      port: cdktf.stringToTerraform(this._port),
      ssl_auto_rotate: cdktf.stringToTerraform(this._sslAutoRotate),
      ssl_enabled: cdktf.stringToTerraform(this._sslEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_prefix: {
        value: cdktf.stringToHclTerraform(this._connectionPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dbClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_endpoint_description: {
        value: cdktf.stringToHclTerraform(this._dbEndpointDescription),
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
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_auto_rotate: {
        value: cdktf.stringToHclTerraform(this._sslAutoRotate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enabled: {
        value: cdktf.stringToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
