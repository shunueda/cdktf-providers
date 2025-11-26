// https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#id SecretStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * active_directory_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#active_directory_store SecretStore#active_directory_store}
  */
  readonly activeDirectoryStore?: SecretStoreActiveDirectoryStore;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#aws SecretStore#aws}
  */
  readonly aws?: SecretStoreAws;
  /**
  * aws_cert_x509 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#aws_cert_x509 SecretStore#aws_cert_x509}
  */
  readonly awsCertX509?: SecretStoreAwsCertX509;
  /**
  * azure_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#azure_store SecretStore#azure_store}
  */
  readonly azureStore?: SecretStoreAzureStore;
  /**
  * cyberark_conjur block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#cyberark_conjur SecretStore#cyberark_conjur}
  */
  readonly cyberarkConjur?: SecretStoreCyberarkConjur;
  /**
  * cyberark_pam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#cyberark_pam SecretStore#cyberark_pam}
  */
  readonly cyberarkPam?: SecretStoreCyberarkPam;
  /**
  * cyberark_pam_experimental block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#cyberark_pam_experimental SecretStore#cyberark_pam_experimental}
  */
  readonly cyberarkPamExperimental?: SecretStoreCyberarkPamExperimental;
  /**
  * delinea_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#delinea_store SecretStore#delinea_store}
  */
  readonly delineaStore?: SecretStoreDelineaStore;
  /**
  * gcp_cert_x_509_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#gcp_cert_x_509_store SecretStore#gcp_cert_x_509_store}
  */
  readonly gcpCertX509Store?: SecretStoreGcpCertX509Store;
  /**
  * gcp_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#gcp_store SecretStore#gcp_store}
  */
  readonly gcpStore?: SecretStoreGcpStore;
  /**
  * keyfactor_ssh_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#keyfactor_ssh_store SecretStore#keyfactor_ssh_store}
  */
  readonly keyfactorSshStore?: SecretStoreKeyfactorSshStore;
  /**
  * keyfactor_x_509_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#keyfactor_x_509_store SecretStore#keyfactor_x_509_store}
  */
  readonly keyfactorX509Store?: SecretStoreKeyfactorX509Store;
  /**
  * strong_vault block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#strong_vault SecretStore#strong_vault}
  */
  readonly strongVault?: SecretStoreStrongVault;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#timeouts SecretStore#timeouts}
  */
  readonly timeouts?: SecretStoreTimeouts;
  /**
  * vault_approle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_approle SecretStore#vault_approle}
  */
  readonly vaultApprole?: SecretStoreVaultApprole;
  /**
  * vault_approle_cert_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_approle_cert_ssh SecretStore#vault_approle_cert_ssh}
  */
  readonly vaultApproleCertSsh?: SecretStoreVaultApproleCertSsh;
  /**
  * vault_approle_cert_x509 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_approle_cert_x509 SecretStore#vault_approle_cert_x509}
  */
  readonly vaultApproleCertX509?: SecretStoreVaultApproleCertX509;
  /**
  * vault_aws_ec2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_aws_ec2 SecretStore#vault_aws_ec2}
  */
  readonly vaultAwsEc2?: SecretStoreVaultAwsEc2;
  /**
  * vault_aws_ec2_cert_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_aws_ec2_cert_ssh SecretStore#vault_aws_ec2_cert_ssh}
  */
  readonly vaultAwsEc2CertSsh?: SecretStoreVaultAwsEc2CertSsh;
  /**
  * vault_aws_ec2_cert_x509 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_aws_ec2_cert_x509 SecretStore#vault_aws_ec2_cert_x509}
  */
  readonly vaultAwsEc2CertX509?: SecretStoreVaultAwsEc2CertX509;
  /**
  * vault_aws_iam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_aws_iam SecretStore#vault_aws_iam}
  */
  readonly vaultAwsIam?: SecretStoreVaultAwsIam;
  /**
  * vault_aws_iam_cert_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_aws_iam_cert_ssh SecretStore#vault_aws_iam_cert_ssh}
  */
  readonly vaultAwsIamCertSsh?: SecretStoreVaultAwsIamCertSsh;
  /**
  * vault_aws_iam_cert_x509 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_aws_iam_cert_x509 SecretStore#vault_aws_iam_cert_x509}
  */
  readonly vaultAwsIamCertX509?: SecretStoreVaultAwsIamCertX509;
  /**
  * vault_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_tls SecretStore#vault_tls}
  */
  readonly vaultTls?: SecretStoreVaultTls;
  /**
  * vault_tls_cert_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_tls_cert_ssh SecretStore#vault_tls_cert_ssh}
  */
  readonly vaultTlsCertSsh?: SecretStoreVaultTlsCertSsh;
  /**
  * vault_tls_cert_x509 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_tls_cert_x509 SecretStore#vault_tls_cert_x509}
  */
  readonly vaultTlsCertX509?: SecretStoreVaultTlsCertX509;
  /**
  * vault_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_token SecretStore#vault_token}
  */
  readonly vaultToken?: SecretStoreVaultToken;
  /**
  * vault_token_cert_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_token_cert_ssh SecretStore#vault_token_cert_ssh}
  */
  readonly vaultTokenCertSsh?: SecretStoreVaultTokenCertSsh;
  /**
  * vault_token_cert_x509 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_token_cert_x509 SecretStore#vault_token_cert_x509}
  */
  readonly vaultTokenCertX509?: SecretStoreVaultTokenCertX509;
}
export interface SecretStoreActiveDirectoryStore {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * Hostname of server that is hosting NDES (Network Device Enrollment Services). Often this is the same host as Active Directory Certificate Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreActiveDirectoryStoreToTerraform(struct?: SecretStoreActiveDirectoryStoreOutputReference | SecretStoreActiveDirectoryStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreActiveDirectoryStoreToHclTerraform(struct?: SecretStoreActiveDirectoryStoreOutputReference | SecretStoreActiveDirectoryStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreActiveDirectoryStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreActiveDirectoryStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreActiveDirectoryStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
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

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreAws {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The AWS region to target e.g. us-east-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#region SecretStore#region}
  */
  readonly region: string;
  /**
  * The role to assume after logging in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#role_arn SecretStore#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The external ID to associate with assume role requests. Does nothing if a role ARN is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#role_external_id SecretStore#role_external_id}
  */
  readonly roleExternalId?: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreAwsToTerraform(struct?: SecretStoreAwsOutputReference | SecretStoreAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_external_id: cdktf.stringToTerraform(struct!.roleExternalId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreAwsToHclTerraform(struct?: SecretStoreAwsOutputReference | SecretStoreAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.roleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleExternalId = this._roleExternalId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._region = undefined;
      this._roleArn = undefined;
      this._roleExternalId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._region = value.region;
      this._roleArn = value.roleArn;
      this._roleExternalId = value.roleExternalId;
      this._tags = value.tags;
    }
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_external_id - computed: false, optional: true, required: false
  private _roleExternalId?: string; 
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }
  public set roleExternalId(value: string) {
    this._roleExternalId = value;
  }
  public resetRoleExternalId() {
    this._roleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleExternalIdInput() {
    return this._roleExternalId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreAwsCertX509 {
  /**
  * The ARN of the CA in AWS Private CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_arn SecretStore#ca_arn}
  */
  readonly caArn: string;
  /**
  * The ARN of the AWS certificate template for requested certificates. Must allow SAN, key usage, and ext key usage passthrough from CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#certificate_template_arn SecretStore#certificate_template_arn}
  */
  readonly certificateTemplateArn: string;
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The AWS region to target e.g. us-east-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#region SecretStore#region}
  */
  readonly region: string;
  /**
  * The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key. e.g. SHA256WITHRSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_algo SecretStore#signing_algo}
  */
  readonly signingAlgo: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreAwsCertX509ToTerraform(struct?: SecretStoreAwsCertX509OutputReference | SecretStoreAwsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_arn: cdktf.stringToTerraform(struct!.caArn),
    certificate_template_arn: cdktf.stringToTerraform(struct!.certificateTemplateArn),
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    signing_algo: cdktf.stringToTerraform(struct!.signingAlgo),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreAwsCertX509ToHclTerraform(struct?: SecretStoreAwsCertX509OutputReference | SecretStoreAwsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_arn: {
      value: cdktf.stringToHclTerraform(struct!.caArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_template_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateTemplateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_algo: {
      value: cdktf.stringToHclTerraform(struct!.signingAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreAwsCertX509OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreAwsCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.caArn = this._caArn;
    }
    if (this._certificateTemplateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateTemplateArn = this._certificateTemplateArn;
    }
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._signingAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgo = this._signingAlgo;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreAwsCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caArn = undefined;
      this._certificateTemplateArn = undefined;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._region = undefined;
      this._signingAlgo = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caArn = value.caArn;
      this._certificateTemplateArn = value.certificateTemplateArn;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._region = value.region;
      this._signingAlgo = value.signingAlgo;
      this._tags = value.tags;
    }
  }

  // ca_arn - computed: false, optional: false, required: true
  private _caArn?: string; 
  public get caArn() {
    return this.getStringAttribute('ca_arn');
  }
  public set caArn(value: string) {
    this._caArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caArnInput() {
    return this._caArn;
  }

  // certificate_template_arn - computed: false, optional: false, required: true
  private _certificateTemplateArn?: string; 
  public get certificateTemplateArn() {
    return this.getStringAttribute('certificate_template_arn');
  }
  public set certificateTemplateArn(value: string) {
    this._certificateTemplateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTemplateArnInput() {
    return this._certificateTemplateArn;
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // signing_algo - computed: false, optional: false, required: true
  private _signingAlgo?: string; 
  public get signingAlgo() {
    return this.getStringAttribute('signing_algo');
  }
  public set signingAlgo(value: string) {
    this._signingAlgo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgoInput() {
    return this._signingAlgo;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreAzureStore {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The URI of the key vault to target e.g. https://myvault.vault.azure.net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#vault_uri SecretStore#vault_uri}
  */
  readonly vaultUri: string;
}

export function secretStoreAzureStoreToTerraform(struct?: SecretStoreAzureStoreOutputReference | SecretStoreAzureStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    vault_uri: cdktf.stringToTerraform(struct!.vaultUri),
  }
}


export function secretStoreAzureStoreToHclTerraform(struct?: SecretStoreAzureStoreOutputReference | SecretStoreAzureStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vault_uri: {
      value: cdktf.stringToHclTerraform(struct!.vaultUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreAzureStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreAzureStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vaultUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultUri = this._vaultUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreAzureStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._tags = undefined;
      this._vaultUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._tags = value.tags;
      this._vaultUri = value.vaultUri;
    }
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vault_uri - computed: false, optional: false, required: true
  private _vaultUri?: string; 
  public get vaultUri() {
    return this.getStringAttribute('vault_uri');
  }
  public set vaultUri(value: string) {
    this._vaultUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUriInput() {
    return this._vaultUri;
  }
}
export interface SecretStoreCyberarkConjur {
  /**
  * The URL of the Cyberark instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#app_url SecretStore#app_url}
  */
  readonly appUrl: string;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreCyberarkConjurToTerraform(struct?: SecretStoreCyberarkConjurOutputReference | SecretStoreCyberarkConjur): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_url: cdktf.stringToTerraform(struct!.appUrl),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreCyberarkConjurToHclTerraform(struct?: SecretStoreCyberarkConjurOutputReference | SecretStoreCyberarkConjur): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_url: {
      value: cdktf.stringToHclTerraform(struct!.appUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreCyberarkConjurOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreCyberarkConjur | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUrl = this._appUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreCyberarkConjur | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appUrl = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appUrl = value.appUrl;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // app_url - computed: false, optional: false, required: true
  private _appUrl?: string; 
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }
  public set appUrl(value: string) {
    this._appUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlInput() {
    return this._appUrl;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreCyberarkPam {
  /**
  * The URL of the Cyberark instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#app_url SecretStore#app_url}
  */
  readonly appUrl: string;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreCyberarkPamToTerraform(struct?: SecretStoreCyberarkPamOutputReference | SecretStoreCyberarkPam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_url: cdktf.stringToTerraform(struct!.appUrl),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreCyberarkPamToHclTerraform(struct?: SecretStoreCyberarkPamOutputReference | SecretStoreCyberarkPam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_url: {
      value: cdktf.stringToHclTerraform(struct!.appUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreCyberarkPamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreCyberarkPam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUrl = this._appUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreCyberarkPam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appUrl = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appUrl = value.appUrl;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // app_url - computed: false, optional: false, required: true
  private _appUrl?: string; 
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }
  public set appUrl(value: string) {
    this._appUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlInput() {
    return this._appUrl;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreCyberarkPamExperimental {
  /**
  * The URL of the Cyberark instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#app_url SecretStore#app_url}
  */
  readonly appUrl: string;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreCyberarkPamExperimentalToTerraform(struct?: SecretStoreCyberarkPamExperimentalOutputReference | SecretStoreCyberarkPamExperimental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_url: cdktf.stringToTerraform(struct!.appUrl),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreCyberarkPamExperimentalToHclTerraform(struct?: SecretStoreCyberarkPamExperimentalOutputReference | SecretStoreCyberarkPamExperimental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_url: {
      value: cdktf.stringToHclTerraform(struct!.appUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreCyberarkPamExperimentalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreCyberarkPamExperimental | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.appUrl = this._appUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreCyberarkPamExperimental | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appUrl = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appUrl = value.appUrl;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // app_url - computed: false, optional: false, required: true
  private _appUrl?: string; 
  public get appUrl() {
    return this.getStringAttribute('app_url');
  }
  public set appUrl(value: string) {
    this._appUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appUrlInput() {
    return this._appUrl;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreDelineaStore {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The URL of the Delinea instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_url SecretStore#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The tenant name to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tenant_name SecretStore#tenant_name}
  */
  readonly tenantName?: string;
}

export function secretStoreDelineaStoreToTerraform(struct?: SecretStoreDelineaStoreOutputReference | SecretStoreDelineaStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
  }
}


export function secretStoreDelineaStoreToHclTerraform(struct?: SecretStoreDelineaStoreOutputReference | SecretStoreDelineaStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktf.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreDelineaStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreDelineaStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreDelineaStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._serverUrl = undefined;
      this._tags = undefined;
      this._tenantName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._serverUrl = value.serverUrl;
      this._tags = value.tags;
      this._tenantName = value.tenantName;
    }
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

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }
}
export interface SecretStoreGcpCertX509Store {
  /**
  * The ID of the target CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_id SecretStore#ca_id}
  */
  readonly caId?: string;
  /**
  * The ID of the target CA pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_pool_id SecretStore#ca_pool_id}
  */
  readonly caPoolId: string;
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * The Region for the CA in GCP format e.g. us-west1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#location SecretStore#location}
  */
  readonly location: string;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The GCP project ID to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#project_id SecretStore#project_id}
  */
  readonly projectId: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreGcpCertX509StoreToTerraform(struct?: SecretStoreGcpCertX509StoreOutputReference | SecretStoreGcpCertX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_id: cdktf.stringToTerraform(struct!.caId),
    ca_pool_id: cdktf.stringToTerraform(struct!.caPoolId),
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreGcpCertX509StoreToHclTerraform(struct?: SecretStoreGcpCertX509StoreOutputReference | SecretStoreGcpCertX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_id: {
      value: cdktf.stringToHclTerraform(struct!.caId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.caPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreGcpCertX509StoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreGcpCertX509Store | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caId = this._caId;
    }
    if (this._caPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPoolId = this._caPoolId;
    }
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreGcpCertX509Store | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caId = undefined;
      this._caPoolId = undefined;
      this._issuedCertTtlMinutes = undefined;
      this._location = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caId = value.caId;
      this._caPoolId = value.caPoolId;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._location = value.location;
      this._name = value.name;
      this._projectId = value.projectId;
      this._tags = value.tags;
    }
  }

  // ca_id - computed: false, optional: true, required: false
  private _caId?: string; 
  public get caId() {
    return this.getStringAttribute('ca_id');
  }
  public set caId(value: string) {
    this._caId = value;
  }
  public resetCaId() {
    this._caId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdInput() {
    return this._caId;
  }

  // ca_pool_id - computed: false, optional: false, required: true
  private _caPoolId?: string; 
  public get caPoolId() {
    return this.getStringAttribute('ca_pool_id');
  }
  public set caPoolId(value: string) {
    this._caPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolIdInput() {
    return this._caPoolId;
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreGcpStore {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The GCP project ID to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#project_id SecretStore#project_id}
  */
  readonly projectId: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreGcpStoreToTerraform(struct?: SecretStoreGcpStoreOutputReference | SecretStoreGcpStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreGcpStoreToHclTerraform(struct?: SecretStoreGcpStoreOutputReference | SecretStoreGcpStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreGcpStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreGcpStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreGcpStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._projectId = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._projectId = value.projectId;
      this._tags = value.tags;
    }
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreKeyfactorSshStore {
  /**
  * Path to the root CA that signed the certificate passed to the client for HTTPS connection. This is not required if the CA is trusted by the host operating system. This should be a PEM formatted certificate, and doesn't necessarily have to be the CA that signed CertificateFile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_file_path SecretStore#ca_file_path}
  */
  readonly caFilePath?: string;
  /**
  * Path to client certificate in PEM format. This certificate must contain a client certificate that is recognized by the EJBCA instance represented by Hostname. This PEM file may also contain the private key associated with the certificate, but KeyFile can also be set to configure the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#certificate_file_path SecretStore#certificate_file_path}
  */
  readonly certificateFilePath: string;
  /**
  * Name of EJBCA certificate authority that will enroll CSR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#default_certificate_authority_name SecretStore#default_certificate_authority_name}
  */
  readonly defaultCertificateAuthorityName: string;
  /**
  * Certificate profile name that EJBCA will enroll the CSR with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#default_certificate_profile_name SecretStore#default_certificate_profile_name}
  */
  readonly defaultCertificateProfileName: string;
  /**
  * End entity profile that EJBCA will enroll the CSR with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#default_end_entity_profile_name SecretStore#default_end_entity_profile_name}
  */
  readonly defaultEndEntityProfileName: string;
  /**
  * code used by EJBCA during enrollment. May be left blank if no code is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#enrollment_code_env_var SecretStore#enrollment_code_env_var}
  */
  readonly enrollmentCodeEnvVar?: string;
  /**
  * username that used by the EJBCA during enrollment. This can be left out.  If so, the username must be auto-generated on the Keyfactor side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#enrollment_username_env_var SecretStore#enrollment_username_env_var}
  */
  readonly enrollmentUsernameEnvVar?: string;
  /**
  * Path to private key in PEM format. This file should contain the private key associated with the client certificate configured in CertificateFile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#key_file_path SecretStore#key_file_path}
  */
  readonly keyFilePath?: string;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * the host of the Key Factor CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreKeyfactorSshStoreToTerraform(struct?: SecretStoreKeyfactorSshStoreOutputReference | SecretStoreKeyfactorSshStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file_path: cdktf.stringToTerraform(struct!.caFilePath),
    certificate_file_path: cdktf.stringToTerraform(struct!.certificateFilePath),
    default_certificate_authority_name: cdktf.stringToTerraform(struct!.defaultCertificateAuthorityName),
    default_certificate_profile_name: cdktf.stringToTerraform(struct!.defaultCertificateProfileName),
    default_end_entity_profile_name: cdktf.stringToTerraform(struct!.defaultEndEntityProfileName),
    enrollment_code_env_var: cdktf.stringToTerraform(struct!.enrollmentCodeEnvVar),
    enrollment_username_env_var: cdktf.stringToTerraform(struct!.enrollmentUsernameEnvVar),
    key_file_path: cdktf.stringToTerraform(struct!.keyFilePath),
    name: cdktf.stringToTerraform(struct!.name),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreKeyfactorSshStoreToHclTerraform(struct?: SecretStoreKeyfactorSshStoreOutputReference | SecretStoreKeyfactorSshStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file_path: {
      value: cdktf.stringToHclTerraform(struct!.caFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file_path: {
      value: cdktf.stringToHclTerraform(struct!.certificateFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_certificate_authority_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultCertificateAuthorityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_certificate_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultCertificateProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_end_entity_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultEndEntityProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrollment_code_env_var: {
      value: cdktf.stringToHclTerraform(struct!.enrollmentCodeEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrollment_username_env_var: {
      value: cdktf.stringToHclTerraform(struct!.enrollmentUsernameEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file_path: {
      value: cdktf.stringToHclTerraform(struct!.keyFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreKeyfactorSshStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreKeyfactorSshStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFilePath = this._caFilePath;
    }
    if (this._certificateFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFilePath = this._certificateFilePath;
    }
    if (this._defaultCertificateAuthorityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificateAuthorityName = this._defaultCertificateAuthorityName;
    }
    if (this._defaultCertificateProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificateProfileName = this._defaultCertificateProfileName;
    }
    if (this._defaultEndEntityProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndEntityProfileName = this._defaultEndEntityProfileName;
    }
    if (this._enrollmentCodeEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentCodeEnvVar = this._enrollmentCodeEnvVar;
    }
    if (this._enrollmentUsernameEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentUsernameEnvVar = this._enrollmentUsernameEnvVar;
    }
    if (this._keyFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFilePath = this._keyFilePath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreKeyfactorSshStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caFilePath = undefined;
      this._certificateFilePath = undefined;
      this._defaultCertificateAuthorityName = undefined;
      this._defaultCertificateProfileName = undefined;
      this._defaultEndEntityProfileName = undefined;
      this._enrollmentCodeEnvVar = undefined;
      this._enrollmentUsernameEnvVar = undefined;
      this._keyFilePath = undefined;
      this._name = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caFilePath = value.caFilePath;
      this._certificateFilePath = value.certificateFilePath;
      this._defaultCertificateAuthorityName = value.defaultCertificateAuthorityName;
      this._defaultCertificateProfileName = value.defaultCertificateProfileName;
      this._defaultEndEntityProfileName = value.defaultEndEntityProfileName;
      this._enrollmentCodeEnvVar = value.enrollmentCodeEnvVar;
      this._enrollmentUsernameEnvVar = value.enrollmentUsernameEnvVar;
      this._keyFilePath = value.keyFilePath;
      this._name = value.name;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
  }

  // ca_file_path - computed: false, optional: true, required: false
  private _caFilePath?: string; 
  public get caFilePath() {
    return this.getStringAttribute('ca_file_path');
  }
  public set caFilePath(value: string) {
    this._caFilePath = value;
  }
  public resetCaFilePath() {
    this._caFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFilePathInput() {
    return this._caFilePath;
  }

  // certificate_file_path - computed: false, optional: false, required: true
  private _certificateFilePath?: string; 
  public get certificateFilePath() {
    return this.getStringAttribute('certificate_file_path');
  }
  public set certificateFilePath(value: string) {
    this._certificateFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFilePathInput() {
    return this._certificateFilePath;
  }

  // default_certificate_authority_name - computed: false, optional: false, required: true
  private _defaultCertificateAuthorityName?: string; 
  public get defaultCertificateAuthorityName() {
    return this.getStringAttribute('default_certificate_authority_name');
  }
  public set defaultCertificateAuthorityName(value: string) {
    this._defaultCertificateAuthorityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificateAuthorityNameInput() {
    return this._defaultCertificateAuthorityName;
  }

  // default_certificate_profile_name - computed: false, optional: false, required: true
  private _defaultCertificateProfileName?: string; 
  public get defaultCertificateProfileName() {
    return this.getStringAttribute('default_certificate_profile_name');
  }
  public set defaultCertificateProfileName(value: string) {
    this._defaultCertificateProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificateProfileNameInput() {
    return this._defaultCertificateProfileName;
  }

  // default_end_entity_profile_name - computed: false, optional: false, required: true
  private _defaultEndEntityProfileName?: string; 
  public get defaultEndEntityProfileName() {
    return this.getStringAttribute('default_end_entity_profile_name');
  }
  public set defaultEndEntityProfileName(value: string) {
    this._defaultEndEntityProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndEntityProfileNameInput() {
    return this._defaultEndEntityProfileName;
  }

  // enrollment_code_env_var - computed: false, optional: true, required: false
  private _enrollmentCodeEnvVar?: string; 
  public get enrollmentCodeEnvVar() {
    return this.getStringAttribute('enrollment_code_env_var');
  }
  public set enrollmentCodeEnvVar(value: string) {
    this._enrollmentCodeEnvVar = value;
  }
  public resetEnrollmentCodeEnvVar() {
    this._enrollmentCodeEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentCodeEnvVarInput() {
    return this._enrollmentCodeEnvVar;
  }

  // enrollment_username_env_var - computed: false, optional: true, required: false
  private _enrollmentUsernameEnvVar?: string; 
  public get enrollmentUsernameEnvVar() {
    return this.getStringAttribute('enrollment_username_env_var');
  }
  public set enrollmentUsernameEnvVar(value: string) {
    this._enrollmentUsernameEnvVar = value;
  }
  public resetEnrollmentUsernameEnvVar() {
    this._enrollmentUsernameEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentUsernameEnvVarInput() {
    return this._enrollmentUsernameEnvVar;
  }

  // key_file_path - computed: false, optional: true, required: false
  private _keyFilePath?: string; 
  public get keyFilePath() {
    return this.getStringAttribute('key_file_path');
  }
  public set keyFilePath(value: string) {
    this._keyFilePath = value;
  }
  public resetKeyFilePath() {
    this._keyFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFilePathInput() {
    return this._keyFilePath;
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

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreKeyfactorX509Store {
  /**
  * Path to the root CA that signed the certificate passed to the client for HTTPS connection. This is not required if the CA is trusted by the host operating system. This should be a PEM formatted certificate, and doesn't necessarily have to be the CA that signed CertificateFile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_file_path SecretStore#ca_file_path}
  */
  readonly caFilePath?: string;
  /**
  * Path to client certificate in PEM format. This certificate must contain a client certificate that is recognized by the EJBCA instance represented by Hostname. This PEM file may also contain the private key associated with the certificate, but KeyFile can also be set to configure the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#certificate_file_path SecretStore#certificate_file_path}
  */
  readonly certificateFilePath: string;
  /**
  * Name of EJBCA certificate authority that will enroll CSR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#default_certificate_authority_name SecretStore#default_certificate_authority_name}
  */
  readonly defaultCertificateAuthorityName: string;
  /**
  * Certificate profile name that EJBCA will enroll the CSR with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#default_certificate_profile_name SecretStore#default_certificate_profile_name}
  */
  readonly defaultCertificateProfileName: string;
  /**
  * End entity profile that EJBCA will enroll the CSR with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#default_end_entity_profile_name SecretStore#default_end_entity_profile_name}
  */
  readonly defaultEndEntityProfileName: string;
  /**
  * code used by EJBCA during enrollment. May be left blank if no code is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#enrollment_code_env_var SecretStore#enrollment_code_env_var}
  */
  readonly enrollmentCodeEnvVar?: string;
  /**
  * username that used by the EJBCA during enrollment. This can be left out.  If so, the username must be auto-generated on the Keyfactor side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#enrollment_username_env_var SecretStore#enrollment_username_env_var}
  */
  readonly enrollmentUsernameEnvVar?: string;
  /**
  * Path to private key in PEM format. This file should contain the private key associated with the client certificate configured in CertificateFile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#key_file_path SecretStore#key_file_path}
  */
  readonly keyFilePath?: string;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * the host of the Key Factor CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreKeyfactorX509StoreToTerraform(struct?: SecretStoreKeyfactorX509StoreOutputReference | SecretStoreKeyfactorX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file_path: cdktf.stringToTerraform(struct!.caFilePath),
    certificate_file_path: cdktf.stringToTerraform(struct!.certificateFilePath),
    default_certificate_authority_name: cdktf.stringToTerraform(struct!.defaultCertificateAuthorityName),
    default_certificate_profile_name: cdktf.stringToTerraform(struct!.defaultCertificateProfileName),
    default_end_entity_profile_name: cdktf.stringToTerraform(struct!.defaultEndEntityProfileName),
    enrollment_code_env_var: cdktf.stringToTerraform(struct!.enrollmentCodeEnvVar),
    enrollment_username_env_var: cdktf.stringToTerraform(struct!.enrollmentUsernameEnvVar),
    key_file_path: cdktf.stringToTerraform(struct!.keyFilePath),
    name: cdktf.stringToTerraform(struct!.name),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreKeyfactorX509StoreToHclTerraform(struct?: SecretStoreKeyfactorX509StoreOutputReference | SecretStoreKeyfactorX509Store): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file_path: {
      value: cdktf.stringToHclTerraform(struct!.caFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file_path: {
      value: cdktf.stringToHclTerraform(struct!.certificateFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_certificate_authority_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultCertificateAuthorityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_certificate_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultCertificateProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_end_entity_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultEndEntityProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrollment_code_env_var: {
      value: cdktf.stringToHclTerraform(struct!.enrollmentCodeEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enrollment_username_env_var: {
      value: cdktf.stringToHclTerraform(struct!.enrollmentUsernameEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file_path: {
      value: cdktf.stringToHclTerraform(struct!.keyFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreKeyfactorX509StoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreKeyfactorX509Store | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFilePath = this._caFilePath;
    }
    if (this._certificateFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFilePath = this._certificateFilePath;
    }
    if (this._defaultCertificateAuthorityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificateAuthorityName = this._defaultCertificateAuthorityName;
    }
    if (this._defaultCertificateProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCertificateProfileName = this._defaultCertificateProfileName;
    }
    if (this._defaultEndEntityProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndEntityProfileName = this._defaultEndEntityProfileName;
    }
    if (this._enrollmentCodeEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentCodeEnvVar = this._enrollmentCodeEnvVar;
    }
    if (this._enrollmentUsernameEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrollmentUsernameEnvVar = this._enrollmentUsernameEnvVar;
    }
    if (this._keyFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFilePath = this._keyFilePath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreKeyfactorX509Store | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caFilePath = undefined;
      this._certificateFilePath = undefined;
      this._defaultCertificateAuthorityName = undefined;
      this._defaultCertificateProfileName = undefined;
      this._defaultEndEntityProfileName = undefined;
      this._enrollmentCodeEnvVar = undefined;
      this._enrollmentUsernameEnvVar = undefined;
      this._keyFilePath = undefined;
      this._name = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caFilePath = value.caFilePath;
      this._certificateFilePath = value.certificateFilePath;
      this._defaultCertificateAuthorityName = value.defaultCertificateAuthorityName;
      this._defaultCertificateProfileName = value.defaultCertificateProfileName;
      this._defaultEndEntityProfileName = value.defaultEndEntityProfileName;
      this._enrollmentCodeEnvVar = value.enrollmentCodeEnvVar;
      this._enrollmentUsernameEnvVar = value.enrollmentUsernameEnvVar;
      this._keyFilePath = value.keyFilePath;
      this._name = value.name;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
  }

  // ca_file_path - computed: false, optional: true, required: false
  private _caFilePath?: string; 
  public get caFilePath() {
    return this.getStringAttribute('ca_file_path');
  }
  public set caFilePath(value: string) {
    this._caFilePath = value;
  }
  public resetCaFilePath() {
    this._caFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFilePathInput() {
    return this._caFilePath;
  }

  // certificate_file_path - computed: false, optional: false, required: true
  private _certificateFilePath?: string; 
  public get certificateFilePath() {
    return this.getStringAttribute('certificate_file_path');
  }
  public set certificateFilePath(value: string) {
    this._certificateFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFilePathInput() {
    return this._certificateFilePath;
  }

  // default_certificate_authority_name - computed: false, optional: false, required: true
  private _defaultCertificateAuthorityName?: string; 
  public get defaultCertificateAuthorityName() {
    return this.getStringAttribute('default_certificate_authority_name');
  }
  public set defaultCertificateAuthorityName(value: string) {
    this._defaultCertificateAuthorityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificateAuthorityNameInput() {
    return this._defaultCertificateAuthorityName;
  }

  // default_certificate_profile_name - computed: false, optional: false, required: true
  private _defaultCertificateProfileName?: string; 
  public get defaultCertificateProfileName() {
    return this.getStringAttribute('default_certificate_profile_name');
  }
  public set defaultCertificateProfileName(value: string) {
    this._defaultCertificateProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCertificateProfileNameInput() {
    return this._defaultCertificateProfileName;
  }

  // default_end_entity_profile_name - computed: false, optional: false, required: true
  private _defaultEndEntityProfileName?: string; 
  public get defaultEndEntityProfileName() {
    return this.getStringAttribute('default_end_entity_profile_name');
  }
  public set defaultEndEntityProfileName(value: string) {
    this._defaultEndEntityProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndEntityProfileNameInput() {
    return this._defaultEndEntityProfileName;
  }

  // enrollment_code_env_var - computed: false, optional: true, required: false
  private _enrollmentCodeEnvVar?: string; 
  public get enrollmentCodeEnvVar() {
    return this.getStringAttribute('enrollment_code_env_var');
  }
  public set enrollmentCodeEnvVar(value: string) {
    this._enrollmentCodeEnvVar = value;
  }
  public resetEnrollmentCodeEnvVar() {
    this._enrollmentCodeEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentCodeEnvVarInput() {
    return this._enrollmentCodeEnvVar;
  }

  // enrollment_username_env_var - computed: false, optional: true, required: false
  private _enrollmentUsernameEnvVar?: string; 
  public get enrollmentUsernameEnvVar() {
    return this.getStringAttribute('enrollment_username_env_var');
  }
  public set enrollmentUsernameEnvVar(value: string) {
    this._enrollmentUsernameEnvVar = value;
  }
  public resetEnrollmentUsernameEnvVar() {
    this._enrollmentUsernameEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentUsernameEnvVarInput() {
    return this._enrollmentUsernameEnvVar;
  }

  // key_file_path - computed: false, optional: true, required: false
  private _keyFilePath?: string; 
  public get keyFilePath() {
    return this.getStringAttribute('key_file_path');
  }
  public set keyFilePath(value: string) {
    this._keyFilePath = value;
  }
  public resetKeyFilePath() {
    this._keyFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFilePathInput() {
    return this._keyFilePath;
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

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreStrongVault {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreStrongVaultToTerraform(struct?: SecretStoreStrongVaultOutputReference | SecretStoreStrongVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreStrongVaultToHclTerraform(struct?: SecretStoreStrongVaultOutputReference | SecretStoreStrongVault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreStrongVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreStrongVault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreStrongVault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._tags = value.tags;
    }
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#create SecretStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#default SecretStore#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#delete SecretStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#read SecretStore#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#update SecretStore#update}
  */
  readonly update?: string;
}

export function secretStoreTimeoutsToTerraform(struct?: SecretStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function secretStoreTimeoutsToHclTerraform(struct?: SecretStoreTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class SecretStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecretStoreTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface SecretStoreVaultApprole {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultApproleToTerraform(struct?: SecretStoreVaultApproleOutputReference | SecretStoreVaultApprole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultApproleToHclTerraform(struct?: SecretStoreVaultApproleOutputReference | SecretStoreVaultApprole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultApproleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultApprole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultApprole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultApproleCertSsh {
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * The mount point of the SSH engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ssh_mount_point SecretStore#ssh_mount_point}
  */
  readonly sshMountPoint: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultApproleCertSshToTerraform(struct?: SecretStoreVaultApproleCertSshOutputReference | SecretStoreVaultApproleCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    ssh_mount_point: cdktf.stringToTerraform(struct!.sshMountPoint),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultApproleCertSshToHclTerraform(struct?: SecretStoreVaultApproleCertSshOutputReference | SecretStoreVaultApproleCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.sshMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultApproleCertSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultApproleCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._sshMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshMountPoint = this._sshMountPoint;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultApproleCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._sshMountPoint = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._sshMountPoint = value.sshMountPoint;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // ssh_mount_point - computed: false, optional: false, required: true
  private _sshMountPoint?: string; 
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }
  public set sshMountPoint(value: string) {
    this._sshMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMountPointInput() {
    return this._sshMountPoint;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultApproleCertX509 {
  /**
  * The lifetime of certificates issued by this CA in minutes. Recommended value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount point of the PKI engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#pki_mount_point SecretStore#pki_mount_point}
  */
  readonly pkiMountPoint: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultApproleCertX509ToTerraform(struct?: SecretStoreVaultApproleCertX509OutputReference | SecretStoreVaultApproleCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pki_mount_point: cdktf.stringToTerraform(struct!.pkiMountPoint),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultApproleCertX509ToHclTerraform(struct?: SecretStoreVaultApproleCertX509OutputReference | SecretStoreVaultApproleCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.pkiMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultApproleCertX509OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultApproleCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pkiMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiMountPoint = this._pkiMountPoint;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultApproleCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._pkiMountPoint = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._pkiMountPoint = value.pkiMountPoint;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pki_mount_point - computed: false, optional: false, required: true
  private _pkiMountPoint?: string; 
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }
  public set pkiMountPoint(value: string) {
    this._pkiMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiMountPointInput() {
    return this._pkiMountPoint;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultAwsEc2 {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultAwsEc2ToTerraform(struct?: SecretStoreVaultAwsEc2OutputReference | SecretStoreVaultAwsEc2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultAwsEc2ToHclTerraform(struct?: SecretStoreVaultAwsEc2OutputReference | SecretStoreVaultAwsEc2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultAwsEc2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultAwsEc2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultAwsEc2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultAwsEc2CertSsh {
  /**
  * The lifetime of certificates issued by this CA in minutes. Recommended value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * The mount point of the SSH engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ssh_mount_point SecretStore#ssh_mount_point}
  */
  readonly sshMountPoint: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultAwsEc2CertSshToTerraform(struct?: SecretStoreVaultAwsEc2CertSshOutputReference | SecretStoreVaultAwsEc2CertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    ssh_mount_point: cdktf.stringToTerraform(struct!.sshMountPoint),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultAwsEc2CertSshToHclTerraform(struct?: SecretStoreVaultAwsEc2CertSshOutputReference | SecretStoreVaultAwsEc2CertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.sshMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultAwsEc2CertSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultAwsEc2CertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._sshMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshMountPoint = this._sshMountPoint;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultAwsEc2CertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._sshMountPoint = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._sshMountPoint = value.sshMountPoint;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // ssh_mount_point - computed: false, optional: false, required: true
  private _sshMountPoint?: string; 
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }
  public set sshMountPoint(value: string) {
    this._sshMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMountPointInput() {
    return this._sshMountPoint;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultAwsEc2CertX509 {
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount point of the PKI engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#pki_mount_point SecretStore#pki_mount_point}
  */
  readonly pkiMountPoint: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultAwsEc2CertX509ToTerraform(struct?: SecretStoreVaultAwsEc2CertX509OutputReference | SecretStoreVaultAwsEc2CertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pki_mount_point: cdktf.stringToTerraform(struct!.pkiMountPoint),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultAwsEc2CertX509ToHclTerraform(struct?: SecretStoreVaultAwsEc2CertX509OutputReference | SecretStoreVaultAwsEc2CertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.pkiMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultAwsEc2CertX509OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultAwsEc2CertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pkiMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiMountPoint = this._pkiMountPoint;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultAwsEc2CertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._pkiMountPoint = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._pkiMountPoint = value.pkiMountPoint;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pki_mount_point - computed: false, optional: false, required: true
  private _pkiMountPoint?: string; 
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }
  public set pkiMountPoint(value: string) {
    this._pkiMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiMountPointInput() {
    return this._pkiMountPoint;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultAwsIam {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultAwsIamToTerraform(struct?: SecretStoreVaultAwsIamOutputReference | SecretStoreVaultAwsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultAwsIamToHclTerraform(struct?: SecretStoreVaultAwsIamOutputReference | SecretStoreVaultAwsIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultAwsIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultAwsIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultAwsIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultAwsIamCertSsh {
  /**
  * The lifetime of certificates issued by this CA in minutes. Recommended value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * The mount point of the SSH engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ssh_mount_point SecretStore#ssh_mount_point}
  */
  readonly sshMountPoint: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultAwsIamCertSshToTerraform(struct?: SecretStoreVaultAwsIamCertSshOutputReference | SecretStoreVaultAwsIamCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    ssh_mount_point: cdktf.stringToTerraform(struct!.sshMountPoint),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultAwsIamCertSshToHclTerraform(struct?: SecretStoreVaultAwsIamCertSshOutputReference | SecretStoreVaultAwsIamCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.sshMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultAwsIamCertSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultAwsIamCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._sshMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshMountPoint = this._sshMountPoint;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultAwsIamCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._sshMountPoint = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._sshMountPoint = value.sshMountPoint;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // ssh_mount_point - computed: false, optional: false, required: true
  private _sshMountPoint?: string; 
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }
  public set sshMountPoint(value: string) {
    this._sshMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMountPointInput() {
    return this._sshMountPoint;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultAwsIamCertX509 {
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount point of the PKI engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#pki_mount_point SecretStore#pki_mount_point}
  */
  readonly pkiMountPoint: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultAwsIamCertX509ToTerraform(struct?: SecretStoreVaultAwsIamCertX509OutputReference | SecretStoreVaultAwsIamCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pki_mount_point: cdktf.stringToTerraform(struct!.pkiMountPoint),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultAwsIamCertX509ToHclTerraform(struct?: SecretStoreVaultAwsIamCertX509OutputReference | SecretStoreVaultAwsIamCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.pkiMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultAwsIamCertX509OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultAwsIamCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pkiMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiMountPoint = this._pkiMountPoint;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultAwsIamCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._pkiMountPoint = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._pkiMountPoint = value.pkiMountPoint;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pki_mount_point - computed: false, optional: false, required: true
  private _pkiMountPoint?: string; 
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }
  public set pkiMountPoint(value: string) {
    this._pkiMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiMountPointInput() {
    return this._pkiMountPoint;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultTls {
  /**
  * A path to a CA file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_cert_path SecretStore#ca_cert_path}
  */
  readonly caCertPath?: string;
  /**
  * A path to a client certificate file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#client_cert_path SecretStore#client_cert_path}
  */
  readonly clientCertPath: string;
  /**
  * A path to a client key file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#client_key_path SecretStore#client_key_path}
  */
  readonly clientKeyPath: string;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultTlsToTerraform(struct?: SecretStoreVaultTlsOutputReference | SecretStoreVaultTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_path: cdktf.stringToTerraform(struct!.caCertPath),
    client_cert_path: cdktf.stringToTerraform(struct!.clientCertPath),
    client_key_path: cdktf.stringToTerraform(struct!.clientKeyPath),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultTlsToHclTerraform(struct?: SecretStoreVaultTlsOutputReference | SecretStoreVaultTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.caCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.clientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_path: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertPath = this._caCertPath;
    }
    if (this._clientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertPath = this._clientCertPath;
    }
    if (this._clientKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPath = this._clientKeyPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertPath = undefined;
      this._clientCertPath = undefined;
      this._clientKeyPath = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertPath = value.caCertPath;
      this._clientCertPath = value.clientCertPath;
      this._clientKeyPath = value.clientKeyPath;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
  }

  // ca_cert_path - computed: false, optional: true, required: false
  private _caCertPath?: string; 
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }
  public set caCertPath(value: string) {
    this._caCertPath = value;
  }
  public resetCaCertPath() {
    this._caCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPathInput() {
    return this._caCertPath;
  }

  // client_cert_path - computed: false, optional: false, required: true
  private _clientCertPath?: string; 
  public get clientCertPath() {
    return this.getStringAttribute('client_cert_path');
  }
  public set clientCertPath(value: string) {
    this._clientCertPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertPathInput() {
    return this._clientCertPath;
  }

  // client_key_path - computed: false, optional: false, required: true
  private _clientKeyPath?: string; 
  public get clientKeyPath() {
    return this.getStringAttribute('client_key_path');
  }
  public set clientKeyPath(value: string) {
    this._clientKeyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPathInput() {
    return this._clientKeyPath;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultTlsCertSsh {
  /**
  * A path to a CA file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_cert_path SecretStore#ca_cert_path}
  */
  readonly caCertPath?: string;
  /**
  * A path to a client certificate file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#client_cert_path SecretStore#client_cert_path}
  */
  readonly clientCertPath: string;
  /**
  * A path to a client key file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#client_key_path SecretStore#client_key_path}
  */
  readonly clientKeyPath: string;
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * The mount point of the SSH engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ssh_mount_point SecretStore#ssh_mount_point}
  */
  readonly sshMountPoint: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultTlsCertSshToTerraform(struct?: SecretStoreVaultTlsCertSshOutputReference | SecretStoreVaultTlsCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_path: cdktf.stringToTerraform(struct!.caCertPath),
    client_cert_path: cdktf.stringToTerraform(struct!.clientCertPath),
    client_key_path: cdktf.stringToTerraform(struct!.clientKeyPath),
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    ssh_mount_point: cdktf.stringToTerraform(struct!.sshMountPoint),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultTlsCertSshToHclTerraform(struct?: SecretStoreVaultTlsCertSshOutputReference | SecretStoreVaultTlsCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.caCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.clientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_path: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.sshMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultTlsCertSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultTlsCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertPath = this._caCertPath;
    }
    if (this._clientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertPath = this._clientCertPath;
    }
    if (this._clientKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPath = this._clientKeyPath;
    }
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._sshMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshMountPoint = this._sshMountPoint;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultTlsCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertPath = undefined;
      this._clientCertPath = undefined;
      this._clientKeyPath = undefined;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._sshMountPoint = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertPath = value.caCertPath;
      this._clientCertPath = value.clientCertPath;
      this._clientKeyPath = value.clientKeyPath;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._sshMountPoint = value.sshMountPoint;
      this._tags = value.tags;
    }
  }

  // ca_cert_path - computed: false, optional: true, required: false
  private _caCertPath?: string; 
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }
  public set caCertPath(value: string) {
    this._caCertPath = value;
  }
  public resetCaCertPath() {
    this._caCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPathInput() {
    return this._caCertPath;
  }

  // client_cert_path - computed: false, optional: false, required: true
  private _clientCertPath?: string; 
  public get clientCertPath() {
    return this.getStringAttribute('client_cert_path');
  }
  public set clientCertPath(value: string) {
    this._clientCertPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertPathInput() {
    return this._clientCertPath;
  }

  // client_key_path - computed: false, optional: false, required: true
  private _clientKeyPath?: string; 
  public get clientKeyPath() {
    return this.getStringAttribute('client_key_path');
  }
  public set clientKeyPath(value: string) {
    this._clientKeyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPathInput() {
    return this._clientKeyPath;
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // ssh_mount_point - computed: false, optional: false, required: true
  private _sshMountPoint?: string; 
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }
  public set sshMountPoint(value: string) {
    this._sshMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMountPointInput() {
    return this._sshMountPoint;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultTlsCertX509 {
  /**
  * A path to a CA file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ca_cert_path SecretStore#ca_cert_path}
  */
  readonly caCertPath?: string;
  /**
  * A path to a client certificate file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#client_cert_path SecretStore#client_cert_path}
  */
  readonly clientCertPath: string;
  /**
  * A path to a client key file accessible by a Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#client_key_path SecretStore#client_key_path}
  */
  readonly clientKeyPath: string;
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount point of the PKI engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#pki_mount_point SecretStore#pki_mount_point}
  */
  readonly pkiMountPoint: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultTlsCertX509ToTerraform(struct?: SecretStoreVaultTlsCertX509OutputReference | SecretStoreVaultTlsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_path: cdktf.stringToTerraform(struct!.caCertPath),
    client_cert_path: cdktf.stringToTerraform(struct!.clientCertPath),
    client_key_path: cdktf.stringToTerraform(struct!.clientKeyPath),
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pki_mount_point: cdktf.stringToTerraform(struct!.pkiMountPoint),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultTlsCertX509ToHclTerraform(struct?: SecretStoreVaultTlsCertX509OutputReference | SecretStoreVaultTlsCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.caCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_path: {
      value: cdktf.stringToHclTerraform(struct!.clientCertPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_path: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.pkiMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultTlsCertX509OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultTlsCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertPath = this._caCertPath;
    }
    if (this._clientCertPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertPath = this._clientCertPath;
    }
    if (this._clientKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPath = this._clientKeyPath;
    }
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pkiMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiMountPoint = this._pkiMountPoint;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultTlsCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertPath = undefined;
      this._clientCertPath = undefined;
      this._clientKeyPath = undefined;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._pkiMountPoint = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertPath = value.caCertPath;
      this._clientCertPath = value.clientCertPath;
      this._clientKeyPath = value.clientKeyPath;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._pkiMountPoint = value.pkiMountPoint;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._tags = value.tags;
    }
  }

  // ca_cert_path - computed: false, optional: true, required: false
  private _caCertPath?: string; 
  public get caCertPath() {
    return this.getStringAttribute('ca_cert_path');
  }
  public set caCertPath(value: string) {
    this._caCertPath = value;
  }
  public resetCaCertPath() {
    this._caCertPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPathInput() {
    return this._caCertPath;
  }

  // client_cert_path - computed: false, optional: false, required: true
  private _clientCertPath?: string; 
  public get clientCertPath() {
    return this.getStringAttribute('client_cert_path');
  }
  public set clientCertPath(value: string) {
    this._clientCertPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertPathInput() {
    return this._clientCertPath;
  }

  // client_key_path - computed: false, optional: false, required: true
  private _clientKeyPath?: string; 
  public get clientKeyPath() {
    return this.getStringAttribute('client_key_path');
  }
  public set clientKeyPath(value: string) {
    this._clientKeyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPathInput() {
    return this._clientKeyPath;
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pki_mount_point - computed: false, optional: false, required: true
  private _pkiMountPoint?: string; 
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }
  public set pkiMountPoint(value: string) {
    this._pkiMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiMountPointInput() {
    return this._pkiMountPoint;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultToken {
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultTokenToTerraform(struct?: SecretStoreVaultTokenOutputReference | SecretStoreVaultToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultTokenToHclTerraform(struct?: SecretStoreVaultTokenOutputReference | SecretStoreVaultToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._tags = value.tags;
    }
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultTokenCertSsh {
  /**
  * The lifetime of certificates issued by this CA in minutes. Recommended value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * The mount point of the SSH engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#ssh_mount_point SecretStore#ssh_mount_point}
  */
  readonly sshMountPoint: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultTokenCertSshToTerraform(struct?: SecretStoreVaultTokenCertSshOutputReference | SecretStoreVaultTokenCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    ssh_mount_point: cdktf.stringToTerraform(struct!.sshMountPoint),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultTokenCertSshToHclTerraform(struct?: SecretStoreVaultTokenCertSshOutputReference | SecretStoreVaultTokenCertSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.sshMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultTokenCertSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultTokenCertSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._sshMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshMountPoint = this._sshMountPoint;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultTokenCertSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._sshMountPoint = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._sshMountPoint = value.sshMountPoint;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // ssh_mount_point - computed: false, optional: false, required: true
  private _sshMountPoint?: string; 
  public get sshMountPoint() {
    return this.getStringAttribute('ssh_mount_point');
  }
  public set sshMountPoint(value: string) {
    this._sshMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMountPointInput() {
    return this._sshMountPoint;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface SecretStoreVaultTokenCertX509 {
  /**
  * The lifetime of certificates issued by this CA represented in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#issued_cert_ttl_minutes SecretStore#issued_cert_ttl_minutes}
  */
  readonly issuedCertTtlMinutes: number;
  /**
  * Unique human-readable name of the SecretStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#name SecretStore#name}
  */
  readonly name: string;
  /**
  * The namespace to make requests within
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#namespace SecretStore#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount point of the PKI engine configured with the desired CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#pki_mount_point SecretStore#pki_mount_point}
  */
  readonly pkiMountPoint: string;
  /**
  * The URL of the Vault to target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#server_address SecretStore#server_address}
  */
  readonly serverAddress: string;
  /**
  * The signing role to be used for signing certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#signing_role SecretStore#signing_role}
  */
  readonly signingRole: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#tags SecretStore#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function secretStoreVaultTokenCertX509ToTerraform(struct?: SecretStoreVaultTokenCertX509OutputReference | SecretStoreVaultTokenCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issued_cert_ttl_minutes: cdktf.numberToTerraform(struct!.issuedCertTtlMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    pki_mount_point: cdktf.stringToTerraform(struct!.pkiMountPoint),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    signing_role: cdktf.stringToTerraform(struct!.signingRole),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function secretStoreVaultTokenCertX509ToHclTerraform(struct?: SecretStoreVaultTokenCertX509OutputReference | SecretStoreVaultTokenCertX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issued_cert_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.issuedCertTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_mount_point: {
      value: cdktf.stringToHclTerraform(struct!.pkiMountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_role: {
      value: cdktf.stringToHclTerraform(struct!.signingRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretStoreVaultTokenCertX509OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretStoreVaultTokenCertX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuedCertTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuedCertTtlMinutes = this._issuedCertTtlMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._pkiMountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiMountPoint = this._pkiMountPoint;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._signingRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRole = this._signingRole;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretStoreVaultTokenCertX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuedCertTtlMinutes = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._pkiMountPoint = undefined;
      this._serverAddress = undefined;
      this._signingRole = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuedCertTtlMinutes = value.issuedCertTtlMinutes;
      this._name = value.name;
      this._namespace = value.namespace;
      this._pkiMountPoint = value.pkiMountPoint;
      this._serverAddress = value.serverAddress;
      this._signingRole = value.signingRole;
      this._tags = value.tags;
    }
  }

  // issued_cert_ttl_minutes - computed: false, optional: false, required: true
  private _issuedCertTtlMinutes?: number; 
  public get issuedCertTtlMinutes() {
    return this.getNumberAttribute('issued_cert_ttl_minutes');
  }
  public set issuedCertTtlMinutes(value: number) {
    this._issuedCertTtlMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuedCertTtlMinutesInput() {
    return this._issuedCertTtlMinutes;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pki_mount_point - computed: false, optional: false, required: true
  private _pkiMountPoint?: string; 
  public get pkiMountPoint() {
    return this.getStringAttribute('pki_mount_point');
  }
  public set pkiMountPoint(value: string) {
    this._pkiMountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiMountPointInput() {
    return this._pkiMountPoint;
  }

  // server_address - computed: false, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // signing_role - computed: false, optional: false, required: true
  private _signingRole?: string; 
  public get signingRole() {
    return this.getStringAttribute('signing_role');
  }
  public set signingRole(value: string) {
    this._signingRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRoleInput() {
    return this._signingRole;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store sdm_secret_store}
*/
export class SecretStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_secret_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretStore to import
  * @param importFromId The id of the existing SecretStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_secret_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.35.0/docs/resources/secret_store sdm_secret_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecretStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_secret_store',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.35.0',
        providerVersionConstraint: '15.35.0'
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
    this._activeDirectoryStore.internalValue = config.activeDirectoryStore;
    this._aws.internalValue = config.aws;
    this._awsCertX509.internalValue = config.awsCertX509;
    this._azureStore.internalValue = config.azureStore;
    this._cyberarkConjur.internalValue = config.cyberarkConjur;
    this._cyberarkPam.internalValue = config.cyberarkPam;
    this._cyberarkPamExperimental.internalValue = config.cyberarkPamExperimental;
    this._delineaStore.internalValue = config.delineaStore;
    this._gcpCertX509Store.internalValue = config.gcpCertX509Store;
    this._gcpStore.internalValue = config.gcpStore;
    this._keyfactorSshStore.internalValue = config.keyfactorSshStore;
    this._keyfactorX509Store.internalValue = config.keyfactorX509Store;
    this._strongVault.internalValue = config.strongVault;
    this._timeouts.internalValue = config.timeouts;
    this._vaultApprole.internalValue = config.vaultApprole;
    this._vaultApproleCertSsh.internalValue = config.vaultApproleCertSsh;
    this._vaultApproleCertX509.internalValue = config.vaultApproleCertX509;
    this._vaultAwsEc2.internalValue = config.vaultAwsEc2;
    this._vaultAwsEc2CertSsh.internalValue = config.vaultAwsEc2CertSsh;
    this._vaultAwsEc2CertX509.internalValue = config.vaultAwsEc2CertX509;
    this._vaultAwsIam.internalValue = config.vaultAwsIam;
    this._vaultAwsIamCertSsh.internalValue = config.vaultAwsIamCertSsh;
    this._vaultAwsIamCertX509.internalValue = config.vaultAwsIamCertX509;
    this._vaultTls.internalValue = config.vaultTls;
    this._vaultTlsCertSsh.internalValue = config.vaultTlsCertSsh;
    this._vaultTlsCertX509.internalValue = config.vaultTlsCertX509;
    this._vaultToken.internalValue = config.vaultToken;
    this._vaultTokenCertSsh.internalValue = config.vaultTokenCertSsh;
    this._vaultTokenCertX509.internalValue = config.vaultTokenCertX509;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // active_directory_store - computed: false, optional: true, required: false
  private _activeDirectoryStore = new SecretStoreActiveDirectoryStoreOutputReference(this, "active_directory_store");
  public get activeDirectoryStore() {
    return this._activeDirectoryStore;
  }
  public putActiveDirectoryStore(value: SecretStoreActiveDirectoryStore) {
    this._activeDirectoryStore.internalValue = value;
  }
  public resetActiveDirectoryStore() {
    this._activeDirectoryStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryStoreInput() {
    return this._activeDirectoryStore.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new SecretStoreAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: SecretStoreAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // aws_cert_x509 - computed: false, optional: true, required: false
  private _awsCertX509 = new SecretStoreAwsCertX509OutputReference(this, "aws_cert_x509");
  public get awsCertX509() {
    return this._awsCertX509;
  }
  public putAwsCertX509(value: SecretStoreAwsCertX509) {
    this._awsCertX509.internalValue = value;
  }
  public resetAwsCertX509() {
    this._awsCertX509.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCertX509Input() {
    return this._awsCertX509.internalValue;
  }

  // azure_store - computed: false, optional: true, required: false
  private _azureStore = new SecretStoreAzureStoreOutputReference(this, "azure_store");
  public get azureStore() {
    return this._azureStore;
  }
  public putAzureStore(value: SecretStoreAzureStore) {
    this._azureStore.internalValue = value;
  }
  public resetAzureStore() {
    this._azureStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStoreInput() {
    return this._azureStore.internalValue;
  }

  // cyberark_conjur - computed: false, optional: true, required: false
  private _cyberarkConjur = new SecretStoreCyberarkConjurOutputReference(this, "cyberark_conjur");
  public get cyberarkConjur() {
    return this._cyberarkConjur;
  }
  public putCyberarkConjur(value: SecretStoreCyberarkConjur) {
    this._cyberarkConjur.internalValue = value;
  }
  public resetCyberarkConjur() {
    this._cyberarkConjur.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkConjurInput() {
    return this._cyberarkConjur.internalValue;
  }

  // cyberark_pam - computed: false, optional: true, required: false
  private _cyberarkPam = new SecretStoreCyberarkPamOutputReference(this, "cyberark_pam");
  public get cyberarkPam() {
    return this._cyberarkPam;
  }
  public putCyberarkPam(value: SecretStoreCyberarkPam) {
    this._cyberarkPam.internalValue = value;
  }
  public resetCyberarkPam() {
    this._cyberarkPam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkPamInput() {
    return this._cyberarkPam.internalValue;
  }

  // cyberark_pam_experimental - computed: false, optional: true, required: false
  private _cyberarkPamExperimental = new SecretStoreCyberarkPamExperimentalOutputReference(this, "cyberark_pam_experimental");
  public get cyberarkPamExperimental() {
    return this._cyberarkPamExperimental;
  }
  public putCyberarkPamExperimental(value: SecretStoreCyberarkPamExperimental) {
    this._cyberarkPamExperimental.internalValue = value;
  }
  public resetCyberarkPamExperimental() {
    this._cyberarkPamExperimental.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cyberarkPamExperimentalInput() {
    return this._cyberarkPamExperimental.internalValue;
  }

  // delinea_store - computed: false, optional: true, required: false
  private _delineaStore = new SecretStoreDelineaStoreOutputReference(this, "delinea_store");
  public get delineaStore() {
    return this._delineaStore;
  }
  public putDelineaStore(value: SecretStoreDelineaStore) {
    this._delineaStore.internalValue = value;
  }
  public resetDelineaStore() {
    this._delineaStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delineaStoreInput() {
    return this._delineaStore.internalValue;
  }

  // gcp_cert_x_509_store - computed: false, optional: true, required: false
  private _gcpCertX509Store = new SecretStoreGcpCertX509StoreOutputReference(this, "gcp_cert_x_509_store");
  public get gcpCertX509Store() {
    return this._gcpCertX509Store;
  }
  public putGcpCertX509Store(value: SecretStoreGcpCertX509Store) {
    this._gcpCertX509Store.internalValue = value;
  }
  public resetGcpCertX509Store() {
    this._gcpCertX509Store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCertX509StoreInput() {
    return this._gcpCertX509Store.internalValue;
  }

  // gcp_store - computed: false, optional: true, required: false
  private _gcpStore = new SecretStoreGcpStoreOutputReference(this, "gcp_store");
  public get gcpStore() {
    return this._gcpStore;
  }
  public putGcpStore(value: SecretStoreGcpStore) {
    this._gcpStore.internalValue = value;
  }
  public resetGcpStore() {
    this._gcpStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpStoreInput() {
    return this._gcpStore.internalValue;
  }

  // keyfactor_ssh_store - computed: false, optional: true, required: false
  private _keyfactorSshStore = new SecretStoreKeyfactorSshStoreOutputReference(this, "keyfactor_ssh_store");
  public get keyfactorSshStore() {
    return this._keyfactorSshStore;
  }
  public putKeyfactorSshStore(value: SecretStoreKeyfactorSshStore) {
    this._keyfactorSshStore.internalValue = value;
  }
  public resetKeyfactorSshStore() {
    this._keyfactorSshStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyfactorSshStoreInput() {
    return this._keyfactorSshStore.internalValue;
  }

  // keyfactor_x_509_store - computed: false, optional: true, required: false
  private _keyfactorX509Store = new SecretStoreKeyfactorX509StoreOutputReference(this, "keyfactor_x_509_store");
  public get keyfactorX509Store() {
    return this._keyfactorX509Store;
  }
  public putKeyfactorX509Store(value: SecretStoreKeyfactorX509Store) {
    this._keyfactorX509Store.internalValue = value;
  }
  public resetKeyfactorX509Store() {
    this._keyfactorX509Store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyfactorX509StoreInput() {
    return this._keyfactorX509Store.internalValue;
  }

  // strong_vault - computed: false, optional: true, required: false
  private _strongVault = new SecretStoreStrongVaultOutputReference(this, "strong_vault");
  public get strongVault() {
    return this._strongVault;
  }
  public putStrongVault(value: SecretStoreStrongVault) {
    this._strongVault.internalValue = value;
  }
  public resetStrongVault() {
    this._strongVault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongVaultInput() {
    return this._strongVault.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecretStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecretStoreTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vault_approle - computed: false, optional: true, required: false
  private _vaultApprole = new SecretStoreVaultApproleOutputReference(this, "vault_approle");
  public get vaultApprole() {
    return this._vaultApprole;
  }
  public putVaultApprole(value: SecretStoreVaultApprole) {
    this._vaultApprole.internalValue = value;
  }
  public resetVaultApprole() {
    this._vaultApprole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultApproleInput() {
    return this._vaultApprole.internalValue;
  }

  // vault_approle_cert_ssh - computed: false, optional: true, required: false
  private _vaultApproleCertSsh = new SecretStoreVaultApproleCertSshOutputReference(this, "vault_approle_cert_ssh");
  public get vaultApproleCertSsh() {
    return this._vaultApproleCertSsh;
  }
  public putVaultApproleCertSsh(value: SecretStoreVaultApproleCertSsh) {
    this._vaultApproleCertSsh.internalValue = value;
  }
  public resetVaultApproleCertSsh() {
    this._vaultApproleCertSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultApproleCertSshInput() {
    return this._vaultApproleCertSsh.internalValue;
  }

  // vault_approle_cert_x509 - computed: false, optional: true, required: false
  private _vaultApproleCertX509 = new SecretStoreVaultApproleCertX509OutputReference(this, "vault_approle_cert_x509");
  public get vaultApproleCertX509() {
    return this._vaultApproleCertX509;
  }
  public putVaultApproleCertX509(value: SecretStoreVaultApproleCertX509) {
    this._vaultApproleCertX509.internalValue = value;
  }
  public resetVaultApproleCertX509() {
    this._vaultApproleCertX509.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultApproleCertX509Input() {
    return this._vaultApproleCertX509.internalValue;
  }

  // vault_aws_ec2 - computed: false, optional: true, required: false
  private _vaultAwsEc2 = new SecretStoreVaultAwsEc2OutputReference(this, "vault_aws_ec2");
  public get vaultAwsEc2() {
    return this._vaultAwsEc2;
  }
  public putVaultAwsEc2(value: SecretStoreVaultAwsEc2) {
    this._vaultAwsEc2.internalValue = value;
  }
  public resetVaultAwsEc2() {
    this._vaultAwsEc2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAwsEc2Input() {
    return this._vaultAwsEc2.internalValue;
  }

  // vault_aws_ec2_cert_ssh - computed: false, optional: true, required: false
  private _vaultAwsEc2CertSsh = new SecretStoreVaultAwsEc2CertSshOutputReference(this, "vault_aws_ec2_cert_ssh");
  public get vaultAwsEc2CertSsh() {
    return this._vaultAwsEc2CertSsh;
  }
  public putVaultAwsEc2CertSsh(value: SecretStoreVaultAwsEc2CertSsh) {
    this._vaultAwsEc2CertSsh.internalValue = value;
  }
  public resetVaultAwsEc2CertSsh() {
    this._vaultAwsEc2CertSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAwsEc2CertSshInput() {
    return this._vaultAwsEc2CertSsh.internalValue;
  }

  // vault_aws_ec2_cert_x509 - computed: false, optional: true, required: false
  private _vaultAwsEc2CertX509 = new SecretStoreVaultAwsEc2CertX509OutputReference(this, "vault_aws_ec2_cert_x509");
  public get vaultAwsEc2CertX509() {
    return this._vaultAwsEc2CertX509;
  }
  public putVaultAwsEc2CertX509(value: SecretStoreVaultAwsEc2CertX509) {
    this._vaultAwsEc2CertX509.internalValue = value;
  }
  public resetVaultAwsEc2CertX509() {
    this._vaultAwsEc2CertX509.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAwsEc2CertX509Input() {
    return this._vaultAwsEc2CertX509.internalValue;
  }

  // vault_aws_iam - computed: false, optional: true, required: false
  private _vaultAwsIam = new SecretStoreVaultAwsIamOutputReference(this, "vault_aws_iam");
  public get vaultAwsIam() {
    return this._vaultAwsIam;
  }
  public putVaultAwsIam(value: SecretStoreVaultAwsIam) {
    this._vaultAwsIam.internalValue = value;
  }
  public resetVaultAwsIam() {
    this._vaultAwsIam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAwsIamInput() {
    return this._vaultAwsIam.internalValue;
  }

  // vault_aws_iam_cert_ssh - computed: false, optional: true, required: false
  private _vaultAwsIamCertSsh = new SecretStoreVaultAwsIamCertSshOutputReference(this, "vault_aws_iam_cert_ssh");
  public get vaultAwsIamCertSsh() {
    return this._vaultAwsIamCertSsh;
  }
  public putVaultAwsIamCertSsh(value: SecretStoreVaultAwsIamCertSsh) {
    this._vaultAwsIamCertSsh.internalValue = value;
  }
  public resetVaultAwsIamCertSsh() {
    this._vaultAwsIamCertSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAwsIamCertSshInput() {
    return this._vaultAwsIamCertSsh.internalValue;
  }

  // vault_aws_iam_cert_x509 - computed: false, optional: true, required: false
  private _vaultAwsIamCertX509 = new SecretStoreVaultAwsIamCertX509OutputReference(this, "vault_aws_iam_cert_x509");
  public get vaultAwsIamCertX509() {
    return this._vaultAwsIamCertX509;
  }
  public putVaultAwsIamCertX509(value: SecretStoreVaultAwsIamCertX509) {
    this._vaultAwsIamCertX509.internalValue = value;
  }
  public resetVaultAwsIamCertX509() {
    this._vaultAwsIamCertX509.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAwsIamCertX509Input() {
    return this._vaultAwsIamCertX509.internalValue;
  }

  // vault_tls - computed: false, optional: true, required: false
  private _vaultTls = new SecretStoreVaultTlsOutputReference(this, "vault_tls");
  public get vaultTls() {
    return this._vaultTls;
  }
  public putVaultTls(value: SecretStoreVaultTls) {
    this._vaultTls.internalValue = value;
  }
  public resetVaultTls() {
    this._vaultTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTlsInput() {
    return this._vaultTls.internalValue;
  }

  // vault_tls_cert_ssh - computed: false, optional: true, required: false
  private _vaultTlsCertSsh = new SecretStoreVaultTlsCertSshOutputReference(this, "vault_tls_cert_ssh");
  public get vaultTlsCertSsh() {
    return this._vaultTlsCertSsh;
  }
  public putVaultTlsCertSsh(value: SecretStoreVaultTlsCertSsh) {
    this._vaultTlsCertSsh.internalValue = value;
  }
  public resetVaultTlsCertSsh() {
    this._vaultTlsCertSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTlsCertSshInput() {
    return this._vaultTlsCertSsh.internalValue;
  }

  // vault_tls_cert_x509 - computed: false, optional: true, required: false
  private _vaultTlsCertX509 = new SecretStoreVaultTlsCertX509OutputReference(this, "vault_tls_cert_x509");
  public get vaultTlsCertX509() {
    return this._vaultTlsCertX509;
  }
  public putVaultTlsCertX509(value: SecretStoreVaultTlsCertX509) {
    this._vaultTlsCertX509.internalValue = value;
  }
  public resetVaultTlsCertX509() {
    this._vaultTlsCertX509.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTlsCertX509Input() {
    return this._vaultTlsCertX509.internalValue;
  }

  // vault_token - computed: false, optional: true, required: false
  private _vaultToken = new SecretStoreVaultTokenOutputReference(this, "vault_token");
  public get vaultToken() {
    return this._vaultToken;
  }
  public putVaultToken(value: SecretStoreVaultToken) {
    this._vaultToken.internalValue = value;
  }
  public resetVaultToken() {
    this._vaultToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTokenInput() {
    return this._vaultToken.internalValue;
  }

  // vault_token_cert_ssh - computed: false, optional: true, required: false
  private _vaultTokenCertSsh = new SecretStoreVaultTokenCertSshOutputReference(this, "vault_token_cert_ssh");
  public get vaultTokenCertSsh() {
    return this._vaultTokenCertSsh;
  }
  public putVaultTokenCertSsh(value: SecretStoreVaultTokenCertSsh) {
    this._vaultTokenCertSsh.internalValue = value;
  }
  public resetVaultTokenCertSsh() {
    this._vaultTokenCertSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTokenCertSshInput() {
    return this._vaultTokenCertSsh.internalValue;
  }

  // vault_token_cert_x509 - computed: false, optional: true, required: false
  private _vaultTokenCertX509 = new SecretStoreVaultTokenCertX509OutputReference(this, "vault_token_cert_x509");
  public get vaultTokenCertX509() {
    return this._vaultTokenCertX509;
  }
  public putVaultTokenCertX509(value: SecretStoreVaultTokenCertX509) {
    this._vaultTokenCertX509.internalValue = value;
  }
  public resetVaultTokenCertX509() {
    this._vaultTokenCertX509.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTokenCertX509Input() {
    return this._vaultTokenCertX509.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      active_directory_store: secretStoreActiveDirectoryStoreToTerraform(this._activeDirectoryStore.internalValue),
      aws: secretStoreAwsToTerraform(this._aws.internalValue),
      aws_cert_x509: secretStoreAwsCertX509ToTerraform(this._awsCertX509.internalValue),
      azure_store: secretStoreAzureStoreToTerraform(this._azureStore.internalValue),
      cyberark_conjur: secretStoreCyberarkConjurToTerraform(this._cyberarkConjur.internalValue),
      cyberark_pam: secretStoreCyberarkPamToTerraform(this._cyberarkPam.internalValue),
      cyberark_pam_experimental: secretStoreCyberarkPamExperimentalToTerraform(this._cyberarkPamExperimental.internalValue),
      delinea_store: secretStoreDelineaStoreToTerraform(this._delineaStore.internalValue),
      gcp_cert_x_509_store: secretStoreGcpCertX509StoreToTerraform(this._gcpCertX509Store.internalValue),
      gcp_store: secretStoreGcpStoreToTerraform(this._gcpStore.internalValue),
      keyfactor_ssh_store: secretStoreKeyfactorSshStoreToTerraform(this._keyfactorSshStore.internalValue),
      keyfactor_x_509_store: secretStoreKeyfactorX509StoreToTerraform(this._keyfactorX509Store.internalValue),
      strong_vault: secretStoreStrongVaultToTerraform(this._strongVault.internalValue),
      timeouts: secretStoreTimeoutsToTerraform(this._timeouts.internalValue),
      vault_approle: secretStoreVaultApproleToTerraform(this._vaultApprole.internalValue),
      vault_approle_cert_ssh: secretStoreVaultApproleCertSshToTerraform(this._vaultApproleCertSsh.internalValue),
      vault_approle_cert_x509: secretStoreVaultApproleCertX509ToTerraform(this._vaultApproleCertX509.internalValue),
      vault_aws_ec2: secretStoreVaultAwsEc2ToTerraform(this._vaultAwsEc2.internalValue),
      vault_aws_ec2_cert_ssh: secretStoreVaultAwsEc2CertSshToTerraform(this._vaultAwsEc2CertSsh.internalValue),
      vault_aws_ec2_cert_x509: secretStoreVaultAwsEc2CertX509ToTerraform(this._vaultAwsEc2CertX509.internalValue),
      vault_aws_iam: secretStoreVaultAwsIamToTerraform(this._vaultAwsIam.internalValue),
      vault_aws_iam_cert_ssh: secretStoreVaultAwsIamCertSshToTerraform(this._vaultAwsIamCertSsh.internalValue),
      vault_aws_iam_cert_x509: secretStoreVaultAwsIamCertX509ToTerraform(this._vaultAwsIamCertX509.internalValue),
      vault_tls: secretStoreVaultTlsToTerraform(this._vaultTls.internalValue),
      vault_tls_cert_ssh: secretStoreVaultTlsCertSshToTerraform(this._vaultTlsCertSsh.internalValue),
      vault_tls_cert_x509: secretStoreVaultTlsCertX509ToTerraform(this._vaultTlsCertX509.internalValue),
      vault_token: secretStoreVaultTokenToTerraform(this._vaultToken.internalValue),
      vault_token_cert_ssh: secretStoreVaultTokenCertSshToTerraform(this._vaultTokenCertSsh.internalValue),
      vault_token_cert_x509: secretStoreVaultTokenCertX509ToTerraform(this._vaultTokenCertX509.internalValue),
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
      active_directory_store: {
        value: secretStoreActiveDirectoryStoreToHclTerraform(this._activeDirectoryStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreActiveDirectoryStoreList",
      },
      aws: {
        value: secretStoreAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreAwsList",
      },
      aws_cert_x509: {
        value: secretStoreAwsCertX509ToHclTerraform(this._awsCertX509.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreAwsCertX509List",
      },
      azure_store: {
        value: secretStoreAzureStoreToHclTerraform(this._azureStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreAzureStoreList",
      },
      cyberark_conjur: {
        value: secretStoreCyberarkConjurToHclTerraform(this._cyberarkConjur.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreCyberarkConjurList",
      },
      cyberark_pam: {
        value: secretStoreCyberarkPamToHclTerraform(this._cyberarkPam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreCyberarkPamList",
      },
      cyberark_pam_experimental: {
        value: secretStoreCyberarkPamExperimentalToHclTerraform(this._cyberarkPamExperimental.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreCyberarkPamExperimentalList",
      },
      delinea_store: {
        value: secretStoreDelineaStoreToHclTerraform(this._delineaStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreDelineaStoreList",
      },
      gcp_cert_x_509_store: {
        value: secretStoreGcpCertX509StoreToHclTerraform(this._gcpCertX509Store.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreGcpCertX509StoreList",
      },
      gcp_store: {
        value: secretStoreGcpStoreToHclTerraform(this._gcpStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreGcpStoreList",
      },
      keyfactor_ssh_store: {
        value: secretStoreKeyfactorSshStoreToHclTerraform(this._keyfactorSshStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreKeyfactorSshStoreList",
      },
      keyfactor_x_509_store: {
        value: secretStoreKeyfactorX509StoreToHclTerraform(this._keyfactorX509Store.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreKeyfactorX509StoreList",
      },
      strong_vault: {
        value: secretStoreStrongVaultToHclTerraform(this._strongVault.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreStrongVaultList",
      },
      timeouts: {
        value: secretStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecretStoreTimeouts",
      },
      vault_approle: {
        value: secretStoreVaultApproleToHclTerraform(this._vaultApprole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultApproleList",
      },
      vault_approle_cert_ssh: {
        value: secretStoreVaultApproleCertSshToHclTerraform(this._vaultApproleCertSsh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultApproleCertSshList",
      },
      vault_approle_cert_x509: {
        value: secretStoreVaultApproleCertX509ToHclTerraform(this._vaultApproleCertX509.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultApproleCertX509List",
      },
      vault_aws_ec2: {
        value: secretStoreVaultAwsEc2ToHclTerraform(this._vaultAwsEc2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultAwsEc2List",
      },
      vault_aws_ec2_cert_ssh: {
        value: secretStoreVaultAwsEc2CertSshToHclTerraform(this._vaultAwsEc2CertSsh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultAwsEc2CertSshList",
      },
      vault_aws_ec2_cert_x509: {
        value: secretStoreVaultAwsEc2CertX509ToHclTerraform(this._vaultAwsEc2CertX509.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultAwsEc2CertX509List",
      },
      vault_aws_iam: {
        value: secretStoreVaultAwsIamToHclTerraform(this._vaultAwsIam.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultAwsIamList",
      },
      vault_aws_iam_cert_ssh: {
        value: secretStoreVaultAwsIamCertSshToHclTerraform(this._vaultAwsIamCertSsh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultAwsIamCertSshList",
      },
      vault_aws_iam_cert_x509: {
        value: secretStoreVaultAwsIamCertX509ToHclTerraform(this._vaultAwsIamCertX509.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultAwsIamCertX509List",
      },
      vault_tls: {
        value: secretStoreVaultTlsToHclTerraform(this._vaultTls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultTlsList",
      },
      vault_tls_cert_ssh: {
        value: secretStoreVaultTlsCertSshToHclTerraform(this._vaultTlsCertSsh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultTlsCertSshList",
      },
      vault_tls_cert_x509: {
        value: secretStoreVaultTlsCertX509ToHclTerraform(this._vaultTlsCertX509.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultTlsCertX509List",
      },
      vault_token: {
        value: secretStoreVaultTokenToHclTerraform(this._vaultToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultTokenList",
      },
      vault_token_cert_ssh: {
        value: secretStoreVaultTokenCertSshToHclTerraform(this._vaultTokenCertSsh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultTokenCertSshList",
      },
      vault_token_cert_x509: {
        value: secretStoreVaultTokenCertX509ToHclTerraform(this._vaultTokenCertX509.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretStoreVaultTokenCertX509List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
