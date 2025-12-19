// https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseLogsinkOpensearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA certificate for TLS verification (PEM format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#ca_cert DatabaseLogsinkOpensearch#ca_cert}
  */
  readonly caCert?: string;
  /**
  * UUID of the source database cluster that will forward logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#cluster_id DatabaseLogsinkOpensearch#cluster_id}
  */
  readonly clusterId: string;
  /**
  * HTTPS URL to OpenSearch (https://host:port)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#endpoint DatabaseLogsinkOpensearch#endpoint}
  */
  readonly endpoint: string;
  /**
  * Maximum number of days to retain indices (>= 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#index_days_max DatabaseLogsinkOpensearch#index_days_max}
  */
  readonly indexDaysMax?: number;
  /**
  * Prefix for OpenSearch indices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#index_prefix DatabaseLogsinkOpensearch#index_prefix}
  */
  readonly indexPrefix: string;
  /**
  * Display name for the logsink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#name DatabaseLogsinkOpensearch#name}
  */
  readonly name: string;
  /**
  * Request timeout for log deliveries in seconds (>= 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#timeout_seconds DatabaseLogsinkOpensearch#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch digitalocean_database_logsink_opensearch}
*/
export class DatabaseLogsinkOpensearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "digitalocean_database_logsink_opensearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseLogsinkOpensearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseLogsinkOpensearch to import
  * @param importFromId The id of the existing DatabaseLogsinkOpensearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseLogsinkOpensearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "digitalocean_database_logsink_opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/digitalocean/digitalocean/2.72.0/docs/resources/database_logsink_opensearch digitalocean_database_logsink_opensearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseLogsinkOpensearchConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseLogsinkOpensearchConfig) {
    super(scope, id, {
      terraformResourceType: 'digitalocean_database_logsink_opensearch',
      terraformGeneratorMetadata: {
        providerName: 'digitalocean',
        providerVersion: '2.72.0',
        providerVersionConstraint: '2.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCert = config.caCert;
    this._clusterId = config.clusterId;
    this._endpoint = config.endpoint;
    this._indexDaysMax = config.indexDaysMax;
    this._indexPrefix = config.indexPrefix;
    this._name = config.name;
    this._timeoutSeconds = config.timeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_days_max - computed: false, optional: true, required: false
  private _indexDaysMax?: number; 
  public get indexDaysMax() {
    return this.getNumberAttribute('index_days_max');
  }
  public set indexDaysMax(value: number) {
    this._indexDaysMax = value;
  }
  public resetIndexDaysMax() {
    this._indexDaysMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDaysMaxInput() {
    return this._indexDaysMax;
  }

  // index_prefix - computed: false, optional: false, required: true
  private _indexPrefix?: string; 
  public get indexPrefix() {
    return this.getStringAttribute('index_prefix');
  }
  public set indexPrefix(value: string) {
    this._indexPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPrefixInput() {
    return this._indexPrefix;
  }

  // logsink_id - computed: true, optional: false, required: false
  public get logsinkId() {
    return this.getStringAttribute('logsink_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert: cdktf.stringToTerraform(this._caCert),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      index_days_max: cdktf.numberToTerraform(this._indexDaysMax),
      index_prefix: cdktf.stringToTerraform(this._indexPrefix),
      name: cdktf.stringToTerraform(this._name),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_days_max: {
        value: cdktf.numberToHclTerraform(this._indexDaysMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_prefix: {
        value: cdktf.stringToHclTerraform(this._indexPrefix),
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
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
