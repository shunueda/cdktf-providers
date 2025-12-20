// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2CatalogV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#cluster_id DataRancher2CatalogV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Maximum number of retries before returning error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#exponential_backoff_max_retries DataRancher2CatalogV2#exponential_backoff_max_retries}
  */
  readonly exponentialBackoffMaxRetries?: number;
  /**
  * Maximum amount of seconds to wait before retrying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#exponential_backoff_max_wait DataRancher2CatalogV2#exponential_backoff_max_wait}
  */
  readonly exponentialBackoffMaxWait?: number;
  /**
  * Minimum amount of seconds to wait before retrying
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#exponential_backoff_min_wait DataRancher2CatalogV2#exponential_backoff_min_wait}
  */
  readonly exponentialBackoffMinWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#id DataRancher2CatalogV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Only valid for OCI URL's. Allows insecure connections to registries without enforcing TLS checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#insecure_plain_http DataRancher2CatalogV2#insecure_plain_http}
  */
  readonly insecurePlainHttp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#name DataRancher2CatalogV2#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2 rancher2_catalog_v2}
*/
export class DataRancher2CatalogV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_catalog_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2CatalogV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2CatalogV2 to import
  * @param importFromId The id of the existing DataRancher2CatalogV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2CatalogV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_catalog_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/catalog_v2 rancher2_catalog_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2CatalogV2Config
  */
  public constructor(scope: Construct, id: string, config: DataRancher2CatalogV2Config) {
    super(scope, id, {
      terraformResourceType: 'rancher2_catalog_v2',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._exponentialBackoffMaxRetries = config.exponentialBackoffMaxRetries;
    this._exponentialBackoffMaxWait = config.exponentialBackoffMaxWait;
    this._exponentialBackoffMinWait = config.exponentialBackoffMinWait;
    this._id = config.id;
    this._insecurePlainHttp = config.insecurePlainHttp;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // ca_bundle - computed: true, optional: false, required: false
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exponential_backoff_max_retries - computed: true, optional: true, required: false
  private _exponentialBackoffMaxRetries?: number; 
  public get exponentialBackoffMaxRetries() {
    return this.getNumberAttribute('exponential_backoff_max_retries');
  }
  public set exponentialBackoffMaxRetries(value: number) {
    this._exponentialBackoffMaxRetries = value;
  }
  public resetExponentialBackoffMaxRetries() {
    this._exponentialBackoffMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBackoffMaxRetriesInput() {
    return this._exponentialBackoffMaxRetries;
  }

  // exponential_backoff_max_wait - computed: true, optional: true, required: false
  private _exponentialBackoffMaxWait?: number; 
  public get exponentialBackoffMaxWait() {
    return this.getNumberAttribute('exponential_backoff_max_wait');
  }
  public set exponentialBackoffMaxWait(value: number) {
    this._exponentialBackoffMaxWait = value;
  }
  public resetExponentialBackoffMaxWait() {
    this._exponentialBackoffMaxWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBackoffMaxWaitInput() {
    return this._exponentialBackoffMaxWait;
  }

  // exponential_backoff_min_wait - computed: true, optional: true, required: false
  private _exponentialBackoffMinWait?: number; 
  public get exponentialBackoffMinWait() {
    return this.getNumberAttribute('exponential_backoff_min_wait');
  }
  public set exponentialBackoffMinWait(value: number) {
    this._exponentialBackoffMinWait = value;
  }
  public resetExponentialBackoffMinWait() {
    this._exponentialBackoffMinWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentialBackoffMinWaitInput() {
    return this._exponentialBackoffMinWait;
  }

  // git_branch - computed: true, optional: false, required: false
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }

  // git_repo - computed: true, optional: false, required: false
  public get gitRepo() {
    return this.getStringAttribute('git_repo');
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

  // insecure - computed: true, optional: false, required: false
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }

  // insecure_plain_http - computed: false, optional: true, required: false
  private _insecurePlainHttp?: boolean | cdktf.IResolvable; 
  public get insecurePlainHttp() {
    return this.getBooleanAttribute('insecure_plain_http');
  }
  public set insecurePlainHttp(value: boolean | cdktf.IResolvable) {
    this._insecurePlainHttp = value;
  }
  public resetInsecurePlainHttp() {
    this._insecurePlainHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecurePlainHttpInput() {
    return this._insecurePlainHttp;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_namespace - computed: true, optional: false, required: false
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // service_account_namespace - computed: true, optional: false, required: false
  public get serviceAccountNamespace() {
    return this.getStringAttribute('service_account_namespace');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      exponential_backoff_max_retries: cdktf.numberToTerraform(this._exponentialBackoffMaxRetries),
      exponential_backoff_max_wait: cdktf.numberToTerraform(this._exponentialBackoffMaxWait),
      exponential_backoff_min_wait: cdktf.numberToTerraform(this._exponentialBackoffMinWait),
      id: cdktf.stringToTerraform(this._id),
      insecure_plain_http: cdktf.booleanToTerraform(this._insecurePlainHttp),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exponential_backoff_max_retries: {
        value: cdktf.numberToHclTerraform(this._exponentialBackoffMaxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exponential_backoff_max_wait: {
        value: cdktf.numberToHclTerraform(this._exponentialBackoffMaxWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exponential_backoff_min_wait: {
        value: cdktf.numberToHclTerraform(this._exponentialBackoffMinWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_plain_http: {
        value: cdktf.booleanToHclTerraform(this._insecurePlainHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
