// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectIotProvisioningOrgconfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#organization_guid ConnectIotProvisioningOrgconfiguration#organization_guid}
  */
  readonly organizationGuid: string;
  /**
  * bootstrap_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#bootstrap_signature ConnectIotProvisioningOrgconfiguration#bootstrap_signature}
  */
  readonly bootstrapSignature: ConnectIotProvisioningOrgconfigurationBootstrapSignature;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#service_account ConnectIotProvisioningOrgconfiguration#service_account}
  */
  readonly serviceAccount: ConnectIotProvisioningOrgconfigurationServiceAccount;
}
export interface ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig {
  /**
  * Padding type (e.g., RSA_PKCS1_PSS_PADDING)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#padding ConnectIotProvisioningOrgconfiguration#padding}
  */
  readonly padding?: string;
  /**
  * Salt length (e.g., RSA_PSS_SALTLEN_MAX_SIGN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#salt_length ConnectIotProvisioningOrgconfiguration#salt_length}
  */
  readonly saltLength?: string;
  /**
  * Signature type (RSA, ECC, DSA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#type ConnectIotProvisioningOrgconfiguration#type}
  */
  readonly type?: string;
}

export function connectIotProvisioningOrgconfigurationBootstrapSignatureConfigToTerraform(struct?: ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigOutputReference | ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    padding: cdktf.stringToTerraform(struct!.padding),
    salt_length: cdktf.stringToTerraform(struct!.saltLength),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectIotProvisioningOrgconfigurationBootstrapSignatureConfigToHclTerraform(struct?: ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigOutputReference | ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    padding: {
      value: cdktf.stringToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salt_length: {
      value: cdktf.stringToHclTerraform(struct!.saltLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    if (this._saltLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.saltLength = this._saltLength;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._padding = undefined;
      this._saltLength = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._padding = value.padding;
      this._saltLength = value.saltLength;
      this._type = value.type;
    }
  }

  // padding - computed: false, optional: true, required: false
  private _padding?: string; 
  public get padding() {
    return this.getStringAttribute('padding');
  }
  public set padding(value: string) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }

  // salt_length - computed: false, optional: true, required: false
  private _saltLength?: string; 
  public get saltLength() {
    return this.getStringAttribute('salt_length');
  }
  public set saltLength(value: string) {
    this._saltLength = value;
  }
  public resetSaltLength() {
    this._saltLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltLengthInput() {
    return this._saltLength;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ConnectIotProvisioningOrgconfigurationBootstrapSignature {
  /**
  * Signature algorithm (e.g., RSA-SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#algorithm ConnectIotProvisioningOrgconfiguration#algorithm}
  */
  readonly algorithm: string;
  /**
  * Public key for bootstrap signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#public_key ConnectIotProvisioningOrgconfiguration#public_key}
  */
  readonly publicKey: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#config ConnectIotProvisioningOrgconfiguration#config}
  */
  readonly config?: ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig;
}

export function connectIotProvisioningOrgconfigurationBootstrapSignatureToTerraform(struct?: ConnectIotProvisioningOrgconfigurationBootstrapSignatureOutputReference | ConnectIotProvisioningOrgconfigurationBootstrapSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    config: connectIotProvisioningOrgconfigurationBootstrapSignatureConfigToTerraform(struct!.config),
  }
}


export function connectIotProvisioningOrgconfigurationBootstrapSignatureToHclTerraform(struct?: ConnectIotProvisioningOrgconfigurationBootstrapSignatureOutputReference | ConnectIotProvisioningOrgconfigurationBootstrapSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: connectIotProvisioningOrgconfigurationBootstrapSignatureConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectIotProvisioningOrgconfigurationBootstrapSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectIotProvisioningOrgconfigurationBootstrapSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectIotProvisioningOrgconfigurationBootstrapSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._publicKey = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._publicKey = value.publicKey;
      this._config.internalValue = value.config;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface ConnectIotProvisioningOrgconfigurationServiceAccount {
  /**
  * Service account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#service_account_id ConnectIotProvisioningOrgconfiguration#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * Service account private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#service_account_key ConnectIotProvisioningOrgconfiguration#service_account_key}
  */
  readonly serviceAccountKey: string;
}

export function connectIotProvisioningOrgconfigurationServiceAccountToTerraform(struct?: ConnectIotProvisioningOrgconfigurationServiceAccountOutputReference | ConnectIotProvisioningOrgconfigurationServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    service_account_key: cdktf.stringToTerraform(struct!.serviceAccountKey),
  }
}


export function connectIotProvisioningOrgconfigurationServiceAccountToHclTerraform(struct?: ConnectIotProvisioningOrgconfigurationServiceAccountOutputReference | ConnectIotProvisioningOrgconfigurationServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectIotProvisioningOrgconfigurationServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectIotProvisioningOrgconfigurationServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._serviceAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountKey = this._serviceAccountKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectIotProvisioningOrgconfigurationServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountId = undefined;
      this._serviceAccountKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountId = value.serviceAccountId;
      this._serviceAccountKey = value.serviceAccountKey;
    }
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // service_account_key - computed: false, optional: false, required: true
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }
  public set serviceAccountKey(value: string) {
    this._serviceAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration hsdp_connect_iot_provisioning_orgconfiguration}
*/
export class ConnectIotProvisioningOrgconfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_iot_provisioning_orgconfiguration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectIotProvisioningOrgconfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectIotProvisioningOrgconfiguration to import
  * @param importFromId The id of the existing ConnectIotProvisioningOrgconfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectIotProvisioningOrgconfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_iot_provisioning_orgconfiguration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/connect_iot_provisioning_orgconfiguration hsdp_connect_iot_provisioning_orgconfiguration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectIotProvisioningOrgconfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectIotProvisioningOrgconfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_iot_provisioning_orgconfiguration',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationGuid = config.organizationGuid;
    this._bootstrapSignature.internalValue = config.bootstrapSignature;
    this._serviceAccount.internalValue = config.serviceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_guid - computed: false, optional: false, required: true
  private _organizationGuid?: string; 
  public get organizationGuid() {
    return this.getStringAttribute('organization_guid');
  }
  public set organizationGuid(value: string) {
    this._organizationGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationGuidInput() {
    return this._organizationGuid;
  }

  // bootstrap_signature - computed: false, optional: false, required: true
  private _bootstrapSignature = new ConnectIotProvisioningOrgconfigurationBootstrapSignatureOutputReference(this, "bootstrap_signature");
  public get bootstrapSignature() {
    return this._bootstrapSignature;
  }
  public putBootstrapSignature(value: ConnectIotProvisioningOrgconfigurationBootstrapSignature) {
    this._bootstrapSignature.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapSignatureInput() {
    return this._bootstrapSignature.internalValue;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount = new ConnectIotProvisioningOrgconfigurationServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: ConnectIotProvisioningOrgconfigurationServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_guid: cdktf.stringToTerraform(this._organizationGuid),
      bootstrap_signature: connectIotProvisioningOrgconfigurationBootstrapSignatureToTerraform(this._bootstrapSignature.internalValue),
      service_account: connectIotProvisioningOrgconfigurationServiceAccountToTerraform(this._serviceAccount.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_guid: {
        value: cdktf.stringToHclTerraform(this._organizationGuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_signature: {
        value: connectIotProvisioningOrgconfigurationBootstrapSignatureToHclTerraform(this._bootstrapSignature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectIotProvisioningOrgconfigurationBootstrapSignatureList",
      },
      service_account: {
        value: connectIotProvisioningOrgconfigurationServiceAccountToHclTerraform(this._serviceAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectIotProvisioningOrgconfigurationServiceAccountList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
