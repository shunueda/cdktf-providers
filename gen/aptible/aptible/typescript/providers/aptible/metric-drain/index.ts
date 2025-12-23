// https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricDrainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#api_key MetricDrain#api_key}
  */
  readonly apiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#bucket MetricDrain#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#database MetricDrain#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#database_id MetricDrain#database_id}
  */
  readonly databaseId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#drain_type MetricDrain#drain_type}
  */
  readonly drainType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#env_id MetricDrain#env_id}
  */
  readonly envId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#handle MetricDrain#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#id MetricDrain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#organization MetricDrain#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#password MetricDrain#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#series_url MetricDrain#series_url}
  */
  readonly seriesUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#url MetricDrain#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#username MetricDrain#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain aptible_metric_drain}
*/
export class MetricDrain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible_metric_drain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricDrain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricDrain to import
  * @param importFromId The id of the existing MetricDrain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricDrain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible_metric_drain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/metric_drain aptible_metric_drain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricDrainConfig
  */
  public constructor(scope: Construct, id: string, config: MetricDrainConfig) {
    super(scope, id, {
      terraformResourceType: 'aptible_metric_drain',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.19',
        providerVersionConstraint: '0.9.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._bucket = config.bucket;
    this._database = config.database;
    this._databaseId = config.databaseId;
    this._drainType = config.drainType;
    this._envId = config.envId;
    this._handle = config.handle;
    this._id = config.id;
    this._organization = config.organization;
    this._password = config.password;
    this._seriesUrl = config.seriesUrl;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: number; 
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }
  public set databaseId(value: number) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // drain_type - computed: false, optional: false, required: true
  private _drainType?: string; 
  public get drainType() {
    return this.getStringAttribute('drain_type');
  }
  public set drainType(value: string) {
    this._drainType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTypeInput() {
    return this._drainType;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
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

  // metric_drain_id - computed: true, optional: false, required: false
  public get metricDrainId() {
    return this.getNumberAttribute('metric_drain_id');
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // series_url - computed: false, optional: true, required: false
  private _seriesUrl?: string; 
  public get seriesUrl() {
    return this.getStringAttribute('series_url');
  }
  public set seriesUrl(value: string) {
    this._seriesUrl = value;
  }
  public resetSeriesUrl() {
    this._seriesUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesUrlInput() {
    return this._seriesUrl;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      bucket: cdktf.stringToTerraform(this._bucket),
      database: cdktf.stringToTerraform(this._database),
      database_id: cdktf.numberToTerraform(this._databaseId),
      drain_type: cdktf.stringToTerraform(this._drainType),
      env_id: cdktf.numberToTerraform(this._envId),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      password: cdktf.stringToTerraform(this._password),
      series_url: cdktf.stringToTerraform(this._seriesUrl),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_id: {
        value: cdktf.numberToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drain_type: {
        value: cdktf.stringToHclTerraform(this._drainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      series_url: {
        value: cdktf.stringToHclTerraform(this._seriesUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
