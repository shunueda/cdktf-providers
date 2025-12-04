// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_iot_provisioning_orgconfiguration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpConnectIotProvisioningOrgconfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GUID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_iot_provisioning_orgconfiguration#organization_guid DataHsdpConnectIotProvisioningOrgconfiguration#organization_guid}
  */
  readonly organizationGuid: string;
}
export interface DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig {
}

export function dataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigToTerraform(struct?: DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigToHclTerraform(struct?: DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // padding - computed: true, optional: false, required: false
  public get padding() {
    return this.getStringAttribute('padding');
  }

  // salt_length - computed: true, optional: false, required: false
  public get saltLength() {
    return this.getStringAttribute('salt_length');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigOutputReference {
    return new DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignature {
}

export function dataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureToTerraform(struct?: DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureToHclTerraform(struct?: DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureConfigList(this, "config", false);
  public get config() {
    return this._config;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
}

export class DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureList extends cdktf.ComplexList {

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
  public get(index: number): DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureOutputReference {
    return new DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHsdpConnectIotProvisioningOrgconfigurationServiceAccount {
}

export function dataHsdpConnectIotProvisioningOrgconfigurationServiceAccountToTerraform(struct?: DataHsdpConnectIotProvisioningOrgconfigurationServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHsdpConnectIotProvisioningOrgconfigurationServiceAccountToHclTerraform(struct?: DataHsdpConnectIotProvisioningOrgconfigurationServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHsdpConnectIotProvisioningOrgconfigurationServiceAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHsdpConnectIotProvisioningOrgconfigurationServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHsdpConnectIotProvisioningOrgconfigurationServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // service_account_key - computed: true, optional: false, required: false
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }
}

export class DataHsdpConnectIotProvisioningOrgconfigurationServiceAccountList extends cdktf.ComplexList {

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
  public get(index: number): DataHsdpConnectIotProvisioningOrgconfigurationServiceAccountOutputReference {
    return new DataHsdpConnectIotProvisioningOrgconfigurationServiceAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_iot_provisioning_orgconfiguration hsdp_connect_iot_provisioning_orgconfiguration}
*/
export class DataHsdpConnectIotProvisioningOrgconfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_iot_provisioning_orgconfiguration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpConnectIotProvisioningOrgconfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpConnectIotProvisioningOrgconfiguration to import
  * @param importFromId The id of the existing DataHsdpConnectIotProvisioningOrgconfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_iot_provisioning_orgconfiguration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpConnectIotProvisioningOrgconfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_iot_provisioning_orgconfiguration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_iot_provisioning_orgconfiguration hsdp_connect_iot_provisioning_orgconfiguration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpConnectIotProvisioningOrgconfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataHsdpConnectIotProvisioningOrgconfigurationConfig) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap_signature - computed: true, optional: false, required: false
  private _bootstrapSignature = new DataHsdpConnectIotProvisioningOrgconfigurationBootstrapSignatureList(this, "bootstrap_signature", false);
  public get bootstrapSignature() {
    return this._bootstrapSignature;
  }

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

  // service_account - computed: true, optional: false, required: false
  private _serviceAccount = new DataHsdpConnectIotProvisioningOrgconfigurationServiceAccountList(this, "service_account", false);
  public get serviceAccount() {
    return this._serviceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_guid: cdktf.stringToTerraform(this._organizationGuid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
