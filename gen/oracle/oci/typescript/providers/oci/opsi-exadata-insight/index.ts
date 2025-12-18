// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsiExadataInsightConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#enterprise_manager_bridge_id OpsiExadataInsight#enterprise_manager_bridge_id}
  */
  readonly enterpriseManagerBridgeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#enterprise_manager_entity_identifier OpsiExadataInsight#enterprise_manager_entity_identifier}
  */
  readonly enterpriseManagerEntityIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#enterprise_manager_identifier OpsiExadataInsight#enterprise_manager_identifier}
  */
  readonly enterpriseManagerIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}
  */
  readonly entitySource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#exadata_infra_id OpsiExadataInsight#exadata_infra_id}
  */
  readonly exadataInfraId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#id OpsiExadataInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#is_auto_sync_enabled OpsiExadataInsight#is_auto_sync_enabled}
  */
  readonly isAutoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#status OpsiExadataInsight#status}
  */
  readonly status?: string;
  /**
  * member_vm_cluster_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#member_vm_cluster_details OpsiExadataInsight#member_vm_cluster_details}
  */
  readonly memberVmClusterDetails?: OpsiExadataInsightMemberVmClusterDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#timeouts OpsiExadataInsight#timeouts}
  */
  readonly timeouts?: OpsiExadataInsightTimeouts;
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}
  */
  readonly credentialSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#named_credential_id OpsiExadataInsight#named_credential_id}
  */
  readonly namedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}
  */
  readonly walletSecretId?: string;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_source_name: cdktf.stringToTerraform(struct!.credentialSourceName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    named_credential_id: cdktf.stringToTerraform(struct!.namedCredentialId),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    user_name: cdktf.stringToTerraform(struct!.userName),
    wallet_secret_id: cdktf.stringToTerraform(struct!.walletSecretId),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_source_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.namedCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.walletSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialSourceName = this._credentialSourceName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._namedCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedCredentialId = this._namedCredentialId;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._walletSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecretId = this._walletSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialSourceName = undefined;
      this._credentialType = undefined;
      this._namedCredentialId = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._userName = undefined;
      this._walletSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialSourceName = value.credentialSourceName;
      this._credentialType = value.credentialType;
      this._namedCredentialId = value.namedCredentialId;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._userName = value.userName;
      this._walletSecretId = value.walletSecretId;
    }
  }

  // credential_source_name - computed: true, optional: true, required: false
  private _credentialSourceName?: string; 
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }
  public set credentialSourceName(value: string) {
    this._credentialSourceName = value;
  }
  public resetCredentialSourceName() {
    this._credentialSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialSourceNameInput() {
    return this._credentialSourceName;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // named_credential_id - computed: true, optional: true, required: false
  private _namedCredentialId?: string; 
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }
  public set namedCredentialId(value: string) {
    this._namedCredentialId = value;
  }
  public resetNamedCredentialId() {
    this._namedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCredentialIdInput() {
    return this._namedCredentialId;
  }

  // password_secret_id - computed: true, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // wallet_secret_id - computed: true, optional: true, required: false
  private _walletSecretId?: string; 
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
  public set walletSecretId(value: string) {
    this._walletSecretId = value;
  }
  public resetWalletSecretId() {
    this._walletSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretIdInput() {
    return this._walletSecretId;
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#host_name OpsiExadataInsight#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#protocol OpsiExadataInsight#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}
  */
  readonly serviceName?: string;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._port = value.port;
      this._protocol = value.protocol;
      this._serviceName = value.serviceName;
    }
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}
  */
  readonly credentialSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#named_credential_id OpsiExadataInsight#named_credential_id}
  */
  readonly namedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}
  */
  readonly walletSecretId?: string;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_source_name: cdktf.stringToTerraform(struct!.credentialSourceName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    named_credential_id: cdktf.stringToTerraform(struct!.namedCredentialId),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    user_name: cdktf.stringToTerraform(struct!.userName),
    wallet_secret_id: cdktf.stringToTerraform(struct!.walletSecretId),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_source_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.namedCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.walletSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialSourceName = this._credentialSourceName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._namedCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedCredentialId = this._namedCredentialId;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._walletSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecretId = this._walletSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialSourceName = undefined;
      this._credentialType = undefined;
      this._namedCredentialId = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._userName = undefined;
      this._walletSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialSourceName = value.credentialSourceName;
      this._credentialType = value.credentialType;
      this._namedCredentialId = value.namedCredentialId;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._userName = value.userName;
      this._walletSecretId = value.walletSecretId;
    }
  }

  // credential_source_name - computed: true, optional: true, required: false
  private _credentialSourceName?: string; 
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }
  public set credentialSourceName(value: string) {
    this._credentialSourceName = value;
  }
  public resetCredentialSourceName() {
    this._credentialSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialSourceNameInput() {
    return this._credentialSourceName;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // named_credential_id - computed: true, optional: true, required: false
  private _namedCredentialId?: string; 
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }
  public set namedCredentialId(value: string) {
    this._namedCredentialId = value;
  }
  public resetNamedCredentialId() {
    this._namedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCredentialIdInput() {
    return this._namedCredentialId;
  }

  // password_secret_id - computed: true, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // wallet_secret_id - computed: true, optional: true, required: false
  private _walletSecretId?: string; 
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
  public set walletSecretId(value: string) {
    this._walletSecretId = value;
  }
  public resetWalletSecretId() {
    this._walletSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretIdInput() {
    return this._walletSecretId;
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#database_id OpsiExadataInsight#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#database_resource_type OpsiExadataInsight#database_resource_type}
  */
  readonly databaseResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#deployment_type OpsiExadataInsight#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}
  */
  readonly entitySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#is_advanced_features_enabled OpsiExadataInsight#is_advanced_features_enabled}
  */
  readonly isAdvancedFeaturesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#management_agent_id OpsiExadataInsight#management_agent_id}
  */
  readonly managementAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}
  */
  readonly opsiPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#system_tags OpsiExadataInsight#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * connection_credential_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#connection_credential_details OpsiExadataInsight#connection_credential_details}
  */
  readonly connectionCredentialDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails;
  /**
  * connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#connection_details OpsiExadataInsight#connection_details}
  */
  readonly connectionDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails;
  /**
  * credential_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_details OpsiExadataInsight#credential_details}
  */
  readonly credentialDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    database_resource_type: cdktf.stringToTerraform(struct!.databaseResourceType),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    entity_source: cdktf.stringToTerraform(struct!.entitySource),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    is_advanced_features_enabled: cdktf.booleanToTerraform(struct!.isAdvancedFeaturesEnabled),
    management_agent_id: cdktf.stringToTerraform(struct!.managementAgentId),
    opsi_private_endpoint_id: cdktf.stringToTerraform(struct!.opsiPrivateEndpointId),
    system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemTags),
    connection_credential_details: opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToTerraform(struct!.connectionCredentialDetails),
    connection_details: opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToTerraform(struct!.connectionDetails),
    credential_details: opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToTerraform(struct!.credentialDetails),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_resource_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseResourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_source: {
      value: cdktf.stringToHclTerraform(struct!.entitySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_advanced_features_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAdvancedFeaturesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    management_agent_id: {
      value: cdktf.stringToHclTerraform(struct!.managementAgentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsi_private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.opsiPrivateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connection_credential_details: {
      value: opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsToHclTerraform(struct!.connectionCredentialDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsList",
    },
    connection_details: {
      value: opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsToHclTerraform(struct!.connectionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsList",
    },
    credential_details: {
      value: opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsToHclTerraform(struct!.credentialDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._databaseResourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResourceType = this._databaseResourceType;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._entitySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySource = this._entitySource;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._isAdvancedFeaturesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAdvancedFeaturesEnabled = this._isAdvancedFeaturesEnabled;
    }
    if (this._managementAgentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAgentId = this._managementAgentId;
    }
    if (this._opsiPrivateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsiPrivateEndpointId = this._opsiPrivateEndpointId;
    }
    if (this._systemTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemTags = this._systemTags;
    }
    if (this._connectionCredentialDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredentialDetails = this._connectionCredentialDetails?.internalValue;
    }
    if (this._connectionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDetails = this._connectionDetails?.internalValue;
    }
    if (this._credentialDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialDetails = this._credentialDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._databaseId = undefined;
      this._databaseResourceType = undefined;
      this._definedTags = undefined;
      this._deploymentType = undefined;
      this._entitySource = undefined;
      this._freeformTags = undefined;
      this._isAdvancedFeaturesEnabled = undefined;
      this._managementAgentId = undefined;
      this._opsiPrivateEndpointId = undefined;
      this._systemTags = undefined;
      this._connectionCredentialDetails.internalValue = undefined;
      this._connectionDetails.internalValue = undefined;
      this._credentialDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._databaseId = value.databaseId;
      this._databaseResourceType = value.databaseResourceType;
      this._definedTags = value.definedTags;
      this._deploymentType = value.deploymentType;
      this._entitySource = value.entitySource;
      this._freeformTags = value.freeformTags;
      this._isAdvancedFeaturesEnabled = value.isAdvancedFeaturesEnabled;
      this._managementAgentId = value.managementAgentId;
      this._opsiPrivateEndpointId = value.opsiPrivateEndpointId;
      this._systemTags = value.systemTags;
      this._connectionCredentialDetails.internalValue = value.connectionCredentialDetails;
      this._connectionDetails.internalValue = value.connectionDetails;
      this._credentialDetails.internalValue = value.credentialDetails;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // database_id - computed: true, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_resource_type - computed: true, optional: true, required: false
  private _databaseResourceType?: string; 
  public get databaseResourceType() {
    return this.getStringAttribute('database_resource_type');
  }
  public set databaseResourceType(value: string) {
    this._databaseResourceType = value;
  }
  public resetDatabaseResourceType() {
    this._databaseResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceTypeInput() {
    return this._databaseResourceType;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // entity_source - computed: true, optional: true, required: false
  private _entitySource?: string; 
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }
  public set entitySource(value: string) {
    this._entitySource = value;
  }
  public resetEntitySource() {
    this._entitySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySourceInput() {
    return this._entitySource;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // is_advanced_features_enabled - computed: true, optional: true, required: false
  private _isAdvancedFeaturesEnabled?: boolean | cdktf.IResolvable; 
  public get isAdvancedFeaturesEnabled() {
    return this.getBooleanAttribute('is_advanced_features_enabled');
  }
  public set isAdvancedFeaturesEnabled(value: boolean | cdktf.IResolvable) {
    this._isAdvancedFeaturesEnabled = value;
  }
  public resetIsAdvancedFeaturesEnabled() {
    this._isAdvancedFeaturesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdvancedFeaturesEnabledInput() {
    return this._isAdvancedFeaturesEnabled;
  }

  // management_agent_id - computed: true, optional: true, required: false
  private _managementAgentId?: string; 
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }
  public set managementAgentId(value: string) {
    this._managementAgentId = value;
  }
  public resetManagementAgentId() {
    this._managementAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentIdInput() {
    return this._managementAgentId;
  }

  // opsi_private_endpoint_id - computed: true, optional: true, required: false
  private _opsiPrivateEndpointId?: string; 
  public get opsiPrivateEndpointId() {
    return this.getStringAttribute('opsi_private_endpoint_id');
  }
  public set opsiPrivateEndpointId(value: string) {
    this._opsiPrivateEndpointId = value;
  }
  public resetOpsiPrivateEndpointId() {
    this._opsiPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiPrivateEndpointIdInput() {
    return this._opsiPrivateEndpointId;
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // connection_credential_details - computed: false, optional: true, required: false
  private _connectionCredentialDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetailsOutputReference(this, "connection_credential_details");
  public get connectionCredentialDetails() {
    return this._connectionCredentialDetails;
  }
  public putConnectionCredentialDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionCredentialDetails) {
    this._connectionCredentialDetails.internalValue = value;
  }
  public resetConnectionCredentialDetails() {
    this._connectionCredentialDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialDetailsInput() {
    return this._connectionCredentialDetails.internalValue;
  }

  // connection_details - computed: false, optional: true, required: false
  private _connectionDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsConnectionDetails) {
    this._connectionDetails.internalValue = value;
  }
  public resetConnectionDetails() {
    this._connectionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
  }

  // credential_details - computed: false, optional: true, required: false
  private _credentialDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetailsOutputReference(this, "credential_details");
  public get credentialDetails() {
    return this._credentialDetails;
  }
  public putCredentialDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsCredentialDetails) {
    this._credentialDetails.internalValue = value;
  }
  public resetCredentialDetails() {
    this._credentialDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDetailsInput() {
    return this._credentialDetails.internalValue;
  }
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsList extends cdktf.ComplexList {
  public internalValue? : OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails[] | cdktf.IResolvable

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
  public get(index: number): OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsOutputReference {
    return new OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}
  */
  readonly credentialSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#named_credential_id OpsiExadataInsight#named_credential_id}
  */
  readonly namedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}
  */
  readonly walletSecretId?: string;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_source_name: cdktf.stringToTerraform(struct!.credentialSourceName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    named_credential_id: cdktf.stringToTerraform(struct!.namedCredentialId),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    user_name: cdktf.stringToTerraform(struct!.userName),
    wallet_secret_id: cdktf.stringToTerraform(struct!.walletSecretId),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_source_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.namedCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.walletSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialSourceName = this._credentialSourceName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._namedCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedCredentialId = this._namedCredentialId;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._walletSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecretId = this._walletSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialSourceName = undefined;
      this._credentialType = undefined;
      this._namedCredentialId = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._userName = undefined;
      this._walletSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialSourceName = value.credentialSourceName;
      this._credentialType = value.credentialType;
      this._namedCredentialId = value.namedCredentialId;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._userName = value.userName;
      this._walletSecretId = value.walletSecretId;
    }
  }

  // credential_source_name - computed: true, optional: true, required: false
  private _credentialSourceName?: string; 
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }
  public set credentialSourceName(value: string) {
    this._credentialSourceName = value;
  }
  public resetCredentialSourceName() {
    this._credentialSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialSourceNameInput() {
    return this._credentialSourceName;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // named_credential_id - computed: true, optional: true, required: false
  private _namedCredentialId?: string; 
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }
  public set namedCredentialId(value: string) {
    this._namedCredentialId = value;
  }
  public resetNamedCredentialId() {
    this._namedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCredentialIdInput() {
    return this._namedCredentialId;
  }

  // password_secret_id - computed: true, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // wallet_secret_id - computed: true, optional: true, required: false
  private _walletSecretId?: string; 
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
  public set walletSecretId(value: string) {
    this._walletSecretId = value;
  }
  public resetWalletSecretId() {
    this._walletSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretIdInput() {
    return this._walletSecretId;
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#host_ip OpsiExadataInsight#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}
  */
  readonly port?: number;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostIp = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostIp = value.hostIp;
      this._port = value.port;
    }
  }

  // host_ip - computed: true, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList extends cdktf.ComplexList {
  public internalValue? : OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts[] | cdktf.IResolvable

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
  public get(index: number): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference {
    return new OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#host_name OpsiExadataInsight#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#port OpsiExadataInsight#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#protocol OpsiExadataInsight#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}
  */
  readonly serviceName?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#hosts OpsiExadataInsight#hosts}
  */
  readonly hosts?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts[] | cdktf.IResolvable;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    hosts: cdktf.listMapper(opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToTerraform, true)(struct!.hosts),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsToHclTerraform, true)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._serviceName = undefined;
      this._hosts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._port = value.port;
      this._protocol = value.protocol;
      this._serviceName = value.serviceName;
      this._hosts.internalValue = value.hosts;
    }
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_source_name OpsiExadataInsight#credential_source_name}
  */
  readonly credentialSourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_type OpsiExadataInsight#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#named_credential_id OpsiExadataInsight#named_credential_id}
  */
  readonly namedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#password_secret_id OpsiExadataInsight#password_secret_id}
  */
  readonly passwordSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#role OpsiExadataInsight#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#user_name OpsiExadataInsight#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#wallet_secret_id OpsiExadataInsight#wallet_secret_id}
  */
  readonly walletSecretId?: string;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_source_name: cdktf.stringToTerraform(struct!.credentialSourceName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    named_credential_id: cdktf.stringToTerraform(struct!.namedCredentialId),
    password_secret_id: cdktf.stringToTerraform(struct!.passwordSecretId),
    role: cdktf.stringToTerraform(struct!.role),
    user_name: cdktf.stringToTerraform(struct!.userName),
    wallet_secret_id: cdktf.stringToTerraform(struct!.walletSecretId),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference | OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_source_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    named_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.namedCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wallet_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.walletSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialSourceName = this._credentialSourceName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._namedCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namedCredentialId = this._namedCredentialId;
    }
    if (this._passwordSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretId = this._passwordSecretId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._walletSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.walletSecretId = this._walletSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialSourceName = undefined;
      this._credentialType = undefined;
      this._namedCredentialId = undefined;
      this._passwordSecretId = undefined;
      this._role = undefined;
      this._userName = undefined;
      this._walletSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialSourceName = value.credentialSourceName;
      this._credentialType = value.credentialType;
      this._namedCredentialId = value.namedCredentialId;
      this._passwordSecretId = value.passwordSecretId;
      this._role = value.role;
      this._userName = value.userName;
      this._walletSecretId = value.walletSecretId;
    }
  }

  // credential_source_name - computed: true, optional: true, required: false
  private _credentialSourceName?: string; 
  public get credentialSourceName() {
    return this.getStringAttribute('credential_source_name');
  }
  public set credentialSourceName(value: string) {
    this._credentialSourceName = value;
  }
  public resetCredentialSourceName() {
    this._credentialSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialSourceNameInput() {
    return this._credentialSourceName;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // named_credential_id - computed: true, optional: true, required: false
  private _namedCredentialId?: string; 
  public get namedCredentialId() {
    return this.getStringAttribute('named_credential_id');
  }
  public set namedCredentialId(value: string) {
    this._namedCredentialId = value;
  }
  public resetNamedCredentialId() {
    this._namedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCredentialIdInput() {
    return this._namedCredentialId;
  }

  // password_secret_id - computed: true, optional: true, required: false
  private _passwordSecretId?: string; 
  public get passwordSecretId() {
    return this.getStringAttribute('password_secret_id');
  }
  public set passwordSecretId(value: string) {
    this._passwordSecretId = value;
  }
  public resetPasswordSecretId() {
    this._passwordSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretIdInput() {
    return this._passwordSecretId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // wallet_secret_id - computed: true, optional: true, required: false
  private _walletSecretId?: string; 
  public get walletSecretId() {
    return this.getStringAttribute('wallet_secret_id');
  }
  public set walletSecretId(value: string) {
    this._walletSecretId = value;
  }
  public resetWalletSecretId() {
    this._walletSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walletSecretIdInput() {
    return this._walletSecretId;
  }
}
export interface OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#database_id OpsiExadataInsight#database_id}
  */
  readonly databaseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#database_resource_type OpsiExadataInsight#database_resource_type}
  */
  readonly databaseResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}
  */
  readonly dbmPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#defined_tags OpsiExadataInsight#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#deployment_type OpsiExadataInsight#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#entity_source OpsiExadataInsight#entity_source}
  */
  readonly entitySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#freeform_tags OpsiExadataInsight#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#management_agent_id OpsiExadataInsight#management_agent_id}
  */
  readonly managementAgentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}
  */
  readonly opsiPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#service_name OpsiExadataInsight#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#system_tags OpsiExadataInsight#system_tags}
  */
  readonly systemTags?: { [key: string]: string };
  /**
  * connection_credential_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#connection_credential_details OpsiExadataInsight#connection_credential_details}
  */
  readonly connectionCredentialDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails;
  /**
  * connection_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#connection_details OpsiExadataInsight#connection_details}
  */
  readonly connectionDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails;
  /**
  * credential_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#credential_details OpsiExadataInsight#credential_details}
  */
  readonly credentialDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails;
}

export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    database_resource_type: cdktf.stringToTerraform(struct!.databaseResourceType),
    dbm_private_endpoint_id: cdktf.stringToTerraform(struct!.dbmPrivateEndpointId),
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    entity_source: cdktf.stringToTerraform(struct!.entitySource),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    management_agent_id: cdktf.stringToTerraform(struct!.managementAgentId),
    opsi_private_endpoint_id: cdktf.stringToTerraform(struct!.opsiPrivateEndpointId),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    system_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemTags),
    connection_credential_details: opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToTerraform(struct!.connectionCredentialDetails),
    connection_details: opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToTerraform(struct!.connectionDetails),
    credential_details: opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToTerraform(struct!.credentialDetails),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_resource_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseResourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbm_private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.dbmPrivateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_source: {
      value: cdktf.stringToHclTerraform(struct!.entitySource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    management_agent_id: {
      value: cdktf.stringToHclTerraform(struct!.managementAgentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsi_private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.opsiPrivateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connection_credential_details: {
      value: opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsToHclTerraform(struct!.connectionCredentialDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsList",
    },
    connection_details: {
      value: opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsToHclTerraform(struct!.connectionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsList",
    },
    credential_details: {
      value: opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsToHclTerraform(struct!.credentialDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._databaseResourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResourceType = this._databaseResourceType;
    }
    if (this._dbmPrivateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbmPrivateEndpointId = this._dbmPrivateEndpointId;
    }
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._entitySource !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySource = this._entitySource;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._managementAgentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementAgentId = this._managementAgentId;
    }
    if (this._opsiPrivateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsiPrivateEndpointId = this._opsiPrivateEndpointId;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._systemTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemTags = this._systemTags;
    }
    if (this._connectionCredentialDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredentialDetails = this._connectionCredentialDetails?.internalValue;
    }
    if (this._connectionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDetails = this._connectionDetails?.internalValue;
    }
    if (this._credentialDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialDetails = this._credentialDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._databaseId = undefined;
      this._databaseResourceType = undefined;
      this._dbmPrivateEndpointId = undefined;
      this._definedTags = undefined;
      this._deploymentType = undefined;
      this._entitySource = undefined;
      this._freeformTags = undefined;
      this._managementAgentId = undefined;
      this._opsiPrivateEndpointId = undefined;
      this._serviceName = undefined;
      this._systemTags = undefined;
      this._connectionCredentialDetails.internalValue = undefined;
      this._connectionDetails.internalValue = undefined;
      this._credentialDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._databaseId = value.databaseId;
      this._databaseResourceType = value.databaseResourceType;
      this._dbmPrivateEndpointId = value.dbmPrivateEndpointId;
      this._definedTags = value.definedTags;
      this._deploymentType = value.deploymentType;
      this._entitySource = value.entitySource;
      this._freeformTags = value.freeformTags;
      this._managementAgentId = value.managementAgentId;
      this._opsiPrivateEndpointId = value.opsiPrivateEndpointId;
      this._serviceName = value.serviceName;
      this._systemTags = value.systemTags;
      this._connectionCredentialDetails.internalValue = value.connectionCredentialDetails;
      this._connectionDetails.internalValue = value.connectionDetails;
      this._credentialDetails.internalValue = value.credentialDetails;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // database_id - computed: true, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_resource_type - computed: true, optional: true, required: false
  private _databaseResourceType?: string; 
  public get databaseResourceType() {
    return this.getStringAttribute('database_resource_type');
  }
  public set databaseResourceType(value: string) {
    this._databaseResourceType = value;
  }
  public resetDatabaseResourceType() {
    this._databaseResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourceTypeInput() {
    return this._databaseResourceType;
  }

  // dbm_private_endpoint_id - computed: true, optional: true, required: false
  private _dbmPrivateEndpointId?: string; 
  public get dbmPrivateEndpointId() {
    return this.getStringAttribute('dbm_private_endpoint_id');
  }
  public set dbmPrivateEndpointId(value: string) {
    this._dbmPrivateEndpointId = value;
  }
  public resetDbmPrivateEndpointId() {
    this._dbmPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbmPrivateEndpointIdInput() {
    return this._dbmPrivateEndpointId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // entity_source - computed: true, optional: true, required: false
  private _entitySource?: string; 
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }
  public set entitySource(value: string) {
    this._entitySource = value;
  }
  public resetEntitySource() {
    this._entitySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySourceInput() {
    return this._entitySource;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // management_agent_id - computed: true, optional: true, required: false
  private _managementAgentId?: string; 
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }
  public set managementAgentId(value: string) {
    this._managementAgentId = value;
  }
  public resetManagementAgentId() {
    this._managementAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAgentIdInput() {
    return this._managementAgentId;
  }

  // opsi_private_endpoint_id - computed: true, optional: true, required: false
  private _opsiPrivateEndpointId?: string; 
  public get opsiPrivateEndpointId() {
    return this.getStringAttribute('opsi_private_endpoint_id');
  }
  public set opsiPrivateEndpointId(value: string) {
    this._opsiPrivateEndpointId = value;
  }
  public resetOpsiPrivateEndpointId() {
    this._opsiPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiPrivateEndpointIdInput() {
    return this._opsiPrivateEndpointId;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // system_tags - computed: true, optional: true, required: false
  private _systemTags?: { [key: string]: string }; 
  public get systemTags() {
    return this.getStringMapAttribute('system_tags');
  }
  public set systemTags(value: { [key: string]: string }) {
    this._systemTags = value;
  }
  public resetSystemTags() {
    this._systemTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTagsInput() {
    return this._systemTags;
  }

  // connection_credential_details - computed: false, optional: true, required: false
  private _connectionCredentialDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetailsOutputReference(this, "connection_credential_details");
  public get connectionCredentialDetails() {
    return this._connectionCredentialDetails;
  }
  public putConnectionCredentialDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionCredentialDetails) {
    this._connectionCredentialDetails.internalValue = value;
  }
  public resetConnectionCredentialDetails() {
    this._connectionCredentialDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialDetailsInput() {
    return this._connectionCredentialDetails.internalValue;
  }

  // connection_details - computed: false, optional: true, required: false
  private _connectionDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetailsOutputReference(this, "connection_details");
  public get connectionDetails() {
    return this._connectionDetails;
  }
  public putConnectionDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsConnectionDetails) {
    this._connectionDetails.internalValue = value;
  }
  public resetConnectionDetails() {
    this._connectionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDetailsInput() {
    return this._connectionDetails.internalValue;
  }

  // credential_details - computed: false, optional: true, required: false
  private _credentialDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetailsOutputReference(this, "credential_details");
  public get credentialDetails() {
    return this._credentialDetails;
  }
  public putCredentialDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsCredentialDetails) {
    this._credentialDetails.internalValue = value;
  }
  public resetCredentialDetails() {
    this._credentialDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDetailsInput() {
    return this._credentialDetails.internalValue;
  }
}

export class OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList extends cdktf.ComplexList {
  public internalValue? : OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails[] | cdktf.IResolvable

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
  public get(index: number): OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference {
    return new OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiExadataInsightMemberVmClusterDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#compartment_id OpsiExadataInsight#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#dbm_private_endpoint_id OpsiExadataInsight#dbm_private_endpoint_id}
  */
  readonly dbmPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#opsi_private_endpoint_id OpsiExadataInsight#opsi_private_endpoint_id}
  */
  readonly opsiPrivateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#vm_cluster_type OpsiExadataInsight#vm_cluster_type}
  */
  readonly vmClusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#vmcluster_id OpsiExadataInsight#vmcluster_id}
  */
  readonly vmclusterId?: string;
  /**
  * member_autonomous_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#member_autonomous_details OpsiExadataInsight#member_autonomous_details}
  */
  readonly memberAutonomousDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails[] | cdktf.IResolvable;
  /**
  * member_database_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#member_database_details OpsiExadataInsight#member_database_details}
  */
  readonly memberDatabaseDetails?: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails[] | cdktf.IResolvable;
}

export function opsiExadataInsightMemberVmClusterDetailsToTerraform(struct?: OpsiExadataInsightMemberVmClusterDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    dbm_private_endpoint_id: cdktf.stringToTerraform(struct!.dbmPrivateEndpointId),
    opsi_private_endpoint_id: cdktf.stringToTerraform(struct!.opsiPrivateEndpointId),
    vm_cluster_type: cdktf.stringToTerraform(struct!.vmClusterType),
    vmcluster_id: cdktf.stringToTerraform(struct!.vmclusterId),
    member_autonomous_details: cdktf.listMapper(opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsToTerraform, true)(struct!.memberAutonomousDetails),
    member_database_details: cdktf.listMapper(opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsToTerraform, true)(struct!.memberDatabaseDetails),
  }
}


export function opsiExadataInsightMemberVmClusterDetailsToHclTerraform(struct?: OpsiExadataInsightMemberVmClusterDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dbm_private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.dbmPrivateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opsi_private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.opsiPrivateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.vmClusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmcluster_id: {
      value: cdktf.stringToHclTerraform(struct!.vmclusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_autonomous_details: {
      value: cdktf.listMapperHcl(opsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsToHclTerraform, true)(struct!.memberAutonomousDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsList",
    },
    member_database_details: {
      value: cdktf.listMapperHcl(opsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsToHclTerraform, true)(struct!.memberDatabaseDetails),
      isBlock: true,
      type: "list",
      storageClassType: "OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpsiExadataInsightMemberVmClusterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpsiExadataInsightMemberVmClusterDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._dbmPrivateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbmPrivateEndpointId = this._dbmPrivateEndpointId;
    }
    if (this._opsiPrivateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsiPrivateEndpointId = this._opsiPrivateEndpointId;
    }
    if (this._vmClusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmClusterType = this._vmClusterType;
    }
    if (this._vmclusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmclusterId = this._vmclusterId;
    }
    if (this._memberAutonomousDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberAutonomousDetails = this._memberAutonomousDetails?.internalValue;
    }
    if (this._memberDatabaseDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberDatabaseDetails = this._memberDatabaseDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpsiExadataInsightMemberVmClusterDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._dbmPrivateEndpointId = undefined;
      this._opsiPrivateEndpointId = undefined;
      this._vmClusterType = undefined;
      this._vmclusterId = undefined;
      this._memberAutonomousDetails.internalValue = undefined;
      this._memberDatabaseDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._dbmPrivateEndpointId = value.dbmPrivateEndpointId;
      this._opsiPrivateEndpointId = value.opsiPrivateEndpointId;
      this._vmClusterType = value.vmClusterType;
      this._vmclusterId = value.vmclusterId;
      this._memberAutonomousDetails.internalValue = value.memberAutonomousDetails;
      this._memberDatabaseDetails.internalValue = value.memberDatabaseDetails;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // dbm_private_endpoint_id - computed: true, optional: true, required: false
  private _dbmPrivateEndpointId?: string; 
  public get dbmPrivateEndpointId() {
    return this.getStringAttribute('dbm_private_endpoint_id');
  }
  public set dbmPrivateEndpointId(value: string) {
    this._dbmPrivateEndpointId = value;
  }
  public resetDbmPrivateEndpointId() {
    this._dbmPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbmPrivateEndpointIdInput() {
    return this._dbmPrivateEndpointId;
  }

  // opsi_private_endpoint_id - computed: true, optional: true, required: false
  private _opsiPrivateEndpointId?: string; 
  public get opsiPrivateEndpointId() {
    return this.getStringAttribute('opsi_private_endpoint_id');
  }
  public set opsiPrivateEndpointId(value: string) {
    this._opsiPrivateEndpointId = value;
  }
  public resetOpsiPrivateEndpointId() {
    this._opsiPrivateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsiPrivateEndpointIdInput() {
    return this._opsiPrivateEndpointId;
  }

  // vm_cluster_type - computed: true, optional: true, required: false
  private _vmClusterType?: string; 
  public get vmClusterType() {
    return this.getStringAttribute('vm_cluster_type');
  }
  public set vmClusterType(value: string) {
    this._vmClusterType = value;
  }
  public resetVmClusterType() {
    this._vmClusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterTypeInput() {
    return this._vmClusterType;
  }

  // vmcluster_id - computed: true, optional: true, required: false
  private _vmclusterId?: string; 
  public get vmclusterId() {
    return this.getStringAttribute('vmcluster_id');
  }
  public set vmclusterId(value: string) {
    this._vmclusterId = value;
  }
  public resetVmclusterId() {
    this._vmclusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmclusterIdInput() {
    return this._vmclusterId;
  }

  // member_autonomous_details - computed: false, optional: true, required: false
  private _memberAutonomousDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetailsList(this, "member_autonomous_details", false);
  public get memberAutonomousDetails() {
    return this._memberAutonomousDetails;
  }
  public putMemberAutonomousDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberAutonomousDetails[] | cdktf.IResolvable) {
    this._memberAutonomousDetails.internalValue = value;
  }
  public resetMemberAutonomousDetails() {
    this._memberAutonomousDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAutonomousDetailsInput() {
    return this._memberAutonomousDetails.internalValue;
  }

  // member_database_details - computed: false, optional: true, required: false
  private _memberDatabaseDetails = new OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetailsList(this, "member_database_details", false);
  public get memberDatabaseDetails() {
    return this._memberDatabaseDetails;
  }
  public putMemberDatabaseDetails(value: OpsiExadataInsightMemberVmClusterDetailsMemberDatabaseDetails[] | cdktf.IResolvable) {
    this._memberDatabaseDetails.internalValue = value;
  }
  public resetMemberDatabaseDetails() {
    this._memberDatabaseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDatabaseDetailsInput() {
    return this._memberDatabaseDetails.internalValue;
  }
}

export class OpsiExadataInsightMemberVmClusterDetailsList extends cdktf.ComplexList {
  public internalValue? : OpsiExadataInsightMemberVmClusterDetails[] | cdktf.IResolvable

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
  public get(index: number): OpsiExadataInsightMemberVmClusterDetailsOutputReference {
    return new OpsiExadataInsightMemberVmClusterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpsiExadataInsightTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#create OpsiExadataInsight#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#delete OpsiExadataInsight#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#update OpsiExadataInsight#update}
  */
  readonly update?: string;
}

export function opsiExadataInsightTimeoutsToTerraform(struct?: OpsiExadataInsightTimeouts | cdktf.IResolvable): any {
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


export function opsiExadataInsightTimeoutsToHclTerraform(struct?: OpsiExadataInsightTimeouts | cdktf.IResolvable): any {
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

export class OpsiExadataInsightTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpsiExadataInsightTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpsiExadataInsightTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight oci_opsi_exadata_insight}
*/
export class OpsiExadataInsight extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_exadata_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsiExadataInsight resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsiExadataInsight to import
  * @param importFromId The id of the existing OpsiExadataInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsiExadataInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_exadata_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/opsi_exadata_insight oci_opsi_exadata_insight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsiExadataInsightConfig
  */
  public constructor(scope: Construct, id: string, config: OpsiExadataInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_exadata_insight',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._enterpriseManagerBridgeId = config.enterpriseManagerBridgeId;
    this._enterpriseManagerEntityIdentifier = config.enterpriseManagerEntityIdentifier;
    this._enterpriseManagerIdentifier = config.enterpriseManagerIdentifier;
    this._entitySource = config.entitySource;
    this._exadataInfraId = config.exadataInfraId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoSyncEnabled = config.isAutoSyncEnabled;
    this._status = config.status;
    this._memberVmClusterDetails.internalValue = config.memberVmClusterDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // enterprise_manager_bridge_id - computed: true, optional: true, required: false
  private _enterpriseManagerBridgeId?: string; 
  public get enterpriseManagerBridgeId() {
    return this.getStringAttribute('enterprise_manager_bridge_id');
  }
  public set enterpriseManagerBridgeId(value: string) {
    this._enterpriseManagerBridgeId = value;
  }
  public resetEnterpriseManagerBridgeId() {
    this._enterpriseManagerBridgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerBridgeIdInput() {
    return this._enterpriseManagerBridgeId;
  }

  // enterprise_manager_entity_display_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityDisplayName() {
    return this.getStringAttribute('enterprise_manager_entity_display_name');
  }

  // enterprise_manager_entity_identifier - computed: true, optional: true, required: false
  private _enterpriseManagerEntityIdentifier?: string; 
  public get enterpriseManagerEntityIdentifier() {
    return this.getStringAttribute('enterprise_manager_entity_identifier');
  }
  public set enterpriseManagerEntityIdentifier(value: string) {
    this._enterpriseManagerEntityIdentifier = value;
  }
  public resetEnterpriseManagerEntityIdentifier() {
    this._enterpriseManagerEntityIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerEntityIdentifierInput() {
    return this._enterpriseManagerEntityIdentifier;
  }

  // enterprise_manager_entity_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityName() {
    return this.getStringAttribute('enterprise_manager_entity_name');
  }

  // enterprise_manager_entity_type - computed: true, optional: false, required: false
  public get enterpriseManagerEntityType() {
    return this.getStringAttribute('enterprise_manager_entity_type');
  }

  // enterprise_manager_identifier - computed: true, optional: true, required: false
  private _enterpriseManagerIdentifier?: string; 
  public get enterpriseManagerIdentifier() {
    return this.getStringAttribute('enterprise_manager_identifier');
  }
  public set enterpriseManagerIdentifier(value: string) {
    this._enterpriseManagerIdentifier = value;
  }
  public resetEnterpriseManagerIdentifier() {
    this._enterpriseManagerIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseManagerIdentifierInput() {
    return this._enterpriseManagerIdentifier;
  }

  // entity_source - computed: false, optional: false, required: true
  private _entitySource?: string; 
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }
  public set entitySource(value: string) {
    this._entitySource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySourceInput() {
    return this._entitySource;
  }

  // exadata_display_name - computed: true, optional: false, required: false
  public get exadataDisplayName() {
    return this.getStringAttribute('exadata_display_name');
  }

  // exadata_infra_id - computed: true, optional: true, required: false
  private _exadataInfraId?: string; 
  public get exadataInfraId() {
    return this.getStringAttribute('exadata_infra_id');
  }
  public set exadataInfraId(value: string) {
    this._exadataInfraId = value;
  }
  public resetExadataInfraId() {
    this._exadataInfraId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfraIdInput() {
    return this._exadataInfraId;
  }

  // exadata_infra_resource_type - computed: true, optional: false, required: false
  public get exadataInfraResourceType() {
    return this.getStringAttribute('exadata_infra_resource_type');
  }

  // exadata_name - computed: true, optional: false, required: false
  public get exadataName() {
    return this.getStringAttribute('exadata_name');
  }

  // exadata_rack_type - computed: true, optional: false, required: false
  public get exadataRackType() {
    return this.getStringAttribute('exadata_rack_type');
  }

  // exadata_shape - computed: true, optional: false, required: false
  public get exadataShape() {
    return this.getStringAttribute('exadata_shape');
  }

  // exadata_type - computed: true, optional: false, required: false
  public get exadataType() {
    return this.getStringAttribute('exadata_type');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_auto_sync_enabled - computed: true, optional: true, required: false
  private _isAutoSyncEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoSyncEnabled() {
    return this.getBooleanAttribute('is_auto_sync_enabled');
  }
  public set isAutoSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoSyncEnabled = value;
  }
  public resetIsAutoSyncEnabled() {
    this._isAutoSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoSyncEnabledInput() {
    return this._isAutoSyncEnabled;
  }

  // is_virtualized_exadata - computed: true, optional: false, required: false
  public get isVirtualizedExadata() {
    return this.getBooleanAttribute('is_virtualized_exadata');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // member_vm_cluster_details - computed: false, optional: true, required: false
  private _memberVmClusterDetails = new OpsiExadataInsightMemberVmClusterDetailsList(this, "member_vm_cluster_details", false);
  public get memberVmClusterDetails() {
    return this._memberVmClusterDetails;
  }
  public putMemberVmClusterDetails(value: OpsiExadataInsightMemberVmClusterDetails[] | cdktf.IResolvable) {
    this._memberVmClusterDetails.internalValue = value;
  }
  public resetMemberVmClusterDetails() {
    this._memberVmClusterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberVmClusterDetailsInput() {
    return this._memberVmClusterDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpsiExadataInsightTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpsiExadataInsightTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      enterprise_manager_bridge_id: cdktf.stringToTerraform(this._enterpriseManagerBridgeId),
      enterprise_manager_entity_identifier: cdktf.stringToTerraform(this._enterpriseManagerEntityIdentifier),
      enterprise_manager_identifier: cdktf.stringToTerraform(this._enterpriseManagerIdentifier),
      entity_source: cdktf.stringToTerraform(this._entitySource),
      exadata_infra_id: cdktf.stringToTerraform(this._exadataInfraId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_sync_enabled: cdktf.booleanToTerraform(this._isAutoSyncEnabled),
      status: cdktf.stringToTerraform(this._status),
      member_vm_cluster_details: cdktf.listMapper(opsiExadataInsightMemberVmClusterDetailsToTerraform, true)(this._memberVmClusterDetails.internalValue),
      timeouts: opsiExadataInsightTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enterprise_manager_bridge_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseManagerBridgeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_manager_entity_identifier: {
        value: cdktf.stringToHclTerraform(this._enterpriseManagerEntityIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_manager_identifier: {
        value: cdktf.stringToHclTerraform(this._enterpriseManagerIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_source: {
        value: cdktf.stringToHclTerraform(this._entitySource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exadata_infra_id: {
        value: cdktf.stringToHclTerraform(this._exadataInfraId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_vm_cluster_details: {
        value: cdktf.listMapperHcl(opsiExadataInsightMemberVmClusterDetailsToHclTerraform, true)(this._memberVmClusterDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpsiExadataInsightMemberVmClusterDetailsList",
      },
      timeouts: {
        value: opsiExadataInsightTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpsiExadataInsightTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
