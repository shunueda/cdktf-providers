// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciExternalVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Updateable) If true, all proxy operations on keys belonging to the vault are blocked. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#blocked OciExternalVault#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * Client ID of the OCI KMS application as registered on third-party IDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#client_application_id OciExternalVault#client_application_id}
  */
  readonly clientApplicationId: string;
  /**
  * (Updateable) CipherTrust OCI connection ID. Specify either one of the tenancy inputs (tenancy_ocid, tenancy_name, tenancy_id) or connection_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#connection_id OciExternalVault#connection_id}
  */
  readonly connectionId?: string;
  /**
  * (Updateable) Hostname for the OCI external vault endpoint URL. Default value is localhost. Default is localhost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#endpoint_url_hostname OciExternalVault#endpoint_url_hostname}
  */
  readonly endpointUrlHostname?: string;
  /**
  * (Updateable) Port-Number for the OCI external vault endpoint URL. Default is 433
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#endpoint_url_port OciExternalVault#endpoint_url_port}
  */
  readonly endpointUrlPort?: number;
  /**
  * (Updateable) Terraform resource ID of the issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#issuer_id OciExternalVault#issuer_id}
  */
  readonly issuerId: string;
  /**
  * Hsm-luna partition ID. Required if 'hsm-luna' is provided as source_key_tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#partition_id OciExternalVault#partition_id}
  */
  readonly partitionId?: string;
  /**
  * OCI policy for the vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#policy OciExternalVault#policy}
  */
  readonly policy?: string;
  /**
  * Path to a file containing the OCI policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#policy_file OciExternalVault#policy_file}
  */
  readonly policyFile?: string;
  /**
  * Define source key tier for the vault. Only 'local' and 'hsm-luna' source key-tiers are supported for vaults. If provided the vault is locked to support keys only of the specified source key-tier. If not supplied keys can be created using any of the allowed source key-tiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#source_key_tier OciExternalVault#source_key_tier}
  */
  readonly sourceKeyTier?: string;
  /**
  * Tenancy resource ID. Specify either one of the tenancy inputs (tenancy_ocid, tenancy_name, tenancy_id) or connection_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#tenancy_id OciExternalVault#tenancy_id}
  */
  readonly tenancyId?: string;
  /**
  * Tenancy Name. Specify either one of the tenancy inputs (tenancy_ocid, tenancy_name, tenancy_id) or connection_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#tenancy_name OciExternalVault#tenancy_name}
  */
  readonly tenancyName?: string;
  /**
  * Tenancy OCID. Specify either one of the tenancy inputs (tenancy_ocid, tenancy_name, tenancy_id) or connection_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#tenancy_ocid OciExternalVault#tenancy_ocid}
  */
  readonly tenancyOcid?: string;
  /**
  * Vault name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#vault_name OciExternalVault#vault_name}
  */
  readonly vaultName: string;
}
export interface OciExternalVaultAcls {
}

export function ociExternalVaultAclsToTerraform(struct?: OciExternalVaultAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ociExternalVaultAclsToHclTerraform(struct?: OciExternalVaultAcls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OciExternalVaultAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OciExternalVaultAcls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OciExternalVaultAcls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class OciExternalVaultAclsList extends cdktf.ComplexList {

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
  public get(index: number): OciExternalVaultAclsOutputReference {
    return new OciExternalVaultAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault ciphertrust_oci_external_vault}
*/
export class OciExternalVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_external_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciExternalVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciExternalVault to import
  * @param importFromId The id of the existing OciExternalVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciExternalVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_external_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_vault ciphertrust_oci_external_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciExternalVaultConfig
  */
  public constructor(scope: Construct, id: string, config: OciExternalVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_external_vault',
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
    this._blocked = config.blocked;
    this._clientApplicationId = config.clientApplicationId;
    this._connectionId = config.connectionId;
    this._endpointUrlHostname = config.endpointUrlHostname;
    this._endpointUrlPort = config.endpointUrlPort;
    this._issuerId = config.issuerId;
    this._partitionId = config.partitionId;
    this._policy = config.policy;
    this._policyFile = config.policyFile;
    this._sourceKeyTier = config.sourceKeyTier;
    this._tenancyId = config.tenancyId;
    this._tenancyName = config.tenancyName;
    this._tenancyOcid = config.tenancyOcid;
    this._vaultName = config.vaultName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acls - computed: true, optional: false, required: false
  private _acls = new OciExternalVaultAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }

  // blocked - computed: true, optional: true, required: false
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

  // client_application_id - computed: false, optional: false, required: true
  private _clientApplicationId?: string; 
  public get clientApplicationId() {
    return this.getStringAttribute('client_application_id');
  }
  public set clientApplicationId(value: string) {
    this._clientApplicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientApplicationIdInput() {
    return this._clientApplicationId;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // endpoint_url_hostname - computed: false, optional: true, required: false
  private _endpointUrlHostname?: string; 
  public get endpointUrlHostname() {
    return this.getStringAttribute('endpoint_url_hostname');
  }
  public set endpointUrlHostname(value: string) {
    this._endpointUrlHostname = value;
  }
  public resetEndpointUrlHostname() {
    this._endpointUrlHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlHostnameInput() {
    return this._endpointUrlHostname;
  }

  // endpoint_url_port - computed: false, optional: true, required: false
  private _endpointUrlPort?: number; 
  public get endpointUrlPort() {
    return this.getNumberAttribute('endpoint_url_port');
  }
  public set endpointUrlPort(value: number) {
    this._endpointUrlPort = value;
  }
  public resetEndpointUrlPort() {
    this._endpointUrlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlPortInput() {
    return this._endpointUrlPort;
  }

  // external_vault_type - computed: true, optional: false, required: false
  public get externalVaultType() {
    return this.getStringAttribute('external_vault_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_id - computed: false, optional: false, required: true
  private _issuerId?: string; 
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }
  public set issuerId(value: string) {
    this._issuerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerIdInput() {
    return this._issuerId;
  }

  // linked_state - computed: true, optional: false, required: false
  public get linkedState() {
    return this.getBooleanAttribute('linked_state');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
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

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_file - computed: false, optional: true, required: false
  private _policyFile?: string; 
  public get policyFile() {
    return this.getStringAttribute('policy_file');
  }
  public set policyFile(value: string) {
    this._policyFile = value;
  }
  public resetPolicyFile() {
    this._policyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFileInput() {
    return this._policyFile;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenancy_id - computed: true, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // tenancy_name - computed: true, optional: true, required: false
  private _tenancyName?: string; 
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }
  public set tenancyName(value: string) {
    this._tenancyName = value;
  }
  public resetTenancyName() {
    this._tenancyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyNameInput() {
    return this._tenancyName;
  }

  // tenancy_ocid - computed: true, optional: true, required: false
  private _tenancyOcid?: string; 
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }
  public set tenancyOcid(value: string) {
    this._tenancyOcid = value;
  }
  public resetTenancyOcid() {
    this._tenancyOcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyOcidInput() {
    return this._tenancyOcid;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vault_name - computed: false, optional: false, required: true
  private _vaultName?: string; 
  public get vaultName() {
    return this.getStringAttribute('vault_name');
  }
  public set vaultName(value: string) {
    this._vaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNameInput() {
    return this._vaultName;
  }

  // vault_type - computed: true, optional: false, required: false
  public get vaultType() {
    return this.getStringAttribute('vault_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked: cdktf.booleanToTerraform(this._blocked),
      client_application_id: cdktf.stringToTerraform(this._clientApplicationId),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      endpoint_url_hostname: cdktf.stringToTerraform(this._endpointUrlHostname),
      endpoint_url_port: cdktf.numberToTerraform(this._endpointUrlPort),
      issuer_id: cdktf.stringToTerraform(this._issuerId),
      partition_id: cdktf.stringToTerraform(this._partitionId),
      policy: cdktf.stringToTerraform(this._policy),
      policy_file: cdktf.stringToTerraform(this._policyFile),
      source_key_tier: cdktf.stringToTerraform(this._sourceKeyTier),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
      tenancy_name: cdktf.stringToTerraform(this._tenancyName),
      tenancy_ocid: cdktf.stringToTerraform(this._tenancyOcid),
      vault_name: cdktf.stringToTerraform(this._vaultName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked: {
        value: cdktf.booleanToHclTerraform(this._blocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_application_id: {
        value: cdktf.stringToHclTerraform(this._clientApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_url_hostname: {
        value: cdktf.stringToHclTerraform(this._endpointUrlHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_url_port: {
        value: cdktf.numberToHclTerraform(this._endpointUrlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      issuer_id: {
        value: cdktf.stringToHclTerraform(this._issuerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_id: {
        value: cdktf.stringToHclTerraform(this._partitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_file: {
        value: cdktf.stringToHclTerraform(this._policyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_key_tier: {
        value: cdktf.stringToHclTerraform(this._sourceKeyTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_name: {
        value: cdktf.stringToHclTerraform(this._tenancyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_ocid: {
        value: cdktf.stringToHclTerraform(this._tenancyOcid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_name: {
        value: cdktf.stringToHclTerraform(this._vaultName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
