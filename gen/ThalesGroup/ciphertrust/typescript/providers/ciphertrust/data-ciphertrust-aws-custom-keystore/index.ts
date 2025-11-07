// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_custom_keystore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustAwsCustomKeystoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom keystore ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_custom_keystore#id DataCiphertrustAwsCustomKeystore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCiphertrustAwsCustomKeystoreAwsParam {
}

export function dataCiphertrustAwsCustomKeystoreAwsParamToTerraform(struct?: DataCiphertrustAwsCustomKeystoreAwsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiphertrustAwsCustomKeystoreAwsParamToHclTerraform(struct?: DataCiphertrustAwsCustomKeystoreAwsParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiphertrustAwsCustomKeystoreAwsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiphertrustAwsCustomKeystoreAwsParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustAwsCustomKeystoreAwsParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_hsm_cluster_id - computed: true, optional: false, required: false
  public get cloudHsmClusterId() {
    return this.getStringAttribute('cloud_hsm_cluster_id');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // custom_key_store_id - computed: true, optional: false, required: false
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }

  // custom_key_store_name - computed: true, optional: false, required: false
  public get customKeyStoreName() {
    return this.getStringAttribute('custom_key_store_name');
  }

  // custom_key_store_type - computed: true, optional: false, required: false
  public get customKeyStoreType() {
    return this.getStringAttribute('custom_key_store_type');
  }

  // key_store_password - computed: true, optional: false, required: false
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }

  // trust_anchor_certificate - computed: true, optional: false, required: false
  public get trustAnchorCertificate() {
    return this.getStringAttribute('trust_anchor_certificate');
  }

  // xks_proxy_connectivity - computed: true, optional: false, required: false
  public get xksProxyConnectivity() {
    return this.getStringAttribute('xks_proxy_connectivity');
  }

  // xks_proxy_uri_endpoint - computed: true, optional: false, required: false
  public get xksProxyUriEndpoint() {
    return this.getStringAttribute('xks_proxy_uri_endpoint');
  }

  // xks_proxy_uri_path - computed: true, optional: false, required: false
  public get xksProxyUriPath() {
    return this.getStringAttribute('xks_proxy_uri_path');
  }

  // xks_proxy_vpc_endpoint_service_name - computed: true, optional: false, required: false
  public get xksProxyVpcEndpointServiceName() {
    return this.getStringAttribute('xks_proxy_vpc_endpoint_service_name');
  }
}

export class DataCiphertrustAwsCustomKeystoreAwsParamList extends cdktf.ComplexList {

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
  public get(index: number): DataCiphertrustAwsCustomKeystoreAwsParamOutputReference {
    return new DataCiphertrustAwsCustomKeystoreAwsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCiphertrustAwsCustomKeystoreLocalHostedParams {
}

export function dataCiphertrustAwsCustomKeystoreLocalHostedParamsToTerraform(struct?: DataCiphertrustAwsCustomKeystoreLocalHostedParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCiphertrustAwsCustomKeystoreLocalHostedParamsToHclTerraform(struct?: DataCiphertrustAwsCustomKeystoreLocalHostedParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCiphertrustAwsCustomKeystoreLocalHostedParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiphertrustAwsCustomKeystoreLocalHostedParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustAwsCustomKeystoreLocalHostedParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }

  // health_check_ciphertext - computed: true, optional: false, required: false
  public get healthCheckCiphertext() {
    return this.getStringAttribute('health_check_ciphertext');
  }

  // health_check_key_id - computed: true, optional: false, required: false
  public get healthCheckKeyId() {
    return this.getStringAttribute('health_check_key_id');
  }

  // linked_state - computed: true, optional: false, required: false
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
  }

  // max_credentials - computed: true, optional: false, required: false
  public get maxCredentials() {
    return this.getNumberAttribute('max_credentials');
  }

  // partition_id - computed: true, optional: false, required: false
  public get partitionId() {
    return this.getStringAttribute('partition_id');
  }

  // partition_label - computed: true, optional: false, required: false
  public get partitionLabel() {
    return this.getStringAttribute('partition_label');
  }

  // source_container_id - computed: true, optional: false, required: false
  public get sourceContainerId() {
    return this.getStringAttribute('source_container_id');
  }

  // source_container_type - computed: true, optional: false, required: false
  public get sourceContainerType() {
    return this.getStringAttribute('source_container_type');
  }

  // source_key_tier - computed: true, optional: false, required: false
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
}

export class DataCiphertrustAwsCustomKeystoreLocalHostedParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataCiphertrustAwsCustomKeystoreLocalHostedParamsOutputReference {
    return new DataCiphertrustAwsCustomKeystoreLocalHostedParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_custom_keystore ciphertrust_aws_custom_keystore}
*/
export class DataCiphertrustAwsCustomKeystore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_custom_keystore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustAwsCustomKeystore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustAwsCustomKeystore to import
  * @param importFromId The id of the existing DataCiphertrustAwsCustomKeystore that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_custom_keystore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustAwsCustomKeystore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_custom_keystore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_custom_keystore ciphertrust_aws_custom_keystore} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustAwsCustomKeystoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustAwsCustomKeystoreConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_custom_keystore',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // aws_param - computed: true, optional: false, required: false
  private _awsParam = new DataCiphertrustAwsCustomKeystoreAwsParamList(this, "aws_param", false);
  public get awsParam() {
    return this._awsParam;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // connect_disconnect_keystore - computed: true, optional: false, required: false
  public get connectDisconnectKeystore() {
    return this.getStringAttribute('connect_disconnect_keystore');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_version - computed: true, optional: false, required: false
  public get credentialVersion() {
    return this.getNumberAttribute('credential_version');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kms - computed: true, optional: false, required: false
  public get kms() {
    return this.getStringAttribute('kms');
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // linked_state - computed: true, optional: false, required: false
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
  }

  // local_hosted_params - computed: true, optional: false, required: false
  private _localHostedParams = new DataCiphertrustAwsCustomKeystoreLocalHostedParamsList(this, "local_hosted_params", false);
  public get localHostedParams() {
    return this._localHostedParams;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
