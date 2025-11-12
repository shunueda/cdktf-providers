// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsCustomKeystoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Desired state of custom keystore - CONNECT_KEYSTORE, DISCONNECT_KEYSTORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#connect_disconnect_keystore AwsCustomKeystore#connect_disconnect_keystore}
  */
  readonly connectDisconnectKeystore?: string;
  /**
  * Name or id for the KMS in which custom keystore belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#kms AwsCustomKeystore#kms}
  */
  readonly kms: string;
  /**
  * Parameter to indicate if custom keystore is linked with AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#linked_state AwsCustomKeystore#linked_state}
  */
  readonly linkedState?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Unique name for the custom keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#name AwsCustomKeystore#name}
  */
  readonly name: string;
  /**
  * Region in which to create AWS custom keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#region AwsCustomKeystore#region}
  */
  readonly region: string;
  /**
  * aws_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#aws_param AwsCustomKeystore#aws_param}
  */
  readonly awsParam?: AwsCustomKeystoreAwsParam[] | cdktf.IResolvable;
  /**
  * local_hosted_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#local_hosted_params AwsCustomKeystore#local_hosted_params}
  */
  readonly localHostedParams?: AwsCustomKeystoreLocalHostedParams[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#timeouts AwsCustomKeystore#timeouts}
  */
  readonly timeouts?: AwsCustomKeystoreTimeouts;
}
export interface AwsCustomKeystoreAwsParam {
  /**
  * (Updateable) CloudHSM cluster ID for AWS custom keystore of type AWS_CLOUDHSM. Required during create operation for AWS custom keystore of type AWS_CLOUDHSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#cloud_hsm_cluster_id AwsCustomKeystore#cloud_hsm_cluster_id}
  */
  readonly cloudHsmClusterId?: string;
  /**
  * AWS XKS custom keystore type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#custom_key_store_type AwsCustomKeystore#custom_key_store_type}
  */
  readonly customKeyStoreType: string;
  /**
  * (Updateable) CloudHSM kmsuser Crypto User (CU) password or AWS custom keystore of type AWS_CLOUDHSM. Required during create operation for AWS custom keystore of type AWS_CLOUDHSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#key_store_password AwsCustomKeystore#key_store_password}
  */
  readonly keyStorePassword?: string;
  /**
  * Trust anchor certificate for AWS custom keystore of type AWS_CLOUDHSM. Required during create operation for AWS custom keystore of type AWS_CLOUDHSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#trust_anchor_certificate AwsCustomKeystore#trust_anchor_certificate}
  */
  readonly trustAnchorCertificate?: string;
  /**
  * (Updateable) AWS XKS connectivity type. Applicable for AWS custom keystore of type EXTERNAL_KEYSTORE. Default is EXTERNAL_KEY_STORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#xks_proxy_connectivity AwsCustomKeystore#xks_proxy_connectivity}
  */
  readonly xksProxyConnectivity?: string;
  /**
  * (Updateable) AWS URI endpoint for custom keystore. Applicable for AWS custom keystore of type EXTERNAL_KEYSTORE with xks_proxy_connectivity of PUBLIC_ENDPOINT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#xks_proxy_uri_endpoint AwsCustomKeystore#xks_proxy_uri_endpoint}
  */
  readonly xksProxyUriEndpoint?: string;
  /**
  * (Updateable) VPC endpoint service name. Applicable for AWS custom keystore of type EXTERNAL_KEYSTORE with xks_proxy_connectivity of VPC_ENDPOINT_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#xks_proxy_vpc_endpoint_service_name AwsCustomKeystore#xks_proxy_vpc_endpoint_service_name}
  */
  readonly xksProxyVpcEndpointServiceName?: string;
}

export function awsCustomKeystoreAwsParamToTerraform(struct?: AwsCustomKeystoreAwsParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_hsm_cluster_id: cdktf.stringToTerraform(struct!.cloudHsmClusterId),
    custom_key_store_type: cdktf.stringToTerraform(struct!.customKeyStoreType),
    key_store_password: cdktf.stringToTerraform(struct!.keyStorePassword),
    trust_anchor_certificate: cdktf.stringToTerraform(struct!.trustAnchorCertificate),
    xks_proxy_connectivity: cdktf.stringToTerraform(struct!.xksProxyConnectivity),
    xks_proxy_uri_endpoint: cdktf.stringToTerraform(struct!.xksProxyUriEndpoint),
    xks_proxy_vpc_endpoint_service_name: cdktf.stringToTerraform(struct!.xksProxyVpcEndpointServiceName),
  }
}


export function awsCustomKeystoreAwsParamToHclTerraform(struct?: AwsCustomKeystoreAwsParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_hsm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudHsmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_key_store_type: {
      value: cdktf.stringToHclTerraform(struct!.customKeyStoreType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store_password: {
      value: cdktf.stringToHclTerraform(struct!.keyStorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_anchor_certificate: {
      value: cdktf.stringToHclTerraform(struct!.trustAnchorCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xks_proxy_connectivity: {
      value: cdktf.stringToHclTerraform(struct!.xksProxyConnectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xks_proxy_uri_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.xksProxyUriEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xks_proxy_vpc_endpoint_service_name: {
      value: cdktf.stringToHclTerraform(struct!.xksProxyVpcEndpointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCustomKeystoreAwsParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsCustomKeystoreAwsParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudHsmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudHsmClusterId = this._cloudHsmClusterId;
    }
    if (this._customKeyStoreType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyStoreType = this._customKeyStoreType;
    }
    if (this._keyStorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStorePassword = this._keyStorePassword;
    }
    if (this._trustAnchorCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAnchorCertificate = this._trustAnchorCertificate;
    }
    if (this._xksProxyConnectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.xksProxyConnectivity = this._xksProxyConnectivity;
    }
    if (this._xksProxyUriEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.xksProxyUriEndpoint = this._xksProxyUriEndpoint;
    }
    if (this._xksProxyVpcEndpointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.xksProxyVpcEndpointServiceName = this._xksProxyVpcEndpointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCustomKeystoreAwsParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudHsmClusterId = undefined;
      this._customKeyStoreType = undefined;
      this._keyStorePassword = undefined;
      this._trustAnchorCertificate = undefined;
      this._xksProxyConnectivity = undefined;
      this._xksProxyUriEndpoint = undefined;
      this._xksProxyVpcEndpointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudHsmClusterId = value.cloudHsmClusterId;
      this._customKeyStoreType = value.customKeyStoreType;
      this._keyStorePassword = value.keyStorePassword;
      this._trustAnchorCertificate = value.trustAnchorCertificate;
      this._xksProxyConnectivity = value.xksProxyConnectivity;
      this._xksProxyUriEndpoint = value.xksProxyUriEndpoint;
      this._xksProxyVpcEndpointServiceName = value.xksProxyVpcEndpointServiceName;
    }
  }

  // cloud_hsm_cluster_id - computed: false, optional: true, required: false
  private _cloudHsmClusterId?: string; 
  public get cloudHsmClusterId() {
    return this.getStringAttribute('cloud_hsm_cluster_id');
  }
  public set cloudHsmClusterId(value: string) {
    this._cloudHsmClusterId = value;
  }
  public resetCloudHsmClusterId() {
    this._cloudHsmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudHsmClusterIdInput() {
    return this._cloudHsmClusterId;
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

  // custom_key_store_type - computed: false, optional: false, required: true
  private _customKeyStoreType?: string; 
  public get customKeyStoreType() {
    return this.getStringAttribute('custom_key_store_type');
  }
  public set customKeyStoreType(value: string) {
    this._customKeyStoreType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreTypeInput() {
    return this._customKeyStoreType;
  }

  // key_store_password - computed: false, optional: true, required: false
  private _keyStorePassword?: string; 
  public get keyStorePassword() {
    return this.getStringAttribute('key_store_password');
  }
  public set keyStorePassword(value: string) {
    this._keyStorePassword = value;
  }
  public resetKeyStorePassword() {
    this._keyStorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStorePasswordInput() {
    return this._keyStorePassword;
  }

  // trust_anchor_certificate - computed: false, optional: true, required: false
  private _trustAnchorCertificate?: string; 
  public get trustAnchorCertificate() {
    return this.getStringAttribute('trust_anchor_certificate');
  }
  public set trustAnchorCertificate(value: string) {
    this._trustAnchorCertificate = value;
  }
  public resetTrustAnchorCertificate() {
    this._trustAnchorCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorCertificateInput() {
    return this._trustAnchorCertificate;
  }

  // xks_proxy_connectivity - computed: false, optional: true, required: false
  private _xksProxyConnectivity?: string; 
  public get xksProxyConnectivity() {
    return this.getStringAttribute('xks_proxy_connectivity');
  }
  public set xksProxyConnectivity(value: string) {
    this._xksProxyConnectivity = value;
  }
  public resetXksProxyConnectivity() {
    this._xksProxyConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyConnectivityInput() {
    return this._xksProxyConnectivity;
  }

  // xks_proxy_uri_endpoint - computed: false, optional: true, required: false
  private _xksProxyUriEndpoint?: string; 
  public get xksProxyUriEndpoint() {
    return this.getStringAttribute('xks_proxy_uri_endpoint');
  }
  public set xksProxyUriEndpoint(value: string) {
    this._xksProxyUriEndpoint = value;
  }
  public resetXksProxyUriEndpoint() {
    this._xksProxyUriEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyUriEndpointInput() {
    return this._xksProxyUriEndpoint;
  }

  // xks_proxy_uri_path - computed: true, optional: false, required: false
  public get xksProxyUriPath() {
    return this.getStringAttribute('xks_proxy_uri_path');
  }

  // xks_proxy_vpc_endpoint_service_name - computed: false, optional: true, required: false
  private _xksProxyVpcEndpointServiceName?: string; 
  public get xksProxyVpcEndpointServiceName() {
    return this.getStringAttribute('xks_proxy_vpc_endpoint_service_name');
  }
  public set xksProxyVpcEndpointServiceName(value: string) {
    this._xksProxyVpcEndpointServiceName = value;
  }
  public resetXksProxyVpcEndpointServiceName() {
    this._xksProxyVpcEndpointServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksProxyVpcEndpointServiceNameInput() {
    return this._xksProxyVpcEndpointServiceName;
  }
}

export class AwsCustomKeystoreAwsParamList extends cdktf.ComplexList {
  public internalValue? : AwsCustomKeystoreAwsParam[] | cdktf.IResolvable

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
  public get(index: number): AwsCustomKeystoreAwsParamOutputReference {
    return new AwsCustomKeystoreAwsParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsCustomKeystoreLocalHostedParams {
  /**
  * Parameter to indicate if custom keystore is blocked for any data plane operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#blocked AwsCustomKeystore#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * (Updateable) Health check key ID for checking health of AWS custom keystore. Required parameter only for AWS custom keystore of type EXTERNAL_KEYSTORE. Need to be ID of key based on chosen key source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#health_check_key_id AwsCustomKeystore#health_check_key_id}
  */
  readonly healthCheckKeyId?: string;
  /**
  * Parameter to indicate max count of credentials to be supported for custom keystore. Required parameter only for AWS custom keystore of type EXTERNAL_KEYSTORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#max_credentials AwsCustomKeystore#max_credentials}
  */
  readonly maxCredentials?: number;
  /**
  * Partition ID for the Luna HSM used as source for creating AWS XKS key. Required parameter only for AWS custom keystore of type EXTERNAL_KEYSTORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#partition_id AwsCustomKeystore#partition_id}
  */
  readonly partitionId?: string;
  /**
  * Source key tier for AWS custom keystore - hsm-luna or local. Required parameter only for AWS custom keystore of type EXTERNAL_KEYSTORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#source_key_tier AwsCustomKeystore#source_key_tier}
  */
  readonly sourceKeyTier?: string;
}

export function awsCustomKeystoreLocalHostedParamsToTerraform(struct?: AwsCustomKeystoreLocalHostedParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.booleanToTerraform(struct!.blocked),
    health_check_key_id: cdktf.stringToTerraform(struct!.healthCheckKeyId),
    max_credentials: cdktf.numberToTerraform(struct!.maxCredentials),
    partition_id: cdktf.stringToTerraform(struct!.partitionId),
    source_key_tier: cdktf.stringToTerraform(struct!.sourceKeyTier),
  }
}


export function awsCustomKeystoreLocalHostedParamsToHclTerraform(struct?: AwsCustomKeystoreLocalHostedParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked: {
      value: cdktf.booleanToHclTerraform(struct!.blocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_check_key_id: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_credentials: {
      value: cdktf.numberToHclTerraform(struct!.maxCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_id: {
      value: cdktf.stringToHclTerraform(struct!.partitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_key_tier: {
      value: cdktf.stringToHclTerraform(struct!.sourceKeyTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCustomKeystoreLocalHostedParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsCustomKeystoreLocalHostedParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocked = this._blocked;
    }
    if (this._healthCheckKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckKeyId = this._healthCheckKeyId;
    }
    if (this._maxCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCredentials = this._maxCredentials;
    }
    if (this._partitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionId = this._partitionId;
    }
    if (this._sourceKeyTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceKeyTier = this._sourceKeyTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCustomKeystoreLocalHostedParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocked = undefined;
      this._healthCheckKeyId = undefined;
      this._maxCredentials = undefined;
      this._partitionId = undefined;
      this._sourceKeyTier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocked = value.blocked;
      this._healthCheckKeyId = value.healthCheckKeyId;
      this._maxCredentials = value.maxCredentials;
      this._partitionId = value.partitionId;
      this._sourceKeyTier = value.sourceKeyTier;
    }
  }

  // blocked - computed: false, optional: true, required: false
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // health_check_ciphertext - computed: true, optional: false, required: false
  public get healthCheckCiphertext() {
    return this.getStringAttribute('health_check_ciphertext');
  }

  // health_check_key_id - computed: false, optional: true, required: false
  private _healthCheckKeyId?: string; 
  public get healthCheckKeyId() {
    return this.getStringAttribute('health_check_key_id');
  }
  public set healthCheckKeyId(value: string) {
    this._healthCheckKeyId = value;
  }
  public resetHealthCheckKeyId() {
    this._healthCheckKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckKeyIdInput() {
    return this._healthCheckKeyId;
  }

  // linked_state - computed: true, optional: false, required: false
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
  }

  // max_credentials - computed: false, optional: true, required: false
  private _maxCredentials?: number; 
  public get maxCredentials() {
    return this.getNumberAttribute('max_credentials');
  }
  public set maxCredentials(value: number) {
    this._maxCredentials = value;
  }
  public resetMaxCredentials() {
    this._maxCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCredentialsInput() {
    return this._maxCredentials;
  }

  // partition_id - computed: false, optional: true, required: false
  private _partitionId?: string; 
  public get partitionId() {
    return this.getStringAttribute('partition_id');
  }
  public set partitionId(value: string) {
    this._partitionId = value;
  }
  public resetPartitionId() {
    this._partitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIdInput() {
    return this._partitionId;
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

  // source_key_tier - computed: false, optional: true, required: false
  private _sourceKeyTier?: string; 
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
  public set sourceKeyTier(value: string) {
    this._sourceKeyTier = value;
  }
  public resetSourceKeyTier() {
    this._sourceKeyTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyTierInput() {
    return this._sourceKeyTier;
  }
}

export class AwsCustomKeystoreLocalHostedParamsList extends cdktf.ComplexList {
  public internalValue? : AwsCustomKeystoreLocalHostedParams[] | cdktf.IResolvable

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
  public get(index: number): AwsCustomKeystoreLocalHostedParamsOutputReference {
    return new AwsCustomKeystoreLocalHostedParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsCustomKeystoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#create AwsCustomKeystore#create}
  */
  readonly create?: string;
}

export function awsCustomKeystoreTimeoutsToTerraform(struct?: AwsCustomKeystoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function awsCustomKeystoreTimeoutsToHclTerraform(struct?: AwsCustomKeystoreTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsCustomKeystoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsCustomKeystoreTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsCustomKeystoreTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore ciphertrust_aws_custom_keystore}
*/
export class AwsCustomKeystore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_custom_keystore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsCustomKeystore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsCustomKeystore to import
  * @param importFromId The id of the existing AwsCustomKeystore that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsCustomKeystore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_custom_keystore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/aws_custom_keystore ciphertrust_aws_custom_keystore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsCustomKeystoreConfig
  */
  public constructor(scope: Construct, id: string, config: AwsCustomKeystoreConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_custom_keystore',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3',
        providerVersionConstraint: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectDisconnectKeystore = config.connectDisconnectKeystore;
    this._kms = config.kms;
    this._linkedState = config.linkedState;
    this._name = config.name;
    this._region = config.region;
    this._awsParam.internalValue = config.awsParam;
    this._localHostedParams.internalValue = config.localHostedParams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // connect_disconnect_keystore - computed: true, optional: true, required: false
  private _connectDisconnectKeystore?: string; 
  public get connectDisconnectKeystore() {
    return this.getStringAttribute('connect_disconnect_keystore');
  }
  public set connectDisconnectKeystore(value: string) {
    this._connectDisconnectKeystore = value;
  }
  public resetConnectDisconnectKeystore() {
    this._connectDisconnectKeystore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectDisconnectKeystoreInput() {
    return this._connectDisconnectKeystore;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // credential_version - computed: true, optional: false, required: false
  public get credentialVersion() {
    return this.getNumberAttribute('credential_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms - computed: false, optional: false, required: true
  private _kms?: string; 
  public get kms() {
    return this.getStringAttribute('kms');
  }
  public set kms(value: string) {
    this._kms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsInput() {
    return this._kms;
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // linked_state - computed: false, optional: true, required: false
  private _linkedState?: boolean | cdktf.IResolvable; 
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
  }
  public set linkedState(value: boolean | cdktf.IResolvable) {
    this._linkedState = value;
  }
  public resetLinkedState() {
    this._linkedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedStateInput() {
    return this._linkedState;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // aws_param - computed: false, optional: true, required: false
  private _awsParam = new AwsCustomKeystoreAwsParamList(this, "aws_param", false);
  public get awsParam() {
    return this._awsParam;
  }
  public putAwsParam(value: AwsCustomKeystoreAwsParam[] | cdktf.IResolvable) {
    this._awsParam.internalValue = value;
  }
  public resetAwsParam() {
    this._awsParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsParamInput() {
    return this._awsParam.internalValue;
  }

  // local_hosted_params - computed: false, optional: true, required: false
  private _localHostedParams = new AwsCustomKeystoreLocalHostedParamsList(this, "local_hosted_params", false);
  public get localHostedParams() {
    return this._localHostedParams;
  }
  public putLocalHostedParams(value: AwsCustomKeystoreLocalHostedParams[] | cdktf.IResolvable) {
    this._localHostedParams.internalValue = value;
  }
  public resetLocalHostedParams() {
    this._localHostedParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localHostedParamsInput() {
    return this._localHostedParams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsCustomKeystoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsCustomKeystoreTimeouts) {
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
      connect_disconnect_keystore: cdktf.stringToTerraform(this._connectDisconnectKeystore),
      kms: cdktf.stringToTerraform(this._kms),
      linked_state: cdktf.booleanToTerraform(this._linkedState),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      aws_param: cdktf.listMapper(awsCustomKeystoreAwsParamToTerraform, true)(this._awsParam.internalValue),
      local_hosted_params: cdktf.listMapper(awsCustomKeystoreLocalHostedParamsToTerraform, true)(this._localHostedParams.internalValue),
      timeouts: awsCustomKeystoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_disconnect_keystore: {
        value: cdktf.stringToHclTerraform(this._connectDisconnectKeystore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms: {
        value: cdktf.stringToHclTerraform(this._kms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_state: {
        value: cdktf.booleanToHclTerraform(this._linkedState),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_param: {
        value: cdktf.listMapperHcl(awsCustomKeystoreAwsParamToHclTerraform, true)(this._awsParam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCustomKeystoreAwsParamList",
      },
      local_hosted_params: {
        value: cdktf.listMapperHcl(awsCustomKeystoreLocalHostedParamsToHclTerraform, true)(this._localHostedParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsCustomKeystoreLocalHostedParamsList",
      },
      timeouts: {
        value: awsCustomKeystoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsCustomKeystoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
