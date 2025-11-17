// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YandexProviderConfig {
  /**
  * The ID of the [Cloud](https://yandex.cloud/docs/resource-manager/concepts/resources-hierarchy#cloud) to apply any resources to.
  * This can also be specified using environment variable `YC_CLOUD_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#cloud_id YandexProvider#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The endpoint for API calls, default value is **api.cloud.yandex.net:443**.
  * This can also be defined by environment variable `YC_ENDPOINT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#endpoint YandexProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The ID of the [Folder](https://yandex.cloud/docs/resource-manager/concepts/resources-hierarchy#folder) to operate under, if not specified by a given resource.
  * This can also be specified using environment variable `YC_FOLDER_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#folder_id YandexProvider#folder_id}
  */
  readonly folderId?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#insecure YandexProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * This is the maximum number of times an API call is retried, in the case where requests are being throttled or experiencing transient failures. The delay between the subsequent API calls increases exponentially.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#max_retries YandexProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The ID of the [Cloud Organization](https://yandex.cloud/docs/organization/quickstart) to operate under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#organization_id YandexProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Disable use of TLS. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#plaintext YandexProvider#plaintext}
  */
  readonly plaintext?: boolean | cdktf.IResolvable;
  /**
  * Profile name to use in the shared credentials file. Default value is `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#profile YandexProvider#profile}
  */
  readonly profile?: string;
  /**
  * [The region](https://yandex.cloud/docs/overview/concepts/region) where operations will take place. For example `ru-central1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#region_id YandexProvider#region_id}
  */
  readonly regionId?: string;
  /**
  * Contains either a path to or the contents of the [Service Account file](https://yandex.cloud/docs/iam/concepts/authorization/key) in JSON format.
  * This can also be specified using environment variable `YC_SERVICE_ACCOUNT_KEY_FILE`. You can read how to create service account key file [here](https://yandex.cloud/docs/iam/operations/iam-token/create-for-sa#keys-create).
  * 
  * ~> Only one of `token` or `service_account_key_file` must be specified.
  * 
  * ~> One can authenticate via instance service account from inside a compute instance. In order to use this method, omit both `token`/`service_account_key_file` and attach service account to the instance. [Working with Yandex Cloud from inside an instance](https://yandex.cloud/docs/compute/operations/vm-connect/auth-inside-vm).
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#service_account_key_file YandexProvider#service_account_key_file}
  */
  readonly serviceAccountKeyFile?: string;
  /**
  * Shared credentials file path.
  * Supported keys: `storage_access_key` and `storage_secret_key`.
  * 
  * ~> The `storage_access_key` and `storage_secret_key` attributes from the shared credentials file are used only when the provider and a storage data/resource do not have an access/secret keys explicitly specified.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#shared_credentials_file YandexProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * Yandex Cloud Object Storage access key, which is used when a storage data/resource doesn't have an access key explicitly specified. 
  * This can also be specified using environment variable `YC_STORAGE_ACCESS_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#storage_access_key YandexProvider#storage_access_key}
  */
  readonly storageAccessKey?: string;
  /**
  * Yandex Cloud [Object Storage Endpoint](https://yandex.cloud/docs/storage/s3/#request-url), which is used to connect to `S3 API`. Default value is **storage.yandexcloud.net**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#storage_endpoint YandexProvider#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * Yandex Cloud Object Storage secret key, which is used when a storage data/resource doesn't have a secret key explicitly specified.
  * This can also be specified using environment variable `YC_STORAGE_SECRET_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#storage_secret_key YandexProvider#storage_secret_key}
  */
  readonly storageSecretKey?: string;
  /**
  * Security token or IAM token used for authentication in Yandex Cloud.
  * Check [documentation](https://yandex.cloud/docs/iam/operations/iam-token/create) about how to create IAM token. This can also be specified using environment variable `YC_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#token YandexProvider#token}
  */
  readonly token?: string;
  /**
  * Yandex Cloud Message Queue service access key, which is used when a YMQ queue resource doesn't have an access key explicitly specified.
  *   This can also be specified using environment variable `YC_MESSAGE_QUEUE_ACCESS_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#ymq_access_key YandexProvider#ymq_access_key}
  */
  readonly ymqAccessKey?: string;
  /**
  * Yandex Cloud Message Queue service endpoint. Default value is **message-queue.api.cloud.yandex.net**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#ymq_endpoint YandexProvider#ymq_endpoint}
  */
  readonly ymqEndpoint?: string;
  /**
  * Yandex Cloud Message Queue service secret key, which is used when a YMQ queue resource doesn't have a secret key explicitly specified.
  * This can also be specified using environment variable `YC_MESSAGE_QUEUE_SECRET_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#ymq_secret_key YandexProvider#ymq_secret_key}
  */
  readonly ymqSecretKey?: string;
  /**
  * The Yandex Query API endpoint, default value is **grpc.yandex-query.cloud.yandex.net:2135**.
  * This can also be defined by environment variable `YC_YQ_ENDPOINT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#yq_endpoint YandexProvider#yq_endpoint}
  */
  readonly yqEndpoint?: string;
  /**
  * The default [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) to operate under, if not specified by a given resource.
  * This can also be specified using environment variable `YC_ZONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#zone YandexProvider#zone}
  */
  readonly zone?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#alias YandexProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs yandex}
*/
export class YandexProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YandexProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YandexProvider to import
  * @param importFromId The id of the existing YandexProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YandexProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs yandex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YandexProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: YandexProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      terraformProviderSource: 'yandex-cloud/yandex'
    });
    this._cloudId = config.cloudId;
    this._endpoint = config.endpoint;
    this._folderId = config.folderId;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._organizationId = config.organizationId;
    this._plaintext = config.plaintext;
    this._profile = config.profile;
    this._regionId = config.regionId;
    this._serviceAccountKeyFile = config.serviceAccountKeyFile;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._storageAccessKey = config.storageAccessKey;
    this._storageEndpoint = config.storageEndpoint;
    this._storageSecretKey = config.storageSecretKey;
    this._token = config.token;
    this._ymqAccessKey = config.ymqAccessKey;
    this._ymqEndpoint = config.ymqEndpoint;
    this._ymqSecretKey = config.ymqSecretKey;
    this._yqEndpoint = config.yqEndpoint;
    this._zone = config.zone;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_id - computed: false, optional: true, required: false
  private _cloudId?: string; 
  public get cloudId() {
    return this._cloudId;
  }
  public set cloudId(value: string | undefined) {
    this._cloudId = value;
  }
  public resetCloudId() {
    this._cloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this._folderId;
  }
  public set folderId(value: string | undefined) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this._organizationId;
  }
  public set organizationId(value: string | undefined) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // plaintext - computed: false, optional: true, required: false
  private _plaintext?: boolean | cdktf.IResolvable; 
  public get plaintext() {
    return this._plaintext;
  }
  public set plaintext(value: boolean | cdktf.IResolvable | undefined) {
    this._plaintext = value;
  }
  public resetPlaintext() {
    this._plaintext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextInput() {
    return this._plaintext;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this._regionId;
  }
  public set regionId(value: string | undefined) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // service_account_key_file - computed: false, optional: true, required: false
  private _serviceAccountKeyFile?: string; 
  public get serviceAccountKeyFile() {
    return this._serviceAccountKeyFile;
  }
  public set serviceAccountKeyFile(value: string | undefined) {
    this._serviceAccountKeyFile = value;
  }
  public resetServiceAccountKeyFile() {
    this._serviceAccountKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyFileInput() {
    return this._serviceAccountKeyFile;
  }

  // shared_credentials_file - computed: false, optional: true, required: false
  private _sharedCredentialsFile?: string; 
  public get sharedCredentialsFile() {
    return this._sharedCredentialsFile;
  }
  public set sharedCredentialsFile(value: string | undefined) {
    this._sharedCredentialsFile = value;
  }
  public resetSharedCredentialsFile() {
    this._sharedCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFileInput() {
    return this._sharedCredentialsFile;
  }

  // storage_access_key - computed: false, optional: true, required: false
  private _storageAccessKey?: string; 
  public get storageAccessKey() {
    return this._storageAccessKey;
  }
  public set storageAccessKey(value: string | undefined) {
    this._storageAccessKey = value;
  }
  public resetStorageAccessKey() {
    this._storageAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccessKeyInput() {
    return this._storageAccessKey;
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string; 
  public get storageEndpoint() {
    return this._storageEndpoint;
  }
  public set storageEndpoint(value: string | undefined) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint;
  }

  // storage_secret_key - computed: false, optional: true, required: false
  private _storageSecretKey?: string; 
  public get storageSecretKey() {
    return this._storageSecretKey;
  }
  public set storageSecretKey(value: string | undefined) {
    this._storageSecretKey = value;
  }
  public resetStorageSecretKey() {
    this._storageSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSecretKeyInput() {
    return this._storageSecretKey;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // ymq_access_key - computed: false, optional: true, required: false
  private _ymqAccessKey?: string; 
  public get ymqAccessKey() {
    return this._ymqAccessKey;
  }
  public set ymqAccessKey(value: string | undefined) {
    this._ymqAccessKey = value;
  }
  public resetYmqAccessKey() {
    this._ymqAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqAccessKeyInput() {
    return this._ymqAccessKey;
  }

  // ymq_endpoint - computed: false, optional: true, required: false
  private _ymqEndpoint?: string; 
  public get ymqEndpoint() {
    return this._ymqEndpoint;
  }
  public set ymqEndpoint(value: string | undefined) {
    this._ymqEndpoint = value;
  }
  public resetYmqEndpoint() {
    this._ymqEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqEndpointInput() {
    return this._ymqEndpoint;
  }

  // ymq_secret_key - computed: false, optional: true, required: false
  private _ymqSecretKey?: string; 
  public get ymqSecretKey() {
    return this._ymqSecretKey;
  }
  public set ymqSecretKey(value: string | undefined) {
    this._ymqSecretKey = value;
  }
  public resetYmqSecretKey() {
    this._ymqSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqSecretKeyInput() {
    return this._ymqSecretKey;
  }

  // yq_endpoint - computed: false, optional: true, required: false
  private _yqEndpoint?: string; 
  public get yqEndpoint() {
    return this._yqEndpoint;
  }
  public set yqEndpoint(value: string | undefined) {
    this._yqEndpoint = value;
  }
  public resetYqEndpoint() {
    this._yqEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yqEndpointInput() {
    return this._yqEndpoint;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      folder_id: cdktf.stringToTerraform(this._folderId),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      plaintext: cdktf.booleanToTerraform(this._plaintext),
      profile: cdktf.stringToTerraform(this._profile),
      region_id: cdktf.stringToTerraform(this._regionId),
      service_account_key_file: cdktf.stringToTerraform(this._serviceAccountKeyFile),
      shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
      storage_access_key: cdktf.stringToTerraform(this._storageAccessKey),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      storage_secret_key: cdktf.stringToTerraform(this._storageSecretKey),
      token: cdktf.stringToTerraform(this._token),
      ymq_access_key: cdktf.stringToTerraform(this._ymqAccessKey),
      ymq_endpoint: cdktf.stringToTerraform(this._ymqEndpoint),
      ymq_secret_key: cdktf.stringToTerraform(this._ymqSecretKey),
      yq_endpoint: cdktf.stringToTerraform(this._yqEndpoint),
      zone: cdktf.stringToTerraform(this._zone),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_id: {
        value: cdktf.stringToHclTerraform(this._cloudId),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plaintext: {
        value: cdktf.booleanToHclTerraform(this._plaintext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key_file: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_credentials_file: {
        value: cdktf.stringToHclTerraform(this._sharedCredentialsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_access_key: {
        value: cdktf.stringToHclTerraform(this._storageAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_secret_key: {
        value: cdktf.stringToHclTerraform(this._storageSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymq_access_key: {
        value: cdktf.stringToHclTerraform(this._ymqAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymq_endpoint: {
        value: cdktf.stringToHclTerraform(this._ymqEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymq_secret_key: {
        value: cdktf.stringToHclTerraform(this._ymqSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yq_endpoint: {
        value: cdktf.stringToHclTerraform(this._yqEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
